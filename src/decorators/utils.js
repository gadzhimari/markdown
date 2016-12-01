/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

import type { Decorator, Range } from '../types';

export function matchByRegex(regex: RegExp, text: string): Range[] {
  const ranges = [];

  let matches;
  while ((matches = regex.exec(text)) !== null) {
    const full = matches[0];

    let start = matches.index;
    let end = start + full.length;

    if (matches.length === 2) {
      const part = matches[1];

      const startDiff = full.indexOf(part);
      start += startDiff;

      end -= full.length - (startDiff + part.length);
    }

    ranges.push({ start, end });
  }

  return ranges;
}

export function createRegexDecorator(name: string, regex: RegExp): Decorator {
  return {
    name,
    strategy(text) {
      return matchByRegex(regex, text);
    }
  };
}

export function matchBetweenChar(char: string, text: string, replace?: boolean): Range[] {
  const ranges = [];

  let start = 0;
  let end = 0;
  while (start >= 0 && start < text.length) {
    start = text.indexOf(char, start);
    if (start >= 0) {
      end = text.indexOf(char, start + 1);
      if (end > 0) {
        ranges.push({
          start,
          end: end + 1,
          replace: replace ? text.slice(start + 1, end) : text.slice(start, end + 1)
        });
        start = end + 1;
      } else {
        start = -1;
      }
    }
  }

  return ranges;
}

export function createBetweenDecorator(name: string, char: string, replace?: boolean): Decorator {
  return {
    name,
    strategy(text) {
      return matchBetweenChar(char, text, replace);
    }
  };
}

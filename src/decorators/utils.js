/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

import type { Decorator, Range } from '../types';

export function findWithRegex(regex: RegExp, text: string): Range[] {
  const ranges = [];

  let matchArr, start;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    ranges.push({
      start,
      end: start + matchArr[0].length
    });
  }

  return ranges;
}

export function createRegexDecorator(name: string, regex: RegExp): Decorator {
  return {
    name,
    strategy(text) {
      return findWithRegex(regex, text);
    }
  };
}

export function findBetween(char: string, text: string, replace?: boolean): Range[] {
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
      return findBetween(char, text, replace);
    }
  };
}

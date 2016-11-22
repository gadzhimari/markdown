/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

import type { TextToken, Range, Decorator } from '../types';

function process(tokens: TextToken[], decorator: Decorator): TextToken[] {
  const result = [];
  for (const token of tokens) {
    if (token.type === 'text' && !token.highlight) {
      // todo: check in dev mode, ranges are sorted
      const ranges = decorator.strategy(token.content);

      let last = 0;
      for (const { start, end, replace } of ranges) {
        if (start > last) {
          result.push({
            type: 'text',
            content: token.content.slice(last, start)
          })
        }

        result.push({
          type: 'text',
          content: replace || token.content.slice(start, end),
          highlight: decorator.name
        });

        last = end;
      }

      if (last < token.content.length) {
        result.push({
          type: 'text',
          content: token.content.slice(last)
        });
      }
    } else {
      result.push(token);
    }
  }

  return result;
}

function parse(text: string, decorators: Decorator[] = []): TextToken[] {
  let tokens = [{ type: 'text', content: text }];

  for (const decorator of decorators) {
    tokens = process(tokens, decorator);
  }

  return tokens;
}

export default parse;
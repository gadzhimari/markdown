/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 */

import parse from './inline';

describe('inline parsing', () => {
  const test = (text, result) => expect(parse(text)).toEqual(result);
  const tests = (texts, result) => texts.forEach((text) => test(text, result));

  it('should convert text to token list', () => {
    expect(parse('Hello, world')).toEqual([
      {
        type: 'text',
        content: 'Hello, world'
      }
    ]);
  });

  it('should correctly split text using decorators', () => {
    const test = {
      name: 'test',
      strategy() {
        return [
          { start: 2, end: 5 },
          { start: 8, end: 10 }
        ];
      }
    };

    expect(parse('0123456789', [test])).toEqual([
      {
        type: 'text',
        content: '01'
      },
      {
        type: 'text',
        content: '234',
        highlight: 'test'
      },
      {
        type: 'text',
        content: '567'
      },
      {
        type: 'text',
        content: '89',
        highlight: 'test'
      }
    ]);
  });
  
  it('should supports replace', () => {
    const test = {
      name: 'test',
      strategy() {
        return [
          { start: 2, end: 5, replace: 'hello' },
          { start: 8, end: 10, replace: 'world' }
        ];
      }
    };

    expect(parse('0123456789', [test])).toEqual([
      {
        type: 'text',
        content: '01'
      },
      {
        type: 'text',
        content: 'hello',
        highlight: 'test'
      },
      {
        type: 'text',
        content: '567'
      },
      {
        type: 'text',
        content: 'world',
        highlight: 'test'
      }
    ]);
  });
});
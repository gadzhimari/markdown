/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 */

import {
  code,
  bold,
  italic,
  strike,
  link,
  mention
} from './index';

export function testDecorator(decorator, cases) {
  describe(decorator.name, () => {
    cases.forEach(({ text, result }) => {
      it(text, () => {
        expect(decorator.strategy(text)).toEqual(result);
      });
    });
  });
}

describe('decorators', () => {
  testDecorator(code, [{
    text: '`code`',
    result: [
      { start: 0, end: 6, replace: 'code' }
    ]
  }, {
    text: '`co`de`',
    result: [
      { start: 0, end: 4, replace: 'co' }
    ]
  }]);

  testDecorator(bold, [{
    text: '*bold*',
    result: [
      { start: 0, end: 6, replace: 'bold' }
    ]
  }, {
    text: '*bo*ld*',
    result: []
  }]);

  testDecorator(italic, [{
    text: '_italic_',
    result: [
      { start: 0, end: 8, replace: 'italic' }
    ]
  }, {
    text: 'some_dashed_value',
    result: []
  }]);

  testDecorator(strike, [{
    text: '~strike~',
    result: [
      { start: 0, end: 8, replace: 'strike' }
    ]
  }, {
    text: '~/react/~/fbjs',
    result: []
  }, {
    text: 'some~strike~value',
    result: []
  }]);

  testDecorator(link, [{
    text: 'http://google.com',
    result: [
      { start: 0, end: 17, replace: 'http://google.com' }
    ]
  }, {
    text: 'http://google.com, check this out: ',
    result: [
      { start: 0, end: 17, replace: 'http://google.com' }
    ]
  }]);

  testDecorator(mention, [{
    text: '@gusnkt',
    result: [
      { start: 0, end: 7, replace: '@gusnkt' }
    ]
  }, {
    text: '(@gusnkt)',
    result: [
      { start: 1, end: 8, replace: '@gusnkt' }
    ]
  }, {
    text: '@all',
    result: [
      { start: 0, end: 4, replace: '@all' }
    ]
  }]);
});

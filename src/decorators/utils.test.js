/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 */

import { findBetween } from './utils';

describe('decorators utils', () => {
  describe('findBetween', () => {
    it('should find and replace with char', () => {
      expect(findBetween('*', 'Hello *world*')).toEqual([
        { start: 6, end: 13, replace: '*world*' }
      ]);
    });

    it('should find and replace without char', () => {
      expect(findBetween('*', 'Hello *world*', true)).toEqual([
        { start: 6, end: 13, replace: 'world' }
      ]);
    });

    it('should find multiple', () => {
      expect(findBetween('*', 'Hello *world*. *How* are *you doing*?')).toEqual([
        { start: 6, end: 13, replace: '*world*' },
        { start: 15, end: 20, replace: '*How*' },
        { start: 25, end: 36, replace: '*you doing*' }
      ]);
    });
  });
});

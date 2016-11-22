/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

import { createRegexDecorator, createBetweenDecorator } from './utils';

export const bold = createBetweenDecorator('bold', '*', true);
export const code = createBetweenDecorator('code', '`', true);
export const italic = createBetweenDecorator('italic', '_', true);

export const link = createRegexDecorator('link', /(?:https?|ftp):\/\/[\da-z\.-]+\.[a-z\.]{2,6}(?:\??[0-9a-z/\\#<>_-]*)*\/?/ig);
export const mention = createRegexDecorator('mention', /(?:^| )@[a-z0-9_]{5,32}/ig);

const decorators = [
  code,
  link,
  bold,
  italic,
  mention
];

export default decorators;

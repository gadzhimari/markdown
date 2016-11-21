/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

import { createRegexDecorator, createBetweenDecorator } from './utils';

export const bold = createBetweenDecorator('bold', '*');
export const code = createBetweenDecorator('code', '`');
export const italic = createBetweenDecorator('italic', '_');

export const link = createRegexDecorator('link', /(?:https?:\/\/){0,1}[\da-z\.-]+\.[a-z\.]{2,6}(?:\??[0-9a-z/\\#<>_-]*)*\/?/ig);
export const mention = createRegexDecorator('mention', /(?:^| )@[a-z0-9_]{5,32}/ig);

const decorators = [
  code,
  bold,
  italic,
  link,
  mention
];

export default decorators;
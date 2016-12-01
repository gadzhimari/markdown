/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

import { createRegexDecorator, createBetweenDecorator } from './utils';

export const bold = createBetweenDecorator('bold', '*', true);
export const code = createBetweenDecorator('code', '`', true);
export const italic = createBetweenDecorator('italic', '_', true);
export const strike = createBetweenDecorator('strike', '-', true);

export const link = createRegexDecorator(
  'link',
  /(?:https?|ftp):\/\/[0-9a-z.-]+\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.,~#!'"$?&*\/=()]*)/ig
);

export const mention = createRegexDecorator(
  'mention',
  /(?:^|[ .,#!$%^&*;:{}=_`~()\/-])(@[a-z0-9_]{5,32})/ig
);

const decorators = [
  code,
  link,
  bold,
  italic,
  strike,
  mention
];

export default decorators;

/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

import { createRegexDecorator, createBetweenDecorator } from './utils';

export const code = createBetweenDecorator('code', '`', true);

export const bold = createRegexDecorator(
  'bold',
  /(?:^|[ .,#!$%^&;:{}=_`~()\/-])(\*[^*]+\*)(?:$|[ .,#!$%^&;:{}=_`~()\/-])/g
);

export const italic = createRegexDecorator(
  'italic',
  /(?:^|[ .,#!$%^&*;:{}=`~()\/-])(_[^_]+_)(?:$|[ .,#!$%^&*;:{}=`~()\/-])/g
);

export const strike = createRegexDecorator(
  'strike',
  /(?:^|[ .,#!$%^&*;:{}=_`()\/-])(~[^~]+~)(?:$|[ .,#!$%^&*;:{}=_`()\/-])/g
);

export const link = createRegexDecorator(
  'link',
  /((?:https?|ftp):\/\/\S+)(?:$|[.,!;:-])/ig
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

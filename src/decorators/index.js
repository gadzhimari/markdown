/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

import { emoji, namedEmoji } from './emoji';
import { createRegexDecorator, createBetweenDecorator } from './utils';

export const code = createBetweenDecorator('code', '`', true);

export const bold = createRegexDecorator(
  'bold',
  /(?:^|[ .,#!$%^&;:{}=_`~()\/-])(\*[^*]+\*)(?:$|[ .,#!$%^&;:{}=_`~()\/-])/g,
  (match: string) => match.slice(1, match.length - 1)
);

export const italic = createRegexDecorator(
  'italic',
  /(?:^|[ .,#!$%^&*;:{}=`~()\/-])(_[^_]+_)(?:$|[ .,#!$%^&*;:{}=`~()\/-])/g,
  (match: string) => match.slice(1, match.length - 1)
);

export const strike = createRegexDecorator(
  'strike',
  /(?:^|[ .,#!$%^&*;:{}=_`()-])(~[^~]+~)(?:$|[ .,#!$%^&*;:{}=_`()-])/g,
  (match: string) => match.slice(1, match.length - 1)
);

export const link = createRegexDecorator(
  'link',
  /((?:https?|ftp):\/\/\S+)(?:$|[.,!;:])/ig
);

export const mention = createRegexDecorator(
  'mention',
  /(?:^|[ .,#!$%^&*;:{}=_`~()\/-])(@(?:all|[a-z0-9_]{5,32}))/ig
);

const decorators = [
  code,
  link,
  bold,
  italic,
  strike,
  mention,
  emoji,
  namedEmoji,
];

export {
  emoji,
  namedEmoji
};

export default decorators;

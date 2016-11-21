/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 */

import Markdown from 'markdown-it';
import { highlight } from './highlight';
import dialog from './plugin';
import parse from './parser';
import decorators from './decorators';

const md = new Markdown('default', {
  highlight,
  html: false,
  linkify: true,
  typographer: false
});

md.use(dialog);

const render = md.render.bind(md);

export {
  parse,
  decorators
};

export default render;

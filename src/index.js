/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 */

import Markdown from 'markdown-it';
import { highlight } from './highlight';
import dialog from './plugin';

const md = new Markdown('default', {
  highlight,
  html: false,
  linkify: true,
  typographer: false
});

md.use(dialog);

const render = md.render.bind(md);

export default render;

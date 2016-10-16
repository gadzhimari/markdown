/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 */

import Markdown from 'markdown-it';
import hljs from './highlight';

const md = new Markdown({
  html: false,
  breaks: true,
  linkify: true,
  typographer: false,
  highlight(code) {
    const { value } = hljs.highlightAuto(code);
    return value;
  }
});

function markdown(text: string): string {
  return md.render(text);
}

export default markdown;

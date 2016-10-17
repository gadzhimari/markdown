/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 */

function parse(state, startLine) {
  let token;
  const nextLine = startLine + 1;
  const oldParentType = state.parentType;
  state.parentType = 'paragraph';

  const content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

  state.line = nextLine;

  token = state.push('paragraph_open', 'p', 1);
  token.map = [startLine, state.line];

  token = state.push('inline', '', 0);
  token.content = content;
  token.map = [startLine, state.line];
  token.children = [];

  state.push('paragraph_close', 'p', -1);

  state.parentType = oldParentType;

  return true;
}

function paragraph(md) {
  md.block.ruler.at('paragraph', parse);
}

export default paragraph;

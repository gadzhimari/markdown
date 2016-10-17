/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 */

function open(tokens, idx) {
  const href = tokens[idx].content;
  const className = tokens[idx].mentionClass;

  return `<a href="${href}" class="${className}">`;
}

function text(tokens, idx) {
  return tokens[idx].content;
}

function close() {
  return '</a>';
}

function parseText(state, token) {
  const tokens = [];
  token.content.replace(/@[A-Za-z0-9_]{5,32}/g, (match, position, text) => {
    if (position === 0) {

    }
    return match;
  });

  if (!tokens.length) {
    return [token];
  }

  return tokens;
}

function parse(state) {
  state.tokens.forEach((blockToken) => {
    if (blockToken.type !== 'inline') {
      return;
    }

    const nextChildren = [];

    blockToken.children.forEach((token) => {
      if (token.type === 'text') {
        nextChildren.push(...parseText(state, token));
      } else {
        nextChildren.push(token);
      }
    });
  });
}

function mention(md) {
  md.core.ruler.after('inline', 'mention', parse);
  md.renderer.rules.mention_open = open;
  md.renderer.rules.mention_text = text;
  md.renderer.rules.mention_close = close;
}

export default mention;
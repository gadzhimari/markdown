/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 */

function replaceTokens(state, tokens) {
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.children) {
      replaceTokens(state, token.children);
    }

    if (token.type === 'link_open') {
      token.attrSet('target', '_blank');
      token.attrSet('rel', 'noopener noreferrer');
    }
  }
}

function replace(state) {
  replaceTokens(state, state.tokens);
}

function links(md) {
  md.core.ruler.push('safe_links', replace);
}

export default links;
/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

export type TokenOptions = { [key: string]: mixed };

export interface Range {
  start: number,
  end: number,
  replace?: string,
  options?: TokenOptions
};

export interface Decorator {
  name: string,
  strategy(text: string): Range[]
};

export interface TextToken {
  content: string,
  highlight?: string,
  options?: ?TokenOptions
};

export interface ParagraphToken {
  type: 'paragraph',
  content: TextToken[]
};

export interface CodeBlockToken {
  type: 'code_block',
  content: string
};

export interface BlockquoteToken {
  type: 'blockquote',
  content: BlockToken[]
};

export type BlockToken = ParagraphToken | CodeBlockToken | BlockquoteToken;

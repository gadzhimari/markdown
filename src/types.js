/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

export type Range = {
  start: number,
  end: number,
  replace?: string
};

export type Strategy = (text: string) => Range[];

export type Decorator = {
  name: string,
  strategy: Strategy
};

export type TextToken = {
  type: 'text',
  content: string,
  highlight?: string
};

export type ParagraphToken = {
  type: 'paragraph',
  content: TextToken[]
};

export type CodeBlockToken = {
  type: 'code_block',
  content: string
};

export type BlockquoteToken = {
  type: 'blockquote',
  content: BlockToken[]
};

export type BlockToken = ParagraphToken | CodeBlockToken | BlockquoteToken;

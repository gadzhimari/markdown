/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

export function isBlockquote(text: string): boolean {
  return /^\s*>/.test(text);
}

export function cleanBlockquote(text: string): string {
  return text.replace(/^\s*>\s*/, '');
}

export function isCodeStart(text: string): boolean {
  return /^```/.test(text);
}

export function isEmptyCodeStart(text: string): boolean {
  return /^```\s*$/.test(text);
}

export function cleanCodeStart(text: string): string {
  return text.replace(/^```/, '');
}

export function isCodeEnd(text: string): boolean {
  return /```$/.test(text);
}

export function isEmptyCodeEnd(text: string): boolean {
  return /^\s*```$/.test(text);
}

export function cleanCodeEnd(text: string): string {
  return text.replace(/```$/, '');
}

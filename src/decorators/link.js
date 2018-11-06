/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

const pattern = /(?:\[(.+)\]\()?((?:https?|ftp):\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/\/=():!,\'\'\*]*))/gi;

function isPunctuation(char: string): boolean {
  return char === '.' || char === ',' || char === ':';
}

function indexOf(
  text: string,
  char: string,
  startIndex: number,
  endIndex: number,
): number {
  for (let i = startIndex; i <= endIndex; i++) {
    if (text.charAt(i) === char) {
      return i;
    }
  }

  return -1;
}

function getBraceDepth(text: string): number {
  let depth = 0;
  let prevOpenIndex = 0;
  for (let i = text.length - 1; i >= 0; i--) {
    const char = text.charAt(i);
    if (char === ')') {
      const openIndex = indexOf(text, '(', prevOpenIndex + 1, i);
      if (openIndex === -1) {
        depth += 1;
      } else {
        prevOpenIndex = openIndex;
      }
    } else {
      break;
    }
  }

  return depth;
}

export const link = {
  name: 'link',
  strategy(text: string) {
    const ranges = [];

    let matches;
    for (
      let matches = pattern.exec(text);
      matches !== null;
      matches = pattern.exec(text)
    ) {
      const name = matches[1];

      let link = matches[2];
      const braceDepth = getBraceDepth(link);
      if (braceDepth > 0) {
        if (name) {
          link = link.slice(0, link.length - braceDepth + 1);
        } else {
          link = link.slice(0, link.length - braceDepth);
        }
      }

      const start = matches.index;
      const end = start + link.length;

      const lastLinkChar = link.charAt(link.length - 1);

      if (name && lastLinkChar === ')') {
        ranges.push({
          start,
          end: end + name.length + 3,
          replace: name,
          options: {
            url: link.slice(0, link.length - 1),
          },
        });
      } else if (isPunctuation(lastLinkChar)) {
        ranges.push({
          start,
          end: end - 1,
          replace: link.slice(0, link.length - 1),
        });
      } else {
        ranges.push({
          start,
          end,
          replace: link,
        });
      }
    }

    return ranges;
  },
};

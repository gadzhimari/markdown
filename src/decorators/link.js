/*
 * Copyright 2016 Dialog LLC <info@dlg.im>
 * @flow
 */

const pattern = /(?:https?|ftp):\/\/\S+/ig;

function isPunctuation(text: string): boolean {
  return (/[.,:]/).test(text);
}

export const link = {
  name: 'link',
  strategy(text: string) {
    const ranges = [];

    let matches;
    while ((matches = pattern.exec(text)) !== null) {
      const link = matches[0];
      const start = matches.index;
      const end = start + link.length;

      if (isPunctuation(link.charAt(link.length - 1))) {
        ranges.push({
          start,
          end: end - 1,
          replace: link.slice(0, link.length - 1)
        });
      } else {
        ranges.push({
          start,
          end,
          replace: link
        });
      }
    }

    return ranges;
  }
};

import path from 'path';
import testgen from 'markdown-it-testgen';
import minifier from 'html-minifier';
import markdown from '../index';

describe('markdown', () => {
  function minify(html) {
    return minifier.minify(html, {
      sortAttributes: true,
      collapseWhitespace: true
    });
  }

  const spec = path.resolve(__dirname, 'spec.txt');

  testgen.load(spec, {}, ({ fixtures }) => {
    fixtures.forEach(({ header, first, second }) => {
      it(header, () => {
        const actual = markdown(first.text.trimRight());
        const expected = second.text.trimRight();

        expect(minify(actual)).toBe(minify(expected));
      });
    });
  });
});

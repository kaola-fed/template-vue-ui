import { storiesOf } from '@storybook/vue';
import { withDocs, withReadme }  from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs/vue';

export function assemble(stories) {
  const {
    chapter,
    README = '',
    useKnobs = true,
    useDocs = true,
    useReadme = true,
    cases = {},
  } = stories;

  if (!chapter) {
    return;
  }

  const storyBook = storiesOf(chapter, module);
  useKnobs && storyBook.addDecorator(withKnobs);
  README && useDocs && storyBook.addDecorator(withDocs(README));
  README && useReadme && storyBook.addDecorator(withReadme(README));

  Object.keys(cases).forEach((k) => {
    const c = cases[k];
    if (typeof c === 'function') {
      storyBook.add(k, c);
    }
  })
}
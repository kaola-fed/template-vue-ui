import { storiesOf } from '@storybook/vue';
import * as config from '../library.config';

export default {
  play() {
    storiesOf('KaolaUI', module)
      .add('introduction', () => ({
        template: `<h1>Hello ${config.scope}</h1>`,
        methods: {
        },
      }));
  }
}

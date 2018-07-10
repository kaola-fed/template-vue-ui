import { configure, addDecorator } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import '@storybook/addon-console/dist';
import stories from '.';
import * as config from '../library.config';
import Vuex from 'vuex';
import Vue from 'vue';
import { assemble } from './helper';

setOptions({
  name: config.scope,
  url: '#',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: true,
  hierarchySeparator: null,
  hierarchyRootSeparator: null,
  sidebarAnimations: true,
  selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
  enableShortcuts: false, // true by default
})

// Install Vue plugins.
Vue.use(Vuex);

function loadStories() {
  // You can require as many stories as you need.
  stories.play();

  const req = require.context('../packages/', true, /\.?stories\.js$/); 

  req.keys().forEach(filename => {
    const stories = req(filename);
    assemble(stories);
  });
}

configure(loadStories, module);
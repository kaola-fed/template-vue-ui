import Component from '../index';

// vue-test-utils: https://163.lu/k/mUoEC4
import { shallowMount } from '@vue/test-utils';

describe('<%= componentName %>', () => {
  it('renders component', () => {
    const label = '<%= componentName %>';
    const wrapper = shallowMount(Component, {
    })
    expect(wrapper.text()).toBe(label)
  })
});
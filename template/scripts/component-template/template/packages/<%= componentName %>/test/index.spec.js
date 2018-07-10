import Component from '..';
import { shallowMount } from '@vue/test-utils';

describe('<%= component %>', () => {
  it('renders component', () => {
    const label = '<%= component %>';
    const wrapper = shallowMount(Component, {
    })
    expect(wrapper.text()).toBe(label)
  })
});
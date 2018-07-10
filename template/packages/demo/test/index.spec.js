import Component from '../src';
import { shallowMount } from '@vue/test-utils';

describe('demo', () => {
  it('renders props.label when passed', () => {
    const label = 'demo';
    const wrapper = shallowMount(Component, {
      propsData: { label }
    })
    expect(wrapper.text()).toBe(label)
  })
});
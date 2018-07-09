import Button from 'components/demo-button';

// vue-test-utils: https://163.lu/k/mUoEC4
import { shallowMount } from '@vue/test-utils';

describe('demo-button', () => {
  it('renders props.label when passed', () => {
    const label = 'button';
    const wrapper = shallowMount(Button, {
      propsData: { label }
    })
    expect(wrapper.text()).toBe(label)
  })
});
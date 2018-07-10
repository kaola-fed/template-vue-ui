import Component from '../index';
import { boolean } from '@storybook/addon-knobs/vue';

// README
export { default as README } from '../README.md';

// chapter title
export const chapter = 'demo';

// case
export const cases = {
    测试按钮() {
        let rounded = boolean('rounded', true);
        return {
            components: {
                [Component.name]: Component
            },
            template: `
            <demo-button label="This is a button" :rounded="${rounded}" @click="onClick"></demo-button>
            `,
            methods: {
                onClick(e) {
                    console.log('@click', e);
                }
            }
        };
    }
};
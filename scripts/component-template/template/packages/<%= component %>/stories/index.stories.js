import Component from '../index';

// README
export { default as README } from '../README.md';

// chapter title
export const chapter = '<%= component %>';

// case
export const cases = {
    '<%= component %>'() {
        return {
            components: {
                [Component.name]: Component
            },
            template: `
            <<%= component %>></<%= component %>>
            `,
            methods: {
            }
        };
    }
}

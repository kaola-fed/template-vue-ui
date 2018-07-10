const _ = require('./helper');
const config = require('../../library.config');
const {
  scope,
  prefix,
} = config;

function formatComponent(componentName = '') {
    return `${prefix}-${componentName}`;
}

module.exports = {
  enforceCurrentFolder: true,
  prompts: {
    componentName: {
      message(answers) {
        return `请输入组件名称: ${formatComponent()}\${componentName}`;
      },
    },
  },
  data(answers) {
    const {
      componentName
    } = answers;

    return {
      scope,
      component: formatComponent(componentName)
    };
  },
  move(answers) {
    const folders = _.renderFolder('./', answers);
    return folders;
  }
}
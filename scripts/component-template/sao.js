const _ = require('./helper');
const config = require('../../library.config');
const {
  scope,
  prefix,
  groupPrefixes,
  groups
} = config;

function formatComponent(group = '', componentName = '') {
    const compPrefix = groupPrefixes[group] || prefix || group;
    return `${compPrefix}-${componentName}`;
}

module.exports = {
  enforceCurrentFolder: true,
  prompts: {
    group: {
      type: 'rawlist',
      choices: groups,
      message() {
        return '请选择分类名称:';
      },
    },
    componentName: {
      message(answers) {
        return `请输入组件名称: ${formatComponent(answers.group)}\${componentName}`;
      },
    },
  },
  data(answers) {
    const {
      group,
      componentName
    } = answers;

    return {
      scope,
      component: formatComponent(group, componentName)
    };
  },
  move(answers) {
    const folders = _.renderFolder('./', answers);
    return folders;
  }
}
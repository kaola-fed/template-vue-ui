const _ = require('./template/scripts/component-template/helper');

module.exports = {
  prompts: {
    scope: {
      message: `请输入组件库 scope:`,
      defaults: `kaola`
    },
    prefix: {
      message: `请输入组件前缀:`,
      defaults: 'kl'
    },
  },
  skipInterpolation: [
    'scripts/**/*'
  ],
  move(answers) {
    const folders = _.renderFolder('../../../packages', answers);
    return Object.assign(folders, {
      'gitignore': '.gitignore'
    });
  }
}
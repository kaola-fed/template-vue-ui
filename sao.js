const _ = require('./template/scripts/component-template/helper');

const registry = {
  npmjs: 'https://registry.npmjs.org',
  taobao: 'https://registry.npm.taobao.org',
  netease: 'http://rnpm.hz.netease.com',
};

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
    npmRegistryName: {
      type: 'rawlist',
      message: `请选择 npm 源`,
      choices: Object.keys(registry)
    }
  },
  data(answers) {
    answers.npmRegistry = registry[answers.npmRegistryName];
  },
  skipInterpolation: [
    'scripts/**/*'
  ],
  move(answers) {
    const folders = _.renderFolder('../../../packages', answers);
    return Object.assign(folders, {
      'gitignore': '.gitignore'
    });
  },
  // installDependencies: true,
}
const _ = require('./helper');

module.exports = {
  enforceCurrentFolder: true,
  prompts: {
    componentName: {
      message: '输入组件名称:'
    }
  },
  move(answers) {
    const {
      componentName
    } = answers;

    const folders = _.renderFolder('./', {
      componentName
    });
    console.log(folders);
    return folders;
  }
}
const pathTo = require('path');
const fs = require('fs');

function resolve(...args) {
  return pathTo.resolve(__dirname, './template', ...args);
}

function getFiles(path, res = []) {
  const files = fs.readdirSync(resolve(path));
  files.forEach((file) => {
    const filePath = resolve(path, file)
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      res = res.concat(getFiles(filePath));
    } else {
      res.push(filePath);
    }
  });

  const context = resolve('./');

  res = res.map((file) => file.replace(`${context}/`, ''));
  return res;
}

function renderFilesPath(files, obj) {
  return files.reduce((res, file) => {
    keys = file.match(/(?<=<%=\s*)([^<|%|\s]*)(?=\s*%>)/g) || [];
    const toFile = keys.reduce((f, k) => {
      const reg = new RegExp(`<%=\\s*${k}\\s*%>`, 'g');
      return f.replace(reg, obj[k]);
    }, file)
    res[file] = toFile;
    return res;
  }, {});
}

function renderFolder(path, obj) {
  return renderFilesPath(getFiles(path), obj);
}

module.exports = {
  renderFolder
};
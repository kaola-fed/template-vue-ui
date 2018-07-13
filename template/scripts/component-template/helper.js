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
    const keys = searchInString(/(?:<%=\s*)([^<|%|\s]*)(?:\s*%>)/g, file);
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

function searchInString(regex, str) {
  let matches = [];
  let match;
  while (match = regex.exec(str)) {
    matches.push(match[1]);
  }
  return matches;
}

module.exports = {
  renderFolder
};
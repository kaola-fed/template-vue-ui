module.exports = {
  verbose: true,
  moduleFileExtensions: [ 'js', 'json', 'vue' ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  testPathIgnorePatterns: [
    'scripts',
    'node_modules',
  ],
  testURL: 'http://localhost'
}

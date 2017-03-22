const fs = require('fs');
const paths = require('../config/paths');

module.exports = (resolve, rootDir, isEjecting) => {
  // Use this instead of `paths.testsSetup` to avoid putting
  // an absolute filename into configuration after ejecting.
  const setupTestsFile = fs.existsSync(paths.testsSetup) ? '<rootDir>/src/setupTests.js' : undefined;

  // TODO: I don't know if it's safe or not to just use / as path separator
  // in Jest configs. We need help from somebody with Windows to determine this.
  const config = {
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    setupFiles: ['<rootDir>/config/polyfills.js', '<rootDir>/config/test-setup.js'],
    setupTestFrameworkScriptFile: setupTestsFile,
    testPathIgnorePatterns: [
      '<rootDir>[/\\\\](build|docs|node_modules|scripts)[/\\\\]'
    ],
    testEnvironment: 'node',
    testURL: 'http://localhost',
    transform: {
      "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
      "^.+\\.tsx?$": "<rootDir>/config/jest/typescriptTransform.js",
      "^(?!.*\\.(css|json)$)": "<rootDir>/config/jest/fileTransform.js"
    },
    transformIgnorePatterns: [
      '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'
    ],
    moduleNameMapper: {
      '^react-native$': 'react-native-web'
    },
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ],
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$"
  };
  if (rootDir) {
    config.rootDir = rootDir;
  }
  return config;
};

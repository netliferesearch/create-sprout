module.exports = {
  globals: {
    NODE_ENV: 'test',
    __PATH_PREFIX__: '',
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/web/node_modules/'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'svg', 'ts', 'tsx', 'node'],
  modulePaths: ['src', '<rootDir>/node_modules'],
  modulePathIgnorePatterns: ['<rootDir>/web/public'],
  setupFiles: ['<rootDir>/tests/setupTests.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    `node_modules`,
    `web/node_modules`,
    `web/\\.cache`,
    `web/public`,
    'tests/e2e',
    '_ignore',
  ],
  transform: {
    '^.+\\.js?$': '<rootDir>/tests/preProcess.js', // without this there will be errors on further transforms
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/fileTransformer.js',
    '\\.(css|less|scss)$': '<rootDir>/tests/fileTransformer.js',
  },
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `web/node_modules/(?!(gatsby)/)`],
};

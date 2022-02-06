const {
  pathsToModuleNameMapper
} = require('ts-jest/utils');
const {
  compilerOptions
} = require('./tsconfig');

module.exports = {
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>',
  }),
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testPathIgnorePatterns: ['cypress/integration'],
  collectCoverageFrom: [
    '**/*.service.ts',
    '!**/node_modules/**',
    '!**/cypress/**',
  ],
  globals: {
    crypto: require('crypto'),
  },
};

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '.git', '/dist/'],
  setupFiles: ['./setupJest.ts'],
  automock: false,
  moduleNameMapper: {
    '@src(.*)$': '<rootDir>src/$1',
    '@mocks(.*)$': '<rootDir>mocks/$1',
  },
};

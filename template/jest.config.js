module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^\\$src/(.*)$': '<rootDir>/src/$1',
    '^\\$types/(.*)$': '<rootDir>/@types/$1'
  }
};

module.exports = {
  roots: ['<rootDir>', '<rootDir>/src'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  moduleDirectories: ['node_modules', 'src'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    '@/components/(.*)': '<rootDir>/src/components/$1',
    '@/entities/(.*)': '<rootDir>/src/entities/$1',
  },
}

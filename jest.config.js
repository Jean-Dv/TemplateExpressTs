/** @type {import('ts-jest'/dist/types).InitialOptionsTsJest} */
module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json'
    }
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testMatch: ['**/__test__/*.spec.(ts|js)'],
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@api(.*)$': '<rootDir>/api$1',
    '^@config(.*)$': '<rootDir>/config$1',
    '^@root(.*)$': '<rootDir>$1'
  }
}

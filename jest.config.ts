export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.spec.ts', '**/?(*.)+(spec).ts'],
    moduleFileExtensions: ['ts', 'js', 'json'],
    clearMocks: true,
    moduleNameMapper: {
      '^@config/(.*)$': '<rootDir>/src/config/$1',
      '^@application/(.*)$': '<rootDir>/src/application/$1',
      '^@domain/(.*)$': '<rootDir>/src/domain/$1',
      '^@infra/(.*)$': '<rootDir>/src/infra/$1',
      '^@vars/(.*)$': '<rootDir>/src/config/variables/$1',
      '^@test/(.*)$': '<rootDir>/src/tests/$1',
    },
    setupFiles: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/src/tests/'],
    coveragePathIgnorePatterns: ['<rootDir>/src/tests/', "/node_modules/", "/.*\\.entity\\.ts$"],
    coverageDirectory: 'coverage',
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
  };
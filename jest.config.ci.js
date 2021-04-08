const base = require('./jest.config');
module.exports = Object.assign({}, base, {
  // test coverage
  collectCoverage: true,
  collectCoverageFrom: ['lib/**/*.{js,jsx,ts,tsx}', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],

  reporters: [
    [
      'jest-junit',
      {
        outputDirectory: 'test-results/jest',
        outputName: 'results.xml',
      },
    ],
  ],
});

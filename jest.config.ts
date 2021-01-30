export default {
  clearMocks: true,
  coverageDirectory: "coverage",

  moduleFileExtensions: ["js", "ts"],

  restoreMocks: true,

  roots: ["<rootDir>/src"],

  testEnvironment: "node",

  testMatch: ["**/*.spec.(js|ts)"],

  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
}

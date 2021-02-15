module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  modulePathIgnorePatterns: ["<rootDir>/src/node/__tests__/mocks"],
  setupFiles: ["jest-canvas-mock"],
}

export default {
  clearMocks: true,
  coverageDirectory: "coverage",

  moduleFileExtensions: ["js", "ts"],

  restoreMocks: true,

  roots: ["<rootDir>/src"],

  testEnvironment: "jsdom",

  testMatch: ["**/*.spec.(js|ts)"],

  transform: {
    "^.+\\.ts?$": "ts-jest",
  },

  modulePathIgnorePatterns: ["**/*.mock.ts"],
}

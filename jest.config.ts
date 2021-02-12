module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
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
}

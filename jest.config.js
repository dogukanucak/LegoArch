/* eslint-disable no-undef */
const config = {
  preset: "ts-jest",
  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
  coveragePathIgnorePatterns: [
    "node_modules",
    "test-config",
    "interfaces",
    "jestGlobalMocks.ts",
    ".module.ts",
    "<rootDir>/src/app/main.ts",
    "<rootDir>/src/index.tsx",
    "<rootDir>/src/App.tsx",
    ".mock.ts",
  ],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "@red/(.*)": "<rootDir>/src/red/$1",
  },
};

module.exports = config;

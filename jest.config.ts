import type { Config } from "jest";
const config: Config = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    transform: { "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.json" }] },
    moduleNameMapper: { "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js" },
};
export default config;

module.exports = {
  jest: {
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    type: "module", // Add this line to enable ES modules in your tests
  },
};

// export const collectCoverage = true;
// export const collectCoverageFrom = ["src/**/*.{js,jsx,ts,tsx}"];
// export const coverageDirectory = "coverage";
// export const testEnvironment = "jest-environment-jsdom";
// export const setupFilesAfterEnv = ["<rootDir>/jest.setup.js"];
// export const transform = {
//   "^.+\\.tsx?$": "ts-jest",
// };

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: [
      "<rootDir>/jest.setup.tsx"
    ],
    resolver: "jest-webpack-resolver",
    "globals": {
      "VERSION": "0.0.0",
      "localStorage":"localStorage",
      "sessionStorage":"sessionStorage"
    }
};
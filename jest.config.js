module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
    "scriptPreprocessor": "<rootDir>/node_modules/babel-jest",
    "unmockedModulePathPatterns": [
        "<rootDir>/node_modules/react",
        "<rootDir>/node_modules/react-dom",
        "<rootDir>/node_modules/react-addons-test-utils",
        "<rootDir>/node_modules/fbjs"
    ],
    "moduleNameMapper": {
        "\\.(css|less|scss)$": "identity-obj-proxy"
    }
};
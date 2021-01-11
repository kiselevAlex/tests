module.exports = {
    transform: {
        '\\.(j|t)sx?$': 'babel-jest',
    },
    preset: 'jest-puppeteer',
    setupFilesAfterEnv: ['<rootDir>/jest/setup.js'],
};

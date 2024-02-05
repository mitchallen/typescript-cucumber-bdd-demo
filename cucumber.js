// Author: Mitch Allen
// File: cucumber.js

module.exports = {
    default: {
        requireModule: ['ts-node/register'],
        paths: ['test/features/*.feature'],
        require: ['test/step-definitions/**/*.ts']
    }
};
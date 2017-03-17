exports.config = {
    allScriptsTimeout: 11000,
    //testws are in e2e/
    specs: [
        'e2e/*.js'
    ],

    //browser specification
    capabilities: {
        'browserName': 'chrome'
    },

    //gulp watch must be configured to 3001
    baseUrl: 'http://localhost:3001/',

    //testing framework is jasmine
    framework: 'jasmine',

    //allows u to interact directly with code
    directConnect: true,


    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
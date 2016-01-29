/* global System */

// Configure systemjs to use the .js extension for imports from the src/js folder
System.config({
    packages: {
        'dist': {defaultExtension: 'js'}
    }
});

Promise.all([
    /// inject:import
    System.import('dist/greeter/greeter.spec'),
]);

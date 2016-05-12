var preloaders = [
  // Process test code with Babel
  {test: /\.spec.js$/, loader: 'babel', exclude: 'node_modules'},
]; 

var loaders = [
      {test: /\.js$/, loader: 'babel', include: include, exclude: 'node_modules'},
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
			{ test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      {test: /\.html$/, loader: 'ng-cache'}
];

var path = require('path');
var include = [
  path.resolve('./client')
];
// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig (config) {
  config.set({
      
    basePath: '',
    
    frameworks: [
      // Reference: https://github.com/karma-runner/karma-jasmine
      // Set framework to jasmine
      'jasmine'
    ],

    reporters: [
      // Reference: https://github.com/mlex/karma-spec-reporter
      // Set reporter to print detailed results to console
      'spec',

      // Reference: https://github.com/karma-runner/karma-coverage
      // Output code coverage files
      'coverage'
    ],

    files: [
      // Grab all files in the app folder that contain .test.
      'client/tests/tests.webpack.js'
    ],

    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      // Convert files with webpack and load sourcemaps
      'client/tests/tests.webpack.js': ['webpack', 'sourcemap']
    },

    browsers: [
      // Run tests using PhantomJS
      'PhantomJS'
    ],

    singleRun: true,

    // Configure code coverage reporter
    coverageReporter: {
      dir: 'build/coverage/',
      type: 'html'
    },

    webpack: {
        debug: true,
        devTool: 'source-map',
        output: {
            filename: 'specc.js',
            path: path.join(__dirname, './build')
        },
        module: {
            loaders: loaders,
            preloaders: preloaders,
            resolveLoader: {
      modulesDirectories: [
          './node_modules'
      ]
},
        },
        cache: true 
    }
  });
};
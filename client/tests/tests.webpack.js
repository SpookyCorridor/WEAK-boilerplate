import 'angular';
import 'angular-mocks/angular-mocks';

var testsContext = require.context(".", true, /.test.js$/);
testsContext.keys().forEach(testsContext);
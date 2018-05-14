var LoaderUtils = require('loader-utils');
var validateOptions = require('schema-utils');
var package = require('../package.json');

var optionsSchema = {
  type: 'object',
  properties: {
    remUnit: {
      type: 'number',
    },
    delimiter: {
      type: 'string',
    },
  },
};

var defaultOptions = {
  remUnit: 40,
  delimiter: 'REM',
}
module.exports = function (config) {
  var options = LoaderUtils.getOptions(config);
  validateOptions(optionsSchema, options, package.name);
  return Object.assign(defaultOptions, options);
}
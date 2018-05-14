var LoaderUtils = require('loader-utils');
var getOptions = require('./getOptions');

module.exports = function (source) {
  var options = getOptions(this);
  var newSource = source.replace(new RegExp(options.delimiter + '\\(([\\d\\.]+)px\\)', 'g'), function (matchStr, px) {
    return isNaN(px) ? matchStr : +((px / options.remUnit).toFixed(4)) + 'rem';
  });
  return newSource;
}
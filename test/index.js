var path = require('path');
var fs = require('fs');
var expect = require('chai').expect;
var webpack = require('webpack');
var memoryfs = require('memory-fs');

var compile = (entry_file, loaderConfig, callback) => {
  var compiler = webpack({
    mode: 'development',
    entry: path.join(__dirname, 'source', entry_file),
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: path.resolve(__dirname, '../index.js'),
          options: {
            remUnit: 100,
          },
        }
      ]
    }
  });
  compiler.outputFileSystem = new memoryfs();
  compiler.run(callback);
};

describe('Webpack replace-loader Test:', () => {

  it('should replace with all string search', done => {
    compile(
      'entry.js',
      {
        test: /\.js$/,
        loader: path.resolve(__dirname, '../index.js'),
        options: {
          remUnit: 100,
        },
      },
      (error, stats) => {
        expect(error).to.equal(null);
        var contents = stats.toJson().modules[0].source;
        expect(contents).to.equal('\'REM(px),1rem,0.505rem\'');
        done();
      }
    )
  });

});

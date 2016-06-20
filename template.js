'use strict';

exports.description = 'Grunt serve that $#*!';

exports.template = function(grunt, init, done) {
  init.process({}, [], function(err, props) {
    var files = init.filesToCopy(props);
    init.copyAndProcess(files, props);

    init.writePackageJSON('package.json', {
      devDependencies: {
        'grunt': '*',
        'grunt-serve': '*'
      }
    });

    done();
  });
};

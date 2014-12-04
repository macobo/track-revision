/*
 * grunt-track-revision
 * https://github.com/macobo/track-revision
 *
 * Copyright (c) 2014 Karl-Aksel Puulmann
 * Licensed under the MIT license.
 */

'use strict';
var shell = require('shelljs');
var path = require('path');

module.exports = function(grunt) {
  function check(command, done) {
    grunt.log.writeln('').writeln(("Running '"+command+"'").cyan);
    var ret = shell.exec(command);
    grunt.log.debug(ret);

    if (ret.code !== 0) {
      grunt.fail.warn(ret.output);
      done(false);
    }
  }

  grunt.registerMultiTask('track_revision', 'Clone and checkout a revision from another repo', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var done = this.async();

    var options = {};
    options.dir = this.data.dir; // output
    options.repo = this.data.repo;
    options.revision = this.data.revision || this.data.branch || this.data.tag || 'master';
    options.origin = this.data.origin || 'origin';


    if (!options.repo) {
      grunt.fail.warn("Repo was not specified!");
      return false;
    }
    if (!options.dir) {
      grunt.fail.warn("Dir was not specified!");
      return false;
    }

    options.dir = path.resolve(options.dir);
    console.log(options);


    var work_tree = '--work-tree='+options.dir;

    if (grunt.file.isDir(options.dir)) {
      check('git fetch '+options.origin);
    } else {
      check('git clone ' + options.repo + ' ' + options.dir);
    }
    check('cd '+options.dir+'; git ' + work_tree + ' checkout ' + options.revision);

    done();
  });

};

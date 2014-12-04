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

  // Please see the Grunt documentation fo;r more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('track_revision', 'Clone and checkout a revision from another repo', function() {
    // Merge task-specific and/or target-specific options with these defaults.
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
    var commands = [
      'git clone ' + options.repo + ' ' + options.dir,
      'git ' + work_tree + ' checkout ' + options.revision
      // { cmd: 'git', args: ['clone', options.repo, options.dir] },
      // { cmd: 'git', args: ['checkout', options.revision], opts: { cwd: options.dir } },

    ];

    commands.forEach(function(command) {
      var ret = shell.exec(command);
      console.log(command, ret);
    });

  });

};

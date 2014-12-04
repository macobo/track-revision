/*
 * grunt-track-revision
 * https://github.com/macobo/track-revision
 *
 * Copyright (c) 2014 Karl-Aksel Puulmann
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: []
    },

    // Configuration to be run (and then tested).
    track_revision: {
      // failed_options: {
      //   dir: 'tmp/test_fail',
      //   repo: 'thisdoesnotexist',
      // },
      custom_options: {
        dir: 'tmp/test',
        repo: 'https://github.com/macobo/track-revision.git',
        revision: '349d15a706d234434025b8ba467908e492d46329'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'track_revision']);//, 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};

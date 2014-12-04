# grunt-track-revision

> Clone and checkout a revision from another repo

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-track-revision --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-track-revision');
```

## The "track_revision" task

### Overview
This is a very simple task cloning and updating a git repo each time the task
is run.

```js
grunt.initConfig({
  track_revision: {
    repo: 'https://github.com/macobo/track-revision.git', // repo to clone
    dir: 'tmp/output', // output directory
    revision: '0.2', // git tag, commit id or branch to follow
  },
});
```

### Settings

#### repo
Type: `String`
Required

Path to the git repo that should be cloned.

#### dir
Type: `String`
Required

Output directory, relative to gruntfile.


#### revision
Type: `String`
Default value: `'master'`

Git tag, commit id or branch to check out each time the task is run

#### origin
Type: `String`
Default value: `'origin'`

## Release History
* 0.2.0 initial release
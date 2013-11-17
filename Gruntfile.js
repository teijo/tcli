module.exports = function(grunt) {
  grunt.initConfig({
    licenseString: '/* Tournament API | Copyright (c) Teijo Laine <%= grunt.template.today("yyyy") %> */',
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['src/api.js'],
        tasks: ['default']
      }
    },
    uglify: {
      options: {
        compress: true,
        banner: '<%= licenseString %>\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['src/api.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify']);
};

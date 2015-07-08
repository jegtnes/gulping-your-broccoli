module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'dist/css/app.css': 'scss/app.scss'
        }
      }
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            src: 'img/**/*.jpg',
            dest: 'dist/'
          }
        ]
      }
    },

    responsive_images: {
      myTask: {
        options: {
          newFilesOnly: true,
          sizes: [{
            name: 'small',
            width: 320
          },{
            name: 'medium',
            width: 640
          },{
            name: "large",
            width: 1024
          }]
        },
        files: [{
          expand: true,
          src: ['**/*.jpg'],
          cwd: 'img/',
          dest: 'dist/img/'
        }]
      }
    },

    responsive_images_extender: {
      target: {
        options: {},
        files: [{
          expand: true,
          src: ['**/*.html'],
          cwd: 'html/',
          dest: 'dist/html'
        }]
      }
    }
  });

  grunt.task.registerTask('images', ['copy', 'responsive_images_extender', 'responsive_images'])

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-responsive-images-extender');
  grunt.loadNpmTasks('grunt-contrib-copy');

};

var mozjpeg = require('imagemin-mozjpeg');

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
        options: {
          sizes: [{
            selector: '.small-block-grid-1.medium-block-grid-2.large-block-grid-3 img.th',
            sizeList: [{
              cond: 'max-width: 40em',
              size: '100vw'
            },
            {
              cond: 'max-width: 64em',
              size: '50vw'
            },
            {
              cond: 'default',
              size: '33vw'
            }]
          }]
        },
        files: [{
          expand: true,
          src: ['**/*.html'],
          cwd: 'html/',
          dest: 'dist/html'
        }]
      }
    },

    imagemin: {
      dynamic: {
        options: {
          use: [mozjpeg()]
        },
        expand: true,
        cwd: 'dist/img',
        src: ['**/*.{png,jpg,gif}'],
        dest: 'dist/img'
      }
    }
  });

  grunt.task.registerTask('images', ['copy', 'responsive_images_extender', 'responsive_images', 'newer:imagemin'])

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-responsive-images-extender');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-copy');

};

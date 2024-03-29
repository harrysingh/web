/**
 *  @References
 * [0] http://gruntjs.com/getting-started to install grunt-cli
 * [1]: https://github.com/01org/grunt-zipup
 * [2]: https://github.com/gruntjs/grunt-contrib-handlebars
 * [3]: http://gruntjs.com/configuring-tasks#files
 **/

module.exports = function (grunt) {
  grunt.initConfig({
    sass: {                              
      dist: {                            
        options: {                       
          style: 'expanded'
        },
        files: {                         
          'beta/css/index.css': 'sass/index.scss',
          'beta/css/rule_cards.css': 'sass/rule_cards.scss',
          'beta/css/editor.css': 'sass/editor.scss',
          'beta/css/styles.css': 'sass/styles.scss',
          'beta/css/redirect_rule.css': 'sass/redirect_rule.scss',
          'beta/css/cancel_rule.css': 'sass/cancel_rule.scss',
          'beta/css/replace_rule.css': 'sass/replace_rule.scss',
          'beta/css/headers_rule.css': 'sass/headers_rule.scss'
        }
      }
    },

    watch: {
      scripts: {
        files: ['**/*.scss'],
        tasks: ['sass']
      }
    },

    connect: {
      server: {
        options: {
          port: 7070,
          hostname: 'localhost',
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('serve', ['connect']);
};
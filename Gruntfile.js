module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Gruntfile.js', '_src/js/*.js']
        },
        less: {
            development: {
                paths: ['_src/less/*.less'],
                files: {
                    'css/style.css': '_src/less/style.less'
                }
            },
            production: {
                options: {
                    compress: true,
                    cleancss: true,
                },
                paths: ['_src/less/*.less'],
                files: {
                    'css/style.css': '_src/less/style.less'
                }
            }
        },
        watch: {
            styles: {
                // Which files to watch (all .less files recursively in the less directory)
                files: ['_src/less/**/*.less'],
                tasks: ['less:development'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-jshint'); // grunt jshint
    grunt.loadNpmTasks('grunt-contrib-less'); // grunt less
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s)
    grunt.registerTask('default', ['jshint', 'less:development']);
};

module.exports = function(grunt) {
    grunt.initConfig({

        uglify : {
            my_target: {
                files: {
                    'dest/js/app.annotated.min.js': ['dest/js/app.annotated.js']
                }
            }
        },
        watch: {
            js: {
                files: [
                    'js/*.js',
                    'js/**/*.js'
                ],
                tasks: ['concat', 'ngAnnotate'],
                options: {
                    interrupt: true
                }
            },
            sass: {
                files: ['css/*.scss'],
                tasks: ['sass'],
                options: {
                    interrupt: true
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dest/css/main.css': ['css/main.scss']
                }
            }
        },
        concat: {
            option: {
                separator: ";\n\n"
            },
            dist: {
                src: [
                    'js/app.js',
                    'js/app.config.js',
                    'js/**/*.js'
                ],
                dest: 'dest/js/app.js'
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            your_target: {
                files: {
                    'dest/js/app.annotated.js': ['dest/js/app.js']
                }
            }
        },
        browserSync: {
            bsFiles: {
                src : [
                    'dest/css/main.css',
                    'dest/js/app.annotated.js',
                    './index.html',
                    'app/**/**/*.html'
                ]
            },
            options: {
                server: {
                    baseDir: "./"
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('min', ['uglify']);
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('combine', ['concat']);
    grunt.registerTask('annotate', ['ngAnnotate']);
    grunt.registerTask('unite', ['concat', 'ngAnnotate', 'uglify']);
    grunt.registerTask('live', ['browserSync']);
    grunt.registerTask('look-sass', ['watch:sass']);
    grunt.registerTask('look-js', ['watch:js']);
};
/*global module:false*/
module.exports = function (grunt) {
    // readOptionalJSON
    // by Ben Alman
    // https://gist.github.com/2876125
    function readOptionalJSON(filepath) {
        var data = {};
        try {
            data = grunt.file.readJSON(filepath);
            grunt.verbose.write("Reading " + filepath + "...").ok();
        } catch (e) {
        }
        return data;
    }

    // Project configuration.
    grunt.initConfig({

        pkg: '<json:project.json>',
        meta: {
            banner:
                '/*!\n' +
                '<%= " * " + pkg.description || "" %> v<%= pkg.version %>\n' +
                ' *\n' +
                ' * Based on: http://www.php.net/\n' +
                ' *\n' +
                '<%= pkg.homepage ? " * GitHub: " + pkg.homepage + "\n" : "" %>' +
                ' * Built at: <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
                ' * Dual licensed under the MIT or GPL Version 2 licenses.\n' +
                ' * <%= pkg.licenses[0].url %>' +
                ' * <%= pkg.licenses[1].url %>' +
                '\n */'
        },
        concat: {
            dist: {
                src: [
                    '<banner:meta.banner>',

                    '<file_strip_banner:src/jsphp.bootstrap.js>',
                    '<file_strip_banner:src/standard_defines.php.js>',
                    '<file_strip_banner:src/standard_0.php.js>',
                    '<file_strip_banner:src/standard_1.php.js>',
                    '<file_strip_banner:src/standard_2.php.js>',
                    '<file_strip_banner:src/standard_3.php.js>',
                    '<file_strip_banner:src/standard_4.php.js>',
                    '<file_strip_banner:src/standard_5.php.js>',
                    '<file_strip_banner:src/standard_6.php.js>',
                    '<file_strip_banner:src/standard_7.php.js>',
                    '<file_strip_banner:src/standard_8.php.js>',
                    '<file_strip_banner:src/standard_9.php.js>',
                    '<file_strip_banner:src/pcre.php.js>'
                ],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        min: {
            dist: {
                src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },

        jshint: (function () {
            function jshintrc(path) {
                return readOptionalJSON((path || "") + ".jshintrc") || {};
            }

            return {
                options: jshintrc(),
                globals: {
                    i: true
                }
            };
        })(),

        lint: {
            files: [
                'grunt.js',
                'dist/<%= pkg.name %>.js'
            ]
        },

        qunit: {
            files: [
                "test/index.html",
                "test/minified.html"
            ]
        },

        compare_size: {
            files: [
                'dist/<%= pkg.name %>.js',
                'dist/<%= pkg.name %>.min.js'
            ]
        },

        jasmine: {
            all: {
                src:['specs/specrunner.html'],
                errorReporting: true
            }
        },

        uglify: {

        }
    });

    grunt.registerTask('regular', function( commit, configFile ) {
        console.log('\n\n *** REGULAR RUN ***\n\n');
    });

    // Default task.
    grunt.registerTask('default', 'regular concat min lint qunit');

    grunt.registerTask('sntx', 'concat lint');
    grunt.registerTask('test', 'concat qunit');

    // Load grunt tasks from NPM packages
    grunt.loadNpmTasks( "grunt-compare-size" );
    grunt.loadNpmTasks( "grunt-jasmine-task" );
};

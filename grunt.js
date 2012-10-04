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

    function getModuleBanner(module, description) {
        return "/**\n" +
            " * " + description + "\n" +
            " * @module " + module + "\n" +
            " * @author <%= pkg.author.name %>\n" +
            " * @version <%= pkg.version %>\n" +
            " */";
    }

    // Project configuration.
    grunt.initConfig({

        pkg: "<json:package.json>",
        meta: {
            standard_defines: getModuleBanner("standard_defines", "Standard Defines"),
            Superglobals: getModuleBanner("Superglobals", "Superglobals are built-in variables that are always available in all scopes"),
            Core_c: getModuleBanner("Core_c", "Core c classes"),
            standard_0: getModuleBanner("standard_0", "Standard Functions Basic"),
            standard_1: getModuleBanner("standard_1", "Standard Functions Part 1"),
            standard_2: getModuleBanner("standard_2", "Standard Functions Part 2"),
            standard_3: getModuleBanner("standard_3", "Standard Functions Part 3"),
            standard_4: getModuleBanner("standard_4", "Standard Functions Part 4"),
            standard_5: getModuleBanner("standard_5", "Standard Functions Part 5"),
            standard_6: getModuleBanner("standard_6", "Standard Functions Part 6"),
            standard_7: getModuleBanner("standard_7", "Standard Functions Part 7"),
            standard_8: getModuleBanner("standard_8", "Standard Functions Part 8"),
            standard_9: getModuleBanner("standard_9", "Standard Functions Part 9"),
            pcre: getModuleBanner("pcre", "Perl Compatible Regular Expressions"),
            date: getModuleBanner("date", "Date Functions"),
            banner: "/*global Exception:true,stdClass:true,__PHP_Incomplete_Class:true */\n" +
                "/*!\n" +
                "<%= " * " + pkg.description || '' %> v<%= pkg.version %>\n" +
                " *\n" +
                " * Based on: http://www.php.net/\n" +
                " *\n" +
                "<%= pkg.homepage ? ' * GitHub: ' + pkg.homepage +  '\n' : '' %>" +
                " * Built at: <%= grunt.template.today('yyyy-mm-dd') %>\n" +
                " * Copyright (c) <%= grunt.template.today('yyyy') %> <%= pkg.author.name %>\n" +
                " * Dual licensed under the MIT or GPL Version 2 licenses.\n" +
                " * <%= pkg.licenses[0].url %>" +
                " * <%= pkg.licenses[1].url %>" +
                "\n */"
        },
        concat: {
            standard_defines: {
                src: [
                    "<banner:meta.standard_defines>",
                    "src/standard_defines.js"
                ],
                dest: "dist/standard_defines.js"
            },
            Superglobals: {
                src: [
                    "<banner:meta.Superglobals>",
                    "src/Superglobals.js"
                ],
                dest: "dist/Superglobals.js"
            },
            Core_c: {
                src: [
                    "<banner:meta.Core_c>",
                    "src/Core_c/Exception.js",
                    "src/Core_c/stdClass.js"
                ],
                dest: "dist/Core_c.js"
            },
            pcre: {
                src: [
                    "<banner:meta.pcre>",
                    "src/pcre.js"
                ],
                dest: "dist/pcre.js"
            },
            standard_0: {
                src: [
                    "<banner:meta.standard_0>",
                    "src/standard_0/__PHP_Incomplete_Class.js"
                ],
                dest: "dist/standard_0.js"
            },
            standard_1: {
                src: [
                    "<banner:meta.standard_1>",
                    "src/standard_1/nl2br.js",
                    "src/standard_1/str_repeat.js",
                    "src/standard_1/strtolower.js",
                    "src/standard_1/strtoupper.js",
                    "src/standard_1/strrev.js"
                ],
                dest: "dist/standard_1.js"
            },
            standard_2: {
                src: [
                    "<banner:meta.standard_2>",
                    "src/standard_2/chr.js",
                    "src/standard_2/ord.js"
                ],
                dest: "dist/standard_2.js"
            },
            standard_3: {
                src: [
                    "<banner:meta.standard_3>",
//                    "src/standard_3/base64_encode.js",
//                    "src/standard_3/base64_decode.js",
                    "src/standard_3/pi.js"
                ],
                dest: "dist/standard_3.js"
            },
            standard_4: {
                src: [

                    "<banner:meta.standard_4>",
                    "src/standard_4/var_dump.js",
                    "src/standard_4/serialize.js",
                    "src/standard_4/unserialize.js",
                    "src/standard_4/print_r.js"
                ],
                dest: "dist/standard_4.js"
            },
            standard_5: {
                src: [
                    "<banner:meta.standard_5>",
                    "src/standard_5/floatval.js",
                    "src/standard_5/doubleval.js",
                    "src/standard_5/gettype.js",
                    "src/standard_5/intval.js",
                    "src/standard_5/strval.js"
                ],
                dest: "dist/standard_5.js"
            },
            standard_6: {
                src: [
                    "<banner:meta.standard_6>"
                ],
                dest: "dist/standard_6.js"
            },
            standard_7: {
                src: [
                    "<banner:meta.standard_7>"
                ],
                dest: "dist/standard_7.js"
            },
            standard_8: {
                    src: [
                        "<banner:meta.standard_8>",
                        "src/standard_8/array_pop.js",
                        "src/standard_8/array_push.js",
                        "src/standard_8/array_shift.js",
                        "src/standard_8/array_unshift.js",
                        "src/standard_8/array_fill.js",
                        "src/standard_8/shuffle.js"
                    ],
                    dest: "dist/standard_8.js"
            },
            standard_9: {
                src: [
                    "<banner:meta.standard_9>",
                    "src/standard_9/array_change_key_case.js",
                    "src/standard_9/array_flip.js",
                    "src/standard_9/array_key_exists.js",
                    "src/standard_9/array_keys.js",
                    "src/standard_9/array_rand.js",
                    "src/standard_9/array_reverse.js",
                    "src/standard_9/array_unique.js",
                    "src/standard_9/array_values.js"
                ],
                dest: "dist/standard_9.js"
            },

            jsphp: {
                src: [
                    "<banner:meta.banner>",
                    "src/bootstrap.js",
                    "dist/standard_defines.js",
                    "dist/Superglobals.js",
                    "dist/Core_c.js",
                    "dist/standard_0.js",
                    "dist/standard_1.js",
                    "dist/standard_2.js",
                    "dist/standard_3.js",
                    "dist/standard_4.js",
                    "dist/standard_5.js",
                    "dist/standard_6.js",
                    "dist/standard_7.js",
                    "dist/standard_8.js",
                    "dist/standard_9.js", //
                    "dist/pcre.js"
                ],
                dest: "dist/<%= pkg.name %>.js"
            }
        },
        min: {
            dist: {
                src: "dist/<%= pkg.name %>.js",
                dest: "dist/<%= pkg.name %>.min.js"
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
                "grunt.js",
                "dist/<%= pkg.name %>.js"
            ]
        },

        qunit: {
            files: [
                "test/js/test.html"
            ]
        },

        compare_size: {
            files: [
                "dist/<%= pkg.name %>.js",
                "dist/<%= pkg.name %>.min.js"
            ]
        },

        jasmine: {
            all: {
                src: ["specs/specrunner.html"],
                errorReporting: true
            }
        },

        uglify: {

        }
    });

    // Default task.
    // Load grunt tasks from NPM packages
    grunt.loadNpmTasks("grunt-compare-size");
    grunt.loadNpmTasks("grunt-jasmine-task");

    grunt.registerTask("default", "concat lint qunit min");
    grunt.registerTask("test", "concat lint qunit");
    grunt.registerTask("sntx", "concat lint");
};

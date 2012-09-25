/**
 * standard_4.php - Unit Test (QUnit)
 */

module("standard_4", {
    setup: function () {

    },
    teardown: function () {

    }
});

test("print_r", function () {
    var i = 0;

    var data = {
        "scalars": {
            "input": ["", 1, 1.5, "Kura"],
            "expected": ["", "1", "1.5", "Kura"]
        },

        "empty_objects": {
            "input": [
                [],
                {},
                document,
                document.body
            ],
            "expected": [
                "Array\n(\n)", "Array\n(\n)",
                navigator.appName.match(/Microsoft/i) ? "Document Object\n(\n)" : "HTMLDocument Object\n(\n)",
                "HTMLBodyElement Object\n(\n)"
            ]
        },

        "nontrivial_objects": {
            "input": [
                [1, 2, 3, 4],
                {"first": [1, 2, 4, true, false, 944.55], "second": {"name": "John Doe", "data": [32, 45, 67], "nil": null}}
            ],
            "expected": [
                "Array\n(\n    [0] => 1\n    [1] => 2\n    [2] => 3\n    [3] => 4\n)",
                "Array\n(\n    [first] => Array\n        (\n            [0] => 1\n            [1] => 2\n            [2] => 4\n            [3] => 1\n            [4] => \n            [5] => 944.55\n        )\n\n    [second] => Array\n        (\n            [name] => John Doe\n            [data] => Array\n                (\n                    [0] => 32\n                    [1] => 45\n                    [2] => 67\n                )\n\n            [nil] => \n        )\n\n)"
            ]
        },

        "functions": {
            "input": [
                function () {
                    return 45;
                },

                function ($a, $b) {
                    return $a + $b;
                },

                function ($a, $b) {
                    $b = $b || 1;
                    return $a + $b;
                }
            ],
            "expected": [
                "Closure Object\n(\n)",

                "Closure Object\n" +
                    "(\n" +
                    "    [parameter] => Array\n" +
                    "        (\n" +
                    "            [$a] => <required>\n" +
                    "            [$b] => <required>\n" +
                    "        )\n" +
                    ")",

                "Closure Object\n" +
                    "(\n" +
                    "    [parameter] => Array\n" +
                    "        (\n" +
                    "            [$a] => <required>\n" +
                    "            [$b] => <optional>\n" +
                    "        )\n" +
                    ")"
            ]
        }
    };

    try {
        print_r();
    }
    catch (e) {
        var msg = e.getMessage();
        strictEqual(msg, 'print_r() expects at least 1 parameter, 0 given', 'exception : ' + (i++) + ' : no args');
    }

    for (var group in data) {
        for (i = 0; i < data[group].input.length; i++) {
            strictEqual(print_r(data[group].input[i], true), data[group].expected[i], group + ': ' + i);
        }
    }

});

test("serialize", function () {

    Hen.prototype = new stdClass();
    Hen.prototype.constructor = Hen;

    function Hen() {
        this.legs = 2;
        this.wings = 2;
        this.eyes = 2;
        this.canFly = false;
    }

    Hen.prototype.setLegs = function (legs) {
        this.legs = legs;
    }

    Hen.prototype.setWings = function (wings) {
        this.wings = wings;
    }

    var extra = [
        [true, "O:4:\"Hen\":4:{s:4:\"legs\";i:2;s:5:\"wings\";i:2;s:4:\"eyes\";i:2;s:6:\"canFly\";b:0;}", new Hen()]
    ];
    var _expected = extra.length;

    runTestOnData(extra, _expected);
});

test("unserialize", function () {
    var i = 0;

    var data = {
        "exceptions": {
            ' ': 0,
            '': 0,
            1: 0,
            3.45: 0,
            '123': 0,
            'i2345': 0,
            'x:2345;': 0,

            'i:23': 0,
            'd:23.45': 0,
            'b:0': 0,

            'a:"foo":{}': 0,
            'a::{}': 0,
            'a:0:}': 0,
            'a:0:{': 0,

            'b:;': 0,
            'b:2;': 0,

            's:"abc"': 0,
            's:"abc";': 0,
            's::"abc";': 0,
            's:3.14:"abc";': 0,
            's:10:"";': 2,
            's:10:"abc";': 2,
            's:0:"abc";': 5,
            's:3:"abcdef";': 8,
            's:12:"abcdefddddddddddddddddd  44 ddd";': 18,
            'a:3:{s:13:"kura i kaczka";a:5:{i:0;i:45;i:1;i:62;i:2;d:35.6;i:3;b:0;}s:5:"fikus";a:1:{s:4:"koko";N;}s:4:"zonx";s:5:"stonx";}': 0,
            '': 0
        },
        "ok": {
            "objects": {
                "input": [
                    'O:6:"Object":1:{s:3:"obj";O:6:"Object":0:{}}',
                    'a:1:{s:3:"obj";s:6:"string";}'
                ],
                "expected": [
                    { "obj": {} },
                    { "obj": "string" }
                ]
            },

            "arrays": {
                "input": [
// HASHTABLES:
                    'a:3:{s:13:"kura i kaczka";a:4:{i:0;i:45;i:1;i:62;i:2;d:35.6;i:3;b:0;}s:5:"fikus";a:1:{s:4:"koko";N;}s:4:"zonx";s:5:"stonx";}',
                    'a:2:{s:1:"a";i:512;s:1:"b";i:1024;}',
// ARRAYS
                    "a:2:{i:0;i:1000;i:1;i:1024;}",
                    "a:4:{i:0;i:1000;i:1;i:1024;i:2;d:3.5;i:3;d:12.456;}",
                    "a:4:{i:0;i:1;i:1;b:0;i:2;b:1;i:3;N;}",
                    'a:1:{i:0;s:3:"ABC";}',
                    'a:7:{i:0;s:3:"ABC";i:1;d:3.133;i:2;i:0;i:3;N;i:4;b:0;i:5;b:1;i:6;s:0:"";}',
                    "a:2:{i:0;i:1024;i:1;a:2:{i:0;i:55;i:1;i:66;}}",
                    "a:1:{i:0;a:2:{i:0;i:55;i:1;i:66;i:1;i:1024;}}",
                    "a:1:{i:0;a:2:{i:0;i:55;i:1;a:2:{i:0;i:66;i:1;i:77;}}}",
                    "a:2:{i:0;a:2:{i:0;i:55;i:1;i:66;}i:1;i:5005;}",
                    "a:2:{i:0;a:2:{i:0;i:55;i:1;i:66;}i:1;a:2:{i:0;i:5005;i:1;i:6006;}}",
                    "a:0:{}"
                ],
                "expected": [
// HASHTABLES:
                    {"kura i kaczka": [45, 62, 35.6, false], "fikus": {"koko": null}, "zonx": "stonx"},
                    {"a": 512, "b": 1024},
// ARRAYS
                    [1000, 1024],
                    [1000, 1024, 3.5, 12.456],
                    [1, false, true, null],
                    ["ABC"],
                    ['ABC', 3.133, 0, null, false, true, ''],
                    [1024, [55, 66]],
                    [
                        [55, 66]
                    ],
                    [
                        [55, [66, 77]]
                    ],
                    [
                        [55, 66],
                        5005
                    ],
                    [
                        [55, 66],
                        [5005, 6006]
                    ],
                    []
                ]
            },
            "scalars": {
                "input": [
                    's:0:"";', 's:11:"Foo Baz Bar";',
                    "N;", "b:1;", "b:0;", "i:1130;", "i:000023;", "d:34.5234;", "d:45;"
                ],
                "expected": [
                    "", "Foo Baz Bar",
                    null, true, false, 1130, 23, 34.5234, 45
                ]
            }
        }
    };

    for (var key in data.ok) {
        for (i = 0; i < data.ok[key]['input'].length; i++) {
            deepEqual(unserialize(data.ok[key]['input'][i]), data.ok[key]['expected'][i], key + ': ' + i + ' : ' + data.ok[key]['input'][i]);
        }
    }

    try {
        unserialize();
    }
    catch (e) {
        var msg = e.getMessage();
        strictEqual(msg, 'unserialize() expects exactly 1 parameter, 0 given', 'exception : ' + (i++) + ' : no args');
    }

    for (var key in data.exceptions) {
        try {
            unserialize(key);
            ok(false, 'No exception was thrown.')
        }
        catch (e) {
            var msg = e.getMessage();
            var offset = data.exceptions[key];
            strictEqual(msg, 'unserialize(): Error at offset ' + offset + ' of ' + key.length + ' bytes', 'exception: ' + (++i) + ' : ' + key);
        }
    }
});

test("serialize(), unserialize() cross tests", function () {
    var i;

    var expected = [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        {"a": {"a": {"a": {"a": {"a": {"a": {"a": {"a": []}}}}}}}},
        { "obj": [], "obj": [], "obj": [], "obj": []},
        { "scalar": 0.9994433, "obj": [] },
        {"i": 1, "d": 4.14, "s": "Zażółć gęślą jaźń", "bf": false, "bt": true, "a": [5, 6, 79]},
        [1, 2, 3],
        [
            [1, [2], 3],
            4
        ],
        [
            [],
            [],
            []
        ],
        [
            [
                [
                    [
                        [
                            [
                                [
                                    [
                                        [
                                            [
                                                [
                                                    [
                                                        [
                                                            [
                                                                [
                                                                    [
                                                                        [
                                                                            [
                                                                                []
                                                                            ]
                                                                        ]
                                                                    ]
                                                                ]
                                                            ]
                                                        ]
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ],
        false,
        0,
        "",
        [],
        true,
        1,
        1000,
        3.4,
        45232.422,
        .9999,
        null
    ];

    for (i = 0; i < expected.length; i++) {
        var serialized = serialize(expected[i]);
        deepEqual(unserialize(serialized), expected[i], serialized);
    }
});

test("var_dump", function () {
    var i = 0;

    try {
        var_dump();
    }
    catch (e) {
        var msg = e.getMessage();
        strictEqual(msg, 'var_dump() expects at least 1 parameter, 0 given', 'exception : ' + (i++) + ' : no args');
    }
});

/*
 test("error_get_last () ", function(){
 ok(false, "Not implemented yet.");
 });

 test("call_user_func ($function, $parameter, $_) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("call_user_func_array ($function, $param_arr) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("call_user_method ($method_name, $obj, $parameter, $_) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("call_user_method_array ($method_name, $obj, $params) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("forward_static_call ($function, $parameter, $_) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("forward_static_call_array ($function, $parameters) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("var_export ($expression, $return) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("debug_zval_dump ($variable) ", function(){
 ok(false, "Not implemented yet.");
 });


 test("memory_get_usage ($real_usage) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("memory_get_peak_usage ($real_usage) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("register_shutdown_function ($function, $parameter, $_) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("register_tick_function ($function, $arg, $_) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("unregister_tick_function ($function_name) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("highlight_file ($filename, $return) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("show_source ($file_name, $return) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("highlight_string ($str, $return) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("php_strip_whitespace ($filename) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("ini_get ($varname) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("ini_get_all ($extension, $details) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("ini_set ($varname, $newvalue) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("ini_alter ($varname, $newvalue) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("ini_restore ($varname) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("get_include_path () ", function(){
 ok(false, "Not implemented yet.");
 });

 test("set_include_path ($new_include_path) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("restore_include_path () ", function(){
 ok(false, "Not implemented yet.");
 });

 test("setcookie ($name, $value, $expire, $path, $domain, $secure, $httponly) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("setrawcookie ($name, $value, $expire, $path, $domain, $secure, $httponly) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("header ($string, $replace, $http_response_code) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("header_remove ($name) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("headers_sent ($file, $line) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("headers_list () ", function(){
 ok(false, "Not implemented yet.");
 });

 test("connection_aborted () ", function(){
 ok(false, "Not implemented yet.");
 });

 test("connection_status () ", function(){
 ok(false, "Not implemented yet.");
 });

 test("ignore_user_abort ($value) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("parse_ini_file ($filename, $process_sections, $scanner_mode) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("parse_ini_string ($ini, $process_sections, $scanner_mode) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("is_uploaded_file ($filename) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("move_uploaded_file ($filename, $destination) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("gethostbyaddr ($ip_address) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("gethostbyname ($hostname) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("gethostbynamel ($hostname) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("gethostname () ", function(){
 ok(false, "Not implemented yet.");
 });

 test("dns_check_record ($host, $type) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("checkdnsrr ($host, $type) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("dns_get_mx ($hostname, $mxhosts, $weight) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("getmxrr ($hostname, $mxhosts, $weight) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("dns_get_record ($hostname, $type, $authns, $addtl) ", function(){
 ok(false, "Not implemented yet.");
 });

 */
var fixtures = {
    "standard_8": {
        "array_fill": [
            [false, "array_fill() expects exactly 3 parameters, 0 given"],
            [false, "array_fill() expects exactly 3 parameters, 1 given", null],
            [false, "array_fill() expects exactly 3 parameters, 2 given", null, null],
            [false, "array_fill() expects exactly 3 parameters, 4 given", null, null, null, null],
            [false, "array_fill(): Number of elements must be positive", null, null, null],
            [false, "array_fill(): Number of elements must be positive", null, 0, null]
        ]
    },
    "standard_1": {
        "nl2br": [
            [false, "nl2br() expects at least 1 parameter, 0 given"],
            [false, "nl2br() expects at most 2 parameters, 3 given", 1, 1, 1],
            [true, "Foo<br>\nBaz<br>\nBar", "Foo\nBaz\nBar", false],
            [true, "Foo<br>\r\nBaz<br>\r\nBar", "Foo\r\nBaz\r\nBar", false],
            [true, "Foo<br />\nBaz<br />\nBar", "Foo\nBaz\nBar", true],
            [true, "Foo<br />\r\nBaz<br />\r\nBar", "Foo\r\nBaz\r\nBar", true],
            [true, "Foo<br />\nBaz<br />\nBar", "Foo\nBaz\nBar"],
            [true, "Foo<br />\r\nBaz<br />\r\nBar", "Foo\r\nBaz\r\nBar"],
            [true, "0", 0],
            [true, "0", "0"],
            [true, "1", true],
            [true, "", false],
            [true, "", ""],
            [true, "", null]
        ],
        "strtolower": [
            [false, "strtolower() expects exactly 1 parameter, 0 given"],
            [false, "strtolower() expects exactly 1 parameter, 2 given", 1, 1],
            [false, "strtolower() expects parameter 1 to be string, array given", []],
            [false, "strtolower() expects parameter 1 to be string, object given", {}],
            [true, "abcdefg", "ABCDEFG"],
            [true, "abc    def  xyz      g", "ABC    DEF  xyz      G"],
            [true, "0", 0],
            [true, "0", "0"],
            [true, "1", true],
            [true, "", false],
            [true, "", ""],
            [true, "", null]
        ],
        "strtoupper": [
            [false, "strtoupper() expects exactly 1 parameter, 0 given"],
            [false, "strtoupper() expects exactly 1 parameter, 2 given", 1, 1],
            [false, "strtoupper() expects parameter 1 to be string, array given", []],
            [false, "strtoupper() expects parameter 1 to be string, object given", {}],
            [true, "ABCDEFG", "abcdefg"],
            [true, "ABC    DEF  XYZ      G", "abc    def  XYZ      g"],
            [true, "0", 0],
            [true, "0", "0"],
            [true, "1", true],
            [true, "", false],
            [true, "", ""],
            [true, "", null]
        ],
        "strrev": [
            [false, "strrev() expects exactly 1 parameter, 0 given"],
            [false, "strrev() expects exactly 1 parameter, 2 given", 1, 1],
            [false, "strrev() expects parameter 1 to be string, array given", []],
            [false, "strrev() expects parameter 1 to be string, object given", {}],
            [true, "gfedcba", "abcdefg"],
            [true, "g      ZYX  fed    cba", "abc    def  XYZ      g"],
            [true, "0", 0],
            [true, "0", "0"],
            [true, "1", true],
            [true, "", false],
            [true, "", ""],
            [true, "", null]
        ],
        "str_repeat": [
            [false, "str_repeat() expects exactly 2 parameters, 0 given"],
            [false, "str_repeat() expects exactly 2 parameters, 1 given", 1],
            [false, "str_repeat() expects exactly 2 parameters, 3 given", 1, 1, 1],
            [false, "str_repeat(): Second argument has to be greater than or equal to 0", "", -1],
            [false, "str_repeat() expects parameter 2 to be long, array given", "", []],
            [false, "str_repeat() expects parameter 2 to be long, object given", "", {}],
            [true, "", 1, 0],
            [true, "", "1", 0],
            [true, "", "1", false],
            [true, "", "1", null],
            [true, "1", "1", 1],
            [true, "1", 1, 1],
            [true, "1", 1, "1"],
            [true, "1", 1, 1.9],
            [true, "1", 1, "1.9"],
            [true, "1111111111", "1", 10],
            [true, "", 0, "0"],
            [true, "", 0, "0"],
            [true, "", null, null]
        ]
    },
    "standard_3": {
        "base64_encode": [
            [false, "base64_encode() expects exactly 1 parameter, 0 given"],
            [false, "base64_encode() expects exactly 1 parameter, 2 given", 1, 1]
        ],
        "base64_decode": [
            [false, "base64_decode() expects at least 1 parameter, 0 given"],
            [false, "base64_decode() expects at most 2 parameters, 3 given", 1, 1, 1]
        ],
        "pi" : [
            [true, 3.1415926535898]
        ]
    },
    "standard_5": {
        "floatval": [
            [false, "floatval() expects exactly 1 parameter, 0 given"],
            [false, "floatval() expects exactly 1 parameter, 2 given", 1, 1],
            [true, 4, "4d"],
            [true, 4, "4 Foo Baz Bar"],
            [true, 4.5, "4.5Foo Baz Bar"],
            [true, 4.5, "4.5       Foo Baz Bar"],
            [true, 3.14, "               3.14                 "],
            [true, 0, "x4"],
            [true, 0, "x4.5"],
            [true, 0, "Foo Baz Bar"],
            [true, 0, ""],
            [true, 0, "0"],
            [true, 0, 0],
            [true, 0, null]
        ],
        "gettype": [
            [false, "gettype() expects exactly 1 parameter, 0 given"],
            [false, "gettype() expects exactly 1 parameter, 2 given", 1, 1],

            [true, "object", {}],
            [true, "object", {"a": 1, "b": 2}],

            [true, "array", []],
            [true, "array", [1, 2, 3]],
            [true, "array", [true, false, true]],
            [true, "array", [[[[[[[[[[]]]]]]]]]]],
            [true, "array", [null, null, null]],

            [true, "integer", -1],
            [true, "integer", 0],
            [true, "integer", 1],
            [true, "integer", 1000000],

            [true, "double", 3.14],
            [true, "double", 1.000000000000001],
            [true, "double", 0.9999999999999999],
            [true, "double", 0.8999999999999999999999999999999],

            [true, "boolean", true],
            [true, "boolean", false],

            [true, "string", ""],
            [true, "string", "a"],
            [true, "string", "Let\\'s Rock"],
            [true, "string", "1"],
            [true, "string", "-1"],
            [true, "string", "9.333"],

            [true, "NULL", null]
        ],
        "intval": [
            [false, "Wrong parameter count for intval()"],
            [false, "Wrong parameter count for intval()", 1, 1, 1],

            [true, 2, "10", 2],
            [true, 3, "10", 3],
            [true, 8, "10", 8],
            [true, 10, "10", 10],
            [true, 16, "10", 16],
            [true, 17, "10", 17],
            [true, 10, 10, 2],
            [true, 10, 10, 3],
            [true, 10, 10, 8],
            [true, 10, 10, 10],
            [true, 10, 10, 16],
            [true, 10, 10, 17],

            [true, 1, 1],
            [true, 1, true],
            [true, 1, "1"],
            [true, 1, "01"],
            [true, 1, "01x"],
            [true, 1, [1]],
            [true, 1, 1],
            [true, 1, [1, 2, 3]],
            [true, 1, {"a":1,"b":2}],
            [true, 1, 1.0],
            [true, 1, 1.9],
            [true, 1, "1.0"],
            [true, 1, "1.9"],

            [true, 0, 0],
            [true, 0, ""],
            [true, 0, []],
            [true, 0, {}],
            [true, 0, "a01"],
            [true, 0, "dummy"],
            [true, 0, false],
            [true, 0, 0.0],
            [true, 0, 0.9],
            [true, 0, null]
        ]
    }
};
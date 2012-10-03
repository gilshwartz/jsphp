var fixtures = {
    "standard_9": {
        "array_rand": [

        ],
        "array_change_key_case": [
            [false, "array_change_key_case() expects parameter 2 to be long, object given", {"a":"a","B":"b"}, "new stdClass()"],

            [true, {"a":"a","b":"B"}, {"a":"a","B":"B"}],

            [true, {"a":"a","b":"null"}, {"a":"a","B":"null"}, null],
            [true, {"a":"a","b":"false"}, {"a":"a","B":"false"}, false],
            [true, {"a":"a","b":"zero"}, {"a":"a","B":"zero"}, 0],
            [true, {"a":"a","b":"zero"}, {"a":"a","B":"zero"}, 0.5],
            [true, {"a":"a","b":"zero"}, {"a":"a","B":"zero"}, "0"],
            [true, {"a":"a","b":"zero"}, {"a":"a","B":"zero"}, "0.5"],

            [true, {"A":"a","B":"B"}, {"a":"a","B":"B"}, true],
            [true, {"A":"a","B":"B"}, {"a":"a","B":"B"}, 1],
            [true, {"A":"a","B":"B"}, {"a":"a","B":"B"}, 1.5],
            [true, {"A":"a","B":"B"}, {"a":"a","B":"B"}, "1"],
            [true, {"A":"a","B":"B"}, {"a":"a","B":"B"}, "1.5"],
            [true, {"A":"a","B":"B"}, {"a":"a","B":"B"}, 1000],
            [true, {"A":"a","B":"B"}, {"a":"a","B":"B"}, 1000.5],
            [true, {"A":"a","B":"B"}, {"a":"a","B":"B"}, "1000"],
            [true, {"A":"a","B":"B"}, {"a":"a","B":"B"}, "1000.5"],

            [true, ["a","B"], ["a","B"]],
            [true, [], []],
            [true, [], {}],

            [true, false, "new stdClass()"],
            [true, false, "function(){return true;}"],
            [true, false, null],
            [true, false, true],
            [true, false, false],
            [true, false, 0],
            [true, false, 512],
            [true, false, 512.5],
            [true, false, "Foo Baz Bar"],

            [false, "array_change_key_case() expects parameter 2 to be long, array given", {"a":"a","B":"b"}, {}],
            [false, "array_change_key_case() expects parameter 2 to be long, array given", {"a":"a","B":"b"}, []],
            [false, "array_change_key_case() expects parameter 2 to be long, object given", {"a":"a","B":"b"}, "new stdClass()"],
            [false, "array_change_key_case() expects parameter 2 to be long, string given", {"a":"a","B":"b"}, "Foo Baz Bar"],
            [false, "array_change_key_case() expects parameter 2 to be long, string given", {"a":"a","B":"b"},  ""],
            [false, "array_change_key_case() expects at most 2 parameters, 3 given", null, null, null],
            [false, "array_change_key_case() expects at least 1 parameter, 0 given"]
        ],
        "array_flip": [
            [true, [], []],
            [true, [], {}],
            [true, [1,2,3,4], {"1":0,"2":1,"3":2,"4":3}],
            [true, {"1":0,"2":1,"3":2,"4":3}, [1,2,3,4]],
            [true, {"a":"1","b":"2","c":"3"}, {"1":"a","2":"b","3":"c"}],
            [true, {"1":"a","2":"b","3":"c"}, {"a":1,"b":2,"c":3}],
            [false, "array_flip() expects parameter 1 to be array, object given", "new stdClass()"],

            [false, "array_flip() expects parameter 1 to be array, object given", "function(){}"],
            [false, "array_flip() expects exactly 1 parameter, 2 given", null, null],
            [false, "array_flip() expects exactly 1 parameter, 0 given"]
        ],
        "array_reverse": [
            [true, [], []],
            [true, [], [], false],
            [true, [], [], true],
            [true, [1,2,3,4], [4,3,2,1]],
            [true, [4,3,2,1], [1,2,3,4]],
            [true, {"a":1,"b":2,"c":3}, {"c":3,"b":2,"a":1}],
            [true, {"c":3,"b":2,"a":1}, {"a":1,"b":2,"c":3}],
            [true, [1,2,3,4], [4,3,2,1], false],
            [true, [4,3,2,1], [1,2,3,4], false],
            [true, {"a":1,"b":2,"c":3}, {"c":3,"b":2,"a":1}, false],
            [true, {"c":3,"b":2,"a":1}, {"a":1,"b":2,"c":3}, false],
            [true, [1,2,3,4], {"3":4,"2":3,"1":2,"0":1}, true],
            [true, {"3":4,"2":3,"1":2,"0":1}, [1,2,3,4], true],
            [true, {"a":1,"b":2,"c":3}, {"c":3,"b":2,"a":1}, true],
            [true, {"c":3,"b":2,"a":1}, {"a":1,"b":2,"c":3}, true],

            [false, "array_reverse() expects parameter 2 to be boolean, array given", {"a": 1, "b": 2, "3": 3}, []],
            [false, "array_reverse() expects parameter 2 to be boolean, array given", {"a": 1, "b": 2, "3": 3}, {}],
            [false, "array_reverse() expects parameter 2 to be boolean, object given", {"a": 1, "b": 2, "3": 3}, "new stdClass()"],
            [false, "array_reverse() expects at most 2 parameters, 3 given", null, null, null],
            [false, "array_reverse() expects at least 1 parameter, 0 given"]
        ],
        "array_keys": [
            [true, [], {"a": "123", "b": "124", "c": "125"}, 124, 1],
            [true, [], {"a": "123", "b": "124", "c": "125"}, 124, true],
            [true, [], {"a": "123", "b": "124", "c": "125"}, 124, "Foo"],

            [true, ["b"], {"a": "123", "b": "124", "c": "125"}, 124, ""],
            [true, ["b"], {"a": "123", "b": "124", "c": "125"}, 124, null],
            [true, ["b"], {"a": "123", "b": "124", "c": "125"}, 124, 0],
            [true, ["b"], {"a": "123", "b": "124", "c": "125"}, 124, false],
            [true, ["b"], {"a": "123", "b": "124", "c": "125"}, 124],

            [true, ["a", "b", "c"], {"a": 1, "b": 2, "c": 3}],
            [true, [], []],
            [true, [], {}],

            [false, "Object of class Exception could not be converted to int", {"a": 1, "b": 2, "3": 3}, "new Exception()"],
            [false, "Object of class stdClass could not be converted to int", {"a": 1, "b": 2, "3": 3}, "new stdClass()"],
            [false, "array_keys() expects parameter 3 to be boolean, array given", {"a": 1, "b": 2, "3": 3}, 3, []],
            [false, "array_keys() expects parameter 3 to be boolean, array given", {"a": 1, "b": 2, "3": 3}, 3, {}],
            [false, "array_keys() expects parameter 3 to be boolean, object given", {"a": 1, "b": 2, "3": 3}, 3, "new stdClass()"],
            [false, "array_keys() expects at most 3 parameters, 4 given", null, null, null, null],
            [false, "array_keys() expects at least 1 parameter, 0 given"]
        ],
        "array_values": [
            [true, ["a", "b", "c"], ["a", "b", "c"]],
            [true, [1, 2, 3], [1, 2, 3]],
            [true, [1, 2, 3], {"a": 1, "b": 2, "c": 3}],
            [true, [], []],
            [true, [], {}],
            [false, "array_values() expects parameter 1 to be array, object given", "function(){}"],
            [false, "array_values() expects exactly 1 parameter, 2 given", null, null],
            [false, "array_values() expects exactly 1 parameter, 0 given"]
        ],
        "array_unique": [
            [false, "array_unique() expects parameter 1 to be array, object given", "function(){}"],
            [false, "array_unique() expects at most 2 parameters, 3 given", null, null, null],
            [false, "array_unique() expects at least 1 parameter, 0 given"],

            [true, [[1,0],[1,2]], [[1,0],[1,2],[1,0],[1,2],[1,0],[1,2]], "SORT_REGULAR"],

            [true, [1.2, 0.4, 0.1, 0.3, 0.2], [1.2, 0.4, 0.1, 0.3, 0.2, 0.3, 0.4, 0.3]],
            [true, {"0": 0, "2": 1.4, "3": 0.1, "4": 0.4, "6": 1}, [0, 0, 1.4, 0.1, 0.4, 0.4, 1, 0.1]],
            [true, {"0": 0.3, "1": 0.4, "3": 1.1, "5": 1.3, "6": 0.2, "7": 1}, [0.3, 0.4, 0.4, 1.1, 1.1, 1.3, 0.2, 1]],
            [true, {"0": 1.1, "1": 0.1, "2": 0.2, "7": 0}, [1.1, 0.1, 0.2, 0.2, 0.2, 0.2, 0.2, 0]],
            [true, {"0": 1.3, "1": 0.3, "2": 1.1, "3": 0.4, "6": 1.4}, [1.3, 0.3, 1.1, 0.4, 0.3, 0.3, 1.4, 1.1]],
            [true, {"0": 1.1, "1": 1.3, "4": 0.4, "5": 1.4, "7": 0.3}, [1.1, 1.3, 1.3, 1.1, 0.4, 1.4, 0.4, 0.3]],
            [true, {"0": 0.3, "1": 1.1, "2": 1.3, "3": 1, "4": 0, "7": 1.2}, [0.3, 1.1, 1.3, 1, 0, 1.3, 0, 1.2]],
            [true, [1, 0.3, 0, 1.1, 0.1], [1, 0.3, 0, 1.1, 0.1, 0, 1, 0.1]],
            [true, {"0": 0.2, "1": 0.4, "3": 1.2, "6": 1.1}, [0.2, 0.4, 0.4, 1.2, 1.2, 1.2, 1.1, 0.2]],
            [true, {"0": 1.4, "1": 0.3, "2": 0, "4": 0.2, "5": 0.1, "6": 1}, [1.4, 0.3, 0, 1.4, 0.2, 0.1, 1, 0.3]],
            [true, {"0": 1.1, "2": 1.4, "3": 0.2, "4": 0.3, "5": 1, "6": 0.1}, [1.1, 1.1, 1.4, 0.2, 0.3, 1, 0.1, 0.1]],
            [true, {"0": 1.2, "2": 1, "3": 0.2, "4": 0.3, "7": 0}, [1.2, 1.2, 1, 0.2, 0.3, 1.2, 1, 0]],
            [true, {"0": 0.3, "1": 0.2, "2": 1.4, "3": 1.3, "6": 0.1, "7": 1}, [0.3, 0.2, 1.4, 1.3, 0.3, 0.2, 0.1, 1]],
            [true, {"0": 0, "1": 0.1, "3": 0.4, "4": 0.3, "5": 1.1, "6": 1.4, "7": 1}, [0, 0.1, 0, 0.4, 0.3, 1.1, 1.4, 1]],
            [true, {"0": 1.1, "1": 0.3, "3": 1.2, "5": 0.4, "6": 0}, [1.1, 0.3, 0.3, 1.2, 1.2, 0.4, 0, 0.3]],
            [true, [1.2, 0.4, 0.3, 1.1, 0.2, 1], [1.2, 0.4, 0.3, 1.1, 0.2, 1, 0.3, 1.1]],

            [true, [2, 0, 11, 10], [2, 0, 11, 10, 10, 2, 2, 0]],
            [true, {"0": 5, "1": 13, "2": 3, "3": 1, "5": 2, "6": 11}, [5, 13, 3, 1, 5, 2, 11, 13]],
            [true, [3, 16, 15, 9, 2, 6, 12, 7], [3, 16, 15, 9, 2, 6, 12, 7]],
            [true, [11, 2, 9, 13, 14, 7, 3], [11, 2, 9, 13, 14, 7, 3, 11]],
            [true, {"0": 6, "1": 1, "2": 16, "3": 8, "4": 4, "6": 12}, [6, 1, 16, 8, 4, 4, 12, 4]],
            [true, [1, 11, 14, 7, 0, 8], [1, 11, 14, 7, 0, 8, 1, 0]],
            [true, {"0": 10, "1": 8, "2": 15, "3": 6, "4": 16, "6": 1}, [10, 8, 15, 6, 16, 15, 1, 10]],
            [true, [10, 6, 15, 1, 13, 3], [10, 6, 15, 1, 13, 3, 6, 13]],
            [true, {"0": 16, "1": 1, "2": 11, "3": 4, "5": 3, "6": 12, "7": 6}, [16, 1, 11, 4, 4, 3, 12, 6]],
            [true, {"0": 4, "1": 5, "2": 14, "3": 11, "4": 1, "6": 15}, [4, 5, 14, 11, 1, 11, 15, 1]],
            [true, {"0": 6, "1": 15, "2": 4, "3": 1, "4": 2, "6": 12, "7": 11}, [6, 15, 4, 1, 2, 4, 12, 11]],
            [true, [16, 8, 11, 4, 0, 14], [16, 8, 11, 4, 0, 14, 14, 14]],
            [true, {"0": 15, "1": 16, "2": 12, "4": 10, "5": 1, "7": 6}, [15, 16, 12, 15, 10, 1, 1, 6]],
            [true, {"0": 13, "1": 15, "2": 4, "4": 9, "5": 12, "6": 2, "7": 0}, [13, 15, 4, 13, 9, 12, 2, 0]],
            [true, {"0": 8, "1": 3, "2": 0, "3": 11, "5": 9, "6": 13}, [8, 3, 0, 11, 11, 9, 13, 9]],
            [true, {"0": 12, "1": 9, "3": 4, "4": 11, "5": 5, "6": 13}, [12, 9, 12, 4, 11, 5, 13, 12]],
            [true, {"0": 3, "1": 11, "3": 6, "5": 13, "6": 14, "7": 4}, [3, 11, 3, 6, 6, 13, 14, 4]],
            [true, {"0": 12, "1": 6, "2": 1, "4": 7, "5": 11, "7": 15}, [12, 6, 1, 12, 7, 11, 12, 15]],
            [true, [0, 6, 2, 1, 10, 12, 3], [0, 6, 2, 1, 10, 12, 3, 6]],
            [true, {"0": 14, "1": 7, "2": 3, "4": 12, "6": 0, "7": 8}, [14, 7, 3, 3, 12, 12, 0, 8]],
            [true, [15, 4, 16, 13, 8, 6], [15, 4, 16, 13, 8, 6, 16, 16]],
            [true, {"0": 0, "1": 12, "2": 3, "3": 10, "5": 8, "6": 11}, [0, 12, 3, 10, 10, 8, 11, 10]],
            [true, {"0": 15, "1": 7, "2": 11, "5": 12, "6": 0, "7": 1}, [15, 7, 11, 7, 15, 12, 0, 1]],
            [true, {"0": 5, "1": 3, "2": 1, "3": 16, "4": 2, "6": 11}, [5, 3, 1, 16, 2, 16, 11, 2]],
            [true, {"0": 16, "1": 13, "2": 3, "3": 0, "5": 14, "6": 7, "7": 10}, [16, 13, 3, 0, 16, 14, 7, 10]],
            [true, [11, 15, 12, 5, 3, 2, 0], [11, 15, 12, 5, 3, 2, 0, 3]],
            [true, {"0": 2, "1": 5, "2": 9, "3": 10, "5": 11, "6": 3}, [2, 5, 9, 10, 10, 11, 3, 10]],
            [true, [2, 14, 4, 10, 15, 1, 11], [2, 14, 4, 10, 15, 1, 11, 11]],
            [true, {"0": 7, "1": 2, "2": 12, "4": 14, "5": 3, "6": 4, "7": 1}, [7, 2, 12, 2, 14, 3, 4, 1]],
            [true, {"0": 12, "1": 16, "2": 11, "3": 15, "4": 3, "7": 10}, [12, 16, 11, 15, 3, 12, 12, 10]],
            [true, {"0": 13, "1": 2, "3": 11, "5": 7, "6": 12, "7": 0}, [13, 2, 13, 11, 11, 7, 12, 0]],
            [true, [6, 5, 15, 3, 0, 1], [6, 5, 15, 3, 0, 1, 1, 1]]
        ]
    },
    "standard_2": {
        "chr":[
            [false, "Wrong parameter count for chr()"],
            [false, "Wrong parameter count for chr()", 1, 1],
            [true, "F", 70]
        ],
        "ord": [
            [false, "ord() expects parameter 1 to be string, object given", "new stdClass()"],
            [false, "ord() expects exactly 1 parameter, 0 given"],
            [false, "ord() expects exactly 1 parameter, 2 given", null, null],
            [false, "ord() expects parameter 1 to be string, array given", [1]],
            [false, "ord() expects parameter 1 to be string, array given", {"a": 4}],
            [true, 0, null],
            [true, 48, 0],
            [true, 102, "f"],
            [true, 102, "foo"],
            [true, 102, "foo baz bar"]
        ]
    },
    "standard_8": {
        "array_unshift": [
            [true, true, [1,2,3,4], 5],
            [true, true, [], 1],
            [true, true, [1, 2, 3, 4], 50, 40, 30, 44],
            [false, "array_unshift() expects parameter 1 to be array, string given", "Foo", null],
            [false, "array_unshift() expects parameter 1 to be array, string given", "", null],
            [false, "array_unshift() expects parameter 1 to be array, null given", null, null],
            [false, "array_unshift() expects parameter 1 to be array, integer given", 0, null],
            [false, "array_unshift() expects parameter 1 to be array, integer given", 1, null],
            [false, "array_unshift() expects parameter 1 to be array, boolean given", true, null],
            [false, "array_unshift() expects parameter 1 to be array, boolean given", false, null],
            [false, "array_unshift() expects at least 2 parameters, 0 given"],
            [false, "array_unshift() expects at least 2 parameters, 1 given", null]
       ],
        "array_shift": [
            [true, 1, [1, 2, 3, 4]],
            [true, null, []],
            [true, null, [null]],
            [true, null, [null, null]],
            [false, "array_shift() expects parameter 1 to be array, string given", "Foo"],
            [false, "array_shift() expects parameter 1 to be array, string given", ""],
            [false, "array_shift() expects parameter 1 to be array, null given", null],
            [false, "array_shift() expects parameter 1 to be array, integer given", 0],
            [false, "array_shift() expects parameter 1 to be array, integer given", 1],
            [false, "array_shift() expects parameter 1 to be array, boolean given", true],
            [false, "array_shift() expects parameter 1 to be array, boolean given", false],
            [false, "array_shift() expects exactly 1 parameter, 0 given"],
            [false, "array_shift() expects exactly 1 parameter, 2 given", null, null]
        ],
        "array_push": [
            [true, true, [1, 2, 3, 4], 5],
            [true, true, [], 10],
            [true, true, [], 10, 20, 30, 40],
            [false, "array_push() expects parameter 1 to be array, string given", "Foo", null],
            [false, "array_push() expects parameter 1 to be array, string given", "", null],
            [false, "array_push() expects parameter 1 to be array, null given", null, null],
            [false, "array_push() expects parameter 1 to be array, integer given", 0, null],
            [false, "array_push() expects parameter 1 to be array, integer given", 1, null],
            [false, "array_push() expects parameter 1 to be array, boolean given", true, null],
            [false, "array_push() expects parameter 1 to be array, boolean given", false, null],
            [false, "array_push() expects at least 2 parameters, 0 given"],
            [false, "array_push() expects at least 2 parameters, 1 given", null]
        ],
        "array_pop": [
            [true, 4, [1, 2, 3, 4]],
            [true, null, []],
            [true, null, [null]],
            [true, null, [null, null]],
            [false, "array_pop() expects parameter 1 to be array, string given", "Foo"],
            [false, "array_pop() expects parameter 1 to be array, string given", ""],
            [false, "array_pop() expects parameter 1 to be array, null given", null],
            [false, "array_pop() expects parameter 1 to be array, integer given", 0],
            [false, "array_pop() expects parameter 1 to be array, integer given", 1],
            [false, "array_pop() expects parameter 1 to be array, boolean given", true],
            [false, "array_pop() expects parameter 1 to be array, boolean given", false],
            [false, "array_pop() expects exactly 1 parameter, 0 given"],
            [false, "array_pop() expects exactly 1 parameter, 2 given", null, null]
        ],
        "shuffle": [
            [true, true, [1,2,3,4]],
            [true, true, []],
            [false, "shuffle() expects parameter 1 to be array, string given", "Foo"],
            [false, "shuffle() expects parameter 1 to be array, string given", ""],
            [false, "shuffle() expects parameter 1 to be array, null given", null],
            [false, "shuffle() expects parameter 1 to be array, integer given", 0],
            [false, "shuffle() expects parameter 1 to be array, integer given", 1],
            [false, "shuffle() expects parameter 1 to be array, boolean given", true],
            [false, "shuffle() expects parameter 1 to be array, boolean given", false],
            [false, "shuffle() expects exactly 1 parameter, 0 given"],
            [false, "shuffle() expects exactly 1 parameter, 2 given", null, null]
        ],
        "array_fill": [
            [false, "array_fill() expects parameter 1 to be long, string given", null, "a", null],
            [false, "array_fill(): Number of elements must be positive", null, null, null],
            [false, "array_fill(): Number of elements must be positive", null, 0, null],
            [false, "array_fill() expects exactly 3 parameters, 0 given"],
            [false, "array_fill() expects exactly 3 parameters, 1 given", null],
            [false, "array_fill() expects exactly 3 parameters, 2 given", null, null],
            [false, "array_fill() expects exactly 3 parameters, 4 given", null, null, null, null],
            [true, [1, 1, 1, 1], 0, 4, 1],
            [true, {"1": 1, "2": 1, "3": 1, "4": 1}, 1, 4, 1],
            [true, {"-2": 1, "0": 1, "1": 1, "2": 1}, -2, 4, 1]
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
            [false, "strtolower() expects parameter 1 to be string, array given", {}],
            [true, "abcdef g", "ABCDEF G"],
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
            [false, "strtoupper() expects parameter 1 to be string, array given", {}],
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
            [false, "strrev() expects parameter 1 to be string, array given", [1,2,3]],
            [false, "strrev() expects parameter 1 to be string, array given", {}],
            [false, "strrev() expects parameter 1 to be string, array given", {"a":1}],
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
            [false, "str_repeat() expects parameter 2 to be long, array given", "", {}],
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
    "standard_4": {
        "serialize": [

            [true, "N;", null],
            [true, "b:1;", true],
            [true, "b:0;", false],
            [true, "i:1130;", 1130],
            [true, "d:34.5234;", 34.5234],
            [true, "s:11:\"Foo Baz Bar\";", "Foo Baz Bar"],

            [true, "a:0:{}", []],
            [true, "a:0:{}", {}],
            [true, "a:3:{i:0;i:23;i:1;i:24;i:2;i:25;}", [23, 24, 25]],
            [true, "a:3:{s:1:\"a\";i:1;s:1:\"b\";i:2;s:1:\"c\";i:3;}", {"a": 1, "b": 2, "c": 3}],

            [true, "O:8:\"stdClass\":0:{}", "new stdClass()"],
            [false, "Serialization of 'Closure' is not allowed", "function(){}"],
            [false, "serialize() expects exactly 1 parameter, 2 given", 1, 1],
            [false, "serialize() expects exactly 1 parameter, 0 given"]
        ]
    },
    "standard_5": {
        "floatval": [
            [false, "Object of class stdClass could not be converted to double", "new stdClass()" ],
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

            [true, "object", "new stdClass()"],
            [true, "object", "function () {}"],
//            [true, "object", "function () { return true; }"],
//            [true, "object", "function (a, b) { return a * b; }"],

            [true, "array", {}],
            [true, "array", {"a": 1, "b": 2}],

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

/**
 * standard_5.php - Unit Test (QUnit)
 */

module("standard_5.php", {
    setup: function () {

    },
    teardown: function () {

    }
});

test("intval ($var, $base) ", function () {
    var expected;
    var result;
    var input;

    throws(
        function () {
            intval();
        },
        /^Wrong parameter count for intval\(\)$/,
        'called with no parameters should throw an exception'
    );

    throws(
        function () {
            intval(10, 'dummy');
        },
        /^intval\(\) expects parameter 2 to be long, string given$/,
        'called with nonnumeric second parameter should throw an exception'
    );

    var zero = [
        null, '', [], 'x01', 'kura',
        false, 0.0, 0.9999999
    ];

    for (i = 0; i < zero.length; i++) {
        input = zero[i];
        expected = 0;
        result = intval(input);
        strictEqual(result, expected, 'zeros: ' + i);
    }

    var one = [
        true, '1', '01', '01x',
        [1], [1, 2, 3],
        1.0, 1.9, '1.0', '1.9'
    ];

    for (i = 0; i < one.length; i++) {
        input = one[i];
        expected = 1;
        result = intval(input);
        strictEqual(result, expected, 'ones: ' + i);
    }

    var base = [2, 3, 8, 10, 16, 17];

    for (i = 0; i < base.length; i++) {
        input = 10;
        expected = base[i];
        result = intval(input, base[i]);
        strictEqual(result, input, 'base: ' + base[i]);
    }

    for (i = 0; i < base.length; i++) {
        input = '10';
        expected = base[i];
        result = intval(input, base[i]);
        strictEqual(result, expected, 'base: ' + base[i]);
    }

    try {

    }
    catch (e) {
        alert(e);
    }

});

test("floatval ($var) ", function () {
    ok(false, "Not implemented yet.");
});

test("doubleval ($var) ", function () {
    ok(false, "Not implemented yet.");
});

test("strval ($var) ", function () {
    ok(false, "Not implemented yet.");
});

test("gettype ($var) ", function () {
    var expected;
    var key;

    throws(
        function () {
            gettype();
        },
        /gettype\(\) expects exactly 1 parameter, 0 given/,
        'called with no parameter should throw an exception'
    );

    var fnc1 = function(a, b) {
        return a + b;
    };

    function fnc2() {
        return false;
    }

    expected = {
        "NULL": [null],
        "boolean": [true, false],
        "string": ["", "a", "Let's Rock", "1", "-1", "9.333"],
        "array": [new Array(), [], [1, 2, 3], [null, null, null]],
        "object": [new Object(), {}, {a:1,b:2}, function(){}, fnc1, fnc2],
        "resource": [document.getElementsByName('body')],
        "integer": [-1, 0, 1, 100000],
        "double": [1.3, 1.01, 0.4, .25] // , 1.0] in javascript 1.0 is parsed into 1 no float detection available.
    };

    for (key in expected) {
        for (i = 0; i < expected[key].length; i++) {
            strictEqual(gettype(expected[key][i]), key, key + ': ' + i);
        }
    }
});

test("settype ($var, $type) ", function () {
    ok(false, "Not implemented yet.");
});

test("is_null ($var) ", function () {
    ok(false, "Not implemented yet.");
});

test("is_resource ($var) ", function () {
    ok(false, "Not implemented yet.");
});

test("is_bool ($var) ", function () {
    ok(false, "Not implemented yet.");
});

test("is_long ($var) ", function () {
    ok(false, "Not implemented yet.");
});

test("is_float ($var) ", function () {
    ok(false, "Not implemented yet.");
});

test("is_int ($var) ", function () {
    ok(false, "Not implemented yet.");
});

test("is_integer ($var) ", function () {
    ok(false, "Not implemented yet.");
});

test("is_double ($var) ", function () {
    ok(false, "Not implemented yet.");
});

test("is_real ($var) ", function () {
    ok(false, "Not implemented yet.");
});

test("is_numeric ($var) ", function () {
    ok(false, "Not implemented yet.");
});

test("is_string ($var) ", function () {
    ok(false, "Not implemented yet.");
});

test("is_array ($var) ", function () {
    ok(false, "Not implemented yet.");
});

test("is_object ($var) ", function () {
    ok(false, "Not implemented yet.");
});

test("is_scalar ($var) ", function () {
    ok(false, "Not implemented yet.");
});

test("is_callable ($name, $syntax_only, $callable_name) ", function () {
    ok(false, "Not implemented yet.");
});

test("pclose ($handle) ", function () {
    ok(false, "Not implemented yet.");
});

test("popen ($command, $mode) ", function () {
    ok(false, "Not implemented yet.");
});

test("readfile ($filename, $use_include_path, $context) ", function () {
    ok(false, "Not implemented yet.");
});

test("rewind ($handle) ", function () {
    ok(false, "Not implemented yet.");
});

test("rmdir ($dirname, $context) ", function () {
    ok(false, "Not implemented yet.");
});

test("umask ($mask) ", function () {
    ok(false, "Not implemented yet.");
});

test("fclose ($handle) ", function () {
    ok(false, "Not implemented yet.");
});

test("feof ($handle) ", function () {
    ok(false, "Not implemented yet.");
});

test("fgetc ($handle) ", function () {
    ok(false, "Not implemented yet.");
});

test("fgets ($handle, $length) ", function () {
    ok(false, "Not implemented yet.");
});

test("fgetss ($handle, $length, $allowable_tags) ", function () {
    ok(false, "Not implemented yet.");
});

test("fread ($handle, $length) ", function () {
    ok(false, "Not implemented yet.");
});

test("fopen ($filename, $mode, $use_include_path, $context) ", function () {
    ok(false, "Not implemented yet.");
});

test("fpassthru ($handle) ", function () {
    ok(false, "Not implemented yet.");
});

test("ftruncate ($handle, $size) ", function () {
    ok(false, "Not implemented yet.");
});

test("fstat ($handle) ", function () {
    ok(false, "Not implemented yet.");
});

test("fseek ($handle, $offset, $whence) ", function () {
    ok(false, "Not implemented yet.");
});

test("ftell ($handle) ", function () {
    ok(false, "Not implemented yet.");
});

test("fflush ($handle) ", function () {
    ok(false, "Not implemented yet.");
});

test("fwrite ($handle, $string, $length) ", function () {
    ok(false, "Not implemented yet.");
});

test("fputs ($fp, $str, $length) ", function () {
    ok(false, "Not implemented yet.");
});

test("mkdir ($pathname, $mode, $recursive, $context) ", function () {
    ok(false, "Not implemented yet.");
});

test("rename ($oldname, $newname, $context) ", function () {
    ok(false, "Not implemented yet.");
});

test("copy ($source, $dest, $context) ", function () {
    ok(false, "Not implemented yet.");
});

test("tempnam ($dir, $prefix) ", function () {
    ok(false, "Not implemented yet.");
});

test("tmpfile () ", function () {
    ok(false, "Not implemented yet.");
});

test("file ($filename, $flags, $context) ", function () {
    ok(false, "Not implemented yet.");
});

test("file_get_contents ($filename, $flags, $context, $offset, $maxlen) ", function () {
    ok(false, "Not implemented yet.");
});

test("file_put_contents ($filename, $data, $flags, $context) ", function () {
    ok(false, "Not implemented yet.");
});


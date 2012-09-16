/**
 * standard_5 - Unit Test (QUnit)
 */

module("standard_5.php", {
    setup: function () {
        extra = [];
    },
    teardown: function () {

    }
});

test("intval($var, $base)", function () {
    runTestOnData();
});

test("gettype($var)", function () {

    var fun1 = function () {
        return true;
    };

    function fun2(a, b) {
        return a * b;
    }

    var _expect = 9;

    try {
        extra = [
            [true, "object", new stdClass()],
            [true, "object", function () {}],
            [true, "object", function () { return true; }],
            [true, "object", function (a, b) { return a * b; }],
            [true, "object", fun1],
            [true, "object", fun2],
            [true, "object", function fun3(a, b) { return a * b; }],
            [true, "double", .9999999999999999],
            [true, "double", .8999999999999999999999999999999]

        ];
    }
    catch (e) {
        ok(false, 'Unexpected exception: ' + e);
    }

    runTestOnData(extra, _expect);
});

test("floatval($var)", function () {

    var _expect = 1;

    try {
        extra = [
            [false, "Object of class stdClass could not be converted to double", new stdClass() ]
        ];
    }
    catch (e) {
        ok(false, 'Unexpected exception: ' + e);
    }

    runTestOnData(extra, _expect);
});

/*

 test("doubleval ($var) ", function () {
 ok(false, "Not implemented yet.");
 });

 test("strval ($var) ", function () {
 ok(false, "Not implemented yet.");
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

 */
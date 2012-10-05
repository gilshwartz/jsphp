/**
 * standard_3.php - Unit Test (QUnit)
 */

module("standard_3", {
    setup: function () {

    },
    teardown: function () {

    }
});

test("pi", function(){
    runTestOnData();
});

test("base64_decode", function(){
    runTestOnData();
});

test("base64_encode", function(){
    runTestOnData();
});

/*
test("getlastmod", function(){
    ok(false, "Not implemented yet.");
});



test("convert_uuencode", function(){
    ok(false, "Not implemented yet.");
});

test("convert_uudecode", function(){
    ok(false, "Not implemented yet.");
});

test("abs", function(){
    var expected;
    var key;
    var input;

    throws(
        function () {
            abs();
        },
        /^abs\(\) expects exactly 1 parameter, 0 given$/,
        'call with no parameters should throw an exception'
    );

    throws(
        function () {
            abs({});
        },
        /^Object of class stdClass could not be converted to int$/,
        'call with object as a parameter should throw an exception'
    );

    expected = {
        'float': {
            input: [-0.1, 0.1, -0.234, 0.5, -1.0],
            expected: [0.1, 0.1, 0.234, 0.5, 1.0]
        },
        'integer': {
            input: [-2, 2],
            expected: [2, 2]
        },
        'others': {
            input: [null, new Array(),  [], [1,3,4]],
            expected: [0, false, false, false]
        }
    }

    for(key in expected) {
        for(i = 0; i < expected[key]['input'].length; i++) {
            strictEqual(abs(expected[key]['input'][i]), expected[key]['expected'][i], key + ': ' + i);
        }
    }
});

test("ceil", function(){
    ok(false, "Not implemented yet.");
});

test("floor", function(){
    ok(false, "Not implemented yet.");
});

test("round", function(){
    ok(false, "Not implemented yet.");
});

test("sin", function(){
    ok(false, "Not implemented yet.");
});

test("cos", function(){
    ok(false, "Not implemented yet.");
});

test("tan", function(){
    ok(false, "Not implemented yet.");
});

test("asin", function(){
    ok(false, "Not implemented yet.");
});

test("acos", function(){
    ok(false, "Not implemented yet.");
});

test("atan", function(){
    ok(false, "Not implemented yet.");
});

test("atanh", function(){
    ok(false, "Not implemented yet.");
});

test("atan2", function(){
    ok(false, "Not implemented yet.");
});

test("sinh", function(){
    ok(false, "Not implemented yet.");
});

test("cosh", function(){
    ok(false, "Not implemented yet.");
});

test("tanh", function(){
    ok(false, "Not implemented yet.");
});

test("asinh", function(){
    ok(false, "Not implemented yet.");
});

test("acosh", function(){
    ok(false, "Not implemented yet.");
});

test("expm1", function(){
    ok(false, "Not implemented yet.");
});

test("log1p", function(){
    ok(false, "Not implemented yet.");
});

test("pi", function(){
    strictEqual(pi(), M_PI);
});

test("is_finite", function(){
    ok(false, "Not implemented yet.");
});

test("is_nan", function(){
    ok(false, "Not implemented yet.");
});

test("is_infinite", function(){
    ok(false, "Not implemented yet.");
});

test("pow", function(){
    ok(false, "Not implemented yet.");
});

test("exp", function(){
    ok(false, "Not implemented yet.");
});

test("log", function(){
    ok(false, "Not implemented yet.");
});

test("log10", function(){
    ok(false, "Not implemented yet.");
});

test("sqrt", function(){
    ok(false, "Not implemented yet.");
});

test("hypot", function(){
    ok(false, "Not implemented yet.");
});

test("deg2rad", function(){
    ok(false, "Not implemented yet.");
});

test("rad2deg", function(){
    ok(false, "Not implemented yet.");
});

test("bindec", function(){
    ok(false, "Not implemented yet.");
});

test("hexdec", function(){
    ok(false, "Not implemented yet.");
});

test("octdec", function(){
    ok(false, "Not implemented yet.");
});

test("decbin", function(){
    ok(false, "Not implemented yet.");
});

test("decoct", function(){
    ok(false, "Not implemented yet.");
});

test("dechex", function(){
    ok(false, "Not implemented yet.");
});

test("base_convert", function(){
    ok(false, "Not implemented yet.");
});

test("number_format", function(){
    ok(false, "Not implemented yet.");
});

test("fmod", function(){
    ok(false, "Not implemented yet.");
});

test("inet_ntop", function(){
    ok(false, "Not implemented yet.");
});

test("inet_pton", function(){
    ok(false, "Not implemented yet.");
});

test("ip2long", function(){
    ok(false, "Not implemented yet.");
});

test("long2ip", function(){
    ok(false, "Not implemented yet.");
});

test("getenv", function(){
    ok(false, "Not implemented yet.");
});

test("putenv", function(){
    ok(false, "Not implemented yet.");
});

test("getopt", function(){
    ok(false, "Not implemented yet.");
});

test("sys_getloadavg", function(){
    ok(false, "Not implemented yet.");
});

test("microtime", function(){
    ok(false, "Not implemented yet.");
});

test("gettimeofday", function(){
    ok(false, "Not implemented yet.");
});

test("getrusage", function(){
    ok(false, "Not implemented yet.");
});

test("uniqid", function(){
    ok(false, "Not implemented yet.");
});

test("quoted_printable_decode", function(){
    ok(false, "Not implemented yet.");
});

test("quoted_printable_encode", function(){
    ok(false, "Not implemented yet.");
});

test("convert_cyr_string", function(){
    ok(false, "Not implemented yet.");
});

test("get_current_user", function(){
    ok(false, "Not implemented yet.");
});

test("set_time_limit", function(){
    ok(false, "Not implemented yet.");
});

test("get_cfg_var", function(){
    ok(false, "Not implemented yet.");
});

test("magic_quotes_runtime", function(){
    ok(false, "Not implemented yet.");
});

test("set_magic_quotes_runtime", function(){
    ok(false, "Not implemented yet.");
});

test("get_magic_quotes_gpc", function(){
    ok(false, "Not implemented yet.");
});

test("get_magic_quotes_runtime", function(){
    ok(false, "Not implemented yet.");
});

test("import_request_variables", function(){
    ok(false, "Not implemented yet.");
});

test("error_log", function(){
    ok(false, "Not implemented yet.");
});

*/

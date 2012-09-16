/**
 * standard_3.php - Unit Test (QUnit)
 */

module("standard_3.php", {
    setup: function () {

    },
    teardown: function () {

    }
});

test("pi () ", function(){
    runTestOnData();
});

test("base64_decode ($data, $strict) ", function(){
    runTestOnData();
});

test("base64_encode ($data) ", function(){
    runTestOnData();
});

/*
test("getlastmod () ", function(){
    ok(false, "Not implemented yet.");
});



test("convert_uuencode ($data) ", function(){
    ok(false, "Not implemented yet.");
});

test("convert_uudecode ($data) ", function(){
    ok(false, "Not implemented yet.");
});

test("abs ($number) ", function(){
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

test("ceil ($value) ", function(){
    ok(false, "Not implemented yet.");
});

test("floor ($value) ", function(){
    ok(false, "Not implemented yet.");
});

test("round ($val, $precision, $mode) ", function(){
    ok(false, "Not implemented yet.");
});

test("sin ($arg) ", function(){
    ok(false, "Not implemented yet.");
});

test("cos ($arg) ", function(){
    ok(false, "Not implemented yet.");
});

test("tan ($arg) ", function(){
    ok(false, "Not implemented yet.");
});

test("asin ($arg) ", function(){
    ok(false, "Not implemented yet.");
});

test("acos ($arg) ", function(){
    ok(false, "Not implemented yet.");
});

test("atan ($arg) ", function(){
    ok(false, "Not implemented yet.");
});

test("atanh ($arg) ", function(){
    ok(false, "Not implemented yet.");
});

test("atan2 ($y, $x) ", function(){
    ok(false, "Not implemented yet.");
});

test("sinh ($arg) ", function(){
    ok(false, "Not implemented yet.");
});

test("cosh ($arg) ", function(){
    ok(false, "Not implemented yet.");
});

test("tanh ($arg) ", function(){
    ok(false, "Not implemented yet.");
});

test("asinh ($arg) ", function(){
    ok(false, "Not implemented yet.");
});

test("acosh ($arg) ", function(){
    ok(false, "Not implemented yet.");
});

test("expm1 ($arg) ", function(){
    ok(false, "Not implemented yet.");
});

test("log1p ($number) ", function(){
    ok(false, "Not implemented yet.");
});

test("pi () ", function(){
    strictEqual(pi(), M_PI);
});

test("is_finite ($val) ", function(){
    ok(false, "Not implemented yet.");
});

test("is_nan ($val) ", function(){
    ok(false, "Not implemented yet.");
});

test("is_infinite ($val) ", function(){
    ok(false, "Not implemented yet.");
});

test("pow ($base, $exp) ", function(){
    ok(false, "Not implemented yet.");
});

test("exp ($arg) ", function(){
    ok(false, "Not implemented yet.");
});

test("log ($arg, $base) ", function(){
    ok(false, "Not implemented yet.");
});

test("log10 ($arg) ", function(){
    ok(false, "Not implemented yet.");
});

test("sqrt ($arg) ", function(){
    ok(false, "Not implemented yet.");
});

test("hypot ($x, $y) ", function(){
    ok(false, "Not implemented yet.");
});

test("deg2rad ($number) ", function(){
    ok(false, "Not implemented yet.");
});

test("rad2deg ($number) ", function(){
    ok(false, "Not implemented yet.");
});

test("bindec ($binary_string) ", function(){
    ok(false, "Not implemented yet.");
});

test("hexdec ($hex_string) ", function(){
    ok(false, "Not implemented yet.");
});

test("octdec ($octal_string) ", function(){
    ok(false, "Not implemented yet.");
});

test("decbin ($number) ", function(){
    ok(false, "Not implemented yet.");
});

test("decoct ($number) ", function(){
    ok(false, "Not implemented yet.");
});

test("dechex ($number) ", function(){
    ok(false, "Not implemented yet.");
});

test("base_convert ($number, $frombase, $tobase) ", function(){
    ok(false, "Not implemented yet.");
});

test("number_format ($number, $decimals, $dec_point, $thousands_sep) ", function(){
    ok(false, "Not implemented yet.");
});

test("fmod ($x, $y) ", function(){
    ok(false, "Not implemented yet.");
});

test("inet_ntop ($in_addr) ", function(){
    ok(false, "Not implemented yet.");
});

test("inet_pton ($address) ", function(){
    ok(false, "Not implemented yet.");
});

test("ip2long ($ip_address) ", function(){
    ok(false, "Not implemented yet.");
});

test("long2ip ($proper_address) ", function(){
    ok(false, "Not implemented yet.");
});

test("getenv ($varname) ", function(){
    ok(false, "Not implemented yet.");
});

test("putenv ($setting) ", function(){
    ok(false, "Not implemented yet.");
});

test("getopt ($options, $longopts) ", function(){
    ok(false, "Not implemented yet.");
});

test("sys_getloadavg () ", function(){
    ok(false, "Not implemented yet.");
});

test("microtime ($get_as_float) ", function(){
    ok(false, "Not implemented yet.");
});

test("gettimeofday ($return_float) ", function(){
    ok(false, "Not implemented yet.");
});

test("getrusage ($who) ", function(){
    ok(false, "Not implemented yet.");
});

test("uniqid ($prefix, $more_entropy) ", function(){
    ok(false, "Not implemented yet.");
});

test("quoted_printable_decode ($str) ", function(){
    ok(false, "Not implemented yet.");
});

test("quoted_printable_encode ($str) ", function(){
    ok(false, "Not implemented yet.");
});

test("convert_cyr_string ($str, $from, $to) ", function(){
    ok(false, "Not implemented yet.");
});

test("get_current_user () ", function(){
    ok(false, "Not implemented yet.");
});

test("set_time_limit ($seconds) ", function(){
    ok(false, "Not implemented yet.");
});

test("get_cfg_var ($option) ", function(){
    ok(false, "Not implemented yet.");
});

test("magic_quotes_runtime ($new_setting) ", function(){
    ok(false, "Not implemented yet.");
});

test("set_magic_quotes_runtime ($new_setting) ", function(){
    ok(false, "Not implemented yet.");
});

test("get_magic_quotes_gpc () ", function(){
    ok(false, "Not implemented yet.");
});

test("get_magic_quotes_runtime () ", function(){
    ok(false, "Not implemented yet.");
});

test("import_request_variables ($types, $prefix) ", function(){
    ok(false, "Not implemented yet.");
});

test("error_log ($message, $message_type, $destination, $extra_headers) ", function(){
    ok(false, "Not implemented yet.");
});

*/
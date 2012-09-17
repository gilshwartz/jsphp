/**
 * standard_8.php - Unit Test (QUnit)
 */

module("standard_8.php", {
    setup: function () {

    },
    teardown: function () {

    }
});


test("array_pop ($array) ", function(){
    runTestOnData([], 2);

    var input = [1, 2, 3, 4, 5, 6, 7];
    var lenbefore = input.length;

    var element = input[input.length - 1];

    deepEqual(array_pop(input), element);
    equal(input.length, lenbefore - 1);
});

test("array_push ($array, $var, $_) ", function(){
    runTestOnData([], 4);
    var input, lenbefore, element;
    input = [1, 2, 3, 4, 5, 6, 7];
    lenbefore = input.length;

    element = 10;
    array_push(input, element);
    equal(input.length, lenbefore + 1);
    deepEqual(input[input.length - 1], element);

    input = [1, 2, 3, 4, 5, 6, 7];
    lenbefore = input.length;
    element = 40;
    array_push(input, 10, 20, 30, element);
    equal(input.length, lenbefore + 4);
    deepEqual(input[input.length - 1], element);

});

test("array_shift ($array) ", function(){
    runTestOnData([], 2);

    var input = [1, 2, 3, 4, 5, 6, 7];
    var lenbefore = input.length;

    var element = input[0];

    deepEqual(array_shift(input), element);
    equal(input.length, lenbefore - 1);
});

test("array_unshift ($array, $var, $_) ", function(){
    runTestOnData([], 4);
    var input, lenbefore, element;
    input = [1, 2, 3, 4, 5, 6, 7];
    lenbefore = input.length;

    element = 10;
    array_unshift(input, element);
    equal(input.length, lenbefore + 1);
    deepEqual(input[0], element);

    input = [1, 2, 3, 4, 5, 6, 7];
    lenbefore = input.length;
    element = 40;
    array_unshift(input, 10, 20, 30, element);
    equal(input.length, lenbefore + 4);
    deepEqual(input[0], element);
});

test("array_fill ($start_index, $num, $value) ", function () {
    runTestOnData();
});

test("shuffle ($array) ", function () {
    runTestOnData([], 3);

    var i;
    var input = [1, 2, 3, 4, 5, 6, 7];
    var temp = [];
    for(i = 0; i < input.length; i++) {
        temp.push(input[i]);
    }

    deepEqual(input, temp);
    shuffle(input);
    equal(input.length, temp.length);
    notDeepEqual(input, temp);
});

/*
 test("syslog ($priority, $message) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("closelog () ", function(){
 ok(false, "Not implemented yet.");
 });

 test("define_syslog_variables () ", function(){
 ok(false, "Not implemented yet.");
 });

 test("lcg_value () ", function(){
 ok(false, "Not implemented yet.");
 });

 test("metaphone ($str, $phones) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_start ($output_callback, $chunk_size, $erase) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_flush () ", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_clean () ", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_end_flush () ", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_end_clean () ", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_get_flush () ", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_get_clean () ", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_get_length () ", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_get_level () ", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_get_status ($full_status) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_get_contents () ", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_implicit_flush ($flag) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_list_handlers () ", function(){
 ok(false, "Not implemented yet.");
 });

 test("ksort ($array, $sort_flags) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("krsort ($array, $sort_flags) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("natsort ($array) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("natcasesort ($array) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("asort ($array, $sort_flags) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("arsort ($array, $sort_flags) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("sort ($array, $sort_flags) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("rsort ($array, $sort_flags) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("usort ($array, $cmp_function) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("uasort ($array, $cmp_function) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("uksort ($array, $cmp_function) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("array_walk ($array, $funcname, $userdata) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("array_walk_recursive ($input, $funcname, $userdata) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("count ($var, $mode) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("end ($array) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("prev ($array) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("next ($array) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("reset ($array) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("current ($array) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("key ($array) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("min ($value1, $value2) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("max ($value1, $value2) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("in_array ($needle, $haystack, $strict) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("array_search ($needle, $haystack, $strict) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("extract ($var_array, $extract_type, $prefix) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("compact ($varname, $_) ", function(){
 ok(false, "Not implemented yet.");
 });


 test("array_fill_keys ($keys, $value) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("range ($low, $high, $step) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("array_multisort ($arr, $arg, $arg, $_) ", function(){
 ok(false, "Not implemented yet.");
 });


 test("array_splice ($input, $offset, $length, $replacement) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("array_slice ($array, $offset, $length, $preserve_keys) ", function(){
 ok(false, "Not implemented yet.");
 });

 test("array_merge ($array1, $array2, $_) ", function(){
 ok(false, "Not implemented yet.");
 });

 */
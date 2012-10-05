/**
 * standard_8.php - Unit Test (QUnit)
 */

module("standard_8", {
    setup: function () {

    },
    teardown: function () {

    }
});

test("array_fill", function () {
    runTestOnData();
});

test("array_pop", function(){
    runTestOnData([], 2);

    var input = [1, 2, 3, 4, 5, 6, 7];
    var lenbefore = input.length;

    var element = input[input.length - 1];

    deepEqual(array_pop(input), element);
    equal(input.length, lenbefore - 1);
});

test("array_push", function(){
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

test("array_shift", function(){
    runTestOnData([], 2);

    var input = [1, 2, 3, 4, 5, 6, 7];
    var lenbefore = input.length;

    var element = input[0];

    deepEqual(array_shift(input), element);
    equal(input.length, lenbefore - 1);
});

test("array_unshift", function(){
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

test("shuffle", function () {
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
 test("syslog", function(){
 ok(false, "Not implemented yet.");
 });

 test("closelog", function(){
 ok(false, "Not implemented yet.");
 });

 test("define_syslog_variables", function(){
 ok(false, "Not implemented yet.");
 });

 test("lcg_value", function(){
 ok(false, "Not implemented yet.");
 });

 test("metaphone", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_start", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_flush", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_clean", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_end_flush", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_end_clean", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_get_flush", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_get_clean", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_get_length", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_get_level", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_get_status", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_get_contents", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_implicit_flush", function(){
 ok(false, "Not implemented yet.");
 });

 test("ob_list_handlers", function(){
 ok(false, "Not implemented yet.");
 });

 test("ksort", function(){
 ok(false, "Not implemented yet.");
 });

 test("krsort", function(){
 ok(false, "Not implemented yet.");
 });

 test("natsort", function(){
 ok(false, "Not implemented yet.");
 });

 test("natcasesort", function(){
 ok(false, "Not implemented yet.");
 });

 test("asort", function(){
 ok(false, "Not implemented yet.");
 });

 test("arsort", function(){
 ok(false, "Not implemented yet.");
 });

 test("sort", function(){
 ok(false, "Not implemented yet.");
 });

 test("rsort", function(){
 ok(false, "Not implemented yet.");
 });

 test("usort", function(){
 ok(false, "Not implemented yet.");
 });

 test("uasort", function(){
 ok(false, "Not implemented yet.");
 });

 test("uksort", function(){
 ok(false, "Not implemented yet.");
 });

 test("array_walk", function(){
 ok(false, "Not implemented yet.");
 });

 test("array_walk_recursive", function(){
 ok(false, "Not implemented yet.");
 });

 test("count", function(){
 ok(false, "Not implemented yet.");
 });

 test("end", function(){
 ok(false, "Not implemented yet.");
 });

 test("prev", function(){
 ok(false, "Not implemented yet.");
 });

 test("next", function(){
 ok(false, "Not implemented yet.");
 });

 test("reset", function(){
 ok(false, "Not implemented yet.");
 });

 test("current", function(){
 ok(false, "Not implemented yet.");
 });

 test("key", function(){
 ok(false, "Not implemented yet.");
 });

 test("min", function(){
 ok(false, "Not implemented yet.");
 });

 test("max", function(){
 ok(false, "Not implemented yet.");
 });

 test("in_array", function(){
 ok(false, "Not implemented yet.");
 });

 test("array_search", function(){
 ok(false, "Not implemented yet.");
 });

 test("extract", function(){
 ok(false, "Not implemented yet.");
 });

 test("compact", function(){
 ok(false, "Not implemented yet.");
 });


 test("array_fill_keys", function(){
 ok(false, "Not implemented yet.");
 });

 test("range", function(){
 ok(false, "Not implemented yet.");
 });

 test("array_multisort", function(){
 ok(false, "Not implemented yet.");
 });


 test("array_splice", function(){
 ok(false, "Not implemented yet.");
 });

 test("array_slice", function(){
 ok(false, "Not implemented yet.");
 });

 test("array_merge", function(){
 ok(false, "Not implemented yet.");
 });

 */

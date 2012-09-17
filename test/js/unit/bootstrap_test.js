/**
 * bootstrap_test - Unit Test (QUnit)
 */

module("bootstrap_test", {
    setup: function () {

    },
    teardown: function () {

    }
});

test("___validate_function_arguments (required)", function () {

    var funct, config, args;

    // EXACTLY:
    funct = "x";
    config = { "required": [true, true] };
    args = [];

    try {
        ok(___validate_function_arguments(funct, config, args), funct);
        ok(false, "No exception was thrown.");
    }
    catch (e) {
        var given = (typeof e.getMessage !== 'undefined' ? e.getMessage() : e);
        var expected = funct + "() expects exactly " + config.required.length + " parameters, " + args.length + " given";
        deepEqual(given, expected, funct);
    }

    args = [1];

    try {
        ok(___validate_function_arguments(funct, config, args), funct);
        ok(false, "No exception was thrown.");
    }
    catch (e) {
        var given = (typeof e.getMessage !== 'undefined' ? e.getMessage() : e);
        var expected = funct + "() expects exactly " + config.required.length + " parameters, " + args.length + " given";
        deepEqual(given, expected, funct);
    }

    args = [3];

    try {
        ok(___validate_function_arguments(funct, config, args), funct);
        ok(false, "No exception was thrown.");
    }
    catch (e) {
        var given = (typeof e.getMessage !== 'undefined' ? e.getMessage() : e);
        var expected = funct + "() expects exactly " + config.required.length + " parameters, " + args.length + " given";
        deepEqual(given, expected, funct);
    }

    funct = "a";
    config = { "required": [] };
    args = [1, 2, 3];
    ok(___validate_function_arguments(funct, config, args), funct);

    // AT LEAST:
    config = { "required": [true, true, false] };
    args = [1];

    try {
        ok(___validate_function_arguments(funct, config, args), funct);
        ok(false, "No exception was thrown.");
    }
    catch (e) {
        var given = (typeof e.getMessage !== 'undefined' ? e.getMessage() : e);
        var expected = funct + "() expects at least " + 2 + " parameters, " + args.length + " given";
        deepEqual(given, expected, funct);
    }

    // OK:
    funct = "b";
    config = { "required": [true, true, false] };
    args = [1, 2];
    ok(___validate_function_arguments(funct, config, args), funct);

    funct = "b";
    config = { "required": [true, true, false] };
    args = [1, 2, 3];
    ok(___validate_function_arguments(funct, config, args), funct);

    // AT MOST:
    funct = "b";
    config = { "required": [true, true, false] };
    args = [1, 2, 3, 4];

    try {
        ok(___validate_function_arguments(funct, config, args), funct);
        ok(false, "No exception was thrown.");
    }
    catch (e) {
        var given = (typeof e.getMessage !== 'undefined' ? e.getMessage() : e);
        var expected = funct + "() expects at most " + config.required.length + " parameters, " + args.length + " given";
        deepEqual(given, expected, funct);
    }

    funct = "c";
    config = { "required": [true, true, null] };
    args = [];

    try {
        ok(___validate_function_arguments(funct, config, args), funct);
        ok(false, "No exception was thrown.");
    }
    catch (e) {
        var given = (typeof e.getMessage !== 'undefined' ? e.getMessage() : e);
        var expected = funct + "() expects at least 2 parameters, " + args.length + " given";
        deepEqual(given, expected, funct);
    }

    funct = "d";
    args = [1];

    try {
        ok(___validate_function_arguments(funct, config, args), funct);
        ok(false, "No exception was thrown.");
    }
    catch (e) {
        var given = (typeof e.getMessage !== 'undefined' ? e.getMessage() : e);
        var expected = funct + "() expects at least 2 parameters, " + args.length + " given";
        deepEqual(given, expected, funct);
    }

    funct = "e";
    args = [1, 2];
    ok(___validate_function_arguments(funct, config, args), funct);

    funct = "f";
    args = [1, 2, 3];
    ok(___validate_function_arguments(funct, config, args), funct);

    funct = "g";
    args = [1, 2, 3, 4, 5, 6, 7, 8];
    ok(___validate_function_arguments(funct, config, args), funct);
});
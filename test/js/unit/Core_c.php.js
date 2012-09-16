/**
 * Core_c.php - Unit Test (QUnit)
 */

module("Core_c.php", {
    setup: function () {

    },
    teardown: function () {

    }
});

test("class stdClass", 3, function(){
    var obj;

    var defined = typeof stdClass === 'function';
    ok(defined, 'class is defined');
    if(defined === false) {
        return;
    }
    obj = new stdClass();
    equal(getConstructorNameForTest(obj), 'stdClass', 'constructor is implemented');

    try {
        equal('' + obj, expected, 'toString');
        ok(false, 'No exception was thrown.');
    }
    catch(e) {
        equal(
            e,
            'Object of class stdClass could not be converted to string in Command line code on line 1',
            'conversion to string should throw an exception'
        );
    }
});

test("class Exception default", 8, function(){
    var defined, expected, obj;

    defined = typeof stdClass === 'function';
    ok(defined, 'class is defined');
    if(defined === false) {
        return;
    }
    obj = new Exception();
    equal(getConstructorNameForTest(obj), 'Exception', 'constructor is implemented');

    expected = "Uncaught exception 'Exception' in Command line code on line 1";
    equal(obj, expected, 'default toString()')

    expected = "Uncaught exception 'Exception'";
    strictEqual(obj.getMessage(), expected, 'default getMessage()');

    expected = 0;
    strictEqual(obj.getCode(), expected, 'default getCode()');

    expected = "Command line code";
    strictEqual(obj.getFile(), expected, 'default getFile()');

    expected = 1;
    strictEqual(obj.getLine(), expected, 'default getLine()');

    expected = null;
    strictEqual(obj.getPrevious(), expected, 'default getPrevious()');
});

test("class Exception customized", 6, function(){

    var expected, defined, obj, msg, code;

    defined = typeof stdClass === 'function';
    ok(defined, 'class is defined');
    if(defined === false) {
        return;
    }
    obj = new Exception();
    equal(getConstructorNameForTest(obj), 'Exception', 'constructor is implemented');

    msg = 'Foo exception';
    code = 1966;
    var previous = new Exception('Previous exception');

    obj = new Exception(msg);
    expected = msg;
    strictEqual(obj.getMessage(), expected, 'customized getMessage()');

    obj = new Exception(msg, code);
    expected = code;
    strictEqual(obj.getCode(), expected, 'customized getCode()');

    obj = new Exception(msg, code, previous);
    expected = previous;
    strictEqual(obj.getPrevious(), expected, 'customized getPrevious()');

    try {
        throw obj;
    }
    catch(e) {
        equal(e, 'Foo exception in Command line code on line 1', 'customized toString()')
    }
});

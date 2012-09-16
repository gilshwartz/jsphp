/**
 * pcre.php - Unit Test (QUnit)
 */

module("pcre.php", {
    setup: function () {

    },
    teardown: function () {

    }
});

test("preg_match ($pattern, $subject, $matches, $flags, $offset) ", function(){

    expect(8);

    var defined = typeof preg_match === 'function';

    ok(defined, 'function is defined');

    if(defined === false) {
        return;
    }

    var phrase;
    var expected;
    var result;
    var match = [];
    var expectedmatch = []

    phrase = 'Abb';
    expected = 0;
    result = preg_match(/a/, phrase);
    strictEqual(result, expected, 'case sensitive match once');

    phrase = 'Abb';
    expected = 1;
    result = preg_match('/a/i', phrase);
    strictEqual(result, expected, 'case insensitive match');

    phrase = 'Abb';
    expected = 1;
    result = preg_match('#a#i', phrase);
    strictEqual(result, expected, 'case insensitive match - different boderchar');

    phrase = 'Abb';
    expectedmatch = ["A"];
    preg_match('/a/i', phrase, match);

    strictEqual(match.length, expectedmatch.length, 'match reference test (length)');
    deepEqual(match, expectedmatch);

    match = [];
    phrase = 'Abb';
    expectedmatch = [];
    preg_match('/a/', phrase, match);

    strictEqual(match.length, expectedmatch.length, 'match reference test (length)');
    deepEqual(match, expectedmatch);
});

test("preg_match_all ($pattern, $subject, $matches, $flags, $offset) ", function(){

    expect(5);

    var defined = typeof preg_match_all === 'function';
    ok(defined, 'function is defined');
    if(defined === false) {
        return;
    }

    var phrase;
    var expected;
    var result;
    var match = [];
    var expectedmatch = []

    match = [];
    phrase = 'Abbabba';
    expectedmatch = ["a","a"];
    preg_match_all('/a/', phrase, match);

    strictEqual(match.length, expectedmatch.length, 'match reference test (length)');
    deepEqual(match, expectedmatch);

    match = [];
    phrase = 'Abbabba';
    expectedmatch = ["A", "a", "a"];
    preg_match_all('/a/i', phrase, match);

    strictEqual(match.length, expectedmatch.length, 'match reference test (length)');
    deepEqual(match, expectedmatch);
});

test("preg_replace ($pattern, $replacement, $subject, $limit, $count)", function(){

    expect(7);

    var defined = typeof preg_replace === 'function';
    ok(defined, 'function is defined');
    if(defined === false) {
        return;
    }

    var phrase;
    var expected;
    var result;
    var expectedcount = [];
    var count = [];


    phrase = 'Abbabba';
    expected = 'Abbbb';
    result = preg_replace('/a/', '', phrase);
    strictEqual(result, expected, 'simple removal case sensitive');

    phrase = 'Abbabba';
    expected = 'bbbb';
    result = preg_replace('/a/i', '', phrase);
    strictEqual(result, expected, 'simple removal case insensitive');

    phrase = 'Abbabba';
    expected = 'xbbxbbx';
    result = preg_replace('/a/i', 'x', phrase);
    strictEqual(result, expected, 'replacement');

    phrase = 'Abbabba';
    expected = 'Abx';
    result = preg_replace('/^(\\w\\w).*?$/', '$1x', phrase);
    strictEqual(result, expected, 'capture string rx');

    phrase = 'Abbabba';
    expected = 'Abx';
    result = preg_replace(/^(\w\w).*?$/, '$1x', phrase);
    strictEqual(result, expected, 'capture object rx');

    phrase = 'Abbabba';
    expectedcount = [3];
    preg_replace('/a/i', 'x', phrase, null, count);
    deepEqual(count, expectedcount, 'count parameter');

// TODO: implement following
//    phrase = 'Abbabba';
//    expected = 'Axxaxba';
//    var limit = 3;
//    result = preg_replace('/b/i', 'x', phrase, limit);
//    strictEqual(result, expected, 'limit parameter');
});

/*
test("preg_replace_callback ($pattern, $callback, $subject, $limit, $count) ", function(){
    ok(false, "Not implemented yet.");
});

test("preg_filter ($pattern, $replacement, $subject, $limit, $count) ", function(){
    ok(false, "Not implemented yet.");
});

test("preg_split ($pattern, $subject, $limit, $flags) ", function(){
    ok(false, "Not implemented yet.");
});

test("preg_quote ($str, $delimiter) ", function(){
    ok(false, "Not implemented yet.");
});

test("preg_grep ($pattern, $input, $flags) ", function(){
    ok(false, "Not implemented yet.");
});

test("preg_last_error () ", function(){
    ok(false, "Not implemented yet.");
});

*/
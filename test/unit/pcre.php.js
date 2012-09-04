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
    var phrase;
    var expected;
    var result;
    var match = [];
    var expectedmatch = []

    phrase = 'Abracadabra';
    expected = 1;
    result = preg_match('/a/', phrase);
    strictEqual(result, expected, 'case sensitive match once');

    phrase = 'Abracadabra';
    expected = 4;
    result = preg_match('/a/g', phrase);
    strictEqual(result, expected, 'case sensitive match all');

    phrase = 'Abracadabra';
    expected = 5;
    result = preg_match('/a/ig', phrase);
    strictEqual(result, expected, 'case insensitive match all');

    phrase = 'Abracadabra';
    expected = 5;
    result = preg_match('#a#ig', phrase);
    strictEqual(result, expected, 'case insensitive match all - different boderchar');

    phrase = 'Abracadabra';
    expectedmatch = ["A","a","a","a","a"];
    preg_match('/a/ig', phrase, match);

    strictEqual(match.length, expectedmatch.length, 'match reference test (length)');

    for(i = 0; i < match.length; i++) {
        strictEqual(match[i], expectedmatch[i], 'match reference test (values)');
    }
});

test("preg_match_all ($pattern, $subject, $matches, $flags, $offset) ", function(){
    ok(false, "Not implemented yet.");
});

test("preg_replace ($pattern, $replacement, $subject, $limit, $count) ", function(){
    ok(false, "Not implemented yet.");
});

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


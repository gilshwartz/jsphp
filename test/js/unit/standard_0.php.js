/**
 * standard_0.php - Unit Test (QUnit)
 */

module("standard_0", {
    setup: function () {

    },
    teardown: function () {

    }
});

test("__PHP_Incomplete_Class", 3, function () {
    var expected, obj;

    var defined = typeof __PHP_Incomplete_Class === 'function';
    ok(defined, 'class is defined');
    if(defined === false) {
        return;
    }
    obj = new __PHP_Incomplete_Class();
    equal(getConstructorNameForTest(obj), '__PHP_Incomplete_Class', 'constructor is implemented');

    try {
        equal('' + obj, expected, 'toString');
        ok(false, 'No exception was thrown.');
    }
    catch(e) {
        equal(
            e,
            'Object of class __PHP_Incomplete_Class could not be converted to string in Command line code on line 1',
            'conversion to string should throw an exception'
        );
    }
});

/*
test("php_user_filter()  ", function () {
    ok(false, "Not implemented yet.");
});
test("Directory()  ", function () {
    ok(false, "Not implemented yet.");
});
test("constant", function () {
    ok(false, "Not implemented yet.");
});

test("bin2hex", function () {
    ok(false, "Not implemented yet.");
});

test("sleep", function () {
    ok(false, "Not implemented yet.");
});

test("usleep", function () {
    ok(false, "Not implemented yet.");
});

test("time_nanosleep", function () {
    ok(false, "Not implemented yet.");
});

test("time_sleep_until", function () {
    ok(false, "Not implemented yet.");
});

test("strptime", function () {
    ok(false, "Not implemented yet.");
});

test("flush", function () {
    ok(false, "Not implemented yet.");
});

test("wordwrap", function () {
    ok(false, "Not implemented yet.");
});

test("htmlspecialchars", function () {
    ok(false, "Not implemented yet.");
});

test("htmlentities", function () {
    var phrase;
    var result;
    var expected;

    phrase = '<div class="myclass" style=\'border:1px solid black\'>a&b</div>';

    expected = '&lt;div class=&quot;myclass&quot; style=&#039;border:1px solid black&#039;&gt;a&amp;b&lt;/div&gt;';
    result = htmlentities(phrase);
    strictEqual(result, expected, 'no quote style');

    expected = '&lt;div class=&quot;myclass&quot; style=\'border:1px solid black\'&gt;a&amp;b&lt;/div&gt;';
    result = htmlentities(phrase, ENT_COMPAT);
    strictEqual(result, expected, 'quote style: ENT_COMPAT');

    expected = '&lt;div class=&quot;myclass&quot; style=&#039;border:1px solid black&#039;&gt;a&amp;b&lt;/div&gt;';
    result = htmlentities(phrase, ENT_QUOTES);
    strictEqual(result, expected, 'quote style: ENT_QUOTES');

    expected = '&lt;div class="myclass" style=\'border:1px solid black\'&gt;a&amp;b&lt;/div&gt;';
    result = htmlentities(phrase, ENT_NOQUOTES);
    strictEqual(result, expected, 'quote style: ENT_NOQUOTES');


    phrase = '<p>ampersand=&amp;, lt=&lt;, gt=&gt; quot=&quot; others=&#039;&copy;</p>';

    expected = '&lt;p&gt;ampersand=&amp;amp;, lt=&amp;lt;, gt=&amp;gt; quot=&amp;quot; others=&amp;#039;&amp;copy;&lt;/p&gt;';
    result = htmlentities(phrase, null, null);
    strictEqual(result, expected, 'double_encode: not given');

    expected = '&lt;p&gt;ampersand=&amp;amp;, lt=&amp;lt;, gt=&amp;gt; quot=&amp;quot; others=&amp;#039;&amp;copy;&lt;/p&gt;';
    result = htmlentities(phrase, null, null, true);
    strictEqual(result, expected, 'double_encode: true');

    expected = '&lt;p&gt;ampersand=&amp;, lt=&lt;, gt=&gt; quot=&quot; others=&#039;&copy;&lt;/p&gt;';
    result = htmlentities(phrase, null, null, false);
    strictEqual(result, expected, 'double_encode: false');


});

test("html_entity_decode", function () {
    ok(false, "Not implemented yet.");
});

test("htmlspecialchars_decode", function () {
    ok(false, "Not implemented yet.");
});

test("get_html_translation_table", function () {
    ok(false, "Not implemented yet.");
});

test("sha1", function () {
    ok(false, "Not implemented yet.");
});

test("sha1_file", function () {
    ok(false, "Not implemented yet.");
});

test("md5", function () {
    ok(false, "Not implemented yet.");
});

test("md5_file", function () {
    ok(false, "Not implemented yet.");
});

test("crc32", function () {
    ok(false, "Not implemented yet.");
});

test("iptcparse", function () {
    ok(false, "Not implemented yet.");
});

test("iptcembed", function () {
    ok(false, "Not implemented yet.");
});

test("getimagesize", function () {
    ok(false, "Not implemented yet.");
});

test("image_type_to_mime_type", function () {
    ok(false, "Not implemented yet.");
});

test("image_type_to_extension", function () {
    ok(false, "Not implemented yet.");
});

test("phpinfo", function () {
    ok(false, "Not implemented yet.");
});

test("phpversion", function () {
    ok(false, "Not implemented yet.");
});

test("phpcredits", function () {
    ok(false, "Not implemented yet.");
});

test("php_logo_guid", function () {
    ok(false, "Not implemented yet.");
});

test("php_real_logo_guid", function () {
    ok(false, "Not implemented yet.");
});

test("php_egg_logo_guid", function () {
    ok(false, "Not implemented yet.");
});

test("zend_logo_guid", function () {
    ok(false, "Not implemented yet.");
});

test("php_sapi_name", function () {
    ok(false, "Not implemented yet.");
});

test("php_uname", function () {
    ok(false, "Not implemented yet.");
});

test("php_ini_scanned_files", function () {
    ok(false, "Not implemented yet.");
});

test("php_ini_loaded_file", function () {
    ok(false, "Not implemented yet.");
});

test("strnatcmp", function () {
    ok(false, "Not implemented yet.");
});

test("strnatcasecmp", function () {
    ok(false, "Not implemented yet.");
});

test("substr_count", function () {
    ok(false, "Not implemented yet.");
});

test("strspn", function () {
    ok(false, "Not implemented yet.");
});

test("strcspn", function () {
    ok(false, "Not implemented yet.");
});

test("strtok", function () {
    ok(false, "Not implemented yet.");
});

*/

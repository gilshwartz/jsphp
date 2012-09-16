/**
 * Superglobals - Unit Test (QUnit)
 */
module("Superglobals", {
    setup: function () {
    },
    teardown: function () {

    }
});

test("variable definition test", function () {
    ok(typeof $GLOBALS !== "undefined" && typeof $GLOBALS === "object", "$GLOBALS is defined");
    ok(typeof $_SERVER !== "undefined" && typeof $_SERVER === "object", "$_SERVER is defined");
    ok(typeof $_GET !== "undefined" && typeof $_GET === "object", "$_GET is defined");
    ok(typeof $_POST !== "undefined" && typeof $_POST === "object", "$_POST is defined");
    ok(typeof $_FILES !== "undefined" && typeof $_FILES === "object", "$_FILES is defined");
    ok(typeof $_REQUEST !== "undefined" && typeof $_REQUEST === "object", "$_REQUEST is defined");
    ok(typeof $_SESSION !== "undefined" && typeof $_SESSION === "object", "$_SESSION is defined");
    ok(typeof $_ENV !== "undefined" && typeof $_ENV === "object", "$_ENV is defined");
    ok(typeof $_COOKIE !== "undefined" && typeof $_COOKIE === "object", "$_COOKIE is defined");
    ok(typeof $php_errormsg !== "undefined" && typeof $php_errormsg === "object", "$php_errormsg is defined");
    ok(typeof $HTTP_RAW_POST_DATA !== "undefined" && $HTTP_RAW_POST_DATA === "", "$HTTP_RAW_POST_DATA is defined");
    ok(typeof $http_response_header !== "undefined" && $http_response_header === "", "$http_response_header is defined");
    ok(typeof $argc !== "undefined" && $argc === 0, "$argc is defined");
    ok(typeof $argv !== "undefined" && ___get_constructor_name($argv) === "Array", "$argv is defined");
});

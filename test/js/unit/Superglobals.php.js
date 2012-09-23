/**
 * Superglobals - Unit Test (QUnit)
 */
module("Superglobals", {
    setup: function () {
    },
    teardown: function () {

    }
});

test("defined", function () {
    var i;
    var module = QUnit.config.current.module.replace(/^(\w+).*$/, '$1');
    var vars = variables_fixtures[module];

    for(i = 0; i < vars.length; i++) {
        var condition;
        switch(vars[i][0])
        {
            case "$HTTP_RAW_POST_DATA":
            case "$http_response_header":
                condition = 'typeof ' + vars[i][0] + ' !== "undefined" && ' + vars[i][0] + ' === "' + vars[i][1] + '"';
                break;
            case "$argc":
                condition = 'typeof ' + vars[i][0] + ' !== "undefined" && ' + vars[i][0] + ' === ' + vars[i][1] + '';
                break;
            case "$argv":
                condition = 'typeof ' + vars[i][0] + ' !== "undefined" &&  ___get_constructor_name(' + vars[i][0] + ') === "' + vars[i][1] + '"';
                break;
            default:
                condition = 'typeof ' + vars[i][0] + ' !== "undefined" && typeof ' + vars[i][0] + ' === "' + vars[i][1] + '"';
                break;
        }
        ok(eval(condition), vars[i][0] + " is defined");
    }
});

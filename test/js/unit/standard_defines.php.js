/**
 * Standard defines - Unit Test (QUnit)
 */
module("standard_defines", {
    setup: function () {
    },
    teardown: function () {

    }
});

test("defined", function () {

    var i;
    var module = QUnit.config.current.module.replace(/^(\w+).*$/, '$1');
    var vars = variables_fixtures[module];

    for (i = 0; i < vars.length; i++) {
        var variable = eval(vars[i][0]);
        var condition = false;

        switch (vars[i][0]) {
            case "NAN":
                condition = typeof variable !== "undefined" && isNaN(variable);
                break;
            default:
                condition = typeof variable !== "undefined" && variable === vars[i][1];
                break;
        }

        ok(condition, vars[i][0] + " is defined");
    }
});

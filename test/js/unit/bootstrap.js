function getConstructorNameForTest(obj) {
    return navigator.appName.match(/Microsoft/i) !== null && navigator.appName.match(/Microsoft/i).toString() === 'Microsoft'
        ? obj.constructor.toString().replace(/\s+/g, '').replace(/^function(\w+).*$/, '$1')
        : obj.constructor.name;
}

function runTestOnData(extra, _expect) {
    extra = extra || [];
    _expect = _expect || 0;

    var name = QUnit.config.current.testName.replace(/^(\w+).*$/, '$1');
    var module = QUnit.config.current.module.replace(/^(\w+).*$/, '$1');

    var data = typeof fixtures[module] !== 'undefined' && typeof fixtures[module][name] !== 'undefined' ? fixtures[module][name] : [];
    var exp = 1 + data.length + _expect;

    while(extra.length > 0) {
        data.push(extra.shift());
    }

    expect(exp);

    var func = eval(name);

    var defined = typeof func === 'function';
    ok(defined, 'function is defined');
    if (defined === false) {
        return;
    }

    var isok;

    while (data.length > 0) {

        var a = data.shift();
        isok = a.shift();
        var expected = a.shift();

        var c;

        for(c = 0; c < a.length; c++) {
            if(___gettype(a[c]) === 'string' && a[c].match(/^(new|function)/)) {
                eval("a[" + c + "] = " + a[c] + ";");
            }
        }

        try {
            var given;

            switch (a.length) {
                case 1:
                    given = func(a[0]);
                    break;
                case 2:
                    given = func(a[0], a[1]);
                    break;
                case 3:
                    given = func(a[0], a[1], a[2]);
                    break;
                case 4:
                    given = func(a[0], a[1], a[2], a[3]);
                    break;
                case 5:
                    given = func(a[0], a[1], a[2], a[3], a[4]);
                    break;
                case 6:
                    given = func(a[0], a[1], a[2], a[3], a[4], a[5]);
                    break;
                case 7:
                    // 7 is max number of arguments in standard PHP library
                    given = func(a[0], a[1], a[2], a[3], a[4], a[5], a[6]);
                    break;
                default:
                    given = func();
                    break;
            }

            if (isok === false) {
                ok(false, 'No exception was thrown. Expected: ' + expected);
            }
            else {
                deepEqual(given, expected);
            }
        }
        catch (e) {
            var xmessage = (typeof e.getMessage !== 'undefined' ? e.getMessage() : e);
            if (isok === false) {
                if (typeof e === 'object' && getConstructorNameForTest(e) === 'Exception') {
                    strictEqual(xmessage, expected, 'Exception should say: ' + expected);
                } else {
                    ok(false, 'No exception was thrown. Expected: ' + expected);
                }
            } else {
                ok(false, 'Unexpected exception occured: ' + xmessage);
            }
        }
    }
}

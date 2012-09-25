var i;
var ___global_temp;

function define(name, value) {

}

function ___get_constructor_name(obj) {
    if(obj === null) {
        return '';
    }

    return navigator.appName.match(/Microsoft/i) !== null && navigator.appName.match(/Microsoft/i).toString() === 'Microsoft'
        ? obj.constructor.toString().replace(/\s+/g, '').replace(/^function(\w+).*$/, '$1')
        : obj.constructor.name;
}

function ___object_length(obj) {
    var count = 0;
    var cons = ___get_constructor_name(obj);

    for (var x in obj) {
        count++;
    }
    return count;
}

function ___parse_regexp(func, pattern, modifiers) {

    var temp = pattern;

    if (typeof pattern === 'object') {
        temp = pattern.toString();
    }

    var sep = temp.substring(0, 1);
    var rxrx = new RegExp('^' + sep + '(.*?)' + sep + '(\\w*)$');
    var rxtemp = temp.match(rxrx);


    var rxsep = sep;
    var rxbody = rxtemp[1];
    var rxmodif = rxtemp[2];

    for (i = 0; i < rxmodif.length; i++) {
        var m = rxmodif.charAt(i);

        if (typeof modifiers[rxmodif.charAt(m)] === 'undefined') {
            throw "JSPHP Warning:  " + func + "(): Unknown modifier '" + m + "'";
        }
    }

    return new RegExp(rxbody, rxmodif);
}

/*
 * "boolean"
 * "integer"
 * "double" (for historical reasons "double" is returned in case of a float, and not simply "float")
 * "string"
 * "array"
 * "object"
 * "resource"
 * "NULL"
 * "unknown type"
 */
function ___gettype($var) {

    var vtype = typeof $var;

    switch (vtype) {
        case "boolean":
        case "string":
            return vtype;

        case "function":
            return "object";

        case "object":
            if ($var !== null) {

                var objtype = ___get_constructor_name($var);

                if (objtype === "Object" || objtype === "Array") {
                    return "array";
                }

                return "object";
            } else {
                return "NULL";
            }

        case "number":
            var temp = "" + $var + "";
            return temp.match(/\./) ? "double" : "integer";

        default:
            return 'unknown type';
    }
}

var ___args_names = {
    0: 'First',
    1: 'Second',
    2: 'Third',
    3: 'Fourth',
    4: 'Fifth',
    5: 'Sixth',
    6: 'Seventh',
    7: 'Eighth',
    8: 'Nineth',
    9: 'Tenth'
};

function ___is_scalar($value) {
    var type = ___gettype($value);
    var output;
    switch(type) {
        case "boolean":
        case "integer":
        case "double":
        case "string":
        case "NULL":
            output = true;
            break;
        default:
            output = type;
            break;
    }

    return type;
}

function ___validate_function_arguments(funct, config, args) {
    var i;
    var at_least = 0;
    var at_most = 0;
    var given = args.length;
    var msg = null;
    var code = 0;
    var dynargs = false;

    config.required.map(function (val) {
        at_most +=  val !== null ? 1 : 0;;
        at_least += val ? 1 : 0;

        if(val === null) {
            dynargs = true;
        }
    });

    // Number of parameters check:
    if (at_most === 0) {
        return true;
    }

    function getMsg(type, count) {
        return funct + '()' + ' expects ' +
            type +
            ' ' +
            count +
            ' ' +
            (count == 1 ? 'parameter' : 'parameters') +
            ', ' +
            given + ' given';
    }

    if (given < at_least) {
        msg = getMsg('at least', at_least);
    }

    if (dynargs === false && given > at_most) {
        msg = getMsg('at most', at_most);
    }

    if (dynargs === false && given !== at_most && at_most === at_least) {
        msg = getMsg('exactly', at_most);
    }

    // Custom required exception message:

    if (msg !== null) {
        if (typeof config.customrequiredx !== 'undefined') {
            msg = config.customrequiredx;
        }
        throw new Exception(msg, code);
    }

    // Type check:

    for (i = 0; i < args.length; i++) {

        if (typeof config.type === 'undefined' || typeof config.type[i] === 'undefined') {
            continue;
        }

        if (config.type[i] === 'any') {
            continue;
        }

        var exp = config.type[i];
        var giv = ___gettype(args[i]);

        if (exp === 'integer') {
            switch (giv) {
                case 'string':
                    giv = args[i].match(/^\d+(?:\.\d+)?$/) ? 'integer' : 'string';
                    break;
                case 'double':
                case 'integer':
                case 'boolean':
                    giv = 'integer';
                    break;
                default:
                    giv = giv;
                    break;
            }
        }

        if (exp === 'string') {
            switch (giv) {
                case 'string':
                case 'double':
                case 'integer':
                case 'boolean':
                    giv = 'string';
                    break;
                default:
                    giv = giv;
                    break;
            }
        }

        if (config.type[i] !== giv) {

            var msgexp = exp === 'integer' ? 'long' : exp;

            msg = funct + '() expects ' +
                'parameter ' +
                (i + 1) +
                ' to be ' +
                msgexp + ', ' +
                giv + ' given';
        }
    }

    if (msg !== null) {
        throw new Exception(msg, code);
    }

    // Conditions check:
    for (i = 0; i < args.length; i++) {

        if (typeof config.conditions === 'undefined' || typeof config.conditions[i] === 'undefined'
            || config.conditions[i] === true) {
            continue;
        }

        var cond = config.conditions[i];

        if (cond.func(args[i]) == false) {
            throw new Exception(cond.msg(i, args[i]));
        }
    }

    return true;
}
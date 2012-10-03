/**
 * (PHP 4, PHP 5)<br/>
 * Prints human-readable information about a variable
 * @link http://php.net/manual/en/function.print-r.php
 * @param {object} $expression
 * The expression to be printed.
 * @param {boolean} $return [optional]
 * If you would like to capture the output of print_r,
 * use the return parameter. If this parameter is set
 * to true, print_r will return its output, instead of
 * printing it (which it does by default).
 * @return {string|boolean}
 * If given a string, integer or float,
 * the value itself will be printed. If given an array, values
 * will be presented in a format that shows keys and elements. Similar
 * notation is used for objects.
 */
function print_r($expression, $return) {

    ___validate_function_arguments(
        'print_r',
        {
            required: [true, false],
            type: ['any', 'any']
        },
        arguments
    );

    $return = $return || false;

    var output = '';
    var xtype = typeof $expression;

    function xprint_r(val) {

        var xprint_rVar = '';

        function pv(val, start) {
            var x = 0;

            if (typeof start === 'undefined') {
                xprint_rVar = '';
            }

            var cn = ___get_constructor_name(val);

            if (cn === "Array") {
                xprint_rVar += 'Array\n(\n';
                for (x = 0; x < val.length; x++) {
                    xprint_rVar += '[' + x + '] => ';
                    pv(val[x], 0);
                    xprint_rVar += '\n';
                }
                xprint_rVar += ')';
            }
            else if (cn === "Object") {
                xprint_rVar += 'Array\n(\n';
                var y = 0;
                for (var key in val) {
                    if (key) {
                        xprint_rVar += '[' + key + '] => ';
                        pv(val[key], 0);
                        xprint_rVar += '\n';
                    }
                }
                xprint_rVar += ')';
            }
            else {
                val = val === null ? '' : val;
                val = val === true ? 1 : val;
                val = val === false ? '' : val;

                xprint_rVar += val;
            }
            return;
        }

        pv(val);

        var temp = xprint_rVar.split('\n');

        var sep = '    ';
        var level = 0;
        var r = 0;
        var l = 0;

        for (r = 0; r < temp.length; r++) {
            for (l = 0; l < level; l++) {
                temp[r] = sep + temp[r];
            }

            if (temp[r].match(/^\s*\($/)) {
                level++;
            }

            if (temp[r].match(/^\s*\[\w+\] => Array$/)) {
                level++;
            }

            if (temp[r].match(/^\s*\)$/)) {
                level -= 2;
                var s = '';
                for (l = 0; l < level + 1; l++) {
                    s += sep;
                }
                temp[r] = s + ')\n';
            }
        }

        var last = temp.pop().trim();
        return temp.join('\n') + '\n' + last;
    }

    if (xtype !== 'object') {
        if (xtype === 'function') {
            var temp = '' + $expression;
            var c = 0;

            temp = temp.replace(/\s+/g, '');
            var ptemp = temp.replace(/^function\((.*?)\).*?$/, '$1').split(',');
            var params = [];

            for (c = 0; c < ptemp.length; c++) {
                if (ptemp[c] !== "") {
                    params[c] = ptemp[c];
                }
            }

            output = 'Closure Object\n(\n';

            if (params.length > 0) {
                output += '    [parameter] => Array\n';
                output += '        (\n';
                for (c = 0; c < params.length; c++) {
                    var par = params[c];
                    var parx = par.replace(/\$/, '\\$');
                    var rx = new RegExp(parx + '=' + parx + '\\|\\|');
                    var required = temp.match(rx) !== null ? '<optional>' : '<required>';
                    output += '            [' + par + '] => ' + required + '\n';
                }
                output += '        )\n';
            }

            output += ')';
        }
        else {
            output = '' + $expression;
        }
    }
    else {
        var nxtype = Object.prototype.toString.call($expression).match(/\[object (\w+)\]/)[1];

        switch (nxtype) {
            case 'Null':
                output = '';
                break;
            default:
                output = nxtype + ' Object\n(';
                output += '\n)';
                break;
            case 'Array':
            case 'Object':
                output = xprint_r($expression);
                break;
        }
    }

    if ($return === false) {
        return true;
    }

    return output;
}

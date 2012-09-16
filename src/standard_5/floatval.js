/**
 * (PHP 4 &gt;= 4.2.0, PHP 5)
 * Get float value of a variable
 * @link http://php.net/manual/en/function.floatval.php
 * @param {mixed} $var May be any scalar type. should not be used on objects, as doing so will emit an E_NOTICE level error and return 1.
 * @return {float} value of the given variable. Empty arrays return 0, non-empty arrays return 1.
 */
function floatval($var) {

    ___validate_function_arguments(
        'floatval',
        {
            required: [true],
            type: ['any']
        },
        arguments
    );

    var vtype = typeof $var;

    if(vtype === 'string') {
        $var = $var.replace(/\s+/g, '');
        $var = $var.replace(/^(\d*\.?\d*).*$/, '$1');
    }

    if ($var === null || $var === "") {
        $var = 0;
    }

    try {
        var output = parseFloat($var);
    }
    catch(e) {
        var message = (typeof e.getMessage !== 'undefined' ? e.getMessage() : e);
        var code = (typeof e.getCode !== 'undefined' ? e.getCode() : 0);
        message = message.replace(/^(.* could not be converted to )\w+$/, '$1double');
        throw new Exception(message, code);
    }

    return output;
}
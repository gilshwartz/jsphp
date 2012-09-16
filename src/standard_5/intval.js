/**
 * (PHP 4, PHP 5)
 * Get the integer value of a variable
 * @link http://php.net/manual/en/function.intval.php
 * @param {string} $var
 * The scalar value being converted to an integer
 *
 * @param {int} $base [optional]
 * The base for the conversion
 *
 * @return int The integer value of var on success, or 0 on
 * failure. Empty arrays and objects return 0, non-empty arrays and
 * objects return 1.
 *
 *
 * The maximum value depends on the system. 32 bit systems have a
 * maximum signed integer range of -2147483648 to 2147483647. So for example
 * on such a system, intval('1000000000000') will return
 * 2147483647. The maximum signed integer value for 64 bit systems is
 * 9223372036854775807.
 *
 *
 * Strings will most likely return 0 although this depends on the
 * leftmost characters of the string. The common rules of
 * integer casting
 * apply.
 */
function intval($var, $base) {

    ___validate_function_arguments(
        'intval',
        {
            required: [true, false],
            customrequiredx: 'Wrong parameter count for intval()',
            type: ['any', 'any']
        },
        arguments
    );

    $base = $base || 10;

    if ($var === true) {
        return 1;
    }

    var vtype = typeof $var;


    var cname = ___get_constructor_name($var);

    var output = parseInt($var);

    if(cname.match(/^Array|Object$/) && ___object_length($var) > 0) {
        return 1;
    }

    if (isNaN(output)) {
        return 0;
    }

    if (vtype == 'string') {
        return parseInt($var, $base);
    }

    return parseInt($var);
}

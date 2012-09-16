/**
 * (PHP 4, PHP 5)
 * Get string value of a variable
 * @link http://php.net/manual/en/function.strval.php
 * @param {mixed} $var
 * The variable that is being converted to a string.
 *
 *
 * var may be any scalar type. You cannot use
 * strval on arrays or objects.
 *
 * @return {string} The string value of var.
 */
function strval($var) {

    var vtype = Object.prototype.toString.call($var);

    ___validate_function_arguments(
        'strval',
        {
            required: [true],
            type: ['any']
        },
        arguments
    );

    if (vtype === '[object Object]') {
        throw 'Object of class stdClass could not be converted to string';
    }

    if (vtype === '[object Array]') {
        return 'Array';
    }

    if (vtype === null) {
        return '';
    }

    return $var.toString();
}

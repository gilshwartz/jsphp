/**
 * (PHP 4, PHP 5)
 * Get the type of a variable
 * @link http://php.net/manual/en/function.gettype.php
 * @param {object} $var
 * The variable being type checked.
 * @return {string} Possibles values for the returned string are: <pre>
 * "boolean"
 * "integer"
 * "double" (for historical reasons "double" is returned in case of a float, and not simply "float")
 * "string"
 * "array"
 * "object"
 * "resource"
 * "NULL"
 * "unknown type"
 * </pre>
 */
function gettype($var) {

    ___validate_function_arguments(
        'gettype',
        {
            required: [true]
        },
        arguments
    );

    return ___gettype($var);
}

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

    var vtype = typeof $var;

    switch (vtype) {
        case "boolean":
        case "string":
            return vtype;

        case "function":
            return "object";

        case "object":
            if ($var === null) {
                return "NULL";
            }

            var match = Object.prototype.toString.call($var).match(/\[object (\w+)]/);

            switch(match[1]) {
                case "Array":
                    return "array";
                default:
                    return "object";
            }
            break;

        case "number":
            var temp = "" + $var + "";
            return temp.match(/\./) ? "double" : "integer";

        default:
            return 'unknown type';
    }
}

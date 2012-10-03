/**
 * (PHP 4, PHP 5)<br/>
 * Prepend one or more elements to the beginning of an array
 * @link http://php.net/manual/en/function.array-unshift.php
 * @param array $array <p>
 * The input array.
 * </p>
 * @param mixed $var <p>
 * The prepended variable.
 * </p>
 * @param mixed $_ [optional]
 * @return int the new number of elements in the array.
 */
function array_unshift ($array, $var, $_) {

    var i;

    try {
        ___validate_function_arguments(
            "array_unshift",
            {
                required: [true, true, null],
                type: ['array', 'any', 'any']
            },
            arguments
        );
    }
    catch (e) {
        var msg = e.getMessage().toLowerCase();
        throw new Exception(msg, e.getCode());
    }

    for(i = 1; i < arguments.length; i++) {
        $array.unshift(arguments[i]);
    }

    return true;
}

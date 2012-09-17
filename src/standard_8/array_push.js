/**
 * (PHP 4, PHP 5)<br/>
 * Push one or more elements onto the end of array
 * @link http://php.net/manual/en/function.array-push.php
 * @param array $array <p>
 * The input array.
 * </p>
 * @param mixed $var <p>
 * The pushed value.
 * </p>
 * @param mixed $_ [optional]
 * @return int the new number of elements in the array.
 */
function array_push($array, $var, $_) {

    var i;

    try {
        ___validate_function_arguments(
            "array_push",
            {
                required: [true, true, null],
                type: ['array', 'any', 'any']
            },
            arguments
        );
    }
    catch (e) {
        msg = e.getMessage().toLowerCase();
        throw new Exception(msg, e.getCode());
    }

    for(i = 1; i < arguments.length; i++) {
        $array.push(arguments[i]);
    }

    return true;
}

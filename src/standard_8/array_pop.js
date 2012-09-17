/**
 * (PHP 4, PHP 5)<br/>
 * Pop the element off the end of array
 * @link http://php.net/manual/en/function.array-pop.php
 * @param array $array <p>
 * The array to get the value from.
 * </p>
 * @return mixed the last value of array.
 * If array is empty (or is not an array),
 * &null; will be returned.
 */
function array_pop($array) {
    var i;

    try {
        ___validate_function_arguments(
            "array_pop",
            {
                required: [true],
                type: ['array']
            },
            arguments
        );
    }
    catch (e) {
        msg = e.getMessage().toLowerCase();
        throw new Exception(msg, e.getCode());
    }

    if($array.length === 0) {
        return null;
    }

    return $array.pop();
}

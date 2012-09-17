/**
 * (PHP 4, PHP 5)<br/>
 * Shift an element off the beginning of array
 * @link http://php.net/manual/en/function.array-shift.php
 * @param array $array <p>
 * The input array.
 * </p>
 * @return mixed the shifted value, or &null; if array is
 * empty or is not an array.
 */
function array_shift ($array) {
    var i;

    try {
        ___validate_function_arguments(
            "array_shift",
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

    return $array.shift();
}

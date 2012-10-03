/**
 * (PHP 4 &gt;= 4.0.6, PHP 5)<br/>
 * Applies the callback to the elements of the given arrays
 * @link http://php.net/manual/en/function.array-map.php
 * @param {function|string} $callback <p>
 * Callback function to run for each element in each array.
 * </p>
 * @param {array} $arr1 <p>
 * An array to run through the callback function.
 * </p>
 * @param {array} $_ [optional]
 * @return array an array containing all the elements of arr1
 * after applying the callback function to each one.
 */
function array_map ($callback, $arr1, $_) {
// function array_map ($callback, array $arr1, array $_ = null) {}
    ___validate_function_arguments(
        "array_push",
        {
            required: [true, true, null],
            type: ['any', 'array', 'any']
        },
        arguments
    );

}

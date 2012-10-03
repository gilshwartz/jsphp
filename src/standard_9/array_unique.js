/**
 * (PHP 4 &gt;= 4.0.1, PHP 5)<br/>
 * Removes duplicate values from an array
 * @link http://php.net/manual/en/function.array-unique.php
 * @param array $array <p>
 * The input array.
 * </p>
 * @param int $sort_flags [optional] <p>
 * The optional second parameter sort_flags
 * may be used to modify the sorting behavior using these values:
 * </p>
 * <p>
 * Sorting type flags:
 * SORT_REGULAR - compare items normally
 * (don't change types)
 * @return array the filtered array.
 */
function array_unique($array, $sort_flags) {

    var i;

    try {
        ___validate_function_arguments(
            "array_unique",
            {
                required: [true, false],
                type: ['array', 'any']
            },
            arguments
        );
    }
    catch (e) {
        var msg = e.getMessage().toLowerCase();
        throw new Exception(msg, e.getCode());
    }

    var temph = {};
    var tempa = [];
    var temp = {};
    var isarray = true;
    var hasdups = false;

    for (i = 0; i < $array.length; i++) {

        if (typeof temp[$array[i]] !== 'undefined') {
             continue;
        }

        temph[i] = $array[i];
        tempa[i] = $array[i];
        temp[$array[i]] = i;

        if (i > 0 && typeof tempa[i - 1] === 'undefined') {
            isarray = false;
        }
    }

    if (isarray === true) {
        var output = [];

        for (var val in tempa) {
            if (isarray === true) {
                output.push(tempa[val]);
            }
        }
        return output;
    }

    return temph;
}

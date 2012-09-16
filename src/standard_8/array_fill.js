/**
 * (PHP 4 &gt;= 4.2.0, PHP 5)<br/>
 * Fill an array with values
 * @link http://php.net/manual/en/function.array-fill.php
 * @param int $start_index <p>
 * The first index of the returned array.
 * Supports non-negative indexes only.
 * </p>
 * @param int $num <p>
 * Number of elements to insert
 * </p>
 * @param mixed $value <p>
 * Value to use for filling
 * </p>
 * @return array the filled array
 */
function array_fill ($start_index, $num, $value) {

    arguments[1] = arguments[1] === null ? 0 : arguments[1];

    ___validate_function_arguments(
        'array_fill',
        {
            required: [true, true, true],
            type: ['any', 'any', 'any'],
            conditions: [
                true,
                {
                    func: function (val) { return val > 0; },
                    msg: function (arg) { return "array_fill(): Number of elements must be positive"; }
                },
                true
            ]
        },
        arguments
    );
}
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
function array_fill($start_index, $num, $value) {

    ___validate_function_arguments(
        'array_fill',
        {
            required: [true, true, true],
            type: ['any', 'any', 'any']
        },
        arguments
    );

    var vtype = ___gettype($num);

    if(typeof $num === "undefined" || $num === null) {
        vtype = "integer";
        $num = 0;
    }

    if(vtype !== "integer") {
        throw new Exception("array_fill() expects parameter 1 to be long, " + vtype + " given");
    }

    if($num <= 0) {
        throw new Exception("array_fill(): Number of elements must be positive");
    }

    var i;
    var arr = [];
    var obj = {};

    if ($start_index === 0) {
        for (i = 0; i < $num; i++) {
            arr.push($value);
        }
        return arr;
    }

    if($start_index < 0) {
        obj[$start_index] = $value;
        $start_index = 0;
        $num -= 1;
    }

    for (i = 0; i < $num; i++) {
        obj[$start_index + i] = $value;
    }

    return obj;
}

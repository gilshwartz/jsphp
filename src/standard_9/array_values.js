/**
 * (PHP 4, PHP 5)<br/>
 * Return all the values of an array
 * @link http://php.net/manual/en/function.array-values.php
 * @param {array} $input <p>
 * The array.
 * </p>
 * @return array an indexed array of values.
 */
function array_values ($input) {
    ___validate_function_arguments(
        "array_values",
        {
            required: [true],
            type: ['array']
        },
        arguments
    );

    var output = [];
    var vtype = typeof $input;
    var ctype = ___get_constructor_name($input);

    var key;

    if (vtype === "Array") {
        for (key = 0; key < $input.length; key++) {
            output.push($input[key]);
        }
    }
    else {
        for (key in $input) {
           output.push($input[key]);
        }
    }

    return output;
}

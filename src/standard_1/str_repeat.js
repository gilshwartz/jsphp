/**
 * (PHP 4, PHP 5)<br/>
 * Repeat a string
 *
 * @link http://php.net/manual/en/function.str-repeat.php
 * @param {string} $input - The string to be repeated.
 * @param {number} $multiplier - Number of time the input string should be repeated.
 * <p>
 * multiplier has to be greater than or equal to 0.
 * If the multiplier is set to 0, the function
 * will return an empty string.
 * </p>
 * @return {string} the repeated string.
 */
function str_repeat($input, $multiplier) {

    var output = '';

    arguments[0] = arguments[0] === null ? '' : arguments[0];
    arguments[1] = arguments[1] === null ? 0 : arguments[1];

    ___validate_function_arguments(
        'str_repeat',
        {
            required: [true, true],
            type: ['string', 'integer'],
            conditions: [
                true,
                {
                    func: function (val) { return val >= 0; },
                    msg: function (arg) { return "str_repeat(): " + ___args_names[arg] + " argument has to be greater than or equal to 0"; }
                }
            ]
        },
        arguments
    );

    $input = $input.toString();
    $multiplier = Math.floor($multiplier);

    for (i = 0; i < $multiplier; i++) {
        output += $input;
    }

    return output;
}

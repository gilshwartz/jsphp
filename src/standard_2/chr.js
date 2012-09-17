/**
 * (PHP 4, PHP 5)<br/>
 * Return a specific character
 * @link http://php.net/manual/en/function.chr.php
 * @param {number} $ascii <p>
 * The ascii code.
 * </p>
 * @return {string} the specified character.
 */
function chr ($ascii) {
    ___validate_function_arguments(
        'chr',
        {
            required: [true],
            customrequiredx: 'Wrong parameter count for chr()',
            type: ['any']
        },
        arguments
    );
    return String.fromCharCode($ascii);
}

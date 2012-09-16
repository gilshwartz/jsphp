/**
 * (PHP 4, PHP 5)<br/>
 * Decodes data encoded with MIME base64
 * @link http://php.net/manual/en/function.base64-decode.php
 * @param string $data <p>
 * The encoded data.
 * </p>
 * @param bool $strict [optional] <p>
 * Returns false if input contains character from outside the base64
 * alphabet.
 * </p>
 * @return string the original data or false on failure. The returned data may be
 * binary.
 */
// function base64_decode ($data, $strict = null) {}
function base64_decode($data, $strict) {
    ___validate_function_arguments(
        'base64_decode',
        {
            required: [true, false],
            type: ['any', 'any']
        },
        arguments
    );

    $strict = $strict || null;
    return atob($data);
}

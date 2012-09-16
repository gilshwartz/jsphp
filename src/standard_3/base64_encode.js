/**
 * (PHP 4, PHP 5)<br/>
 * Encodes data with MIME base64
 * @link http://php.net/manual/en/function.base64-encode.php
 * @param string $data <p>
 * The data to encode.
 * </p>
 * @return string The encoded data, as a string.
 */
// function base64_encode ($data) {}
function base64_encode($data) {
    ___validate_function_arguments(
        'base64_encode',
        {
            required: [true],
            type: ['any']
        },
        arguments
    );

    return btoa($data);
}
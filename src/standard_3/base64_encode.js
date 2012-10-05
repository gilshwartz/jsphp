/**
 * (PHP 4, PHP 5)<br/>
 * Encodes data with MIME base64
 * @link http://php.net/manual/en/function.base64-encode.php
 * @param {string} $data <p>
 * The data to encode.
 * </p>
 * @return string The encoded data, as a string.
 */
function base64_encode($data) {

    ___validate_function_arguments(
        "base64_encode",
        {
            required: [true],
            type: ["any"]
        },
        arguments
    );

    var vtype = ___gettype($data);

    if(vtype === "NULL") {
        return "";
    }

    if(vtype === "boolean") {
        return $data === true ? base64_encode(1) : "";
    }

    if(vtype === "array" || vtype === "object") {
        throw new Exception("base64_encode() expects parameter 1 to be string, " + vtype + " given");
    }

    /* {{{ base64 tables */
    var base64_table = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/", ""
    ];

    var base64_pad = "=";

    /* }}} */

    $data = ___utf8_to_bytes($data);

    var i;
    var current = [];
    var length = $data.length;
    var ci = 0;

    for (i = 0; i < length; i++) {
        current[i] = $data.charCodeAt(i);
    }

    var result = "";

    // Algorithm: https://github.com/php/php-src/blob/master/ext/standard/base64.c

    while (length > 2) { /* keep going until we have less than 24 bits */
        result += base64_table[current[ci + 0] >> 2];
        result += base64_table[(((current[ci + 0] & 0x03) << 4) + (current[ci + 1] >> 4))];
        result += base64_table[(((current[ci + 1] & 0x0f) << 2) + (current[ci + 2] >> 6))];
        result += base64_table[current[ci + 2] & 0x3f];

        ci += 3;
        length -= 3;
        /* we just handle 3 octets of data */
    }

    /* now deal with the tail end of things */
    if (length !== 0) {
        result += base64_table[current[ci + 0] >> 2];
        if (length > 1) {
            result += base64_table[((current[ci + 0] & 0x03) << 4) + (current[ci + 1] >> 4)];
            result += base64_table[(current[ci + 1] & 0x0f) << 2];
            result += base64_pad;
        } else {
            result += base64_table[(current[ci + 0] & 0x03) << 4];
            result += base64_pad;
            result += base64_pad;
        }
    }

    return result;
}

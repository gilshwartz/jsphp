/**
 * (PHP 4, PHP 5)<br/>
 * Decodes data encoded with MIME base64
 * @link http://php.net/manual/en/function.base64-decode.php
 * @param {string} $data <p>
 * The encoded data.
 * </p>
 * @param {bool} $strict [optional] <p>
 * Returns false if input contains character from outside the base64
 * alphabet.
 * </p>
 * @return {string} the original data or false on failure. The returned data may be
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

    $strict = $strict || false;

    /* {{{ base64 tables */
    var base64_table = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/", ""
    ];

    var base64_pad = "=";

    var base64_reverse_table = [
        -2, -2, -2, -2, -2, -2, -2, -2, -2, -1, -1, -2, -2, -1, -2, -2,
        -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
        -1, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 62, -2, -2, -2, 63,
        52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -2, -2, -2, -2, -2, -2,
        -2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -2, -2, -2, -2, -2,
        -2, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -2, -2, -2, -2, -2,
        -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
        -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
        -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
        -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
        -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
        -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
        -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
        -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2
    ];

    /* }}} */

    var vtype = ___gettype($data);

    if(vtype === "NULL" || vtype === "boolean") {
        return "";
    }

    if(vtype === "array" || vtype === "object") {
        throw new Exception("base64_decode() expects parameter 1 to be string, " + vtype + " given");
    }

    $data += "";

    if($data.match(/^0|1$/)) {
        var b = $data === "1";
        return base64_decode(b);
    }

    var strict = $strict;
    var length = $data.length;
    var current = 0;
    var ch;
    var i = 0, j = 0, k;
    var result = [];

    // Algorithm: https://github.com/php/php-src/blob/master/ext/standard/base64.c

    /* run through the whole string, converting as we go */
    while ((ch = $data.charAt(current++)) !== "" && length-- > 0) {


        if (ch === base64_pad) {
            if ($data.charAt(current) !== "=" && ((i % 4) === 1 || (strict && length > 0))) {
                if ((i % 4) !== 1) {
                    while ($data.charAt(++current).match(/^\s$/)) {
                        continue;
                    }
                    if ($data.charAt(current).charCodeAt(0) === 0) {
                        continue;
                    }
                }
                return false;
            }
            continue;
        }

        ch = base64_reverse_table[$data.charCodeAt(current - 1)];

        if ((!strict && ch < 0) || ch === -1) { /* a space or some other separator character, we simply skip over */
            continue;
        } else if (ch === -2) {  /* char outside the base64 alphabet */
            return false;
        }

        switch(i % 4) {
            case 0:
                result[j] = ch << 2;
                break;
            case 1:
                result[j++] |= ch >> 4;
                result[j] = (ch & 0x0f) << 4;
                break;
            case 2:
                result[j++] |= ch >>2;
                result[j] = (ch & 0x03) << 6;
                break;
            case 3:
                result[j++] |= ch;
                break;
        }
        i++;
    }

    k = j;
    /* mop things up if we ended on a boundary */
    if (ch === base64_pad) {
        switch(i % 4) {
            case 1:
                return false;
            case 2:
                k++;
                break;
            case 3:
                result[k] = 0;
                break;
        }
    }

    var output = "";

    for(i = 0; i < result.length; i++) {
        output += String.fromCharCode(result[i] + "");
    }

    return output;
}

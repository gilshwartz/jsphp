/**
 * (PHP 4, PHP 5)<br/>
 * Reverse a string
 * @link http://php.net/manual/en/function.strrev.php
 * @param string $string <p>
 * The string to be reversed.
 * </p>
 * @return string the reversed string.
 */
function strrev($string) {

    ___validate_function_arguments(
        'strrev',
        {
            required: [true],
            type: ['any']
        },
        arguments
    );

    var vtype = typeof $string;

    if($string === null || $string === false) {
        $string = "";
    }

    if($string === true) {
        $string = "1";
    }

    if($string !== "" && !(vtype !== 'object')) {
        var type = ___get_constructor_name($string) === 'Array' ? 'array' : vtype;
        throw new Exception("strrev() expects parameter 1 to be string, " + type + " given");
    }

    $string = "" + $string;

    var temp = [];

    for (i = 0; i < $string.length; i++) {
        temp.unshift($string.charAt(i));
    }

    return temp.join('');
}

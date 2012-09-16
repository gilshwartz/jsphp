/**
 * (PHP 4, PHP 5)<br/>
 * Make a string lowercase
 * @link http://php.net/manual/en/function.strtolower.php
 * @param string $str <p>
 * The input string.
 * </p>
 * @return string the lowercased string.
 */
function strtolower($str) {
    ___validate_function_arguments(
        'strtolower',
        {
            required: [true],
            type: ['any']
        },
        arguments
    );

    var vtype = typeof $str;

    if($str === null || $str === false) {
        $str = "";
    }

    if($str === true) {
        $str = "1";
    }

    if($str !== "" && !(vtype !== 'object')) {
        var type = ___get_constructor_name($str) === 'Array' ? 'array' : vtype;
        throw new Exception("strtolower() expects parameter 1 to be string, " + type + " given");
    }

    $str = "" + $str;

    return $str.toLowerCase();
}

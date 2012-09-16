/**
 * (PHP 4, PHP 5)<br/>
 * Make a string uppercase
 * @link http://php.net/manual/en/function.strtoupper.php
 * @param string $string <p>
 * The input string.
 * </p>
 * @return string the uppercased string.
 */
function strtoupper($string) {
    ___validate_function_arguments(
        'strtoupper',
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
        throw new Exception("strtoupper() expects parameter 1 to be string, " + type + " given");
    }

    $string = "" + $string;

    return $string.toUpperCase();
}

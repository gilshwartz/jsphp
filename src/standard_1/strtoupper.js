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

    if($string === null || $string === false) {
        $string = "";
    }

    if($string === true) {
        $string = "1";
    }

    var vtype = ___gettype($string);

    if($string !== "" && (vtype === 'array' || vtype === 'object')) {
        var cn = ___get_constructor_name($string);
        var obj = cn === 'Array' || cn === 'Object' ? 'array' : 'object';
        throw new Exception("strtoupper() expects parameter 1 to be string, " + obj + " given");
    }

    $string = "" + $string;

    return $string.toUpperCase();
}

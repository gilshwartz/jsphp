/**
 * (PHP 4, PHP 5)<br/>
 * Return ASCII value of character
 * @link http://php.net/manual/en/function.ord.php
 * @param {string} $string <p>
 * A character.
 * </p>
 * @return {number} the ASCII value as an integer.
 */
function ord ($string) {

    ___validate_function_arguments(
        'ord',
        {
            required: [true],
            type: ['any']
        },
        arguments
    );

    if($string === null) {
        return 0;
    }

    var vtype = ___gettype($string);

    if(vtype === 'array' || vtype === 'object') {
        var cn = ___get_constructor_name($string);
        var obj = cn === 'Array' || cn === 'Object' ? 'array' : 'object';
        throw new Exception("ord() expects parameter 1 to be string, " + obj + " given");
    }

    // cast to string;
    $string = "" + $string;

    return $string.charCodeAt($string[0]);
}
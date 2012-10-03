/**
 * (PHP 4, PHP 5)<br/>
 * Inserts HTML line breaks before all newlines in a string
 * @link http://php.net/manual/en/function.nl2br.php
 * @param string $string <p>
 * The input string.
 * </p>
 * @param bool $is_xhtml [optional] <p>
 * Whenever to use XHTML compatible line breaks or not.
 * </p>
 * @return string the altered string.
 */
function nl2br($string, $is_xhtml) {

    ___validate_function_arguments(
        'nl2br',
        {
            required: [true, false],
            type: ['any', 'any']
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

    if($string !== "" && vtype === "object") {
        var type = ___get_constructor_name($string) === 'Array' ? 'array' : vtype;
        throw new Exception("strtolower() expects parameter 1 to be string, " + type + " given");
    }

    $string = "" + $string;

    $is_xhtml = typeof $is_xhtml === 'undefined' ? true : $is_xhtml;

    var br = $is_xhtml === true ? '<br />' : '<br>';
    return $string.replace(/(\r\n|\r|\n)/g, br + "$1");
}

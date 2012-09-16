/**
 * (PHP 4.2.0, PHP 5)
 * doubleval is Alias of floatval()
 * Get float value of a variable
 * &Alias; floatval
 * @link http://php.net/manual/en/function.doubleval.php
 * @param {mixed} $var May be any scalar type. should not be used on objects, as doing so will emit an E_NOTICE level error and return 1.
 * @return {float} value of the given variable. Empty arrays return 0, non-empty arrays return 1.
 */
function doubleval($var) {
    return floatval($var);
}

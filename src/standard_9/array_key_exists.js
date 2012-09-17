/**
 * (PHP 4 &gt;= 4.0.7, PHP 5)<br/>
 * Checks if the given key or index exists in the array
 * @link http://php.net/manual/en/function.array-key-exists.php
 * @param {mixed} $key <p>
 * Value to check.
 * </p>
 * @param {array} $search <p>
 * An array with keys to check.
 * </p>
 * @return bool true on success or false on failure.
 */
function array_key_exists ($key, $search) {

    return typeof $search[$key] != 'undefined';
}

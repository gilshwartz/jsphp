/**
 * Incomplete object class ie. when class is not reachable in current context.
 * @link http://php.net/manual/en/reserved.classes.php
 */
__PHP_Incomplete_Class.prototype = {};
__PHP_Incomplete_Class.prototype.constructor = __PHP_Incomplete_Class;

/**
 * Default constructor.
 * @constructor
 */
function __PHP_Incomplete_Class() {

}

__PHP_Incomplete_Class.prototype.toString = function () {
    throw new Exception("Object of class __PHP_Incomplete_Class could not be converted to string");
};

/**
 * Created by typecasting to object.
 * @link http://php.net/manual/en/reserved.classes.php
 */
stdClass.prototype = new Object();
stdClass.prototype.constructor = stdClass;

/**
 * Default constructor.
 * @constructor
 */
function stdClass() {

}

stdClass.prototype.toString = function () {
    throw new Exception("Object of class stdClass could not be converted to string");
};

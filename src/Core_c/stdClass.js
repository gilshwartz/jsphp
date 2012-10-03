/**
 * Created by typecasting to object.
 * @link http://php.net/manual/en/reserved.classes.php
 */
stdClass.prototype = {};
stdClass.prototype.constructor = stdClass;

/**
 * Default constructor.
 * @constructor
 */
function stdClass() {

}

/**
 * (PHP 5 &gt;= 5.1.0)<br/>
 * stdClass could not be converted to string
 * @override
 * @throws Exception
 */
stdClass.prototype.toString = function () {
    throw new Exception("Object of class stdClass could not be converted to string");
};

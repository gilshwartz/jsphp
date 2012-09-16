/**
 * Exception is the base class for all Exceptions.
 * @link http://php.net/manual/en/class.exception.php
 */
Exception.prototype = new Object();
Exception.prototype.constructor = Exception;

/**
 * (PHP 5 &gt;= 5.1.0)<br/>
 * Construct the exception. Note: The message is NOT binary safe.
 * @link http://php.net/manual/en/exception.construct.php
 * @param {string} $message [optional] The Exception message to throw.
 * @param {int} $code [optional] The Exception code.
 * @param {Exception} $previous [optional] The previous exception used for the exception chaining. Since 5.3.0
 * @constructor
 */
function Exception($message, $code, $previous) {
    $message = $message || "Uncaught exception 'Exception'";
    $code = $code || 0;
    $previous = $previous || null;

    this.message = $message;
    this.code = $code;
    this.file = "Command line code";
    this.line = 1;
    /** @private */ this.trace = [];
    /** @private */ this.previous = $previous;
};

/**
 * (PHP 5 &gt;= 5.1.0)<br/>
 * Gets the Exception message
 * @link http://php.net/manual/en/exception.getmessage.php
 * @return {string} the Exception message as a string.
 */
Exception.prototype.getMessage = function () {
    return this.message;
}

/**
 * (PHP 5 &gt;= 5.1.0)<br/>
 * Gets the Exception code
 * @link http://php.net/manual/en/exception.getcode.php
 * @return {mixed|number} the exception code as integer in
 * <b>Exception</b> but possibly as other type in
 * <b>Exception</b> descendants (for example as
 * string in <b>PDOException</b>).
 */
Exception.prototype.getCode = function () {
    return this.code;
}

/**
 * (PHP 5 &gt;= 5.1.0)<br/>
 * Gets the file in which the exception occurred
 * @link http://php.net/manual/en/exception.getfile.php
 * @return {string} the filename in which the exception was created.
 */
Exception.prototype.getFile = function () {
    return this.file;
}

/**
 * (PHP 5 &gt;= 5.1.0)<br/>
 * Gets the line in which the exception occurred
 * @link http://php.net/manual/en/exception.getline.php
 * @return {int} the line number where the exception was created.
 */
Exception.prototype.getLine = function () {
    return this.line;
}

/**
 * (PHP 5 &gt;= 5.1.0)<br/>
 * Gets the stack trace
 * @link http://php.net/manual/en/exception.gettrace.php
 * @return {array} the Exception stack trace as an array.
 */
Exception.prototype.getTrace = function () {
    return this.trace;
}

/**
 * (PHP 5 &gt;= 5.3.0)<br/>
 * Returns previous Exception
 * @link http://php.net/manual/en/exception.getprevious.php
 * @return {Exception} the previous <b>Exception</b> if available
 * or null otherwise.
 */
Exception.prototype.getPrevious = function () {
    return this.previous;
}

/**
 * (PHP 5 &gt;= 5.1.0)<br/>
 * Gets the stack trace as a string
 * @link http://php.net/manual/en/exception.gettraceasstring.php
 * @return {string} the Exception stack trace as a string.
 */
Exception.prototype.getTraceAsString = function () {

    function getStackInfo(){
        try {
            throw Error('');
        } catch(err) {
            return err;
        }
    }

    var err = getStackInfo();

    return err.stack;
}

/**
 * (PHP 5 &gt;= 5.1.0)<br/>
 * String representation of the exception
 * @override
 * @this Exception
 * @link http://php.net/manual/en/exception.tostring.php
 * @return {string} the string representation of the exception.
 */
Exception.prototype.toString = function () {
    return this.message + ' in ' + this.file + ' on line ' + this.line;
};

// /**
// * Exception is the base class for
// * all Exceptions.
// * @link http://php.net/manual/en/class.exception.php
// */
//class Exception {
//    protected $message;
//    protected $code;
//    protected $file;
//    protected $line;
//
//
//    /**
//     * (PHP 5 &gt;= 5.1.0)<br/>
//     * Clone the exception
//     * @link http://php.net/manual/en/exception.clone.php
//     * @return void
//     */
//    final private function __clone() { }
//
//    /**
//     * (PHP 5 &gt;= 5.1.0)<br/>
//     * Construct the exception. Note: The message is NOT binary safe.
//     * @link http://php.net/manual/en/exception.construct.php
//     * @param string $message [optional] The Exception message to throw.
//     * @param int $code [optional] The Exception code.
//     * @param Exception $previous [optional] The previous exception used for the exception chaining. Since 5.3.0
//     */
//    public function __construct($message = "", $code = 0, Exception $previous = null) { }
//
//    /**
//     * (PHP 5 &gt;= 5.1.0)<br/>
//     * Gets the Exception message
//     * @link http://php.net/manual/en/exception.getmessage.php
//     * @return string the Exception message as a string.
//     */
//    final public function getMessage() { }
//
//    /**
//     * (PHP 5 &gt;= 5.1.0)<br/>
//     * Gets the Exception code
//     * @link http://php.net/manual/en/exception.getcode.php
//     * @return mixed|int the exception code as integer in
//     * <b>Exception</b> but possibly as other type in
//     * <b>Exception</b> descendants (for example as
//     * string in <b>PDOException</b>).
//     */
//    final public function getCode() { }
//
//    /**
//     * (PHP 5 &gt;= 5.1.0)<br/>
//     * Gets the file in which the exception occurred
//     * @link http://php.net/manual/en/exception.getfile.php
//     * @return string the filename in which the exception was created.
//     */
//    final public function getFile() { }
//
//    /**
//     * (PHP 5 &gt;= 5.1.0)<br/>
//     * Gets the line in which the exception occurred
//     * @link http://php.net/manual/en/exception.getline.php
//     * @return int the line number where the exception was created.
//     */
//    final public function getLine() { }
//
//    /**
//     * (PHP 5 &gt;= 5.1.0)<br/>
//     * Gets the stack trace
//     * @link http://php.net/manual/en/exception.gettrace.php
//     * @return array the Exception stack trace as an array.
//     */
//    final public function getTrace() { }
//
//    /**
//     * (PHP 5 &gt;= 5.3.0)<br/>
//     * Returns previous Exception
//     * @link http://php.net/manual/en/exception.getprevious.php
//     * @return Exception the previous <b>Exception</b> if available
//     * or null otherwise.
//     */
//    final public function getPrevious() { }
//
//    /**
//     * (PHP 5 &gt;= 5.1.0)<br/>
//     * Gets the stack trace as a string
//     * @link http://php.net/manual/en/exception.gettraceasstring.php
//     * @return string the Exception stack trace as a string.
//     */
//    final public function getTraceAsString() { }
//
//    /**
//     * (PHP 5 &gt;= 5.1.0)<br/>
//     * String representation of the exception
//     * @link http://php.net/manual/en/exception.tostring.php
//     * @return string the string representation of the exception.
//     */
//    public function __toString() { }
//}

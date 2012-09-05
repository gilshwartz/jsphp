/**
 * (PHP 4, PHP 5)
 * Get the integer value of a variable
 * @link http://php.net/manual/en/function.intval.php
 * @param mixed $var
 * The scalar value being converted to an integer
 *
 * @param int $base [optional]
 * The base for the conversion
 *
 * @return int The integer value of var on success, or 0 on
 * failure. Empty arrays and objects return 0, non-empty arrays and
 * objects return 1.
 *
 *
 * The maximum value depends on the system. 32 bit systems have a
 * maximum signed integer range of -2147483648 to 2147483647. So for example
 * on such a system, intval('1000000000000') will return
 * 2147483647. The maximum signed integer value for 64 bit systems is
 * 9223372036854775807.
 *
 *
 * Strings will most likely return 0 although this depends on the
 * leftmost characters of the string. The common rules of
 * integer casting
 * apply.
 */
// function intval ($var, $base = null) {}
function intval($var, $base) {
    var parc = 0;
    var output = 0;
    var vtype = typeof $var;
    var btype = typeof $base;

    if (vtype !== 'undefined') {
        parc++;
    }

    if (parc < 1) {
        throw 'Wrong parameter count for intval()';
    }

    if (btype !== 'number' && btype !== 'undefined') {
        throw 'intval() expects parameter 2 to be long, ' + btype + ' given';
    }

    $base = $base || 10;

    if ($var === true) {
        return 1;
    }

    output = parseInt($var);

    if (isNaN(output)) {
        return 0;
    }

    if (vtype == 'string') {
        return parseInt($var, $base);
    }

    return parseInt($var);
}

/**
 * (PHP 4 &gt;= 4.2.0, PHP 5)
 * Get float value of a variable
 * @link http://php.net/manual/en/function.floatval.php
 * @param mixed $var May be any scalar type. should not be used on objects, as doing so will emit an E_NOTICE level error and return 1.
 * @return float value of the given variable. Empty arrays return 0, non-empty arrays return 1.
 */
function floatval($var) {
    var parc = 0;

    if (vtype !== 'undefined') {
        parc++;
    }

    if (parc != 1) {
        throw 'floatval() expects exactly 1 parameter, ' + parc + ' given';
    }

    return parseFloat($var);
}

/**
 * (PHP 4.2.0, PHP 5)
 * doubleval is Alias of floatval()
 * Get float value of a variable
 * &Alias; floatval
 * @link http://php.net/manual/en/function.doubleval.php
 * @param mixed $var May be any scalar type. should not be used on objects, as doing so will emit an E_NOTICE level error and return 1.
 * @return float value of the given variable. Empty arrays return 0, non-empty arrays return 1.
 */
// function doubleval ($var) {}
function doubleval($var) {
    return floatval($var);
}

/**
 * (PHP 4, PHP 5)
 * Get string value of a variable
 * @link http://php.net/manual/en/function.strval.php
 * @param mixed $var
 * The variable that is being converted to a string.
 *
 *
 * var may be any scalar type. You cannot use
 * strval on arrays or objects.
 *
 * @return string The string value of var.
 */
// function strval ($var) {}
function strval($var) {
    var parc = 0;
    var vtype = typeof $var;

    if (vtype === 'undefined') {
        throw 'strval() expects exactly 1 parameter, ' + parc + ' given'
    }

    if (parc !== 1) {
        throw 'strval() expects exactly 1 parameter, ' + parc + ' given'
    }

    if (vtype === 'object') {
        throw 'Object of class stdClass could not be converted to string';
    }

    if (vtype === 'array') {
        throw 'Array';
    }

    return $var.toString();
}

/**
 * (PHP 4, PHP 5)
 * Get the type of a variable
 * @link http://php.net/manual/en/function.gettype.php
 * @param mixed $var
 * The variable being type checked.
 *
 * @return string Possibles values for the returned string are:
 * "boolean"
 * "integer"
 * "double" (for historical reasons "double" is
 * returned in case of a float, and not simply
 * "float")
 * "string"
 * "array"
 * "object"
 * "resource"
 * "NULL"
 * "unknown type"
 */
// function gettype ($var) {}
function gettype($var) {

    var vtype = typeof $var;

    if(vtype === 'undefined') {
        throw 'gettype() expects exactly 1 parameter, 0 given';
    }

    switch(vtype) {
        case "boolean":
        case "string":
            return vtype;

        case "function":
            return "object";

        case "object":
            if($var === null) {
                return "NULL";
            }

            if(Object.prototype.toString.call($var).match(/\[object Array]/)) {
                return "array";
            }

            if(Object.prototype.toString.call($var).match(/\[object Object]/)) {
                return "object";
            }

            return "resource"; // ie. HTML elements (why not?)

        case "number":
            var temp = "" + $var + "";
            return temp.match(/\./) ? "double" : "integer";

        default:
            return 'unknown type';
    }
}

/**
 * (PHP 4, PHP 5)
 * Set the type of a variable
 * @link http://php.net/manual/en/function.settype.php
 * @param mixed $var
 * The variable being converted.
 *
 * @param string $type
 * Possibles values of type are:
 * "boolean" (or, since PHP 4.2.0, "bool")
 * @return bool true on success or false on failure.
 */
// function settype (&$var, $type) {}
function settype($var, $type) {}

/**
 * (PHP 4 &gt;= 4.0.4, PHP 5)
 * Finds whether a variable is &null;
 * @link http://php.net/manual/en/function.is-null.php
 * @param mixed $var
 * The variable being evaluated.
 *
 * @return bool true if var is null, false
 * otherwise.
 */
// function is_null ($var) {}
function is_null($var) {}

/**
 * (PHP 4, PHP 5)
 * Finds whether a variable is a resource
 * @link http://php.net/manual/en/function.is-resource.php
 * @param mixed $var
 * The variable being evaluated.
 *
 * @return bool true if var is a resource,
 * false otherwise.
 */
// function is_resource ($var) {}
function is_resource($var) {}

/**
 * (PHP 4, PHP 5)
 * Finds out whether a variable is a boolean
 * @link http://php.net/manual/en/function.is-bool.php
 * @param mixed $var
 * The variable being evaluated.
 *
 * @return bool true if var is a boolean,
 * false otherwise.
 */
// function is_bool ($var) {}
function is_bool($var) {}

/**
 * (PHP 4, PHP 5)
 * &Alias; is_int
 * @link http://php.net/manual/en/function.is-long.php
 * @param mixed $var
 * The variable being evaluated.
 *
 * @return bool true if var is an integer,
 * false otherwise.
 */
// function is_long ($var) {}
function is_long($var) {}

/**
 * (PHP 4, PHP 5)
 * Finds whether the type of a variable is float
 * @link http://php.net/manual/en/function.is-float.php
 * @param mixed $var
 * The variable being evaluated.
 *
 * @return bool true if var is a float,
 * false otherwise.
 */
// function is_float ($var) {}
function is_float($var) {}

/**
 * (PHP 4, PHP 5)
 * Find whether the type of a variable is integer
 * @link http://php.net/manual/en/function.is-int.php
 * @param mixed $var
 * The variable being evaluated.
 *
 * @return bool true if var is an integer,
 * false otherwise.
 */
// function is_int ($var) {}
function is_int($var) {}

/**
 * (PHP 4, PHP 5)
 * &Alias; is_int
 * @link http://php.net/manual/en/function.is-integer.php
 * @param mixed $var
 * The variable being evaluated.
 *
 * @return bool true if var is an integer,
 * false otherwise.
 */
// function is_integer ($var) {}
function is_integer($var) {}

/**
 * (PHP 4, PHP 5)
 * &Alias; is_float
 * @link http://php.net/manual/en/function.is-double.php
 * @param mixed $var
 * The variable being evaluated.
 *
 * @return bool true if var is a float,
 * false otherwise.
 */
// function is_double ($var) {}
function is_double($var) {}

/**
 * (PHP 4, PHP 5)
 * &Alias; is_float
 * @link http://php.net/manual/en/function.is-real.php
 * @param mixed $var
 * The variable being evaluated.
 *
 * @return bool true if var is a float,
 * false otherwise.
 */
// function is_real ($var) {}
function is_real($var) {}

/**
 * (PHP 4, PHP 5)
 * Finds whether a variable is a number or a numeric string
 * @link http://php.net/manual/en/function.is-numeric.php
 * @param mixed $var
 * The variable being evaluated.
 *
 * @return bool true if var is a number or a numeric
 * string, false otherwise.
 */
// function is_numeric ($var) {}
function is_numeric($var) {}

/**
 * (PHP 4, PHP 5)
 * Find whether the type of a variable is string
 * @link http://php.net/manual/en/function.is-string.php
 * @param mixed $var
 * The variable being evaluated.
 *
 * @return bool true if var is of type string,
 * false otherwise.
 */
// function is_string ($var) {}
function is_string($var) {}

/**
 * (PHP 4, PHP 5)
 * Finds whether a variable is an array
 * @link http://php.net/manual/en/function.is-array.php
 * @param mixed $var
 * The variable being evaluated.
 *
 * @return bool true if var is an array,
 * false otherwise.
 */
// function is_array ($var) {}
function is_array($var) {}

/**
 * (PHP 4, PHP 5)
 * Finds whether a variable is an object
 * @link http://php.net/manual/en/function.is-object.php
 * @param mixed $var
 * The variable being evaluated.
 *
 * @return bool true if var is an object,
 * false otherwise.
 */
// function is_object ($var) {}
function is_object($var) {}

/**
 * (PHP 4 &gt;= 4.0.5, PHP 5)
 * Finds whether a variable is a scalar
 * @link http://php.net/manual/en/function.is-scalar.php
 * @param mixed $var
 * The variable being evaluated.
 *
 * @return bool true if var is a scalar false
 * otherwise.
 */
// function is_scalar ($var) {}
function is_scalar($var) {}

/**
 * (PHP 4 &gt;= 4.0.6, PHP 5)
 * Verify that the contents of a variable can be called as a function
 * @link http://php.net/manual/en/function.is-callable.php
 * @param callback|callable $name
 * Can be either the name of a function stored in a string variable, or
 * an object and the name of a method within the object, like this:
 * array($SomeObject, 'MethodName')
 *
 * @param bool $syntax_only [optional]
 * If set to true the function only verifies that
 * name might be a function or method. It will only
 * reject simple variables that are not strings, or an array that does
 * not have a valid structure to be used as a callback. The valid ones
 * are supposed to have only 2 entries, the first of which is an object
 * or a string, and the second a string.
 *
 * @param string $callable_name [optional]
 * Receives the "callable name". In the example below it is
 * "someClass::someMethod". Note, however, that despite the implication
 * that someClass::SomeMethod() is a callable static method, this is not
 * the case.
 *
 * @return bool true if name is callable, false
 * otherwise.
 */
// function is_callable ($name, $syntax_only = null, &$callable_name = null) {}
function is_callable($name, $syntax_only, $callable_name) {}

/**
 * (PHP 4, PHP 5)
 * Closes process file pointer
 * @link http://php.net/manual/en/function.pclose.php
 * @param resource $handle
 * The file pointer must be valid, and must have been returned by a
 * successful call to popen.
 *
 * @return int the termination status of the process that was run.
 */
// function pclose ($handle) {}
function pclose($handle) {}

/**
 * (PHP 4, PHP 5)
 * Opens process file pointer
 * @link http://php.net/manual/en/function.popen.php
 * @param string $command
 * The command
 *
 * @param string $mode
 * The mode
 *
 * @return resource a file pointer identical to that returned by
 * fopen, except that it is unidirectional (may
 * only be used for reading or writing) and must be closed with
 * pclose. This pointer may be used with
 * fgets, fgetss, and
 * fwrite.
 *
 *
 * If an error occurs, returns false.
 */
// function popen ($command, $mode) {}
function popen($command, $mode) {}

/**
 * (PHP 4, PHP 5)
 * Outputs a file
 * @link http://php.net/manual/en/function.readfile.php
 * @param string $filename
 * The filename being read.
 *
 * @param bool $use_include_path [optional]
 * You can use the optional second parameter and set it to true, if
 * you want to search for the file in the include_path, too.
 *
 * @param resource $context [optional]
 * A context stream resource.
 *
 * @return int the number of bytes read from the file. If an error
 * occurs, false is returned and unless the function was called as
 * @readfile, an error message is printed.
 */
// function readfile ($filename, $use_include_path = null, $context = null) {}
function readfile($filename, $use_include_path, $context) {}

/**
 * (PHP 4, PHP 5)
 * Rewind the position of a file pointer
 * @link http://php.net/manual/en/function.rewind.php
 * @param resource $handle
 * The file pointer must be valid, and must point to a file
 * successfully opened by fopen.
 *
 * @return bool true on success or false on failure.
 */
// function rewind ($handle) {}
function rewind($handle) {}

/**
 * (PHP 4, PHP 5)
 * Removes directory
 * @link http://php.net/manual/en/function.rmdir.php
 * @param string $dirname
 * Path to the directory.
 *
 * @param resource $context [optional] &note.context-support;
 * @return bool true on success or false on failure.
 */
// function rmdir ($dirname, $context = null) {}
function rmdir($dirname, $context) {}

/**
 * (PHP 4, PHP 5)
 * Changes the current umask
 * @link http://php.net/manual/en/function.umask.php
 * @param int $mask [optional]
 * The new umask.
 *
 * @return int umask without arguments simply returns the
 * current umask otherwise the old umask is returned.
 */
// function umask ($mask = null) {}
function umask($mask) {}

/**
 * (PHP 4, PHP 5)
 * Closes an open file pointer
 * @link http://php.net/manual/en/function.fclose.php
 * @param resource $handle
 * The file pointer must be valid, and must point to a file successfully
 * opened by fopen or fsockopen.
 *
 * @return bool true on success or false on failure.
 */
// function fclose ($handle) {}
function fclose($handle) {}

/**
 * (PHP 4, PHP 5)
 * Tests for end-of-file on a file pointer
 * @link http://php.net/manual/en/function.feof.php
 * @param resource $handle &fs.validfp.all;
 * @return bool true if the file pointer is at EOF or an error occurs
 * (including socket timeout); otherwise returns false.
 */
// function feof ($handle) {}
function feof($handle) {}

/**
 * (PHP 4, PHP 5)
 * Gets character from file pointer
 * @link http://php.net/manual/en/function.fgetc.php
 * @param resource $handle &fs.validfp.all;
 * @return string a string containing a single character read from the file pointed
 * to by handle. Returns false on EOF.
 */
// function fgetc ($handle) {}
function fgetc($handle) {}

/**
 * (PHP 4, PHP 5)
 * Gets line from file pointer
 * @link http://php.net/manual/en/function.fgets.php
 * @param resource $handle &fs.validfp.all;
 * @param int $length [optional]
 * Reading ends when length - 1 bytes have been
 * read, on a newline (which is included in the return value), or on EOF
 * (whichever comes first). If no length is specified, it will keep
 * reading from the stream until it reaches the end of the line.
 *
 *
 * Until PHP 4.3.0, omitting it would assume 1024 as the line length.
 * If the majority of the lines in the file are all larger than 8KB,
 * it is more resource efficient for your script to specify the maximum
 * line length.
 *
 * @return string a string of up to length - 1 bytes read from
 * the file pointed to by handle.
 *
 *
 * If an error occurs, returns false.
 */
// function fgets ($handle, $length = null) {}
function fgets($handle, $length) {}

/**
 * (PHP 4, PHP 5)
 * Gets line from file pointer and strip HTML tags
 * @link http://php.net/manual/en/function.fgetss.php
 * @param resource $handle &fs.validfp.all;
 * @param int $length [optional]
 * Length of the data to be retrieved.
 *
 * @param string $allowable_tags [optional]
 * You can use the optional third parameter to specify tags which should
 * not be stripped.
 *
 * @return string a string of up to length - 1 bytes read from
 * the file pointed to by handle, with all HTML and PHP
 * code stripped.
 *
 *
 * If an error occurs, returns false.
 */
// function fgetss ($handle, $length = null, $allowable_tags = null) {}
function fgetss($handle, $length, $allowable_tags) {}

/**
 * (PHP 4, PHP 5)
 * Binary-safe file read
 * @link http://php.net/manual/en/function.fread.php
 * @param resource $handle &fs.file.pointer;
 * @param int $length
 * Up to length number of bytes read.
 *
 * @return string the read string or false on failure.
 */
// function fread ($handle, $length) {}
function fread($handle, $length) {}

/**
 * (PHP 4, PHP 5)
 * Opens file or URL
 * @link http://php.net/manual/en/function.fopen.php
 * @param string $filename
 * If filename is of the form "scheme://...", it
 * is assumed to be a URL and PHP will search for a protocol handler
 * (also known as a wrapper) for that scheme. If no wrappers for that
 * protocol are registered, PHP will emit a notice to help you track
 * potential problems in your script and then continue as though
 * filename specifies a regular file.
 *
 *
 * If PHP has decided that filename specifies
 * a local file, then it will try to open a stream on that file.
 * The file must be accessible to PHP, so you need to ensure that
 * the file access permissions allow this access.
 * If you have enabled &safemode;,
 * or open_basedir further
 * restrictions may apply.
 *
 *
 * If PHP has decided that filename specifies
 * a registered protocol, and that protocol is registered as a
 * network URL, PHP will check to make sure that
 * allow_url_fopen is
 * enabled. If it is switched off, PHP will emit a warning and
 * the fopen call will fail.
 *
 *
 * The list of supported protocols can be found in . Some protocols (also referred to as
 * wrappers) support context
 * and/or &php.ini; options. Refer to the specific page for the
 * protocol in use for a list of options which can be set. (e.g.
 * &php.ini; value user_agent used by the
 * http wrapper).
 *
 *
 * On the Windows platform, be careful to escape any backslashes
 * used in the path to the file, or use forward slashes.
 * ]]>
 *
 * @param string $mode
 * The mode parameter specifies the type of access
 * you require to the stream. It may be any of the following:
 * <table>
 * A list of possible modes for fopen
 * using mode
 * <tr valign="top">
 * <td>mode</td>
 * <td>Description</td>
 * </tr>
 * <tr valign="top">
 * <td>'r'</td>
 * <td>
 * Open for reading only; place the file pointer at the
 * beginning of the file.
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>'r+'</td>
 * <td>
 * Open for reading and writing; place the file pointer at
 * the beginning of the file.
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>'w'</td>
 * <td>
 * Open for writing only; place the file pointer at the
 * beginning of the file and truncate the file to zero length.
 * If the file does not exist, attempt to create it.
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>'w+'</td>
 * <td>
 * Open for reading and writing; place the file pointer at
 * the beginning of the file and truncate the file to zero
 * length. If the file does not exist, attempt to create it.
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>'a'</td>
 * <td>
 * Open for writing only; place the file pointer at the end of
 * the file. If the file does not exist, attempt to create it.
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>'a+'</td>
 * <td>
 * Open for reading and writing; place the file pointer at
 * the end of the file. If the file does not exist, attempt to
 * create it.
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>'x'</td>
 * <td>
 * Create and open for writing only; place the file pointer at the
 * beginning of the file. If the file already exists, the
 * fopen call will fail by returning false and
 * generating an error of level E_WARNING. If
 * the file does not exist, attempt to create it. This is equivalent
 * to specifying O_EXCL|O_CREAT flags for the
 * underlying open(2) system call.
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>'x+'</td>
 * <td>
 * Create and open for reading and writing; place the file pointer at
 * the beginning of the file. If the file already exists, the
 * fopen call will fail by returning false and
 * generating an error of level E_WARNING. If
 * the file does not exist, attempt to create it. This is equivalent
 * to specifying O_EXCL|O_CREAT flags for the
 * underlying open(2) system call.
 * </td>
 * </tr>
 * </table>
 *
 *
 * Different operating system families have different line-ending
 * conventions. When you write a text file and want to insert a line
 * break, you need to use the correct line-ending character(s) for your
 * operating system. Unix based systems use \n as the
 * line ending character, Windows based systems use \r\n
 * as the line ending characters and Macintosh based systems use
 * \r as the line ending character.
 *
 *
 * If you use the wrong line ending characters when writing your files, you
 * might find that other applications that open those files will "look
 * funny".
 *
 *
 * Windows offers a text-mode translation flag ('t')
 * which will transparently translate \n to
 * \r\n when working with the file. In contrast, you
 * can also use 'b' to force binary mode, which will not
 * translate your data. To use these flags, specify either
 * 'b' or 't' as the last character
 * of the mode parameter.
 *
 *
 * The default translation mode depends on the SAPI and version of PHP that
 * you are using, so you are encouraged to always specify the appropriate
 * flag for portability reasons. You should use the 't'
 * mode if you are working with plain-text files and you use
 * \n to delimit your line endings in your script, but
 * expect your files to be readable with applications such as notepad. You
 * should use the 'b' in all other cases.
 *
 *
 * If you do not specify the 'b' flag when working with binary files, you
 * may experience strange problems with your data, including broken image
 * files and strange problems with \r\n characters.
 *
 *
 * For portability, it is strongly recommended that you always
 * use the 'b' flag when opening files with fopen.
 *
 *
 * Again, for portability, it is also strongly recommended that
 * you re-write code that uses or relies upon the 't'
 * mode so that it uses the correct line endings and
 * 'b' mode instead.
 *
 * @param bool $use_include_path [optional]
 * The optional third use_include_path parameter
 * can be set to '1' or true if you want to search for the file in the
 * include_path, too.
 *
 * @param resource $context [optional] &note.context-support;
 * @return resource a file pointer resource on success, or false on error.
 */
// function fopen ($filename, $mode, $use_include_path = null, $context = null) {}
function fopen($filename, $mode, $use_include_path, $context) {}

/**
 * (PHP 4, PHP 5)
 * Output all remaining data on a file pointer
 * @link http://php.net/manual/en/function.fpassthru.php
 * @param resource $handle &fs.validfp.all;
 * @return int If an error occurs, fpassthru returns
 * false. Otherwise, fpassthru returns
 * the number of characters read from handle
 * and passed through to the output.
 */
// function fpassthru ($handle) {}
function fpassthru($handle) {}

/**
 * (PHP 4, PHP 5)
 * Truncates a file to a given length
 * @link http://php.net/manual/en/function.ftruncate.php
 * @param resource $handle
 * The file pointer.
 *
 *
 * The handle must be open for writing.
 *
 * @param int $size
 * The size to truncate to.
 *
 *
 * If size is larger than the file it is extended
 * with null bytes.
 *
 *
 * If size is smaller than the extra data
 * will be lost.
 *
 * @return bool true on success or false on failure.
 */
// function ftruncate ($handle, $size) {}
function ftruncate($handle, $size) {}

/**
 * (PHP 4, PHP 5)
 * Gets information about a file using an open file pointer
 * @link http://php.net/manual/en/function.fstat.php
 * @param resource $handle &fs.file.pointer;
 * @return array an array with the statistics of the file; the format of the array
 * is described in detail on the stat manual page.
 */
// function fstat ($handle) {}
function fstat($handle) {}

/**
 * (PHP 4, PHP 5)
 * Seeks on a file pointer
 * @link http://php.net/manual/en/function.fseek.php
 * @param resource $handle &fs.file.pointer;
 * @param int $offset
 * The offset.
 *
 *
 * To move to a position before the end-of-file, you need to pass
 * a negative value in offset and
 * set whence
 * to SEEK_END.
 *
 * @param int $whence [optional]
 * whence values are:
 * SEEK_SET - Set position equal to offset bytes.
 * SEEK_CUR - Set position to current location plus offset.
 * SEEK_END - Set position to end-of-file plus offset.
 *
 *
 * If whence is not specified, it is assumed to be
 * SEEK_SET.
 *
 * @return int Upon success, returns 0; otherwise, returns -1. Note that seeking
 * past EOF is not considered an error.
 */
// function fseek ($handle, $offset, $whence = null) {}
function fseek($handle, $offset, $whence) {}

/**
 * (PHP 4, PHP 5)
 * Returns the current position of the file read/write pointer
 * @link http://php.net/manual/en/function.ftell.php
 * @param resource $handle
 * The file pointer must be valid, and must point to a file successfully
 * opened by fopen or popen.
 * ftell gives undefined results for append-only streams
 * (opened with "a" flag).
 *
 * @return int the position of the file pointer referenced by
 * handle as an integer; i.e., its offset into the file stream.
 *
 *
 * If an error occurs, returns false.
 */
// function ftell ($handle) {}
function ftell($handle) {}

/**
 * (PHP 4 &gt;= 4.0.1, PHP 5)
 * Flushes the output to a file
 * @link http://php.net/manual/en/function.fflush.php
 * @param resource $handle &fs.validfp.all;
 * @return bool true on success or false on failure.
 */
// function fflush ($handle) {}
function fflush($handle) {}

/**
 * (PHP 4, PHP 5)
 * Binary-safe file write
 * @link http://php.net/manual/en/function.fwrite.php
 * @param resource $handle &fs.file.pointer;
 * @param string $string
 * The string that is to be written.
 *
 * @param int $length [optional]
 * If the length argument is given, writing will
 * stop after length bytes have been written or
 * the end of string is reached, whichever comes
 * first.
 *
 *
 * Note that if the length argument is given,
 * then the magic_quotes_runtime
 * configuration option will be ignored and no slashes will be
 * stripped from string.
 *
 * @return int
 */
// function fwrite ($handle, $string, $length = null) {}
function fwrite($handle, $string, $length) {}

/**
 * (PHP 4, PHP 5)
 * &Alias; fwrite
 * @link http://php.net/manual/en/function.fputs.php
 * @param $fp
 * @param $str
 * @param $length [optional]
 */
// function fputs ($fp, $str, $length) {}
function fputs($fp, $str, $length) {}

/**
 * (PHP 4, PHP 5)
 * Attempts to create the directory specified by pathname.
 * @link http://php.net/manual/en/function.mkdir.php
 * @param string $pathname
 * The directory path.
 *
 * @param int $mode [optional]
 * The mode is 0777 by default, which means the widest possible
 * access. For more information on modes, read the details
 * on the chmod page.
 *
 *
 * mode is ignored on Windows.
 *
 *
 * Note that you probably want to specify the mode as an octal number,
 * which means it should have a leading zero. The mode is also modified
 * by the current umask, which you can change using
 * umask().
 *
 * @param bool $recursive [optional]
 * Allows the creation of nested directories specified in the pathname. Default to false.
 *
 * @param resource $context [optional] &note.context-support;
 * @return bool true on success or false on failure.
 */
// function mkdir ($pathname, $mode = 0777, $recursive = false, $context = null) {}
function mkdir($pathname, $mode, $recursive, $context) {}

/**
 * (PHP 4, PHP 5)
 * Renames a file or directory
 * @link http://php.net/manual/en/function.rename.php
 * @param string $oldname
 *
 *
 * The old name. The wrapper used in oldname
 * must match the wrapper used in
 * newname.
 *
 * @param string $newname
 * The new name.
 *
 * @param resource $context [optional] &note.context-support;
 * @return bool true on success or false on failure.
 */
// function rename ($oldname, $newname, $context = null) {}
function rename($oldname, $newname, $context) {}

/**
 * (PHP 4, PHP 5)
 * Copies file
 * @link http://php.net/manual/en/function.copy.php
 * @param string $source
 * Path to the source file.
 *
 * @param string $dest
 * The destination path. If dest is a URL, the
 * copy operation may fail if the wrapper does not support overwriting of
 * existing files.
 *
 *
 * If the destination file already exists, it will be overwritten.
 *
 * @param resource $context [optional]
 * A valid context resource created with
 * stream_context_create.
 *
 * @return bool true on success or false on failure.
 */
// function copy ($source, $dest, $context = null) {}
function copy($source, $dest, $context) {}

/**
 * (PHP 4, PHP 5)
 * Create file with unique file name
 * @link http://php.net/manual/en/function.tempnam.php
 * @param string $dir
 * The directory where the temporary filename will be created.
 *
 * @param string $prefix
 * The prefix of the generated temporary filename.
 *
 * Windows use only the first three characters of prefix.
 * @return string the new temporary filename, or false on
 * failure.
 */
// function tempnam ($dir, $prefix) {}
function tempnam($dir, $prefix) {}

/**
 * (PHP 4, PHP 5)
 * Creates a temporary file
 * @link http://php.net/manual/en/function.tmpfile.php
 * @return resource a file handle, similar to the one returned by
 * fopen, for the new file or false on failure.
 */
// function tmpfile () {}
function tmpfile() {}

/**
 * (PHP 4, PHP 5)
 * Reads entire file into an array
 * @link http://php.net/manual/en/function.file.php
 * @param string $filename
 * Path to the file.
 *
 * &tip.fopen-wrapper;
 * @param int $flags [optional]
 * The optional parameter flags can be one, or
 * more, of the following constants:
 * FILE_USE_INCLUDE_PATH
 * Search for the file in the include_path.
 * @param resource $context [optional]
 * A context resource created with the
 * stream_context_create function.
 *
 *
 * &note.context-support;
 *
 * @return array the file in an array. Each element of the array corresponds to a
 * line in the file, with the newline still attached. Upon failure,
 * file returns false.
 *
 *
 * Each line in the resulting array will include the line ending, unless
 * FILE_IGNORE_NEW_LINES is used, so you still need to
 * use rtrim if you do not want the line ending
 * present.
 */
// function file ($filename, $flags = null, $context = null) {}
function file($filename, $flags, $context) {}

/**
 * (PHP 4 &gt;= 4.3.0, PHP 5)
 * Reads entire file into a string
 * @link http://php.net/manual/en/function.file-get-contents.php
 * @param string $filename
 * Name of the file to read.
 *
 * @param int $flags [optional]
 * Prior to PHP 6, this parameter is called
 * use_include_path and is a bool.
 * As of PHP 5 the FILE_USE_INCLUDE_PATH can be used
 * to trigger include path
 * search.
 *
 *
 * The value of flags can be any combination of
 * the following flags (with some restrictions), joined with the
 * binary OR (|)
 * operator.
 *
 *
 * <table>
 * Available flags
 * <tr valign="top">
 * <td>Flag</td>
 * <td>Description</td>
 * </tr>
 * <tr valign="top">
 * <td>
 * FILE_USE_INCLUDE_PATH
 * </td>
 * <td>
 * Search for filename in the include directory.
 * See include_path for more
 * information.
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>
 * FILE_TEXT
 * </td>
 * <td>
 * As of PHP 6, the default encoding of the read
 * data is UTF-8. You can specify a different encoding by creating a
 * custom context or by changing the default using
 * stream_default_encoding. This flag cannot be
 * used with FILE_BINARY.
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>
 * FILE_BINARY
 * </td>
 * <td>
 * With this flag, the file is read in binary mode. This is the default
 * setting and cannot be used with FILE_TEXT.
 * </td>
 * </tr>
 * </table>
 *
 * @param resource $context [optional]
 * A valid context resource created with
 * stream_context_create. If you don't need to use a
 * custom context, you can skip this parameter by &null;.
 *
 * @param int $offset [optional]
 * The offset where the reading starts.
 *
 * @param int $maxlen [optional]
 * Maximum length of data read. The default is to read until end
 * of file is reached.
 *
 * @return string The function returns the read data or false on failure.
 */
// function file_get_contents ($filename, $flags = null, $context = null, $offset = null, $maxlen = null) {}
function file_get_contents($filename, $flags, $context, $offset, $maxlen) {}

/**
 * (PHP 5)
 * Write a string to a file
 * @link http://php.net/manual/en/function.file-put-contents.php
 * @param string $filename
 * Path to the file where to write the data.
 *
 * @param mixed $data
 * The data to write. Can be either a string, an
 * array or a stream resource.
 *
 *
 * If data is a stream resource, the
 * remaining buffer of that stream will be copied to the specified file.
 * This is similar with using stream_copy_to_stream.
 *
 *
 * You can also specify the data parameter as a single
 * dimension array. This is equivalent to
 * file_put_contents($filename, implode('', $array)).
 *
 * @param int $flags [optional]
 * The value of flags can be any combination of
 * the following flags (with some restrictions), joined with the binary OR
 * (|) operator.
 *
 *
 * <table>
 * Available flags
 * <tr valign="top">
 * <td>Flag</td>
 * <td>Description</td>
 * </tr>
 * <tr valign="top">
 * <td>
 * FILE_USE_INCLUDE_PATH
 * </td>
 * <td>
 * Search for filename in the include directory.
 * See include_path for more
 * information.
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>
 * FILE_APPEND
 * </td>
 * <td>
 * If file filename already exists, append
 * the data to the file instead of overwriting it. Mutually
 * exclusive with LOCK_EX since appends are atomic and thus there
 * is no reason to lock.
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>
 * LOCK_EX
 * </td>
 * <td>
 * Acquire an exclusive lock on the file while proceeding to the
 * writing. Mutually exclusive with FILE_APPEND.
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>
 * FILE_TEXT
 * </td>
 * <td>
 * data is written in text mode. If unicode
 * semantics are enabled, the default encoding is UTF-8.
 * You can specify a different encoding by creating a custom context
 * or by using the stream_default_encoding to
 * change the default. This flag cannot be used with
 * FILE_BINARY. This flag is only available since
 * PHP 6.
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>
 * FILE_BINARY
 * </td>
 * <td>
 * data will be written in binary mode. This
 * is the default setting and cannot be used with
 * FILE_TEXT. This flag is only available since
 * PHP 6.
 * </td>
 * </tr>
 * </table>
 *
 * @param resource $context [optional]
 * A valid context resource created with
 * stream_context_create.
 *
 * @return int The function returns the number of bytes that were written to the file, or
 * false on failure.
 */
// function file_put_contents ($filename, $data, $flags = null, $context = null) {}
function file_put_contents($filename, $data, $flags, $context) {}


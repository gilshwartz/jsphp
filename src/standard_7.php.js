

/**
 * (PHP 4, PHP 5)<br/>
 * Open Internet or Unix domain socket connection
 * @link http://php.net/manual/en/function.fsockopen.php
 * @param string $hostname <p>
 * If you have compiled in OpenSSL support, you may prefix the
 * hostname with either ssl://
 * or tls:// to use an SSL or TLS client connection
 * over TCP/IP to connect to the remote host.
 * </p>
 * @param int $port [optional] <p>
 * The port number.
 * </p>
 * @param int $errno [optional] <p>
 * If provided, holds the system level error number that occurred in the
 * system-level connect() call.
 * </p>
 * <p>
 * If the value returned in errno is
 * 0 and the function returned false, it is an
 * indication that the error occurred before the 
 * connect() call. This is most likely due to a
 * problem initializing the socket.
 * </p>
 * @param string $errstr [optional] <p>
 * The error message as a string.
 * </p>
 * @param float $timeout [optional] <p>
 * The connection timeout, in seconds.
 * </p>
 * <p>
 * If you need to set a timeout for reading/writing data over the
 * socket, use stream_set_timeout, as the 
 * timeout parameter to
 * fsockopen only applies while connecting the
 * socket.
 * </p>
 * @return resource fsockopen returns a file pointer which may be used
 * together with the other file functions (such as
 * fgets, fgetss,
 * fwrite, fclose, and
 * feof). If the call fails, it will return false
 */
// function fsockopen ($hostname, $port = null, &$errno = null, &$errstr = null, $timeout = null) {}
function fsockopen ($hostname, $port, $errno, $errstr, $timeout) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Open persistent Internet or Unix domain socket connection
 * @link http://php.net/manual/en/function.pfsockopen.php
 * @param string $hostname 
 * @param int $port [optional] 
 * @param int $errno [optional] 
 * @param string $errstr [optional] 
 * @param float $timeout [optional] 
 * @return resource 
 */
// function pfsockopen ($hostname, $port = null, &$errno = null, &$errstr = null, $timeout = null) {}
function pfsockopen ($hostname, $port, $errno, $errstr, $timeout) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Pack data into binary string
 * @link http://php.net/manual/en/function.pack.php
 * @param string $format <p>
 * The format string consists of format codes
 * followed by an optional repeater argument. The repeater argument can
 * be either an integer value or * for repeating to
 * the end of the input data. For a, A, h, H the repeat count specifies
 * how many characters of one data argument are taken, for @ it is the
 * absolute position where to put the next data, for everything else the
 * repeat count specifies how many data arguments are consumed and packed
 * into the resulting binary string.
 * </p>
 * <p>
 * Currently implemented formats are:
 * <table>
 * pack format characters
 * <tr valign="top">
 * <td>Code</td>
 * <td>Description</td>
 * </tr>
 * <tr valign="top">
 * <td>a</td>
 * <td>NUL-padded string</td>
 * </tr>
 * <tr valign="top">
 * <td>A</td>
 * <td>SPACE-padded string</td></tr>
 * <tr valign="top">
 * <td>h</td>
 * <td>Hex string, low nibble first</td></tr>
 * <tr valign="top">
 * <td>H</td>
 * <td>Hex string, high nibble first</td></tr>
 * <tr valign="top"><td>c</td><td>signed char</td></tr>
 * <tr valign="top">
 * <td>C</td>
 * <td>unsigned char</td></tr>
 * <tr valign="top">
 * <td>s</td>
 * <td>signed short (always 16 bit, machine byte order)</td>
 * </tr>
 * <tr valign="top">
 * <td>S</td>
 * <td>unsigned short (always 16 bit, machine byte order)</td>
 * </tr>
 * <tr valign="top">
 * <td>n</td>
 * <td>unsigned short (always 16 bit, big endian byte order)</td>
 * </tr>
 * <tr valign="top">
 * <td>v</td>
 * <td>unsigned short (always 16 bit, little endian byte order)</td>
 * </tr>
 * <tr valign="top">
 * <td>i</td>
 * <td>signed integer (machine dependent size and byte order)</td>
 * </tr>
 * <tr valign="top">
 * <td>I</td>
 * <td>unsigned integer (machine dependent size and byte order)</td>
 * </tr>
 * <tr valign="top">
 * <td>l</td>
 * <td>signed long (always 32 bit, machine byte order)</td>
 * </tr>
 * <tr valign="top">
 * <td>L</td>
 * <td>unsigned long (always 32 bit, machine byte order)</td>
 * </tr>
 * <tr valign="top">
 * <td>N</td>
 * <td>unsigned long (always 32 bit, big endian byte order)</td>
 * </tr>
 * <tr valign="top">
 * <td>V</td>
 * <td>unsigned long (always 32 bit, little endian byte order)</td>
 * </tr>
 * <tr valign="top">
 * <td>f</td>
 * <td>float (machine dependent size and representation)</td>
 * </tr>
 * <tr valign="top">
 * <td>d</td>
 * <td>double (machine dependent size and representation)</td>
 * </tr>
 * <tr valign="top">
 * <td>x</td>
 * <td>NUL byte</td>
 * </tr>
 * <tr valign="top">
 * <td>X</td>
 * <td>Back up one byte</td>
 * </tr>
 * <tr valign="top">
 * <td>@</td>
 * <td>NUL-fill to absolute position</td>
 * </tr>
 * </table>
 * </p>
 * @param mixed $args [optional] <p>
 * </p>
 * @param mixed $_ [optional] 
 * @return string a binary string containing data.
 */
// function pack ($format, $args = null, $_ = null) {}
function pack ($format, $args, $_) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Unpack data from binary string
 * @link http://php.net/manual/en/function.unpack.php
 * @param string $format <p>
 * See pack for an explanation of the format codes.
 * </p>
 * @param string $data <p>
 * The packed data.
 * </p>
 * @return array an associative array containing unpacked elements of binary
 * string.
 */
// function unpack ($format, $data) {}
function unpack ($format, $data) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Tells what the user's browser is capable of
 * @link http://php.net/manual/en/function.get-browser.php
 * @param string $user_agent [optional] <p>
 * The User Agent to be analyzed. By default, the value of HTTP
 * User-Agent header is used; however, you can alter this (i.e., look up
 * another browser's info) by passing this parameter.
 * </p>
 * <p>
 * You can bypass this parameter with a &null; value.
 * </p>
 * @param bool $return_array [optional] <p>
 * If set to true, this function will return an array
 * instead of an object.
 * </p>
 * @return mixed The information is returned in an object or an array which will contain
 * various data elements representing, for instance, the browser's major and
 * minor version numbers and ID string; true/false values for features
 * such as frames, JavaScript, and cookies; and so forth.
 * </p>
 * <p>
 * The cookies value simply means that the browser
 * itself is capable of accepting cookies and does not mean the user has
 * enabled the browser to accept cookies or not. The only way to test if
 * cookies are accepted is to set one with setcookie,
 * reload, and check for the value.
 */
// function get_browser ($user_agent = null, $return_array = null) {}
function get_browser ($user_agent, $return_array) {}

/**
 * (PHP 4, PHP 5)<br/>
 * One-way string encryption (hashing)
 * @link http://php.net/manual/en/function.crypt.php
 * @param string $str <p>
 * The string to be encrypted.
 * </p>
 * @param string $salt [optional] <p>
 * An optional salt string to base the encryption on. If not provided,
 * one will be randomly generated by PHP each time you call this function.
 * </p>
 * <p>
 * If you are using the supplied salt, you should be aware that the salt
 * is generated once. If you are calling this function repeatedly, this
 * may impact both appearance and security.
 * </p>
 * @return string the encrypted string.
 */
// function crypt ($str, $salt = null) {}
function crypt ($str, $salt) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Open directory handle
 * @link http://php.net/manual/en/function.opendir.php
 * @param string $path <p>
 * The directory path that is to be opened
 * </p>
 * @param resource $context [optional] <p>
 * For a description of the context parameter, 
 * refer to the streams section of
 * the manual.
 * </p>
 * @return resource a directory handle resource on success, or
 * false on failure.
 * </p> 
 * <p>
 * If path is not a valid directory or the
 * directory can not be opened due to permission restrictions or
 * filesystem errors, opendir returns false and
 * generates a PHP error of level 
 * E_WARNING. You can suppress the error output of
 * opendir by prepending
 * '@' to the
 * front of the function name.
 */
// function opendir ($path, $context = null) {}
function opendir ($path, $context) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Close directory handle
 * @link http://php.net/manual/en/function.closedir.php
 * @param resource $dir_handle [optional] <p>
 * The directory handle resource previously opened
 * with opendir. If the directory handle is 
 * not specified, the last link opened by opendir 
 * is assumed.
 * </p>
 * @return void 
 */
// function closedir ($dir_handle = null) {}
function closedir ($dir_handle) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Change directory
 * @link http://php.net/manual/en/function.chdir.php
 * @param string $directory <p>
 * The new current directory
 * </p>
 * @return bool true on success or false on failure.
 */
// function chdir ($directory) {}
function chdir ($directory) {}

/**
 * (PHP 4 &gt;= 4.0.5, PHP 5)<br/>
 * Change the root directory
 * @link http://php.net/manual/en/function.chroot.php
 * @param string $directory <p>
 * The new directory
 * </p>
 * @return bool true on success or false on failure.
 */
// function chroot ($directory) {}
function chroot ($directory) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Gets the current working directory
 * @link http://php.net/manual/en/function.getcwd.php
 * @return string the current working directory on success, or false on
 * failure.
 * </p> 
 * <p>
 * On some Unix variants, getcwd will return
 * false if any one of the parent directories does not have the
 * readable or search mode set, even if the current directory
 * does. See chmod for more information on
 * modes and permissions.
 */
// function getcwd () {}
function getcwd () {}

/**
 * (PHP 4, PHP 5)<br/>
 * Rewind directory handle
 * @link http://php.net/manual/en/function.rewinddir.php
 * @param resource $dir_handle [optional] <p>
 * The directory handle resource previously opened
 * with opendir. If the directory handle is 
 * not specified, the last link opened by opendir 
 * is assumed.
 * </p>
 * @return void 
 */
// function rewinddir ($dir_handle = null) {}
function rewinddir ($dir_handle) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Read entry from directory handle
 * @link http://php.net/manual/en/function.readdir.php
 * @param resource $dir_handle [optional] <p>
 * The directory handle resource previously opened
 * with opendir. If the directory handle is 
 * not specified, the last link opened by opendir 
 * is assumed.
 * </p>
 * @return string the filename on success or false on failure.
 */
// function readdir ($dir_handle = null) {}
function readdir ($dir_handle) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Return an instance of the Directory class
 * @link http://php.net/manual/en/class.dir.php
 * @param $directory
 * @param $context [optional]
 * @return Directory 
 */
// function dir ($directory, $context) {}
function dir ($directory, $context) {}

/**
 * (PHP 5)<br/>
 * List files and directories inside the specified path
 * @link http://php.net/manual/en/function.scandir.php
 * @param string $directory <p>
 * The directory that will be scanned.
 * </p>
 * @param int $sorting_order [optional] <p>
 * By default, the sorted order is alphabetical in ascending order. If
 * the optional sorting_order is set to non-zero,
 * then the sort order is alphabetical in descending order.
 * </p>
 * @param resource $context [optional] <p>
 * For a description of the context parameter, 
 * refer to the streams section of
 * the manual.
 * </p>
 * @return array an array of filenames on success, or false on 
 * failure. If directory is not a directory, then 
 * boolean false is returned, and an error of level 
 * E_WARNING is generated.
 */
// function scandir ($directory, $sorting_order = null, $context = null) {}
function scandir ($directory, $sorting_order, $context) {}

/**
 * (PHP 4 &gt;= 4.3.0, PHP 5)<br/>
 * Find pathnames matching a pattern
 * @link http://php.net/manual/en/function.glob.php
 * @param string $pattern <p>
 * The pattern. No tilde expansion or parameter substitution is done.
 * </p>
 * @param int $flags [optional] <p>
 * Valid flags:
 * GLOB_MARK - Adds a slash to each directory returned
 * @return array an array containing the matched files/directories, an empty array
 * if no file matched or false on error.
 * </p>
 * <p>
 * On some systems it is impossible to distinguish between empty match and an
 * error.
 */
// function glob ($pattern, $flags = null) {}
function glob ($pattern, $flags) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Gets last access time of file
 * @link http://php.net/manual/en/function.fileatime.php
 * @param string $filename <p>
 * Path to the file.
 * </p>
 * @return int the time the file was last accessed, or false on failure.
 * The time is returned as a Unix timestamp.
 */
// function fileatime ($filename) {}
function fileatime ($filename) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Gets inode change time of file
 * @link http://php.net/manual/en/function.filectime.php
 * @param string $filename <p>
 * Path to the file.
 * </p>
 * @return int the time the file was last changed, or false on failure.
 * The time is returned as a Unix timestamp.
 */
// function filectime ($filename) {}
function filectime ($filename) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Gets file group
 * @link http://php.net/manual/en/function.filegroup.php
 * @param string $filename <p>
 * Path to the file.
 * </p>
 * @return int the group ID of the file, or false in case
 * of an error. The group ID is returned in numerical format, use
 * posix_getgrgid to resolve it to a group name.
 * Upon failure, false is returned.
 */
// function filegroup ($filename) {}
function filegroup ($filename) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Gets file inode
 * @link http://php.net/manual/en/function.fileinode.php
 * @param string $filename <p>
 * Path to the file.
 * </p>
 * @return int the inode number of the file, or false on failure.
 */
// function fileinode ($filename) {}
function fileinode ($filename) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Gets file modification time
 * @link http://php.net/manual/en/function.filemtime.php
 * @param string $filename <p>
 * Path to the file.
 * </p>
 * @return int the time the file was last modified, or false on failure.
 * The time is returned as a Unix timestamp, which is
 * suitable for the date function.
 */
// function filemtime ($filename) {}
function filemtime ($filename) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Gets file owner
 * @link http://php.net/manual/en/function.fileowner.php
 * @param string $filename <p>
 * Path to the file.
 * </p>
 * @return int the user ID of the owner of the file, or false on failure.
 * The user ID is returned in numerical format, use
 * posix_getpwuid to resolve it to a username.
 */
// function fileowner ($filename) {}
function fileowner ($filename) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Gets file permissions
 * @link http://php.net/manual/en/function.fileperms.php
 * @param string $filename <p>
 * Path to the file.
 * </p>
 * @return int the permissions on the file, or false on failure.
 */
// function fileperms ($filename) {}
function fileperms ($filename) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Gets file size
 * @link http://php.net/manual/en/function.filesize.php
 * @param string $filename <p>
 * Path to the file.
 * </p>
 * @return int the size of the file in bytes, or false (and generates an error
 * of level E_WARNING) in case of an error.
 */
// function filesize ($filename) {}
function filesize ($filename) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Gets file type
 * @link http://php.net/manual/en/function.filetype.php
 * @param string $filename <p>
 * Path to the file.
 * </p>
 * @return string the type of the file. Possible values are fifo, char,
 * dir, block, link, file, socket and unknown.
 * </p>
 * <p>
 * Returns false if an error occurs. filetype will also
 * produce an E_NOTICE message if the stat call fails
 * or if the file type is unknown.
 */
// function filetype ($filename) {}
function filetype ($filename) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Checks whether a file or directory exists
 * @link http://php.net/manual/en/function.file-exists.php
 * @param string $filename <p>
 * Path to the file or directory.
 * </p>
 * <p>
 * On windows, use //computername/share/filename or
 * \\computername\share\filename to check files on
 * network shares.
 * </p>
 * @return bool true if the file or directory specified by
 * filename exists; false otherwise.
 * </p>
 * <p>
 * This function will return false for symlinks pointing to non-existing
 * files.
 * </p>
 * <p>
 * This function returns false for files inaccessible due to safe mode restrictions. However these
 * files still can be included if
 * they are located in safe_mode_include_dir.
 * </p>
 * <p>
 * The check is done using the real UID/GID instead of the effective one.
 */
// function file_exists ($filename) {}
function file_exists ($filename) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Tells whether the filename is writable
 * @link http://php.net/manual/en/function.is-writable.php
 * @param string $filename <p>
 * The filename being checked.
 * </p>
 * @return bool true if the filename exists and is
 * writable.
 */
// function is_writable ($filename) {}
function is_writable ($filename) {}

/**
 * (PHP 4, PHP 5)<br/>
 * &Alias; <function>is_writable</function>
 * @link http://php.net/manual/en/function.is-writeable.php
 * @param string $filename <p>
 * The filename being checked.
 * </p>
 * @return bool true if the filename exists and is
 * writable.
 */
// function is_writeable ($filename) {}
function is_writeable ($filename) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Tells whether a file exists and is readable
 * @link http://php.net/manual/en/function.is-readable.php
 * @param string $filename <p>
 * Path to the file.
 * </p>
 * @return bool true if the file or directory specified by
 * filename exists and is readable, false otherwise.
 */
// function is_readable ($filename) {}
function is_readable ($filename) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Tells whether the filename is executable
 * @link http://php.net/manual/en/function.is-executable.php
 * @param string $filename <p>
 * Path to the file.
 * </p>
 * @return bool true if the filename exists and is executable, or false on
 * error.
 */
// function is_executable ($filename) {}
function is_executable ($filename) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Tells whether the filename is a regular file
 * @link http://php.net/manual/en/function.is-file.php
 * @param string $filename <p>
 * Path to the file.
 * </p>
 * @return bool true if the filename exists and is a regular file, false
 * otherwise.
 */
// function is_file ($filename) {}
function is_file ($filename) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Tells whether the filename is a directory
 * @link http://php.net/manual/en/function.is-dir.php
 * @param string $filename <p>
 * Path to the file. If filename is a relative
 * filename, it will be checked relative to the current working
 * directory. If filename is a symbolic or hard link 
 * then the link will be resolved and checked.
 * </p>
 * @return bool true if the filename exists and is a directory, false
 * otherwise.
 */
// function is_dir ($filename) {}
function is_dir ($filename) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Tells whether the filename is a symbolic link
 * @link http://php.net/manual/en/function.is-link.php
 * @param string $filename <p>
 * Path to the file.
 * </p>
 * @return bool true if the filename exists and is a symbolic link, false
 * otherwise.
 */
// function is_link ($filename) {}
function is_link ($filename) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Gives information about a file
 * @link http://php.net/manual/en/function.stat.php
 * @param string $filename <p>
 * Path to the file.
 * </p>
 * @return array <table>
 * stat and fstat result
 * format
 * <tr valign="top">
 * <td>Numeric</td>
 * <td>Associative (since PHP 4.0.6)</td>
 * <td>Description</td>
 * </tr>
 * <tr valign="top">
 * <td>0</td>
 * <td>dev</td>
 * <td>device number</td>
 * </tr>
 * <tr valign="top">
 * <td>1</td>
 * <td>ino</td>
 * <td>inode number *</td>
 * </tr>
 * <tr valign="top">
 * <td>2</td>
 * <td>mode</td>
 * <td>inode protection mode</td>
 * </tr>
 * <tr valign="top">
 * <td>3</td>
 * <td>nlink</td>
 * <td>number of links</td>
 * </tr>
 * <tr valign="top">
 * <td>4</td>
 * <td>uid</td>
 * <td>userid of owner *</td>
 * </tr>
 * <tr valign="top">
 * <td>5</td>
 * <td>gid</td>
 * <td>groupid of owner *</td>
 * </tr>
 * <tr valign="top">
 * <td>6</td>
 * <td>rdev</td>
 * <td>device type, if inode device</td>
 * </tr>
 * <tr valign="top">
 * <td>7</td>
 * <td>size</td>
 * <td>size in bytes</td>
 * </tr>
 * <tr valign="top">
 * <td>8</td>
 * <td>atime</td>
 * <td>time of last access (Unix timestamp)</td>
 * </tr>
 * <tr valign="top">
 * <td>9</td>
 * <td>mtime</td>
 * <td>time of last modification (Unix timestamp)</td>
 * </tr>
 * <tr valign="top">
 * <td>10</td>
 * <td>ctime</td>
 * <td>time of last inode change (Unix timestamp)</td>
 * </tr>
 * <tr valign="top">
 * <td>11</td>
 * <td>blksize</td>
 * <td>blocksize of filesystem IO **</td>
 * </tr>
 * <tr valign="top">
 * <td>12</td>
 * <td>blocks</td>
 * <td>number of 512-byte blocks allocated **</td>
 * </tr>
 * </table>
 * * On Windows this will always be 0.
 * </p>
 * <p>
 * ** Only valid on systems supporting the st_blksize type - other
 * systems (e.g. Windows) return -1.
 * </p>
 * <p>
 * In case of error, stat returns false.
 */
// function stat ($filename) {}
function stat ($filename) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Gives information about a file or symbolic link
 * @link http://php.net/manual/en/function.lstat.php
 * @param string $filename <p>
 * Path to a file or a symbolic link.
 * </p>
 * @return array See the manual page for stat for information on
 * the structure of the array that lstat returns.
 * This function is identical to the stat function
 * except that if the filename parameter is a symbolic
 * link, the status of the symbolic link is returned, not the status of the
 * file pointed to by the symbolic link.
 */
// function lstat ($filename) {}
function lstat ($filename) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Changes file owner
 * @link http://php.net/manual/en/function.chown.php
 * @param string $filename <p>
 * Path to the file.
 * </p>
 * @param mixed $user <p>
 * A user name or number.
 * </p>
 * @return bool true on success or false on failure.
 */
// function chown ($filename, $user) {}
function chown ($filename, $user) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Changes file group
 * @link http://php.net/manual/en/function.chgrp.php
 * @param string $filename <p>
 * Path to the file.
 * </p>
 * @param mixed $group <p>
 * A group name or number.
 * </p>
 * @return bool true on success or false on failure.
 */
// function chgrp ($filename, $group) {}
function chgrp ($filename, $group) {}

/**
 * (PHP 5 &gt;= 5.1.2)<br/>
 * Changes user ownership of symlink
 * @link http://php.net/manual/en/function.lchown.php
 * @param string $filename <p>
 * Path to the file.
 * </p>
 * @param mixed $user <p>
 * User name or number.
 * </p>
 * @return bool true on success or false on failure.
 */
// function lchown ($filename, $user) {}
function lchown ($filename, $user) {}

/**
 * (PHP 5 &gt;= 5.1.2)<br/>
 * Changes group ownership of symlink
 * @link http://php.net/manual/en/function.lchgrp.php
 * @param string $filename <p>
 * Path to the symlink.
 * </p>
 * @param mixed $group <p>
 * The group specified by name or number.
 * </p>
 * @return bool true on success or false on failure.
 */
// function lchgrp ($filename, $group) {}
function lchgrp ($filename, $group) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Changes file mode
 * @link http://php.net/manual/en/function.chmod.php
 * @param string $filename <p>
 * Path to the file.
 * </p>
 * @param int $mode <p>
 * Note that mode is not automatically
 * assumed to be an octal value, so strings (such as "g+w") will
 * not work properly. To ensure the expected operation,
 * you need to prefix mode with a zero (0):
 * </p>
 * <p>
 * ]]>
 * </p>
 * <p>
 * The mode parameter consists of three octal
 * number components specifying access restrictions for the owner,
 * the user group in which the owner is in, and to everybody else in
 * this order. One component can be computed by adding up the needed
 * permissions for that target user base. Number 1 means that you
 * grant execute rights, number 2 means that you make the file
 * writeable, number 4 means that you make the file readable. Add
 * up these numbers to specify needed rights. You can also read more
 * about modes on Unix systems with 'man 1 chmod'
 * and 'man 2 chmod'.
 * </p>
 * <p>
 * @return bool true on success or false on failure.
 */
// function chmod ($filename, $mode) {}
function chmod ($filename, $mode) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Sets access and modification time of file
 * @link http://php.net/manual/en/function.touch.php
 * @param string $filename <p>
 * The name of the file being touched.
 * </p>
 * @param int $time [optional] <p>
 * The touch time. If time is not supplied, 
 * the current system time is used.
 * </p>
 * @param int $atime [optional] <p>
 * If present, the access time of the given filename is set to 
 * the value of atime. Otherwise, it is set to
 * time.
 * </p>
 * @return bool true on success or false on failure.
 */
// function touch ($filename, $time = null, $atime = null) {}
function touch ($filename, $time, $atime) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Clears file status cache
 * @link http://php.net/manual/en/function.clearstatcache.php
 * @param bool $clear_realpath_cache [optional] <p>
 * Whenever to clear realpath cache or not.
 * </p>
 * @param string $filename [optional] <p>
 * Clear realpath cache on a specific filename, only used if 
 * clear_realpath_cache is true.
 * </p>
 * @return void 
 */
// function clearstatcache ($clear_realpath_cache = null, $filename = null) {}
function clearstatcache ($clear_realpath_cache, $filename) {}

/**
 * (PHP 4 &gt;= 4.1.0, PHP 5)<br/>
 * Returns the total size of a directory
 * @link http://php.net/manual/en/function.disk-total-space.php
 * @param string $directory <p>
 * A directory of the filesystem or disk partition.
 * </p>
 * @return float the total number of bytes as a float
 * or false on failure.
 */
// function disk_total_space ($directory) {}
function disk_total_space ($directory) {}

/**
 * (PHP 4 &gt;= 4.1.0, PHP 5)<br/>
 * Returns available space in directory
 * @link http://php.net/manual/en/function.disk-free-space.php
 * @param string $directory <p>
 * A directory of the filesystem or disk partition.
 * </p>
 * <p>
 * Given a file name instead of a directory, the behaviour of the
 * function is unspecified and may differ between operating systems and
 * PHP versions.
 * </p>
 * @return float the number of available bytes as a float
 * or false on failure.
 */
// function disk_free_space ($directory) {}
function disk_free_space ($directory) {}

/**
 * (PHP 4, PHP 5)<br/>
 * &Alias; <function>disk_free_space</function>
 * @link http://php.net/manual/en/function.diskfreespace.php
 * @param $path
 */
// function diskfreespace ($path) {}
function diskfreespace ($path) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Send mail
 * @link http://php.net/manual/en/function.mail.php
 * @param string $to <p>
 * Receiver, or receivers of the mail.
 * </p>
 * <p>
 * The formatting of this string must comply with
 * RFC 2822. Some examples are:
 * user@example.com
 * user@example.com, anotheruser@example.com
 * User &lt;user@example.com&gt;
 * User &lt;user@example.com&gt;, Another User &lt;anotheruser@example.com&gt;
 * </p>
 * @param string $subject <p>
 * Subject of the email to be sent.
 * </p>
 * <p>
 * Subject must satisfy RFC 2047.
 * </p>
 * @param string $message <p>
 * Message to be sent.
 * </p>
 * <p>
 * Each line should be separated with a LF (\n). Lines should not be larger
 * than 70 characters.
 * </p>
 * <p>
 * (Windows only) When PHP is talking to a SMTP server directly, if a full
 * stop is found on the start of a line, it is removed. To counter-act this,
 * replace these occurrences with a double dot.
 * ]]>
 * </p>
 * @param string $additional_headers [optional] <p>
 * String to be inserted at the end of the email header.
 * </p>
 * <p>
 * This is typically used to add extra headers (From, Cc, and Bcc).
 * Multiple extra headers should be separated with a CRLF (\r\n).
 * </p>
 * <p>
 * When sending mail, the mail must contain
 * a From header. This can be set with the 
 * additional_headers parameter, or a default
 * can be set in &php.ini;.
 * </p>
 * <p>
 * Failing to do this will result in an error
 * message similar to Warning: mail(): "sendmail_from" not
 * set in php.ini or custom "From:" header missing.
 * The From header sets also
 * Return-Path under Windows.
 * </p>
 * <p>
 * If messages are not received, try using a LF (\n) only.
 * Some poor quality Unix mail transfer agents replace LF by CRLF
 * automatically (which leads to doubling CR if CRLF is used).
 * This should be a last resort, as it does not comply with
 * RFC 2822.
 * </p>
 * @param string $additional_parameters [optional] <p>
 * The additional_parameters parameter
 * can be used to pass additional flags as command line options to the
 * program configured to be used when sending mail, as defined by the
 * sendmail_path configuration setting. For example,
 * this can be used to set the envelope sender address when using
 * sendmail with the -f sendmail option.
 * </p>
 * <p>
 * The user that the webserver runs as should be added as a trusted user to the
 * sendmail configuration to prevent a 'X-Warning' header from being added
 * to the message when the envelope sender (-f) is set using this method.
 * For sendmail users, this file is /etc/mail/trusted-users.
 * </p>
 * @return bool true if the mail was successfully accepted for delivery, false otherwise.
 * </p>
 * <p>
 * It is important to note that just because the mail was accepted for delivery,
 * it does NOT mean the mail will actually reach the intended destination.
 */
// function mail ($to, $subject, $message, $additional_headers = null, $additional_parameters = null) {}
function mail ($to, $subject, $message, $additional_headers, $additional_parameters) {}

/**
 * (PHP 4 &gt;= 4.0.2, PHP 5)<br/>
 * Calculate the hash value needed by EZMLM
 * @link http://php.net/manual/en/function.ezmlm-hash.php
 * @param string $addr <p>
 * The email address that's being hashed.
 * </p>
 * @return int The hash value of addr.
 */
// function ezmlm_hash ($addr) {}
function ezmlm_hash ($addr) {}

/**
 * (PHP 4, PHP 5)<br/>
 * Open connection to system logger
 * @link http://php.net/manual/en/function.openlog.php
 * @param string $ident <p>
 * The string ident is added to each message. 
 * </p>
 * @param int $option <p>
 * The option argument is used to indicate
 * what logging options will be used when generating a log message.
 * <table>
 * openlog Options
 * <tr valign="top">
 * <td>Constant</td>
 * <td>Description</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_CONS</td>
 * <td>
 * if there is an error while sending data to the system logger,
 * write directly to the system console
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_NDELAY</td>
 * <td>
 * open the connection to the logger immediately
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_ODELAY</td>
 * <td>
 * (default) delay opening the connection until the first
 * message is logged
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_PERROR</td>
 * <td>print log message also to standard error</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_PID</td>
 * <td>include PID with each message</td>
 * </tr>
 * </table>
 * You can use one or more of this options. When using multiple options
 * you need to OR them, i.e. to open the connection
 * immediately, write to the console and include the PID in each message,
 * you will use: LOG_CONS | LOG_NDELAY | LOG_PID
 * </p>
 * @param int $facility <p>
 * The facility argument is used to specify what
 * type of program is logging the message. This allows you to specify
 * (in your machine's syslog configuration) how messages coming from
 * different facilities will be handled.
 * <table>
 * openlog Facilities
 * <tr valign="top">
 * <td>Constant</td>
 * <td>Description</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_AUTH</td>
 * <td>
 * security/authorization messages (use 
 * LOG_AUTHPRIV instead
 * in systems where that constant is defined)
 * </td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_AUTHPRIV</td>
 * <td>security/authorization messages (private)</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_CRON</td>
 * <td>clock daemon (cron and at)</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_DAEMON</td>
 * <td>other system daemons</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_KERN</td>
 * <td>kernel messages</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_LOCAL0 ... LOG_LOCAL7</td>
 * <td>reserved for local use, these are not available in Windows</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_LPR</td>
 * <td>line printer subsystem</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_MAIL</td>
 * <td>mail subsystem</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_NEWS</td>
 * <td>USENET news subsystem</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_SYSLOG</td>
 * <td>messages generated internally by syslogd</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_USER</td>
 * <td>generic user-level messages</td>
 * </tr>
 * <tr valign="top">
 * <td>LOG_UUCP</td>
 * <td>UUCP subsystem</td>
 * </tr>
 * </table>
 * </p>
 * <p>
 * LOG_USER is the only valid log type under Windows
 * operating systems
 * </p>
 * @return bool true on success or false on failure.
 */
// function openlog ($ident, $option, $facility) {}
function openlog ($ident, $option, $facility) {}



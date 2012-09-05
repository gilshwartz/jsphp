

// Start of standard v.5.3.1-0.dotdeb.1

var CONNECTION_ABORTED = 1;
var CONNECTION_NORMAL = 0;
var CONNECTION_TIMEOUT = 2;
var INI_USER = 1;
var INI_PERDIR = 2;
var INI_SYSTEM = 4;
var INI_ALL = 7;

/**
 * Normal INI scanner mode (since PHP 5.3).
 * @link http://php.net/manual/en/filesystem.constants.php
 */
var INI_SCANNER_NORMAL = 0;

/**
 * Raw INI scanner mode (since PHP 5.3).
 * @link http://php.net/manual/en/filesystem.constants.php
 */
var INI_SCANNER_RAW = 1;
var PHP_URL_SCHEME = 0;
var PHP_URL_HOST = 1;
var PHP_URL_PORT = 2;
var PHP_URL_USER = 3;
var PHP_URL_PASS = 4;
var PHP_URL_PATH = 5;
var PHP_URL_QUERY = 6;
var PHP_URL_FRAGMENT = 7;

/**
 * <i>e</i> constant
 */
var M_E = 2.718281828459;

/**
 * {@link log}<sub>2</sub><i>e</i> constant
 */
var M_LOG2E = 1.442695040889;

/**
 * {@link log}<sub>10</sub><i>e</i> constant
 */
var M_LOG10E = 0.43429448190325;

/**
 * {@link log}<sub><i>e</i></sub>2 constant
 */
var M_LN2 = 0.69314718055995;

/**
 * {@link log}<sub><i>e</i></sub>10 constant
 */
var M_LN10 = 2.302585092994;

/**
 * &pi; constant
 */
var M_PI = 3.1415926535898;

/**
 * &pi;/2 constant
 */
var M_PI_2 = 1.5707963267949;

/**
 * &pi;/4 constant
 */
var M_PI_4 = 0.78539816339745;

/**
 * 1/&pi; constant
 */
var M_1_PI = 0.31830988618379;

/**
 * 2/&pi; constant
 */
var M_2_PI = 0.63661977236758;

/**
 * {@link sqrt}(&pi;) constant
 */
var M_SQRTPI = 1.7724538509055;

/**
 * 2/{@link sqrt}(&pi;) constant
 */
var M_2_SQRTPI = 1.1283791670955;

/**
 * {@link log}<sub><i>e</i></sub>&pi; constant
 */
var M_LNPI = 1.1447298858494;

/**
 * Euler constant
 */
var M_EULER = 0.57721566490153;

/**
 * {@link sqrt}(2) constant
 */
var M_SQRT2 = 1.4142135623731;

/**
 * 1/{@link sqrt}(2) constant
 */
var M_SQRT1_2 = 0.70710678118655;

/**
 * {@link sqrt}(3) constant
 */
var M_SQRT3 = 1.7320508075689;

/**
 * The infinite
 */
var INF = INF;

/**
 * Not A Number
 */
var NAN = NAN;

/**
 * Round halves up [5.3.0]
 * @link http://php.net/manual/en/math.constants.php
 */
var PHP_ROUND_HALF_UP = 1;

/**
 * Round halves down [5.3.0]
 * @link http://php.net/manual/en/math.constants.php
 */
var PHP_ROUND_HALF_DOWN = 2;

/**
 * Round halves to even numbers [5.3.0]
 * @link http://php.net/manual/en/math.constants.php
 */
var PHP_ROUND_HALF_EVEN = 3;

/**
 * Round halves to odd numbers [5.3.0]
 * @link http://php.net/manual/en/math.constants.php
 */
var PHP_ROUND_HALF_ODD = 4;
var INFO_GENERAL = 1;

/**
 * PHP Credits. See also phpcredits.
 * @link http://php.net/manual/en/info.constants.php
 */
var INFO_CREDITS = 2;

/**
 * Current Local and Master values for PHP directives. See
 * also ini_get.
 * @link http://php.net/manual/en/info.constants.php
 */
var INFO_CONFIGURATION = 4;

/**
 * Loaded modules and their respective settings.
 * @link http://php.net/manual/en/info.constants.php
 */
var INFO_MODULES = 8;

/**
 * Environment Variable information that's also available in
 * $_ENV.
 * @link http://php.net/manual/en/info.constants.php
 */
var INFO_ENVIRONMENT = 16;

/**
 * Shows all 
 * predefined variables from EGPCS (Environment, GET,
 * POST, Cookie, Server).
 * @link http://php.net/manual/en/info.constants.php
 */
var INFO_VARIABLES = 32;

/**
 * PHP License information. See also the license faq.
 * @link http://php.net/manual/en/info.constants.php
 */
var INFO_LICENSE = 64;
var INFO_ALL = 4294967295;

/**
 * A list of the core developers
 * @link http://php.net/manual/en/info.constants.php
 */
var CREDITS_GROUP = 1;

/**
 * General credits: Language design and concept, PHP
 * authors and SAPI module.
 * @link http://php.net/manual/en/info.constants.php
 */
var CREDITS_GENERAL = 2;

/**
 * A list of the server API modules for PHP, and their authors.
 * @link http://php.net/manual/en/info.constants.php
 */
var CREDITS_SAPI = 4;

/**
 * A list of the extension modules for PHP, and their authors.
 * @link http://php.net/manual/en/info.constants.php
 */
var CREDITS_MODULES = 8;

/**
 * The credits for the documentation team.
 * @link http://php.net/manual/en/info.constants.php
 */
var CREDITS_DOCS = 16;

/**
 * Usually used in combination with the other flags. Indicates
 * that a complete stand-alone HTML page needs to be
 * printed including the information indicated by the other
 * flags.
 * @link http://php.net/manual/en/info.constants.php
 */
var CREDITS_FULLPAGE = 32;

/**
 * The credits for the quality assurance team.
 * @link http://php.net/manual/en/info.constants.php
 */
var CREDITS_QA = 64;

/**
 * The configuration line, &php.ini; location, build date, Web
 * Server, System and more.
 * @link http://php.net/manual/en/info.constants.php
 */
var CREDITS_ALL = 4294967295;
var HTML_SPECIALCHARS = 0;
var HTML_ENTITIES = 1;
var ENT_COMPAT = 2;
var ENT_QUOTES = 3;
var ENT_NOQUOTES = 0;
var ENT_IGNORE = 4;
var STR_PAD_LEFT = 0;
var STR_PAD_RIGHT = 1;
var STR_PAD_BOTH = 2;
var PATHINFO_DIRNAME = 1;
var PATHINFO_BASENAME = 2;
var PATHINFO_EXTENSION = 4;

/**
 * Since PHP 5.2.0.
 * @link http://php.net/manual/en/filesystem.constants.php
 */
var PATHINFO_FILENAME = 8;
var CHAR_MAX = 127;
var LC_CTYPE = 0;
var LC_NUMERIC = 1;
var LC_TIME = 2;
var LC_COLLATE = 3;
var LC_MONETARY = 4;
var LC_ALL = 6;
var LC_MESSAGES = 5;
var SEEK_SET = 0;
var SEEK_CUR = 1;
var SEEK_END = 2;
var LOCK_SH = 1;
var LOCK_EX = 2;
var LOCK_UN = 3;
var LOCK_NB = 4;

/**
 * A connection with an external resource has been established.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_NOTIFY_CONNECT = 2;

/**
 * Additional authorization is required to access the specified resource.
 * Typical issued with severity level of
 * STREAM_NOTIFY_SEVERITY_ERR.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_NOTIFY_AUTH_REQUIRED = 3;

/**
 * Authorization has been completed (with or without success).
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_NOTIFY_AUTH_RESULT = 10;

/**
 * The mime-type of resource has been identified,
 * refer to message for a description of the
 * discovered type.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_NOTIFY_MIME_TYPE_IS = 4;

/**
 * The size of the resource has been discovered.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_NOTIFY_FILE_SIZE_IS = 5;

/**
 * The external resource has redirected the stream to an alternate
 * location. Refer to message.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_NOTIFY_REDIRECTED = 6;

/**
 * Indicates current progress of the stream transfer in
 * bytes_transferred and possibly
 * bytes_max as well.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_NOTIFY_PROGRESS = 7;

/**
 * A generic error occurred on the stream, consult
 * message and message_code
 * for details.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_NOTIFY_FAILURE = 9;

/**
 * There is no more data available on the stream.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_NOTIFY_COMPLETED = 8;

/**
 * A remote address required for this stream has been resolved, or the resolution
 * failed. See severity for an indication of which happened.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_NOTIFY_RESOLVE = 1;

/**
 * Normal, non-error related, notification.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_NOTIFY_SEVERITY_INFO = 0;

/**
 * Non critical error condition. Processing may continue.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_NOTIFY_SEVERITY_WARN = 1;

/**
 * A critical error occurred. Processing cannot continue.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_NOTIFY_SEVERITY_ERR = 2;

/**
 * Used with stream_filter_append and
 * stream_filter_prepend to indicate
 * that the specified filter should only be applied when
 * reading
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_FILTER_READ = 1;

/**
 * Used with stream_filter_append and
 * stream_filter_prepend to indicate
 * that the specified filter should only be applied when
 * writing
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_FILTER_WRITE = 2;

/**
 * This constant is equivalent to 
 * STREAM_FILTER_READ | STREAM_FILTER_WRITE
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_FILTER_ALL = 3;

/**
 * Client socket opened with stream_socket_client
 * should remain persistent between page loads.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_CLIENT_PERSISTENT = 1;

/**
 * Open client socket asynchronously. This option must be used
 * together with the STREAM_CLIENT_CONNECT flag.
 * Used with stream_socket_client.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_CLIENT_ASYNC_CONNECT = 2;

/**
 * Open client socket connection. Client sockets should always
 * include this flag. Used with stream_socket_client.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_CLIENT_CONNECT = 4;
var STREAM_CRYPTO_METHOD_SSLv2_CLIENT = 0;
var STREAM_CRYPTO_METHOD_SSLv3_CLIENT = 1;
var STREAM_CRYPTO_METHOD_SSLv23_CLIENT = 2;
var STREAM_CRYPTO_METHOD_TLS_CLIENT = 3;
var STREAM_CRYPTO_METHOD_SSLv2_SERVER = 4;
var STREAM_CRYPTO_METHOD_SSLv3_SERVER = 5;
var STREAM_CRYPTO_METHOD_SSLv23_SERVER = 6;
var STREAM_CRYPTO_METHOD_TLS_SERVER = 7;

/**
 * Used with stream_socket_shutdown to disable
 * further receptions. Added in PHP 5.2.1.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_SHUT_RD = 0;

/**
 * Used with stream_socket_shutdown to disable
 * further transmissions. Added in PHP 5.2.1.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_SHUT_WR = 1;

/**
 * Used with stream_socket_shutdown to disable
 * further receptions and transmissions. Added in PHP 5.2.1.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_SHUT_RDWR = 2;

/**
 * Internet Protocol Version 4 (IPv4).
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_PF_INET = 2;

/**
 * Internet Protocol Version 6 (IPv6).
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_PF_INET6 = 10;

/**
 * Unix system internal protocols.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_PF_UNIX = 1;

/**
 * Provides a IP socket.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_IPPROTO_IP = 0;

/**
 * Provides a TCP socket.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_IPPROTO_TCP = 6;

/**
 * Provides a UDP socket.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_IPPROTO_UDP = 17;

/**
 * Provides a ICMP socket.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_IPPROTO_ICMP = 1;

/**
 * Provides a RAW socket.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_IPPROTO_RAW = 255;

/**
 * Provides sequenced, two-way byte streams with a transmission mechanism
 * for out-of-band data (TCP, for example).
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_SOCK_STREAM = 1;

/**
 * Provides datagrams, which are connectionless messages (UDP, for
 * example).
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_SOCK_DGRAM = 2;

/**
 * Provides a raw socket, which provides access to internal network
 * protocols and interfaces. Usually this type of socket is just available
 * to the root user.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_SOCK_RAW = 3;

/**
 * Provides a sequenced packet stream socket.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_SOCK_SEQPACKET = 5;

/**
 * Provides a RDM (Reliably-delivered messages) socket.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_SOCK_RDM = 4;
var STREAM_PEEK = 2;
var STREAM_OOB = 1;

/**
 * Tells a stream created with stream_socket_server
 * to bind to the specified target. Server sockets should always include this flag.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_SERVER_BIND = 4;

/**
 * Tells a stream created with stream_socket_server
 * and bound using the STREAM_SERVER_BIND flag to start
 * listening on the socket. Connection-orientated transports (such as TCP)
 * must use this flag, otherwise the server socket will not be enabled.
 * Using this flag for connect-less transports (such as UDP) is an error.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_SERVER_LISTEN = 8;

/**
 * Search for filename in
 * include_path (since PHP 5).
 * @link http://php.net/manual/en/filesystem.constants.php
 */
var FILE_USE_INCLUDE_PATH = 1;

/**
 * Strip EOL characters (since PHP 5).
 * @link http://php.net/manual/en/filesystem.constants.php
 */
var FILE_IGNORE_NEW_LINES = 2;

/**
 * Skip empty lines (since PHP 5).
 * @link http://php.net/manual/en/filesystem.constants.php
 */
var FILE_SKIP_EMPTY_LINES = 4;

/**
 * Append content to existing file.
 * @link http://php.net/manual/en/filesystem.constants.php
 */
var FILE_APPEND = 8;
var FILE_NO_DEFAULT_CONTEXT = 16;

/**
 * <p>
 * Text mode (since PHP 5.2.7).
 * <p>
 * This constant has no effect prior to PHP 6. It is only available for 
 * forward compatibility.
 * </p>
 * </p>
 * @link http://php.net/manual/en/filesystem.constants.php
 */
var FILE_TEXT = 0;

/**
 * <p>
 * Binary mode (since PHP 5.2.7).
 * <p>
 * This constant has no effect prior to PHP 6. It is only available for 
 * forward compatibility.
 * </p>
 * </p>
 * @link http://php.net/manual/en/filesystem.constants.php
 */
var FILE_BINARY = 0;

/**
 * Disable backslash escaping.
 * @link http://php.net/manual/en/filesystem.constants.php
 */
var FNM_NOESCAPE = 2;

/**
 * Slash in string only matches slash in the given pattern.
 * @link http://php.net/manual/en/filesystem.constants.php
 */
var FNM_PATHNAME = 1;

/**
 * Leading period in string must be exactly matched by period in the given pattern.
 * @link http://php.net/manual/en/filesystem.constants.php
 */
var FNM_PERIOD = 4;

/**
 * Caseless match. Part of the GNU extension.
 * @link http://php.net/manual/en/filesystem.constants.php
 */
var FNM_CASEFOLD = 16;

/**
 * Return Code indicating that the
 * userspace filter returned buckets in $out.
 * @link http://php.net/manual/en/stream.constants.php
 */
var PSFS_PASS_ON = 2;

/**
 * Return Code indicating that the
 * userspace filter did not return buckets in $out
 * (i.e. No data available).
 * @link http://php.net/manual/en/stream.constants.php
 */
var PSFS_FEED_ME = 1;

/**
 * Return Code indicating that the
 * userspace filter encountered an unrecoverable error
 * (i.e. Invalid data received).
 * @link http://php.net/manual/en/stream.constants.php
 */
var PSFS_ERR_FATAL = 0;

/**
 * Regular read/write.
 * @link http://php.net/manual/en/stream.constants.php
 */
var PSFS_FLAG_NORMAL = 0;

/**
 * An incremental flush.
 * @link http://php.net/manual/en/stream.constants.php
 */
var PSFS_FLAG_FLUSH_INC = 1;

/**
 * Final flush prior to closing.
 * @link http://php.net/manual/en/stream.constants.php
 */
var PSFS_FLAG_FLUSH_CLOSE = 2;
var ABDAY_1 = 131072;
var ABDAY_2 = 131073;
var ABDAY_3 = 131074;
var ABDAY_4 = 131075;
var ABDAY_5 = 131076;
var ABDAY_6 = 131077;
var ABDAY_7 = 131078;
var DAY_1 = 131079;
var DAY_2 = 131080;
var DAY_3 = 131081;
var DAY_4 = 131082;
var DAY_5 = 131083;
var DAY_6 = 131084;
var DAY_7 = 131085;
var ABMON_1 = 131086;
var ABMON_2 = 131087;
var ABMON_3 = 131088;
var ABMON_4 = 131089;
var ABMON_5 = 131090;
var ABMON_6 = 131091;
var ABMON_7 = 131092;
var ABMON_8 = 131093;
var ABMON_9 = 131094;
var ABMON_10 = 131095;
var ABMON_11 = 131096;
var ABMON_12 = 131097;
var MON_1 = 131098;
var MON_2 = 131099;
var MON_3 = 131100;
var MON_4 = 131101;
var MON_5 = 131102;
var MON_6 = 131103;
var MON_7 = 131104;
var MON_8 = 131105;
var MON_9 = 131106;
var MON_10 = 131107;
var MON_11 = 131108;
var MON_12 = 131109;
var AM_STR = 131110;
var PM_STR = 131111;
var D_T_FMT = 131112;
var D_FMT = 131113;
var T_FMT = 131114;
var T_FMT_AMPM = 131115;
var ERA = 131116;
var ERA_D_T_FMT = 131120;
var ERA_D_FMT = 131118;
var ERA_T_FMT = 131121;
var ALT_DIGITS = 131119;
var CRNCYSTR = 262159;
var RADIXCHAR = 65536;
var THOUSEP = 65537;
var YESEXPR = 327680;
var NOEXPR = 327681;
var CODESET = 14;
var CRYPT_SALT_LENGTH = 123;
var CRYPT_STD_DES = 1;
var CRYPT_EXT_DES = 1;
var CRYPT_MD5 = 1;
var CRYPT_BLOWFISH = 1;
var CRYPT_SHA256 = 1;
var CRYPT_SHA512 = 1;
var DIRECTORY_SEPARATOR = "/";
var PATH_SEPARATOR = ":";
var GLOB_BRACE = 1024;
var GLOB_MARK = 2;
var GLOB_NOSORT = 4;
var GLOB_NOCHECK = 16;
var GLOB_NOESCAPE = 64;
var GLOB_ERR = 1;
var GLOB_ONLYDIR = 8192;
var GLOB_AVAILABLE_FLAGS = 9303;
var EXTR_OVERWRITE = 0;
var EXTR_SKIP = 1;
var EXTR_PREFIX_SAME = 2;
var EXTR_PREFIX_ALL = 3;
var EXTR_PREFIX_INVALID = 4;
var EXTR_PREFIX_IF_EXISTS = 5;
var EXTR_IF_EXISTS = 6;
var EXTR_REFS = 256;

/**
 * SORT_ASC is used with
 * array_multisort to sort in ascending order.
 * @link http://php.net/manual/en/array.constants.php
 */
var SORT_ASC = 4;

/**
 * SORT_DESC is used with
 * array_multisort to sort in descending order.
 * @link http://php.net/manual/en/array.constants.php
 */
var SORT_DESC = 3;

/**
 * SORT_REGULAR is used to compare items normally.
 * @link http://php.net/manual/en/array.constants.php
 */
var SORT_REGULAR = 0;

/**
 * SORT_NUMERIC is used to compare items numerically.
 * @link http://php.net/manual/en/array.constants.php
 */
var SORT_NUMERIC = 1;

/**
 * SORT_STRING is used to compare items as strings.
 * @link http://php.net/manual/en/array.constants.php
 */
var SORT_STRING = 2;

/**
 * SORT_LOCALE_STRING is used to compare items as
 * strings, based on the current locale. Added in PHP 4.4.0 and 5.0.2.
 * @link http://php.net/manual/en/array.constants.php
 */
var SORT_LOCALE_STRING = 5;

/**
 * CASE_LOWER is used with
 * array_change_key_case and is used to convert array
 * keys to lower case. This is also the default case for
 * array_change_key_case.
 * @link http://php.net/manual/en/array.constants.php
 */
var CASE_LOWER = 0;

/**
 * CASE_UPPER is used with
 * array_change_key_case and is used to convert array
 * keys to upper case.
 * @link http://php.net/manual/en/array.constants.php
 */
var CASE_UPPER = 1;
var COUNT_NORMAL = 0;
var COUNT_RECURSIVE = 1;
var ASSERT_ACTIVE = 1;
var ASSERT_CALLBACK = 2;
var ASSERT_BAIL = 3;
var ASSERT_WARNING = 4;
var ASSERT_QUIET_EVAL = 5;

/**
 * Flag indicating if the stream
 * used the include path.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_USE_PATH = 1;
var STREAM_IGNORE_URL = 2;
var STREAM_ENFORCE_SAFE_MODE = 4;

/**
 * Flag indicating if the wrapper
 * is responsible for raising errors using trigger_error 
 * during opening of the stream. If this flag is not set, you
 * should not raise any errors.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_REPORT_ERRORS = 8;

/**
 * This flag is useful when your extension really must be able to randomly
 * seek around in a stream. Some streams may not be seekable in their
 * native form, so this flag asks the streams API to check to see if the
 * stream does support seeking. If it does not, it will copy the stream
 * into temporary storage (which may be a temporary file or a memory
 * stream) which does support seeking.
 * Please note that this flag is not useful when you want to seek the
 * stream and write to it, because the stream you are accessing might
 * not be bound to the actual resource you requested.
 * If the requested resource is network based, this flag will cause the
 * opener to block until the whole contents have been downloaded.
 * @link http://php.net/manual/en/internals2.ze1.streams.constants.php
 */
var STREAM_MUST_SEEK = 16;
var STREAM_URL_STAT_LINK = 1;
var STREAM_URL_STAT_QUIET = 2;
var STREAM_MKDIR_RECURSIVE = 1;
var STREAM_IS_URL = 1;
var STREAM_OPTION_BLOCKING = 1;
var STREAM_OPTION_READ_TIMEOUT = 4;
var STREAM_OPTION_READ_BUFFER = 2;
var STREAM_OPTION_WRITE_BUFFER = 3;
var STREAM_BUFFER_NONE = 0;
var STREAM_BUFFER_LINE = 1;
var STREAM_BUFFER_FULL = 2;

/**
 * Stream casting, when stream_cast is called 
 * otherwise (see above).
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_CAST_AS_STREAM = 0;

/**
 * Stream casting, for when stream_select is 
 * calling stream_cast.
 * @link http://php.net/manual/en/stream.constants.php
 */
var STREAM_CAST_FOR_SELECT = 3;

/**
 * Image type constant used by the
 * image_type_to_mime_type and
 * image_type_to_extension functions.
 * @link http://php.net/manual/en/image.constants.php
 */
var IMAGETYPE_GIF = 1;

/**
 * Image type constant used by the
 * image_type_to_mime_type and
 * image_type_to_extension functions.
 * @link http://php.net/manual/en/image.constants.php
 */
var IMAGETYPE_JPEG = 2;

/**
 * Image type constant used by the
 * image_type_to_mime_type and
 * image_type_to_extension functions.
 * @link http://php.net/manual/en/image.constants.php
 */
var IMAGETYPE_PNG = 3;

/**
 * Image type constant used by the
 * image_type_to_mime_type and
 * image_type_to_extension functions.
 * @link http://php.net/manual/en/image.constants.php
 */
var IMAGETYPE_SWF = 4;

/**
 * Image type constant used by the
 * image_type_to_mime_type and
 * image_type_to_extension functions.
 * @link http://php.net/manual/en/image.constants.php
 */
var IMAGETYPE_PSD = 5;

/**
 * Image type constant used by the
 * image_type_to_mime_type and
 * image_type_to_extension functions.
 * @link http://php.net/manual/en/image.constants.php
 */
var IMAGETYPE_BMP = 6;

/**
 * Image type constant used by the
 * image_type_to_mime_type and
 * image_type_to_extension functions.
 * @link http://php.net/manual/en/image.constants.php
 */
var IMAGETYPE_TIFF_II = 7;

/**
 * Image type constant used by the
 * image_type_to_mime_type and
 * image_type_to_extension functions.
 * @link http://php.net/manual/en/image.constants.php
 */
var IMAGETYPE_TIFF_MM = 8;

/**
 * Image type constant used by the
 * image_type_to_mime_type and
 * image_type_to_extension functions.
 * @link http://php.net/manual/en/image.constants.php
 */
var IMAGETYPE_JPC = 9;

/**
 * Image type constant used by the
 * image_type_to_mime_type and
 * image_type_to_extension functions.
 * @link http://php.net/manual/en/image.constants.php
 */
var IMAGETYPE_JP2 = 10;

/**
 * Image type constant used by the
 * image_type_to_mime_type and
 * image_type_to_extension functions.
 * @link http://php.net/manual/en/image.constants.php
 */
var IMAGETYPE_JPX = 11;

/**
 * Image type constant used by the
 * image_type_to_mime_type and
 * image_type_to_extension functions.
 * @link http://php.net/manual/en/image.constants.php
 */
var IMAGETYPE_JB2 = 12;

/**
 * Image type constant used by the
 * image_type_to_mime_type and
 * image_type_to_extension functions.
 * @link http://php.net/manual/en/image.constants.php
 */
var IMAGETYPE_SWC = 13;

/**
 * Image type constant used by the
 * image_type_to_mime_type and
 * image_type_to_extension functions.
 * @link http://php.net/manual/en/image.constants.php
 */
var IMAGETYPE_IFF = 14;

/**
 * Image type constant used by the
 * image_type_to_mime_type and
 * image_type_to_extension functions.
 * @link http://php.net/manual/en/image.constants.php
 */
var IMAGETYPE_WBMP = 15;

/**
 * Image type constant used by the
 * image_type_to_mime_type and
 * image_type_to_extension functions.
 * @link http://php.net/manual/en/image.constants.php
 */
var IMAGETYPE_JPEG2000 = 9;

/**
 * Image type constant used by the
 * image_type_to_mime_type and
 * image_type_to_extension functions.
 * @link http://php.net/manual/en/image.constants.php
 */
var IMAGETYPE_XBM = 16;

/**
 * Image type constant used by the
 * image_type_to_mime_type and
 * image_type_to_extension functions.
 * (Available as of PHP 5.3.0)
 * @link http://php.net/manual/en/image.constants.php
 */
var IMAGETYPE_ICO = 17;
var IMAGETYPE_UNKNOWN = 0;
var IMAGETYPE_COUNT = 18;

/**
 * IPv4 Address Resource
 * @link http://php.net/manual/en/network.constants.php
 */
var DNS_A = 1;

/**
 * Authoritative Name Server Resource
 * @link http://php.net/manual/en/network.constants.php
 */
var DNS_NS = 2;

/**
 * Alias (Canonical Name) Resource
 * @link http://php.net/manual/en/network.constants.php
 */
var DNS_CNAME = 16;

/**
 * Start of Authority Resource
 * @link http://php.net/manual/en/network.constants.php
 */
var DNS_SOA = 32;

/**
 * Pointer Resource
 * @link http://php.net/manual/en/network.constants.php
 */
var DNS_PTR = 2048;

/**
 * Host Info Resource (See IANA's
 * Operating System Names
 * for the meaning of these values)
 * @link http://php.net/manual/en/network.constants.php
 */
var DNS_HINFO = 4096;

/**
 * Mail Exchanger Resource
 * @link http://php.net/manual/en/network.constants.php
 */
var DNS_MX = 16384;

/**
 * Text Resource
 * @link http://php.net/manual/en/network.constants.php
 */
var DNS_TXT = 32768;
var DNS_SRV = 33554432;
var DNS_NAPTR = 67108864;

/**
 * IPv6 Address Resource
 * @link http://php.net/manual/en/network.constants.php
 */
var DNS_AAAA = 134217728;
var DNS_A6 = 16777216;

/**
 * Any Resource Record. On most systems
 * this returns all resource records, however
 * it should not be counted upon for critical
 * uses. Try DNS_ALL instead.
 * @link http://php.net/manual/en/network.constants.php
 */
var DNS_ANY = 268435456;

/**
 * Iteratively query the name server for
 * each available record type.
 * @link http://php.net/manual/en/network.constants.php
 */
var DNS_ALL = 251713587;

// End of standard v.5.3.1-0.dotdeb.1


//WI-11084 Constant not defined PHP_QUERY_RFC3986

/**
 * Encoding is performed per RFC 1738 and the application/x-www-form-urlencoded media type,
 * which implies that spaces are encoded as plus (+) signs.
 * @link http://php.net/manual/en/function.http-build-query.php
 */
var PHP_QUERY_RFC1738 = 1;
/**
 * Encoding is performed according to RFC 3986, and spaces will be percent encoded (%20).
 * @link http://php.net/manual/en/function.http-build-query.php
 */
var PHP_QUERY_RFC3986 = 2;


//WI-11254 Stubs for missing constants from PHP 5.4

/**
 * Specifies where the manpages were installed into. Available since PHP 5.3.7.
 * @link http://php.net/manual/en/reserved.constants.php
 */
var PHP_MANDIR = '/usr/local/php/php/man';
/**
 * Specifies where the binaries were installed into.
 * @link http://php.net/manual/en/reserved.constants.php
 */
var PHP_BINARY = '/usr/local/php/bin/php';



/** @link http://php.net/manual/en/outcontrol.constants.php */
var PHP_OUTPUT_HANDLER_WRITE = 0;
/** @link http://php.net/manual/en/outcontrol.constants.php */
var PHP_OUTPUT_HANDLER_FLUSH = 4;
/** @link http://php.net/manual/en/outcontrol.constants.php */
var PHP_OUTPUT_HANDLER_CLEAN = 2;
/** @link http://php.net/manual/en/outcontrol.constants.php */
var PHP_OUTPUT_HANDLER_FINAL = 8;
/** @link http://php.net/manual/en/outcontrol.constants.php */
var PHP_OUTPUT_HANDLER_CLEANABLE = 16;
/** @link http://php.net/manual/en/outcontrol.constants.php */
var PHP_OUTPUT_HANDLER_FLUSHABLE = 32;
/** @link http://php.net/manual/en/outcontrol.constants.php */
var PHP_OUTPUT_HANDLER_REMOVABLE = 64;
/** @link http://php.net/manual/en/outcontrol.constants.php */
var PHP_OUTPUT_HANDLER_STDFLAGS = 112;
/** @link http://php.net/manual/en/outcontrol.constants.php */
var PHP_OUTPUT_HANDLER_STARTED = 4096;
/** @link http://php.net/manual/en/outcontrol.constants.php */
var PHP_OUTPUT_HANDLER_DISABLED = 8192;



/** @link http://php.net/manual/en/libxml.constants.php */
var LIBXML_PEDANTIC = 128;




/** @link http://php.net/manual/en/zlib.constants.php */
var ZLIB_ENCODING_RAW = -15;
/** @link http://php.net/manual/en/zlib.constants.php */
var ZLIB_ENCODING_GZIP = 31;
/** @link http://php.net/manual/en/zlib.constants.php */
var ZLIB_ENCODING_DEFLATE = 15;



/**
 * Equivalent to calling htmlspecialchars() with ENT_QUOTES set.
 * Encoding quotes can be disabled by setting FILTER_FLAG_NO_ENCODE_QUOTES.
 * Like htmlspecialchars(), this filter is aware of the default_charset
 * and if a sequence of bytes is detected that makes up an invalid character
 * in the current character set then the entire string is rejected resulting in
 * a 0-length string.
 * @link http://php.net/manual/en/filter.filters.sanitize.php
 */
var FILTER_SANITIZE_FULL_SPECIAL_CHARS = 515;





/**
 * Return value of session_status() if sessions are disabled. Since PHP 5.4.0.
 * @link http://php.net/manual/en/function.session-status.php
 */
var PHP_SESSION_DISABLED = 0;
/**
 * Return value of session_status() if sessions are enabled, but no session exists. Since PHP 5.4.0.
 * @link http://php.net/manual/en/function.session-status.php
 */
var PHP_SESSION_NONE = 1;
/**
 * Return value of session_status() if sessions are enabled, and a session exists. Since PHP 5.4.0.
 * @link http://php.net/manual/en/function.session-status.php
 */
var PHP_SESSION_ACTIVE = 2;



/**
 * Joins a multicast group. (added in PHP 5.4)
 * @link http://php.net/manual/en/function.socket-get-option.php
 */
var MCAST_JOIN_GROUP = 42;
/**
 * Leaves a multicast group. (added in PHP 5.4)
 * @link http://php.net/manual/en/function.socket-get-option.php
 */
var MCAST_LEAVE_GROUP = 45;
/**
 * Blocks packets arriving from a specific source to a specific multicast group,
 * which must have been previously joined. (added in PHP 5.4)
 * @link http://php.net/manual/en/function.socket-get-option.php
 */
var MCAST_BLOCK_SOURCE = 43;
/**
 * Unblocks (start receiving again) packets arriving from
 * a specific source address to a specific multicast group,
 * which must have been previously joined. (added in PHP 5.4)
 * @link http://php.net/manual/en/function.socket-get-option.php
 */
var MCAST_UNBLOCK_SOURCE = 44;
/**
 * Receive packets destined to a specific multicast group
 * whose source address matches a specific value. (added in PHP 5.4)
 * @link http://php.net/manual/en/function.socket-get-option.php
 */
var MCAST_JOIN_SOURCE_GROUP = 46;
/**
 * Stop receiving packets destined to a specific multicast group
 * whose soure address matches a specific value. (added in PHP 5.4)
 * @link http://php.net/manual/en/function.socket-get-option.php
 */
var MCAST_LEAVE_SOURCE_GROUP = 47;
/**
 * The outgoing interface for IPv4 multicast packets. (added in PHP 5.4)
 * @link http://php.net/manual/en/function.socket-get-option.php
 */
var IP_MULTICAST_IF = 32;
/**
 * The outgoing interface for IPv6 multicast packets. (added in PHP 5.4)
 * @link http://php.net/manual/en/function.socket-get-option.php
 */
var IP_MULTICAST_TTL = 33;
/**
 * The multicast loopback policy for IPv4 packets,
 * which determines whether multicast packets sent by this socket
 * also reach receivers in the same host that have joined the same multicast group
 * on the outgoing interface used by this socket. This is the case by default. (added in PHP 5.4)
 * @link http://php.net/manual/en/function.socket-get-option.php
 */
var IP_MULTICAST_LOOP = 34;
/**
 * Analogous to IP_MULTICAST_LOOP, but for IPv6. (added in PHP 5.4)
 * @link http://php.net/manual/en/function.socket-get-option.php
 */
var IPV6_MULTICAST_IF = 17;
/**
 * The time-to-live of outgoing IPv4 multicast packets.
 * This should be a value between 0 (don't leave the interface) and 255.
 * The default value is 1 (only the local network is reached). (added in PHP 5.4)
 * @link http://php.net/manual/en/function.socket-get-option.php
 */
var IPV6_MULTICAST_HOPS = 18;
/**
 * Analogous to IP_MULTICAST_TTL, but for IPv6 packets.
 * The value -1 is also accepted, meaning the route default should be used. (added in PHP 5.4)
 * @link http://php.net/manual/en/function.socket-get-option.php
 */
var IPV6_MULTICAST_LOOP = 19;



var IPPROTO_IP = 0;
var IPPROTO_IPV6 = 41;



/**
 * Replace invalid code unit sequences with a Unicode Replacement Character
 * U+FFFD (UTF-8) or &#FFFD; (otherwise) instead of returning an empty string.
 * @link http://php.net/manual/en/function.htmlspecialchars.php
 */
var ENT_SUBSTITUTE = 8;
/**
 * Replace invalid code points for the given document type with
 * a Unicode Replacement Character U+FFFD (UTF-8) or &#FFFD;
 * (otherwise) instead of leaving them as is. This may be useful,
 * for instance, to ensure the well-formedness of XML documents
 * with embedded external content.
 * @link http://php.net/manual/en/function.htmlspecialchars.php
 */
var ENT_DISALLOWED = 128;
/**
 * Handle code as HTML 4.01.
 * @link http://php.net/manual/en/function.htmlspecialchars.php
 */
var ENT_HTML401 = 0;
/**
 * Handle code as XML 1.
 * @link http://php.net/manual/en/function.htmlspecialchars.php
 */
var ENT_XML1 = 16;
/**
 * Handle code as XHTML.
 * @link http://php.net/manual/en/function.htmlspecialchars.php
 */
var ENT_XHTML = 32;
/**
 * Handle code as HTML 5.
 * @link http://php.net/manual/en/function.htmlspecialchars.php
 */
var ENT_HTML5 = 48;


/** @link http://php.net/manual/en/function.scandir.php */
var SCANDIR_SORT_ASCENDING = 0;
/** @link http://php.net/manual/en/function.scandir.php */
var SCANDIR_SORT_DESCENDING = 1;
/** @link http://php.net/manual/en/function.scandir.php */
var SCANDIR_SORT_NONE = 2;



/**
 * SORT_NATURAL is used to compare items as strings using "natural ordering" like natsort(). Added in PHP 5.4.0.
 * @link http://php.net/manual/en/array.constants.php
 */
var SORT_NATURAL = 6;
/**
 * SORT_FLAG_CASE can be combined (bitwise OR) with SORT_STRING or SORT_NATURAL to sort strings case-insensitively. Added in PHP 5.4.0.
 * @link http://php.net/manual/en/array.constants.php
 */
var SORT_FLAG_CASE = 8;



/** @link http://php.net/manual/en/streamwrapper.stream-metadata.php */
var STREAM_META_TOUCH = 1;
/** @link http://php.net/manual/en/streamwrapper.stream-metadata.php */
var STREAM_META_OWNER = 3;
/** @link http://php.net/manual/en/streamwrapper.stream-metadata.php */
var STREAM_META_OWNER_NAME = 2;
/** @link http://php.net/manual/en/streamwrapper.stream-metadata.php */
var STREAM_META_GROUP = 5;
/** @link http://php.net/manual/en/streamwrapper.stream-metadata.php */
var STREAM_META_GROUP_NAME = 4;
/** @link http://php.net/manual/en/streamwrapper.stream-metadata.php */
var STREAM_META_ACCESS = 6;





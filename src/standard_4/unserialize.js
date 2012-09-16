/**
 * (PHP 4, PHP 5)<br/>
 * Creates a PHP value from a stored representation
 * @link http://php.net/manual/en/function.unserialize.php
 * @param {string} $str <p>
 * The serialized string.
 * </p>
 * <p>
 * If the variable being unserialized is an object, after successfully
 * reconstructing the object PHP will automatically attempt to call the
 * __wakeup member function (if it exists).
 * </p>
 * <p>
 * unserialize_callback_func directive
 * <p>
 * It's possible to set a callback-function which will be called,
 * if an undefined class should be instantiated during unserializing.
 * (to prevent getting an incomplete object "__PHP_Incomplete_Class".)
 * Use your &php.ini;, ini_set or &htaccess;
 * to define 'unserialize_callback_func'. Everytime an undefined class
 * should be instantiated, it'll be called. To disable this feature just
 * empty this setting.
 * </p>
 * </p>
 * @return {mixed} The converted value is returned, and can be a boolean,
 * integer, float, string,
 * array or object.
 * </p>
 * <p>
 * In case the passed string is not unserializeable, false is returned and
 * E_NOTICE is issued.
 */
function unserialize($str) {
    ___validate_function_arguments(
        'unserialize',
        {
            required: [true],
            type: ['string'],
            conditions: [
                {
                    func: function (val) {
                        val = '' + val;
                        return /^((i|s|d|b):.+;$|N;$|a:\d+:\{.*\}$|O:\d+:"\w+":\d+:\{.*\}$)/.test(val);
                    },
                    msg: function (arg, val) {
                        val = '' + val;
                        return 'unserialize(): Error at offset 0 of ' + val.length + ' bytes';
                    }
                }
            ]
        },
        arguments
    );

    if ($str === null) {
        return false;
    }

    switch ($str.charAt(0)) {

        case 'O':
            var match = $str.match(/^(O:\d+:"[^"]+")(:.*)$/);

            if (match === null) {
                var offset = 0;
                throw new Exception('unserialize(): Error at offset ' + offset + ' of ' + $str.length + ' bytes');
            }

            var classname = unserialize(match[1].replace(/^O/, 's') + ';');
            var temp = 'a' + match[2];

            var classdata = unserialize(temp);

            var obj = eval('new ' + classname + '();');

            var classdatalen = ___object_length(classdata);
            var classdatacons = ___get_constructor_name(classdata);

            if(classdatacons === 'Array') {
                // Rather impossible but...
                if(classdatalen > 0) {
                    var offset = 0;
                    throw new Exception('unserialize(): Error at offset ' + offset + ' of ' + $str.length + ' bytes');
                }
                return obj;
            }

            for(var key in classdata) {
                obj[key] = classdata[key];
            }

            /*
// Jak klasa nie jest zdefiniowana:
__PHP_Incomplete_Class Object
(
    [__PHP_Incomplete_Class_Name] => Kura
    [legs] => 2
    [wings] => 2
    [eyes] => 2
    [canFly] =>
)

// Otherwise:
Kura Object
(
    [legs] => 2
    [wings] => 2
    [eyes] => 2
    [canFly] =>
)
             */

            return obj;

            break;

        case 'a':
            var i, c, index = 0;
            var output = [];
            var xmatch = $str.match(/^a:(\d+?):\{(.*)\}$/);
            var len = parseInt(xmatch[1]);
            var content = xmatch[2].split('');
            var parsevar = false;
            var type = null;
            var brackets = 0;
            var chunk = '';

            for (c = 0; c < content.length; c++) {
                var char = content[c]
                chunk += char;

                var matchi = chunk.match(new RegExp('^i:' + index + ';'));
                var matchs = chunk.match(new RegExp('^s:\\d+:".*?";'));

                var match = matchi !== null || matchs !== null;

                if (parsevar === false && match === true) {
                    index++;

                    output.push(chunk);
                    parsevar = true;
                    type = null;
                    chunk = '';
                    c++;
                }

                if (parsevar === true) {

                    if (type === null) {
                        char = content[c];
                        type = char;

                        if (type === 'a' || type === 'O') {
                            do {
                                char = content[c++];
                                chunk += char;

                            } while (char !== '{');
                            c--;
                        }
                    }

                    try {

                        switch (type) {
                            case 'a':
                            case 'O':

                                if (char === '{') {
                                    brackets++;
                                }

                                if (char === '}') {
                                    brackets--;
                                }

                                if (brackets === 0) {
                                    var val = chunk;
                                    output.push(unserialize(val));
                                    parsevar = false;
                                    type = null;
                                    chunk = '';
                                }
                                break;

                            case 'N':
                            case 'b':
                            case 'i':
                            case 'd':
                            case 's':

                                if (char === ';') {
                                    var val = type + chunk;
                                    output.push(unserialize(val));
                                    parsevar = false;
                                    type = null;
                                    chunk = '';
                                }

                                break;

                        }

                    } catch (e) {
                        var msg = e.getMessage().replace(/^(.*? of )(\d+)( bytes)$/, '$1' + $str.length + '$3');
                        throw new Exception(msg, e.getCode(), e);
                    }
                }
            }

            if (output.length != len * 2) {
                var offset = 0;
                throw new Exception('unserialize(): Error at offset ' + offset + ' of ' + $str.length + ' bytes');
            }

            var is_array = true;
            var result;

            for (c = 0; c < output.length; c += 2) {
                if (output[c].match('^i') === null) {
                    is_array = false;
                    break;
                }
            }

            if (is_array === true) {
                result = [];
                for (c = 0; c < output.length; c += 2) {
                    result.push(output[c + 1]);
                }
            }
            else {
                result = {};
                for (c = 0; c < output.length; c += 2) {
                    var key = unserialize(output[c]);
                    result[key] = output[c + 1];
                }
            }

            return result;
        case 'N':
            return null
        case 'b':
            var match = $str.match(/^b:(1|0);$/);
            if (match === null) {
                throw new Exception('unserialize(): Error at offset 0 of ' + $str.length + ' bytes');
            }
            return match[1] === '1';
        case 'i':
            var match = $str.match(/^i:(?:0*)(\d+);$/);
            if (match === null) {
                throw new Exception('unserialize(): Error at offset 0 of ' + $str.length + ' bytes');
            }
            return parseInt(match[1]);
        case 'd':
            var match = $str.match(/^d:(?:0*)(\.?\d+|\d+\.\d+);$/);
            if (match === null) {
                throw new Exception('unserialize(): Error at offset 0 of ' + $str.length + ' bytes');
            }
            return parseFloat(match[1]);
        case 's':
            var match = $str.match(/^(s:(\d+):")(.*)";$/);

            if (match === null) {
                throw new Exception('unserialize(): Error at offset 0 of ' + $str.length + ' bytes');
            }

            // String length check:
            var given = match[3].length;
            var expected = parseInt(match[2]);

            if (expected != given) {
                var offset = expected > given ? 2 : match[1].length + expected;
                throw new Exception('unserialize(): Error at offset ' + offset + ' of ' + $str.length + ' bytes');
            }

            return match[3];

        default:
            throw new Exception('unserialize(): Error at offset ' + offset + ' of ' + $str.length + ' bytes');
    }
}

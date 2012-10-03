/**
 * (PHP 4, PHP 5)<br/>
 * Return all the keys of an array
 * @link http://php.net/manual/en/function.array-keys.php
 * @param {array} $input <p>
 * An array containing keys to return.
 * </p>
 * @param {mixed} $search_value [optional] <p>
 * If specified, then only keys containing these values are returned.
 * </p>
 * @param {bool} $strict [optional] <p>
 * Determines if strict comparison (===) should be used during the search.
 * </p>
 * @return array an array of all the keys in input.
 */
function array_keys($input, $search_value, $strict) {
// function array_keys (array $input, $search_value = null, $strict = null) {}
    ___validate_function_arguments(
        "array_keys",
        {
            required: [true, false, false],
            type: ['array', 'any', 'any']
        },
        arguments
    );

    $search_value = $search_value || null;
    $strict = $strict || null;

    var vtype;
    var ctype;

    if ($search_value !== null) {
        vtype = typeof $search_value;
        ctype = ___get_constructor_name($search_value);

        if (vtype === "object") {
            if (ctype !== "Array" && ctype !== "Object") {
                throw new Exception("Object of class " + ctype + " could not be converted to int");
            }
        }
    }

    if ($strict !== null) {
        vtype = typeof $strict;
        ctype = ___get_constructor_name($strict);

        if (vtype === "object") {
            if (ctype === "Array" || ctype === "Object") {
                throw new Exception("array_keys() expects parameter 3 to be boolean, array given");
            }
            else {
                throw new Exception("array_keys() expects parameter 3 to be boolean, object given");
            }
        }

        $strict = $strict === "0" || $strict === 0 || $strict === false ? false : true;
    }
    else {
        $strict = false;
    }

    vtype = ___get_constructor_name($input);
    var output = [];

    var key;

    if (vtype === "Array") {
        for (key = 0; key < $input.length; key++) {
            if ($search_value !== null) {
                if ($strict === true) {
                    if ($input[key] !== $search_value) {
                        continue;
                    }
                }
                else {
                    /*jshint eqeqeq:false */ // weak check is preferred
                    if ($input[key] != $search_value) {
                    /*jshint eqeqeq:true */
                        continue;
                    }

                }
            }
            output.push(key);
        }
    }
    else {
        for (key in $input) {
            if (key) {
                if ($search_value !== null) {
                    if ($strict === true) {
                        if ($input[key] !== $search_value) {
                            continue;
                        }
                    }
                    else {
                        /*jshint eqeqeq:false */  // weak check is preferred
                        if ($input[key] != $search_value) {
                        /*jshint eqeqeq:true */
                            continue;
                        }
                     }
                }
                output.push(key);
            }
        }
    }

    return output;
}

/**
 * (PHP 4, PHP 5)<br/>
 * Return an array with elements in reverse order
 * @link http://php.net/manual/en/function.array-reverse.php
 * @param {array} $array <p>
 * The input array.
 * </p>
 * @param {bool} $preserve_keys [optional] <p>
 * If set to true keys are preserved.
 * </p>
 * @return array the reversed array.
 */
function array_reverse ($array, $preserve_keys) {
// function array_reverse (array $array, $preserve_keys = null) {}
    ___validate_function_arguments(
        "array_reverse",
        {
            required: [true, false],
            type: ['array', 'any']
        },
        arguments
    );

    $preserve_keys = $preserve_keys || null;

    if ($preserve_keys !== null) {
        var vtype = typeof $preserve_keys;
        var ctype = ___get_constructor_name($preserve_keys);

        if (vtype === "object") {
            if (ctype === "Array" || ctype === "Object") {
                throw new Exception("array_reverse() expects parameter 2 to be boolean, array given");
            }
            else {
                throw new Exception("array_reverse() expects parameter 2 to be boolean, object given");
            }
        }

        $preserve_keys = $preserve_keys === "0" || $preserve_keys === 0 || $preserve_keys === false ? false : true;
    }
    else {
        $preserve_keys = false;
    }

    var vtype = ___get_constructor_name($array);
    var output;
    var key;
    var temp = [];

    if (vtype === "Array") {
        output = [];
        for (key = 0; key < $array.length; key++) {
            output.unshift($array[key]);
            temp.unshift([key, $array[key]]);
        }

        if($preserve_keys == true && temp.length > 0) {
            output = {};
            for(key = 0; key < temp.length; key++) {
                output[temp[key][0]] = temp[key][1];
            }
        }
    }
    else {
        output = {};
        var aoutput = [];
        for (key in $array) {
            temp.unshift([key, $array[key]]);
        }

        var isarray = true;
        for(key = 0; key < temp.length; key++) {
            output[temp[key][0]] = temp[key][1];
            aoutput.push(temp[key][1]);
            if(1 * temp[key][0] !== key) {
                isarray = false;
            }
        }

        if(temp.length === 0) {
            output = [];
        }

        if(isarray === true) {
            output = aoutput;
        }

    }

    return output;
}

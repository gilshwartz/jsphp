/**
 * (PHP 4 &gt;= 4.0.6, PHP 5)<br/>
 * Applies the callback to the elements of the given arrays
 * @link http://php.net/manual/en/function.array-map.php
 * @param {function|string} $callback <p>
 * Callback function to run for each element in each array.
 * </p>
 * @param {array} $arr1 <p>
 * An array to run through the callback function.
 * </p>
 * @param {array} $_ [optional]
 * @return array an array containing all the elements of arr1
 * after applying the callback function to each one.
 */
function array_map($callback, $arr1, $_) {
// function array_map ($callback, array $arr1, array $_ = null) {}
    ___validate_function_arguments(
        "array_map",
        {
            required: [true, true, null],
            type: ['any', 'array', 'any']
        },
        arguments
    );

    var i;
    var c;
    var ctype = ___get_constructor_name($arr1);

    // TODO: check wheter argument 0 is a function
    // "array_map() expects parameter 1 to be a valid callback, function 'ab' not found or invalid function name"
    // "array_map() expects parameter 1 to be a valid callback, no array or string given"

    // TODO: check whether all arguments >= 1 are arrays

    var xargs = arguments;
//    xargs.shift();

    function mergeargs(args) {

        var okargs = [];

        for(var k in args) {
            if(k > 0) {
                okargs.push(args[k])
            }
        }

        var maxlength = 0;
        var mergedargs = [];

        for (i = 0; i < okargs.length; i++) {
            if (okargs[i].length > maxlength) {
                maxlength = okargs[i].length;
            }
        }

        for (i = 0; i < okargs.length; i++) {
            mergedargs[i] = [];
            for (c = 0; c < maxlength; c++) {
                mergedargs[i][c] = typeof okargs[i][c] === "undefined" ? 0 : okargs[i][c];
            }
        }

        return mergedargs;
    }


    var margs = mergeargs(xargs);

    console.log(margs);

    var output = [];
    var key;
    var result;

    if (arguments.count > 2) {
        var match = $callback.toString().match(/^function[^\(]*\((.*?)\).*$/m);
        match[1].replace(/\s*/g);
        var myargs = [];

        var funparams = match[1].split(', ');

        for(i = 0; i < funparams.length; i++) {
            myargs[i] = margs[i];
        }

        var fctype = ___get_constructor_name(myargs[0]);

        if (ctype !== "Object") {

        }
        else {

        }
    }
    else {
        if (ctype !== "Object") {
            for (key = 0; key < $arr1.length; key++) {
                try {
                    result = $callback($arr1[key]);
                }
                catch (e) {
                    if (e.toString() === "TypeError: $callback is not a function") {
                        result = eval($callback + "(" + $arr1[key] + ")");
                    }
                }
                output[key] = result;
            }
        } else {
            output = {};
            for (key in $arr1) {
                if (key) {
                    try {
                        result = $callback($arr1[key]);
                    }
                    catch (e) {
                        if (e.toString() === "TypeError: $callback is not a function") {
                            result = eval($callback + "(" + $arr1[key] + ")");
                        }
                    }
                    output[key] = result;
                }
            }
        }
    }

    return output;
}

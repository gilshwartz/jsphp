/**
 * (PHP 4, PHP 5)<br/>
 * Exchanges all keys with their associated values in an array
 * @link http://php.net/manual/en/function.array-flip.php
 * @param {array} $trans <p>
 * An array of key/value pairs to be flipped.
 * </p>
 * @return {array} the flipped array on success and false on failure.
 */
function array_flip ($trans) {

    ___validate_function_arguments(
        "array_flip",
        {
            required: [true],
            type: ['array']
        },
        arguments
    );

    var vtype = typeof $trans;
    var cname = ___get_constructor_name($trans);

    if(cname.match(/^Array|Object$/) === null) {
        throw new Exception("array_flip() expects parameter 1 to be array, object given");
    }

    if(___object_length($trans) === 0) {
        return [];
    }

    var key;
    var output;

    switch(cname) {
        case "Array":
            output = {};
            for(key = 0; key < $trans.length; key++) {
                output[$trans[key]] = parseInt(key);
            }
            break;
        case "Object":
            output = {};
            aoutput = [];
            var isarray = true;
            var i = 0;
            for(key in $trans) {
                output[$trans[key]] = key;
                if(1 * $trans[key] !== i++) {
                    isarray = false;
                }
                else
                {
                    aoutput.push(1 * key);
                }
            }

            if(isarray === true) {
                return aoutput;
            }

            break;
    }

    return output;
}

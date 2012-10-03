/**
 * (PHP 4, PHP 5)<br/>
 * Generates a storable representation of a value
 * @link http://php.net/manual/en/function.serialize.php
 * @param {object} $value <p>
 * The value to be serialized. serialize
 * handles all types, except the resource-type.
 * You can even serialize arrays that contain
 * references to itself. Circular references inside the array/object you
 * are serializing will also be stored. Any other
 * reference will be lost.
 * </p>
 * <p>
 * When serializing objects, PHP will attempt to call the member function
 * __sleep prior to serialization.
 * This is to allow the object to do any last minute clean-up, etc. prior
 * to being serialized. Likewise, when the object is restored using
 * unserialize the __wakeup member function is called.
 * </p>
 * <p>
 * Object's private members have the class name prepended to the member
 * name; protected members have a '*' prepended to the member name.
 * These prepended values have null bytes on either side.
 * </p>
 * @return {string} a string containing a byte-stream representation of
 * value that can be stored anywhere.
 */
function serialize($value) {

    ___validate_function_arguments(
        'serialize',
        {
            required: [true]
        },
        arguments
    );

    var vtype = ___gettype($value);
    var cn = ___get_constructor_name($value);

    var output;
    var x;
    var key;
    var temp = {};
    var len = 0;

    switch (vtype) {
        case "NULL":
            output = 'N;';
            break;
        case "boolean":
            output = 'b:' + ($value === true ? 1 : 0) + ';';
            break;
        case "integer":
            output = 'i:' + $value + ';';
            break;
        case "double":
            output = 'd:' + $value + ';';
            break;
        case "string":
            output = 's:' + $value.length + ':"' + $value + '"' + ';';
            break;
        case "array":

            x = 0;
            len = ___object_length($value);

            if (cn === "Array") {

                temp = [];

                for (x = 0; x < len; x++) {
                    if (___get_constructor_name($value[x]) === "Function") {
                        continue;
                    }
                    temp.push($value[x]);
                }

                output = "a:" + temp.length + ":{";

                for (x = 0; x < temp.length; x++) {
                    output += "i:" + x + ";";
                    output += serialize(temp[x]);
                }
            }
            else {
                temp = {};

                for (key in $value) {
                    if (key) {
                        if (___get_constructor_name($value[key]) === "Function") {
                            continue;
                        }

                        temp[key] = $value[key];
                    }
                }

                output = (cn === "Object") ? "a:" : "O:" + cn.length + ":\"" + cn + "\":";
                output += ___object_length(temp) + ":{";

                for (key in temp) {
                    if (key) {
                        output += serialize(key);
                        output += serialize(temp[key]);
                    }
                }
            }

            output += "}";

            break;

        case "object":
            x = 0;

            len = ___object_length($value);

            if (cn === 'Function') {
                throw new Exception("Serialization of 'Closure' is not allowed");
            }

            temp = {};

            for (key in $value) {
                if (key) {
                    if (___get_constructor_name($value[key]) === "Function") {
                        continue;
                    }

                    temp[key] = $value[key];
                }
            }

            output = "O:" + cn.length + ":\"" + cn + "\":";
            output += ___object_length(temp) + ":{";

            for (key in temp) {
                if (key) {
                    output += serialize(key);
                    output += serialize(temp[key]);
                }

            }

            output += "}";

            break;

        case "resource":
            break;
    }

    return output;
}

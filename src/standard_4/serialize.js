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

    var output;

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
            var x = 0;
            output = "a:" + $value.length + ":{";
            for (x = 0; x < $value.length; x++) {
                output += "i:" + x + ";";
                output += serialize($value[x]);
            }
            output += "}";
            break;
        case "object":
            var x = 0;

            var cname = ___get_constructor_name($value);

            if(cname === 'Function') {
                throw new Exception("Serialization of 'Closure' is not allowed");
            }

            if(cname === 'Array') {
                output = "a:" + ___object_length($value) + ":{";
            }
            else
            {
                var ocount = 0;

                for (x in $value) {
                    if(___get_constructor_name($value[x]) === 'Function') {
                        continue;
                    }
                    ocount++;
                }

                output = "O:" + cname.length + ':"' + cname + '":' + ocount + ":{";
            }

            for (x in $value) {

                if(___get_constructor_name($value[x]) === 'Function') {
                    continue;
                }

                output += serialize(x);
                output += serialize($value[x]);
            }
            output += "}";

            if(output === 'a:0:{}' && cname === 'Object') {
                output = '';
            }

            break;
        case "resource":
            break;
    }

    return output;
}

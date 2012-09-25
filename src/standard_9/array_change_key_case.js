/**
 * (PHP 4 &gt;= 4.2.0, PHP 5)<br/>
 * Changes all keys in an array
 * @link http://php.net/manual/en/function.array-change-key-case.php
 * @param array $input <p>
 * The array to work on
 * </p>
 * @param int $case [optional] <p>
 * Either CASE_UPPER or
 * CASE_LOWER (default)
 * </p>
 * @return array an array with its keys lower or uppercased, or false if
 * input is not an array.
 */
function array_change_key_case ($input, $case) {
// function array_change_key_case (array $input, $case = null) {}

    ___validate_function_arguments(
        "array_change_key_case",
        {
            required: [true, false],
            type: ['any', 'any']
        },
        arguments
    );

    var vtype = ___get_constructor_name($input);

    if(vtype.match(/^Array|Object$/) === null) {
        return false;
    }

    if(vtype === "Array") {
        return $input;
    }

    if(___object_length($input) === 0) {
        return [];
    }

    if(typeof $case === "undefined") {
        $case = null;
    }

    if($case !== null) {
        var giv = ___gettype($case);
        switch (giv) {
            case "string":
                if($case === "") {
                    break;
                }
                var matches = $case.match(/^(\d+)(\.\d+)?$/);
                giv = matches === null ? "string" : "integer";
                if(giv === "integer") {
                    $case = parseInt(matches[1]);
                }
                break;
            case "double":
            case "integer":
                giv = "integer";
                $case = parseInt($case);
                break;
            case "boolean":
                giv = "integer";
                $case = $case === true ? 1 : 0;
                break;
            default:
                giv = giv;
                break;
        }

        if(giv !== "integer") {
            throw new Exception("array_change_key_case() expects parameter 2 to be long, " + giv + " given");
        }

        $case = $case > 0 ? CASE_UPPER : CASE_LOWER;
    }
    else
    {
        $case = CASE_LOWER;
    }

    var output = {};
    var key;

    for(key in $input) {
        var newkey = $case === CASE_LOWER ? key.toLocaleLowerCase() : key.toLocaleUpperCase();
        output[newkey] = $input[key];
    }

    return output;
}
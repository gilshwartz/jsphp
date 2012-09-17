/**
 * (PHP 4, PHP 5)<br/>
 * Shuffle an array
 * @link http://php.net/manual/en/function.shuffle.php
 * @param array $array <p>
 * The array.
 * </p>
 * @return bool true on success or false on failure.
 */
function shuffle($array) {
    var i;

    try {
        ___validate_function_arguments(
            "shuffle",
            {
                required: [true],
                type: ['array']
            },
            arguments
        );
    }
    catch (e) {
        msg = e.getMessage().toLowerCase();
        throw new Exception(msg, e.getCode());
    }

    for(i = 0; i < $array.length; i++) {
        var i1 = Math.floor(Math.random() * 1000) % $array.length;
        var i2 = Math.floor(Math.random() * 1000) % $array.length;

        var temp = $array[i1];
        $array[i1] = $array[i2];
        $array[i2] = temp;
    }

    return true;
}

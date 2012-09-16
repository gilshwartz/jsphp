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

    return true;
}

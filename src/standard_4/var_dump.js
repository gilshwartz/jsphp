/**
 * (PHP 4, PHP 5)<br/>
 * Dumps information about a variable
 * @link http://php.net/manual/en/function.var-dump.php
 * @param {object} $expression
 * The variable you want to export.
 * @param {object} $_expression [optional]
 * @return {void}
 */
function var_dump ($expression, $_expression) {

    ___validate_function_arguments(
        'var_dump',
        {
            required: [true, false],
            type: ['any', 'any']
        },
        arguments
    );

    $_expression = $_expression || null;
}


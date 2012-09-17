<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>JSPHP Unit Tests (JavaScript)</title>
        <link rel="stylesheet" href="../qunit/qunit/qunit.css">
        <script src="../qunit/qunit/qunit.js"></script>

        <!-- Library scripts: -->
        <script type="text/javascript" src="../../src/bootstrap.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/standard_defines.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/Superglobals.js?<?php echo rand(1234567,98765432) ?>"></script>

        <script type="text/javascript" src="../../src/Core_c/Exception.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/Core_c/stdClass.js?<?php echo rand(1234567,98765432) ?>"></script>

        <script type="text/javascript" src="../../src/standard_0/__PHP_Incomplete_Class.js?<?php echo rand(1234567,98765432) ?>"></script>

        <script type="text/javascript" src="../../src/standard_1/nl2br.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/standard_1/str_repeat.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/standard_1/strtolower.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/standard_1/strtoupper.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/standard_1/strrev.js?<?php echo rand(1234567,98765432) ?>"></script>

        <script type="text/javascript" src="../../src/standard_3/pi.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/standard_3/base64_encode.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/standard_3/base64_decode.js?<?php echo rand(1234567,98765432) ?>"></script>

        <script type="text/javascript" src="../../src/standard_4/print_r.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/standard_4/var_dump.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/standard_4/serialize.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/standard_4/unserialize.js?<?php echo rand(1234567,98765432) ?>"></script>

        <script type="text/javascript" src="../../src/standard_5/strval.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/standard_5/intval.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/standard_5/floatval.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/standard_5/doubleval.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/standard_5/gettype.js?<?php echo rand(1234567,98765432) ?>"></script>

        <script type="text/javascript" src="../../src/standard_8/array_unshift.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/standard_8/array_shift.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/standard_8/array_pop.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/standard_8/array_push.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/standard_8/array_fill.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="../../src/standard_8/shuffle.js?<?php echo rand(1234567,98765432) ?>"></script>

        <script type="text/javascript" src="../../src/pcre.js?<?php echo rand(1234567,98765432) ?>"></script>

        <!-- Unit Tests: -->
        <script type="text/javascript" src="../data/fixtures.js?<?php echo rand(1234567,98765432) ?>"></script>

        <script type="text/javascript" src="unit/bootstrap.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="unit/bootstrap_test.js?<?php echo rand(1234567,98765432) ?>"></script>

        <script type="text/javascript" src="unit/standard_defines.php.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="unit/Superglobals.php.js?<?php echo rand(1234567,98765432) ?>"></script>

        <script type="text/javascript" src="unit/Core_c.php.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="unit/standard_0.php.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="unit/standard_1.php.js?<?php echo rand(1234567,98765432) ?>"></script>
        <!--<script type="text/javascript" src="unit/standard_2.php.js?<?php echo rand(1234567,98765432) ?>"></script>-->
        <script type="text/javascript" src="unit/standard_3.php.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="unit/standard_4.php.js?<?php echo rand(1234567,98765432) ?>"></script>
        <script type="text/javascript" src="unit/standard_5.php.js?<?php echo rand(1234567,98765432) ?>"></script>
        <!--<script type="text/javascript" src="unit/standard_6.php.js?<?php echo rand(1234567,98765432) ?>"></script>-->
        <!--<script type="text/javascript" src="unit/standard_7.php.js?<?php echo rand(1234567,98765432) ?>"></script>-->
        <script type="text/javascript" src="unit/standard_8.php.js?<?php echo rand(1234567,98765432) ?>"></script>
        <!--<script type="text/javascript" src="unit/standard_9.php.js?<?php echo rand(1234567,98765432) ?>"></script>-->
        <script type="text/javascript" src="unit/pcre.php.js?<?php echo rand(1234567,98765432) ?>"></script>
        <!--<script type="text/javascript" src="unit/date.php.js?<?php echo rand(1234567,98765432) ?>"></script>-->


    </head>
    <body>
        <div id="qunit"></div>
    </body>
</html>

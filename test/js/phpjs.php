<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>phpjs.org Unit Tests (php.full.js)</title>
    <link rel="stylesheet" href="../qunit/qunit/qunit.css">
    <script src="../qunit/qunit/qunit.js"></script>

    <!-- phpjs.org implementation: -->
    <script type="text/javascript" src="php.full.js"></script>

    <script type="text/javascript" src="../../src/bootstrap.js"></script>
    <?php include_once "tests.inc" ?>

</head>
<body>
<div id="qunit<?php echo array_key_exists('filter', $_REQUEST) ? '-tests' : '' ?>"></div>
</body>
</html>

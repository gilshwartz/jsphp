<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>php.full.js (phpjs.org) - QUnit Test Suite</title>
    <link rel="stylesheet" href="../qunit/qunit/qunit.css">
    <script src="../qunit/qunit/qunit.js"></script>

    <!-- phpjs.org implementation: -->
    <script type="text/javascript" src="php.full.js"></script>

    <script type="text/javascript" src="../../src/bootstrap.js?<?php // echo rand(1234567,98765432) ?>"></script>
    <?php include_once "tests.inc" ?>

</head>
<body>
<div id="qunit"></div>
</body>
</html>

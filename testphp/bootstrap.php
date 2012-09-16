<?php

function dummy($a, $b) {
    return $a + $b;
}

function shimmy($a, $b) {
    return $a + $b;
}

function fummy($a, $b) {
    return "AXXC";
}

set_include_path('C:/wamp/bin/php/php5.3.10/pear');
require_once('PHPUnit/Autoload.php');
require_once('PHPUnit/Framework/Util/Log/Qunit.php');

require_once dirname(__FILE__) . DIRECTORY_SEPARATOR . 'JsphpTestCase.php';
require_once dirname(__FILE__) . DIRECTORY_SEPARATOR . 'finediff.php';

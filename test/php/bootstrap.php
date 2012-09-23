<?php
error_reporting(E_ALL);
ini_set('display_errors','On');

set_include_path('C:/wamp/bin/php/php5.3.10/pear');
require_once('PHPUnit/Autoload.php');
require_once('PHPUnit/Framework/Util/Log/Qunit.php');

require_once dirname(__FILE__) . DIRECTORY_SEPARATOR . 'JsphpTestCase.php';
require_once dirname(__FILE__) . DIRECTORY_SEPARATOR . 'finediff.php';

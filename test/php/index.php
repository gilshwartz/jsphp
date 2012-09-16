<?php
require_once dirname(__FILE__) . DIRECTORY_SEPARATOR . 'bootstrap.php';

function run()
{
    $template = dirname(__FILE__) . DIRECTORY_SEPARATOR . 'phpunit.xsl';

    $files = array(
        dirname(__FILE__) . DIRECTORY_SEPARATOR . 'dummyTestx.php'
    );

    $files = glob(dirname(__FILE__) . DIRECTORY_SEPARATOR . '*Test.php');

    $testResult = new PHPUnit_Framework_TestResult();
    $listener   = new PHPUnit_Util_Log_QUnit();
    $testResult->addListener($listener);

    $suite = new PHPUnit_Framework_TestSuite('JSPHP Unit Tests (PHP)');
    $suite->addTestFiles($files);
    $result = $suite->run($testResult);


    echo "<!DOCTYPE html>\n" . $listener->getHTML($template);
}

run();


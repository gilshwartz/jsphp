<?php
require_once dirname(__FILE__) . DIRECTORY_SEPARATOR . 'bootstrap.php';

function run()
{
    $template = dirname(__FILE__) . DIRECTORY_SEPARATOR . 'phpunit.xsl';

    $files = array(
        dirname(__FILE__) . DIRECTORY_SEPARATOR . 'standard_definesTest.php',
        dirname(__FILE__) . DIRECTORY_SEPARATOR . 'SuperglobalsTest.php',
        dirname(__FILE__) . DIRECTORY_SEPARATOR . 'Core_cTest.php',
        dirname(__FILE__) . DIRECTORY_SEPARATOR . 'standard_0Test.php',
        dirname(__FILE__) . DIRECTORY_SEPARATOR . 'standard_1Test.php',
        dirname(__FILE__) . DIRECTORY_SEPARATOR . 'standard_2Test.php',
        dirname(__FILE__) . DIRECTORY_SEPARATOR . 'standard_3Test.php',
        dirname(__FILE__) . DIRECTORY_SEPARATOR . 'standard_4Test.php',
        dirname(__FILE__) . DIRECTORY_SEPARATOR . 'standard_5Test.php',
        dirname(__FILE__) . DIRECTORY_SEPARATOR . 'standard_9Test.php',
    );

//    $files = glob(dirname(__FILE__) . DIRECTORY_SEPARATOR . '*Test.php');

    $filter = false;


    if (array_key_exists("filter", $_REQUEST)) {
        $filter = "/\b" . $_REQUEST["filter"] . "\b/";
    }

    if (array_key_exists("module", $_REQUEST)) {
        $filter = "/\b" . $_REQUEST["module"] . "/";
    }

    $testResult = new PHPUnit_Framework_TestResult();
    $listener   = new PHPUnit_Util_Log_QUnit();
    $testResult->addListener($listener);

    $suite = new PHPUnit_Framework_TestSuite('JSPHP Unit Tests (PHP)');
    $suite->addTestFiles($files);
    $result = $suite->run($testResult, $filter);

    //$template = null;
    echo $listener->getHTML($template);
}

run();


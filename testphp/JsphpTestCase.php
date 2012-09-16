<?php
/**
 * Standard PHP Library Package 8 tests.
 * For JSPHP Project.
 * @author Jacek Siciarek
 */
class JsphpTestCase extends PHPUnit_Framework_TestCase
{
    protected $fixtures = array(), $module, $func;

    function runTestOnData($extra = array())
    {
        $actual = null;
        $index = 0;

        $failures = array();

        foreach ($this->fixtures as $a) {

            $isok     = array_shift($a);
            $expected = array_shift($a);
            $func     = $this->func;

            switch (count($a)) {
                case 1:
                    @$actual = $func($a[0]);
                    break;
                case 2:
                    @$actual = $func($a[0], $a[1]);
                    break;
                case 3:
                    @$actual = $func($a[0], $a[1], $a[2]);
                    break;
                case 4:
                    @$actual = $func($a[0], $a[1], $a[2], $a[3]);
                    break;
                case 5:
                    @$actual = $func($a[0], $a[1], $a[2], $a[3], $a[4]);
                    break;
                case 6:
                    @$actual = $func($a[0], $a[1], $a[2], $a[3], $a[4], $a[5]);
                    break;
                case 7:
                    // 7 is max number of arguments in standard PHP library
                    @$actual = $func($a[0], $a[1], $a[2], $a[3], $a[4], $a[5], $a[6]);
                    break;
                default:
                    @$actual = $func();
                    break;
            }

            if ($isok === false) {

                // TODO: resolve array/object JS PHP problem:
                if (preg_match("/object given$/", $expected)) {
                    $expected = preg_replace("/object given$/", "array given", $expected);
                }

                $actual = $php_errormsg;

                // On the web in warning messages are links to function manual ie.
                // str_repeat() [<a href='function.str-repeat'>function.str-repeat</a>]: Second argument has to be greater than or equal to 0
                $actual = preg_replace('/\s*\[<a.*?\]\s*/', '', $actual);

                } else {

                // TODO: resolve array/object JS PHP problem:
                if ($this->func === "gettype" and $expected === "object" and $actual === "array") {
                    $expected = "array";
                }
            }

            try {
                $this->assertEquals($expected, $actual);
            }
            catch(Exception $e) {
                $jexpected = json_encode($expected);
                $jactual = json_encode($actual);
                $fd = new FineDiff($jexpected, $jactual);
                $failures[] = implode("\n", array(
                    $jexpected,
                    $jactual,
                    $fd->renderDiffToHTML(),
                    "@file:///" . preg_replace('/\\\/', '/', __FILE__) . ":" . $e->getLine()
                ));
            }

            $index++;
        }

        if(count($failures) > 0) {
             $this->assertTrue(false, "-------------------------\n" . implode("\n-------------------------\n", $failures) . "\n-------------------------\n" );
        }
    }

    function setUp()
    {
        $fixtures_path = implode(DIRECTORY_SEPARATOR, array(dirname(__FILE__), '..', 'testjs', 'data', 'fixtures.js'));

        $prefix = 'var fixtures = ';
        $sufix  = ';';

        $content = trim(file_get_contents($fixtures_path));
        $start   = strlen($prefix);
        $end     = strlen($content) - strlen($prefix) - strlen($sufix);

        $json = trim(file_get_contents($fixtures_path, null, null, $start, $end));

        $this->module = preg_replace('/^(\w+)Test$/', '$1', get_class($this));
        $this->func   = preg_replace('/^test_?$/', '', $this->getName());

        $temp = json_decode($json, true);

        if (isset($temp[$this->module][$this->func])) {
            $this->fixtures = $temp[$this->module][$this->func];
        }
    }

    function tearDown()
    {

    }
}

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
        $index  = 0;

        $failures = array();
        $this->assertTrue(function_exists($this->func));

        foreach ($this->fixtures as $a) {

            $isok     = array_shift($a);
            $expected = array_shift($a);
            $func     = $this->func;

            for ($i = 0; $i < count($a); $i++) {
                if (gettype($a[$i]) === "string" and preg_match("/^[A-Z_]+$|^(new|function)/", strval($a[$i]))) {
                    $a[$i] = eval("return " . strval($a[$i]) . ";");
                }
            }

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
                try {
                    $actual = $php_errormsg;
                    $actual = preg_replace('/\s*\[<a.*?\]\s*/', '', $actual);
                }
                catch(Exception $e)
                {
                    $actual = $e->getMessage();

                }
            }

            try {
                $this->assertEquals($expected, $actual);
            } catch (Exception $e) {
                $jexpected  = json_encode($expected);
                $jactual    = json_encode($actual);
                $fd         = new FineDiff($jexpected, $jactual);
                $failures[] = implode("\n", array(
                    $jexpected,
                    $jactual,
                    $fd->renderDiffToHTML(),
                    "@file:///" . preg_replace('/\\\/', '/', __FILE__) . ":" . $e->getLine()
                ));
            }

            $index++;
        }

        if (count($failures) > 0) {
            $this->assertTrue(false, "-------------------------\n" . implode("\n-------------------------\n", $failures) . "\n-------------------------\n");
        }
    }

    public function variablesTestDataProvider()
    {
        $module = preg_replace('/^(\w+)Test$/', '$1', get_class($this));

        $fixtures_path = implode(DIRECTORY_SEPARATOR, array(dirname(__FILE__), '..', 'data', 'variables-fixtures.js'));

        $prefix = 'var variables_fixtures = ';
        $sufix  = ';';

        $content = trim(file_get_contents($fixtures_path));
        $start   = strlen($prefix);
        $end     = strlen($content) - strlen($prefix) - strlen($sufix);

        $json = trim(file_get_contents($fixtures_path, null, null, $start, $end));


        $json = preg_replace('|//.*?\n|', '', $json);

        $temp = json_decode($json, true);

        $fixtures = array();

        if (isset($temp[$module])) {
            $fixtures = $temp[$module];
        }

        return $fixtures;
    }

    function setUp()
    {
        $fixtures_path = implode(DIRECTORY_SEPARATOR, array(dirname(__FILE__), '..', 'data', 'fixtures.js'));

        $prefix = 'var fixtures = ';
        $sufix  = ';';

        $content = trim(file_get_contents($fixtures_path));
        $start   = strlen($prefix);
        $end     = strlen($content) - strlen($prefix) - strlen($sufix);

        $json = trim(file_get_contents($fixtures_path, null, null, $start, $end));

        $this->module = preg_replace('/^(\w+)Test$/', '$1', get_class($this));
        $this->func   = preg_replace('/^test_?$/', '', $this->getName());

        $json = preg_replace('|//.*?\n|', '', $json);

        $temp = json_decode($json, true);

        if (isset($temp[$this->module][$this->func])) {
            $this->fixtures = $temp[$this->module][$this->func];
        }
    }

    function tearDown()
    {

    }
}

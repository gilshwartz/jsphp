<?php
/**
 * Unit Tests of Standard PHP Library Superglobals.
 * For JSPHP Project.
 * @author Jacek Siciarek
 */
class SuperglobalsTest extends JsphpTestCase
{
    function setUp() {

    }

    /**
     * @test
     * @dataProvider variablesTestDataProvider
     */
    function defined($name, $value) {
        // Not available without session_start():
        $_SESSION = array();

        // Not available without real POST request:
        $HTTP_RAW_POST_DATA = true;
        $http_response_header = true;

        // Not available in web context:
        $argc = 1;
        $argv = array();

        @print_r(); // for $php_errormsg check
        $check = sprintf("return isset(%s);", $name);
        $this->assertTrue(eval($check));
    }
}

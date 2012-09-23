<?php
/**
 * Unit Tests of Standard PHP Library Package Core c.
 * For JSPHP Project.
 * @author Jacek Siciarek
 */
class standard_definesTest extends JsphpTestCase
{
    function setUp() {

    }

    /**
     * @test
     * @dataProvider variablesTestDataProvider
     */
    function defined($name, $value) {
        $this->assertTrue(defined($name));
        $this->assertTrue(eval(sprintf("return %s === %s;", $name, $value)));
    }
}

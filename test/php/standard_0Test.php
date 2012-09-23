<?php
/**
 * Unit Tests of Standard PHP Library Package #0.
 * For JSPHP Project.
 * @author Jacek Siciarek
 */
class standard_0Test extends JsphpTestCase
{
    /**
     * @test
     */
    function __PHP_Incomplete_Class() {
        $class = $this->getName();
        $this->assertTrue(class_exists($class));
        // Duplicated for compatibility with JavaScript test
        $this->assertTrue(class_exists($class));

        try {
            $obj = new $class();
            $str = "" . $obj;
            $this->fail("No exception was thrown.");
        }
        catch(Exception $e) {
            $this->assertEquals($e->getMessage(), "Object of class " . $class . " could not be converted to string");
        }
    }
}

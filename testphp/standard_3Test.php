<?php
/**
 * Unit Tests of Standard PHP Library Package #3.
 * For JSPHP Project.
 * @author Jacek Siciarek
 */
class standard_3Test extends JsphpTestCase
{
    /**
     * @test
     */
    function pi()
    {
        $this->runTestOnData();
    }

    /**
     * @test
     */
    function base64_encode()
    {
        $this->runTestOnData();
    }

    /**
     * @test
     */
    function base64_decode()
    {
        $this->runTestOnData();
    }
}

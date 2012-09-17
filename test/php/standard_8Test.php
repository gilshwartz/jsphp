<?php
/**
 * Unit Tests of Standard PHP Library Package #8.
 * For JSPHP Project.
 * @author Jacek Siciarek
 */
class standard_8Test extends JsphpTestCase
{
    /**
     * @test
     */
    function array_unshift()
    {
        $this->runTestOnData();
    }

    /**
     * @test
     */
    function array_shift()
    {
        $this->runTestOnData();
    }

    /**
     * @test
     */
    function array_pop()
    {
        $this->runTestOnData();
    }

    /**
     * @test
     */
    function array_push()
    {
        $this->runTestOnData();
        $input = array(1, 2, 3, 4, 5);
        $temp  = array(1, 2, 3, 4, 5);

        $this->assertEquals($input, $temp);
        array_push($input, 6);
        $this->assertNotEquals($input, $temp);
    }

    /**
     * @test
     */
    function shuffle()
    {
        $this->runTestOnData();
    }

    /**
     * @test
     */
    function array_fill()
    {
        $this->runTestOnData();
    }
}

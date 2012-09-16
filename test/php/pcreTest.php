<?php
/**
 * Unit Tests of Standard PHP Library Package PCRE.
 * For JSPHP Project.
 * @author Jacek Siciarek
 */
class pcreTest extends JsphpTestCase
{
    /**
     * @test
     */
    function preg_match()
    {
        $this->runTestOnData();
    }

    /**
     * @test
     */
    function preg_match_all()
    {
        $this->runTestOnData();
    }

    /**
     * @test
     */
    function preg_replace()
    {
        $this->runTestOnData();
    }
}

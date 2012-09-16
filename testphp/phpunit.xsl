<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="html" media-type="text/html" omit-xml-declaration="yes" indent="no"/>

    <xsl:template name="okays">
        <xsl:param name="count"/>
        <xsl:param name="message" select="'okay'"/>
        <xsl:param name="ouptut" select="''"/>

        <xsl:if test="$count &gt; 0">
            <xsl:call-template name="okays">
                <xsl:with-param name="count" select="$count - 1"/>
                <xsl:with-param name="message" select="$message"/>
            </xsl:call-template>
        </xsl:if>

        <li class="pass">
            <xsl:value-of select="$message"/>
        </li>
    </xsl:template>

    <xsl:template match="/">
        <xsl:variable name="title" select="/testsuites/testsuite/@name"/>

        <xsl:variable name="title-icon">
            <xsl:if test="/testsuites/testsuite/@failures = 0">
                <xsl:value-of select="'✔'"/>
            </xsl:if>
            <xsl:if test="/testsuites/testsuite/@failures &gt; 0">
                <xsl:value-of select="'✖'"/>
            </xsl:if>
        </xsl:variable>

        <html>
            <head>
                <title>
                    <xsl:value-of select="concat($title-icon, ' ', $title)"/>
                </title>

                <link rel="stylesheet" href="http://code.jquery.com/qunit/qunit-git.css"/>
                <script type="text/javascript" src="http://code.jquery.com/jquery.min.js"/>
                <script type="text/javascript">
                    <![CDATA[
$(document).ready(function () {
    $("#qunit-userAgent").html(navigator.userAgent);

    $("#qunit-filter-pass").change(function() {
        $("li.pass").toggle();
    });

    $("span.module-name, span.test-name, b.counts").click(function() {
         $(this).parent().siblings("ol").toggle();
    });
});
]]>
                </script>

            </head>

            <body>
                <div id="qunit">
                    <h1 id="qunit-header">
                        <a href="/testphp">
                            <xsl:value-of select="$title"/>
                        </a>
                    </h1>

                    <xsl:apply-templates/>

                    <ol id="qunit-tests">

                        <xsl:for-each select="/testsuites/testsuite/testsuite">

                            <xsl:variable name="module-name">
                                <xsl:if test="'Test' = substring(@name, string-length(@name) - string-length('Test') + 1, string-length(@name))">
                                    <xsl:value-of
                                            select="substring(@name, 1, string-length(@name) - string-length('Test'))"/>
                                </xsl:if>
                                <xsl:if test="'Test' != substring(@name, string-length(@name) - string-length('Test') + 1, string-length(@name))">
                                    <xsl:value-of
                                            select="@name"/>
                                </xsl:if>
                            </xsl:variable>

                            <xsl:for-each select="testcase">

                                <xsl:if test="@assertions &gt; 0">

                                    <xsl:variable name="test-name">
                                        <xsl:if test="starts-with(@name, 'test_') = true()">
                                            <xsl:value-of
                                                    select="substring(@name, string-length('test_') + 1, string-length(@name))"/>
                                        </xsl:if>
                                        <xsl:if test="starts-with(@name, 'test_') = false()">
                                            <xsl:if test="starts-with(@name, 'test') = true()">
                                                <xsl:value-of
                                                        select="substring(@name, string-length('test') + 1, string-length(@name))"/>
                                            </xsl:if>
                                            <xsl:if test="starts-with(@name, 'test') = false()">
                                                <xsl:value-of select="@name"/>
                                            </xsl:if>
                                        </xsl:if>
                                    </xsl:variable>

                                    <xsl:variable name="failures">
                                        <xsl:value-of select="count(failure)"/>
                                    </xsl:variable>

                                    <xsl:element name="li">
                                        <xsl:attribute name="class">
                                            <xsl:if test="$failures = 0">
                                                <xsl:value-of select="'pass'"/>
                                            </xsl:if>
                                            <xsl:if test="$failures &gt; 0">
                                                <xsl:value-of select="'fail'"/>
                                            </xsl:if>
                                        </xsl:attribute>

                                        <strong>
                                            <span class="module-name">
                                                <xsl:value-of select="$module-name"/>
                                            </span>
                                            <xsl:value-of select="': '"/>
                                            <span class="test-name">
                                                <xsl:value-of select="$test-name"/>
                                            </span>

                                            <b class="counts">
                                                <xsl:value-of select="' ('"/>
                                                <b class="failed">
                                                    <xsl:value-of select="$failures"/>
                                                </b>
                                                <xsl:value-of select="', '"/>
                                                <b class="passed">
                                                    <xsl:value-of select="@assertions - $failures"/>
                                                </b>
                                                <xsl:value-of select="', '"/>
                                                <xsl:value-of select="@assertions"/>
                                                <xsl:value-of select="')'"/>
                                            </b>

                                        </strong>

                                        <a href="/testphp">Rerun</a>

                                        <xsl:element name="ol">

                                            <xsl:if test="$failures = 0">
                                                <xsl:attribute name="style">
                                                    <xsl:value-of select="'display:none'"/>
                                                </xsl:attribute>


                                                <xsl:call-template name="okays">
                                                    <xsl:with-param name="count" select="@assertions - 1"/>
                                                </xsl:call-template>

                                            </xsl:if>


                                            <xsl:if test="($failures) > 0">

                                                <xsl:for-each select="failure">

                                                    <xsl:choose>

                                                        <xsl:when test="false()">
                                                            <li class="pass">okay</li>
                                                        </xsl:when>

                                                        <xsl:otherwise>
                                                            <li class="fail">
                                                                <span class="test-message">failed</span>
                                                                <table>
                                                                    <tbody>
                                                                        <tr class="test-expected">
                                                                            <th>Expected:</th>
                                                                            <td>
                                                                                <pre>
                                                                                    <xsl:copy-of select="expected"/>
                                                                                </pre>
                                                                            </td>
                                                                        </tr>
                                                                        <tr class="test-actual">
                                                                            <th>Result:</th>
                                                                            <td>
                                                                                <pre>
                                                                                    <xsl:copy-of select="result"/>
                                                                                </pre>
                                                                            </td>
                                                                        </tr>
                                                                        <tr class="test-diff">
                                                                            <th>Diff:</th>
                                                                            <td>
                                                                                <pre>
                                                                                    <xsl:copy-of select="diff"/>
                                                                                </pre>
                                                                            </td>
                                                                        </tr>
                                                                        <tr class="test-source">
                                                                            <th>Source:</th>
                                                                            <td>
                                                                                <pre>
                                                                                    <xsl:copy-of select="source"/>
                                                                                </pre>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </li>
                                                        </xsl:otherwise>
                                                    </xsl:choose>

                                                </xsl:for-each>
                                            </xsl:if>
                                        </xsl:element>

                                    </xsl:element>
                                </xsl:if>
                            </xsl:for-each>

                        </xsl:for-each>

                    </ol>
                </div>
            </body>
        </html>

    </xsl:template>

    <xsl:template match="/testsuites/testsuite">
        <xsl:if test="(@errors + @failures) &gt; 0">
            <h2 id="qunit-banner" class="qunit-fail"></h2>
        </xsl:if>

        <xsl:if test="(@errors + @failures) = 0">
            <h2 id="qunit-banner" class="qunit-pass"></h2>
        </xsl:if>

        <div id="qunit-testrunner-toolbar">

            <input id="qunit-filter-pass" type="checkbox" onclick="toggleHidePassed(this)"/>
            <label for="qunit-filter-pass"
                   title="Only show tests and assertons that fail. Stored in sessionStorage.">Hide passed
                tests
            </label>
            <span>
                <input id="qunit-urlconfig-noglobals" type="checkbox"
                       title="Enabling this will test if any test introduces new properties on the `window` object. Stored as query-strings."
                       name="noglobals" disabled="disabled"/>
                <label title="Enabling this will test if any test introduces new properties on the `window` object. Stored as query-strings."
                       for="qunit-urlconfig-noglobals">Check for Globals
                </label>
                <input id="qunit-urlconfig-notrycatch" type="checkbox"
                       title="Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."
                       name="notrycatch" disabled="disabled"/>
                <label title="Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."
                       for="qunit-urlconfig-notrycatch">No try-catch
                </label>
            </span>

            <span id="qunit-modulefilter-container">
                <label for="qunit-modulefilter">Module:</label>
                <select name="modulefilter" id="qunit-modulefilter">

                    <option selected="selected" value="">&lt; All Modules &gt;</option>

                    <xsl:for-each select="/testsuites/testsuite/testsuite">

                        <xsl:variable name="module-name">
                            <xsl:if test="'Test' = substring(@name, string-length(@name) - string-length('Test') + 1, string-length(@name))">
                                <xsl:value-of
                                        select="substring(@name, 1, string-length(@name) - string-length('Test'))"/>
                            </xsl:if>
                            <xsl:if test="'Test' != substring(@name, string-length(@name) - string-length('Test') + 1, string-length(@name))">
                                <xsl:value-of
                                        select="@name"/>
                            </xsl:if>
                        </xsl:variable>

                        <option value="">
                            <xsl:value-of select="$module-name"/>
                        </option>

                    </xsl:for-each>

                </select>
            </span>
        </div>

        <h2 id="qunit-userAgent"></h2>

        <p id="qunit-testresult" class="result">Tests completed in
            <xsl:value-of select="round(@time * 1000)"/> milliseconds.
            <br/>
            <span class="passed">
                <xsl:value-of select="@assertions - @failures - @errors"/>
            </span>
            tests of
            <span class="total">
                <xsl:value-of select="@assertions"/>
            </span>
            passed,
            <span class="failed">
                <xsl:value-of select="@failures + @errors"/>
            </span>
            failed.
        </p>
    </xsl:template>
</xsl:stylesheet>


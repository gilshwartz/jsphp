@ECHO OFF

set LIB=%1
set SOURCE=%LIB%.js
set TARGET=../test/unit/%SOURCE%

echo /** > %TARGET%
echo  * %LIB% - Unit Test (QUnit)>> %TARGET%
echo  */>> %TARGET%
echo. >> %TARGET%

echo module("%LIB%", { >> %TARGET%
echo     setup: function () { >> %TARGET%
echo. >> %TARGET%
echo     }, >> %TARGET%
echo     teardown: function () { >> %TARGET%
echo. >> %TARGET%
echo     } >> %TARGET%
echo }); >> %TARGET%
echo. >> %TARGET%


cat %SOURCE% | grep "^function" | perl -ne "$_=~ s/^\S+\s([^{]+)\s*{\s*}/test('$1', function(){\n    ok(false, 'Not implemented yet.');\n}\);\n/;print $_;" >> %TARGET%

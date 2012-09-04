SRCDIR=$PWD/src
TESTDIR=$PWD/test/unit

for f in `ls -1 $SRCDIR/*.js | grep -v 'jsphp\.bootstrap\.js'`
do
    FILE=`echo $f | perl -ne '$_=~ s/\.js$//;print $_'`
    NAME=`echo $FILE | perl -ne '$_=~s|.*?([^/]+)$|$1|;print $_'`
    SOURCE=$f
    TARGET=$TESTDIR/$NAME.js

    echo '/**' > $TARGET
    echo  " * $NAME - Unit Test (QUnit)" >> $TARGET
    echo  ' */' >> $TARGET
    echo >> $TARGET

    echo "module(\"$NAME\", {" >> $TARGET
    echo     "    setup: function" \(\) { >> $TARGET
    echo. >> $TARGET
    echo     '    },' >> $TARGET
    echo     "    teardown: function" \(\) { >> $TARGET
    echo  >> $TARGET
    echo     '    }' >> $TARGET
    echo }\)\; >> $TARGET
    echo  >> $TARGET

    cat $SOURCE | grep '^function' | perl -ne '$_=~ s/^\S+\s([^{]+)\s*{\s*}?/test("$1", function(){\n    ok(false, "Not implemented yet.");\n}\);\n/;print $_;' >> $TARGET

done
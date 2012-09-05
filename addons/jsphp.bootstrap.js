var INF, NAN;
var i;

function define(name, value) {

}

function parseRegexp(func, pattern, modifiers) {

    var temp = pattern;

    if(typeof pattern === 'object') {
        temp = pattern.toString();
    }

    var sep = temp.substring(0, 1);
    var rxrx = new RegExp('^' + sep + '(.*?)' + sep + '(\\w*)$');
    var rxtemp = temp.match(rxrx);

    var rxsep = sep;
    var rxbody = rxtemp[1];
    var rxmodif = rxtemp[2];

    for (i = 0; i < rxmodif.length; i++) {
        var m = rxmodif.charAt(i);

        if (typeof modifiers[rxmodif.charAt(m)] === 'undefined') {
            throw "JSPHP Warning:  " + func + "(): Unknown modifier '" + m + "'";
        }
    }

    return new RegExp(rxbody, rxmodif);
}
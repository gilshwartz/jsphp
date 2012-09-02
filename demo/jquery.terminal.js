var endl = "\n";

function cout(string) {
    if (typeof string == 'undefined') {
        string = '';
    }

    print(string);
}

function print(string) {
    if (typeof string == 'undefined') {
        string = '';
    }

    string = string.replace(/</g, '&lt;');
    string = string.replace(/>/g, '&gt;');

    $('#terminal').append(string);
}

function println(string) {
    if (typeof string == 'undefined') {
        string = '';
    }

    print(string + endl);
}

function sep() {
    print(endl);
    print('---------------------------------------------------------------------');
    print(endl);
    print(endl);
}

$(document).ready(function () {
    var terminal = document.createElement('pre');
    terminal.setAttribute('id', 'terminal');
    terminal.setAttribute('style', 'padding:16px;background:black;color:white;font-weight:bold;');

    $('body').append(terminal);
});

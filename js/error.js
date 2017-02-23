(function ($, undefined) {

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    function sanitizeParameter(parameter) {
        return parameter.replace(/[^a-z0-9]/g, "");
    }

    var tag  = sanitizeParameter(getParameterByName("t")).substring(0, 20);
    var msg = sanitizeParameter(getParameterByName("m").substring(0, 20));

    if (tag || msg) {
        var errorStr = "<p>Virhekoodi: ";
        if (tag) {
            errorStr += tag;
            if (msg) {
                errorStr += " / " + msg;
            }
        }
        else if (msg) {
            errorStr += msg;
        }
        errorStr += "</p>";
        $('div#error-code').append(errorStr);
    }

})(jQuery);

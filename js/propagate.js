var button = document.getElementById('logout-button')
var link = document.getElementById('logout-back-link')
button.onclick = function() { window.location = button.getAttribute("link-target"); }
link.onclick = function() { window.location = link.getAttribute("link-target"); }

function isLogoutFinished() {
    return $('span.logging-out').length == 0;
}

function check_status() {
    // Check every property of the object.
    for (flag in this) {
        if (!this[flag]) {
            return false;
        }
    }
    return true;
}

// Associative array keyed by SP name. Entries are an array keyed by session key.
var sessionTracker = new Object();
var spSessionElems = $(".spresult");
for (i=0; i < spSessionElems.length; i++) {
    spTracker = new Object();
    spTracker.status = check_status;
    sessionTracker[spSessionElems[i].id] = spTracker;
}

var language = idpLocalisation.getLanguage();
idpLocalisation.localise(language, '#identification-service', '/static/localisation',
'suomifi-tunnistaminen-resource-idp_uloskirjautuminen_labels');

function onLoad(src, targetRow, trackerId, sessionKey) {
    try {
        var content = src.contents().text();
        if (content && jQuery.parseJSON(content).result == "Success") {
            sessionTracker[trackerId]['_' + sessionKey] = true;
        } else {
            sessionTracker[trackerId]['_' + sessionKey] = false;
        }
    } catch (e) {
        sessionTracker[trackerId]['_' + sessionKey] = false;
    }
    targetRow.removeClass("success failure");
    if (sessionTracker[trackerId].status()) {
        $(targetRow).find("#logging-item span").removeClass("logging-out");
        $(targetRow).find("#logging-item span").addClass("logged-out").text(idpLocalisation.translate("logout__sessiot__uloskirjautuminen__valmis"));
        targetRow.addClass("service-logged-out");
    } else {
        // handle failure
    }
    if (typeof(Storage) !== "undefined") {
        var url = sessionStorage.getItem(sessionKey);
        if (url != null) {
            sessionStorage.removeItem(sessionKey);
            setTimeout(function () {
                src.prop("src", url)
            }, 1500);
        }
    }
    if (isLogoutFinished()) {
        $('#logout-button').prop("disabled", false);
        $('#logout-button').removeClass("disabled");
        $('#logout-button').hide();
        $('#reject-link').show();
    } else {
        $('#reject-link').hide();
    }
}
document.getElementById("identification-service").onload = function() {setServiceName()};

var onloadElems = $(".addonload");
for (var i = 0; i < onloadElems.length ; i++) {
	onloadElems[i].onload = function() { onLoad($(this), $('#' + this.getAttribute("trackerid")), this.getAttribute("trackerid"), this.getAttribute("entrykey")) }
}

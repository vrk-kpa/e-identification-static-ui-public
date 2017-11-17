(function ($) {
    $('#reject-link').click(function () {
        // add rejected input to form and submit
        var rejected = $('<input>')
            .attr('type', 'hidden')
            .attr('name', '_eventId_AttributeReleaseRejected');
        $('#attribute-form').append($(rejected)).submit();
    });
})(jQuery);

function setLanguage(lang) {
    idpLocalisation.setUserLanguage(lang);
    location.reload();
}

function setLocalisedUiFromMetadata() {
    var psUrl;
    function getLanguage() {
        var SERVER_LANG_COOKIE_NAME = 'E-Identification-Lang';
        var USER_LANG_COOKIE_NAME = 'E-Identification-Lang-User';
        var userDefinedLang = Cookies.get(USER_LANG_COOKIE_NAME);
        var serverDefinedLang = Cookies.get(SERVER_LANG_COOKIE_NAME);
        return userDefinedLang ? userDefinedLang : serverDefinedLang;
    };

    function setServiceName(language) {
        var nameElem = document.getElementById("serviceDisplayName")
        nameElem.textContent = nameElem.getAttribute("name-" + language)
    };

    function getPrivacyStatementURL(language) {
        return document.getElementById("privacyStatement").getAttribute("href-" + language);
    };

    function setPrivacyStatementURL(value) {
        document.getElementById("privacyStatement").setAttribute("href", value);
    };

    var definedLang = getLanguage();
    setServiceName(definedLang);
    psUrl = getPrivacyStatementURL(definedLang);
    if (psUrl) {
        setPrivacyStatementURL(psUrl);
    } else {
        var infoEl = document.getElementById("attribute-info");
        var privacyEl = document.getElementById("privacy");
        infoEl.removeChild(privacyEl);
    }
};

domready(function () {
    var language = idpLocalisation.getLanguage();
    idpLocalisation.localise(language, '#identification-service', '/static/localisation',
            'suomifi-tunnistaminen-resource-idp_attribute_labels');
});

document.getElementById("identification-service").onload = function() { setLocalisedUiFromMetadata() };
var rejectElem = document.getElementById("reject-link-2");
if (rejectElem) {
  rejectElem.onclick = function() { window.location = this.getAttribute("link-target") };
}

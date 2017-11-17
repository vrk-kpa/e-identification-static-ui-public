function setLanguage(lang) {
    idpLocalisation.setUserLanguage(lang);
    location.reload();
}
domready(function () {
    var language = idpLocalisation.getLanguage();
    idpLocalisation.localise(language, '#identification-service', '/static/localisation',
    'suomifi-tunnistaminen-resource-idp_uloskirjautuminen_labels');
});

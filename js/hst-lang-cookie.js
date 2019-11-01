function setLanguage(lang) {
    idpLocalisation.setUserLanguageCookie(lang);
    location.reload();
}
domready(function () {
    var language = idpLocalisation.getLanguage();
    idpLocalisation.localise(language, '#identification-service', '/static/localisation',
            'suomifi-tunnistaminen-resource-08_tunnistus_hst_labels');
});

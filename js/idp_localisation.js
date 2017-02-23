(function($, window, i18next, jqueryI18next, Cookies, undefined){
    var SERVER_LANG_COOKIE_NAME = 'E-Identification-Lang';
    var USER_LANG_COOKIE_NAME = 'E-Identification-Lang-User';
    var FALLBACK_LANGUAGE = 'fi';

    function getLangFromCookie() {
        var userDefinedLang = Cookies.get(USER_LANG_COOKIE_NAME);
        var serverDefinedLang = Cookies.get(SERVER_LANG_COOKIE_NAME);
        var definedLang = userDefinedLang ? userDefinedLang : serverDefinedLang;
        // sanity check
        if (!definedLang || definedLang.length !== 2) {
            definedLang = FALLBACK_LANGUAGE;
        }
        return definedLang;
    }
    function setUserLangCookie(language) {
        if (!language || typeof language !== "string" || language.length !== 2) {
            language = FALLBACK_LANGUAGE;
        }
        var pathElements = window.location.pathname.split('/');
        var path = pathElements.length > 1 ? '/' + pathElements[1] + '/' : '/';
        var options = {path: path, secure: true}
        Cookies.remove(USER_LANG_COOKIE_NAME, options);
        return Cookies.set(USER_LANG_COOKIE_NAME, language, options);
    }
    function localise(lang, target, localisationResourcePath, resource) {
        i18next.use(i18nextXHRBackend).init({
            lng: lang ? lang : FALLBACK_LANGUAGE,
            fallbackLng: FALLBACK_LANGUAGE,
            backend: {
                loadPath: localisationResourcePath + '/' + resource + '-{{lng}}.json',
            },
        }, function(err, t) {
            jqueryI18next.init(i18next, $, {
                tName: 't', // --> appends $.t = i18next.t
                i18nName: 'i18n', // --> appends $.i18n = i18next
                handleName: 'localize', // --> appends $(selector).localize(opts);
                selectorAttr: 'data-i18n', // selector for translating elements
                targetAttr: 'data-i18n-target', // element attribute to grab target element to translate (if diffrent then itself)
                useOptionsAttr: false, // see optionsAttr
                parseDefaultValueFromContent: false // parses default values from content ele.val or ele.text
            });
            $(target).localize();
        });
    }
    function translate(key) {
        return i18next.t(key);
    }
    var idpLocalisation = {
        getLanguage: getLangFromCookie,
        getLangFromCookie: getLangFromCookie,
        setUserLanguage: setUserLangCookie,
        localise: localise,
        translate: translate
    };
    // transport
    if ( typeof define === 'function' && define.amd ) {
      // AMD
      define( idpLocalisation );
    } else {
      // browser global
      window.idpLocalisation = idpLocalisation;
    }
})(jQuery, window, window.i18next, window.jqueryI18next, Cookies);

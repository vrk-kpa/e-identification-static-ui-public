import React from 'react';
import ReactDOM from 'react-dom';
import {I18nextProvider} from 'react-i18next';
import i18n from 'i18next';
import objectAssign from 'object-assign';
import Route from 'react-router/lib/Route';
import Router from 'react-router/lib/Router';
import Redirect from 'react-router/lib/Redirect';
import browserHistory from 'react-router/lib/browserHistory';

import Header from './header/Header.js';
import Footer from './footer/Footer.js';

import DiscoveryPage from './discoveryPage/Main.js';
import TietoapalvelustaPage from './tietoapalvelustaPage/TietoapalvelustaPage.js';
import TietosuojaselostePageMain from './tietosuojaselostePage/TietosuojaselostePageMain.js';
import FeedbackPage from './feedbackPage/FeedbackPage.js';
import FeedbackForm from './feedbackPage/FeedbackForm.js';
import ErrorFeedbackForm from './feedbackPage/ErrorFeedbackForm.js';
import ThanksPage from './feedbackPage/ThanksPage.js';
import CancelledPage from './feedbackPage/CancelledPage.js';
import NotFoundPage from './notFoundPage/NotFoundPage.js';
import InternalErrorPage from './internalErrorPage/InternalErrorPage.js';
import SessionExpiredPage from './sessionExpiredPage/SessionExpiredPage.js';
import CookiesDisabledPage from './cookiesDisabledPage/CookiesDisabledPage.js';
import EidasFormPage from './eidasFormPage/EidasFormPage.js';
import EidasCancelledPage from './eidasFormPage/RequestCancelledPage';
import EidasSentPage from './eidasFormPage/RequestSentPage';

const serverLangCookieName = 'E-Identification-Lang';
const fallbackLanguage = 'fi';
const translationResources = {
    '/sivut/info/palaute/': '22_tunnistus_palaute_labels',
    '/sivut/info/virhepalaute/': '23_tunnistus_virhepalaute_labels',
    '/sivut/info/palaute/kiitos/': '24_tunnistus_palaute_kiitos_labels',
    '/sivut/info/palaute/peruuta/': '26_tunnistus_palaute_peruuta_labels',
    '/sivut/discovery-page/': '03_tunnistus_valinta_vaihtoehto_labels',
    '/sivut/country-selection/': '03_tunnistus_valinta_vaihtoehto_labels',
    '/sivut/404/': '06_tunnistus_virhesivu_labels',
    '/sivut/500/': '07_tunnistus_virhesivu2_labels',
    '/sivut/timeout/': '25_tunnistus_istunto_vanhentunut_labels',
    '/sivut/cookie/': '27_tunnistus_evasteet_estetty_labels',
    '/sivut/eidas-form/': '28_tunnistus_eidas_palaute_labels',
    '/sivut/eidas-form/cancel/': '28_tunnistus_eidas_palaute_labels',
    '/sivut/eidas-form/sent/': '28_tunnistus_eidas_palaute_labels',
    '/sivut/info/tietoapalvelusta/': '20_tunnistus_tietoapalvelusta_labels',
    '/sivut/info/tietosuojaseloste/': '21_tunnistus_tietosuojaseloste_labels'
};



// example URL for the dev-environment's static server's localisation folder:
// https://tunnistus-dev.xyz/static/localisation/suomifi-tunnistaminen-resource-commonjson-en.json
function loadDoc(filename) {
  let xhttp = new XMLHttpRequest();
  // Obviously this URL would need to be something else in production, but the idea carries over:
  // on the static server there are or should be under /static/localisation/ folder three separate json-files,
  // corresponding to the three supported languages ('fi', 'sv', 'en') and containing key-value pairs,
  // where the key would be the element id on e.g. the Disco-page, and the value would be the translation into
  // the relevant language.
  // There should not be CORS-problems since the Disco-page is in the same domain as the static server.
  xhttp.open('GET', '/static/localisation/' + filename, false);
  xhttp.setRequestHeader('Accept', 'application/json');  //we only want a json file as response body
  xhttp.send();
  if (xhttp.status !== 200) {
    return null;
  } else {
      let json;
      try {
          json = JSON.parse(xhttp.responseText);
      } catch (e) {
        return null;
      }
      return json;
  }
}

// getTranslations is called by React-class Lang's render-function. It tries to load the json file for the (1...n)
// specified language(s); Typically, the number of languages we are searching translations for here is 1 or 2, see
// the calling code in Lang.render. If ok, non-default file also returned as array file of translated strings,
// otherwise just the array of defaultLanguage translations is returned (since that is always passed in via
// languages-parameter and the Finnish translations *should always be* found)

// Use this to get the translations for query-specified language or translations for fallback language(Finnish)
let Lang = React.createClass({
    propTypes: {
        children: React.PropTypes.object.isRequired,
        location: React.PropTypes.object.isRequired,
        params: React.PropTypes.object.isRequired
    },
    childContextTypes: {
        queryParams: React.PropTypes.object,
        lang: React.PropTypes.string.isRequired
    },
    getChildContext: function() {
        return {
            queryParams: this.props.location.query,
            lang: this.state.lang
        };
    },
    getLanguageFromCookie: function() {
        let cookies = document.cookie ? document.cookie.split('; ') : [];
        let language = null;
        let twoLetterWordPattern = new RegExp('^[a-z]{2}$');
        for (let i = 0; i < cookies.length; i++) {
            let parts = cookies[i].split('=');
            if (parts[0] === serverLangCookieName) {
                if (parts.length === 2 && twoLetterWordPattern.test(parts[1])) {
                    language = parts[1];
                }
                break;
            }
        }
        return language;
    },
    getInitialState: function() {
        let language = this.getLanguageFromCookie();
        return {
            lang: language ? language : fallbackLanguage
        };
    },
    setLanguage: function(language) {
        this.setState({lang: language});
    },
    getTranslations: function(translationResource, languages) {
        let translations = {};
        for (let i = 0; i < languages.length; i++) {
            let language = languages[i];
            let headerTranslation = loadDoc('suomifi-tunnistaminen-resource-header_labels-' + language + '.json');
            let footerTranslation = loadDoc('suomifi-tunnistaminen-resource-footer_labels-' + language + '.json');
            let translation = loadDoc('suomifi-tunnistaminen-resource-' + translationResource + '-' + language + '.json');
            if (translation) {
                let mergedTranslation = objectAssign({}, headerTranslation, translation, footerTranslation);
                translations[language] = {'translation':  mergedTranslation};
            }
        }
        return translations;
    },
    preventRootPage: function() {
        // refuse to display page from domain root, eg https://<host>
        if (!this.props.children) {
            browserHistory.push('/sivut/404');
        }
    },
    componentWillMount: function() {
        this.preventRootPage();
    },
    render: function() {
        var translations =  {};
        var languages = [fallbackLanguage];   // we always include the defaultLanguage for the call to getTranslations
        if (this.state.lang !== fallbackLanguage) {
            languages.push(this.state.lang);     // but if a non-defaultLanguage has been specified, we push that language also
        }                                 // onto the array input parameter for getTranslations
        var resource = translationResources[this.props.location.pathname];
        translations = this.getTranslations(resource, languages);
        i18n.init({                          // set up the i18n object with specified language, fallback language
            lng: this.state.lang,                   // and the translations we just retrieved
            fallbackLng: fallbackLanguage,
            resources: translations
        });

        return (
            <I18nextProvider i18n={ i18n }>
                <div>
                    <Header />
                    {this.props.children}
                    <Footer />
                </div>
            </I18nextProvider>
            );
    }
});

// Container for the React-Routing logic
let routes = (
    <Route path="/" component={Lang}>
        <Redirect from="sivut" to="/sivut/404/" />
        <Route path="/sivut/">
            <Redirect from="discovery-page/index.html" to="discovery-page/" />
            <Redirect from="country-selection/index.html" to="country-selection/" />
            <Redirect from="404/index.html" to="404/" />
            <Redirect from="500/index.html" to="500/" />
            <Redirect from="timeout/index.html" to="timeout/" />
            <Redirect from="cookie/index.html" to="cookie/" />
            <Redirect from="eidasForm/index.html" to="eidas-form/" />
            <Redirect from="discovery-page/index.html" to="discovery-page/" />
            <Redirect from="country-selection/index.html" to="country-selection/" />
            <Route path="discovery-page/" component={DiscoveryPage} />
            <Route path="country-selection/" component={DiscoveryPage} />
            <Redirect from="info" to="/sivut/404/" />
            <Route path="info/" component={FeedbackPage}>
                <Redirect from="palaute/index.html" to="palaute/" />
                <Redirect from="virhepalaute/index.html" to="virhepalaute/" />
                <Redirect from="palaute/kiitos/index.html" to="palaute/kiitos/" />
                <Redirect from="palaute/peruuta/index.html" to="palaute/peruuta/" />
                <Redirect from="tietoapalvelusta/index.html" to="tietoapalvelusta/" />
                <Redirect from="tietosuojaseloste/index.html" to="tietosuojaseloste/" />
                <Route path="palaute/" component={FeedbackForm} />
                <Route path="virhepalaute/" component={ErrorFeedbackForm} />
                <Route path="palaute/kiitos/" component={ThanksPage} />
                <Route path="palaute/peruuta/" component={CancelledPage} />
                <Route path="tietoapalvelusta/" component={TietoapalvelustaPage} />
                <Route path="tietosuojaseloste/" component={TietosuojaselostePageMain} />
            </Route>
            <Route path="404/" component={NotFoundPage} />
            <Route path="500/" component={InternalErrorPage} />
            <Route path="timeout/" component={SessionExpiredPage} />
            <Route path="cookie/" component={CookiesDisabledPage} />
            <Route path="eidas-form/" component={EidasFormPage} />
            <Route path="eidas-form/cancel" component={EidasCancelledPage} />
            <Route path="eidas-form/sent" component={EidasSentPage} />
            <Redirect from="*" to="404/" />
        </Route>
        <Redirect from="*" to="/sivut/404/" />
    </Route>
);

// This call keeps track of breadcrumbs and specifies the target html-Element
ReactDOM.render(
    <Router history={browserHistory}>{routes}</Router>,
    document.getElementById('main-container')
);

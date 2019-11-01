import React from 'react';

import Translated from '../Translated.js';
import TranslatedPaddedLink from '../TranslatedPaddedLink.js';
import TranslatedTitle from '../TranslatedTitle.js';

class TietoapalvelustaPage extends React.Component {
    componentDidMount() {
        document.title = TranslatedTitle.getTitle('tietoapalvelusta__otsikko');
    }
    render() {
        return (
            <div className="col-xs-12 col-md-10 service-info">
                <Translated tag="h1" id="tietoapalvelusta__otsikko"/>
                <Translated tag="p" id="tietoapalvelusta__1"/>
                <Translated tag="p" id="tietoapalvelusta__2"/>
                <Translated tag="h2" id="tietoapalvelusta__perusasioita__otsikko"/>
                <Translated tag="p" id="tietoapalvelusta__perusasioita__p1"/>
                <Translated tag="p" id="tietoapalvelusta__perusasioita__p2"/>
                <p>
                  <Translated tag="span" id="tietoapalvelusta__perusasioita__p3_1"/>
                  <TranslatedPaddedLink link_i18n_id="/sivut/info/tietosuojaseloste/" id="tietoapalvelusta__perusasioita__p3_2_tietosuojalinkki" content_i18n_id="tietoapalvelusta__perusasioita__p3_2_tietosuojalinkki"/>
                  <Translated tag="span" id="tietoapalvelusta__perusasioita__p3_3"/>
                </p>
                <Translated tag="p" id="tietoapalvelusta__perusasioita__p4"/>
                <Translated tag="p" id="tietoapalvelusta__perusasioita__p5"/>
                <Translated tag="h2" id="tietoapalvelusta__tekniset_vaatimukset__otsikko"/>
                <Translated tag="p" id="tietoapalvelusta__tekniset_vaatimukset__p1"/>
                <Translated tag="p" id="tietoapalvelusta__tekniset_vaatimukset__p2"/>
                <ul className="bulleted-list">
                  <Translated tag="li" id="tietoapalvelusta__tekniset_vaatimukset__evasteet"/>
                  <Translated tag="li" id="tietoapalvelusta__tekniset_vaatimukset__tls"/>
                  <Translated tag="li" id="tietoapalvelusta__tekniset_vaatimukset__javascript"/>
                </ul>
                <Translated tag="p" id="tietoapalvelusta__tekniset_vaatimukset__html5"/>
                <Translated tag="h2" id="tietoapalvelusta__kansalaisneuvonta__otsikko"/>
                <Translated tag="p" id="tietoapalvelusta__kansalaisneuvonta__p1"/>
                <p>
                  <Translated tag="span" id="tietoapalvelusta__kansalaisneuvonta__palaute_1_space"/>
                  <TranslatedPaddedLink link_i18n_id="/sivut/info/palaute/" id="tietoapalvelusta__kansalaisneuvonta__palaute_2_linkki" content_i18n_id="tietoapalvelusta__kansalaisneuvonta__palaute_2_linkki"/>
                  <Translated tag="span" id="tietoapalvelusta__kansalaisneuvonta__palaute_3_spaces"/>
                  <TranslatedPaddedLink id="tietoapalvelusta__kansalaisneuvonta__palaute_4_linkki" content_i18n_id="tietoapalvelusta__kansalaisneuvonta__palaute_4_linkki" link_i18n_id="tietoapalvelusta__kansalaisneuvonta__palaute_4_linkki_url"/>
                </p>
                <Translated tag="h2" id="tietoapalvelusta__vastuutahot__otsikko"/>
                <ul className="bulleted-list">
                  <Translated tag="li" id="tietoapalvelusta__vastuutahot__vrk"/>
                  <Translated tag="li" id="tietoapalvelusta__vastuutahot__pankkitunnisteet"/>
                  <Translated tag="li" id="tietoapalvelusta__vastuutahot__varmennekortti"/>
                  <Translated tag="li" id="tietoapalvelusta__vastuutahot__asiointipalvelu"/>
                </ul>
            </div>
        );
    };
}

export default TietoapalvelustaPage;

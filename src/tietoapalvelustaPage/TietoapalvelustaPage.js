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
                <Translated tag="h2" id="tietoapalvelusta__otsikko">Tietoa Suomi.fi-tunnistamisesta</Translated>
                <Translated tag="p" id="tietoapalvelusta__1">Suomi.fi-tunnistaminen on julkishallinnon asiointipalveluiden yhteinen tunnistuspalvelu. Palvelu mahdollistaa turvallisen sähköisen tunnistamisen.</Translated>
                <Translated tag="p" id="tietoapalvelusta__2">Ensimmäisessä vaiheessa Suomi.fi-tunnistaminen on käytössä beta.suomi.fi-palvelussa mutta sen käyttöä laajennetaan vuosina 2016-2017.</Translated>
                <Translated tag="p" id="tietoapalvelusta__3">Suomi.fi-tunnistamisesta vastaa Väestörekisterikeskus.</Translated>
                <Translated tag="h4" id="tietoapalvelusta__perusasioita__otsikko">Perusasioita käytöstä</Translated>
                <Translated tag="p" id="tietoapalvelusta__perusasioita__p1">Tunnistaudut valitsemallasi tunnistusvälineellä. </Translated>
                <Translated tag="p" id="tietoapalvelusta__perusasioita__p2">Suomi.fi-tunnistaminen varmistaa tunnistautumisen väestötietojärjestelmän tietojen perusteella. Asiointipalveluun välitetään väestötietojärjestelmästä henkilötunnus, nimi, sähköposti sekä vakituinen ja väliaikaiset osoitteet. Jos sinulle on merkitty väestötietojärjestelmään turvakielto, asiointipalvelulle välitetään tieto turvakiellosta mutta ei turvakiellon alaisia osoitetietoja.</Translated>
                <p>
                  <Translated tag="span" id="tietoapalvelusta__perusasioita__p3_1">Suomi.fi-tunnistaminen käsittelee henkilötietojasi henkilötietolain mukaisesti ja huolehtii yksityisyyden suojasta henkilötietojen käsittelyssä. Tunnistetietosi kulkevat suojatussa yhteydessä. </Translated>
                  <TranslatedPaddedLink link_i18n_id="/sivut/info/tietosuojaseloste/" id="tietoapalvelusta__perusasioita__p3_2_tietosuojalinkki" content_i18n_id="tietoapalvelusta__perusasioita__p3_2_tietosuojalinkki">Tietosuojaseloste</TranslatedPaddedLink>
                  <Translated tag="span" id="tietoapalvelusta__perusasioita__p3_3">kertoo, mitä tietoja tallennetaan tunnistuksen yhteydessä.</Translated>
                </p>
                <Translated tag="p" id="tietoapalvelusta__perusasioita__p4">Suomi.fi-tunnistamisen käyttö on maksutonta ja turvallista.</Translated>
                <Translated tag="p" id="tietoapalvelusta__perusasioita__p5">Kun käytät palvelua, sitoudut noudattamaan pankkitunnisteiden, varmennekortin ja mobiilivarmenteen käytölle asetettuja ehtoja.</Translated>
                <Translated tag="h4" id="tietoapalvelusta__tekniset_vaatimukset__otsikko">Tekniset vaatimukset</Translated>
                <Translated tag="p" id="tietoapalvelusta__tekniset_vaatimukset__p1">Palvelu on suunniteltu toimimaan sekä tietokoneen näytöllä, että mobiililaitteissa. Sitä voi käyttää erilaisilla selainohjelmilla ja niiden perusasetuksilla. Palvelun käyttö ei yleensä vaadi selainohjelman tai sen asetusten muuttamista.</Translated>
                <Translated tag="p" id="tietoapalvelusta__tekniset_vaatimukset__p2">Palvelun käyttö edellyttää, että selainohjelmassa on sallittu:</Translated>
                <ul className="bulleted-list">
                  <Translated tag="li" id="tietoapalvelusta__tekniset_vaatimukset__evasteet">istuntokohtaisten evästeiden käyttö</Translated>
                  <Translated tag="li" id="tietoapalvelusta__tekniset_vaatimukset__tls">TLS-menetelmällä suoritettava tiedon salaus</Translated>
                  <Translated tag="li" id="tietoapalvelusta__tekniset_vaatimukset__javascript">JavaScript-komentosarjojen suorittaminen</Translated>
                </ul>
                <Translated tag="p" id="tietoapalvelusta__tekniset_vaatimukset__html5">Lisäksi selainohjelmassa on oltava HTML5 tuettu.</Translated>
                <Translated tag="h4" id="tietoapalvelusta__kansalaisneuvonta__otsikko">Kansalaisneuvonta auttaa palvelun käytössä</Translated>
                <Translated tag="p" id="tietoapalvelusta__kansalaisneuvonta__p1">Jos tarvitset tukea tai apua Suomi.fi-tunnistamisen käyttämisessä, ole yhteydessä Kansalaisneuvontaan. </Translated>
                <p>
                  <Translated tag="span" id="tietoapalvelusta__kansalaisneuvonta__palaute_1_space">Voit lähettää palautetta tai kysymyksen </Translated>
                  <TranslatedPaddedLink link_i18n_id="/sivut/info/palaute/" id="tietoapalvelusta__kansalaisneuvonta__palaute_2_linkki" content_i18n_id="tietoapalvelusta__kansalaisneuvonta__palaute_2_linkki">palautelomakkeella</TranslatedPaddedLink>
                  <Translated tag="span" id="tietoapalvelusta__kansalaisneuvonta__palaute_3_spaces">tai ottaa yhteyttä puhelimella, sähköpostilla tai chat-palvelulla. Yhteystiedot osoitteessa </Translated>
                  <TranslatedPaddedLink id="tietoapalvelusta__kansalaisneuvonta__palaute_4_linkki" content_i18n_id="tietoapalvelusta__kansalaisneuvonta__palaute_4_linkki" link_i18n_id="tietoapalvelusta__kansalaisneuvonta__palaute_4_linkki_url" >www.kansalaisneuvonta.fi.</TranslatedPaddedLink>
                </p>
                <Translated tag="h4" id="tietoapalvelusta__vastuutahot__otsikko">Vastuutahot</Translated>
                <ul className="bulleted-list"><Translated tag="li" id="tietoapalvelusta__vastuutahot__vrk">Väestörekisterikeskus tuottaa palvelun ja vastaa sen kehittämisestä.</Translated>
                <Translated tag="li" id="tietoapalvelusta__vastuutahot__kansalaisneuvonta">Kansalaisneuvonta vastaa palvelun käyttäjätuesta.</Translated>
                <Translated tag="li" id="tietoapalvelusta__vastuutahot__pankkitunnisteet">Pankkitunnisteilla tunnistuksesta vastaa kukin pankki.</Translated>
                <Translated tag="li" id="tietoapalvelusta__vastuutahot__varmennekortti">Varmennekortilla olevan kansalaisvarmenteen toimivuudesta vastaa Väestörekisterikeskus.</Translated>
                <Translated tag="li" id="tietoapalvelusta__vastuutahot__mobiilivarmenne">Mobiilivarmenteella tunnistautumisesta vastaa kukin operaattori.</Translated>
                <Translated tag="li" id="tietoapalvelusta__vastuutahot__asiointipalvelu">Suomi.fi-tunnistamista hyödyntävistä asiointipalveluista vastaa niiden tarjoaja.</Translated></ul>
            </div>
        );
    };
}

export default TietoapalvelustaPage;

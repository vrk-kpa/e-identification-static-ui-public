import React from 'react';

import Translated from '../Translated.js';
import TranslatedLink from '../TranslatedLink.js';
import TranslatedTitle from '../TranslatedTitle.js';

class EidasTietosuojaselostePage extends React.Component {
    componentDidMount() {
        document.title = TranslatedTitle.getTitle('eidas-tietosuojaseloste__otsikko_h1_osa1');
    }
    render() {
        return (
            <div className="col-xs-12 col-md-10 eidas-description-of-file">
                {/* Pääotsikko */}
                <h1>
                    <Translated tag="div" id="eidas-tietosuojaseloste__otsikko_h1_osa1" className="small" />
                    <Translated tag="div" id="eidas-tietosuojaseloste__otsikko_h1_osa2"/>
                </h1>

                {/* 1. Rekisterin nimi */}
                <Translated tag="h2" id="eidas-tietosuojaseloste__rekisterin-nimi_otsikko"/>
                <Translated tag="p" id="eidas-tietosuojaseloste__rekisterin-nimi_kappale"/>

                {/* 2. Rekisterinpitäjä */}
                <Translated tag="h2" id="eidas-tietosuojaseloste__rekisterinpitaja_otsikko"/>
                <ul className="unstyled-list">
                    <Translated tag="li" id="eidas-tietosuojaseloste__rekisterinpitaja_vrk" />
                    <Translated tag="li" id="eidas-tietosuojaseloste__rekisterinpitaja_vrk-osoite" />
                    <Translated tag="li" id="eidas-tietosuojaseloste__rekisterinpitaja_vrk-yhteystiedot" />
                </ul>

                {/* 3. Yhteyshenkilö rekisteriä koskevissa asioissa */}
                <Translated tag="h2" id="eidas-tietosuojaseloste__yhteyshenkilo_otsikko"/>
                <ul className="unstyled-list">
                    <Translated tag="li" id="eidas-tietosuojaseloste__yhteyshenkilo_nimi" />
                    <Translated tag="li" id="eidas-tietosuojaseloste__yhteyshenkilo_osoite" />
                    <Translated tag="li" id="eidas-tietosuojaseloste__yhteyshenkilo_muut-yhteystiedot" />
                </ul>

                {/* 4. Tietosuojavastaava */}
                <Translated tag="h2" id="eidas-tietosuojaseloste__tietosuojavastaava_otsikko"/>
                <ul className="unstyled-list">
                    <Translated tag="li" id="eidas-tietosuojaseloste__tietosuojavastaava_nimi" />
                    <Translated tag="li" id="eidas-tietosuojaseloste__tietosuojavastaava_osoite" />
                    <Translated tag="li" id="eidas-tietosuojaseloste__tietosuojavastaava_muut-yhteystiedot" />
                </ul>

                {/* 5. Henkilörekisterin sisältämien henkilötietojen säilytysaika */}
                <Translated tag="h2" id="eidas-tietosuojaseloste__sailytysaika_otsikko"/>
                <Translated tag="p" id="eidas-tietosuojaseloste__sailytysaika_kappale"/>

                {/* 6. Henkilötietojen käsittelyn tarkoitus ja oikeusperuste */}
                <Translated tag="h2" id="eidas-tietosuojaseloste__sailytyksen-tarkoitus_otsikko"/>
                <Translated tag="p" id="eidas-tietosuojaseloste__sailytyksen-tarkoitus_kappale1"/>
                <Translated tag="p" id="eidas-tietosuojaseloste__sailytyksen-tarkoitus_kappale2"/>
                <Translated tag="p" id="eidas-tietosuojaseloste__sailytyksen-tarkoitus_kappale3"/>

                {/* 7. Rekisterin tietosisältö */}
                <Translated tag="h2" id="eidas-tietosuojaseloste__tietosisalto_otsikko"/>
                <Translated tag="p" id="eidas-tietosuojaseloste__tietosisalto_kappale1"/>
                <ul className="bulleted-list">
                    <Translated tag="li" id="eidas-tietosuojaseloste__tietosisalto_lista1-sukunimi" />
                    <Translated tag="li" id="eidas-tietosuojaseloste__tietosisalto_lista1-etunimi" />
                    <Translated tag="li" id="eidas-tietosuojaseloste__tietosisalto_lista1-syntymaaika" />
                    <Translated tag="li" id="eidas-tietosuojaseloste__tietosisalto_lista1-tunniste" />
                </ul>
                <Translated tag="p" id="eidas-tietosuojaseloste__tietosisalto_kappale2"/>
                <ul className="bulleted-list">
                    <Translated tag="li" id="eidas-tietosuojaseloste__tietosisalto_lista2-solmupisteen-tunnistetiedot" />
                    <Translated tag="li" id="eidas-tietosuojaseloste__tietosisalto_lista2-viestin-tunnistetiedot" />
                    <Translated tag="li" id="eidas-tietosuojaseloste__tietosisalto_lista2-viestin-aikaleima" />
                </ul>

                {/* 8. Säännönmukaiset tietolähteet */}
                <Translated tag="h2" id="eidas-tietosuojaseloste__tietolahteet_otsikko"/>
                <Translated tag="p" id="eidas-tietosuojaseloste__tietolahteet_kappale"/>

                {/* 9. Tietojen säännönmukaiset luovutukset */}
                <Translated tag="h2" id="eidas-tietosuojaseloste__luovutukset_otsikko"/>
                <Translated tag="p" id="eidas-tietosuojaseloste__luovutukset_kappale1"/>
                <ul className="bulleted-list">
                    <Translated tag="li" id="eidas-tietosuojaseloste__luovutukset_lista-tietoturva" />
                    <Translated tag="li" id="eidas-tietosuojaseloste__luovutukset_lista-oikeellisuus" />
                </ul>
                <Translated tag="p" id="eidas-tietosuojaseloste__luovutukset_kappale2"/>
                <Translated tag="p" id="eidas-tietosuojaseloste__luovutukset_kappale3"/>

                {/* 10. Tietojen siirto EU:n tai ETA:n ulkopuolelle */}
                <Translated tag="h2" id="eidas-tietosuojaseloste__siirto-eu-eta-ulkopuolelle_otsikko"/>
                <Translated tag="p" id="eidas-tietosuojaseloste__siirto-eu-eta-ulkopuolelle_kappale"/>

                {/* 11. Rekisterin suojauksen periaatteet */}
                <Translated tag="h2" id="eidas-tietosuojaseloste__rekisterin-suojaus_otsikko"/>
                <Translated tag="p" id="eidas-tietosuojaseloste__rekisterin-suojaus_kappale1"/>
                <Translated tag="p" id="eidas-tietosuojaseloste__rekisterin-suojaus_kappale2"/>
                <Translated tag="p" id="eidas-tietosuojaseloste__rekisterin-suojaus_kappale3"/>

                {/* 12. Mahdollisen automaattisen päätöksenteon olemassaolo */}
                <Translated tag="h2" id="eidas-tietosuojaseloste__automaattiset-paatokset_otsikko"/>
                <Translated tag="p" id="eidas-tietosuojaseloste__automaattiset-paatokset_kappale"/>

                {/* 13. Tarkastusoikeus */}
                <Translated tag="h2" id="eidas-tietosuojaseloste__tarkastusoikeus_otsikko"/>
                <Translated tag="p" id="eidas-tietosuojaseloste__tarkastusoikeus_kappale"/>

                {/* 14. Oikeus vaatia tiedon korjaamista */}
                <Translated tag="h2" id="eidas-tietosuojaseloste__tiedon-korjaaminen_otsikko"/>
                <Translated tag="p" id="eidas-tietosuojaseloste__tiedon-korjaaminen_kappale"/>

                {/* 15. Rekisteröidyn suostumuksen peruuttaminen */}
                <Translated tag="h2" id="eidas-tietosuojaseloste__suostumuksen-peruuttaminen_otsikko"/>
                <Translated tag="p" id="eidas-tietosuojaseloste__suostumuksen-peruuttaminen_kappale"/>

                {/* 16. Muut henkilötietojen käsittelyyn liittyvät rekisteröidyn oikeudet */}
                <Translated tag="h2" id="eidas-tietosuojaseloste__muut-oikeudet_otsikko"/>
                <Translated tag="p" id="eidas-tietosuojaseloste__muut-oikeudet_kappale"/>

                {/* 17. Rekisteröidyn valitusoikeus valvontaviranomaiselle */}
                <Translated tag="h2" id="eidas-tietosuojaseloste__valitusoikeus_otsikko"/>
                <Translated tag="p" id="eidas-tietosuojaseloste__valitusoikeus_kappale"/>

                {/* 18. Muu informaatio */}
                <Translated tag="h2" id="eidas-tietosuojaseloste__muu-informaatio_otsikko"/>
                <p>
                    <Translated tag="span" id="eidas-tietosuojaseloste__muu-informaatio_kappale-osa1" />
                    <TranslatedLink id="eidas-tietosuojaseloste__muu-informaatio_url" link_i18n_id="eidas-tietosuojaseloste__muu-informaatio_url" content_i18n_id="eidas-tietosuojaseloste__muu-informaatio_url" />
                    <Translated tag="span" id="eidas-tietosuojaseloste__muu-informaatio_kappale-osa2" />
                </p>
            </div>
        );
    }
}

export default EidasTietosuojaselostePage;

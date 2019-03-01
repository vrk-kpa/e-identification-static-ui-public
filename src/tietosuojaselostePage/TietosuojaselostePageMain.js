import React from 'react';

import Translated from '../Translated.js';
import TranslatedLink from '../TranslatedLink.js';
import TranslatedTitle from '../TranslatedTitle.js';

class TietosuojaselostePageMain extends React.Component {
    componentDidMount() {
        document.title = TranslatedTitle.getTitle('tietosuojaseloste__tietosuojaseloste_h2_otsikko');
    }
    render() {
        return (
            <div className="col-xs-12 col-md-10 description-of-file">
                <Translated tag="h1" id="tietosuojaseloste__tietosuojaseloste_h2_otsikko"/>
                <p>
                <Translated tag="span" id="tietosuojaseloste__henkilotietolain_mukainen_tietosuojaseloste"/><br/>
                <Translated tag="span" id="tietosuojaseloste__seloste_laadittu"/>
                </p>

                <Translated tag="h2" id="tietosuojaseloste__otsikko_rekisterin_nimi"/>
                <Translated tag="p" id="tietosuojaseloste__suomifi_tunnistuksen_tapahtumatietorekisteri"/>

                <Translated tag="h2" id="tietosuojaseloste__otsikko_rekisterinpitaja"/>
                <ul className="unstyled-list">
                    <Translated tag="li" id="tietosuojaseloste__rekisterinpitaja_vaestorekisterikeskus" />
                    <Translated tag="li" id="tietosuojaseloste__rekisterinpitaja_osoite" />
                    <Translated tag="li" id="tietosuojaseloste__rekisterinpitaja_puhelin_sahkoposti" />
                </ul>

                <Translated tag="h2" id="tietosuojaseloste__otsikko_yhteyshenkilo_rekisteria_koskevissa_asioissa"/>
                <ul className="unstyled-list">
                    <Translated tag="li" id="tietosuojaseloste__yhteyshenkilo_nimi" />
                    <Translated tag="li" id="tietosuojaseloste__yhteyshenkilo_osoite" />
                    <Translated tag="li" id="tietosuojaseloste__yhteyshenkilo_puhelin_sahkoposti" />
                </ul>
                <Translated tag="h2" id="tietosuojaseloste__otsikko_tietosuojavastaava"/>
                <ul className="unstyled-list">
                    <Translated tag="li" id="tietosuojaseloste__tietosuojavastaava_nimi" />
                    <Translated tag="li" id="tietosuojaseloste__tietosuojavastaava_osoite" />
                    <Translated tag="li" id="tietosuojaseloste__tietosuojavastaava_puhelin_sahkoposti" />
                </ul>

                <Translated tag="h2" id="tietosuojaseloste__otsikko_henkilorekisterin_sisaltamien_henkilotietojen_sailytysaika"/>
                <Translated tag="p" id="tietosuojaseloste__rekisterinpitaja_sailyttaa_rekisterin_tiedot"/>
                <Translated tag="p" id="tietosuojaseloste__rekisterinpitaja_sailyttaa_rekisterin_tiedot__eidas"/>

                <Translated tag="h2" id="tietosuojaseloste__otsikko_henkilotietojen_kasittelyn_tarkoitus_ja_oikeusperuste"/>
                <Translated tag="p" id="tietosuojaseloste__rekisteri_on_suomifi_tunnistuksen_tapahtumatietorekisteri"/>
                <Translated tag="p" id="tietosuojaseloste__rekisteriin_tallennettuja_tietoja_kaytetaan_suomifi_tunnistuksen_kayton_seurantaan"/>
                <Translated tag="p" id="tietosuojaseloste__otsikko_henkilotietojen_kasittelyn_tarkoitus_ja_oikeusperuste__eidas1"/>
                <Translated tag="p" id="tietosuojaseloste__otsikko_henkilotietojen_kasittelyn_tarkoitus_ja_oikeusperuste__eidas2"/>

                <Translated tag="h2" id="tietosuojaseloste__otsikko_rekisterin_tietosisalto"/>
                <Translated tag="p" id="tietosuojaseloste__tapahtumatietorekisteriin_tallennetaan_tietoja_suomifi_tunnistuksen_kaytosta"/>
                <ul className="bulleted-list">
                    <Translated tag="li" id="tietosuojaseloste__tieto_tunnistusta_pyytaneesta_asiointipalvelusta" />
                    <Translated tag="li" id="tietosuojaseloste__kayttajan_ip_osoite" />
                    <Translated tag="li" id="tietosuojaseloste__kaytetty_selain_ja_kayttojarjestelma" />
                    <Translated tag="li" id="tietosuojaseloste__tunnistustapahtumaan_liittyvat_aikaleimat" />
                    <Translated tag="li" id="tietosuojaseloste__tunnistetun_kayttajan" />
                    <ul className="bulleted-list">
                        <Translated tag="li" id="tietosuojaseloste__henkilotunnus_jos" />
                        <Translated tag="li" id="tietosuojaseloste__katso_id_jos" />
                    </ul>
                    <Translated tag="li" id="tietosuojaseloste__tieto_kaytetysta_tunnistusvalineesta" />
                    <ul className="bulleted-list">
                        <Translated tag="li" id="tietosuojaseloste__pankkitunnisteet_henkilotunnus" />
                        <Translated tag="li" id="tietosuojaseloste__mobiilivarmenteet_puhelinnumero" />
                        <Translated tag="li" id="tietosuojaseloste__henkilokortti_sahkoinen_asiointitunnus" />
                        <Translated tag="li" id="tietosuojaseloste__sosiaali__ja_terveydenhuollon_ammattikortti_valviran_myontama" />
                        <Translated tag="li" id="tietosuojaseloste__organisaatiokortit_seka_muun_sosiaali__ja_terveydenhuollon_henkiloston_varmennekortit" />
                        <Translated tag="li" id="tietosuojaseloste__tunnistetusta_kayttajasta_asiointipalvelulle_valitetty_henkilotunnus" />
                    </ul>
                </ul>
                <Translated tag="p" id="tietosuojaseloste__suomifi_tunnistus_tekee_tunnistusvalineen_palauttaman_henkilotunnuksen_perusteella"/>
                <Translated tag="p" id="tietosuojaseloste__jos_kayttajalle_on_merkitty_vaestotietojarjestelmaan_turvakielto"/>
                <Translated tag="p" id="tietosuojaseloste__mikali_tunnistautuminen_keskeytyy_tai_epaonnistuu_tunnistusvalineella"/>
                <Translated tag="p" id="tietosuojaseloste__tapahtumatietorekisteriin_tallennetaan_myos_tietoja_kayttajan_antaessa_palautetta"/>
                <ul className="bulleted-list">
                    <Translated tag="li" id="tietosuojaseloste__palautteen_antajan_ip_osoite" />
                    <Translated tag="li" id="tietosuojaseloste__selaimen_ja_kayttojarjestelman_tiedot" />
                    <Translated tag="li" id="tietosuojaseloste__kayttajan_lomakkeelle_syottamat_tiedot" />
                    <ul className="bulleted-list">
                        <Translated tag="li" id="tietosuojaseloste__nimi" />
                        <Translated tag="li" id="tietosuojaseloste__sahkopostiosoite" />
                        <Translated tag="li" id="tietosuojaseloste__palvelu_johon_on_tunnistauduttu" />
                        <Translated tag="li" id="tietosuojaseloste__kayttajan_ilmoittama_selain" />
                        <Translated tag="li" id="tietosuojaseloste__tunnistustapa" />
                        <Translated tag="li" id="tietosuojaseloste__palautteen_tai_virheilmoituksen_sisalto" />
                        <Translated tag="li" id="tietosuojaseloste__tapahtuma_aika" />
                    </ul>
                    <Translated tag="li" id="tietosuojaseloste__lomakkeen_lahettamiseen_liittyvat_aikaleimat" />
                </ul>
                <Translated tag="p" id="tietosuojaseloste__otsikko_rekisterin_tietosisalto__eidas"/>
                <ul className="bulleted-list">
                    <Translated tag="li" id="tietosuojaseloste__otsikko_rekisterin_tietosisalto__eidas_list1" />
                    <Translated tag="li" id="tietosuojaseloste__otsikko_rekisterin_tietosisalto__eidas_list2" />
                    <Translated tag="li" id="tietosuojaseloste__otsikko_rekisterin_tietosisalto__eidas_list3" />
                    <Translated tag="li" id="tietosuojaseloste__otsikko_rekisterin_tietosisalto__eidas_list4" />
                    <Translated tag="li" id="tietosuojaseloste__otsikko_rekisterin_tietosisalto__eidas_list5" />
                    <Translated tag="li" id="tietosuojaseloste__otsikko_rekisterin_tietosisalto__eidas_list6" />
                    <Translated tag="li" id="tietosuojaseloste__otsikko_rekisterin_tietosisalto__eidas_list7" />
                    <Translated tag="li" id="tietosuojaseloste__otsikko_rekisterin_tietosisalto__eidas_list8" />
                    <Translated tag="li" id="tietosuojaseloste__otsikko_rekisterin_tietosisalto__eidas_list9" />
                    <Translated tag="li" id="tietosuojaseloste__otsikko_rekisterin_tietosisalto__eidas_list10" />
                </ul>

                <Translated tag="h2" id="tietosuojaseloste__otsikko_saannonmukaiset_tietolahteet"/>
                <Translated tag="p" id="tietosuojaseloste__rekisterin_tietolahteet_ovat"/>
                <ul className="bulleted-list">
                    <Translated tag="li" id="tietosuojaseloste__vaestotietojarjestelma" />
                    <Translated tag="li" id="tietosuojaseloste__varmenteiden_hallinnointijarjestelma" />
                    <Translated tag="li" id="tietosuojaseloste__tunnistusvalineet_ja_niihin_liittyvat_tunnistuspalvelut" />
                    <Translated tag="li" id="tietosuojaseloste__suomifi_tunnistusta_hyodyntavat_asiointipalvelut" />
                    <Translated tag="li" id="tietosuojaseloste__suomifi_tunnistuksen_sahkoisen_lomakkeen_osalta_henkilon_itsensa_antamat_ja_kirjaamat_tiedot" />
                    <Translated tag="li" id="tietosuojaseloste__otsikko_saannonmukaiset_tietolahteet__eidas" />
                </ul>

                <Translated tag="h2" id="tietosuojaseloste__otsikko_tietojen_saannonmukaiset_luovutukset"/>
                <Translated tag="p" id="tietosuojaseloste__rekisterinpitaja_voi_luovuttaa_rekisterin_tietoja"/>
                <ul className="bulleted-list">
                    <Translated tag="li" id="tietosuojaseloste__asiointipalvelunsa_toimivuuden_varmistamista_tai_parantamista_varten" />
                    <Translated tag="li" id="tietosuojaseloste__tietoturvallisuudesta_huolehtimista_tai_tietoturvallisuuteen" />
                    <Translated tag="li" id="tietosuojaseloste__tietojen_kasittelyn_oikeellisuuden_osoittamiseksi" />
                </ul>
                <Translated tag="p" id="tietosuojaseloste__rekisterinpitaja_voi_lisaksi_luovuttaa_pyynnosta_rekisterin_tietoja"/>
                <Translated tag="p" id="tietosuojaseloste__tietojen_luovutus_suomifi_tunnistuksen_hyodyntajaorganisaatioille"/>
                <Translated tag="p" id="tietosuojaseloste__lisaksi_rekisterinpitaja_voi_luovuttaa_palvelun_tietoja"/>
                <ul className="bulleted-list">
                    <Translated tag="li" id="tietosuojaseloste__poliisi_esitutkinta__ja_syyttajaviranomaiselle" />
                    <Translated tag="li" id="tietosuojaseloste__tietosuojavaltuutetulle_ja__lautakunnalle_tietosuojan_valvonnan_toteuttamista_varten" />
                </ul>
                <Translated tag="p" id="tietosuojaseloste__tietoja_voidaan_luovuttaa_myos_tilastoina_tai_muutoin_siten"/>
                <Translated tag="p" id="tietosuojaseloste__lisaksi_tietoja_voidaan_muutoin_luovuttaa_lain_nojalla"/>

                <Translated tag="h2" id="tietosuojaseloste__otsikko_tietojen_siirto_eun_tai_etan_ulkopuolelle"/>
                <Translated tag="p" id="tietosuojaseloste__henkilotietoja_ei_luovuteta_eu_eta_alueen_ulkopuolelle"/>

                <Translated tag="h2" id="tietosuojaseloste__otsikko_rekisterin_suojauksen_periaatteet"/>
                <Translated tag="p" id="tietosuojaseloste__tietoaineisto_on_suojattu_tietoturvallisuudesta_ja_paasynhallinnasta_huolehtien"/>
                <Translated tag="p" id="tietosuojaseloste__rekisteri_ei_sisalla_manuaalista_aineistoa_selvitystilanteissa"/>
                <Translated tag="p" id="tietosuojaseloste__rekisterin_tietojen_kasittely_on_mahdollista_vain_henkiloille"/>

                <Translated tag="h2" id="tietosuojaseloste__otsikko_mahdollisen_automaattisen_paatoksenteon_olemassaolo"/>
                <Translated tag="p" id="tietosuojaseloste__henkilorekisterin_tietojen_perusteella_ei_suoriteta_automaattista_paatoksentekoa_tai_profilointia"/>

                <Translated tag="h2" id="tietosuojaseloste__otsikko_tarkastusoikeus"/>
                <Translated tag="p" id="tietosuojaseloste__rekisteroidylla_on_oikeus_pyytaa_rekisterinpitajalta_paasya_hanta_itseaan_koskeviin_henkilotietoihin"/>

                <Translated tag="h2" id="tietosuojaseloste__otsikko_oikeus_vaatia_tiedon_korjaamista"/>
                <Translated tag="p" id="tietosuojaseloste__ei_oikeutta_tapahtumatietojen_korjaamiseen"/>

                <Translated tag="h2" id="tietosuojaseloste__otsikko_rekisteroidyn_suostumuksen_peruuttaminen"/>
                <Translated tag="p" id="tietosuojaseloste__henkilotietojen_kasittely_ei_perustu_suostumukseen"/>

                <Translated tag="h2" id="tietosuojaseloste__otsikko_muut_henkilotietojen_kasittelyyn_liittyvat_rekisteroidyn_oikeudet"/>
                <Translated tag="p" id="tietosuojaseloste__rekisteroidylla_ei_ole_oikeutta_pyytaa_tietojensa_poistamista"/>

                <Translated tag="h2" id="tietosuojaseloste__otsikko_rekisteroidyn_valitusoikeus_valvontaviranomaiselle"/>
                <Translated tag="p" id="tietosuojaseloste__rekisteroidylla_on_oikeus_tehda_valitus_valvontaviranomaiselle_henkilotietojen_kasittelyyn_liittyen"/>


                <Translated tag="h2" id="tietosuojaseloste__otsikko_muu_informaatio"/>
                <p>
                    <Translated tag="span" id="tietosuojaseloste__tietosuojaseloste_on_nahtavilla_osoitteessa" />
                    <TranslatedLink id="tietosuojaseloste__tietosuojaseloste_on_nahtavilla_url" link_i18n_id="tietosuojaseloste__tietosuojaseloste_on_nahtavilla_url" content_i18n_id="tietosuojaseloste__tietosuojaseloste_on_nahtavilla_url" />
                    <Translated tag="span" id="tietosuojaseloste__seka_saatavilla_vaestorekisterikeskuksen_kirjaamosta" />
                </p>
            </div>
        );
    }
}

export default TietosuojaselostePageMain;

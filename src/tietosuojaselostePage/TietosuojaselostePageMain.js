import React from 'react';

import Translated from '../Translated.js';
import TranslatedLink from '../TranslatedLink.js';
import TranslatedTitle from '../TranslatedTitle.js';

const listStyleNone = {
    listStyle: 'none'
};

class TietosuojaselostePageMain extends React.Component {
    componentDidMount() {
        document.title = TranslatedTitle.getTitle('tietosuojaseloste__tietosuojaseloste_h2_otsikko');
    }
    render() {
        return (
            <div className="col-xs-12 col-md-10 description-of-file">
                <Translated tag="h2" id="tietosuojaseloste__tietosuojaseloste_h2_otsikko"/>
                <p>
                <Translated tag="span" id="tietosuojaseloste__henkilotietolain_mukainen_tietosuojaseloste"/><br/>
                <Translated tag="span" id="tietosuojaseloste__seloste_laadittu"/>
                </p>
                <Translated tag="h4" id="tietosuojaseloste__1_rekisterin_nimi"/>
                <Translated tag="p" id="tietosuojaseloste__suomifi_tunnistamisen_tapahtumatietorekisteri"/>
                <Translated tag="h4" id="tietosuojaseloste__2_rekisterinpitaja"/>
                <ul style={listStyleNone}>
                  <Translated tag="li" id="tietosuojaseloste__vaestorekisterikeskus" />
                  <Translated tag="li" id="tietosuojaseloste__vrk_katuosoite" />
                  <Translated tag="li" id="tietosuojaseloste__vrk_puhelin_nro" />
                  <Translated tag="li" id="tietosuojaseloste__vrk_kirjaamo_sahkoposti" />
                  <li><TranslatedLink id="tietosuojaseloste__vrk_www_sivu" link_i18n_id="tietosuojaseloste__vrk_www_sivu_url" content_i18n_id="tietosuojaseloste__vrk_www_sivu" /></li>
                </ul>
                <Translated tag="h4" id="tietosuojaseloste__3_yhteyshenkilo_rekisteria_koskevissa_asioissa" />
                <ul style={listStyleNone}>
                  <Translated tag="li" id="tietosuojaseloste__yhteyshenkilo__titteli" />
                  <Translated tag="li" id="tietosuojaseloste__yhteyshenkilo__nimi" />
                  <Translated tag="li" id="tietosuojaseloste__yhteyshenkilo__sahkoposti" />
                  <Translated tag="li" id="tietosuojaseloste__yhteyshenkilo__osoite" />
                </ul>
                <Translated tag="h4" id="tietosuojaseloste__4_Henkilotietojen_kasittelyn_tarkoitus"/>
                <Translated tag="p" id="tietosuojaseloste__rekisteri_on_suomifi_tunnistamisen_tapahtumatietorekisteri_"/>
                <Translated tag="p" id="tietosuojaseloste__rekisterin_tallennettuja_tietoja_kaytetaan_suomifi_tunnistamisen_kayton_seuraantaan_ja_valvontaan_virhetilanteiden_selvittamiseen_seka_mahdollisten_vaarinkaytosten_ja_tietosuojaloukkausten_selvittamiseen__rekisterin_tallennettuja_tapahtumatietoja_kaytetaan_myos_tilastointitarpeisiin"/>
                <Translated tag="h4" id="tietosuojaseloste__5_rekisterin_tietosisalto"/>
                <Translated tag="p" id="tietosuojaseloste__tapahtumatietorekisterin_tallennetaan_tietoja_suomifi_tunnistamisen_kaytosta"/>
                <ul className="bulleted-list">
                  <Translated tag="li" id="tietosuojaseloste__tunnistusta_pyytaneen_asiointipalvelun_yksiloiva_tunniste"/>
                  <Translated tag="li" id="tietosuojaseloste__tunnistusvalineen_yksiloiva_tunniste_seka_tunnistusvalineen_palauttamat_henkilotiedot_joita_voivat_olla_nimitieto_sahkoinen_asiointitunnus_ja_puhelinnumero"/>
                  <Translated tag="li" id="tietosuojaseloste__asiointipalvelulle_valitetyt_vaestotietojarjestelman_henkilotiedot"/>
                  <ul className="bulleted-list">
                  <Translated tag="li" id="tietosuojaseloste__henkilotunnus"/>
                  <Translated tag="li" id="tietosuojaseloste__nimi"/>
                  <Translated tag="li" id="tietosuojaseloste__sahkoposti"/>
                  <Translated tag="li" id="tietosuojaseloste__vakituinen_ja_valiaikaiset_osoiteet"/>
                  <Translated tag="li" id="tietosuojaseloste__tieto_mahdollisesta_turvakiellosta"/>
                  </ul>
                <Translated tag="li" id="tietosuojaseloste__tunnistustapahtumaan_liittyvat_aikaleimat"/>
                </ul>
                <Translated tag="p" id="tietosuojaseloste__jos_tunnistustapahtuma_on_hylatty_tallennetaan_tieto_hylkaamisen_syysta_"/>
                <Translated tag="p" id="tietosuojaseloste__jos_kayttajalle_on_merkitty_vaestatietojarjestelmaan_turvakielto_ei_suomifi_tunnistaminen_kasittele_turvakiellon_alaisia_tietoja"/>
                <Translated tag="p" id="tietosuojaseloste__tapahtumatietorekisteriin_tallennetaan_myos_tietoja_henkilon_antaessa_palautetta_suomifi_tunnistamisen_sahkoisella_palautelomakkeella__palaute_ohjataan_kansalaisneuvontaan_jossa_se_kasitellaan__palautelomakkeen_kayttamisesta_tallennetaan_tiedot"/>
                <ul className="bulleted-list">
                  <Translated tag="li" id="tietosuojaseloste__palautteen_antajan_ip_osoite"/>
                  <Translated tag="li" id="tietosuojaseloste__palautelomakkeella_henkilon_antamat_tiedot"/>
                  <ul className="bulleted-list">
                    <Translated tag="li" id="tietosuojaseloste__nimi_mikali_henkilo_on_sen_antanut"/>
                    <Translated tag="li" id="tietosuojaseloste__sahkopostiosoite_mikali_henkilo_on_sen_antanut"/>
                    <Translated tag="li" id="tietosuojaseloste__palvelu_johon_on_tunnistauduttu"/>
                    <Translated tag="li" id="tietosuojaseloste__selain_jota_on_kaytetty"/>
                    <Translated tag="li" id="tietosuojaseloste__tunnistustapa_jota_on_kaytetty"/>
                    <Translated tag="li" id="tietosuojaseloste__palautteen_sisalto"/>
                    </ul>
                  <Translated tag="li" id="tietosuojaseloste__palautelomakkeen_lahettamiseen_liittyvat_aikaleimat"/>
                </ul>
                <Translated tag="h4" id="tietosuojaseloste__6_saannonmukaiset_tietolahteet"/>
                <Translated tag="p" id="tietosuojaseloste__rekisterin_tietolahteet_ovat"/>
                <ul className="bulleted-list">
                <Translated tag="li" id="tietosuojaseloste__vaestotietojarjestelma"/>
                <Translated tag="li" id="tietosuojaseloste__tunnistusvalineet"/>
                <Translated tag="li" id="tietosuojaseloste__suomifi_tunnistamista_hyodyntavat_asiointipalvelut"/>
                <Translated tag="li" id="tietosuojaseloste__suomifi_tunnistamisen_sahkoisen_palautelomakkeen_osalta_henkilon_itsensa_antamat_ja_kirjaamat_tiedot"/>
                </ul>
                <Translated tag="p" id="tietosuojaseloste__lisaksi_rekisteriin_tallennetaan_suomifi_tunnistamisen_kaytosta_syntyvia_tietoja"/>
                <Translated tag="h4" id="tietosuojaseloste__7_saannonmukaiset_luovutukset"/>
                <Translated tag="p" id="tietosuojaseloste__rekisterinpitaja_voi_luovuttaa_palvelun_tietoja"/>
                <ol className="bulleted-list">
                  <Translated tag="li" id="tietosuojaseloste__poliisi__esitutkinta__ja_syyttajaviranomaiselle_seka_tuomioistuimelle_rikoksen_ehkaisemista_ja_selvittamista_varten_"/>
                  <Translated tag="li" id="tietosuojaseloste__tietosuojavaltuutetulle_ja__lautakunnalle_tietosuojan_valvonnan_toteuttamista_varten_"/>
                  <Translated tag="li" id="tietosuojaseloste__henkilolle__jonka_palvelun_kaytosta_tiedot_on_tallennettu_noudattaen_soveltuvin_osin_viranomaisten_toiminnan_julkisuudesta_annetun_lain_11_ja_12n_saannoksia_"/>
                  <Translated tag="li" id="tietosuojaseloste__muuta_yksiloitya_tarkoitusta_varten__jos_henkilö__jonka_palvelun_kaytosta_tiedot_on_tallennettu__on_antanut_tahan_nimenomaisen_suostumuksensa"/>
                </ol>
                <Translated tag="p" id="tietosuojaseloste__lisaksi_tietoja_voidaan_luovuttaa_virheselvittelytilanteissa_suomifi_tunnistamista_hyodyntavien_asiointipalveluiden_yllapitajille_henkilotietolain_vaatimukset_huomioiden__tietoja_voidaan_luovuttaa_myos_tilastoina_tai_muutoin_siten__etta_yksittaiset_henkilot_eivat_ole_tunnistettavissa"/>
                <Translated tag="h4" id="tietosuojaseloste__8_tietojen_siirto_eun_tai_etan_ulkopuolella"/>
                <Translated tag="p" id="tietosuojaseloste__rekisterinpitaja_ei_luovuta_tietoja_eun_tai_Euroopan_talousalueen_ulkopuolelle"/>
                <Translated tag="h4" id="tietosuojaseloste__9_rekisterin_suojauksen_periaatteet"/>
                <Translated tag="p" id="tietosuojaseloste__selvitystilanteihin_liittyvien_rekisterin_tietojen_tarkastelusta_muodostuva_manuaalinen_aineisto_on_suojattu_tietoturvallisuudesta_huolehtien_lainsaadannossa_edellytetylla_tavalla"/>
                <Translated tag="p" id="tietosuojaseloste__suomifi_tunnistamisen_tapahtumatiedoston_tiedot_on_suojattu_tietoturvallisuudesta_huolehtien_lainsaadannossa_edellytetylla_tavalla"/>
                <Translated tag="p" id="tietosuojaseloste__tapahtumatietorekisterin_tietojen_kasittely_on_mahdollista_vain_henkiloille__joiden_tehtaviin_se_kuuluu"/>
                <Translated tag="h4" id="tietosuojaseloste__10_tarkastusoikeus"/>
                <Translated tag="p" id="tietosuojaseloste__rekisteroidylla_on_omien_tietojen_tarkastusoikeus__tarkastuspyynto_lahetetaan_kirjallisena_rekisterin_yhteyshenkilolle"/>
                <Translated tag="h4" id="tietosuojaseloste__11_oikeus_vaatia_tiedon_korjaamista"/>
                <Translated tag="p" id="tietosuojaseloste__ei_oikeutta_tiedon_korjaamiseen"/>
                <Translated tag="h4" id="tietosuojaseloste__12_muut_henkilotietojen_kasittelyyn_liittyvat_oikeudet"/>
                <Translated tag="p" id="tietosuojaseloste__rekisteroidylla_ei_ole_muita_henkilotietojen_kasittelyyn_liittyvia_oikeuksia"/>
            </div>
        );
    }
}

export default TietosuojaselostePageMain;

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
                <Translated tag="h2" id="tietosuojaseloste__tietosuojaseloste_h2_otsikko">Tietosuojaseloste</Translated>
                <p>
                <Translated tag="span" id="tietosuojaseloste__henkilotietolain_mukainen_tietosuojaseloste">Henkilötietolain mukainen tietosuojaseloste</Translated><br/>
                <Translated tag="span" id="tietosuojaseloste__seloste_laadittu">Laadittu: 16.12.2015</Translated>
                </p>
                <Translated tag="h4" id="tietosuojaseloste__1_rekisterin_nimi">1. Rekisterin nimi</Translated>
                <Translated tag="p" id="tietosuojaseloste__suomifi_tunnistamisen_tapahtumatietorekisteri">Suomi.fi-tunnistamisen tapahtumatietorekisteri</Translated>
                <Translated tag="h4" id="tietosuojaseloste__2_rekisterinpitaja">2. Rekisterinpitäjä</Translated>
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
                <Translated tag="h4" id="tietosuojaseloste__4_Henkilotietojen_kasittelyn_tarkoitus">4. Henkilötietojen käsittelyn tarkoitus</Translated>
                <Translated tag="p" id="tietosuojaseloste__rekisteri_on_suomifi_tunnistamisen_tapahtumatietorekisteri_">Rekisteri on Suomi.fi-tunnistamisen tapahtumatietorekisteri. </Translated>
                <Translated tag="p" id="tietosuojaseloste__rekisterin_tallennettuja_tietoja_kaytetaan_suomifi_tunnistamisen_kayton_seuraantaan_ja_valvontaan_virhetilanteiden_selvittamiseen_seka_mahdollisten_vaarinkaytosten_ja_tietosuojaloukkausten_selvittamiseen__rekisterin_tallennettuja_tapahtumatietoja_kaytetaan_myos_tilastointitarpeisiin">Rekisteriin tallennettuja tietoja käytetään Suomi.fi-tunnistamisen käytön seurantaan ja valvontaan, virhetilanteiden selvittämiseen sekä mahdollisten väärinkäytösten ja tietosuojaloukkausten selvittämiseen. Rekisteriin tallennettuja tapahtumatietoja käytetään myös tilastointitarpeisiin.</Translated>
                <Translated tag="h4" id="tietosuojaseloste__5_rekisterin_tietosisalto">5. Rekisterin tietosisältö</Translated>
                <Translated tag="p" id="tietosuojaseloste__tapahtumatietorekisterin_tallennetaan_tietoja_suomifi_tunnistamisen_kaytosta">Tapahtumatietorekisteriin tallennetaan tietoja Suomi.fi-tunnistamisen käytöstä:</Translated>
                <ul className="bulleted-list">
                  <Translated tag="li" id="tietosuojaseloste__tunnistusta_pyytaneen_asiointipalvelun_yksiloiva_tunniste">Tunnistusta pyytäneen asiointipalvelun yksilöivä tunniste</Translated>
                  <Translated tag="li" id="tietosuojaseloste__tunnistusvalineen_yksiloiva_tunniste_seka_tunnistusvalineen_palauttamat_henkilotiedot_joita_voivat_olla_nimitieto_sahkoinen_asiointitunnus_ja_puhelinnumero">Tunnistusvälineen yksilöivä tunniste sekä tunnistusvälineen palauttamat henkilötiedot, joita voivat olla nimitieto, sähköinen asiointitunnus ja puhelinnumero.</Translated>
                  <Translated tag="li" id="tietosuojaseloste__asiointipalvelulle_valitetyt_vaestotietojarjestelman_henkilotiedot">Asiointipalvelulle välitetyt väestötietojärjestelmän henkilötiedot:</Translated>
                  <ul className="bulleted-list">
                  <Translated tag="li" id="tietosuojaseloste__henkilotunnus">henkilötunnus</Translated>
                  <Translated tag="li" id="tietosuojaseloste__nimi">nimi</Translated>
                  <Translated tag="li" id="tietosuojaseloste__sahkoposti">sähköposti</Translated>
                  <Translated tag="li" id="tietosuojaseloste__vakituinen_ja_valiaikaiset_osoiteet">vakituinen ja väliaikaiset osoitteet</Translated>
                  <Translated tag="li" id="tietosuojaseloste__tieto_mahdollisesta_turvakiellosta">tieto mahdollisesta turvakiellosta</Translated>
                  </ul>
                <Translated tag="li" id="tietosuojaseloste__tunnistustapahtumaan_liittyvat_aikaleimat">Tunnistustapahtumaan liittyvät aikaleimat</Translated>
                </ul>
                <Translated tag="p" id="tietosuojaseloste__jos_tunnistustapahtuma_on_hylatty_tallennetaan_tieto_hylkaamisen_syysta_">Jos tunnistustapahtuma on hylätty, tallennetaan tieto hylkäämisen syystä. </Translated>
                <Translated tag="p" id="tietosuojaseloste__jos_kayttajalle_on_merkitty_vaestatietojarjestelmaan_turvakielto_ei_suomifi_tunnistaminen_kasittele_turvakiellon_alaisia_tietoja">Jos käyttäjälle on merkitty väestötietojärjestelmään turvakielto, ei Suomi.fi-tunnistaminen käsittele turvakiellon alaisia tietoja.</Translated>
                <Translated tag="p" id="tietosuojaseloste__tapahtumatietorekisteriin_tallennetaan_myos_tietoja_henkilon_antaessa_palautetta_suomifi_tunnistamisen_sahkoisella_palautelomakkeella__palaute_ohjataan_kansalaisneuvontaan_jossa_se_kasitellaan__palautelomakkeen_kayttamisesta_tallennetaan_tiedot">Tapahtumatietorekisteriin tallennetaan myös tietoja henkilön antaessa palautetta Suomi.fi-tunnistamisen sähköisellä palautelomakkeella. Palaute ohjataan Kansalaisneuvontaan, jossa se käsitellään. Palautelomakkeen käyttämisestä tallennetaan tiedot:</Translated>
                <ul className="bulleted-list">
                  <Translated tag="li" id="tietosuojaseloste__palautteen_antajan_ip_osoite">Palautteen antajan ip-osoite</Translated>
                  <Translated tag="li" id="tietosuojaseloste__palautelomakkeella_henkilon_antamat_tiedot">Palautelomakkeella henkilön antamat tiedot:</Translated>
                  <ul className="bulleted-list">
                    <Translated tag="li" id="tietosuojaseloste__nimi_mikali_henkilo_on_sen_antanut">nimi, mikäli henkilö on sen antanut</Translated>
                    <Translated tag="li" id="tietosuojaseloste__sahkopostiosoite_mikali_henkilo_on_sen_antanut">sähköpostiosoite, mikäli henkilö on sen antanut</Translated>
                    <Translated tag="li" id="tietosuojaseloste__palvelu_johon_on_tunnistauduttu">palvelu, johon on tunnistauduttu</Translated>
                    <Translated tag="li" id="tietosuojaseloste__selain_jota_on_kaytetty">selain, jota on käytetty</Translated>
                    <Translated tag="li" id="tietosuojaseloste__tunnistustapa_jota_on_kaytetty">tunnistustapa, jota on käytetty</Translated>
                    <Translated tag="li" id="tietosuojaseloste__palautteen_sisalto">palautteen sisältö</Translated>
                    </ul>
                  <Translated tag="li" id="tietosuojaseloste__palautelomakkeen_lahettamiseen_liittyvat_aikaleimat">Palautelomakkeen lähettämiseen liittyvät aikaleimat</Translated>
                </ul>
                <Translated tag="h4" id="tietosuojaseloste__6_saannonmukaiset_tietolahteet">6. Säännönmukaiset tietolähteet</Translated>
                <Translated tag="p" id="tietosuojaseloste__rekisterin_tietolahteet_ovat">Rekisterin tietolähteet ovat:</Translated>
                <ul className="bulleted-list">
                <Translated tag="li" id="tietosuojaseloste__vaestotietojarjestelma">väestötietojärjestelmä</Translated>
                <Translated tag="li" id="tietosuojaseloste__tunnistusvalineet">tunnistusvälineet</Translated>
                <Translated tag="li" id="tietosuojaseloste__suomifi_tunnistamista_hyodyntavat_asiointipalvelut">Suomi.fi-tunnistamista hyödyntävät asiointipalvelut</Translated>
                <Translated tag="li" id="tietosuojaseloste__suomifi_tunnistamisen_sahkoisen_palautelomakkeen_osalta_henkilon_itsensa_antamat_ja_kirjaamat_tiedot">Suomi.fi-tunnistamisen sähköisen palautelomakkeen osalta henkilön itsensä antamat ja kirjaamat tiedot</Translated>
                </ul>
                <Translated tag="p" id="tietosuojaseloste__lisaksi_rekisteriin_tallennetaan_suomifi_tunnistamisen_kaytosta_syntyvia_tietoja">Lisäksi rekisteriin tallennetaan Suomi.fi-tunnistamisen käytöstä syntyviä tietoja.</Translated>
                <Translated tag="h4" id="tietosuojaseloste__7_saannonmukaiset_luovutukset">7. Tietojen säännönmukaiset luovutukset</Translated>
                <Translated tag="p" id="tietosuojaseloste__rekisterinpitaja_voi_luovuttaa_palvelun_tietoja">Rekisterinpitäjä voi luovuttaa palvelun tietoja:</Translated>
                <ol className="bulleted-list">
                  <Translated tag="li" id="tietosuojaseloste__poliisi__esitutkinta__ja_syyttajaviranomaiselle_seka_tuomioistuimelle_rikoksen_ehkaisemista_ja_selvittamista_varten_">poliisi-, esitutkinta- ja syyttäjäviranomaiselle sekä tuomioistuimelle rikoksen ehkäisemistä ja selvittämistä varten;</Translated>
                  <Translated tag="li" id="tietosuojaseloste__tietosuojavaltuutetulle_ja__lautakunnalle_tietosuojan_valvonnan_toteuttamista_varten_">tietosuojavaltuutetulle ja -lautakunnalle tietosuojan valvonnan toteuttamista varten;</Translated>
                  <Translated tag="li" id="tietosuojaseloste__henkilolle__jonka_palvelun_kaytosta_tiedot_on_tallennettu_noudattaen_soveltuvin_osin_viranomaisten_toiminnan_julkisuudesta_annetun_lain_11_ja_12n_saannoksia_">henkilölle, jonka palvelun käytöstä tiedot on tallennettu noudattaen soveltuvin osin viranomaisten toiminnan julkisuudesta annetun lain 11 ja 12 §:n säännöksiä;</Translated>
                  <Translated tag="li" id="tietosuojaseloste__muuta_yksiloitya_tarkoitusta_varten__jos_henkilö__jonka_palvelun_kaytosta_tiedot_on_tallennettu__on_antanut_tahan_nimenomaisen_suostumuksensa">muuta yksilöityä tarkoitusta varten, jos henkilö, jonka palvelun käytöstä tiedot on tallennettu, on antanut tähän nimenomaisen suostumuksensa.</Translated>
                </ol>
                <Translated tag="p" id="tietosuojaseloste__lisaksi_tietoja_voidaan_luovuttaa_virheselvittelytilanteissa_suomifi_tunnistamista_hyodyntavien_asiointipalveluiden_yllapitajille_henkilotietolain_vaatimukset_huomioiden__tietoja_voidaan_luovuttaa_myos_tilastoina_tai_muutoin_siten__etta_yksittaiset_henkilot_eivat_ole_tunnistettavissa">Lisäksi tietoja voidaan luovuttaa virheselvittelytilanteissa Suomi.fi-tunnistamista hyödyntävien asiointipalveluiden ylläpitäjille henkilötietolain vaatimukset huomioiden. Tietoja voidaan luovuttaa myös tilastoina tai muutoin siten, että yksittäiset henkilöt eivät ole tunnistettavissa.</Translated>
                <Translated tag="h4" id="tietosuojaseloste__8_tietojen_siirto_eun_tai_etan_ulkopuolella">8. Tietojen siirto EU:n tai ETA:n ulkopuolella</Translated>
                <Translated tag="p" id="tietosuojaseloste__rekisterinpitaja_ei_luovuta_tietoja_eun_tai_Euroopan_talousalueen_ulkopuolelle">Rekisterinpitäjä ei luovuta tietoja EU:n tai Euroopan talousalueen ulkopuolelle.</Translated>
                <Translated tag="h4" id="tietosuojaseloste__9_rekisterin_suojauksen_periaatteet">9. Rekisterin suojauksen periaatteet</Translated>
                <Translated tag="p" id="tietosuojaseloste__selvitystilanteihin_liittyvien_rekisterin_tietojen_tarkastelusta_muodostuva_manuaalinen_aineisto_on_suojattu_tietoturvallisuudesta_huolehtien_lainsaadannossa_edellytetylla_tavalla">Selvitystilanteihin liittyvien rekisterin tietojen tarkastelusta muodostuva manuaalinen aineisto on suojattu tietoturvallisuudesta huolehtien lainsäädännössä edellytetyllä tavalla.</Translated>
                <Translated tag="p" id="tietosuojaseloste__suomifi_tunnistamisen_tapahtumatiedoston_tiedot_on_suojattu_tietoturvallisuudesta_huolehtien_lainsaadannossa_edellytetylla_tavalla">Suomi.fi-tunnistamisen tapahtumatiedoston tiedot on suojattu tietoturvallisuudesta huolehtien lainsäädännössä edellytetyllä tavalla.</Translated>
                <Translated tag="p" id="tietosuojaseloste__tapahtumatietorekisterin_tietojen_kasittely_on_mahdollista_vain_henkiloille__joiden_tehtaviin_se_kuuluu">Tapahtumatietorekisterin tietojen käsittely on mahdollista vain henkilöille, joiden tehtäviin se kuuluu.</Translated>
                <Translated tag="h4" id="tietosuojaseloste__10_tarkastusoikeus">10. Tarkastusoikeus</Translated>
                <Translated tag="p" id="tietosuojaseloste__rekisteroidylla_on_omien_tietojen_tarkastusoikeus__tarkastuspyynto_lahetetaan_kirjallisena_rekisterin_yhteyshenkilolle">Rekisteröidyllä on omien tietojen tarkastusoikeus. Tarkastuspyyntö lähetetään kirjallisena rekisterin yhteyshenkilölle.</Translated>
                <Translated tag="h4" id="tietosuojaseloste__11_oikeus_vaatia_tiedon_korjaamista">11. Oikeus vaatia tiedon korjaamista</Translated>
                <Translated tag="p" id="tietosuojaseloste__ei_oikeutta_tiedon_korjaamiseen">Ei oikeutta tiedon korjaamiseen.</Translated>
                <Translated tag="h4" id="tietosuojaseloste__12_muut_henkilotietojen_kasittelyyn_liittyvat_oikeudet">12. Muut henkilötietojen käsittelyyn liittyvät oikeudet</Translated>
                <Translated tag="p" id="tietosuojaseloste__rekisteroidylla_ei_ole_muita_henkilotietojen_kasittelyyn_liittyvia_oikeuksia">Rekisteröidyllä ei ole muita henkilötietojen käsittelyyn liittyviä oikeuksia.</Translated>
            </div>
        );
    }
}

export default TietosuojaselostePageMain;

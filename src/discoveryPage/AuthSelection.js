import React from 'react';
import PropTypes from 'prop-types';
import SignInOptionList from './SignInOptionList.js';
import EidasSelection from './EidasSelection.js';
import Translated from '../Translated.js';

let authMethodConfig = {
    mobiilivarmenneTelia: {
        'imgSrc': '/resources/images/mv_70x70.png',
        'id': 'mobiilivarmenne',
        'loc_id': 'valinta__vaihtoehto__mobiilivarmenne',
        'entityId': 'MOBIILI_TELIA'
    },
    vrk: {
        'imgSrc': '/resources/images/VRK_95x70.png',
        'id': 'varmennekortti',
        'loc_id': 'valinta__vaihtoehto__varmennekortti',
        'entityId': 'urn:oid:1.2.246.517.99.10.23.1'
    },
    osuuspankki: {
        'imgSrc': '/resources/images/bank_buttons/osuuspankki_button_70x70.png',
        'id': 'osuuspankki',
        'loc_id': 'valinta__vaihtoehto__osuuspankki',
        'entityId': 'https://kultaraha.osuuspankki.fi/cgi-bin/krcgi'
    },
    osuuspankkiTelia: {
            'imgSrc': '/resources/images/bank_buttons/osuuspankki_button_70x70.png',
            'id': 'osuuspankki',
            'loc_id': 'valinta__vaihtoehto__osuuspankki_telia',
            'entityId': 'OP2'
    },
    nordea: {
        'imgSrc': '/resources/images/bank_buttons/nordea_button_70x70.gif',
        'id': 'nordea',
        'loc_id': 'valinta__vaihtoehto__nordea',
        'entityId': 'https://solo3.nordea.fi/cgi-bin/SOLO3011'
    },
    nordeaOIDC: {
            'imgSrc': '/resources/images/bank_buttons/nordea_button_70x70.gif',
            'id': 'nordea_oidc',
            'loc_id': 'valinta__vaihtoehto__nordea_oidc',
            'entityId': 'NORDEA'
    },
    danskebank: {
        'imgSrc': '/resources/images/bank_buttons/danske_bank_button_50x70.png',
        'id': 'danskebank',
        'loc_id': 'valinta__vaihtoehto__danskebank',
        'entityId': 'https://verkkopankki.danskebank.fi/SP/tupaha/TupahaApp'
    },
    danskebankOIDC: {
        'imgSrc': '/resources/images/bank_buttons/danske_bank_button_50x70.png',
        'id': 'danskebank_oidc',
        'loc_id': 'valinta__vaihtoehto__danskebank_oidc',
        'entityId': 'DANSKEBANK'
    },
    handelsbanken: {
        'imgSrc': '/resources/images/bank_buttons/handelsbanken_button_190x70.png',
        'id': 'handelsbanken',
        'loc_id': 'valinta__vaihtoehto__handelsbanken',
        'entityId': 'https://tupas.handelsbanken.fi'
    },
    handelsbankenOIDC: {
            'imgSrc': '/resources/images/bank_buttons/handelsbanken_button_190x70.png',
            'id': 'handelsbanken_oidc',
            'loc_id': 'valinta__vaihtoehto__handelsbanken_oidc',
            'entityId': 'HANDELSBANK'
    },
    alandsbanken: {
        'imgSrc': '/resources/images/bank_buttons/alandsbanken_button_65x70.png',
        'id': 'alandsbanken',
        'loc_id': 'valinta__vaihtoehto__alandsbanken',
        'entityId': 'https://online.alandsbanken.fi/service/identify'
    },
    alandsbankenOIDC: {
            'imgSrc': '/resources/images/bank_buttons/alandsbanken_button_65x70.png',
            'id': 'alandsbanken_oidc',
            'loc_id': 'valinta__vaihtoehto__alandsbanken_oidc',
            'entityId': 'ALANDSBANK'
    },
    spankki: {
        'imgSrc': '/resources/images/bank_buttons/spankki_button_150x70.png',
        'id': 'spankki',
        'loc_id': 'valinta__vaihtoehto__spankki',
        'entityId': 'https://online.s-pankki.fi/service/identify'
    },
    spankkiOIDC: {
            'imgSrc': '/resources/images/bank_buttons/spankki_button_150x70.png',
            'id': 'spankki_oidc',
            'loc_id': 'valinta__vaihtoehto__spankki_oidc',
            'entityId': 'SPANKKI'
    },
    aktia: {
        'imgSrc': '/resources/images/bank_buttons/aktia_button_60x70.png',
        'id': 'aktia',
        'loc_id': 'valinta__vaihtoehto__aktia',
        'entityId': 'https://tunnistepalvelu.samlink.fi/TupasTunnistus/TupasServlet'
    },
    aktiaOIDC: {
        'imgSrc': '/resources/images/bank_buttons/aktia_button_60x70.png',
        'id': 'aktia_oidc',
        'loc_id': 'valinta__vaihtoehto__aktia_oidc',
        'entityId': 'AKTIA'
    },
    poppankki: {
        'imgSrc': '/resources/images/bank_buttons/pop_button_60x70.png',
        'id': 'pop_pankki',
        'loc_id': 'valinta__vaihtoehto__pop_pankki',
        'entityId': 'https://tupas.poppankki.fi'
    },
    poppankkiOIDC: {
            'imgSrc': '/resources/images/bank_buttons/pop_button_60x70.png',
            'id': 'pop_pankki_oidc',
            'loc_id': 'valinta__vaihtoehto__pop_pankki_oidc',
            'entityId': 'POPPANKKI'
    },
    saastopankki: {
        'imgSrc': '/resources/images/bank_buttons/saastopankki_button_60x70.png',
        'id': 'saastopankki',
        'loc_id': 'valinta__vaihtoehto__saastopankki',
        'entityId': 'https://tupas.saastopankki.fi'
    },
    saastopankkiOIDC: {
        'imgSrc': '/resources/images/bank_buttons/saastopankki_button_60x70.png',
        'id': 'saastopankki_oidc',
        'loc_id': 'valinta__vaihtoehto__saastopankki_oidc',
        'entityId': 'SAASTOPANKKI'
    },
    omasaastopankki: {
        'imgSrc': '/resources/images/bank_buttons/omasaastopankki_button_103x70.png',
        'id': 'oma_saastopankki',
        'loc_id': 'valinta__vaihtoehto__oma_saastopankki',
        'entityId': 'https://tupas.omasp.fi'
    },
    omasaastopankkiOIDC: {
        'imgSrc': '/resources/images/bank_buttons/omasaastopankki_button_103x70.png',
        'id': 'oma_saastopankki_oidc',
        'loc_id': 'valinta__vaihtoehto__oma_saastopankki_oidc',
        'entityId': 'OMASAASTOPANKKI'
    },
    katsootp: {
        'imgSrc': '/resources/images/KatsoOTP_84x70.png',
        'id': 'katso_otp',
        'loc_id': 'valinta__vaihtoehto__katso_otp',
        'entityId': 'https://yritys.tunnistus.fi/uas/saml2/names/ac/otp.katso.1'
    },
    katsopwd: {
        'imgSrc': '/resources/images/KatsoPWD_86x70.png',
        'id': 'katso_pwd',
        'loc_id': 'valinta__vaihtoehto__katso_pwd',
        'entityId': 'https://yritys.tunnistus.fi/uas/saml2/names/ac/password.katso.1'
    },
    katsootptest: {
        'imgSrc': '/resources/images/KatsoOTP_84x70.png',
        'id': 'katso_otp_test',
        'loc_id': 'valinta__vaihtoehto__katso_otp',
        'entityId': 'https://htesti.katso.tunnistus.fi/ubitp/saml2/names/ac/otp.katso.1'
    },
    katsopwdtest: {
        'imgSrc': '/resources/images/KatsoPWD_86x70.png',
        'id': 'katso_pwd_test',
        'loc_id': 'valinta__vaihtoehto__katso_pwd',
        'entityId': 'https://htesti.katso.tunnistus.fi/ubitp/saml2/names/ac/password.katso.1'
    },
    hakaOIDC: {
        'imgSrc': '/resources/images/icon_tunnistus.png',
        'id': 'haka_oidc',
        'loc_id': 'valinta__vaihtoehto__haka_oidc',
        'entityId': 'HAKAPANKKI'
    },
    fakevetuma2: {
        'imgSrc': '/resources/images/icon_tunnistus.png',
        'id': 'fakevetuma2',
        'loc_id': 'valinta__vaihtoehto__vetupas2',
        'entityId': 'urn:oid:1.2.246.517.3002.110.999'
    },
    mpass: {
        'imgSrc': '/resources/images/g-logo.png',
        'id': 'mpass',
        'loc_id': 'Google (MPASS)',
        'entityId': 'urn:oid:1.2.246.517.3002.110.11'
    },
    eidashigh: {
        'imgSrc': '/resources/images/eidas-ikoni.png',
        'id': 'eidas_high',
        'loc_id': 'valinta__vaihtoehto__eIDAS_link',
        'entityId': 'EIDAS_HIGH'
    },
    testidp: {
        'imgSrc': '/resources/images/sfi_logo_70x70.png',
        'id': 'testidp',
        'loc_id': 'valinta__vaihtoehto__testidp',
        'entityId': 'urn:oid:1.2.246.517.3002.110.995'
    },
    ffi: {
        'imgSrc': '/resources/images/globe.png',
        'id': 'ffi',
        'loc_id': 'valinta__vaihtoehto__ffi',
        'entityId': 'ULK_TUN'
    }
};

let authMethodOrder = [
    authMethodConfig.vrk,
    authMethodConfig.ffi,
    authMethodConfig.mobiilivarmenneTelia,
    authMethodConfig.osuuspankki,
    authMethodConfig.osuuspankkiTelia,
    authMethodConfig.nordea,
    authMethodConfig.nordeaOIDC,
    authMethodConfig.danskebank,
    authMethodConfig.danskebankOIDC,
    authMethodConfig.handelsbanken,
    authMethodConfig.handelsbankenOIDC,
    authMethodConfig.alandsbanken,
    authMethodConfig.alandsbankenOIDC,
    authMethodConfig.spankki,
    authMethodConfig.spankkiOIDC,
    authMethodConfig.aktia,
    authMethodConfig.aktiaOIDC,
    authMethodConfig.poppankki,
    authMethodConfig.poppankkiOIDC,
    authMethodConfig.saastopankki,
    authMethodConfig.saastopankkiOIDC,
    authMethodConfig.omasaastopankki,
    authMethodConfig.omasaastopankkiOIDC,
    authMethodConfig.katsootp,
    authMethodConfig.katsopwd,
    authMethodConfig.katsootptest,
    authMethodConfig.katsopwdtest,
    authMethodConfig.mpass,
    authMethodConfig.fakevetuma2,
    authMethodConfig.hakaOIDC,
    authMethodConfig.testidp
];

let eidasMethodOrder = [
    authMethodConfig.eidashigh
];
/**
 * Process the authMethods for SignInOptionList
 */
class AuthSelection extends React.Component {

    componentWillMount() {
        if (this.props.eidasSupport === 'none') {
            eidasMethodOrder = [];
        }
    }

    getMethodsToShow(allowedEntityIds, authMethodOrder) {
        let methodsToShow = [];
        authMethodOrder.forEach((m) => {
            if (allowedEntityIds.indexOf(m.entityId) >= 0) {
                methodsToShow.push(m);
            }
        });
        return methodsToShow;
    }

    render() {
        let finnishMethods = this.getMethodsToShow(this.props.authMethods, authMethodOrder);
        let eidasMethods = this.getMethodsToShow(this.props.authMethods, eidasMethodOrder);
        return (
            <div className="row" className="sign-in-options">
                <div className="col-xs-12">
                    <Translated tag="h2" id="valinta__vaihtoehto__otsokko"/>
                    <SignInOptionList allowedMethods={ finnishMethods }/>
                </div>
                <hr className={eidasMethods.length > 0 ? '' : 'visuallyhidden'}></hr>
                <div className="col-xs-12">
                    <EidasSelection eidasMethods={ eidasMethods }/>
                </div>
            </div>
        );
    }
}

AuthSelection.propTypes = {
    authMethods: PropTypes.array.isRequired,
    availableProviders: PropTypes.array.isRequired,
    config: PropTypes.object.isRequired,
    eidasSupport: PropTypes.string.isRequired,
};

export default AuthSelection;

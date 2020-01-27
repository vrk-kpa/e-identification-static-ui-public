import React from 'react';
import PropTypes from 'prop-types';
import SignInOptionList from './SignInOptionList.js';
import EidasSelection from './EidasSelection.js';
import Translated from '../Translated.js';

let authMethodConfig = {
    mobiilivarmenne: {
        'imgSrc': '/resources/images/mv_70x70.png',
        'id': 'mobiilivarmenne',
        'loc_id': 'valinta__vaihtoehto__mobiilivarmenne',
        'entityId': 'MOBIILI'
    },
    vrk: {
        'imgSrc': '/resources/images/VRK_95x70.png',
        'id': 'varmennekortti',
        'loc_id': 'valinta__vaihtoehto__varmennekortti',
        'entityId': 'VARMENNEKORTTI'
    },
    osuuspankki: {
        'imgSrc': '/resources/images/bank_buttons/osuuspankki_button_127x70.png',
        'id': 'osuuspankki',
        'loc_id': 'valinta__vaihtoehto__osuuspankki',
        'entityId': 'OSUUSPANKKI'
    },
    nordea: {
        'imgSrc': '/resources/images/bank_buttons/nordea_button_164x70.png',
        'id': 'nordea',
        'loc_id': 'valinta__vaihtoehto__nordea',
        'entityId': 'NORDEA'
    },
    danskebank: {
        'imgSrc': '/resources/images/bank_buttons/danske_bank_button_70x70.png',
        'id': 'danskebank',
        'loc_id': 'valinta__vaihtoehto__danskebank',
        'entityId': 'DANSKEBANK'
    },
    handelsbanken: {
        'imgSrc': '/resources/images/bank_buttons/handelsbanken_button_190x70.png',
        'id': 'handelsbanken',
        'loc_id': 'valinta__vaihtoehto__handelsbanken',
        'entityId': 'HANDELSBANKEN'
    },
    alandsbanken: {
        'imgSrc': '/resources/images/bank_buttons/alandsbanken_button_65x70.png',
        'id': 'alandsbanken',
        'loc_id': 'valinta__vaihtoehto__alandsbanken',
        'entityId': 'ALANDSBANKEN'
    },
    spankki: {
        'imgSrc': '/resources/images/bank_buttons/spankki_button_150x70.png',
        'id': 'spankki',
        'loc_id': 'valinta__vaihtoehto__spankki',
        'entityId': 'SPANKKI'
    },
    aktia: {
        'imgSrc': '/resources/images/bank_buttons/aktia_button_60x70.png',
        'id': 'aktia',
        'loc_id': 'valinta__vaihtoehto__aktia',
        'entityId': 'AKTIA'
    },
    poppankki: {
        'imgSrc': '/resources/images/bank_buttons/pop_button_60x70.png',
        'id': 'pop_pankki',
        'loc_id': 'valinta__vaihtoehto__pop_pankki',
        'entityId': 'POPPANKKI'
    },
    saastopankki: {
        'imgSrc': '/resources/images/bank_buttons/saastopankki_button_60x70.png',
        'id': 'saastopankki',
        'loc_id': 'valinta__vaihtoehto__saastopankki',
        'entityId': 'SAASTOPANKKI'
    },
    omasaastopankki: {
        'imgSrc': '/resources/images/bank_buttons/omasaastopankki_button_103x70.png',
        'id': 'oma_saastopankki',
        'loc_id': 'valinta__vaihtoehto__oma_saastopankki',
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
    authMethodConfig.mobiilivarmenne,
    authMethodConfig.osuuspankki,
    authMethodConfig.nordea,
    authMethodConfig.danskebank,
    authMethodConfig.handelsbanken,
    authMethodConfig.alandsbanken,
    authMethodConfig.spankki,
    authMethodConfig.aktia,
    authMethodConfig.poppankki,
    authMethodConfig.saastopankki,
    authMethodConfig.omasaastopankki,
    authMethodConfig.katsootp,
    authMethodConfig.katsopwd,
    authMethodConfig.katsootptest,
    authMethodConfig.katsopwdtest,
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

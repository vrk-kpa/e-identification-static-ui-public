import React from 'react';
import Translated from '../Translated.js';
import SignInOptionList from './SignInOptionList.js';

let authMethodConfig = {
    mobiilivarmenne: {
        'img_src': '/resources/images/mv_70x70.png',
        'id': 'mobiilivarmenne',
        'loc_id': 'valinta__vaihtoehto__mobiilivarmenne',
        'loginContext': 'LoginMobiili'
    },
    vrk: {
        'img_src': '/resources/images/VRK_95x70.png',
        'id': 'varmennekortti',
        'loc_id': 'valinta__vaihtoehto__varmennekortti',
        'loginContext': 'LoginVrk'
    },
    osuuspankki: {
        'img_src': '/resources/images/bank_buttons/osuuspankki_button_70x70.png',
        'id': 'osuuspankki',
        'loc_id': 'valinta__vaihtoehto__osuuspankki',
        'loginContext': 'LoginOsuuspankki'
    },
    nordea: {
        'img_src': '/resources/images/bank_buttons/nordea_button_70x70.gif',
        'id': 'nordea',
        'loc_id': 'valinta__vaihtoehto__nordea',
        'loginContext': 'LoginNordea'
    },
    danskebank: {
        'img_src': '/resources/images/bank_buttons/danske_bank_button_50x70.png',
        'id': 'danskebank',
        'loc_id': 'valinta__vaihtoehto__danskebank',
        'loginContext': 'LoginDanske-bank'
    },
    handelsbanken: {
        'img_src': '/resources/images/bank_buttons/handelsbanken_button_190x70.png',
        'id': 'handelsbanken',
        'loc_id': 'valinta__vaihtoehto__handelsbanken',
        'loginContext': 'LoginHandelsbanken'
    },
    alandsbanken: {
        'img_src': '/resources/images/bank_buttons/alandsbanken_button_65x70.png',
        'id': 'alandsbanken',
        'loc_id': 'valinta__vaihtoehto__alandsbanken',
        'loginContext': 'LoginAlandsbanken'
    },
    spankki: {
        'img_src': '/resources/images/bank_buttons/spankki_button_150x70.png',
        'id': 'spankki',
        'loc_id': 'valinta__vaihtoehto__spankki',
        'loginContext': 'LoginSpankki'
    },
    aktia: {
        'img_src': '/resources/images/bank_buttons/aktia_button_60x70.png',
        'id': 'aktia',
        'loc_id': 'valinta__vaihtoehto__aktia',
        'loginContext': 'LoginAktia'
    },
    poppankki: {
        'img_src': '/resources/images/bank_buttons/pop_button_60x70.png',
        'id': 'pop_pankki',
        'loc_id': 'valinta__vaihtoehto__pop_pankki',
        'loginContext': 'LoginPoppankki'
    },
    saastopankki: {
        'img_src': '/resources/images/bank_buttons/saastopankki_button_60x70.png',
        'id': 'saastopankki',
        'loc_id': 'valinta__vaihtoehto__saastopankki',
        'loginContext': 'LoginSaastopankki'
    },
    omasaastopankki: {
        'img_src': '/resources/images/bank_buttons/omasaastopankki_button_103x70.png',
        'id': 'oma_saastopankki',
        'loc_id': 'valinta__vaihtoehto__oma_saastopankki',
        'loginContext': 'LoginOmasaastopankki'
    },
    katsootp: {
        'img_src': '/resources/images/KatsoOTP_84x70.png',
        'id': 'katso_otp',
        'loc_id': 'valinta__vaihtoehto__katso_otp',
        'loginContext': 'LoginKatsoOTP'
    },
    katsopwd: {
        'img_src': '/resources/images/KatsoPWD_86x70.png',
        'id': 'katso_pwd',
        'loc_id': 'valinta__vaihtoehto__katso_pwd',
        'loginContext': 'LoginKatsoPWD'
    },
    fakevetuma: {
        'img_src': '/resources/images/flags/be.png',
        'id': 'fakevetuma',
        'loc_id': 'VETUPAS',
        'loginContext': 'LoginFakevetuma'
    },
    mpass: {
        'img_src': '/resources/images/g-logo.png',
        'id': 'mpass',
        'loc_id': 'Google (MPASS)',
        'loginContext': 'LoginMPASS'
    },
    eidastest: {
        'img_src': '/resources/images/eu-logo.jpg',
        'id': 'eidas',
        'loc_id': 'eIDAS Test',
        'loginContext': 'LoginEIDAS1'
    }
};

let authMethods = {
    HST:      [authMethodConfig.vrk],
    MOBIILI:  [authMethodConfig.mobiilivarmenne],
    TUPAS:    [authMethodConfig.osuuspankki,
               authMethodConfig.nordea,
               authMethodConfig.danskebank,
               authMethodConfig.handelsbanken,
               authMethodConfig.alandsbanken,
               authMethodConfig.spankki,
               authMethodConfig.aktia,
               authMethodConfig.poppankki,
               authMethodConfig.saastopankki,
               authMethodConfig.omasaastopankki],
    KATSOOTP: [authMethodConfig.katsootp],
    KATSOPWD: [authMethodConfig.katsopwd],
    MPASS1:    [authMethodConfig.mpass],
    TESTI: [authMethodConfig.fakevetuma],
    EIDAS1: [authMethodConfig.eidastest],
};
let authMethodOrder = ['HST',
                       'MOBIILI',
                       'TUPAS',
                       'KATSOOTP',
                       'KATSOPWD',
                       'MPASS1',
                       'TESTI',
                       'EIDAS1'];
/**
 * Process the authMethods for SignInOptionList
 */
var AuthSelection = React.createClass({
    propTypes: {
        authMethods: React.PropTypes.string.isRequired
    },
    getAllowedMethods: function() {
        let methods = this.props.authMethods.split(';');
        let allowedMethods = [];
        for (let i = 0; i < authMethodOrder.length; i++) {
            let authMethod = authMethodOrder[i];
            if (methods.indexOf(authMethod) >= 0 && authMethods[authMethod]) {
                allowedMethods = allowedMethods.concat(authMethods[authMethod]);
            }
        }
        return allowedMethods;
    },
    render: function() {
        return (
        <div className="row">
            <div className="col-xs-12">
                <Translated tag="p" id="valinta__vaihtoehto__otsokko" className="text-notice" />
                <SignInOptionList allowedMethods={ this.getAllowedMethods() } />
            </div>
        </div>
        );
    }
});

export default AuthSelection;

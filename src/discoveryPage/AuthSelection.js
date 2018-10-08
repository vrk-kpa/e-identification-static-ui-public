import React from 'react';
import SignInOptionList from './SignInOptionList.js';
import EidasSelection from './EidasSelection.js';

let authMethodConfig = {
    mobiilivarmenneElisa: {
        'imgSrc': '/resources/images/mv_70x70.png',
        'id': 'mobiilivarmenne',
        'loc_id': 'valinta__vaihtoehto__mobiilivarmenne',
        'loginContext': '/Shibboleth.sso/LoginMobiili',
        'entityId': 'urn:oid:1.2.246.517.3002.110.3'
    },
    mobiilivarmenneTelia: {
        'imgSrc': '/resources/images/mv_70x70.png',
        'id': 'mobiilivarmenne',
        'loc_id': 'valinta__vaihtoehto__mobiilivarmenne',
        'loginContext': '/Shibboleth.sso/LoginMobiili2',
        'entityId': 'urn:oid:1.2.246.517.3002.110.3'
    },
    vrk: {
        'imgSrc': '/resources/images/VRK_95x70.png',
        'id': 'varmennekortti',
        'loc_id': 'valinta__vaihtoehto__varmennekortti',
        'loginContext': '/Shibboleth.sso/LoginVrk',
        'entityId': 'urn:oid:1.2.246.517.99.10.23.1'
    },
    osuuspankki: {
        'imgSrc': '/resources/images/bank_buttons/osuuspankki_button_70x70.png',
        'id': 'osuuspankki',
        'loc_id': 'valinta__vaihtoehto__osuuspankki',
        'loginContext': '/Shibboleth.sso/LoginOsuuspankki',
        'entityId': 'https://kultaraha.osuuspankki.fi/cgi-bin/krcgi'
    },
    nordea: {
        'imgSrc': '/resources/images/bank_buttons/nordea_button_70x70.gif',
        'id': 'nordea',
        'loc_id': 'valinta__vaihtoehto__nordea',
        'loginContext': '/Shibboleth.sso/LoginNordea',
        'entityId': 'https://solo3.nordea.fi/cgi-bin/SOLO3011'
    },
    danskebank: {
        'imgSrc': '/resources/images/bank_buttons/danske_bank_button_50x70.png',
        'id': 'danskebank',
        'loc_id': 'valinta__vaihtoehto__danskebank',
        'loginContext': '/Shibboleth.sso/LoginDanske-bank',
        'entityId': 'https://verkkopankki.danskebank.fi/SP/tupaha/TupahaApp'
    },
    handelsbanken: {
        'imgSrc': '/resources/images/bank_buttons/handelsbanken_button_190x70.png',
        'id': 'handelsbanken',
        'loc_id': 'valinta__vaihtoehto__handelsbanken',
        'loginContext': '/Shibboleth.sso/LoginHandelsbanken',
        'entityId': 'https://tupas.handelsbanken.fi'
    },
    alandsbanken: {
        'imgSrc': '/resources/images/bank_buttons/alandsbanken_button_65x70.png',
        'id': 'alandsbanken',
        'loc_id': 'valinta__vaihtoehto__alandsbanken',
        'loginContext': '/Shibboleth.sso/LoginAlandsbanken',
        'entityId': 'https://online.alandsbanken.fi/service/identify'
    },
    spankki: {
        'imgSrc': '/resources/images/bank_buttons/spankki_button_150x70.png',
        'id': 'spankki',
        'loc_id': 'valinta__vaihtoehto__spankki',
        'loginContext': '/Shibboleth.sso/LoginSpankki',
        'entityId': 'https://online.s-pankki.fi/service/identify'
    },
    aktia: {
        'imgSrc': '/resources/images/bank_buttons/aktia_button_60x70.png',
        'id': 'aktia',
        'loc_id': 'valinta__vaihtoehto__aktia',
        'loginContext': '/Shibboleth.sso/LoginAktia',
        'entityId': 'https://tunnistepalvelu.samlink.fi/TupasTunnistus/TupasServlet'
    },
    poppankki: {
        'imgSrc': '/resources/images/bank_buttons/pop_button_60x70.png',
        'id': 'pop_pankki',
        'loc_id': 'valinta__vaihtoehto__pop_pankki',
        'loginContext': '/Shibboleth.sso/LoginPoppankki',
        'entityId': 'https://tupas.poppankki.fi'
    },
    saastopankki: {
        'imgSrc': '/resources/images/bank_buttons/saastopankki_button_60x70.png',
        'id': 'saastopankki',
        'loc_id': 'valinta__vaihtoehto__saastopankki',
        'loginContext': '/Shibboleth.sso/LoginSaastopankki',
        'entityId': 'https://tupas.saastopankki.fi'
    },
    omasaastopankki: {
        'imgSrc': '/resources/images/bank_buttons/omasaastopankki_button_103x70.png',
        'id': 'oma_saastopankki',
        'loc_id': 'valinta__vaihtoehto__oma_saastopankki',
        'loginContext': '/Shibboleth.sso/LoginOmasaastopankki',
        'entityId': 'https://tupas.omasp.fi'
    },
    katsootp: {
        'imgSrc': '/resources/images/KatsoOTP_84x70.png',
        'id': 'katso_otp',
        'loc_id': 'valinta__vaihtoehto__katso_otp',
        'loginContext': '/Shibboleth.sso/LoginKatsoOTP',
        'entityId': ['https://htesti.katso.tunnistus.fi/ubitp/saml2/names/ac/otp.katso.1',
                     'https://yritys.tunnistus.fi/uas/saml2/names/ac/otp.katso.1']
    },
    katsopwd: {
        'imgSrc': '/resources/images/KatsoPWD_86x70.png',
        'id': 'katso_pwd',
        'loc_id': 'valinta__vaihtoehto__katso_pwd',
        'loginContext': '/Shibboleth.sso/LoginKatsoPWD',
        'entityId': ['https://htesti.katso.tunnistus.fi/ubitp/saml2/names/ac/password.katso.1',
                     'https://yritys.tunnistus.fi/uas/saml2/names/ac/password.katso.1']
    },
    fakevetuma2: {
        'imgSrc': '/resources/images/icon_tunnistus.png',
        'id': 'fakevetuma2',
        'loc_id': 'valinta__vaihtoehto__vetupas2',
        'loginContext': '/Shibboleth.sso/LoginFakevetuma2',
        'entityId': 'urn:oid:1.2.246.517.3002.110.999'
    },
    mpass: {
        'imgSrc': '/resources/images/g-logo.png',
        'id': 'mpass',
        'loc_id': 'Google (MPASS)',
        'loginContext': '/Shibboleth.sso/LoginMPASS',
        'entityId': 'urn:oid:1.2.246.517.3002.110.11'
    },
    eidashigh: {
        'imgSrc': '/resources/images/eidas-ikoni.png',
        'id': 'eidas_high',
        'loc_id': 'valinta__vaihtoehto__eIDAS',
        'loginContext': '/Shibboleth.sso/LoginEIDAS1',
        'entityId': 'http://eidas.europa.eu/LoA/high'
    },
    testidp: {
        'imgSrc': '/resources/images/sfi_logo_70x70.png',
        'id': 'testidp',
        'loc_id': 'valinta__vaihtoehto__testidp',
        'loginContext': '/Shibboleth.sso/LoginTestIdP',
        'entityId': 'urn:oid:1.2.246.517.3002.110.995'
    }
};

let authMethodOrder = [
    authMethodConfig.vrk,
    authMethodConfig.mobiilivarmenneElisa, // Default for now
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
    authMethodConfig.mpass,
    authMethodConfig.fakevetuma2,
    authMethodConfig.testidp
];

let eidasMethodOrder = [
    authMethodConfig.eidashigh
];
/**
 * Process the authMethods for SignInOptionList
 */
var AuthSelection = React.createClass({
    propTypes: {
        attributeLevelOfAssurance: React.PropTypes.string.isRequired,
        availableProviders: React.PropTypes.array.isRequired,
        config: React.PropTypes.object.isRequired,
        eidasSupport: React.PropTypes.string.isRequired,
        requestedAuthMethods: React.PropTypes.string.isRequired,
        serviceDisplayName: React.PropTypes.string.isRequired
    },
    componentWillMount: function() {
        // Select used mobile operator based on configuration
        let mobileIndex = authMethodOrder.indexOf(authMethodConfig.mobiilivarmenneElisa) > -1 ? authMethodOrder.indexOf(authMethodConfig.mobiilivarmenneElisa) : authMethodOrder.indexOf(authMethodConfig.mobiilivarmenneTelia);
        if (mobileIndex > -1) {
            const config = this.props.config;
            if (config && config.mobileOperator) {
                authMethodOrder[mobileIndex] = (config.mobileOperator === 'telia') ? authMethodConfig.mobiilivarmenneTelia : authMethodConfig.mobiilivarmenneElisa;
            }
        }
        if (this.props.eidasSupport === 'none') {
            eidasMethodOrder = [];
        }
    },
    getAllowedProviderEntityIds: function() {
        const allowedMethods = this.props.attributeLevelOfAssurance.split(';');
        let requestedMethods = this.props.requestedAuthMethods.split(';');
        let providers = this.props.availableProviders;
        let allowedProviders = [];
        let allowedProviderEntityIds = [];

        for (let i = 0; i < requestedMethods.length; i++) {
            if (allowedMethods.indexOf(requestedMethods[i]) >= 0) {
                let tmp = providers.filter(function(p) {
                    return p.levelOfAssurance === requestedMethods[i];
                });
                allowedProviders = allowedProviders.concat(tmp);
            }
        }

        for (let i = 0; i < allowedProviders.length; i++) {
            allowedProviderEntityIds.push(allowedProviders[i].entityId);
        }
        return allowedProviderEntityIds;
    },

    getMethodsToShow: function(allowedEntityIds, authMethodOrder) {
        let methodsToShow = [];
        authMethodOrder.forEach((m) => {
            if (m.entityId instanceof Array) {
                m.entityId.forEach((id) => {
                    if (allowedEntityIds.indexOf(id) >= 0) {
                        methodsToShow.push(m);
                    }
                });
            } else if (allowedEntityIds.indexOf(m.entityId) >= 0) {
                methodsToShow.push(m);
            }
        });
        return methodsToShow;
    },

    render: function() {
        let allowedProviderEntityIds = this.getAllowedProviderEntityIds();
        let finnishMethods = this.getMethodsToShow(allowedProviderEntityIds, authMethodOrder);
        let eidasMethods = this.getMethodsToShow(allowedProviderEntityIds, eidasMethodOrder);
        return (
            <div className="row">
                <div className="col-xs-12">
                    <SignInOptionList allowedMethods={ finnishMethods }/>
                </div>
                <div className="col-xs-12">
                    <EidasSelection eidasMethods={ eidasMethods } serviceDisplayName={this.props.serviceDisplayName}/>
                </div>
            </div>
        );
    }
});
export default AuthSelection;

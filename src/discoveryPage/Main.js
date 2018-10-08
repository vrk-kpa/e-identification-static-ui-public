import React from 'react';
import browserHistory from 'react-router/lib/browserHistory';

import Translated from '../Translated.js';
import AuthSelection from './AuthSelection.js';
import Disruption from './Disruption.js';
import IDPLink from '../IDPLink.js';
import * as Utils from '../utils.js';
import CountrySelection from './CountrySelection.js';
import AuthPageInfo from '../AuthPageInfo.js';

let defaultDiscoTimeoutSecs = 295;

let defaultApiProvidersPath =  '/api/metadata/?type=AUTHENTICATION_PROVIDER';
let defaultApiCountryPath = '/api/country';

let countryList = null;
let providers = null;
let metadataService = null;

// eslint-disable-next-line react/no-multi-comp
let DiscoveryPage = React.createClass({
    propTypes: {
        location: React.PropTypes.object
    },
    contextTypes: {
        router: React.PropTypes.object.isRequired,
        queryParams: React.PropTypes.object.isRequired,
        lang: React.PropTypes.string.isRequired
    },
    getConfig() {
        return window.IdentificationConfig;
    },
    getInitialState() {
        return {
            metadataFetched: false,
            providersFetched: false,
            countriesFetched: false,
        };
    },
    getEntityId() {
        var entId = this.context.queryParams.entityId;
        return entId;
    },
    getTimeout: function() {
        let timeout = this.context.queryParams.timeout || defaultDiscoTimeoutSecs;
        return timeout * 1000;
    },
    isIdentificationCancelled: function() {
        return this.context.queryParams.msg === 'cancel';
    },
    canUseSessionStorage: function() {
        try {
            sessionStorage.setItem('__storeTest__', '__storeTest__');
            sessionStorage.removeItem('__storeTest__');
            return true;
        } catch (e) {
            return false;
        }
    },
    storeCancelPath: function(cancelPath) {
        sessionStorage.setItem('cancelStorage', cancelPath);
    },
    getAndClearCancelPath: function() {
        let path = sessionStorage.getItem('cancelStorage');
        sessionStorage.removeItem('cancelStorage');
        return path;
    },
    getCancelPath: function() {
        if (this.canUseSessionStorage()) {
            return this.getAndClearCancelPath() || '/sivut/500/';
        } else {
            return '/sivut/500/';
        }
    },

    getMetadata() {
        metadataService = Utils.MetadataService.getInstance();
        metadataService.loadMetadata(this.getEntityId(), () => { this.setState({metadataFetched: true}); });
    },

    getProviders: function() {
        let config = this.getConfig();
        let path = (config && config.apiProvidersPath) ? config.apiProvidersPath : defaultApiProvidersPath;

        Utils.getJsonData(path, (data) => {
            providers = data;
            this.setState({providersFetched: true});
        });
    },
    getCountries: function() {
        let config = this.getConfig();
        let path = (config && config.apiCountryPath) ? config.apiCountryPath : defaultApiCountryPath;
        Utils.getJsonData(path, (data) => {
            countryList = data;
            this.setState({countriesFetched: true});
        });
    },
    componentWillMount: function() {
        if (!this.isIdentificationCancelled()) {
            if (this.canUseSessionStorage()) {
                this.storeCancelPath(this.props.location.search);
            }
        } else {
            window.location.href = this.getCancelPath();
        }
    },
    componentDidMount: function() {
        this.getMetadata();
        this.getProviders();
        if (this.props.location.pathname === '/sivut/country-selection/' && countryList === null) {
            this.getCountries();
        }
    },
    componentWillReceiveProps: function(nextProps) {
        if (nextProps.location.pathname === '/sivut/country-selection/' && countryList === null) {
            this.getCountries();
        }
    },
    getInfoElement: function() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-8">
                    <div className="sign-in-info">
                        <Translated tag="p" id="valinta__suomifi-tunnistaminen-roadmap" className="small" />
                    </div>
                </div>
            </div>
        );
    },
    getDiscoPageContent: function(attributeLevelOfAssurance, serviceDisplayName, eidasSupport) {
        return (
            <div className="row">
                <div className="selection-title">
                    <Translated tag="h3" id="valinta__vaihtoehto__otsokko" />
                </div>
                <AuthSelection requestedAuthMethods={this.context.queryParams.authMethdReq}
                                attributeLevelOfAssurance={attributeLevelOfAssurance}
                                serviceDisplayName={serviceDisplayName}
                                availableProviders={providers}
                                discoQueryParams={this.context.queryParams}
                                config={this.getConfig()}
                                eidasSupport={eidasSupport} />
                <div className="row">
                    <IDPLink status="cancel">
                        <Translated tag="span" id="valinta__return-link" />
                    </IDPLink>
                </div>
                { this.getInfoElement() }
            </div>
        );
    },
    getFlagPageContent: function() {
        return (
            <div className="row">
                <div className="selection-title">
                    <Translated tag="h3" id="valinta__vaihtoehto__otsikko_valitse_maa" />
                </div>
                <CountrySelection availableCountries={countryList}/>
                <div className="row">
                    <a onClick={browserHistory.goBack} className="go-back">
                        <Translated tag="span" id="valinta__palaa_tunnistajan_valintaan" />
                    </a>
                </div>
                { this.getInfoElement() }
            </div>
        );
    },

    render() {
        let onDiscoPage = true;
        if (this.props.location.pathname === '/sivut/country-selection/') {
            onDiscoPage = false;
        }
        // Check that needed data from backend has been loaded before rendering
        if (onDiscoPage && !this.state.metadataFetched || !this.state.providersFetched) {
            return null;
        } else if (!onDiscoPage && !this.state.countriesFetched) {
            return null;
        }

        var discoTimer = Utils.DiscoTimer.getInstance();
        if (!discoTimer.isTimerOn()) {
            discoTimer.addTimerListener((timerContext) => {
                let url = '/idp/authn/External?status=timeout';
                url = timerContext.tid ? url + '&tid=' + timerContext.tid : url;
                url = timerContext.pid ? url + '&pid=' + timerContext.pid : url;
                url = timerContext.tag ? url + '&tag=' + timerContext.tag : url;
                window.location = url;
            }, {tid: this.context.queryParams.tid, pid: this.context.queryParams.pid, tag: this.context.queryParams.tag});
            discoTimer.startTimer(this.getTimeout());
        }

        let attributeLevelOfAssurance = metadataService.getAttributeLevelOfAssurance();
        let eidasSupport = metadataService.getEidasSupport();
        let serviceDisplayName = metadataService.getServiceDisplayName(this.context.lang);

        return (
            <main id="main" role="main" name="main">
                <div className="main">
                    <div className="container">
                        <AuthPageInfo serviceDisplayName={serviceDisplayName}>
                            <Disruption />
                        </AuthPageInfo>
                        { (onDiscoPage) ? this.getDiscoPageContent(attributeLevelOfAssurance, serviceDisplayName, eidasSupport) : this.getFlagPageContent() }
                    </div>
                </div>
            </main>
        );
    }
});

export default DiscoveryPage;

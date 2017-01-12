import React from 'react';

import TimerMixin from 'react-timer-mixin';

import Translated from '../Translated.js';
import ThirdPartySP from './ThirdPartySP.js';
import AuthSelection from './AuthSelection.js';
import Disruption from './Disruption.js';
import IDPLink from '../IDPLink.js';

let defaultDiscoTimeoutSecs = 295;

var getMetadata = function updateMetadata(anEntityID) {
    var entityID = encodeURIComponent(anEntityID);
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/api/metadata/' + entityID, false);
    xhttp.send();
    if (xhttp.status !== 200) {
      return null;
    } else {
        var json;
        try {
          json = JSON.parse(xhttp.responseText);
        } catch (e) {
        return null;
        }
        return json;
    }
};

let TimeOut = React.createClass({
    mixins: [TimerMixin],
    propTypes: {
        millisecs: React.PropTypes.number.isRequired
    },
    contextTypes: {
        url: React.PropTypes.string.isRequired
    },
    handleTimeout(e) {
        window.location = this.context.url;
    },
    componentDidMount() {
        this.setTimeout(this.handleTimeout, this.props.millisecs);
    },
    render() {
        return (
            <div/>
        );
    }
});

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
    componentWillMount: function() {
        if (!this.isIdentificationCancelled()) {
            if (this.canUseSessionStorage()) {
                this.storeCancelPath(this.props.location.search);
            }
        } else {
            window.location.href = this.getCancelPath();
        }
    },
    render() {
        let theMetadataDisplayName = '';
        let entityId = this.getEntityId();
        if (entityId) {
            let theMetadata = getMetadata(entityId);
            if (theMetadata && theMetadata.displayName) {
                if (this.context.lang === 'en' && theMetadata.displayName.en) {
                    theMetadataDisplayName = theMetadata.displayName.en;
                } else if (this.context.lang === 'sv' && theMetadata.displayName.sv) {
                    theMetadataDisplayName = theMetadata.displayName.sv;
                } else if (theMetadata.displayName.fi) {
                    theMetadataDisplayName = theMetadata.displayName.fi;
                }
            }
        }

        return (
            <main id="main" role="main" name="main">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 service-top">
                                <Translated tag="p" id="valinta__olet_tunnistautumassa_palveluun" />
                                <ThirdPartySP tag="li" id="displayName" className="text-big" metadataDisplayName={theMetadataDisplayName} />
                            </div>
                        </div>
                        <div className="row">
                            <Disruption />
                            <IDPLink status="timeout" visible={false}>
                                <TimeOut millisecs={this.getTimeout()} />
                            </IDPLink>
                            <AuthSelection authMethods={this.context.queryParams.authMethdReq} />
                            <div className="row">
                                <IDPLink status="cancel">
                                    <Translated tag="span" id="valinta__return-link" />
                                </IDPLink>
                            </div>
                            <div className="row">
                                <br />
                                <div className="col-xs-12 col-md-8">
                                    <div className="text">
                                        <Translated tag="p" id="valinta__suomifi-tunnistaminen-roadmap" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
});

export default DiscoveryPage;

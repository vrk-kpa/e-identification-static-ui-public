var DiscoTimer = (function() {
    var instance;

    function init() {
        var listeners = [];
        var timerOn = false;
        function timerCallback() {
            listeners.forEach(l => {l.listener(l.context);});
        }

       return {
            isTimerOn: function() {
                return timerOn;
            },
            startTimer: function(milliseconds) {
                timerOn = true;
                setTimeout(timerCallback, milliseconds);
            },
            addTimerListener: function(listenerFunc, context) {
                listeners.push({'listener': listenerFunc, 'context': context});
            }
        };
      };

    return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

var getJsonData = function(url, dataHandler) {
    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener('error', () => {console.log('An error occurred while fetching data from ', url);});
    xhttp.addEventListener('load', () => {
        var json;
        if (xhttp.status !== 200) {
            return null;
        } else {
            try {
                json = JSON.parse(xhttp.responseText);
                dataHandler(json);
            } catch (e) {
                console.log('Caught exception when parsing response to json');
            }
        }
    });
    xhttp.open('GET', url, true);
    xhttp.send();
};


var postFormData = function(url, formdata, successCallback, errorCallback) {
    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener('error', () => {
        console.log('An error occurred while sending form data ', url);
        errorCallback();
    });
    xhttp.addEventListener('load', () => {
        if (xhttp.status !== 200) {
            errorCallback();
        } else {
            successCallback();
        }
    });

    xhttp.open('POST', url, true);
    xhttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhttp.send(JSON.stringify(formdata));
};

var getReturnLinkUrl = function(status, queryParams) {
    const defaultidpAuthnPath = '/idp/authn/External';
    let authnPath = (window.IdentificationConfig && window.IdentificationConfig.idpAuthnPath) ? window.IdentificationConfig.idpAuthnPath : defaultidpAuthnPath;
    let url = authnPath + '?status=' + status;
    url = queryParams.conversation ? url + '&conversation=' + queryParams.conversation : url;
    url = queryParams.tid ? url + '&tid=' + queryParams.tid : url;
    url = queryParams.pid ? url + '&pid=' + queryParams.pid : url;
    url = queryParams.tag ? url + '&tag=' + queryParams.tag : url;
    return url;
};

var MetadataService = (function() {
    var instance;

    function init() {
        let defaultApiMetadataPath =  '/api/metadata/';
        let metadata = null;

        return {
            fetchMetadata: function(entityId, callback) {
                let config = window.IdentificationConfig;
                let path = (config && config.apiMetadataPath) ? config.apiMetadataPath : defaultApiMetadataPath;
                getJsonData(path + encodeURIComponent(entityId), (data) => {
                    callback(data);
                });
            },

            loadMetadata: function(entityId, loadReadyListener) {
                this.fetchMetadata(entityId, (data) => {
                    metadata = data;
                    loadReadyListener();
                });
            },

            getAllowedAuthMethods: function(authMethodRequestString) {
                if (!metadata || !metadata.attributeLevelOfAssurance) {
                    return null;
                }
                const metadataAuthMethods = metadata.attributeLevelOfAssurance.split(';');
                let requestedMethods = authMethodRequestString.split(';');
                let allowedAuthMethods = [];
                requestedMethods.forEach(m => {
                    if (metadataAuthMethods.indexOf(m) >= 0) {
                        allowedAuthMethods.push(m);
                    }
                });
                return allowedAuthMethods;
            },

            mapMethodsToProviderEntityIds(authMethods, providers) {
                let allowedProviders = [];
                authMethods.forEach(m => {
                    let tmp = providers.filter(function(p) {
                        return p.levelOfAssurance === m;
                    });
                    allowedProviders = allowedProviders.concat(tmp.map(p => p.entityId));
                });
                return allowedProviders;
            },

            getAllowedAuthProviders: function(authMethodRequestString, providers) {
                return this.mapMethodsToProviderEntityIds(this.getAllowedAuthMethods(authMethodRequestString), providers);
            },

            getServiceDisplayName: function(lang) {
                let theMetadataDisplayName = '';
                if (metadata && metadata.displayName) {
                    theMetadataDisplayName = metadata.displayName[lang] ? metadata.displayName[lang] : (metadata.displayName['fi'] ? metadata.displayName['fi'] : '');
                }
                return theMetadataDisplayName;
            },

            getEidasSupport: function() {
                return (metadata && metadata.eidasSupport) ? metadata.eidasSupport : '';
            }
        };
    };

    return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();


export {DiscoTimer, getJsonData, postFormData, getReturnLinkUrl, MetadataService};

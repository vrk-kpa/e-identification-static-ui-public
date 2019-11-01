
import * as Utils from './utils.js';

const MetadataService = (function() {
    var instance;

    function init() {
        let defaultApiMetadataPath =  '/api/metadata/';
        let metadata = null;

        return {
            fetchMetadata: function(entityId, callback, errorCallback) {
                let config = window.IdentificationConfig;
                let path = (config && config.apiMetadataPath) ? config.apiMetadataPath : defaultApiMetadataPath;
                Utils.getJsonData(path + encodeURIComponent(entityId), (data) => {
                    callback(data);
                }, errorCallback);
            },

            loadMetadata: function(entityId, loadReadyListener, errorListener) {
                this.fetchMetadata(entityId, (data) => {
                    metadata = data;
                    loadReadyListener();
                }, errorListener);
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

export {MetadataService};

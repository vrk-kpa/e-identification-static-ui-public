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

var MetadataService = (function() {
    var instance;

    function init() {
        let defaultApiMetadataPath =  '/api/metadata/';
        let metadata = null;

        return {
            loadMetadata: function(entityId, loadReadyListener) {
                let config = window.IdentificationConfig;
                let path = (config && config.apiMetadataPath) ? config.apiMetadataPath : defaultApiMetadataPath;
                getJsonData(path + encodeURIComponent(entityId), (data) => {
                    metadata = data;
                    loadReadyListener();
                });
            },

            getServiceDisplayName: function(lang) {
                let theMetadataDisplayName = '';
                if (metadata && metadata.displayName) {
                    theMetadataDisplayName = metadata.displayName[lang] ? metadata.displayName[lang] : (metadata.displayName['fi'] ? metadata.displayName['fi'] : '');
                }
                return theMetadataDisplayName;
            },
            getAttributeLevelOfAssurance: function() {
                return (metadata && metadata.attributeLevelOfAssurance) ? metadata.attributeLevelOfAssurance : '';
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


export {DiscoTimer, getJsonData, postFormData, MetadataService};

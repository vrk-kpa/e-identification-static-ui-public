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

var getJsonData = function(url, dataHandler, errorHandler) {
    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener('error', () => {
        console.log('An error occurred while fetching data from ', url);
        errorHandler();
    });
    xhttp.addEventListener('load', () => {
        var json;
        if (xhttp.status !== 200) {
            errorHandler(new Error('Unexpected xhttp status from:' + url + ':' + xhttp.status));
        } else {
            try {
                json = JSON.parse(xhttp.responseText);
                dataHandler(json);
            } catch (e) {
                console.log('Caught exception when parsing response to json', e);
                errorHandler(e);
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

export {DiscoTimer, getJsonData, postFormData, getReturnLinkUrl};

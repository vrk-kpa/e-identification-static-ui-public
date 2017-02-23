var Disco = (function ($, undefined) {

    function sanitizeURLParameter(parameter) {
        return parameter.replace(/[^a-zA-Z0-9:/\.?&=#\-_%]+/g, "");
    }

    function getEntityIdParameterFromUrl() {
        var regex = new RegExp("[\\?&]entityId=([^&#]*)"),
            results = regex.exec(location.search);
        if (results) {
            var returnParam = decodeURIComponent(results[1]);
            return sanitizeURLParameter(returnParam);
        }
        return;
    }

    function getReturnParameterFromURL() {
        var regex = new RegExp("[\\?&]return=([^&#]*)"),
            results = regex.exec(location.search);
        if (results) {
            var returnParam = decodeURIComponent(results[1]);
            return sanitizeURLParameter(returnParam);
        }
        return;
    }

    function getTargetParameterFromURL() {
        var regex = new RegExp("[\\?&]target=([^&#]*)"),
            results = regex.exec(location.search);
        if (results) {
            var targetParam = decodeURIComponent(results[1]);
            return sanitizeURLParameter(targetParam);
        }
        return;
    }

    function getTidParameterFromTarget(target) {
        var regex = new RegExp("[\\?&]tid=([^&#]*)");
        var results = regex.exec(target);
        if (results) {
            return results[1]
        }
        return;
    }

    function getPidParameterFromTarget(target) {
        var regex = new RegExp("[\\?&]pid=([^&#]*)");
        var results = regex.exec(target);
        if (results) {
            return results[1]
        }
        return;
    }

    function getTagParameterFromTarget(target) {
        var regex = new RegExp("[\\?&]tag=([^&#]*)");
        var results = regex.exec(target);
        if (results) {
            return results[1]
        }
        return;
    }

    function getAuthMethdReqParameterFromURL() {
	var regex = new RegExp("[\\?&]authMethdReq=([^&#]*)"),
            results = regex.exec(location.search);
        if (results) {
            return results[1];
        }
        return;
    }

    function changeLangLinkSelection(lang) {
        $("#fi").removeClass("selected");
        $("#sv").removeClass("selected");
        $("#en").removeClass("selected");
        var selected = "#" + getPageLang();
        $(selected).addClass("selected");
    }

    function constructIDPLink(context, returnParam, targetParam, lang) {
        var hrefLink = returnParam.replace("Login", context + "/" + lang);;
        return hrefLink + "&target=" + encodeURIComponent(targetParam);
    }

    function updateLinks() {
        var lang = 'fi';
        var returnParam = getReturnParameterFromURL();
        var targetParam = getTargetParameterFromURL();
        var tid = getTidParameterFromTarget(targetParam);
        var pid = getPidParameterFromTarget(targetParam);
        var tag = getTagParameterFromTarget(targetParam);
	var authMethdReq = getAuthMethdReqParameterFromURL();

        $("#return-link").prop("href", "https://" + Config.idpHost + "/idp/authn/External?tid=" +
          tid + "&pid=" + pid + "&tag=" + tag + "&status=cancel");

        $("#disco-vetuma").attr("href", function () {
            return constructIDPLink("LoginVetuma", returnParam, targetParam, lang);
        });
        if ( findStrFrom("TESTI", authMethdReq )) {
	    $("#disco-fakevetuma").attr("href", function () {
                return constructIDPLink("LoginFakevetuma", returnParam, targetParam, lang);
            });
	} else {
	    $("#d-fakevetuma").hide();
	}
	if ( findStrFrom("TUPAS", authMethdReq )) {
            $("#disco-nordea").attr("href", function () {
                return constructIDPLink("LoginNordea", returnParam, targetParam, lang);
            });
            $("#disco-danske-bank").attr("href", function () {
                return constructIDPLink("LoginDanske-bank", returnParam, targetParam, lang);
            });
            $("#disco-alandsbanken").attr("href", function () {
                return constructIDPLink("LoginAlandsbanken", returnParam, targetParam, lang);
            });
            $("#disco-spankki").attr("href", function () {
                return constructIDPLink("LoginSpankki", returnParam, targetParam, lang);
            });
            $("#disco-aktia").attr("href", function () {
                return constructIDPLink("LoginAktia", returnParam, targetParam, lang);
            });
            $("#disco-poppankki").attr("href", function () {
                return constructIDPLink("LoginPoppankki", returnParam, targetParam, lang);
            });
            $("#disco-saastopankki").attr("href", function () {
                return constructIDPLink("LoginSaastopankki", returnParam, targetParam, lang);
            });
            $("#disco-omasaastopankki").attr("href", function () {
                return constructIDPLink("LoginOmasaastopankki", returnParam, targetParam, lang);
            });
            $("#disco-osuuspankki").attr("href", function () {
                return constructIDPLink("LoginOsuuspankki", returnParam, targetParam, lang);
            });
            $("#disco-handelsbanken").attr("href", function () {
                return constructIDPLink("LoginHandelsbanken", returnParam, targetParam, lang);
            });
	} else {
	    $("#d-nordea").hide();
	    $("#d-danske-bank").hide();
	    $("#d-alandsbanken").hide();
	    $("#d-spankki").hide();
	    $("#d-aktia").hide();
	    $("#d-poppankki").hide();
	    $("#d-saastopankki").hide();
	    $("#d-omasaastopankki").hide();
	    $("#d-osuuspankki").hide();
	    $("#d-handelsbanken").hide();
	}
	
	if ( findStrFrom("MOBIILI", authMethdReq) ) {
            $("#disco-mobiilivarmenne").attr("href", function () {
                return constructIDPLink("LoginMobiili", returnParam, targetParam, lang);
            });
	} else {
	    $("#d-mobiilivarmenne").hide();
	}
        
	if ( findStrFrom("HST", authMethdReq) ) {
	    $("#disco-vrk").attr("href", function () {
                return constructIDPLink("LoginVrk", returnParam, targetParam, lang);
            });
	} else {
	    $("#d-vrk").hide();
	}
	
	if ( findStrFrom("KATSOPWD", authMethdReq) ) {
            $("#disco-katso-pwd").attr("href", function () {
                return constructIDPLink("LoginKatsoPWD", returnParam, targetParam, lang);
            });
	} else {
	    $("#disco-katso-pwd").hide();
	}
	
	if ( findStrFrom("KATSOOTP", authMethdReq )) {
            $("#disco-katso-otp").attr("href", function () {
                return constructIDPLink("LoginKatsoOTP", returnParam, targetParam, lang);
            });
	} else {
	    $("#disco-katso-otp").hide();
	}
    }

    function displayMetadata(metadata) {
        var dispName = document.getElementById("displayName");
        dispName.innerHTML = metadata.displayName.fi;
    }

    function timeout() {
        var targetParam = getTargetParameterFromURL();
        var tid = getTidParameterFromTarget(targetParam);
        var pid = getPidParameterFromTarget(targetParam);
        var tag = getTagParameterFromTarget(targetParam);
        window.location = '/idp/authn/External?status=timeout&tid=' + tid +
                '&pid=' + pid + '&tag=' + tag;
    }

    function updateMetadata() {
        var entityID = encodeURIComponent(getEntityIdParameterFromUrl());
        $.get(
            '/api/metadata/' + entityID,
            function (data) {
                displayMetadata(data);
            }
        );
    }

    function startTimer() {
        window.setTimeout(timeout, Config.discoTimeout);
    }

    function findStrFrom(strToFind, strFrom) {
	var strArr = strFrom.split(";");	
	if ( strArr.indexOf(strToFind) < 0 ) {
	    return false;
	} else {		
	    return true;
	}
    }	

    return {
        updateMetadata: updateMetadata,
        startTimer: startTimer,
        updateLinks: updateLinks
    }
})(jQuery);

(function () {
    Disco.updateMetadata();
    Disco.updateLinks();
    Disco.startTimer();
})();

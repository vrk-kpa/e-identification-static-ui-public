var CancelCache = (function cancelStorage($, undefined) {


    function getTargetParameterFromUrl() {
        var regex = new RegExp("[\\?&]target=([^&#]*)"),
            results = regex.exec(location.search);
        if (results) {

            return results[1]
        }
        return "URL target PARSE ERROR";
    }
    function getCancelParameterFromUrl() {
            var regex = new RegExp("[\\?&]msg=([^&#]*)"),
                results = regex.exec(location.search);
            if (results) {

                 return (results[1] === 'cancel');
                 //return true;
            }
           return undefined;
        }

    function initStorage(){
        if( ! getCancelParameterFromUrl() ){
            sessionStorage.cancelStorage = location.search;
        } else {
            var navigateTo = sessionStorage.cancelStorage;
            sessionStorage.removeItem("cancelStorage");
            window.location.href = navigateTo;
        }
    }
    return {initStorage : initStorage}


})(jQuery);

(function () {
    CancelCache.initStorage();


})();
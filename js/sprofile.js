function getEntityIdOfService(){
    var regex = new RegExp("[\\?&]entityId=([^&#]*)"),
        results = regex.exec(location.search);
    if(results){

        return results[1]
    }
    return "URL EntityId PARSE ERROR";
}
function getTIDOfService(){
    var regex = new RegExp("[\\?&]tid=([^&#]*)"),
        results = regex.exec(location.search);
    if(results){

        return results[1]
    }
    return "URL tid PARSE ERROR";
}

function getIDPElements(){
    var identierList = document.getElementById('sign-in-option-list').getElementsByTagName("a");
    return identierList;
}

function markIdpsInvisibleForThisENDService(){
    var ipdsDocArea = getIDPElements();
    for (var i=0; i< ipdsDocArea.length; i++) {
        //ipdsDocArea[i].style.visibility='hidden';
        ipdsDocArea[i].parentElement.style.display='none';

    }

}

function markIdpFoundVisibleForThisENDService(markThisDIscoNameVisible){
    var ipdsDocArea = getIDPElements();
    for (var i=0; i< ipdsDocArea.length; i++) {
        var discoProvider = ipdsDocArea[i];
        if(discoProvider.getAttribute('id') === markThisDIscoNameVisible){
            discoProvider.parentElement.style.display='inline';
        }
    }
}

function sprofileUrl(){

    var sprofile_url = '../sprofile?entityid=' + encodeURIComponent(getEntityIdOfService());
     return sprofile_url;
}

function getIdentificationProvidersForService(){

    jQuery.ajax( {
        url: sprofileUrl() +'',
        type: 'GET',
        success: function( listtOfIdps ) {
            showAvailableIDPS(listtOfIdps);
        }
    } );
}

function showAvailableIDPS(idpsToShow){
        markIdpsInvisibleForThisENDService();

         for (var i=0; i< idpsToShow.length; i++) {
                var idp = idpsToShow[i];
                var visibleDiscoName = idp.discoId;
                markIdpFoundVisibleForThisENDService(visibleDiscoName);
            }
}

function test(){
    showAvailableIDPS(testdata);
}

(function checkDisruption($, undefined){


    getIdentificationProvidersForService();


})(jQuery);
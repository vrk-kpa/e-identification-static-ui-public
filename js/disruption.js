function getDisruptionMessage(){
     var disruptionMessageArea = document.getElementById("disruption");
    jQuery.ajax( {
        url: '/disruption/disruption_message.json',
        type: 'GET',

        error : function(jqXHR, textStatus, errorThrown) {
            disruptionMessageArea.style.visibility='hidden';
//            if(jqXHR.status == 404 || errorThrown == 'Not Found')
//            {
//                alert("404");
//                disruptionMessageArea.style.visibility='hidden';
//            }
        },
        success: function( response ) {

            var language = 'fi';
            if(typeof response  != 'undefined'){
                if(response.display === false){
                    //
			        $("#disruption").addClass("hidden");
                    return;
                }
                var showDate = response[language]["date"] ;
                var showMsg =  response[language]["message"] ;
		        $("#service-error-date").html(showDate);
		        $("#service-error-text").html(showMsg);
		        //

		        $("#disruption").removeClass("hidden");
		        return;
            }
        }
    } );
}

(function checkDisruption($, undefined){
    getDisruptionMessage();

})(jQuery);
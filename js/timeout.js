(function ($, undefined) {

  function getParameterFromUrl(param) {
    var regex = new RegExp('[\\?&]' + param + '=([^&#]*)'),
      results = regex.exec(location.search);
    if(results){
      return sanitizeURLParameter(results[1]);
    }
    return;
  }

  function sanitizeURLParameter(parameter) {
    return parameter.replace(/[^a-zA-Z0-9:/\.?&=#\-_%]+/g, '');
  }

  var conversation = getParameterFromUrl('conversation');

  $('#return-link').prop('href', '/idp/authn/External?conversation=' +
    conversation + '&tid=' + tid + '&pid=' + pid + '&tag=' + tag + '&status=return');
})(jQuery);

window.onload = function() {
  var regex = new RegExp('[\\?&]countryCode=([^&#]*)');
  var result = regex.exec(window.location.search);
  result === null ? '' : decodeURIComponent(result[1].replace(/\+/g, ' '));
  document.getElementById("country").value = result[1];
  document.cookie = "E-Identification-Country=XX;Path=/; secure; SameSite=Strict";
  document.forms[0].submit();
};

window.onload = function() {

  var CXbutton = document.getElementById('CXbutton');

  //add event listener
  CXbutton.addEventListener('click', function(event) {
    document.getElementById("country").value = "CX";
    document.forms[0].submit();
  });

};

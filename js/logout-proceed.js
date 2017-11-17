var katsoElem = document.getElementById("katso-logout-frame");
if (katsoElem) {
  katsoElem.onload = function() {
    window.location = this.getAttribute("link-target");
  };
}

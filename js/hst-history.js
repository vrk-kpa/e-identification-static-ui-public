window.onpopstate = function(event) {
    window.location.href += '&cancel=1';
};
history.pushState(null, null);

var cancel = function(event) {
    event.preventDefault();
    window.location.search += '&cancel=1';
};

window.onload = function() {
    var goback = document.getElementsByClassName("go-back");
    
    for (var i = 0; i < goback.length; i++) {
        goback[i].addEventListener('click', cancel, false);
    }
};

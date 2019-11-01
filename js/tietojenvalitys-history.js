window.onpopstate = function(event) {
    window.location.href += '&_eventId_RemoveAuthenticationResult';
};
history.pushState(null, null);


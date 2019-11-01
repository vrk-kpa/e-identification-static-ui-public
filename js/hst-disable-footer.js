function disableFooter() {
     $(".footer-links").find("a").addClass("disabled-link").removeAttr("href");
     $(".sign-in-info").find("a").addClass("disabled-link").removeAttr("href");
}
$(document).ready(function(){
     $("#tunnistaudu").click(function(){
         disableFooter();
         $.get("/certcheck", function() {
           $("#login-form").submit();
         }).fail(function() {
            window.location.replace(window.location.href + "&e=1");
         });
     });
});


(function ($, undefined) {
    $('#feedback-submit').click(function () {
        var values = {
            service: $('#service').val(),
            browser: $('#browser').val(),
            type: $('input[name=radio-group-1]:checked').val(),
            message: $('#message').val(),
            name: $('#name').val(),
            email: $('#email').val()
        };
        if ($.trim(values.message)) {
            $.ajax({
                    url: '/feedback',
                    type: 'POST',
                    data: JSON.stringify(values),
                    contentType: 'application/json; charset=utf-8'
                })
                .done(function () {
                    window.location = '/info/palaute/kiitos/';
                })
                .fail(function () {
                    window.location = '/500/';
                });
        }
        else {
            $('#input-alert').show();
        }
    });
})(jQuery);

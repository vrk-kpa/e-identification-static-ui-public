(function ($) {
    $('#reject-link').click(function () {
        // add rejected input to form and submit
        var rejected = $('<input>')
            .attr('type', 'hidden')
            .attr('name', '_eventId_AttributeReleaseRejected');
        $('#attribute-form').append($(rejected)).submit();
    });
})(jQuery);

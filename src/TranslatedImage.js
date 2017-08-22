import React from 'react';
import i18n from 'i18next';

var TranslatedImage = React.createClass({
    propTypes: {
        altKey: React.PropTypes.string.isRequired,
        srcKey: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            <img src={i18n.t(this.props.srcKey)} data-i18n={this.props.srcKey} alt={i18n.t(this.props.altKey)} />
        );
    }
});

export default TranslatedImage;

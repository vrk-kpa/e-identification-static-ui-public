import React from 'react';
import i18n from 'i18next';

var TranslatedLink = React.createClass({
    propTypes: {
        className: React.PropTypes.string,
        // eslint-disable-next-line camelcase
        content_i18n_id: React.PropTypes.string.isRequired,
        id: React.PropTypes.string,
        // eslint-disable-next-line camelcase
        link_i18n_id: React.PropTypes.string.isRequired,
        target: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            target: '_blank'
        };
    },
    getLinkUrl: function() {
        return i18n.t(this.props.link_i18n_id) ||
            i18n.t(this.props.link_i18n_id, {'lng' : i18n.options.fallbackLng[0]});
    },
    render: function() {
        return (
            <a id={this.props.id} data-i18n={this.props.id} className={this.props.className} target={this.props.target} href={this.getLinkUrl()}>{i18n.t(this.props.content_i18n_id)}</a>
        );
    }
});

export default TranslatedLink;

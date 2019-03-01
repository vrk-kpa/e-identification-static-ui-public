import React from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';

class TranslatedLink extends React.Component {
    getLinkUrl() {
        return i18n.t(this.props.link_i18n_id) ||
            i18n.t(this.props.link_i18n_id, {'lng' : i18n.options.fallbackLng[0]});
    }
    render() {
        return (
            <a id={this.props.id} data-i18n={this.props.content_i18n_id} className={this.props.className} target={this.props.target} href={this.getLinkUrl()}>{i18n.t(this.props.content_i18n_id)}</a>
        );
    }
}

TranslatedLink.propTypes = {
    className: PropTypes.string,
    // eslint-disable-next-line camelcase
    content_i18n_id: PropTypes.string.isRequired,
    id: PropTypes.string,
    // eslint-disable-next-line camelcase
    link_i18n_id: PropTypes.string.isRequired,
    target: PropTypes.string
};

TranslatedLink.defaultProps = {
    target: null
};

export default TranslatedLink;

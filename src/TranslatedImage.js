import React from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';

class TranslatedImage extends React.Component {
    render() {
        return (
            <img src={i18n.t(this.props.srcKey)} data-i18n={this.props.srcKey} alt={i18n.t(this.props.altKey)} />
        );
    }
}

TranslatedImage.propTypes = {
    altKey: PropTypes.string.isRequired,
    srcKey: PropTypes.string.isRequired
};

export default TranslatedImage;

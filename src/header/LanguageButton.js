import React from 'react';
import PropTypes from 'prop-types';

class LanguageButton extends React.Component {
    render() {
        return (
            <a className={this.props.selected ? 'selected' : ''}>
                <span className={this.props.selected ? 'selected' : ''}>{this.props.text}</span>
            </a>
        );
    }
}

LanguageButton.contextTypes = {
    queryParams: PropTypes.object
};

LanguageButton.propTypes = {
    buttonLanguage: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    text: PropTypes.string.isRequired
};

export default LanguageButton;

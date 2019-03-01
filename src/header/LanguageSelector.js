import React from 'react';
import PropTypes from 'prop-types';
import LanguageButton from './LanguageButton';

class LanguageSelector extends React.Component {
    render() {
        return (
        <ul className="language-selection">
            <li><LanguageButton selected={this.context.lang === 'fi'} buttonLanguage='fi' text='Suomeksi'/></li>
            <li><LanguageButton selected={this.context.lang === 'sv'} buttonLanguage='sv' text='På svenska'/></li>
            <li><LanguageButton selected={this.context.lang === 'en'} buttonLanguage='en' text='In English'/></li>
        </ul>
        );
    }
}

LanguageSelector.contextTypes = {
    lang: PropTypes.string.isRequired,
};

export default LanguageSelector;

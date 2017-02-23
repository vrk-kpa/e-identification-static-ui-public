import React from 'react';
import LanguageButton from './LanguageButton';

var LanguageSelector = React.createClass({
    contextTypes: {
        lang: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
        <ul className="language-selection">
            <li><LanguageButton selected={this.context.lang === 'fi'} buttonLanguage='fi' text='Suomeksi'/></li>
            <li><LanguageButton selected={this.context.lang === 'sv'} buttonLanguage='sv' text='På svenska'/></li>
            <li><LanguageButton selected={this.context.lang === 'en'} buttonLanguage='en' text='In English'/></li>
        </ul>
        );
    }
});

export default LanguageSelector;

import React from 'react';

var LanguageButton = React.createClass({
    contextTypes: {
        queryParams: React.PropTypes.object
    },
    propTypes: {
        buttonLanguage: React.PropTypes.string.isRequired,
        selected: React.PropTypes.bool,
        text: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            <a className={this.props.selected ? 'selected' : ''}>
                <span className={this.props.selected ? 'selected' : ''}>{this.props.text}</span>
            </a>
        );
    }
});

export default LanguageButton;

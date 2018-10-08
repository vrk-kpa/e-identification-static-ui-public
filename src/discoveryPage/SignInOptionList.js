import React from 'react';

import AuthMethod from './AuthMethod.js';

/* For each input allowed method, call AuthMethod to get hold of href, logo, translated text
 * and return a list with a li-element for each said AuthMethod.
 * From http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
 * return (
        <ul>
          {this.props.results.map(function(result) {
             return <ListItemWrapper key={result.id} data={result}/>;
          })}
        </ul>
      );
 */
var SignInOptionList = React.createClass({
    contextTypes: {
        lang: React.PropTypes.string.isRequired
    },
    propTypes: {
        allowedMethods: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
    },
    render: function() {
        let allowedMethods = this.props.allowedMethods;
        let contextLang = this.context.lang;
        return (
            <ul id="sign-in-option-list" className="sign-in-option-list">
                {allowedMethods.map(function(result) {
                    var displayName;
                    if (result.displayName && result.displayName[contextLang]) {
                        displayName = result.displayName[contextLang];
                    } else if (result.displayName && result.displayName.fi) {
                        displayName = result.displayName.fi;
                    }
                    return (
                        <li key={result.id ? result.id : result.countryCode}>
                            <AuthMethod id={result.id ? result.id : result.countryCode}
                                        imgSrc={result.imgSrc}
                                        localisationId={result.loc_id}
                                        localisedText={displayName}
                                        loginContext={result.loginContext ? result.loginContext : result.eidasLoginContext}
                                        countryCode={result.countryCode}
                                        levelOfAssurance={result.levelOfAssurance}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
});

export default SignInOptionList;

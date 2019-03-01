import React from 'react';
import PropTypes from 'prop-types';

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
class SignInOptionList extends React.Component {

    render() {
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
                                        entityId={result.entityId}
                                        countryCode={result.countryCode}
                                        levelOfAssurance={result.levelOfAssurance}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

SignInOptionList.contextTypes = {
    lang: PropTypes.string.isRequired
};

SignInOptionList.propTypes = {
    allowedMethods: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SignInOptionList;

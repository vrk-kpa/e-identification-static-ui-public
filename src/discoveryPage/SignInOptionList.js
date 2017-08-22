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
    propTypes: {
        allowedMethods: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    },
    render: function() {
        let allowedMethods = this.props.allowedMethods;
        return (
            <ul id="sign-in-option-list" className="sign-in-option-list">
                {allowedMethods.map(function(result) {
                    return <li key={result.id}><AuthMethod methodConfig={result}/></li>;
                })}
            </ul>
        );
    }
});

export default SignInOptionList;

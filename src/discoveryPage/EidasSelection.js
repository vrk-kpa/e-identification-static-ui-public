import React from 'react';
//import AuthMethod from './AuthMethod.js';
import {Link} from 'react-router';
import Translated from '../Translated.js';

var EidasSelection = React.createClass({
    contextTypes: {
        queryParams: React.PropTypes.object.isRequired,
    },
    propTypes: {
        eidasMethods: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
        serviceDisplayName: React.PropTypes.string,
    },
    render: function() {
        let eidasMethods = this.props.eidasMethods;
        let serviceName = this.props.serviceDisplayName;
        let queryParams = this.context.queryParams;
        return (
            <div>
                {eidasMethods.map(function(result) {
                    return (
                        <div id="sign-in-option-eidas" key={result.id} className="sign-in-option-eidas">
                            <Link to={{pathname: '/sivut/country-selection/', query: queryParams, state: {serviceDisplayName: serviceName, discoQueryParams: queryParams}}} id={result.id}>
                                <span className="organization-logo"><img src={result.imgSrc} alt=""/></span>
                                <div className="organization-name-container">
                                    <Translated tag="span" id={result.loc_id} className="organization-name" />
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    }
});

export default EidasSelection;

import React from 'react';

import SignInOptionList from './SignInOptionList.js';

var CountrySelection = React.createClass({
    propTypes: {
        availableCountries: React.PropTypes.array.isRequired
    },

    getMethodsToShow: function(availableCountries) {
        let methodsToShow = [];
        availableCountries.forEach((c) => {
            if (c && c.enabled) {
                methodsToShow.push(c);
            }
        });
        methodsToShow.sort((a, b) => {
            if (a.sortOrder < b.sortOrder)
                return -1;
            else if (a.sortOrder === b.sortOrder)
                return 0;
            else return 1;
        });
        return methodsToShow;
    },

    render: function() {
        let methodsToShow = this.getMethodsToShow(this.props.availableCountries);
        return (
            <div className="row">
                <div className="col-xs-12">
                    <SignInOptionList allowedMethods={methodsToShow}/>
                </div>
            </div>
        );
    },
});

export default CountrySelection;

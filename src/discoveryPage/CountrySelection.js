import React from 'react';
import PropTypes from 'prop-types';

import SignInOptionList from './SignInOptionList.js';
import Translated from '../Translated.js';
import EidasPrivacyStatementLink from './EidasPrivacyStatementLink.js';

class CountrySelection extends React.Component {

    getMethodsToShow(countries) {
        let methodsToShow = [];
        countries.forEach((c) => {
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
    }
    render() {
        let methodsToShow = this.getMethodsToShow(this.props.availableCountries);
        return (
            <div className="row" className="sign-in-options">
                <div className="col-xs-12">
                    <Translated tag="h2" id="valinta__vaihtoehto__otsikko_valitse_maa" />
                    <SignInOptionList allowedMethods={methodsToShow}/>
                </div>
                <hr></hr>
                <div className="col-xs-12">
                    <EidasPrivacyStatementLink/>
                </div>
            </div>
        );
    }
}

CountrySelection.propTypes = {
    availableCountries: PropTypes.array.isRequired
};

export default CountrySelection;

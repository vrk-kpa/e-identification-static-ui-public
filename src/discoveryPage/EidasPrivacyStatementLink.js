import React from 'react';
import {Link} from 'react-router';

import Translated from '../Translated.js';

class EidasPrivacyStatementLink extends React.Component {

    render() {
        return (
            <div className="eidas-tietosuojaseloste-link-container">
                <Link to={{pathname: '/sivut/info/eidas-tietosuojaseloste/'}} id="eidas-tietosuojaseloste-link">
                    <Translated tag="span" id="valinta__eidas-tietosuojaseloste-linkki"/>
                </Link>
            </div>
        );
    }
}

export default EidasPrivacyStatementLink;

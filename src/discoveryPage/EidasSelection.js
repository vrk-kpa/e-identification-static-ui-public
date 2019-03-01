import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Translated from '../Translated.js';
import {Trans} from 'react-i18next';
import {withNamespaces} from 'react-i18next';

class EidasSelection extends React.Component {

    render() {
        let eidasMethods = this.props.eidasMethods;
        let queryParams = this.context.queryParams;
        return (
            <div>
                {eidasMethods.map(function(result) {
                    return (
                        <div id="sign-in-option-eidas" key={result.id} className="sign-in-option-eidas">
                            <Link to={{pathname: '/sivut/country-selection/', query: queryParams}} id={result.id} className="button-style-link">
                                <span className="eidas-logo"><img src={result.imgSrc} alt=""/></span>
                                <div className="eidas-text-container">
                                    <Translated tag="h2" id="valinta__vaihtoehto__eIDAS_title" className="valinta__vaihtoehto__eIDAS_title"/>
                                    <p><Trans i18nKey="valinta__vaihtoehto__eIDAS_text">Yhteiseurooppalainen tunnistautuminen eli <strong className="strong">eIDAS-tunnistautuminen</strong> mahdollistaa julkishallinnon asiointipalvelujen käytön Euroopassa yli maarajojen.</Trans></p>
                                    <Translated tag="span" id={result.loc_id} className="eidas-link" />
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    }
}

EidasSelection.contextTypes = {
    queryParams: PropTypes.object.isRequired,
};
EidasSelection.propTypes = {
    eidasMethods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withNamespaces('translation')(EidasSelection);

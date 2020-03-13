import React from 'react';

import TranslatedLink from '../TranslatedLink';

class EidasPrivacyStatementLink extends React.Component {

    render() {
        return (
            <div className="eidas-tietosuojaseloste-link-container">
                <TranslatedLink link_i18n_id='valinta__eidas_tietosuoja_link' content_i18n_id='valinta__eidas_tietosuoja' id='valinta__eidas_tietosuoja' />
            </div>
        );
    }
}

export default EidasPrivacyStatementLink;

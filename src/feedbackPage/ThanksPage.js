import React from 'react';

import Translated from '../Translated.js';
import TranslatedLink from '../TranslatedLink.js';

class ThanksPage extends React.Component {
    render() {
        return (
            <main id="main" role="main" name="main">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-8">
                                <Translated tag="h2" id="palaute_kiitos__otsikko">Kiitos palautteestasi!</Translated>
                                <Translated tag="p" id="palaute_kiitos__info_1">Palaute käsitellään Kansalaisneuvonnassa.</Translated>
                                <TranslatedLink id="palaute_kiitos__linkki" content_i18n_id="palaute_kiitos__linkki" link_i18n_id="palaute_kiitos__linkki_url" >www.kansalaisneuvonta.fi</TranslatedLink>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default ThanksPage;

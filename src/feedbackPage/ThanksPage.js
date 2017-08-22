import React from 'react';

import Translated from '../Translated.js';
import TranslatedLink from '../TranslatedLink.js';
import TranslatedTitle from '../TranslatedTitle.js';

class ThanksPage extends React.Component {
    componentDidMount() {
        document.title = TranslatedTitle.getTitle('palaute_kiitos__otsikko');
    }
    render() {
        return (
            <div className="col-xs-12 col-md-8 thanks-page">
                <Translated tag="h2" id="palaute_kiitos__otsikko">Kiitos palautteestasi!</Translated>
                <Translated tag="p" id="palaute_kiitos__info_1">Palaute käsitellään Kansalaisneuvonnassa.</Translated>
                <TranslatedLink id="palaute_kiitos__linkki" content_i18n_id="palaute_kiitos__linkki" link_i18n_id="palaute_kiitos__linkki_url" >www.kansalaisneuvonta.fi</TranslatedLink>
            </div>
        );
    }
}

export default ThanksPage;

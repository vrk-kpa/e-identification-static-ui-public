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
                <Translated tag="h1" id="palaute_kiitos__otsikko"/>
                <Translated tag="p" id="palaute_kiitos__info_1"/>
                <TranslatedLink id="palaute_kiitos__linkki" content_i18n_id="palaute_kiitos__linkki" link_i18n_id="palaute_kiitos__linkki_url" />
            </div>
        );
    }
}

export default ThanksPage;

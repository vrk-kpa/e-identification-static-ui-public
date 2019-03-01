import React from 'react';

import Translated from '../Translated.js';
import TranslatedTitle from '../TranslatedTitle.js';

class CancelledPage extends React.Component {
    componentDidMount() {
        document.title = TranslatedTitle.getTitle('palaute_peruuta__otsikko');
    }
    render() {
        return (
            <div className="col-xs-12 col-md-8 thanks-page">
                <Translated tag="h1" id="palaute_peruuta__otsikko"/>
            </div>
        );
    }
}

export default CancelledPage;

import React from 'react';

import Translated from '../Translated.js';
import TranslatedTitle from '../TranslatedTitle.js';

class InitRequestParametersMissingPage extends React.Component {
    componentDidMount() {
        document.title = TranslatedTitle.getTitle('virhesivu_tuplaklikkaus_pankki_otsikko');
    }
    render() {
        return (
            <main id="main" role="main" name="main">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-8">
                                <div className="error-box" lang="fi">
                                    <Translated tag="h2" id="virhesivu_tuplaklikkaus_pankki_otsikko"/>
                                    <Translated tag="p" id="virhesivu_tuplaklikkaus_pankki"/> <br/>
                                    <div id="error-code"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    };
}

export default InitRequestParametersMissingPage;

import React from 'react';

import Translated from '../Translated.js';
import TranslatedTitle from '../TranslatedTitle.js';

class CookiesDisabledPage extends React.Component {
    componentDidMount() {
        document.title = TranslatedTitle.getTitle('virhesivu__evasteet_estetty_otsikko');
    }
    render() {
        return (
            <main id="main" role="main" name="main">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-8">
                                <div className="error-box" lang="fi">
                                    <Translated tag="h2" id="virhesivu__evasteet_estetty_otsikko_fi"/>
                                    <Translated tag="p" id="virhesivu__evasteet_estetty_fi"/> <br/>
                                    <Translated tag="h2" id="virhesivu__evasteet_estetty_otsikko_sv"/>
                                    <Translated tag="p" id="virhesivu__evasteet_estetty_sv"/> <br/>
                                    <Translated tag="h2" id="virhesivu__evasteet_estetty_otsikko_en"/>
                                    <Translated tag="p" id="virhesivu__evasteet_estetty_en"/>
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

export default CookiesDisabledPage;

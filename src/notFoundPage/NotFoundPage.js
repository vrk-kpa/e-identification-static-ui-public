import React from 'react';

import Translated from '../Translated.js';
import TranslatedLink from '../TranslatedLink.js';
import TranslatedTitle from '../TranslatedTitle.js';

class NotFoundPage extends React.Component {
    componentDidMount() {
        document.title = TranslatedTitle.getTitle('virhesivu__ei_loytynyt');
    }
    render() {
        return (
            <main id="main" role="main" name="main">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-8">
                                <div className="error-box" lang="fi">
                                    <Translated tag="h2" id="virhesivu__ei_loytynyt"/>
                                    <Translated tag="p" id="virhesivu__palautepyynto"/>
                                    <TranslatedLink link_i18n_id="/sivut/info/virhepalaute/" id="virhesivu__palautelinkki" content_i18n_id="virhesivu__palautelinkki" className="button-secondary"/>
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

export default NotFoundPage;

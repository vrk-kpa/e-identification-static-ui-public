import React from 'react';
import {Link} from 'react-router';
import i18n from 'i18next';

import Translated from '../Translated.js';
import TranslatedTitle from '../TranslatedTitle.js';

class NotFoundPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {errorTime: new Date()};
    }

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
                                    <Translated tag="h1" id="virhesivu__ei_loytynyt"/>
                                    <Translated tag="p" id="virhesivu__palautepyynto"/>
                                    <Link to={{
                                            pathname: '/sivut/info/virhepalaute/',
                                            query: {time: this.state.errorTime.valueOf(), frompage: '404'},
                                            state: {sessionContextMissing: true}
                                        }}
                                        id="virhesivu__palautelinkki"
                                        className="button-secondary"
                                    >
                                        {i18n.t('virhesivu__palautelinkki')}
                                    </Link>
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

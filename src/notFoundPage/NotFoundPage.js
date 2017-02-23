
import React from 'react';

import Translated from '../Translated.js';
import TranslatedLink from '../TranslatedLink.js';

class NotFoundPage extends React.Component {
    render() {
        return (
            <main id="main" role="main" name="main">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-8">
                                <div lang="fi">
                                    <Translated tag="h2" id="virhesivu__ei_loytynyt">Hakemaasi sivua ei löytynyt</Translated>
                                    <Translated tag="p" id="virhesivu__palautepyynto">Mikäli ongelma toistuu, lähetä meille siitä palautetta, jotta voimme selvittää ja korjata mahdollisesti toistuvan vian.</Translated>
                                    <ul className="link-list">
                                        <li><TranslatedLink link_i18n_id="/sivut/info/palaute/" id="virhesivu__palautelinkki" content_i18n_id="virhesivu__palautelinkki">Ilmoita virheestä tai anna palautetta</TranslatedLink></li>
                                    </ul>
                                </div>

                                <div id="error-code"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    };
}

export default NotFoundPage;

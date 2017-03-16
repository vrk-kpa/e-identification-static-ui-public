
import React from 'react';

import Translated from '../Translated.js';
import TranslatedLink from '../TranslatedLink.js';
import ErrorCodeLine from './ErrorCodeLine.js';

let InternalErrorPage = React.createClass({
    propTypes: {
        location: React.PropTypes.object.isRequired
    },
    getErrorCode: function() {
        return this.props.location.query.t;
    },
    getErrorMessage: function() {
        return this.props.location.query.m;
    },
    render: function() {
        return (
            <main id="main" role="main" name="main">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-8">
                                <div className="error-box">
                                    <Translated tag="h2" id="virhesivu2__otsikko">Jokin meni nyt pieleen</Translated>
                                    <Translated tag="p" id="virhesivu2__sisainen_virhe">Tunnistautumisessa tapahtui virhe ja tunnistautuminen keskeytyi. Tietosi eivät kuitenkaan ole vaarantuneet, eivätkä ne voi päätyä vahingossa muiden tietoon.</Translated>
                                    <Translated tag="p" id="virhesivu2__palautepyynto">Mikäli ongelma toistuu, lähetä meille siitä palautetta, jotta voimme selvittää ja korjata mahdollisesti toistuvan vian.</Translated>
                                    <TranslatedLink link_i18n_id="/sivut/info/virhepalaute/" id="virhesivu2__palalutelinkki" content_i18n_id="virhesivu2__palalutelinkki">Lähetä palautetta lomakkeella.</TranslatedLink>
                                    <ErrorCodeLine errorMessage={this.getErrorMessage()} errorCode={this.getErrorCode()}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
});

export default InternalErrorPage;

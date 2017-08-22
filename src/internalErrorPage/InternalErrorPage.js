
import React from 'react';

import Translated from '../Translated.js';
import TranslatedLink from '../TranslatedLink.js';
import TranslatedTitle from '../TranslatedTitle.js';
import ErrorCodeLine from './ErrorCodeLine.js';

let InternalErrorPage = React.createClass({
    propTypes: {
        location: React.PropTypes.object.isRequired
    },
    componentDidMount: function() {
        document.title = TranslatedTitle.getTitle('virhesivu2__otsikko');
    },
    getErrorCode: function() {
        return this.props.location.query.t;
    },
    getErrorMessage: function() {
        return this.props.location.query.m;
    },
    getCombinedError: function() {
      let combined = '';
      let code = this.getErrorCode();
      let message = this.getErrorMessage();

      if (code !== undefined) {
        combined = code;
        if (message !== undefined) {
          combined = combined + ' / ' + message;
        }
      } else if (message !== undefined) {
        combined = message;
      }
      return encodeURIComponent(combined);
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
                                    <Translated tag="p" id="virhesivu2__ratkaisu">Ratkaistaksesi tilanne kokeile seuraavia toimia</Translated>
                                    <ul className="bulleted-list">
                                      <Translated tag="li" id="virhesivu2__ohje1">Tyhjennä selaimen välimuisti ja tunnistaudu sen jälkeen uudelleen.</Translated>
                                      <Translated tag="li" id="virhesivu2__ohje2">unnistaudu uudelleen käyttämällä toista selainta.</Translated>
                                    </ul>
                                    <Translated tag="p" id="virhesivu2__palautepyynto">Mikäli ongelma toistuu, lähetä meille siitä palautetta, jotta voimme selvittää ja korjata mahdollisesti toistuvan vian.</Translated>
                                    <TranslatedLink link_i18n_id={(this.getErrorMessage() || this.getErrorCode()) ? '/sivut/info/virhepalaute/?error=' + this.getCombinedError() : '/sivut/info/virhepalaute/'} id="virhesivu2__palalutelinkki" content_i18n_id="virhesivu2__palalutelinkki" className="button-secondary">Ilmiota virheestä</TranslatedLink>
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

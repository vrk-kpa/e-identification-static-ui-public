import React from 'react';

import Translated from '../Translated.js';
import TranslatedImage from '../TranslatedImage.js';
import TranslatedLink from '../TranslatedLink.js';

let Footer = React.createClass({
    scrollToTop: function(e) {
      e.preventDefault();
      window.scrollTo(0, 0);
    },
    render: function() {
        return (
            <footer id="page-footer" role="contentinfo">
                <Translated tag="a" href="#" className="go-up" id="footer__takaisin_ylös" onClick={this.scrollToTop}>Takaisin ylös</Translated>
                <div id="footer-content" className={'container'}>
                  <span className="site-logo">
                      <TranslatedImage srcKey="header__logo" altKey="header__suomifi-tunnistaminen" />
                  </span>
                  <div className="footer-links">
                    <ul className="footer-links-info">
                        <li><TranslatedLink id="footer__tietoa_tunnistautumisesta" content_i18n_id="footer__tietoa_tunnistautumisesta" link_i18n_id="/sivut/info/tietoapalvelusta/">Tietoa Suomi.fi-tunnistuksesta</TranslatedLink><Translated tag="span" className="sr-only" id="footer__linkki_avautuu_uuteen_ikkunaan">Linkki avautuu uuteen ikkunaan</Translated></li>
                        <li><TranslatedLink id="footer__tietosuojaseloste" content_i18n_id="footer__tietosuojaseloste" link_i18n_id="/sivut/info/tietosuojaseloste/">Tietosuojaseloste</TranslatedLink><Translated tag="span" className="sr-only" id="footer__linkki_avautuu_uuteen_ikkunaan">Linkki avautuu uuteen ikkunaan</Translated></li>
                    </ul>
                    <ul className="footer-links-feedback">
                        <li><TranslatedLink id="footer__palaute" content_i18n_id="footer__anna_palautetta" link_i18n_id="/sivut/info/palaute/">Anna palautetta</TranslatedLink><Translated tag="span" className="sr-only" id="footer__linkki_avautuu_uuteen_ikkunaan">Linkki avautuu uuteen ikkunaan</Translated></li>
                        <li><TranslatedLink id="footer__virhepalaute" content_i18n_id="footer__virhepalaute" link_i18n_id="/sivut/info/virhepalaute/">Ilmoita virheestä</TranslatedLink><Translated tag="span" className="sr-only" id="footer__linkki_avautuu_uuteen_ikkunaan">Linkki avautuu uuteen ikkunaan</Translated></li>
                    </ul>
                  </div>
                </div>
            </footer>
        );
    }
});

export default Footer;

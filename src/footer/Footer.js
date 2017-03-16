import React from 'react';

import Translated from '../Translated.js';
import TranslatedLink from '../TranslatedLink.js';

var Footer = React.createClass({
    render: function() {
        return (
            <footer id="page-footer" role="contentinfo">
                <div className="container">
                    <div className="row">
                        <div id="footer-logo">
                            <img src="/resources/img/footer-logo2.svg" alt="Väestörekisterikeskus logo" />
                        </div>
                        <p><Translated tag="span" id="footer__tunnistuspalvelusta_vastaa">Kansalaisen tunnistuspalvelusta vastaa</Translated>&nbsp;
                        <TranslatedLink id="footer__vaestorekisterikeskus" content_i18n_id="footer__vaestorekisterikeskus" link_i18n_id="footer__vrk_url">Väestörekisterikeskus</TranslatedLink></p>
                        <ul className="link-list">
                            <li><TranslatedLink id="footer__tietoa_tunnistautumisesta" content_i18n_id="footer__tietoa_tunnistautumisesta" link_i18n_id="/sivut/info/tietoapalvelusta/">Tietoa Suomi.fi-tunnistamisesta</TranslatedLink><Translated tag="span" className="sr-only" id="footer__linkki_avautuu_uuteen_ikkunaan">Linkki avautuu uuteen ikkunaan</Translated></li>
                            <li><TranslatedLink id="footer__palaute" content_i18n_id="footer__anna_palautetta" link_i18n_id="/sivut/info/palaute/">Anna palautetta</TranslatedLink><Translated tag="span" className="sr-only" id="footer__linkki_avautuu_uuteen_ikkunaan">Linkki avautuu uuteen ikkunaan</Translated></li>
                            <li><TranslatedLink id="footer__tietosuojaseloste" content_i18n_id="footer__tietosuojaseloste" link_i18n_id="/sivut/info/tietosuojaseloste/">Henkilötietolain mukainen tietosuojaseloste</TranslatedLink><Translated tag="span" className="sr-only" id="footer__linkki_avautuu_uuteen_ikkunaan">Linkki avautuu uuteen ikkunaan</Translated></li>
                            <li><TranslatedLink id="footer__virhepalaute" content_i18n_id="footer__virhepalaute" link_i18n_id="/sivut/info/virhepalaute/">Ilmoita virheestä</TranslatedLink><Translated tag="span" className="sr-only" id="footer__linkki_avautuu_uuteen_ikkunaan">Linkki avautuu uuteen ikkunaan</Translated></li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
});

export default Footer;

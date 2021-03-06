import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import i18n from 'i18next';

import Translated from '../Translated.js';
import TranslatedImage from '../TranslatedImage.js';
import TranslatedLink from '../TranslatedLink';

class Footer extends React.Component {
    scrollToTop(e) {
      e.preventDefault();
      window.scrollTo(0, 0);
    }

    getError() {
        let combined = '';
        let code = this.props.location.query.t;
        let message = this.props.location.query.m;
        if (!code && !message) return '';

        if (code !== undefined) {
            combined = code;
            if (message !== undefined) {
            combined = combined + ' / ' + message;
            }
        } else if (message !== undefined) {
            combined = message;
        }
      return combined;
    }

    isOnErrorPage(type) {
       const {location} = this.props;
       return location && location.pathname.indexOf('/' + type + '/') !== -1;
    }

    createErrorFeedbackQuery() {
        const query = {};
        const is404 = this.isOnErrorPage('404');
        const is500 = this.isOnErrorPage('500');

        const knownType = is404 ? '404' : (is500 ? '500' : null);

        if (is404 || is500) {
            query.time = new Date().valueOf();

            const error = this.getError();
            if (error && error.length > 0) {
                query.error = this.getError();
            }

            if (knownType !== null) {
                query.frompage = knownType;
            }

        }
        return query;
    }


    render() {
        const errorFeedbackQuery =  this.createErrorFeedbackQuery();

        const {location} = this.props;
        const onDiscoveryPage = location && location.pathname.indexOf('/discovery-page/') !== -1;

        return (
            <footer id="page-footer" role="contentinfo">
                <Translated tag="a" href="#" className="go-up" id="footer__takaisin_ylös" onClick={this.scrollToTop}/>
                <div id="footer-content" className={'container'}>
                  <span className="site-logo">
                      <TranslatedImage srcKey="header__logo" altKey="header__suomifi-tunnistaminen" />
                      { (onDiscoveryPage) ? <Translated tag="p" id="valinta__suomifi-tunnistaminen-roadmap" className="small" /> : '' }
                  </span>
                  <div className="footer-links">
                    <ul className="footer-links-info">
                        <li>
                            <Link to={{pathname: '/sivut/info/tietoapalvelusta/', state: {sessionContextMissing: this.props.sessionContextMissing}}} id="footer__tietoa_tunnistautumisesta">
                                {i18n.t('footer__tietoa_tunnistautumisesta')}
                            </Link>
                        </li>
                        <li>
                            <TranslatedLink link_i18n_id='footer__tietosuoja_link' content_i18n_id='footer__tietosuoja' id='footer__tietosuoja' />
                        </li>
                    </ul>
                    <ul className="footer-links-feedback">
                        <li>
                            <Link to={{pathname: '/sivut/info/palaute/', state: {sessionContextMissing: this.props.sessionContextMissing}}} id="footer__anna_palautetta">
                                {i18n.t('footer__anna_palautetta')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={{
                                    pathname: '/sivut/info/virhepalaute/',
                                    state: {sessionContextMissing: this.props.sessionContextMissing},
                                    query: errorFeedbackQuery}}
                                id="footer__virhepalaute">
                                {i18n.t('footer__virhepalaute')}
                            </Link>
                        </li>
                    </ul>
                  </div>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    location: PropTypes.object.isRequired,
    sessionContextMissing: PropTypes.bool
};

export default Footer;

import React from 'react';

import TranslatedImage from '../TranslatedImage.js';
import Translated from '../Translated.js';

class Header extends React.Component {
    render() {
        return (
          <header id="page-header" role="banner">
              <div id="header-content" className={'container'}>
                  <div id="suomi.fi-tunnistaminen" className="site-logo">
                      <TranslatedImage srcKey="header__logo" altKey="header__suomifi-tunnistaminen" />
                      <Translated tag="span" id="header__suomifi-tunnistaminen" className="visuallyhidden" />
                  </div>
              </div>
          </header>
        );
    }
}

export default Header;

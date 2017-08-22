import React from 'react';

//import ReactBase from '../ReactBase';
import TranslatedImage from '../TranslatedImage.js';
import Translated from '../Translated.js';

let Header =  React.createClass({
    render: function() {
        return (
          <header id="page-header" role="banner">
              <div id="header-content" className={'container'}>
                  <h1 id="suomi.fi-tunnistaminen" className="site-logo">
                      <TranslatedImage srcKey="header__logo" altKey="header__suomifi-tunnistaminen" />
                      <Translated tag="span" id="header__suomifi-tunnistaminen" className="visuallyhidden" />
                  </h1>
              </div>
          </header>
        );
    }
});

export default Header;

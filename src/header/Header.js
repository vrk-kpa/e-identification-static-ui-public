import React from 'react';
import i18n from 'i18next';

import ReactBase from '../ReactBase';
import LanguageSelector from './LanguageSelector.js';
import TranslatedImage from './TranslatedImage.js';

class Header extends ReactBase {
    constructor() {
        super();
        this._increaseFontSizeClicked = this._increaseFontSizeClicked.bind(this);
        this._decreaseFontSizeClicked = this._decreaseFontSizeClicked.bind(this);
        this.state = {
            textSize: 3
        };
    }

    _increaseFontSizeClicked(event) {
        // need to do this old-school as html is outside of react managed elements.
        var html = document.documentElement;

        var textSize = this.state.textSize;

        if (textSize < 5) {
            var newTextSize = textSize * 1 + 1;
            var newTextSizeClass = 'text-size-' + newTextSize;
            html.setAttribute('class', newTextSizeClass);
            html.setAttribute('data-text-size', newTextSize);
            this.setState({
                textSize: newTextSize
            });
        }
    }

    _decreaseFontSizeClicked(event) {
        // need to do this old-school as html is outside of react managed elements.
        var html = document.documentElement;

        var textSize = this.state.textSize;

        if (textSize > 1) {
            var newTextSize = textSize * 1 - 1;
            var newTextSizeClass = 'text-size-' + newTextSize;
            html.setAttribute('class', newTextSizeClass);
            html.setAttribute('data-text-size', newTextSize);
            this.setState({
                textSize: newTextSize
            });
        }
    }

    render() {

        var increaseDisabledClass = this.state.textSize >= 5 ? 'disabled' : '';
        var decreaseDisabledClass = this.state.textSize <= 1 ? 'disabled' : '';

        return (
        <header id="page-header" role="banner">
            <div id="site-options">
                <div className="container">
                    <LanguageSelector />
                    <ul className="adjust-font-size" aria-hidden="true">
                        <li><button onClick={this._decreaseFontSizeClicked} title={i18n.t('header__pienenna_tekstikokoa')} className={`decrease-font-size ${decreaseDisabledClass}`}>A-</button></li>
                        <li><button onClick={this._increaseFontSizeClicked} title={i18n.t('header__suurenna_tekstikokoa')} className={`increase-font-size ${increaseDisabledClass}`}>A+</button></li>
                    </ul>
                </div>
            </div>

            <div id="header-content" className={'container'}>
                <div className="header-row top-row">
                    <div className="container">
                        <div className="centered">
                            <div className="logo-row">
                                <h1 id="suomi.fi-tunnistaminen" className="site-logo">
                                    <TranslatedImage srcKey="header__logo" altKey="header__suomifi-tunnistaminen" />
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-row" id="main-menu">
                    <div className="container">
                        <div className="header-actions">
                        </div>
                    </div>
                </div>
            </div>
        </header>
        );
    }
}

export default Header;

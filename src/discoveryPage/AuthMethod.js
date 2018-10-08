import React from 'react';
import Translated from '../Translated.js';

/* Takes in a method key(this.props?) and uses its method config to return an href, an image(source),
 * and a Translated text with span tag.
 */
let AuthMethod = React.createClass({
    contextTypes: {
        queryParams: React.PropTypes.object.isRequired,
        lang: React.PropTypes.string.isRequired
    },
    propTypes: {
        countryCode: React.PropTypes.string,
        id: React.PropTypes.string.isRequired,
        imgSrc: React.PropTypes.string.isRequired,
        levelOfAssurance: React.PropTypes.string,
        localisationId: React.PropTypes.string,
        localisedText: React.PropTypes.string,
        loginContext: React.PropTypes.string.isRequired,
    },
    getUrl: function() {
        let loginContext = this.props.loginContext;
        let levelOfAssurance = this.props.levelOfAssurance;
        let lang = this.context.lang;
        let targetParam = '/sp-secured?' +
            'tid=' + this.context.queryParams.tid +
            '&pid=' + this.context.queryParams.pid +
            '&tag=' + this.context.queryParams.tag;
        let hrefLink = loginContext + ((levelOfAssurance) ? levelOfAssurance : '');
        if (!this.props.countryCode) { /* This is temporary fix. Lang parameter is not need after KAPA-4646 merge */
            hrefLink += '/' + lang;
        }
        hrefLink += '?SAMLDS=1';
        hrefLink += ((this.props.countryCode) ? '&countryCode=' + this.props.countryCode : '');
        hrefLink += '&target=';
        return hrefLink + encodeURIComponent(targetParam);
    },
    render: function() {
        return (
            <a href={this.getUrl()} id={this.props.id}>
                <span className="organization-logo"><img src={this.props.imgSrc} alt=""/></span>
                <div className="organization-name-container">
                {(this.props.localisationId && this.props.localisationId !== '') ?
                    <Translated tag="span" id={this.props.localisationId} className="organization-name" /> :
                    <span className="organization-name">{this.props.localisedText}</span>
                }
                </div>
            </a>
        );
    }
});

export default AuthMethod;

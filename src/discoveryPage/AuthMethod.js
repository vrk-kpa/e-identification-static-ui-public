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
        methodConfig: React.PropTypes.object.isRequired
    },
    getUrl: function() {
        let loginContext = this.props.methodConfig.loginContext;
        let lang = this.context.lang;
        let targetParam = this.context.queryParams.target;
        let hrefLink =  '/Shibboleth.sso/' + loginContext + '/' + lang;
        return hrefLink + '?SAMLDS=1&target=' + encodeURIComponent(targetParam);
    },
    render: function() {
        return (
            <a href={this.getUrl()} id={this.props.methodConfig.id}>
                <span className="organization-logo"><img src={this.props.methodConfig.img_src} alt=""/></span>
                <Translated tag="span" id={this.props.methodConfig.loc_id} className="organization-name" />
            </a>
        );
    }
});

export default AuthMethod;

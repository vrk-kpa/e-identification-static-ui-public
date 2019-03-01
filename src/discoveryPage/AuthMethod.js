import React from 'react';
import PropTypes from 'prop-types';
import Translated from '../Translated.js';

/* Takes in a method key(this.props?) and uses its method config to return an href, an image(source),
 * and a Translated text with span tag.
 */
class AuthMethod extends React.Component {

    getUrl() {
        let targetParam =
            '&tid=' + this.context.queryParams.tid +
            '&pid=' + this.context.queryParams.pid +
            '&tag=' + this.context.queryParams.tag +
            ((this.props.entityId) ? '&entityId=' + encodeURIComponent(this.props.entityId) : '');
        let hrefLink =  '/idp/authn/External?conversation=' + this.context.queryParams.conversation;
        hrefLink += ((this.props.countryCode) ? '&countryCode=' + this.props.countryCode : '');
        return hrefLink + targetParam;
    }

    render() {
        return (
            <a href={this.getUrl()} id={this.props.id} className="button-style-link">
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
}

AuthMethod.contextTypes = {
    queryParams: PropTypes.object.isRequired,
    lang: PropTypes.string.isRequired
};
AuthMethod.propTypes = {
    countryCode: PropTypes.string,
    entityId: PropTypes.string,
    id: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    levelOfAssurance: PropTypes.string,
    localisationId: PropTypes.string,
    localisedText: PropTypes.string,
};

export default AuthMethod;

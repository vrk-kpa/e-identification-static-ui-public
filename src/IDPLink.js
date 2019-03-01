import React from 'react';
import PropTypes from 'prop-types';
import * as Utils from './utils.js';

class IDPLink extends React.Component {

    getChildContext() {
        return {
            url: this.getUrl()
        };
    }
    getUrl() {
        return Utils.getReturnLinkUrl(this.props.status, this.context.queryParams);
    }
    getClass() {
        return 'go-back' + (this.props.visible ? '' : ' visuallyhidden');
    }
    getAriaHidden() {
        return (this.props.visible ? 'false' : 'true');
    }
    render() {
        return (
            <a href={this.getUrl()} className={this.getClass()} aria-hidden={this.getAriaHidden()}>
                {this.props.children}
            </a>
        );
    }
}

IDPLink.defaultProps = {
    visible: true
};

IDPLink.contextTypes = {
    queryParams: PropTypes.object.isRequired
};

IDPLink.childContextTypes = {
    url: PropTypes.string,
};

IDPLink.propTypes = {
    children: PropTypes.element,
    conversation: PropTypes.string,
    status: PropTypes.string.isRequired,
    visible: PropTypes.bool
};

export default IDPLink;

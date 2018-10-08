import React from 'react';

let IDPLink = React.createClass({
    contextTypes: {
        queryParams: React.PropTypes.object.isRequired
    },
    childContextTypes: {
        url: React.PropTypes.string,
    },
    getChildContext: function() {
        return {
            url: this.getUrl()
        };
    },
    propTypes: {
        children: React.PropTypes.element,
        conversation: React.PropTypes.string,
        status: React.PropTypes.string.isRequired,
        visible: React.PropTypes.bool
    },
    getDefaultProps() {
        return {
            visible: true
        };
    },
    getUrl() {
        let url = '/idp/authn/External?status=' + this.props.status;
        url = this.props.conversation ? url + '&conversation=' + this.props.conversation : url;
        let tid = this.context.queryParams.tid;
        url = tid ? url + '&tid=' + tid : url;
        let pid = this.context.queryParams.pid;
        url = pid ? url + '&pid=' + pid : url;
        let tag = this.context.queryParams.tag;
        url = tag ? url + '&tag=' + tag : url;
        return url;
    },
    getClass() {
        return 'go-back' + (this.props.visible ? '' : ' visuallyhidden');
    },
    getAriaHidden() {
        return (this.props.visible ? 'false' : 'true');
    },
    render() {
        return (
            <a href={this.getUrl()} className={this.getClass()} aria-hidden={this.getAriaHidden()}>
                {this.props.children}
            </a>
        );
    }
});

export default IDPLink;

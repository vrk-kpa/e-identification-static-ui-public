import React from 'react';

function getTidParameterFromTarget(target) {
    var regex = new RegExp('[\\?&]tid=([^&#]*)');
    var results = regex.exec(target);
    if (results) {
        return results[1];
    }
    return;
}

function getPidParameterFromTarget(target) {
    var regex = new RegExp('[\\?&]pid=([^&#]*)');
    var results = regex.exec(target);
    if (results) {
        return results[1];
    }
    return;
}

function getTagParameterFromTarget(target) {
    var regex = new RegExp('[\\?&]tag=([^&#]*)');
    var results = regex.exec(target);
    if (results) {
        return results[1];
    }
    return;
}


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
        let target = this.context.queryParams.target;
        url = this.props.conversation ? url + '&conversation=' + this.props.conversation : url;
        let tid = getTidParameterFromTarget(target);
        url = tid ? url + '&tid=' + tid : url;
        let pid = getPidParameterFromTarget(target);
        url = pid ? url + '&pid=' + pid : url;
        let tag = getTagParameterFromTarget(target);
        url = tag ? url + '&tag=' + tag : url;
        return url;
    },
    getClass() {
        return 'go-back' + this.props.visible ? '' : ' visuallyhidden';
    },
    render() {
        return (
            <a href={this.getUrl()} className={this.getClass()}>
                {this.props.children}
            </a>
        );
    }
});

export default IDPLink;

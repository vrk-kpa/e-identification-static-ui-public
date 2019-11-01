import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {

    componentDidCatch(/*error, errorInfo*/) {

        this.redirectToUrl(`/sivut/500/?t=${this.props.tag}&m=${this.props.errorCode}`);
    }

    redirectToUrl(url) {
        window.location.href = url;
    }

    render() {
      return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
    errorCode: PropTypes.string,
    tag: PropTypes.string
};

ErrorBoundary.defaultProps = {
    errorCode: 'reactRendErr',
    tag: ''
};

ErrorBoundary.contextTypes = {
    queryParams: PropTypes.object.isRequired,
};


export default ErrorBoundary;

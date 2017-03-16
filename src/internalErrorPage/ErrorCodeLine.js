import React from 'react';

import Translated from '../Translated.js';

let ErrorCodeLine = React.createClass({
    propTypes: {
        errorCode: React.PropTypes.string.isRequired,
        errorMessage: React.PropTypes.string.isRequired
    },
    render: function() {
        if (this.props.errorCode && this.props.errorMessage) {
            return (
                <p>
                    <Translated tag="span" id="virhesivu2__virhekoodi"/>: {this.props.errorCode} / {this.props.errorMessage}
                </p>
            );
        } else {
            return null;
        }
    }
});

export default ErrorCodeLine;

import React from 'react';
import PropTypes from 'prop-types';

import Translated from '../Translated.js';

class ErrorCodeLine extends React.Component {

    render() {
        if (this.props.errorCode && this.props.errorMessage) {
            return (
                <p>
                    <Translated tag="span" id="virhesivu2__virhekoodi"/>:&nbsp;
                        <span id="errorcode">{this.props.errorCode}</span>&nbsp;/&nbsp;
                        <span id="errormessage">{this.props.errorMessage}</span>
                </p>
            );
        } else {
            return null;
        }
    }
}

ErrorCodeLine.propTypes = {
    errorCode: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired
};

export default ErrorCodeLine;

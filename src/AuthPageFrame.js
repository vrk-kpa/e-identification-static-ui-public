import React from 'react';
import Translated from './Translated.js';
import PropTypes from 'prop-types';

class AuthPageFrame extends React.Component {
   render() {
        return (

            <div className="row">
                <div className="col-xs-12 identification-info">
                    <h1>
                        <Translated tag="div" id="valinta__olet_tunnistautumassa_palveluun" className="small" />
                        <div id="displayName" className="service-display-name">{this.props.serviceDisplayName}</div>
                    </h1>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

AuthPageFrame.propTypes = {
    children: PropTypes.element,
    serviceDisplayName: PropTypes.string,

};

export default AuthPageFrame;

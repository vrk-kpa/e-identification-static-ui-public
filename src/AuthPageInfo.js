import React from 'react';
import Translated from './Translated.js';

class AuthPageFrame extends React.Component {
   render() {
        return (

            <div className="row">
                <div className="col-xs-12 identification-info">
                    <Translated tag="span" id="valinta__olet_tunnistautumassa_palveluun" />
                    <h2 id="displayName">{this.props.serviceDisplayName}</h2>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

AuthPageFrame.propTypes = {
    children: React.PropTypes.element,
    serviceDisplayName: React.PropTypes.string,

};

export default AuthPageFrame;

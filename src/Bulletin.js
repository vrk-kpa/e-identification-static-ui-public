import React from 'react';
import PropTypes from 'prop-types';

class Bulletin extends React.Component {
    render() {
        return (
            <div id="bulletin" className="box bulletin-box">
                <h4>{this.props.heading}</h4>
                {this.props.content.map((element, index) => {
                        return (
                            <p id="service-error-text" key={index}>{element}</p>
                        );
                })}
            </div>
        );
    }
}

Bulletin.propTypes = {
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
    heading: PropTypes.string.isRequired
};

Bulletin.contextTypes = {
    lang: PropTypes.string.isRequired,
};

export default Bulletin;

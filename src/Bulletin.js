import React from 'react';

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
    content: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    heading: React.PropTypes.string.isRequired
};

Bulletin.contextTypes = {
    lang: React.PropTypes.string.isRequired,
};

export default Bulletin;

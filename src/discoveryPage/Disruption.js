import React from 'react';
import PropTypes from 'prop-types';

class Disruption extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: false,
            fi: {
                message: '',
                date: ''
            },
            sv: {
                message: '',
                date: ''
            },
            en: {
                message: '',
                date: ''
            }
        };
    }

    componentWillMount() {
        this.getDisruption();
    }

    getDisruption() {
        let setState = this.setState.bind(this);
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                try {
                    let json = JSON.parse(xhttp.responseText);
                    setState(json);
                } catch (e) {
                    // not JSON
                }
            }
        };
        xhttp.open('GET', '/disruption/disruption_message.json');
        xhttp.send();
    }

    render() {
        if (this.state.display) {
            let localised = this.state[this.context.lang];
            if (localised) {
                return (
                    <div id="disruption"  className="box alert-box">
                        <div id="service-error-date" className="date">{localised.date}</div>
                        <p id="service-error-text">{localised.message}</p>
                    </div>
                );
            } else {
                console.log('No localised information in language: ' + this.context.lang);
                return false;
            }
        } else {
            return false;
        }
    }
}

Disruption.contextTypes = {
    lang: PropTypes.string.isRequired,
};

export default Disruption;

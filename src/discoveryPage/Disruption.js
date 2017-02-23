import React from 'react';

var Disruption = React.createClass({
    contextTypes: {
        lang: React.PropTypes.string.isRequired,
    },
    getInitialState: function() {
        return {
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
    },
    componentWillMount: function() {
        this.getDisruption();
    },
    getDisruption: function() {
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
    },
    render: function() {
        if (this.state.display) {
            let localised = this.state[this.context.lang];
            if (localised) {
                return (
                    <div id="disruption"  className="box alert-box">
                        <div id="service-error-date" className="date text-small">{localised.date}</div>
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
});

export default Disruption;


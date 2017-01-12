import React from 'react';

import FeedbackForm from './FeedbackForm.js';
import Translated from '../Translated.js';

var FeedbackPage = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired,
        lang: React.PropTypes.string.isRequired
    },
    getInitialState() {
        return {
            valid: true
        };
    },
    handleSubmit(formdata) {
        if (!formdata.message) {
            this.setState({valid: false});
        } else {
            this.setState({valid: true});
            this.postFeedback(formdata);
        }
    },
    postFeedback(formdata) {
        var xhttp = new XMLHttpRequest();
        xhttp.open('POST', '/feedback', false);
        xhttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        xhttp.send(JSON.stringify(formdata));
        if (xhttp.status === 200) {
            this.feedbackSucceeded();
        } else {
            this.feedbackFailed();
        }
    },
    feedbackSucceeded() {
        this.context.router.push('/sivut/info/palaute/kiitos/?lang=' + this.context.lang);
    },
    feedbackFailed() {
        this.context.router.push('/sivut/500/?lang=' + this.context.lang);
    },
    render() {

        return (
            <main id="main" role="main" name="main">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div id="input-alert" className="box alert-box" style={{display: this.state.valid ? 'none' : ''}}>
                                <Translated tag="p" id="palaute__virhe__viesti_puuttuu">Tarkista, että olet kirjoittanut palauteviestin</Translated>
                            </div>
                            <FeedbackForm onFormSubmit={this.handleSubmit} />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
});

export default FeedbackPage;

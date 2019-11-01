import React from 'react';
import PropTypes from 'prop-types';

import Translated from '../Translated.js';
import TranslatedTitle from '../TranslatedTitle.js';
import Disruption from '../discoveryPage/Disruption.js';

class FeedbackForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isValid: {
                message: true,
                email: true
            },
            message: '',
            responseRequest: 'anonymous',
            email: '',
            loading: false
        };

        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleResponseRequest = this.handleResponseRequest.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAbort = this.handleAbort.bind(this);
    }

    componentDidMount() {
        document.title = TranslatedTitle.getTitle('palaute__otsikko');
    }

    handleMessageChange(e) {
        this.setState({
            message: e.target.value
        });
    }
    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }
    handleResponseRequest(e) {
        this.setState({
            responseRequest: e.target.value
        });
    }
    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }
    toggleLoading(callback) {
        function noop() {};
        callback = callback || noop;
        this.setState({
            loading: !this.state.loading
        }, callback);
    }
    hasValidContent(callback) {
        const testEmailRegex = new RegExp(/^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i);
        let revalidation = {
            message: true,
            email: true
        };

        if (!this.state.message.trim()) {
            revalidation.message = false;
        }
        if (this.state.responseRequest === 'respond' && !this.state.email.match(testEmailRegex)) {
            revalidation.email = false;
        }
        this.setState({
            isValid: revalidation
        }, () => {
            if (!this.state.isValid.message) {
                this.refs.messageValidationError.scrollIntoView();
            } else if (!this.state.isValid.email) {
                this.refs.emailValidationError.scrollIntoView();
            }
            callback(this.state.isValid.message && this.state.isValid.email);
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.toggleLoading(() => {
            this.hasValidContent((validContent) => {
                if (validContent) {
                    this.props.onFormSubmit({
                      form: 'feedback',
                      content: {
                        message: this.state.message.trim(),
                        email: this.state.email.trim()
                      }
                    });
                } else {
                    this.toggleLoading();
                }
            });
        });
    }
    handleAbort(e) {
        this.props.onFormAbort();
    }
    render() {
        return (
            <div className="col-xs-12 col-md-8 feedback-page">
                <Translated tag="h1" id="palaute__otsikko"/>
                <Disruption />
                <div className="feedback-form-wrapper">
                    <div className="col-xs-12 col-md-10">
                        <div className="form-group" ref="messageValidationError">
                            <Translated tag="label" id="palaute__lomake__kuvaus__label" className="form-label strong required small" htmlFor="message"/>
                            <Translated tag="span" id="palaute__lomake__pakollinen" className="sr-only"/>
                            <textarea id="message" className={this.state.isValid.message ? '' : 'invalid'} cols="60" rows="8" onChange={this.handleMessageChange}></textarea>
                            <Translated tag="span" id="palaute__virhe__viesti_puuttuu" className="validation-error" style={{display: this.state.isValid.message ? 'none' : ''}}/>
                        </div>

                        <fieldset className="form-group">
                            <Translated tag="legend" id="palaute__lomake__yhteystiedot_label" className="form-label strong small"/>
                            <ul className="selection-list">
                                <li>
                                    <input type="radio" className="small" name="radio-group-respond" id="radio-respond-no" value="anonymous" defaultChecked onChange={this.handleResponseRequest}/>
                                    <span className="radio-marker" />
                                    <Translated tag="label" id="palaute__lomake__yhteystiedot_ei" htmlFor="radio-respond-no"/>
                                </li>
                                <li>
                                    <input type="radio" className="small" name="radio-group-respond" id="radio-respond-yes" value="respond" onChange={this.handleResponseRequest}/>
                                    <span className="radio-marker" />
                                    <Translated tag="label" className="small" id="palaute__lomake__yhteystiedot_kyllä" htmlFor="radio-respond-yes"/>
                                </li>
                            </ul>
                            { this.state.responseRequest === 'respond' ?
                                <div className="form-group indented" ref="emailValidationError">
                                    <Translated tag="label" id="palaute__lomake__yhteystiedot_email" className="form-label strong small required" htmlFor="email"/>
                                    <Translated tag="span" id="palaute__lomake__pakollinen" className="sr-only"/>
                                    <input id="email" className={this.state.isValid.email ? 'width-320' : 'width-320 invalid'} type="text" onChange={this.handleEmailChange} value={this.state.email}/>
                                    <Translated tag="span" id="palaute__virhe__email_vaarin" className="validation-error" style={{display: this.state.isValid.email ? 'none' : ''}}/>
                                </div>
                                : ''
                            }
                        </fieldset>

                        <button id="feedback-submit" onClick={this.handleSubmit} disabled={this.state.loading ? true : false}>
                            <span className="button-loader" style={{display: this.state.loading ? '' : 'none'}}/>
                            <Translated tag="span" id="palaute__lomake__submit">Lähetä palaute</Translated>
                        </button>
                        <button id="feedback-cancel" className="button-cancel" onClick={this.handleAbort}>
                            <Translated tag="span" id="palaute__peruutalinkki">Keskeytä</Translated>
                        </button>
                        <Translated tag="p" className="feedback-info" id="palaute__info"/>
                    </div>
                </div>
            </div>
        );
    }
}

FeedbackForm.propTypes = {
    onFormAbort: PropTypes.func,
    onFormSubmit: PropTypes.func,
};

FeedbackForm.defaultProps = {
    onFormAbort: () => {},
    onFormSubmit: () => {}
};

export default FeedbackForm;

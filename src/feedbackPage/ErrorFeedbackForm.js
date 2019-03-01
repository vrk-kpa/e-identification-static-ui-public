import React from 'react';
import PropTypes from 'prop-types';

import Translated from '../Translated.js';
import TranslatedTitle from '../TranslatedTitle.js';
import UAParser from 'ua-parser-js';

var uaParser = new UAParser(window.navigator.userAgent);

function padLeft(nr, n, str) {
    return Array(n - String(nr).length + 1).join(str || '0') + nr;
}

class ErrorFeedbackForm extends React.Component {

    constructor(props) {
        super(props);

        this.initialState = {
            isValid: {
                errorDescription: true,
                email: true,
                errorCode: true,
                errorMessage: true
            },
            service: '',
            serviceAdditional: '',
            agentData: uaParser.getResult(),
            browserGiven: '',
            authType: 'pankki',
            authTypeBank: '',
            authTypeMobileCert: '',
            errorMessage: this.getPrefilledErrorMessage(),
            errorPageCode: this.getErrorPageCode(),
            preFilledView: this.formOpenedFromErrorPage(),
            hasErrorCode: this.hasProvidedErrorCode(),
            errorCode: this.getErrorCode(),
            errorTime: this.displayDate(),
            errorDescription: '',
            errorRepeats: 'virhe_ei_toistu',
            email: '',
            responseRequest: 'anonymous',
            loading: false
        };

        this.state = this.initialState;
        this.handleServiceChange = this.handleServiceChange.bind(this);
        this.handleServiceAdditionalChange = this.handleServiceAdditionalChange.bind(this);
        this.handleGivenBrowserChange = this.handleGivenBrowserChange.bind(this);
        this.handleAuthChange = this.handleAuthChange.bind(this);
        this.handleBankChange = this.handleBankChange.bind(this);
        this.handleMobileCertOperatorChange = this.handleMobileCertOperatorChange.bind(this);
        this.handleErrorMessagehange = this.handleErrorMessagehange.bind(this);
        this.handleHasErrorCodeChange = this.handleHasErrorCodeChange.bind(this);
        this.handleErrorCodeChange = this.handleErrorCodeChange.bind(this);
        this.handleErrorTimeChange = this.handleErrorTimeChange.bind(this);
        this.handleErrorDescriptionChange = this.handleErrorDescriptionChange.bind(this);
        this.handleErrorRepeatsChange = this.handleErrorRepeatsChange.bind(this);
        this.handleResponseRequest = this.handleResponseRequest.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAbort = this.handleAbort.bind(this);
    }

    componentDidMount() {
        document.title = TranslatedTitle.getTitle('virhepalaute__otsikko');
    }

    formOpenedFromErrorPage() {
        return (this.getErrorPageCode() !== '') ? true : false;
    }
    hasProvidedErrorCode() {
      if (this.getErrorCode() !== '') {
        return 'true';
      } else {
        return 'false';
      }
    }
    getErrorPageCode() {
        return this.props.location.query.frompage ? this.props.location.query.frompage : '';
    }
    getPrefilledErrorMessage() {
        let errorMessage = '';
        if (this.getErrorPageCode() === '500') {
            errorMessage = 'Jokin meni nyt pieleen (virhe 500)';
        } else if (this.getErrorPageCode() === '404') {
            errorMessage = 'Hakemaasi sivua ei löytynyt (virhe 404)';
        }
        return errorMessage;
    }
    getErrorCode() {
      return this.props.location.query.error ? decodeURIComponent(this.props.location.query.error) : '';
    }
    displayDate() {
        // Finnish format
        let date;
        if (this.props.location.query.time) {
            let milliseconds = parseInt(this.props.location.query.time, 10);
            date = isNaN(milliseconds) ? new Date() : new Date(milliseconds);
        } else {
            date = new Date();
        }
        return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + ' ' + padLeft(date.getHours(), 2) + ':' + padLeft(date.getMinutes(), 2);
    }
    handleServiceChange(e) {
        this.setState({
            service: e.target.value
        });
    }
    handleServiceAdditionalChange(e) {
        this.setState({
            serviceAdditional: e.target.value
        });
    }
    handleGivenBrowserChange(e) {
        this.setState({
            browserGiven: e.target.value
        });
    }
    handleAuthChange(e) {
        this.setState({
            authType: e.target.value
        });
    }
    handleBankChange(e) {
        this.setState({
            authTypeBank: e.target.value
        });
    }
    handleMobileCertOperatorChange(e) {
        this.setState({
            authTypeMobileCert: e.target.value
        });
    }
    handleErrorMessagehange(e) {
        this.setState({
            errorMessage: e.target.value
        });
    }
    handleHasErrorCodeChange(e) {
        this.setState({
            hasErrorCode: e.target.value
        });
    }
    handleErrorCodeChange(e) {
        this.setState({
            errorCode: e.target.value
        });
    }
    handleErrorTimeChange(e) {
        this.setState({
            errorTime: e.target.value
        });
    }
    handleErrorDescriptionChange(e) {
        this.setState({
            errorDescription: e.target.value
        });
    }
    handleErrorRepeatsChange(e) {
        this.setState({
            errorRepeats: e.target.value
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
            errorDescription: true,
            errorCode: true,
            email: true,
            errorMessage: true
        };

        if (!this.state.errorDescription.trim()) {
            revalidation.errorDescription = false;
        }
        if (!this.state.preFilledView && !this.state.errorMessage.trim()) {
            revalidation.errorMessage = false;
        }
        if (this.state.responseRequest === 'respond' && !this.state.email.match(testEmailRegex)) {
            revalidation.email = false;
        }
        this.setState({
            isValid: revalidation
        }, () => {
            if (!this.state.isValid.errorDescription) {
                this.refs.descriptionValidationError.scrollIntoView();
            } else if (!this.state.isValid.errorMessage) {
                this.refs.errorMessageValidationError.scrollIntoView();
            } else if (!this.state.isValid.email) {
                this.refs.emailValidationError.scrollIntoView();
            }
            callback(this.state.isValid.errorDescription && this.state.isValid.errorMessage && this.state.isValid.email);
        });
    }
    getAutomaticBrowserString() {
        return this.state.agentData.browser.name.trim() + ' ' + this.state.agentData.browser.version.trim() + ' (' + this.state.agentData.ua.trim() + ')';
    }
    handleSubmit(e) {
        e.preventDefault();
        this.toggleLoading(() => {
            this.hasValidContent((validContent) => {
                if (validContent) {
                    this.props.onFormSubmit({
                        form: 'errorfeedback',
                        content: {
                            service: this.state.service.trim(),
                            serviceAdditional: this.state.serviceAdditional.trim(),
                            userAgent: this.getAutomaticBrowserString(),
                            browserGiven: this.state.browserGiven.trim(),
                            type: this.state.authType,
                            bank: this.state.authTypeBank.trim(),
                            mobileCertOperator: this.state.authTypeMobileCert.trim(),
                            errorMessage: this.state.errorMessage,
                            hasErrorCode: this.state.hasErrorCode,
                            errorCode: this.state.hasErrorCode ? this.state.errorCode : '',
                            time: this.state.errorTime.trim(),
                            errorDescription: this.state.errorDescription.trim(),
                            errorRepeats: this.state.errorRepeats,
                            email: this.state.email.trim()
                        }
                    });
                    this.setState(this.initialState);
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
            <div className="col-xs-12 col-md-9 error-feedback-page">
                <Translated tag="h1" id="virhepalaute__otsikko"/>
                <div className="feedback-form-wrapper">
                    <Translated tag="p" id="virhepalaute__p1"/>
                    <Translated tag="h2" id="virhepalaute__lomake__taustatiedot__header"/>

                    <div className="form-group">
                        <Translated tag="label" id="virhepalaute__lomake__palvelu" className="form-label strong small" htmlFor="service"/>
                        <input id="service" className="width-460" type="text" value={this.state.service} onChange={(e) => {this.setState({service: e.target.value});}}/>

                        <Translated tag="label" id="virhepalaute__lomake__palvelu__additional" className="form-label strong small" htmlFor="serviceAdditional"/>
                        <input id="serviceAdditional" className="width-460" type="text" value={this.state.serviceAdditional} onChange={this.handleServiceAdditionalChange}/>
                    </div>

                    { !this.state.preFilledView ?
                    <div className="form-group">
                        <Translated tag="label" id="virhepalaute__lomake__selain" className="form-label strong small" htmlFor="browser"/>
                        <input id="browser" className="width-460" type="text" value={this.state.agentData.browser.name + ' ' + this.state.agentData.browser.version} disabled readOnly/>

                        <Translated tag="label" id="virhepalaute__lomake__selain__valinta" className="form-label strong small" htmlFor="browserGiven"/>
                        <input id="browserGiven" className="width-460" type="text" value={this.state.browserGiven} onChange={this.handleGivenBrowserChange}/>
                    </div>
                    : ''
                    }

                    <fieldset className="form-group">
                        <Translated tag="legend" id="virhepalaute__lomake__tunnistustapa" className="form-label strong required small"/>
                        <Translated tag="span" id="virhepalaute__lomake__pakollinen" className="sr-only"/>
                        <ul className="selection-list">
                            <li>
                                <input type="radio" className="small" name="radio-group-method" id="radio-method-bank" value="pankki" defaultChecked onChange={this.handleAuthChange}/>
                                <span className="radio-marker" />
                                <Translated tag="label" id="virhepalaute__lomake__radio__pankki" htmlFor="radio-method-bank"/>
                            </li>
                            { this.state.authType === 'pankki' ?
                                <div className="form-group indented">
                                    <Translated tag="label" id="virhepalaute__lomake__pankki__legend" className="form-label small" htmlFor="bank"/>
                                    <input id="bank" type="text" onChange={this.handleBankChange} value={this.state.authTypeBank}/>
                                </div>
                                : ''
                            }
                            <li>
                                <input type="radio" className="small" name="radio-group-method" id="radio-method-hst" value="hst" onChange={this.handleAuthChange}/>
                                <span className="radio-marker" />
                                <Translated tag="label" id="virhepalaute__lomake__radio__hst" htmlFor="radio-method-hst"/>
                            </li>
                            <li>
                                <input type="radio" className="small" name="radio-group-method" id="radio-method-mobile" value="mobiili" onChange={this.handleAuthChange}/>
                                <span className="radio-marker" />
                                <Translated tag="label" id="virhepalaute__lomake__radio__mobiili" htmlFor="radio-method-mobile"/>
                            </li>
                            { this.state.authType === 'mobiili' ?
                                <div className="form-group indented">
                                    <Translated tag="label" id="virhepalaute__lomake__mobiili__legend" className="form-label small" htmlFor="mobileCertOperator"/>
                                    <input id="mobileCertOperator" type="text" onChange={this.handleMobileCertOperatorChange} value={this.state.authTypeMobileCert}/>
                                </div>
                                : ''
                            }
                        </ul>
                    </fieldset>

                    <div className="form-group" ref="descriptionValidationError">
                        <Translated tag="h2" id="virhepalaute__lomake__virhekuvaus__header"/>

                        <Translated tag="label" id="virhepalaute__lomake__virhekuvaus__legend" className="form-label strong small required" htmlFor="errorDescription"/>
                        <Translated tag="span" id="virhepalaute__lomake__pakollinen" className="sr-only"/>
                        <textarea id="errorDescription" className="width-460" cols="60" rows="4" onChange={this.handleErrorDescriptionChange}></textarea>
                        <Translated tag="span" id="virhepalaute__virhe__viesti_puuttuu" className="validation-error" style={{display: this.state.isValid.errorDescription ? 'none' : ''}}/>

                        { !this.state.preFilledView ?
                        <div className="form-group">
                            <Translated tag="label" id="virhepalaute__lomake__virheaika__legend" className="form-label strong small" htmlFor="errorTime"/>
                            <input type="text" id="errorTime" className="width-460" name="error_time" onChange={this.handleErrorTimeChange} value={this.state.errorTime} />

                            <Translated tag="label" id="virhepalaute__lomake__virheviesti__legend" className="form-label strong small required" htmlFor="errorMessage"/>
                            <Translated tag="span" id="virhepalaute__lomake__pakollinen" className="sr-only"/>
                            <textarea id="errorMessage" className="width-460" cols="60" rows="4" onChange={this.handleErrorMessagehange} ref="errorMessageValidationError"></textarea>
                            <Translated tag="span" id="virhepalaute__virhe__virheviesti_puuttuu" className="validation-error" style={{display: this.state.isValid.errorMessage ? 'none' : ''}}/>

                            <fieldset className="form-group">
                                <Translated tag="legend" id="virhepalaute__lomake__virhekoodi__valinta" className="form-label strong small"/>
                                <ul className="selection-list">
                                    <li>
                                        <input type="radio" className="small" name="radio-group-errorcode" id="radio-errorcode-no" value="false" defaultChecked onChange={this.handleHasErrorCodeChange}/>
                                        <span className="radio-marker" />
                                        <Translated tag="label" id="virhepalaute__lomake__ei" htmlFor="radio-errorcode-no"/>
                                    </li>
                                    <li>
                                        { this.hasProvidedErrorCode() === 'true' ?
                                        <input type="radio" className="small" name="radio-group-errorcode" id="radio-errorcode-yes" value="true" onChange={this.handleHasErrorCodeChange} defaultChecked/>
                                        : <input type="radio" className="small" name="radio-group-errorcode" id="radio-errorcode-yes" value="true" onChange={this.handleHasErrorCodeChange}/>
                                        }
                                        <span className="radio-marker" />
                                        <Translated tag="label" id="virhepalaute__lomake__kyllä" htmlFor="radio-errorcode-yes"/>
                                        { this.state.hasErrorCode === 'true' ?
                                            <div className="form-group indented">
                                                <Translated tag="label" id="virhepalaute__lomake__virhekoodi__legend" className="form-label small" htmlFor="errorCode"/>
                                                <input id="errorcode" type="text" onChange={this.handleErrorCodeChange} value={this.state.errorCode}/>
                                                <Translated tag="span" id="palaute__virhe__ei_koodia" className="validation-error" style={{display: this.state.isValid.errorCode ? 'none' : ''}}/>
                                            </div>
                                            : ''
                                        }
                                    </li>
                                </ul>
                            </fieldset>
                        </div>
                        : ''
                        }
                        <fieldset className="form-group">
                            <Translated tag="legend" id="virhepalaute__lomake__virhetoistuu__valinta" className="form-label strong small"/>
                            <ul className="selection-list">
                                <li>
                                    <input type="radio" className="small" name="radio-group-repeat" id="radio-repeat-no" value="virhe_ei_toistu" defaultChecked onChange={this.handleErrorRepeatsChange}/>
                                    <span className="radio-marker" />
                                    <Translated tag="label" id="virhepalaute__lomake__ei" htmlFor="radio-repeat-no"/>
                                </li>
                                <li>
                                    <input type="radio" className="small" name="radio-group-repeat" id="radio-repeat-yes" value="virhe_toistuu" onChange={this.handleErrorRepeatsChange}/>
                                    <span className="radio-marker" />
                                    <Translated tag="label" id="virhepalaute__lomake__kyllä" htmlFor="radio-repeat-yes"/>
                                </li>
                            </ul>
                        </fieldset>

                        <Translated tag="h2" id="virhepalaute__lomake__contact"/>
                        <fieldset className="form-group">
                            <Translated tag="legend" id="virhepalaute__lomake__yhteystiedot_label" className="form-label small strong"/>
                            <ul className="selection-list">
                                <li>
                                    <input type="radio" className="small" name="radio-group-respond" id="radio-respond-no" value="anonymous" defaultChecked onChange={this.handleResponseRequest}/>
                                    <span className="radio-marker" />
                                    <Translated tag="label"id="virhepalaute__lomake__yhteystiedot_ei" htmlFor="radio-respond-no"/>
                                </li>
                                <li>
                                    <input type="radio" className="small" name="radio-group-respond" id="radio-respond-yes" value="respond" onChange={this.handleResponseRequest}/>
                                    <span className="radio-marker" />
                                    <Translated tag="label" id="virhepalaute__lomake__yhteystiedot_kyllä" className="small" htmlFor="radio-respond-yes"/>
                                </li>
                            </ul>
                            { this.state.responseRequest === 'respond' ?
                                <div className="form-group indented" ref="emailValidationError">
                                    <Translated tag="label" id="virhepalaute__lomake__yhteystiedot_email" className="form-label strong small required" htmlFor="email"/>
                                    <Translated tag="span" id="virhepalaute__lomake__pakollinen" className="sr-only"/>
                                    <input id="email" type="text" onChange={this.handleEmailChange} value={this.state.email} className={this.state.isValid.email ? 'width-320' : 'width-320 invalid'}/>
                                    <Translated tag="span" id="virhepalaute__virhe__email_vaarin" className="validation-error" style={{display: this.state.isValid.email ? 'none' : ''}}/>
                                </div>
                                : ''
                            }
                        </fieldset>
                        <button id="feedback-submit" onClick={this.handleSubmit} disabled={this.state.loading ? true : false}>
                            <span className="button-loader" style={{display: this.state.loading ? '' : 'none'}}/>
                            <Translated tag="span" id="virhepalaute__lomake__submit"/>
                        </button>
                        <button id="feedback-cancel" className="button-cancel" onClick={this.handleAbort}>
                            <Translated tag="span" id="virhepalaute__peruutalinkki">Keskeytä</Translated>
                        </button>
                        <Translated tag="p" className="feedback-info" id="virhepalaute__info"/>
                    </div>
                </div>
            </div>
        );
    }
}

ErrorFeedbackForm.propTypes = {
    location: PropTypes.object.isRequired,
    onFormAbort: PropTypes.func,
    onFormSubmit: PropTypes.func
};

ErrorFeedbackForm.defaultProps = {
    onFormAbort: () => {},
    onFormSubmit: () => {}
};

export default ErrorFeedbackForm;

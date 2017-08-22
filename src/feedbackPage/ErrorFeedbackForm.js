import React from 'react';

import Translated from '../Translated.js';
import TranslatedTitle from '../TranslatedTitle.js';
import UAParser from 'ua-parser-js';

var uaParser = new UAParser(window.navigator.userAgent);

function padLeft(nr, n, str) {
    return Array(n - String(nr).length + 1).join(str || '0') + nr;
}

var ErrorFeedbackForm = React.createClass({
    propTypes: {
        location: React.PropTypes.object.isRequired,
        onFormSubmit: React.PropTypes.func.isRequired
    },
    componentDidMount: function() {
        document.title = TranslatedTitle.getTitle('virhepalaute__otsikko');
    },
    getInitialState: function() {
        let date = new Date();
        return {
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
            errorMessage: '',
            hasErrorCode: this.hasProvidedErrorCode(),
            errorCode: this.getErrorCode(),
            errorTime: this.displayDate(date),
            errorDescription: '',
            errorRepeats: 'virhe_ei_toistu',
            email: '',
            responseRequest: 'anonymous',
            loading: false
        };
    },
    hasProvidedErrorCode: function() {
      if (this.getErrorCode() !== '') {
        return 'true';
      } else {
        return 'false';
      }
    },
    getErrorCode: function() {
      return this.props.location.query.error ? decodeURIComponent(this.props.location.query.error) : '';
    },
    displayDate: function(date) {
        // Finnish format
        return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + ' ' + padLeft(date.getHours(), 2) + ':' + padLeft(date.getMinutes(), 2);
    },
    handleServiceChange: function(e) {
        this.setState({
            service: e.target.value
        });
    },
    handleServiceAdditionalChange: function(e) {
        this.setState({
            serviceAdditional: e.target.value
        });
    },
    handleBrowserChange: function(e) {
        this.setState({
            browser: e.target.value
        });
    },
    handleGivenBrowserChange: function(e) {
        this.setState({
            browserGiven: e.target.value
        });
    },
    handleAuthChange: function(e) {
        this.setState({
            authType: e.target.value
        });
    },
    handleBankChange: function(e) {
        this.setState({
            authTypeBank: e.target.value
        });
    },
    handleMobileCertOperatorChange: function(e) {
        this.setState({
            authTypeMobileCert: e.target.value
        });
    },
    handleErrorMessagehange: function(e) {
        this.setState({
            errorMessage: e.target.value
        });
    },
    handleHasErrorCodeChange: function(e) {
        this.setState({
            hasErrorCode: e.target.value
        });
    },
    handleErrorCodeChange: function(e) {
        this.setState({
            errorCode: e.target.value
        });
    },
    handleErrorTimeChange: function(e) {
        this.setState({
            errorTime: e.target.value
        });
    },
    handleErrorDescriptionChange: function(e) {
        this.setState({
            errorDescription: e.target.value
        });
    },
    handleErrorRepeatsChange: function(e) {
        this.setState({
            errorRepeats: e.target.value
        });
    },
    handleResponseRequest: function(e) {
        this.setState({
            responseRequest: e.target.value
        });
    },
    handleEmailChange: function(e) {
        this.setState({
            email: e.target.value
        });
    },
    toggleLoading: function(callback) {
        function noop() {};
        callback = callback || noop;
        this.setState({
            loading: !this.state.loading
        }, callback);
    },
    hasValidContent: function(callback) {
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
        if (!this.state.errorMessage.trim()) {
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
    },
    handleSubmit: function(e) {
        e.preventDefault();
        this.toggleLoading(() => {
            this.hasValidContent((validContent) => {
                if (validContent) {
                    this.props.onFormSubmit({
                        form: 'errorfeedback',
                        content: {
                            service: this.state.service.trim(),
                            serviceAdditional: this.state.serviceAdditional.trim(),
                            userAgent: this.state.agentData.ua.trim(),
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
                    this.setState(this.getInitialState());
                } else {
                    this.toggleLoading();
                }
            });
        });
    },
    render: function() {
        return (
            <div className="col-xs-12 col-md-9 error-feedback-page">
                <Translated tag="h2" id="virhepalaute__otsikko">Ilmoita virhetilanteesta</Translated>
                <div className="feedback-form-wrapper">
                    <Translated tag="p" id="virhepalaute__p1">Tällä lomakkeella voit lähettää palautetta Suomi.fi-tunnistamisesta. Palaute käsitellään Kansalaisneuvonnassa, joka neuvoo julkishallinnon sähköisten palvelujen käytössä ja niihin tunnistautumisessa.</Translated>
                    <Translated tag="h3" id="virhepalaute__lomake__taustatiedot__header">Taustatietoja virhetilanteelle</Translated>

                    <div className="form-group">
                        <Translated tag="label" id="virhepalaute__lomake__palvelu" className="form-label strong small" htmlFor="service">Palvelu, johon tunnistauduit</Translated>
                        <input id="service" className="width-460" type="text" value={this.state.service} onChange={this.handleServiceChange}/>

                        <Translated tag="label" id="virhepalaute__lomake__palvelu__additional" className="form-label strong small" htmlFor="serviceAdditional">Täydennä palvelun nimi ja paikkakunta</Translated>
                        <input id="serviceAdditional" className="width-460" type="text" value={this.state.serviceAdditional} onChange={this.handleServiceAdditionalChange}/>
                    </div>

                    <div className="form-group">
                        <Translated tag="label" id="virhepalaute__lomake__selain" className="form-label strong small" htmlFor="browser">Selain, jota käytit</Translated>
                        <input id="browser" className="width-460" type="text" value={this.state.agentData.browser.name + ' ' + this.state.agentData.browser.version} disabled readOnly/>

                        <Translated tag="label" id="virhepalaute__lomake__selain__valinta" className="form-label strong small" htmlFor="browserGiven">Selain, jota käytit</Translated>
                        <input id="browserGiven" className="width-460" type="text" value={this.state.browserGiven} onChange={this.handleGivenBrowserChange}/>
                    </div>

                    <fieldset className="form-group">
                        <Translated tag="legend" id="virhepalaute__lomake__tunnistustapa" className="form-label strong required small">Mitä tunnistustapaa käytit?</Translated>
                        <Translated tag="span" id="virhepalaute__lomake__pakollinen" className="sr-only">(pakollinen tieto)</Translated>
                        <ul className="selection-list">
                            <li>
                                <input type="radio" name="radio-group-method" id="radio-method-bank" value="pankki" defaultChecked onChange={this.handleAuthChange}/>
                                <span className="radio-marker" />
                                <Translated tag="label" id="virhepalaute__lomake__radio__pankki" htmlFor="radio-method-bank">Pankkitunnistus</Translated>
                            </li>
                            { this.state.authType === 'pankki' ?
                                <div className="form-group indented">
                                    <Translated tag="label" id="virhepalaute__lomake__pankki__legend" className="form-label small" htmlFor="bank">Minkä pankin tunnistusta käytit?</Translated>
                                    <input id="bank" type="text" onChange={this.handleBankChange} value={this.state.authTypeBank}/>
                                </div>
                                : ''
                            }
                            <li>
                                <input type="radio" name="radio-group-method" id="radio-method-hst" value="hst" onChange={this.handleAuthChange}/>
                                <span className="radio-marker" />
                                <Translated tag="label" id="virhepalaute__lomake__radio__hst" htmlFor="radio-method-hst">Varmennekortti</Translated>
                            </li>
                            <li>
                                <input type="radio" name="radio-group-method" id="radio-method-mobile" value="mobiili" onChange={this.handleAuthChange}/>
                                <span className="radio-marker" />
                                <Translated tag="label" id="virhepalaute__lomake__radio__mobiili" htmlFor="radio-method-mobile">Mobiilivarmenne</Translated>
                            </li>
                            { this.state.authType === 'mobiili' ?
                                <div className="form-group indented">
                                    <Translated tag="label" id="virhepalaute__lomake__mobiili__legend" className="form-label small" htmlFor="mobileCertOperator">Minkä operaattorin mobiilivarmennetta käytit?</Translated>
                                    <input id="mobileCertOperator" type="text" onChange={this.handleMobileCertOperatorChange} value={this.state.authTypeMobileCert}/>
                                </div>
                                : ''
                            }
                        </ul>
                    </fieldset>

                    <div className="form-group" ref="descriptionValidationError">
                        <Translated tag="h3" id="virhepalaute__lomake__virhekuvaus__header">Virhetilanteen kuvaus</Translated>

                        <Translated tag="label" id="virhepalaute__lomake__virhekuvaus__legend" className="form-label strong small required" htmlFor="errorDescription">Kerro lyhyesti mitä olit tekemässä</Translated>
                        <Translated tag="span" id="virhepalaute__lomake__pakollinen" className="sr-only">(pakollinen tieto)</Translated>
                        <textarea id="errorDescription" className="width-460" cols="60" rows="4" onChange={this.handleErrorDescriptionChange}></textarea>
                        <Translated tag="span" id="virhepalaute__virhe__viesti_puuttuu" className="validation-error" style={{display: this.state.isValid.errorDescription ? 'none' : ''}}>Tarkista, että olet kirjoittanut palauteviestin</Translated>

                        <Translated tag="label" id="virhepalaute__lomake__virheaika__legend" className="form-label strong small" htmlFor="errorTime">Milloin virhe tapahtui</Translated>
                        <input type="text" id="errorTime" className="width-460" name="error_time" onChange={this.handleErrorTimeChange} value={this.state.errorTime} />

                        <Translated tag="label" id="virhepalaute__lomake__virheviesti__legend" className="form-label strong small required" htmlFor="errorMessage">Mitä virhesivulla lukee?</Translated>
                        <Translated tag="span" id="virhepalaute__lomake__pakollinen" className="sr-only">(pakollinen tieto)</Translated>
                        <textarea id="errorMessage" className="width-460" cols="60" rows="4" onChange={this.handleErrorMessagehange} ref="errorMessageValidationError"></textarea>
                        <Translated tag="span" id="virhepalaute__virhe__virheviesti_puuttuu" className="validation-error" style={{display: this.state.isValid.errorMessage ? 'none' : ''}}>Tarkista, että olet kirjoittanut virheilmoituksen</Translated>

                        <fieldset className="form-group">
                            <Translated tag="legend" id="virhepalaute__lomake__virhekoodi__valinta" className="form-label strong small">Näkyykö virhesivulla virhekoodi?</Translated>
                            <ul className="selection-list">
                                <li>
                                    <input type="radio" name="radio-group-errorcode" id="radio-errorcode-no" value="false" defaultChecked onChange={this.handleHasErrorCodeChange}/>
                                    <span className="radio-marker" />
                                    <Translated tag="label" id="virhepalaute__lomake__ei" htmlFor="radio-errorcode-no">Ei</Translated>
                                </li>
                                <li>
                                    { this.hasProvidedErrorCode() === 'true' ?
                                      <input type="radio" name="radio-group-errorcode" id="radio-errorcode-yes" value="true" onChange={this.handleHasErrorCodeChange} defaultChecked/>
                                    : <input type="radio" name="radio-group-errorcode" id="radio-errorcode-yes" value="true" onChange={this.handleHasErrorCodeChange}/>
                                    }
                                    <span className="radio-marker" />
                                    <Translated tag="label" id="virhepalaute__lomake__kyllä" htmlFor="radio-errorcode-yes">Kyllä</Translated>
                                    { this.state.hasErrorCode === 'true' ?
                                        <div className="form-group indented">
                                            <Translated tag="label" id="virhepalaute__lomake__virhekoodi__legend" className="form-label small" htmlFor="errorCode">Mikä virhekoodi sinulla näkyy?</Translated>
                                            <input id="errorcode" type="text" onChange={this.handleErrorCodeChange} value={this.state.errorCode}/>
                                            <Translated tag="span" id="palaute__virhe__ei_koodia" className="validation-error" style={{display: this.state.isValid.errorCode ? 'none' : ''}}>Tarkista, että olet syöttänyt koodin.</Translated>
                                        </div>
                                        : ''
                                    }
                                </li>
                            </ul>
                        </fieldset>

                        <fieldset className="form-group">
                            <Translated tag="legend" id="virhepalaute__lomake__virhetoistuu__valinta" className="form-label strong small">Toistuiko ongelma?</Translated>
                            <ul className="selection-list">
                                <li>
                                    <input type="radio" name="radio-group-repeat" id="radio-repeat-no" value="virhe_ei_toistu" defaultChecked onChange={this.handleErrorRepeatsChange}/>
                                    <span className="radio-marker" />
                                    <Translated tag="label" id="virhepalaute__lomake__ei" htmlFor="radio-repeat-no">Ei</Translated>
                                </li>
                                <li>
                                    <input type="radio" name="radio-group-repeat" id="radio-repeat-yes" value="virhe_toistuu" onChange={this.handleErrorRepeatsChange}/>
                                    <span className="radio-marker" />
                                    <Translated tag="label" id="virhepalaute__lomake__kyllä" htmlFor="radio-repeat-yes">Kyllä</Translated>
                                </li>
                            </ul>
                        </fieldset>

                        <Translated tag="h3" id="virhepalaute__lomake__contact">Yhteydenotto</Translated>
                        <fieldset className="form-group">
                            <Translated tag="legend" id="virhepalaute__lomake__yhteystiedot_label" className="form-label small strong">Haluatko, että palautteen käsittelijä ottaa sinuun yhteyttä?</Translated>
                            <ul className="selection-list">
                                <li>
                                    <input type="radio" name="radio-group-respond" id="radio-respond-no" value="anonymous" defaultChecked onChange={this.handleResponseRequest}/>
                                    <span className="radio-marker" />
                                    <Translated tag="label"id="virhepalaute__lomake__yhteystiedot_ei" htmlFor="radio-respond-no" >En halua (Palaute käsitellään nimettömänä.)</Translated>
                                </li>
                                <li>
                                    <input type="radio" name="radio-group-respond" id="radio-respond-yes" value="respond" onChange={this.handleResponseRequest}/>
                                    <span className="radio-marker" />
                                    <Translated tag="label" id="virhepalaute__lomake__yhteystiedot_kyllä" className="small" htmlFor="radio-respond-yes">Kyllä, ottakaa minuun yhteyttä</Translated>
                                </li>
                            </ul>
                            { this.state.responseRequest === 'respond' ?
                                <div className="form-group indented" ref="emailValidationError">
                                    <Translated tag="label" id="virhepalaute__lomake__yhteystiedot_email" className="form-label strong required" htmlFor="email">Sähköpostiosoitteesi</Translated>
                                    <Translated tag="span" id="virhepalaute__lomake__pakollinen" className="sr-only">(pakollinen tieto)</Translated>
                                    <input id="email" type="text" onChange={this.handleEmailChange} value={this.state.email} className={this.state.isValid.email ? 'width-320' : 'width-320 invalid'}/>
                                    <Translated tag="span" id="virhepalaute__virhe__email_vaarin" className="validation-error" style={{display: this.state.isValid.email ? 'none' : ''}}>Tarkista sähköpostiosoite.</Translated>
                                </div>
                                : ''
                            }
                        </fieldset>
                        <button id="feedback-submit" onClick={this.handleSubmit} disabled={this.state.loading ? true : false}><span className="button-loader" style={{display: this.state.loading ? '' : 'none'}}/><Translated tag="span" id="virhepalaute__lomake__submit">Lähetä palaute</Translated></button>
                        <Translated tag="p" className="feedback-info" id="virhepalaute__info">Palaute ohjautuu Kansalaisneuvontaan, joka käsittelee kaikki Suomi.fi-tunnistamiseen liittyvät palautteet.</Translated>
                    </div>
                </div>
            </div>
        );
    }
});

export default ErrorFeedbackForm;

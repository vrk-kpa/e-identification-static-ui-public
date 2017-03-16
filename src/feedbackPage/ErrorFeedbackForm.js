import React from 'react';

import Translated from '../Translated.js';
import UAParser from 'ua-parser-js';

var uaParser = new UAParser(window.navigator.userAgent);

function padLeft(nr, n, str) {
    return Array(n - String(nr).length + 1).join(str || '0') + nr;
}

var ErrorFeedbackForm = React.createClass({
    propTypes: {
        onFormSubmit: React.PropTypes.func.isRequired
    },
    getInitialState: function() {
        let date = new Date();
        return {
            isValid: true,
            service: '',
            serviceAdditional: '',
            agentData: uaParser.getResult(),
            browserGiven: '',
            authType: 'pankki',
            authTypeBank: '',
            authTypeMobileCert: '',
            hasErrorCode: 'false',
            errorCode: '',
            errorTime: this.displayDate(date),
            errorDescription: '',
            errorRepeats: false,
            email: ''
        };
    },
    displayDate: function(date) {
        // Finnish format
        return date.getDate() + '.' + date.getMonth() + 1 + '.' + date.getFullYear() + ' ' + padLeft(date.getHours(), 2) + ':' + padLeft(date.getMinutes(), 2);
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
    handleEmailChange: function(e) {
        this.setState({
            email: e.target.value
        });
    },
    hasValidContent: function() {
        return !!this.state.errorDescription.trim();
    },
    handleSubmit: function(e) {
        e.preventDefault();
        if (this.hasValidContent()) {
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
            this.setState({isValid: false});
        }
    },
    render: function() {
        return (
        <div>
            <div id="input-alert" className="box alert-box" style={{display: this.state.isValid ? 'none' : ''}}>
                <Translated tag="p" id="virhepalaute__virhe__puuttuu">Tarkista, että olet kirjoittanut vaaditut kentät</Translated>
            </div>
            <div className="col-xs-12 col-md-8">
                <Translated tag="h2" id="virhepalaute__otsikko">Ilmoita virhetilanteesta</Translated>
                <Translated tag="p" id="virhepalaute__p1">Tällä lomakkeella voit lähettää palautetta Suomi.fi-tunnistamisesta. Palaute käsitellään Kansalaisneuvonnassa, joka neuvoo julkishallinnon sähköisten palvelujen käytössä ja niihin tunnistautumisessa.</Translated>
                <Translated tag="h3" id="virhepalaute__lomake__taustatiedot__header">Taustatietoja virhetilanteelle</Translated>
                <div className="form-group">
                    <label className="form-label" htmlFor="service">
                        <Translated tag="span" id="virhepalaute__lomake__palvelu">Palvelu, johon tunnistauduit</Translated>
                    </label>
                    <input id="service" type="text" size="85" value={this.state.service} onChange={this.handleServiceChange}/>

                    <Translated tag="label" className="form-label" htmlFor="serviceAdditional" id="virhepalaute__lomake__palvelu__additional">Täydennä palvelun nimi ja paikkakunta</Translated>
                    <input id="serviceAdditional" type="text" size="85" value={this.state.serviceAdditional} onChange={this.handleServiceAdditionalChange}/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="browser">
                        <Translated tag="span" id="virhepalaute__lomake__selain">Selain, jota käytit</Translated>
                    </label>
                    <input id="browser" type="text" size="85" value={this.state.agentData.browser.name + ' ' + this.state.agentData.browser.version} disabled readOnly/>

                    <label className="form-label" htmlFor="browserGiven" >
                        <Translated tag="span" id="virhepalaute__lomake__selain__valinta">Selain, jota käytit</Translated>
                    </label>
                    <input id="browserGiven" type="text" size="85" value={this.state.browserGiven} onChange={this.handleGivenBrowserChange}/>
                </div>

                <div className="form-group">
                    <fieldset className="form-group">
                        <Translated tag="legend" className="strong" id="virhepalaute__lomake__tunnistustapa">Mitä tunnistustapaa käytit?</Translated>
                        <ul>
                            <li>
                                <label htmlFor="radio-3">
                                    <input type="radio" name="radio-group-1" id="radio-3" value="pankki" defaultChecked onChange={this.handleAuthChange}/>
                                    <Translated tag="span" className="cb-marker" id="virhepalaute__lomake__radio__pankki">Pankkitunnukset</Translated>
                                </label>
                                { this.state.authType === 'pankki' ?
                                    <div>
                                        <label className="form-label" htmlFor="bank">
                                            <Translated tag="span" id="virhepalaute__lomake__pankki__legend">Minkä pankin tunnistusta käytit</Translated>
                                        </label>
                                        <input id="bank" type="text" onChange={this.handleBankChange} value={this.state.authTypeBank} />
                                    </div>
                                    : ''
                                }
                            </li>
                            <li>
                                <label htmlFor="radio-1">
                                    <input type="radio" name="radio-group-1" id="radio-1" value="hst" onChange={this.handleAuthChange}/>
                                    <Translated tag="span" className="cb-marker" id="virhepalaute__lomake__radio__hst">Henkilövarmenne tai organisaatiovarmenne</Translated>
                                </label>
                            </li>
                            <li>
                                <label htmlFor="radio-2">
                                    <input type="radio" name="radio-group-1" id="radio-2" value="mobiili" onChange={this.handleAuthChange}/>
                                    <Translated tag="span" className="cb-marker" id="virhepalaute__lomake__radio__mobiili">Mobiilivarmenne</Translated>
                                </label>
                            </li>
                                { this.state.authType === 'mobiili' ?
                                    <div>
                                        <label className="form-label" htmlFor="mobileCertOperator">
                                            <Translated tag="label" htmlFor="mobileCertOperator" id="virhepalaute__lomake__mobiili__legend">Minkä operaattorin mobiilivarmennetta käytit</Translated>
                                        </label>
                                        <input id="mobileCertOperator" type="text" onChange={this.handleMobileCertOperatorChange} value={this.state.authTypeMobileCert} />
                                    </div>
                                    : ''
                                }
                        </ul>
                    </fieldset>
                </div>
                <div className="form-group">
                    <Translated tag="h3" id="virhepalaute__lomake__virhekuvaus__header">Virhetilanteen kuvaus</Translated>
                    <label className="form-label" htmlFor="errorDescription">
                        <Translated tag="span" id="virhepalaute__lomake__virhekuvaus__legend">Kerro lyhyesti mitä olit tekemässä</Translated> <Translated tag="small" id="virhepalaute__lomake__pakollinen">(pakollinen tieto)</Translated>
                    </label>
                    <textarea id="errorDescription" cols="60" rows="4" onChange={this.handleErrorDescriptionChange}></textarea>

                    <label className="form-label" htmlFor="errorTime">
                        <Translated tag="span" id="virhepalaute__lomake__virheaika__legend">Milloin virhe tapahtui</Translated>
                    </label>
                    <input type="text" id="errorTime" name="error_time" onChange={this.handleErrorTimeChange} value={this.state.errorTime} />

                    <div className="form-group">
                        <fieldset className="form-group">
                            <Translated tag="legend" className="strong" id="virhepalaute__lomake__virhekoodi__valinta">Näkyykö virhesivulla virhekoodi?</Translated>
                            <ul>
                                <li>
                                    <label htmlFor="radio-errorcode-1">
                                        <input type="radio" name="radio-group-errorcode" id="radio-errorcode-1" value="false" defaultChecked onChange={this.handleHasErrorCodeChange}/>
                                        <Translated tag="span" className="cb-marker" id="virhepalaute__lomake__ei">Ei</Translated>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="radio-errorcode-2">
                                        <input type="radio" name="radio-group-errorcode" id="radio-errorcode-2" value="true" onChange={this.handleHasErrorCodeChange}/>
                                        <Translated tag="span" className="cb-marker" id="virhepalaute__lomake__kyllä">Kyllä</Translated>
                                    </label>
                                    { this.state.hasErrorCode === 'true' ?
                                        <div>
                                            <label className="form-label" htmlFor="errorCode">
                                               <Translated tag="span" htmlFor="errorCode" id="virhepalaute__lomake__virhekoodi__legend">Näkyykö virhekoodi</Translated>
                                            </label>
                                            <input id="errorCode" type="text" onChange={this.handleErrorCodeChange} value={this.state.errorCode} />
                                        </div>
                                        : ''
                                    }
                                </li>
                            </ul>
                        </fieldset>
                    </div>
                    <div className="form-group">
                        <fieldset className="form-group">
                            <Translated tag="legend" className="strong" id="virhepalaute__lomake__virhetoistuu__valinta">Toistuiko ongelma?</Translated>
                            <ul>
                                <li>
                                    <label htmlFor="radio-repeat-1">
                                        <input type="radio" name="radio-group-repeat" id="radio-repeat-1" value="virhe_ei_toistu" defaultChecked onChange={this.handleErrorRepeatsChange}/>
                                        <Translated tag="span" className="cb-marker" id="virhepalaute__lomake__ei">Ei</Translated>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="radio-repeat-2">
                                        <input type="radio" name="radio-group-repeat" id="radio-repeat-2" value="virhetoistuu" onChange={this.handleErrorRepeatsChange}/>
                                        <Translated tag="span" className="cb-marker" id="virhepalaute__lomake__kyllä">Kyllä</Translated>
                                    </label>
                                </li>
                            </ul>
                        </fieldset>
                    </div>
                    <Translated tag="h3" id="virhepalaute__lomake__contact">Yhteydenotto</Translated>
                    <Translated tag="legend" id="virhepalaute__lomake__yhteystiedot_legend">Jos toivot palautteeseesi vastausta, liitä mukaan sähköpostiosoitteesi. Voit jättää palautteen myös nimettömänä.</Translated>
                    <Translated tag="label" className="form-label" htmlFor="email" id="virhepalaute__lomake__yhteystiedot_email">Sähköpostiosoite</Translated>
                    <input id="email" type="text" size="60"  onChange={this.handleEmailChange}/>
                </div>
                <button id="feedback-submit" onClick={this.handleSubmit}><Translated tag="span" id="virhepalaute__lomake__submit">Lähetä palaute</Translated></button>
                <Translated tag="p" id="virhepalaute__info">Palaute ohjautuu Kansalaisneuvontaan, joka käsittelee kaikki Suomi.fi-tunnistamiseen liittyvät palautteet.</Translated>
            </div>
        </div>
        );
    }
});

export default ErrorFeedbackForm;

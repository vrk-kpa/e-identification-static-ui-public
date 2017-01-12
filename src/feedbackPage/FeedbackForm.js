import React from 'react';

import Translated from '../Translated.js';

var FeedbackForm = React.createClass({
    propTypes: {
        onFormSubmit: React.PropTypes.func.isRequired
    },
    getInitialState: function() {
        return {
            service: '',
            browser: '',
            type: '',
            message: '',
            name: '',
            email: ''
        };
    },
    handleServiceChange: function(e) {
        this.setState({
            service: e.target.value
        });
    },
    handleBrowserChange: function(e) {
        this.setState({
            browser: e.target.value
        });
    },
    handleAuthChange: function(e) {
        this.setState({
            type: e.target.value
        });
    },
    handleMessageChange: function(e) {
        this.setState({
            message: e.target.value
        });
    },
    handleNameChange: function(e) {
        this.setState({
            name: e.target.value
        });
    },
    handleEmailChange: function(e) {
        this.setState({
            email: e.target.value
        });
    },
    handleSubmit: function(e) {
        e.preventDefault();
        let service = this.state.service.trim();
        let browser = this.state.browser.trim();
        let type = this.state.type;
        let message = this.state.message.trim();
        let name = this.state.name.trim();
        let email = this.state.email.trim();
        this.props.onFormSubmit({
            service: service,
            browser: browser,
            type: type,
            message: message,
            name: name,
            email: email
        });
        this.setState({
            service: '',
            browser: '',
            type: '',
            message: '',
            name: '',
            email: ''
        });
    },
    render: function() {
        return (
            <div className="col-xs-12 col-md-8">
                <Translated tag="h2" id="palaute__otsikko">Palaute</Translated>
                <Translated tag="p" id="palaute__p1">Tällä lomakkeella voit lähettää palautetta Suomi.fi-tunnistamisesta. Palaute käsitellään Kansalaisneuvonnassa, joka neuvoo julkishallinnon sähköisten palvelujen käytössä ja niihin tunnistautumisessa.</Translated>
                <div className="form-group">
                    <Translated tag="label" className="form-label strong" htmlFor="service" id="palaute__lomake__palvelu">Palvelu, johon tunnistauduit</Translated>
                    <input id="service" type="text" size="85" value={this.state.service} onChange={this.handleServiceChange}/>
                </div>
                <div className="form-group">
                    <Translated tag="label" className="form-label strong" htmlFor="browser" id="palaute__lomake__selain">Selain, jota käytit</Translated>
                    <input id="browser" type="text" size="85" value={this.state.browser} onChange={this.handleBrowserChange}/>
                </div>

                <div className="form-group">
                    <fieldset className="form-group">
                        <Translated tag="legend" className="strong" id="palaute__lomake__tunnistustapa">Mitä tunnistustapaa käytit?</Translated>
                        <ul>
                            <li>
                                <label htmlFor="radio-1">
                                    <input type="radio" name="radio-group-1" id="radio-1" value="hst" onChange={this.handleAuthChange}/>
                                    <Translated tag="span" className="cb-marker" id="palaute__lomake__radio__hst">Henkilövarmenne tai organisaatiovarmenne</Translated>
                                </label>
                            </li>
                            <li>
                                <label htmlFor="radio-2">
                                    <input type="radio" name="radio-group-1" id="radio-2" value="mobiili" onChange={this.handleAuthChange}/>
                                    <Translated tag="span" className="cb-marker" id="palaute__lomake__radio__mobiili">Mobiilivarmenne</Translated>
                                </label>
                            </li>
                            <li>
                                <label htmlFor="radio-3">
                                    <input type="radio" name="radio-group-1" id="radio-3" value="pankki" onChange={this.handleAuthChange}/>
                                    <Translated tag="span" className="cb-marker" id="palaute__lomake__radio__pankki">Pankkitunnukset</Translated>
                                </label>
                            </li>
                        </ul>
                    </fieldset>
                </div>

                <div className="form-group">
                    <label className="form-label strong" htmlFor="message"><Translated tag="span" id="palaute__lomake__kuvaus__label">Palautteesi</Translated> <Translated tag="small" id="palaute__lomake__pakollinen">(pakollinen tieto)</Translated></label>
                    <Translated tag="legend" id="palaute__lomake__kuvaus__legend">Mikäli palautteesi koskee tunnistuksessa tapahtunutta virhetilannetta, kuvaile tarkkaan, missä vaiheessa asiointia virhe tapahtui ja minkälaisen virheilmoituksen sait.
                    </Translated>
                    <textarea id="message" cols="60" rows="8" onChange={this.handleMessageChange}></textarea>
                </div>

                <div className="form-group">
                    <Translated tag="label" className="form-label strong" id="palaute__lomake__yhteystiedot_label">Yhteystiedot</Translated>
                    <Translated tag="legend" id="palaute__lomake__yhteystiedot_legend">Jos toivot palautteeseesi vastausta, liitä mukaan sähköpostiosoitteesi. Voit jättää palautteen myös nimettömänä.</Translated>
                    <Translated tag="label" className="form-label" htmlFor="name" id="palaute__lomake__yhteystiedot_nimi">Nimi</Translated>
                    <input id="name" type="text" size="60" onChange={this.handleNameChange}/>
                    <Translated tag="label" className="form-label" htmlFor="email" id="palaute__lomake__yhteystiedot_email">Sähköpostiosoite</Translated>
                    <input id="email" type="text" size="60"  onChange={this.handleEmailChange}/>
                </div>
                <button id="feedback-submit" onClick={this.handleSubmit}><Translated tag="span" id="palaute__lomake__submit">Lähetä palaute</Translated></button>
                <Translated tag="p" id="palaute__info">Palaute ohjautuu Kansalaisneuvontaan, joka käsittelee kaikki Suomi.fi-tunnistamiseen liittyvät palautteet.</Translated>
            </div>
        );
    }
});

export default FeedbackForm;

import React from 'react';

import Translated from '../Translated.js';

var FeedbackForm = React.createClass({
    propTypes: {
        onFormSubmit: React.PropTypes.func.isRequired
    },
    getInitialState: function() {
        return {
            isValid: true,
            message: '',
            name: '',
            email: ''
        };
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
    hasValidContent: function() {
        return !!this.state.message.trim();
    },
    handleSubmit: function(e) {
        e.preventDefault();
        if (this.hasValidContent()) {
            let message = this.state.message.trim();
            let name = this.state.name.trim();
            let email = this.state.email.trim();
            this.props.onFormSubmit({
                form: 'feedback',
                content: {
                    message: message,
                    name: name,
                    email: email
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
                <Translated tag="p" id="palaute__virhe__viesti_puuttuu">Tarkista, että olet kirjoittanut palauteviestin</Translated>
            </div>
            <div className="col-xs-12 col-md-8">
                <Translated tag="h2" id="palaute__otsikko">Palaute</Translated>
                <Translated tag="p" id="palaute__p1">Tällä lomakkeella voit lähettää palautetta Suomi.fi-tunnistamisesta. Palaute käsitellään Kansalaisneuvonnassa, joka neuvoo julkishallinnon sähköisten palvelujen käytössä ja niihin tunnistautumisessa.</Translated>

                <div className="form-group">
                    <label className="form-label strong" htmlFor="message"><Translated tag="span" id="palaute__lomake__kuvaus__label">Palautteesi</Translated> <Translated tag="small" id="palaute__lomake__pakollinen">(pakollinen tieto)</Translated></label>
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
        </div>
        );
    }
});

export default FeedbackForm;

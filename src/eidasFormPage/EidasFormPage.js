import React from 'react';
import {translate} from 'react-i18next';
import Translated from '../Translated.js';
import TranslatedLink from '../TranslatedLink.js';
import TranslatedTitle from '../TranslatedTitle.js';
import AuthPageInfo from '../AuthPageInfo.js';
import * as Utils from '../utils.js';
import Bulletin from '../Bulletin';

let metadataService = null;

class EidasFormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entityID: (this.props.location && this.props.location.query && this.props.location.query.entityId) ? this.props.location.query.entityId : 'Default',
            message: '',
            email: '',
            phonenumber: '',
            metadataLoaded: false,
            isValid: {
                message: true,
                email: true,
                phonenumber: true
            }
        };
    }

    clearState() {
        this.setState({
            message: '',
            email: '',
            phonenumber: '',
            isValid: {
                message: true,
                email: true,
                phonenumber: true
            }
        });
    }

    componentDidMount() {
        document.title = TranslatedTitle.getTitle('eidasform__pagetitle');
        this.getMetadata();
    }

    getMetadata() {
        metadataService = Utils.MetadataService.getInstance();
        metadataService.loadMetadata(this.state.entityID, () => { this.setState({metadataLoaded: true}); });
    }

    toggleLoading(callback) {
        function noop() {};
        let cb = callback || noop;
        this.setState({
            loading: !this.state.loading
        }, cb);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.toggleLoading(() => {
            this.hasValidContent((validContent) => {
                if (validContent) {
                    let content = {
                        entityID: this.state.entityID.trim(),
                        message: this.state.message.trim(),
                        email: this.state.email.trim(),
                        phonenumber: this.state.phonenumber.trim()
                    };
                    Utils.postFormData('/sp/eidas-email', content, () => this.context.router.push('/sivut/eidas-form/sent/'), () => this.context.router.push('/sivut/500/'));
                    this.clearState();
                } else {
                    this.toggleLoading();
                }
            });
        });
    }
    validateMessage(message) {
        return !message.trim() ? false : true;
    }
    validateEmail(email) {
        const testEmailRegex = new RegExp(/^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i);
        return !email.match(testEmailRegex) ? false : true;
    }
    validatePhoneNumber(phonenumber) {
        return !phonenumber.trim() ? false : true;  // Lisää puhelinnumero regexp
    }

    hasValidContent(callback) {
        let revalidation = {
            message: this.validateMessage(this.state.message),
            email: this.validateEmail(this.state.email),
            phonenumber: this.validatePhoneNumber(this.state.phonenumber)
        };

        this.setState({
            isValid: revalidation
        }, () => {
            if (!this.state.isValid.message) {
                this.refs.messageValidationError.scrollIntoView();
            } else if (!this.state.isValid.email) {
                this.refs.emailValidationError.scrollIntoView();
            } else if (!this.state.isValid.email) {
                this.refs.phonenumberValidationError.scrollIntoView();
            }
            callback(this.state.isValid.message && this.state.isValid.email && this.state.isValid.phonenumber);
        });
    }

    render() {
        if (!this.state.metadataLoaded) {
            return null;
        }

        return (
            <main id="main" role="main" name="main" className="eidas-form-page">
                <div className="main">
                    <div className="container">
                        <AuthPageInfo serviceDisplayName={metadataService.getServiceDisplayName(this.context.lang)}>
                            <Bulletin heading={this.props.t('eidasform__bulletin-title')} content={[this.props.t('eidasform__bulletin-content1'), this.props.t('eidasform__bulletin-content2')]}/>
                        </AuthPageInfo>
                        <div className="feedback-form-wrapper">
                            <div className="col-xs-12 col-md-10">
                                <div className="form-info">
                                    <Translated tag="h3" id="eidasform__lomake_otsikko"/>
                                    <Translated tag="p" id="eidasform__lomake_teksti1"/>
                                    <Translated tag="p" id="eidasform__lomake_teksti2"/>
                                </div>
                                <div className="form-group" ref="messageValidationError">
                                    <Translated tag="label" id="eidasform__viesti_label" className="form-label strong required small" htmlFor="message"/>
                                    <Translated tag="span" id="eidasform__lomake__pakollinen" className="sr-only"/>
                                    <textarea id="message"  cols="60" rows="8" className={this.state.isValid.message ? '' : 'invalid'} value={this.state.message} onChange={e => this.setState({message: e.target.value})}></textarea>
                                    <Translated tag="span" id="eidasform__virhe__viesti_puuttuu" className="validation-error" style={{display: this.state.isValid.message ? 'none' : ''}}/>
                                </div>
                                <div className="form-group" ref="emailValidationError">
                                    <Translated tag="label" id="eidasform__yhteystiedot_email_label" className="form-label strong small required" htmlFor="email"/>
                                    <Translated tag="span" id="eidasform__lomake__pakollinen" className="sr-only"/>
                                    <input id="email" type="text" onChange={e => this.setState({email: e.target.value})} value={this.state.email} className={this.state.isValid.email ? 'width-320' : 'width-320 invalid'}/>
                                    <Translated tag="span" id="eidasform__virhe__email_vaarin" className="validation-error" style={{display: this.state.isValid.email ? 'none' : ''}}/>
                                </div>
                                <div className="form-group" ref="phonenumberValidationError">
                                    <Translated tag="label" id="eidasform__yhteystiedot_puhelinnumero_label" className="form-label strong small required" htmlFor="email"/>
                                    <Translated tag="span" id="eidasform__lomake__pakollinen" className="sr-only"/>
                                    <input id="phonenumber" type="text" onChange={e => this.setState({phonenumber: e.target.value})} value={this.state.phonenumber} className={this.state.isValid.phonenumber ? 'width-320' : 'width-320 invalid'}/>
                                    <Translated tag="span" id="eidasform__virhe__puhelinnumero_vaarin" className="validation-error" style={{display: this.state.isValid.phonenumber ? 'none' : ''}}/>

                                </div>

                                <button id="feedback-submit" onClick={(e) => this.handleSubmit(e)}>
                                    <Translated tag="span" id="eidasform__lomake_submit">Lähetä pyyntö</Translated>
                                </button>
                                <TranslatedLink link_i18n_id="/sivut/eidas-form/cancel/" target="_self" id="eidasform__peruuta_linkki" content_i18n_id="eidasform__peruuta_linkki" className="button-cancel"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    };
}

EidasFormPage.contextTypes = {
    router: React.PropTypes.object.isRequired,
    lang: React.PropTypes.string.isRequired
};

EidasFormPage.propTypes = {
    location: React.PropTypes.object.isRequired,
    t: React.PropTypes.any
};

export default translate('translation')(EidasFormPage);

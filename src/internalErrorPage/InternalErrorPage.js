
import React from 'react';
import PropTypes from 'prop-types';

import Translated from '../Translated.js';
import TranslatedTitle from '../TranslatedTitle.js';
import ErrorCodeLine from './ErrorCodeLine.js';

class InternalErrorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorTime: new Date()
        };
    }
    componentDidMount() {
        document.title = TranslatedTitle.getTitle('virhesivu2__otsikko');
    }
    getErrorMessage() {
        return this.props.location.query.m;
    }
    getErrorCode() {
        return this.props.location.query.t;
    }

    render() {
        return (
            <main id="main" role="main" name="main">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-8">
                                <div className="error-box">
                                    <Translated tag="h1" id="virhesivu2__otsikko"/>
                                    <Translated tag="p" id="virhesivu2__sisainen_virhe"/>
                                    <Translated tag="p" id="virhesivu2__ratkaisu"/>
                                    <ul className="bulleted-list">
                                      <Translated tag="li" id="virhesivu2__ohje1"/>
                                      <Translated tag="li" id="virhesivu2__ohje2"/>
                                    </ul>
                                    <Translated tag="p" id="virhesivu2__palautepyynto"/>

                                    { this.getErrorMessage() && this.getErrorCode() ?
                                    <ErrorCodeLine errorMessage={this.getErrorMessage()} errorCode={this.getErrorCode()}/>
                                    : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

InternalErrorPage.propTypes = {
    location: PropTypes.object.isRequired
};

export default InternalErrorPage;

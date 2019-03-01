import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import Translated from '../Translated';

class FeedbackPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAbort = this.handleAbort.bind(this);
    }
    handleSubmit(formdata) {
      this.postFeedback(formdata);
    }
    sessionContextMissing() {
        return (this.props.location.state && this.props.location.state.sessionContextMissing) ? this.props.location.state.sessionContextMissing : false;
    }
    handleAbort() {
        this.context.router.replace({
            pathname: '/sivut/info/palaute/peruuta/',
            state: {
                sessionContextMissing: this.sessionContextMissing(),
                displaySingleBackLink: true
            }
        });
    }
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
    }
    feedbackSucceeded() {
        this.context.router.replace({
            pathname: '/sivut/info/palaute/kiitos/',
            state: {
                sessionContextMissing: this.sessionContextMissing(),
                displaySingleBackLink: true
            }
        });
    }
    feedbackFailed() {
        this.context.router.replace({
            pathname: '/sivut/500/',
            state: {
                sessionContextMissing: this.sessionContextMissing()
            }
        });
    }
    goBackClicked() {
        browserHistory.goBack();
    }
    render() {
        let linkIdentifier = this.sessionContextMissing() ? 'common__linkki-palaa' : 'common__linkki-palaa-tunnistukseen';
        let displaySingleBackLink = this.props.location.state && this.props.location.state.displaySingleBackLink;
        return (
            <main id="main" role="main" name="main">
                <div className="main" id="feedbackpage-main">
                    <div className="container">
                        <div className="row">
                            <a onClick={ this.goBackClicked } className='go-back'>
                                <Translated tag="span" id={linkIdentifier} />
                            </a>
                        </div>
                        <div className="row">
                            {React.cloneElement(this.props.children, {onFormSubmit: this.handleSubmit, onFormAbort: this.handleAbort})}
                        </div>
                        { displaySingleBackLink ? '' :
                            <div className="row">
                                <a onClick={ this.goBackClicked } className='go-back'>
                                    <Translated tag="span" id={linkIdentifier} />
                                </a>
                            </div>
                        }
                    </div>
                </div>
            </main>
        );
    }
}

FeedbackPage.propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.object
};
FeedbackPage.contextTypes = {
    router: PropTypes.object.isRequired,
    lang: PropTypes.string.isRequired
};

export default FeedbackPage;

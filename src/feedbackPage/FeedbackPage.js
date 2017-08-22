import React from 'react';


var FeedbackPage = React.createClass({
    propTypes: {
        children: React.PropTypes.element.isRequired
    },
    contextTypes: {
        router: React.PropTypes.object.isRequired,
        lang: React.PropTypes.string.isRequired
    },
    handleSubmit(formdata) {
      this.postFeedback(formdata);
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
        this.context.router.push('/sivut/info/palaute/kiitos/');
    },
    feedbackFailed() {
        this.context.router.push('/sivut/500/');
    },
    render() {
        return (
            <main id="main" role="main" name="main">
                <div className="main">
                    <div className="container">
                        <div className="row">
                           {React.cloneElement(this.props.children, {onFormSubmit: this.handleSubmit})}
                        </div>
                    </div>
                </div>
            </main>
        );
    }
});

export default FeedbackPage;

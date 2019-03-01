
import React from 'react';
import PropTypes from 'prop-types';

import Translated from '../Translated.js';
import TranslatedTitle from '../TranslatedTitle.js';
import IDPLink from '../IDPLink.js';

class SessionExpiredPage extends React.Component {

    componentDidMount() {
        document.title = TranslatedTitle.getTitle('istunto_vanhentunut__istuntosi_on_vanhentunut_fi');
    }
    getConversationId() {
        return this.context.queryParams.conversation;
    }
    render() {
        return (
            <main id="main" role="main" name="main">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-8 timeout-page">
                                <div className="error-box">
                                    <Translated tag="h1" id="istunto_vanhentunut__istuntosi_on_vanhentunut_fi"/>
                                    <IDPLink conversation={this.getConversationId()} status="return" >
                                        <Translated tag="span" id="istunto_vanhentunut__palaa_palveluun"/>
                                    </IDPLink>
                                    <div id="error-code"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

SessionExpiredPage.contextTypes = {
    queryParams: PropTypes.object.isRequired,
};

export default SessionExpiredPage;


import React from 'react';

import Translated from '../Translated.js';
import TranslatedTitle from '../TranslatedTitle.js';
import IDPLink from '../IDPLink.js';

let SessionExpiredPage = React.createClass({
    contextTypes: {
        queryParams: React.PropTypes.object.isRequired,
    },
    componentDidMount: function() {
        document.title = TranslatedTitle.getTitle('istunto_vanhentunut__istuntosi_on_vanhentunut_fi');
    },
    getConversationId() {
        return this.context.queryParams.conversation;
    },
    render() {
        return (
            <main id="main" role="main" name="main">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-8 timeout-page">
                                <div className="error-box">
                                    <Translated tag="h2" id="istunto_vanhentunut__istuntosi_on_vanhentunut_fi">Istuntosi on vanhentunut, allaolevasta linkistä voit palata takaisin asiointipalveluun.</Translated>
                                    <IDPLink conversation={this.getConversationId()} status="return" >
                                        <Translated tag="span" id="istunto_vanhentunut__palaa_palveluun">Palaa palveluun</Translated>
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
});

export default SessionExpiredPage;

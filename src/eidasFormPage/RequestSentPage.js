import React from 'react';

import Translated from '../Translated.js';
import TranslatedTitle from '../TranslatedTitle.js';

export default class RequestSentPage extends React.Component {
    componentDidMount() {
        document.title = TranslatedTitle.getTitle('eidasform_sent__pagetitle');
    }
    render() {
        return (
            <main id="main" role="main" name="main">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-8 thanks-page eidas-page">
                                <Translated tag="h1" id="eidasform_sent__pagetitle"/>
                                <Translated tag="p" id="eidasform_sent__info_1"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

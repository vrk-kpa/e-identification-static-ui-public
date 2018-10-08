import React from 'react';

import Translated from '../Translated.js';
import TranslatedTitle from '../TranslatedTitle.js';

export default class RequestCancelledPage extends React.Component {
    componentDidMount() {
        document.title = TranslatedTitle.getTitle('eidasform_cancel__pagetitle');
    }
    render() {
        return (
            <main id="main" role="main" name="main">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-8 thanks-page">
                                <Translated tag="h2" id="eidasform_cancel__pagetitle"/>
                                <Translated tag="p" id="eidasform_cancel__info_1"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

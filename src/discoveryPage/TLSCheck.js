import React from 'react';
import PropTypes from 'prop-types';
import Translated from '../Translated';

// IE11 compatibility
import 'whatwg-fetch';
import 'es6-promise/auto';

const CHECK_IDLE = 'CHECK_IDLE';
const CHECK_FETCH = 'FETCH';
const CHECK_OK = 'CHECK_OK';
const CHECK_FAIL = 'CHECK_FAIL';

class TLSCheck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: CHECK_IDLE
        };
    }

    componentWillMount() {

        const {tlsCheckUrl} = this.props.config;
        const opts = {
            mode: 'cors'
        };
        this.setFetch();

        // if we get a response, any response at all, there was a connection and TLS is good
        // otherwise, can we detect errors that are not caused by not being able to negotiate
        // connection?

        fetch(tlsCheckUrl, opts)
            .then(
                () => this.setOk(),
                () => this.setFail()
            );
    }

    setStatus(status) {
        this.setState({status});
    }

    setFetch() {
        this.setStatus(CHECK_FETCH);
    }

    setFail() {
        this.setStatus(CHECK_FAIL);
    }

    setOk() {
        this.setStatus(CHECK_OK);
    }

    render() {
        const {config} = this.props;
        if (this.state.status === CHECK_FAIL && config && config.showTLSWarning === 'true') {
            return (
                <div id="tls-check-failure-warning" className="box alert-box">
                    <Translated tag="p" id="valinta__selain_ei_tue_tls1_2_p1" />
                    <Translated tag="p" id="valinta__selain_ei_tue_tls1_2_p2" />
                    <Translated tag="p" id="valinta__selain_ei_tue_tls1_2_p3" />
                    <Translated tag="p" id="valinta__selain_ei_tue_tls1_2_p4" />
                </div>
            );
        }
        return false;
    }
}

TLSCheck.contextTypes = {
    lang: PropTypes.string.isRequired,
};

TLSCheck.propTypes = {
    config: PropTypes.object.isRequired
};

export default TLSCheck;

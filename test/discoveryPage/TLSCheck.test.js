import {expect} from 'chai';
import {fetchMock} from 'fetch-mock';
import waitUntil from 'async-wait-until';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import TLSCheck from '../../src/discoveryPage/TLSCheck';

configure({ adapter: new Adapter() });

const tlsCheckUrl = "https://example.com/tls.json";
const defaultConfig = {
    tlsCheckUrl,
    showTLSWarning: 'true'
}


describe('TLSCheck', function() {

    it('when check passes, shows nothing ', async () => {
        fetchMock.restore();
        fetchMock.mock(tlsCheckUrl, 200);

        const root = shallow(
            <TLSCheck config={defaultConfig}/>, {context: {
                lang: 'fi',
            }}
        );

        await waitUntil(() => root.state('status') !== 'FETCH');
        expect(root.state('status')).to.equal('CHECK_OK');
        expect(root.exists('#tls-check-failure-warning')).to.be.false;

    });

    it('when check fails, shows warning if enabled', async () => {
        fetchMock.restore();
        fetchMock.mock(tlsCheckUrl, {throws: new TypeError('Test fetch error')});

        const conf = {
            ...defaultConfig
        }
        const root = shallow(
            <TLSCheck config={defaultConfig}/>, {context: {
                lang: 'fi',
            }}
        );

        await waitUntil(() => root.state('status') !== 'FETCH');
        expect(root.state('status')).to.equal('CHECK_FAIL');
        expect(root.exists('#tls-check-failure-warning')).to.be.true;
    });

    it('when check fails, don\'t show warning if disabled', async () => {
        fetchMock.restore();
        fetchMock.mock(tlsCheckUrl, {throws: new TypeError('Test fetch error')});

        const config = {
            ...defaultConfig,
            showTLSWarning: false
        }
        const root = shallow(
            <TLSCheck config={config}/>, {context: {
                lang: 'fi',
            }}
        );

        await waitUntil(() => root.state('status') !== 'FETCH');
        expect(root.state('status')).to.equal('CHECK_FAIL');
        expect(root.exists('#tls-check-failure-warning')).to.be.false;
    });
});


import {expect} from 'chai';
import waitUntil from 'async-wait-until';
import sinon from 'sinon';
import * as Utils from '../../src/utils.js';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import DiscoveryPage from '../../src/discoveryPage/DiscoveryPage';

configure({ adapter: new Adapter() });

  const defaultProps = {
    location: {
        pathname: '/sivut/discovery-page'
    },
    tag: 'testtag'
}

const defaultContext = {context: {
    lang: 'fi',
    queryParams: {
        entityId: 'unittestiner',
        authMethdReq: 'KATSOOTP;KATSOPWD;EIDAS1;TESTI;EIDAS_LOA2;fLoA3;fLoA2;eLoA3;eLoA2',
        tag: 'testtag'
    },
    router: {}

}}

const metadata = {
    displayName: {
    en: "Service",
    fi: "Palvelu",
    sv: "Svenska"
    },
    attributeLevelOfAssurance: "KATSOOTP;KATSOPWD;EIDAS1;TESTI;EIDAS_LOA2;fLoA3;fLoA2;eLoA3;eLoA2",
    eidasSupport:"form"
};

const testProviders = [
    {entityId:"nordea",levelOfAssurance:"fLoA2",},
    {entityId:"op",levelOfAssurance:"fLoA2",},
    {entityId:"saastopankki",levelOfAssurance:"fLoA2",},
    {entityId:"katsopwd",levelOfAssurance:"KATSOPWD",},
    {entityId:"katsootp",levelOfAssurance:"KATSOOTP",},
    {entityId:"hst",levelOfAssurance:"fLoA3",},
    {entityId:"eidashigh",levelOfAssurance:"eLoA3",},
    {entityId:"eidassubstantial",levelOfAssurance:"eLoA2",}
];

describe('DiscoveryPage', function() {

    let windowObj;
    let getJsonDataStub;

    before(() => {
        windowObj = {...global.window};
    });

    beforeEach(() => {
        getJsonDataStub = sinon.stub(Utils, 'getJsonData');
        global.window = { location: { href: ''}};
    });

    afterEach(() => {
        global.window = {...windowObj};
        sinon.restore();
    });

    it('redirects on error', async () => {

        // all calls fail
        getJsonDataStub.callsArgWith(2, "stuberror on any");

        const root = shallow(
            <DiscoveryPage {...defaultProps} />, {...defaultContext}
        );

        await waitUntil(() => global.window.location.href != '');
        expect(global.window.location.href.indexOf('/sivut/500/')).to.equal(0);
    });


    it('redirects providers error with correct code', async () => {

        getJsonDataStub
            .withArgs('/api/metadata/unittestiner')
            .callsArgWith(1, metadata);
        getJsonDataStub
            .withArgs('/api/metadata/?type=AUTHENTICATION_PROVIDER')
            .callsArgWith(2, "some funky error getting providers");

        const root = shallow(
            <DiscoveryPage {...defaultProps} />, {...defaultContext}
        );

        await waitUntil(() => global.window.location.href != '');
        expect(global.window.location.href.indexOf('/sivut/500/?m=reactProviders&t=testtag')).to.equal(0);
    });

    // TODO: test also successul rendering (is not very easy, because global states on DiscoveryPage)
    // and failing metadata but successful providers case. These may require some additional work and refactoring
    // on DiscoveryPage.

});


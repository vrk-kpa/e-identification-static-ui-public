import { expect } from 'chai';
import { sandbox as sinonSandbox, stub, spy, match } from 'sinon';
import i18n from 'i18next';



import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import Translated from '../../src/Translated.js';

describe('Translated, when all ok,', function() {
    let sandbox;
    let translate
    beforeEach(function() {
        sandbox = sinonSandbox.create();
        translate = sandbox.stub(i18n, 't');
        translate.withArgs('testContentId').returns('testLocalisedContent');
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should show the p-element', function() {
        let renderer = ReactTestUtils.createRenderer();
        renderer.render(
            <Translated tag="p" id="testContentId" classname="testClassName" />
        );

        let result = renderer.getRenderOutput();
        expect(result.type).to.equal('p');
    });

    it('should show have data-i18n attribute', function() {
        let renderer = ReactTestUtils.createRenderer();
        renderer.render(
            <Translated tag="p" id="testContentId" classname="testClassName" />
        );

        let result = renderer.getRenderOutput();
        expect(result.props["data-i18n"]).to.equal('testContentId');
    });

    it('should translate the content', function() {
        let renderer = ReactTestUtils.createRenderer();
        renderer.render(
            <Translated tag="p" id="testContentId" classname="testClassName" />
        );

        let result = renderer.getRenderOutput();
        expect(result.props.children).to.equal('testLocalisedContent');
    });
});

import {expect} from 'chai';
import sinon from 'sinon';
import i18n from 'i18next';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Translated from '../../src/Translated.js';

describe('Translated, when all ok,', function() {
    let sandbox;
    let translate;
    beforeEach(function() {
        sandbox = sinon.createSandbox();
        //sandbox = sinonSandbox.create();
        translate = sandbox.stub(i18n, 't');
        translate.withArgs('testContentId').returns('testLocalisedContent');
    });

    afterEach(function() {
        sandbox.restore();
    });

    it('should show the p-element', function() {
        let renderer = ShallowRenderer.createRenderer();
        renderer.render(
            <Translated tag="p" id="testContentId" className="testClassName" />
        );

        let result = renderer.getRenderOutput();
        expect(result.type).to.equal('p');
    });

    it('should show have data-i18n attribute', function() {
        let renderer = ShallowRenderer.createRenderer();
        renderer.render(
            <Translated tag="p" id="testContentId" className="testClassName" />
        );

        let result = renderer.getRenderOutput();
        expect(result.props['data-i18n']).to.equal('testContentId');
    });

    it('should forward other props as attributes', function() {
        let renderer = ShallowRenderer.createRenderer();
        renderer.render(
            <Translated tag="label" id="testContentId" className="testClassName" htmlFor="foo" style="color: red;" />
        );

        let result = renderer.getRenderOutput();
        expect(result.props['htmlFor']).to.equal('foo');
        expect(result.props['className']).to.equal('testClassName');
        expect(result.props['style']).to.equal('color: red;');
    });

    it('should should not add tag or id as an attribute', function() {
        let renderer = ShallowRenderer.createRenderer();
        renderer.render(
            <Translated tag="label" id="testContentId" className="testClassName" htmlFor="foo" />
        );

        let result = renderer.getRenderOutput();
        expect(result.props['tag']).to.be.undefined;
        expect(result.props['id']).to.be.undefined;
    });

    it('should translate the content', function() {
        let renderer = ShallowRenderer.createRenderer();
        renderer.render(
            <Translated tag="p" id="testContentId" className="testClassName" />
        );

        let result = renderer.getRenderOutput();
        expect(result.props.children).to.equal('testLocalisedContent');
    });
});

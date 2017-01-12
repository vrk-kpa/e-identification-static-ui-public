import { expect } from 'chai';
import { sandbox as sinonSandbox, stub, spy, match } from 'sinon';
import i18n from 'i18next';



import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import TranslatedLink from '../../src/TranslatedLink.js';

describe('TranslatedLink', function() {
    describe('TranslatedLink should work when all ok', function() {
        let sandbox;
        let translate
        beforeEach(function() {
            sandbox = sinonSandbox.create();
            translate = sandbox.stub(i18n, 't');
            translate.withArgs('testLinkId').returns('testLinkTranslation');
            translate.withArgs('testContentId').returns('testContentTranslation');
        });

        afterEach(function () {
            sandbox.restore();
        });

        it('should show the a-element', function() {
            let renderer = ReactTestUtils.createRenderer();
            renderer.render(
                <TranslatedLink id="testId" className="testClass" link_i18n_id="testLinkId" content_i18n_id="testContentId"/>
            );

            let result = renderer.getRenderOutput();
            expect(result.type).to.equal('a');
        });

        it('should have data-i18n attribute', function() {
            let renderer = ReactTestUtils.createRenderer();
            renderer.render(
                <TranslatedLink id="testId" className="testClass" link_i18n_id="testLinkId" content_i18n_id="testContentId"/>
            );

            let result = renderer.getRenderOutput();
            expect(result.props["data-i18n"]).to.equal('testId');
        });

        it('should get translated link', function() {
            let renderer = ReactTestUtils.createRenderer();
            renderer.render(
                <TranslatedLink id="testId" className="testClass" link_i18n_id="testLinkId" content_i18n_id="testContentId"/>
            );

            let result = renderer.getRenderOutput();
            expect(result.props.href).to.equal('testLinkTranslation');
        });

        it('should get translated content', function() {
            let renderer = ReactTestUtils.createRenderer();
            renderer.render(
                <TranslatedLink id="testId" className="testClass" link_i18n_id="testLinkId" content_i18n_id="testContentId"/>
            );

            let result = renderer.getRenderOutput();
            expect(result.props.children).to.equal('testContentTranslation');
            console.log(JSON.stringify(result));
        });
    });
    describe('TranslatedLink fallback', function() {
        let sandbox;
        let translate
        beforeEach(function() {
            sandbox = sinonSandbox.create();
            translate = sandbox.stub(i18n, 't');
            i18n.options = { 'fallbackLng': ['fi'] };
        });

        afterEach(function () {
            sandbox.restore();
        });

        it('should get use finnish fallback link if no localised link available', function() {
            translate.withArgs('testLinkId', match.has('lng', 'fi')).returns('fallbackLinkTranslation')
                     .withArgs('testLinkId', match.typeOf('undefined')).returns(null);
            let renderer = ReactTestUtils.createRenderer();
            renderer.render(
                <TranslatedLink id="testId" className="testClass" link_i18n_id="testLinkId" content_i18n_id="testContentId"/>
            );

            let result = renderer.getRenderOutput();
            expect(result.props.href).to.equal('fallbackLinkTranslation');
        });
    });
});

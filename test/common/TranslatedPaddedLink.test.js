import {expect} from 'chai';
import sinon from 'sinon';
import i18n from 'i18next';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import TranslatedPaddedLink from '../../src/TranslatedPaddedLink.js';

describe('TranslatedPaddedLink', function() {
    describe('TranslatedPaddedLink should work when all ok', function() {
        let sandbox;
        let translate;
        beforeEach(function() {
            sandbox = sinon.createSandbox();
            translate = sandbox.stub(i18n, 't');
            translate.withArgs('testLinkId').returns('testLinkTranslation');
            translate.withArgs('testContentId').returns('testContentTranslation');
        });

        afterEach(function() {
            sandbox.restore();
        });

        it('should show a span element', function() {
            let renderer = ShallowRenderer.createRenderer();
            renderer.render(
                <TranslatedPaddedLink id="testId" className="testClass" link_i18n_id="testLinkId" content_i18n_id="testContentId"/>
            );
            let result = renderer.getRenderOutput();

            expect(result.type).to.equal('span');
        });
    });
});

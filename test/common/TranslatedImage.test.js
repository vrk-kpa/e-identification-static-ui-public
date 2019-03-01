import {expect} from 'chai';
//import { test as sinonClosure, stub, spy, match } from 'sinon';
import sinon from 'sinon';
import i18n from 'i18next';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import TranslatedImage from '../../src/TranslatedImage.js';

describe('TranslatedImage', function() {

    it('is tested in cleanup closure', function() {
        let translate;
        before(function() {
            translate = sinon.stub(i18n, 't');
            translate.withArgs('testImageId').returns('testLocalisedImage');
            translate.withArgs('testAltId').returns('testLocalisedAltText');
        });

        describe('should produce img-element when all ok', function() {

            it('should show the img-element', function() {
                let renderer = ShallowRenderer.createRenderer();
                renderer.render(
                    <TranslatedImage srcKey="testImageId" altKey="testAltId"/>
                );

                let result = renderer.getRenderOutput();
                expect(result.type).to.equal('img');
            });

            it('should have data-i18n attribute', function() {
                let renderer = ShallowRenderer.createRenderer();
                renderer.render(
                    <TranslatedImage srcKey="testImageId" altKey="testAltId"/>
                );

                let result = renderer.getRenderOutput();
                expect(result.props['data-i18n']).to.equal('testImageId');
            });

        });
    });

});

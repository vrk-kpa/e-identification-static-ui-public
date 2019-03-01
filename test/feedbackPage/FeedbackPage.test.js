import {expect} from 'chai';
import sinon from 'sinon';

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import FeedbackPage from '../../src/feedbackPage/FeedbackPage.js';
import FeedbackForm from '../../src/feedbackPage/FeedbackForm.js';

describe('FeedbackPage', function() {

    it('should show the form', function() {
        let renderer = ShallowRenderer.createRenderer();
        let router = {
            push: sinon.spy()
        };
        renderer.render(
            <FeedbackPage>
                <FeedbackForm />
            </FeedbackPage>,
            {
                lang: 'fi',
                router: router
            },
        );

        let result = renderer.getRenderOutput();
        expect(result.type).to.equal('main');
    });

});


import { expect } from 'chai';
import { useFakeXMLHttpRequest, mock, spy } from 'sinon';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import FeedbackPage from '../../src/feedbackPage/FeedbackPage.js';
import FeedbackForm from '../../src/feedbackPage/FeedbackForm.js';

describe('FeedbackPage', function() {

    it('should show the form', function() {
        let renderer = ReactTestUtils.createRenderer();
        let router = {
            push: spy()
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


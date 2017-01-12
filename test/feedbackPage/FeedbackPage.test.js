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
            <FeedbackPage />,
            {
                lang: 'fi',
                router: router
            }
        );

        let result = renderer.getRenderOutput();
        expect(result.type).to.equal('main');
    });

    describe('input validation', function() {
        beforeEach(function(){
            global.XMLHttpRequest = useFakeXMLHttpRequest();
            var requests = this.requests = [];
            global.XMLHttpRequest.onCreate = function (xhr) {
                requests.push(xhr);
            };

            let renderer = this.renderer = ReactTestUtils.createRenderer();
            this.feedbackPage = <FeedbackPage />;
            let router = {
                push: spy()
            };
            renderer.render(
                this.feedbackPage,
                {
                    lang: 'fi',
                    router: router
                }
            );
        });

        afterEach(function() {
            global.XMLHttpRequest.restore();
        })

        it('should show error message if message is empty', function() {
            let feedback = this.renderer.getRenderOutput();
            expect(feedback.props.children.props.children.props.children.props.children[0].props.style.display).to.equal('none');
            // submit feedback with empty message
            feedback.props.children.props.children.props.children.props.children[1].props.onFormSubmit({message: ''});
            feedback = this.renderer.getRenderOutput();
            expect(feedback.props.children.props.children.props.children.props.children[0].props.style.display).to.equal('');
            expect(this.requests.length).to.equal(0);
        });

        it('should hide error message and send feedback if message is not empty', function() {
            let feedback = this.renderer.getRenderOutput();
            expect(feedback.props.children.props.children.props.children.props.children[0].props.style.display).to.equal('none');
            // submit feedback with a message
            feedback.props.children.props.children.props.children.props.children[1].props.onFormSubmit({message: 'a'});
            feedback = this.renderer.getRenderOutput();
            expect(feedback.props.children.props.children.props.children.props.children[0].props.style.display).to.equal('none');
            expect(this.requests.length).to.equal(1);
        });
    });

});


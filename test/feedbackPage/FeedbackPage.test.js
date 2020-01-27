import {expect} from 'chai';
import sinon from 'sinon';

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import FeedbackPage from '../../src/feedbackPage/FeedbackPage.js';
import FeedbackForm from '../../src/feedbackPage/FeedbackForm.js';

import {parseEntityIdFromQuery} from '../../src/feedbackPage/utils.js';

describe('FeedbackPage', function() {

    const defaultFeedbackParams = {
        location: {
            sessionContextMissing: false,
            displaySingleBackLink: true
        }
    }

    it('should show the form', function() {
        let renderer = ShallowRenderer.createRenderer();
        let router = {
            push: sinon.spy()
        };
        renderer.render(
            <FeedbackPage {...defaultFeedbackParams} >
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

describe('FeedbackPage utils', () => {

    describe('parseEntityIdFromQuery', () => {
        const expected = 'https://samigen-dev.kapa.ware.fi/sp';

        it('parses from start', () => {
            const query = '?entityId=https://samigen-dev.kapa.ware.fi/sp&timeout=295&tid=8rfnfnoedrm1snormrhtm8f3a0&pid=73cb879df492f5f5778c288ded775c3d12bfeb41a738f9ef899c5bdb4ee27324&tag=19111814074870&authMethdReq=KATSOPWD;eLoA2;FFI;KATSOOTP;fLoA3;fLoA2;TESTI;eLoA3;MPASS1&conversation=e3s1';
            expect(parseEntityIdFromQuery(query)).to.equal(expected);
        });

        it('parses from start without ?', () => {
            const query = 'entityId=https://samigen-dev.kapa.ware.fi/sp&timeout=295&tid=8rfnfnoedrm1snormrhtm8f3a0&pid=73cb879df492f5f5778c288ded775c3d12bfeb41a738f9ef899c5bdb4ee27324&tag=19111814074870&authMethdReq=KATSOPWD;eLoA2;FFI;KATSOOTP;fLoA3;fLoA2;TESTI;eLoA3;MPASS1&conversation=e3s1';
            expect(parseEntityIdFromQuery(query)).to.equal(expected);
        });

        it('parses middle', () => {
            const query = '?timeout=295&tid=8rfnfnoedrm1snormrhtm8f3a0&entityId=https://samigen-dev.kapa.ware.fi/sp&pid=73cb879df492f5f5778c288ded775c3d12bfeb41a738f9ef899c5bdb4ee27324&tag=19111814074870&authMethdReq=KATSOPWD;eLoA2;FFI;KATSOOTP;fLoA3;fLoA2;TESTI;eLoA3;MPASS1&conversation=e3s1';
            expect(parseEntityIdFromQuery(query)).to.equal(expected);
        });

        it('parses from end', () => {
            const query = '?entityId=https://samigen-dev.kapa.ware.fi/sp&timeout=295&tid=8rfnfnoedrm1snormrhtm8f3a0&pid=73cb879df492f5f5778c288ded775c3d12bfeb41a738f9ef899c5bdb4ee27324&tag=19111814074870&authMethdReq=KATSOPWD;eLoA2;FFI;KATSOOTP;fLoA3;fLoA2;TESTI;eLoA3;MPASS1&conversation=e3s1';
            expect(parseEntityIdFromQuery(query)).to.equal(expected);
        });

        it('parses only element', () => {
            const query = '?entityId=https://samigen-dev.kapa.ware.fi/sp';
            expect(parseEntityIdFromQuery(query)).to.equal(expected);
        });
    });

});


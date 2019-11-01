import MockXMLHttpRequest from 'mock-xmlhttprequest';
import sinon from 'sinon';
import waitUntil from 'async-wait-until';
import * as Utils from '../../src/utils.js';


describe('Utils', () => {

    describe('getJsonData', () => {
        let server;

        afterEach(() => {
            server.remove()
        });

        it('calls data handler on success', async () => {
            server = MockXMLHttpRequest.newServer({
                get: [/.*/, { body: '{ "message": "Success!" }' }],
            }).install();

            const successSpy = sinon.spy();
            Utils.getJsonData("testuri", successSpy);

            await waitUntil(() => successSpy.called, 500);
            sinon.assert.calledWith(successSpy, { message: "Success!" });
        });

        it('calls error handler json parse error', async () => {
            server = MockXMLHttpRequest.newServer({
                get: [/.*/, { body: '{ "message": "Success!" ' }],
            }).install();

            const successSpy = sinon.spy();
            const errorSpy = sinon.spy();
            Utils.getJsonData("testuri", successSpy, errorSpy);

            await waitUntil(() => errorSpy.called, 500);
        });

        it('calls errorHandler on unexpected status', async () => {
            server = MockXMLHttpRequest.newServer({
                get: [/.*/, { status: 500 }],
            }).install();

            const successSpy = sinon.spy();
            const errorSpy = sinon.spy();
            Utils.getJsonData("testuri", successSpy, errorSpy);

            await waitUntil(() => errorSpy.called, 500);

        });

    });

    describe('getJsonData with low level mocks', () => {

        let MockXhr;

        beforeEach(() => {
            MockXhr = MockXMLHttpRequest.newMockXhr();
            global.XMLHttpRequest = MockXhr;
        });

        afterEach(() => {
            delete global.XMLHttpRequest;
        });

        it('calls errorHandler on error response', async () => {

            MockXhr.onSend = (xhr) => {
                xhr.setNetworkError();
            };

            const successSpy = sinon.spy();
            const errorSpy = sinon.spy();
            Utils.getJsonData("testuri", successSpy, errorSpy);

            await waitUntil(() => errorSpy.called, 500);

        });

    });


});


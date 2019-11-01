import {expect} from 'chai';
import sinon from 'sinon';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import ErrorBoundary from '../../src/ErrorBoundary';
import TestComponent from '../TestComponent';

configure({ adapter: new Adapter() });

describe('ErrorBoundary', function() {

    let redirectSpy;
    const errorCode='testErrCode';
    const tag = 'testtag';

    before(function() {
        this.jsdom = require('jsdom-global')();
    });

    after(function () {
        this.jsdom();
    })

    beforeEach(() => {
        redirectSpy = sinon.stub(ErrorBoundary.prototype, 'redirectToUrl');
    });

    afterEach(() => {
        redirectSpy.restore();
    })

    it("won't bleed exceptions", async () => {

        const root = mount(
            <ErrorBoundary tag={tag} errorCode={errorCode}>
                <TestComponent throw="testerror"/>
            </ErrorBoundary>
        );

        expect(root.exists('#test-component-body')).to.be.false;
        expect(redirectSpy.calledWithMatch(`m=${errorCode}`)).to.be.true;
        expect(redirectSpy.calledWithMatch(`t=${tag}`)).to.be.true;
    });

    it("can use default errorCode", async () => {

        const root = mount(
            <ErrorBoundary tag={tag}>
                <TestComponent throw="testerror"/>
            </ErrorBoundary>
        );

        expect(root.exists('#test-component-body')).to.be.false;
        expect(redirectSpy.calledWithMatch('m=reactRendErr')).to.be.true;
        expect(redirectSpy.calledWithMatch(`t=${tag}`)).to.be.true;
    });

    it("renders child if no errors", async () => {

        const root = mount(
            <ErrorBoundary errorCode={errorCode}>
                <TestComponent/>
            </ErrorBoundary>
        );

        expect(root.exists('#test-component-body')).to.be.true;
        expect(redirectSpy.called).to.be.false;

    });
});


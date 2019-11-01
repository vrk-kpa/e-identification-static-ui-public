import {expect} from 'chai';
import sinon from 'sinon';
import {MetadataService} from '../../src/MetadataService';

describe('MetadataService', function() {
    let sandbox;
    let metadataService;

    beforeEach(function() {
        sandbox = sinon.createSandbox();
        //sandbox = sinonSandbox.create();
        metadataService = MetadataService.getInstance();
    });

    afterEach(function() {
        sandbox.restore();
    });

    describe('when metadata loaded correctly, metadataService', function() {
        let metadata = {
            displayName: {
            en: "Service",
            fi: "Palvelu",
            sv: "Svenska"
            },
            attributeLevelOfAssurance: "KATSOOTP;KATSOPWD;EIDAS1;TESTI;EIDAS_LOA2;fLoA3;fLoA2;eLoA3;eLoA2",
            eidasSupport:"form"
        };

        let fetchMetadataStub;

        beforeEach(function() {
            fetchMetadataStub = sinon.stub(metadataService, 'fetchMetadata');
            fetchMetadataStub.callsArgWith(1, metadata);
        });

        afterEach(function() {
            sinon.restore();
        });

        it('should call metadata ready callback', function() {
            let spy = sinon.spy();
            metadataService.loadMetadata('entityid', spy);
            sinon.assert.calledOnce(spy);
        });

        it('should return service display name with correct language', function() {
            metadataService.loadMetadata('entityid', () => {});
            expect(metadataService.getServiceDisplayName('fi')).to.equal('Palvelu');
            expect(metadataService.getServiceDisplayName('sv')).to.equal('Svenska');
            expect(metadataService.getServiceDisplayName('en')).to.equal('Service');
            expect(metadataService.getServiceDisplayName('dadada')).to.equal('Palvelu');
        });
    });

    describe('when metadata with all auth methods loaded correctly, getAllowedAuthMethods', function() {
        let metadata = {
            displayName: {
            en: "Service",
            fi: "Palvelu",
            sv: "Svenska"
            },
            attributeLevelOfAssurance: "KATSOOTP;KATSOPWD;EIDAS1;TESTI;EIDAS_LOA2;fLoA3;fLoA2;eLoA3;eLoA2",
            eidasSupport:"form"
        };

        let fetchMetadataStub;

        beforeEach(function() {
            fetchMetadataStub = sinon.stub(metadataService, 'fetchMetadata');
            fetchMetadataStub.callsArgWith(1, metadata);
            metadataService.loadMetadata('entityid', () => {});
        });

        afterEach(function() {
            sinon.restore();
        });

        it('should return all auth methods when all are listed in metadata and request', function() {
            let authMethods = metadataService.getAllowedAuthMethods('KATSOOTP;KATSOPWD;EIDAS1;TESTI;EIDAS_LOA2;fLoA3;fLoA2;eLoA3;eLoA2');
            expect(authMethods.length).to.equal(9);
        });

        it('should return only requested auth methods when methods are limited by request', function() {
            let authMethods = metadataService.getAllowedAuthMethods('KATSOOTP;KATSOPWD');
            expect(authMethods.length).to.equal(2);
        });

        it('should return only metadata auth methods when requested methods exceed metadata definition', function() {
            let authMethods = metadataService.getAllowedAuthMethods('KATSOOTP;KATSOPWD;EIDAS1;TESTI;EIDAS_LOA2;fLoA3;fLoA2;eLoA3;eLoA2;notallowed');
            expect(authMethods.length).to.equal(9);
        });
    });

    describe('when metadata with only loa levels loaded correctly, getAllowedAuthMethods', function() {
        let metadata = {
            displayName: {
            en: "Service",
            fi: "Palvelu",
            sv: "Svenska"
            },
            attributeLevelOfAssurance: "fLoA3;fLoA2;eLoA3;eLoA2",
            eidasSupport:"form"
        };

        let fetchMetadataStub;

        beforeEach(function() {
            fetchMetadataStub = sinon.stub(metadataService, 'fetchMetadata');
            fetchMetadataStub.callsArgWith(1, metadata);
            metadataService.loadMetadata('entityid', () => {});
        });

        afterEach(function() {
            sinon.restore();
        });

        it('should return all loa levels when all are listed in metadata and request', function() {
            let authMethods = metadataService.getAllowedAuthMethods('fLoA3;fLoA2;eLoA3;eLoA2');
            expect(authMethods.length).to.equal(4);
            expect(authMethods.indexOf('fLoA3')).to.not.equal(-1);
            expect(authMethods.indexOf('fLoA2')).to.not.equal(-1);
            expect(authMethods.indexOf('eLoA3')).to.not.equal(-1);
            expect(authMethods.indexOf('eLoA2')).to.not.equal(-1);
        });

        it('should return only requested loa levels when they are limited by request', function() {
            let authMethods = metadataService.getAllowedAuthMethods('fLoA3;eLoA3');
            expect(authMethods.length).to.equal(2);
            expect(authMethods.indexOf('fLoA3')).to.not.equal(-1);
            expect(authMethods.indexOf('eLoA2')).to.equal(-1);
        });

        it('should return only metadata auth methods when requested methods exceed metadata definition', function() {
            let authMethods = metadataService.getAllowedAuthMethods('KATSOOTP;KATSOPWD;EIDAS1;TESTI;EIDAS_LOA2;fLoA3;fLoA2;eLoA3;eLoA2');
            expect(authMethods.length).to.equal(4);
            expect(authMethods.indexOf('KATSOOTP')).to.equal(-1);
        });

        it('should return empty array when none of the requested methods is defined in metadata', function() {
            let authMethods = metadataService.getAllowedAuthMethods('KATSOOTP;KATSOPWD');
            expect(authMethods.length).to.equal(0);
        });
    });

    describe('when metadata with all auth methods loaded correctly and matching providers exist, mapMethodsToProviderEntityIds', function() {
        let metadata = {
            displayName: {
            en: "Service",
            fi: "Palvelu",
            sv: "Svenska"
            },
            attributeLevelOfAssurance: "KATSOOTP;KATSOPWD;fLoA3;fLoA2;eLoA3;eLoA2",
            eidasSupport:"form"
        };

        let providers = [
            {entityId:"nordea",levelOfAssurance:"fLoA2",},
            {entityId:"op",levelOfAssurance:"fLoA2",},
            {entityId:"saastopankki",levelOfAssurance:"fLoA2",},
            {entityId:"katsopwd",levelOfAssurance:"KATSOPWD",},
            {entityId:"katsootp",levelOfAssurance:"KATSOOTP",},
            {entityId:"hst",levelOfAssurance:"fLoA3",},
            {entityId:"eidashigh",levelOfAssurance:"eLoA3",},
            {entityId:"eidassubstantial",levelOfAssurance:"eLoA2",}
        ];

        let fetchMetadataStub

        beforeEach(function() {
            fetchMetadataStub = sinon.stub(metadataService, 'fetchMetadata');
            fetchMetadataStub.callsArgWith(1, metadata);
            metadataService.loadMetadata('entityid', () => {});
        });

        afterEach(function() {
            sinon.restore();
        });

        it('should return all providers when called with all methods and levels', function() {
            let authMethods = ['KATSOOTP','KATSOPWD','fLoA3','fLoA2','eLoA3','eLoA2'];
            let entityIds = metadataService.mapMethodsToProviderEntityIds(authMethods, providers)
            expect(entityIds.length).to.equal(8);
            expect(entityIds.indexOf('nordea')).to.not.equal(-1);
            expect(entityIds.indexOf('katsootp')).to.not.equal(-1);
        });

        it('should return only loa level providers when called with only loa level methods', function() {
            let authMethods = ['fLoA3','fLoA2','eLoA3','eLoA2'];
            let entityIds = metadataService.mapMethodsToProviderEntityIds(authMethods, providers)
            expect(entityIds.length).to.equal(6);
            expect(entityIds.indexOf('nordea')).to.not.equal(-1);
            expect(entityIds.indexOf('katsootp')).to.equal(-1);
        });
    });

    describe('when fetchMetadata fails, metadataService', function() {

        let fetchMetadataStub;
        const error = new Error("oh no, error");

        beforeEach(function() {
            fetchMetadataStub = sinon.stub(metadataService, 'fetchMetadata');
            fetchMetadataStub.callsArgWith(2, error);
        });

        afterEach(function() {
            sinon.restore();
        });

        it('should call proper error callback', function() {
            const successSpy = sinon.spy();
            const errorSpy = sinon.spy();
            metadataService.loadMetadata('entityid', successSpy, errorSpy);
            sinon.assert.notCalled(successSpy);
            sinon.assert.calledOnce(errorSpy);
            sinon.assert.calledWith(errorSpy, error);
        });

    });

});

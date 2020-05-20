import { DomainResource } from '../domain-resource';
import { Reference } from '../reference';
import { CodeableConcept, Signature } from '..';
import { Timing } from '../timing';
export declare class VerificationResult extends DomainResource {
    resourceType: string;
    target?: Reference[];
    targetLocation?: string[];
    need?: CodeableConcept;
    status: 'attested' | 'validated' | 'in-process' | 'req-revalid' | 'val-fail' | 'reval-fail';
    statusDate?: Date;
    validationType?: CodeableConcept;
    validationProcess?: CodeableConcept[];
    frequency?: Timing;
    lastPerformed?: Date;
    nextScheduled?: Date;
    failureAction?: CodeableConcept;
    primarySource?: {
        who?: Reference;
        type?: CodeableConcept[];
        communicationMethod?: CodeableConcept[];
        validationStatus?: CodeableConcept;
        validationDate?: Date;
        canPushUpdates?: CodeableConcept;
        pushTypeAvailable?: CodeableConcept[];
    }[];
    attestation?: {
        who?: Reference;
        onBehalfOf?: Reference;
        communicationMethod?: CodeableConcept;
        date?: Date;
        sourceIdentityCertificate?: string;
        proxyIdentityCertificate?: string;
        proxySignature?: Signature;
        sourceSignature?: Signature;
    };
    validator?: {
        organization: Reference;
        identityCertificate?: string;
        attestationSignature?: Signature;
    }[];
}

import { DomainResource } from '../domain-resource';
import { CodeableConcept, Identifier, Period, Reference } from '..';
import { Annotation } from '../workflow/annotation';
import { Dosage } from './dosage';
import { SimpleQuantity } from '..';
import { Duration } from './duration';
export declare class MedicationRequest extends DomainResource {
    constructor(source?: any);
    readonly resourceType: string;
    identifier?: Identifier[];
    status: 'active' | 'on-hold' | 'cancelled' | 'completed' | 'entered-in-error' | 'stopped' | 'draft' | 'unknown';
    statusReason?: CodeableConcept;
    intent: 'proposal' | 'plan' | 'order' | 'original-order' | 'instance-order' | 'option';
    category?: CodeableConcept[];
    priority?: 'routine' | 'urgent' | 'asap' | 'stat';
    doNotPerform?: boolean;
    reportedBoolean?: boolean;
    reportedReference?: Reference;
    medicationCodeableConcept?: CodeableConcept;
    medicationReference?: Reference;
    subject: Reference;
    encounter?: Reference;
    supportingInformation?: Reference;
    authoredOn?: Date;
    requester?: Reference;
    performer?: Reference;
    performerType?: CodeableConcept;
    recorder?: Reference;
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference;
    instantiatesCanonical?: string[];
    instantiatesUri?: string[];
    basedOn?: Reference;
    groupIdentifier?: Identifier;
    courseOfTherapyType?: CodeableConcept;
    insurance?: Reference;
    note?: Annotation[];
    dosageInstruction?: Dosage[];
    dispenseRequest?: {
        initialFill?: {
            quantity?: SimpleQuantity;
            duration?: Duration;
        };
        dispenseInterval?: Duration;
        validityPeriod?: Period;
        numberOfRepeatsAllowed?: number;
        quantity?: SimpleQuantity;
        expectedSupplyDuration?: Duration;
        performer?: Reference;
    };
    substitution?: {
        allowedBoolean: boolean;
        allowedCodeableConcept: CodeableConcept;
        reason?: CodeableConcept;
    };
    priorPrescription?: Reference;
    detectedIssue?: Reference[];
    eventHistory?: Reference[];
}

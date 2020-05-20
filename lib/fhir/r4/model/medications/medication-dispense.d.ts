import { DomainResource } from '../domain-resource';
import { CodeableConcept, Identifier, Reference } from '..';
import { SimpleQuantity } from '../terminology/simple-quantity';
import { Annotation } from '../workflow/annotation';
import { Dosage } from './dosage';
export declare class MedicationDispense extends DomainResource {
    resourceType: string;
    identifier?: Identifier[];
    partOf?: Reference;
    status: 'preparation' | 'in-progress' | 'cancelled' | 'on-hold' | 'completed' | 'entered-in-error' | 'stopped' | 'unknown';
    statusReasonCodeableConcept?: CodeableConcept;
    statusReasonReference?: Reference;
    category?: CodeableConcept;
    medicationCodeableConcept: CodeableConcept;
    medicationReference: Reference;
    subject?: Reference;
    context?: Reference;
    supportingInformation?: Reference[];
    performer?: {
        function?: CodeableConcept;
        actor: Reference;
    }[];
    location?: Reference;
    authorizingPrescription?: Reference[];
    type?: CodeableConcept;
    quantity?: SimpleQuantity;
    daysSupply?: SimpleQuantity;
    whenPrepared?: Date;
    whenHandedOver?: Date;
    destination?: Reference;
    receiver?: Reference[];
    note?: Annotation[];
    dosageInstruction?: Dosage[];
    substitution?: {
        wasSubstituted: boolean;
        type?: CodeableConcept;
        reason?: CodeableConcept[];
        responsibleParty?: Reference[];
    };
    detectedIssue?: Reference[];
    eventHistory?: Reference[];
}

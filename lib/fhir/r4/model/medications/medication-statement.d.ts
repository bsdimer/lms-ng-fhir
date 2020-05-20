import { DomainResource } from '../domain-resource';
import { CodeableConcept, Identifier, Period, Reference } from '..';
import { Annotation } from '../workflow/annotation';
import { Dosage } from './dosage';
export declare class MedicationStatement extends DomainResource {
    resourceType: string;
    identifier?: Identifier[];
    basedOn?: Reference[];
    partOf?: Reference[];
    status: 'active' | 'completed' | 'entered-in-error' | 'intended' | 'stopped' | 'on-hold' | 'unknown' | 'not-taken';
    statusReason?: CodeableConcept[];
    category?: CodeableConcept;
    medicationCodeableConcept: CodeableConcept;
    medicationReference: Reference;
    subject: Reference;
    context?: Reference;
    effectiveDateTime: Date;
    effectivePeriod?: Period;
    dateAsserted?: Date;
    informationSource?: Reference;
    derivedFrom?: Reference[];
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[];
    note?: Annotation[];
    dosage?: Dosage[];
}

import { DomainResource } from '../domain-resource';
import { CodeableConcept, Identifier, Period, Reference } from '..';
import { Annotation } from '../workflow/annotation';
import { SimpleQuantity } from '../terminology/simple-quantity';
import { Ratio } from '../ratio';
export declare class MedicationAdministration extends DomainResource {
    resourceType: string;
    identifier?: Identifier[];
    instantiates?: string[];
    partOf?: Reference[];
    status: 'in-progress' | 'not-done' | 'on-hold' | 'completed' | 'entered-in-error' | 'stopped' | 'unknown';
    statusReason?: CodeableConcept[];
    category?: CodeableConcept;
    medicationCodeableConcept: CodeableConcept;
    medicationReference: Reference;
    subject: Reference;
    context?: Reference;
    supportingInformation?: Reference[];
    effectiveDateTime: Date;
    effectivePeriod: Period;
    performer?: {
        function?: CodeableConcept;
        actor: Reference;
    }[];
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[];
    request?: Reference;
    device?: Reference[];
    note?: Annotation[];
    dosage?: {
        text?: string;
        site?: CodeableConcept;
        route?: CodeableConcept;
        method?: CodeableConcept;
        dose?: SimpleQuantity;
        rateRatio?: Ratio;
        rateQuantity?: SimpleQuantity;
    };
    eventHistory?: Reference[];
}

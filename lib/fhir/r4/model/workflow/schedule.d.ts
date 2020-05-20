import { DomainResource } from '../domain-resource';
import { CodeableConcept, Identifier, Period, Reference } from '..';
export declare class Schedule extends DomainResource {
    resourceType: string;
    identifier?: Identifier[];
    active?: boolean;
    serviceCategory?: CodeableConcept[];
    serviceType?: CodeableConcept[];
    specialty?: CodeableConcept[];
    actor: Reference[];
    planningHorizon?: Period;
    comment?: string;
}

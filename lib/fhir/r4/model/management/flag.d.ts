import { DomainResource } from '../domain-resource';
import { CodeableConcept, Identifier, Period, Reference } from '..';
export declare class Flag extends DomainResource {
    resourceType: string;
    identifier?: Identifier[];
    status: 'active' | 'inactive' | 'entered-in-error';
    category?: CodeableConcept[];
    code: CodeableConcept;
    subject: Reference;
    period?: Period;
    encounter?: Reference;
    author?: Reference;
}

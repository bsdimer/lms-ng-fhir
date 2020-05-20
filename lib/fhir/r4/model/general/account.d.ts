import { DomainResource } from '../domain-resource';
import { CodeableConcept, Identifier } from '../terminology';
import { Reference } from '../reference';
import { Period } from '../period';
export declare class Account extends DomainResource {
    identifier?: Identifier[];
    status: 'active ' | 'inactive' | 'entered-in-error' | 'on-hold' | 'unknown';
    type?: CodeableConcept;
    name?: string;
    subject?: Reference[];
    servicePeriod?: Period;
    coverage?: {
        coverage: Reference;
        priority: string;
    }[];
    owner?: Reference;
    description?: string;
    guarantor?: {
        party: Reference;
        onHold?: boolean;
        period?: Period;
    }[];
    partOf?: Reference;
}

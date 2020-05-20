import { DomainResource } from '../domain-resource';
import { CodeableConcept, Identifier, Reference } from '..';
import { Ratio } from '../ratio';
export declare class Medication extends DomainResource {
    constructor(source?: any);
    resourceType: string;
    identifier?: Identifier[];
    code?: CodeableConcept;
    status?: 'active' | 'inactive' | 'entered-in-error';
    manufacturer?: Reference;
    form?: CodeableConcept;
    amount?: Ratio;
    ingredient?: {
        itemCodeableConcept: CodeableConcept;
        itemReference: Reference;
        isActive?: boolean;
        strength?: Ratio;
    }[];
    batch?: {
        lotNumber?: string;
        expirationDate?: Date;
    };
}

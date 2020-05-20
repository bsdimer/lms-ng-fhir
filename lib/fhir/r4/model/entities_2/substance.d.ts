import { DomainResource } from '../domain-resource';
import { CodeableConcept, Identifier, SimpleQuantity } from '../terminology';
import { Ratio } from '../ratio';
import { Reference } from '../reference';
export declare class Substance extends DomainResource {
    identifier?: Identifier[];
    status?: 'active' | 'inactive' | 'entered-in-error';
    category?: CodeableConcept[];
    code: CodeableConcept;
    description?: string;
    instance?: {
        identifier?: Identifier;
        expiry?: Date;
        quantity?: SimpleQuantity;
    }[];
    ingredient?: {
        quantity?: Ratio;
        substanceCodeableConcept?: CodeableConcept;
        substanceReference?: Reference;
    }[];
}

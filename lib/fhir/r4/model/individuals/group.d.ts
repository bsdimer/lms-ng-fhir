import { DomainResource } from '../domain-resource';
import { Identifier } from '../terminology/identifier';
import { CodeableConcept } from '../terminology/codeableconcept';
import { Reference } from '../reference';
import { Quantity } from '../terminology/quantity';
import { Range } from '../range';
import { Period } from '../period';
export declare class Group extends DomainResource {
    resourceType: string;
    identifier?: Identifier[];
    active?: boolean;
    type: 'person' | 'animal' | 'practitioner' | 'device' | 'medication' | 'substance';
    actual: boolean;
    code?: CodeableConcept;
    name?: string;
    quantity?: number;
    managingEntity?: Reference;
    characteristic?: {
        code: CodeableConcept;
        valueCodeableConcept?: CodeableConcept;
        valueBoolean?: boolean;
        valueQuantity?: Quantity;
        valueRange?: Range;
        valueReference?: Reference;
        exclude: boolean;
        period?: Period;
    }[];
    member?: {
        entity: Reference;
        period?: Period;
        inactive?: boolean;
    }[];
}

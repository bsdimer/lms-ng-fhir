import { DomainResource } from '../domain-resource';
import { Identifier } from '../terminology/identifier';
import { Reference } from '../reference';
import { CodeableConcept } from '../terminology/codeableconcept';
import { HumanName } from './humanname';
import { ContactPoint } from '../terminology/contactpoint';
import { Address } from './address';
import { Attachment } from './attachment';
import { Period } from '../period';
export declare class RelatedPerson extends DomainResource {
    resourceType: string;
    identifier?: Identifier[];
    active?: boolean;
    patient: Reference;
    relationship?: CodeableConcept[];
    name?: HumanName[];
    telecom?: ContactPoint[];
    gender?: 'male' | 'female' | 'other' | 'unknown';
    birthDate?: Date;
    address?: Address[];
    photo?: Attachment[];
    period?: Period;
    communication?: {
        language: CodeableConcept;
        preferred: boolean;
    }[];
}

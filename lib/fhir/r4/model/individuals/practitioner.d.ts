import { DomainResource } from '../domain-resource';
import { Identifier } from '../terminology/identifier';
import { HumanName } from './humanname';
import { ContactPoint } from '../terminology/contactpoint';
import { Address } from './address';
import { Attachment } from './attachment';
import { CodeableConcept } from '../terminology/codeableconcept';
import { Period } from '../period';
import { Reference } from '../reference';
export declare class Practitioner extends DomainResource {
    constructor(source?: any);
    resourceType: string;
    identifier?: Identifier[];
    active?: boolean;
    name?: HumanName[];
    telecom?: ContactPoint[];
    address?: Address[];
    gender?: 'male' | 'female' | 'other' | 'unknown';
    birthDate?: Date;
    photo?: Attachment[];
    qualification?: {
        identifier?: Identifier[];
        code: CodeableConcept;
        period?: Period;
        issuer?: Reference;
    }[];
    communication?: CodeableConcept[];
    static getNew(): Practitioner;
}

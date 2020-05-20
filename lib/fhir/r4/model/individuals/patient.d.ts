import { DomainResource } from '../domain-resource';
import { Identifier } from '..';
import { HumanName } from './humanname';
import { ContactPoint } from '..';
import { Address } from './address';
import { CodeableConcept } from '..';
import { Attachment } from './attachment';
import { Reference } from '../reference';
import { Period } from '../period';
export declare class Patient extends DomainResource {
    constructor(source?: any);
    resourceType: string;
    identifier?: Identifier[];
    active?: boolean;
    name?: HumanName[];
    telecom?: ContactPoint[];
    gender?: 'male' | 'female' | 'other' | 'unknown';
    birthDate?: Date;
    deceasedBoolean?: boolean;
    deceasedDateTime?: Date;
    address?: Address[];
    maritalStatus?: CodeableConcept;
    multipleBirthBoolean?: boolean;
    multipleBirthInteger?: number;
    photo?: Attachment[];
    contact?: {
        relationship?: CodeableConcept[];
        name?: HumanName;
        telecom?: ContactPoint[];
        address?: Address;
        gender?: 'male' | 'female' | 'other' | 'unknown';
        organization?: Reference;
        period?: Period;
    }[];
    communication?: {
        language: CodeableConcept;
        preferred?: boolean;
    }[];
    generalPractitioner?: Reference[];
    managingOrganization?: Reference;
    link?: {
        other: Reference;
        type: 'replaced-by' | 'replaces' | 'refer' | 'seealso';
    }[];
    static getNew(): Patient;
}

import { Identifier } from '../terminology/identifier';
import { DomainResource } from '../domain-resource';
import { HumanName } from './humanname';
import { ContactPoint } from '../terminology/contactpoint';
import { Address } from './address';
import { Attachment } from './attachment';
import { Reference } from '../reference';
export declare class Person extends DomainResource {
    constructor(source?: any);
    resourceType: string;
    identifier?: Identifier[];
    name?: HumanName[];
    telecom?: ContactPoint[];
    gender?: 'male' | 'female' | 'other' | 'unknown';
    birthDate?: Date;
    address?: Address[];
    photo?: Attachment;
    managingOrganization?: Reference;
    active?: boolean;
    link?: {
        target: Reference;
        assurance?: 'level1' | 'level2' | 'level3' | 'level4';
    }[];
    static getNew(): Person;
}

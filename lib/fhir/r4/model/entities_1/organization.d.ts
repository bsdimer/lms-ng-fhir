import { DomainResource } from '../domain-resource';
import { Address, CodeableConcept, ContactPoint, HumanName, Identifier, Reference } from '..';
export declare class Organization extends DomainResource {
    resourceType: string;
    identifier?: Identifier[];
    active?: boolean;
    type?: CodeableConcept[];
    name?: string;
    alias?: string[];
    telecom?: ContactPoint[];
    address?: Address[];
    partOf?: Reference;
    contact?: {
        purpose?: CodeableConcept;
        name?: HumanName;
        telecom?: ContactPoint[];
        address?: Address;
    }[];
    endpoint?: Reference;
}

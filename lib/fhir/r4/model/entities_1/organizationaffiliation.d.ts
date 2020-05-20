import { DomainResource } from '../domain-resource';
import { CodeableConcept, ContactPoint, Identifier, Period, Reference } from '..';
export declare class OrganizationAffiliation extends DomainResource {
    resourceType: string;
    identifier?: Identifier[];
    active?: boolean;
    period?: Period;
    organization?: Reference;
    participatingOrganization?: Reference;
    network?: Reference[];
    code?: CodeableConcept[];
    specialty?: CodeableConcept[];
    location?: Reference;
    healthcareService?: Reference;
    telecom?: ContactPoint[];
    endpoint?: Reference;
}

import { DomainResource } from '../domain-resource';
import { Address, CodeableConcept, Coding, ContactPoint, Identifier, Reference } from '..';
export declare class Location extends DomainResource {
    resourceType: string;
    identifier?: Identifier[];
    status?: 'active' | 'suspended' | 'inactive';
    operationalStatus?: Coding;
    name?: string;
    alias?: string[];
    description?: string;
    mode?: 'instance' | 'kind';
    type?: CodeableConcept[];
    telecom?: ContactPoint;
    address?: Address;
    physicalType?: CodeableConcept;
    position?: {
        longitude: number;
        latitude: number;
        altitude?: number;
    }[];
    managingOrganization?: Reference;
    partOf?: Reference;
    hoursOfOperation?: {
        daysOfWeek?: string[];
        allDay?: boolean;
        openingTime?: Date;
        closingTime?: Date;
    }[];
    availabilityExceptions?: string;
    endpoint?: Reference;
}

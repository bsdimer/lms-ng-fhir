import { DomainResource } from '../domain-resource';
import { CodeableConcept, Coding, ContactPoint, Identifier, Period, Reference } from '..';
export declare class Endpoint extends DomainResource {
    resourceType: string;
    identifier?: Identifier[];
    status: 'active' | 'suspended' | 'error' | 'off' | 'entered-in-error' | 'test';
    connectionType: Coding;
    name?: string;
    managingOrganization?: Reference;
    contact?: ContactPoint[];
    period?: Period;
    payloadType: CodeableConcept[];
    payloadMimeType?: string;
    address: string;
    header?: string[];
}

import { DomainResource } from '../domain-resource';
import { Identifier } from '../terminology/identifier';
import { Period } from '../period';
import { Reference } from '../reference';
import { CodeableConcept } from '../terminology/codeableconcept';
import { ContactPoint } from '../terminology/contactpoint';
export declare class PractitionerRole extends DomainResource {
    constructor(source?: any);
    resourceType: string;
    identifier?: Identifier[];
    active?: boolean;
    period?: Period;
    practitioner?: Reference;
    organization?: Reference;
    code?: CodeableConcept[];
    specialty?: CodeableConcept[];
    location?: Reference[];
    healthcareService?: Reference[];
    telecom?: ContactPoint[];
    availableTime?: {
        daysOfWeek?: string[];
        allDay?: boolean;
        availableStartTime?: Date;
        availableEndTime?: Date;
    }[];
    notAvailable?: {
        description: string;
        during?: Period;
    }[];
    availabilityExceptions?: string;
    endpoint?: Reference[];
    static getNew(): PractitionerRole;
}

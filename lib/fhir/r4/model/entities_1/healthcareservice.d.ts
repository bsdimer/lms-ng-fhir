import { DomainResource } from '../domain-resource';
import { Identifier } from '../terminology/identifier';
import { Reference } from '../reference';
import { CodeableConcept } from '../terminology/codeableconcept';
import { Attachment } from '../individuals/attachment';
import { ContactPoint } from '../terminology/contactpoint';
import { Period } from '../period';
export declare class HealthcareService extends DomainResource {
    constructor(source?: any);
    resourceType: string;
    identifier?: Identifier[];
    active?: boolean;
    providedBy?: Reference;
    category?: CodeableConcept[];
    type?: CodeableConcept[];
    specialty?: CodeableConcept[];
    location?: Reference[];
    name?: string;
    comment?: string;
    extraDetails?: string;
    photo?: Attachment;
    telecom?: ContactPoint[];
    coverageArea?: Reference;
    serviceProvisionCode?: CodeableConcept[];
    eligibility?: {
        code?: CodeableConcept;
        comment?: string;
    }[];
    program?: CodeableConcept[];
    characteristic?: CodeableConcept[];
    communication?: CodeableConcept[];
    referralMethod?: CodeableConcept[];
    appointmentRequired?: boolean;
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
    static getNew(): any;
}

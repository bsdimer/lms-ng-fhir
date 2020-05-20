import { DomainResource } from '../domain-resource';
import { CodeableConcept, Identifier, Period, Reference } from '..';
export declare class Appointment extends DomainResource {
    resourceType: string;
    identifier?: Identifier[];
    status: 'proposed' | 'pending' | 'booked' | 'arrived' | 'fulfilled' | 'cancelled' | 'noshow' | 'entered-in-error' | 'checked-in' | 'waitlist';
    cancelationReason?: CodeableConcept;
    serviceCategory?: CodeableConcept[];
    serviceType?: CodeableConcept[];
    specialty?: CodeableConcept[];
    appointmentType?: CodeableConcept;
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[];
    priority?: number;
    description?: string;
    supportingInformation?: Reference[];
    start?: Date;
    end?: Date;
    minutesDuration?: number;
    slot?: Reference[];
    created?: Date;
    comment?: string;
    patientInstruction?: string;
    basedOn?: Reference[];
    participant: {
        type?: CodeableConcept[];
        actor?: Reference;
        required?: 'required' | 'optional' | 'information-only';
        status: 'accepted' | 'declined' | 'tentative' | 'needs-action';
        period?: Period;
    }[];
    requestedPeriod?: Period[];
}

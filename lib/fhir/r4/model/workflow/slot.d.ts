import { DomainResource } from '../domain-resource';
import { CodeableConcept, Identifier, Reference } from '..';
export declare class Slot extends DomainResource {
    resourceType: string;
    identifier?: Identifier[];
    serviceCategory?: CodeableConcept[];
    serviceType?: CodeableConcept[];
    specialty?: CodeableConcept[];
    appointmentType?: CodeableConcept;
    schedule: Reference;
    status: 'busy' | 'free' | 'busy-unavailable' | 'busy-tentative' | 'entered-in-error';
    start: Date;
    end: Date;
    overbooked?: boolean;
    comment?: string;
}

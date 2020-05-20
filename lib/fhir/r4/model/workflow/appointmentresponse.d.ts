import { DomainResource } from '../domain-resource';
import { CodeableConcept, Identifier, Reference } from '..';
export declare class AppointmentResponse extends DomainResource {
    resourceType: string;
    identifier?: Identifier[];
    appointment: Reference;
    start?: Date;
    end?: Date;
    participantType?: CodeableConcept[];
    actor?: Reference;
    participantStatus: 'accepted' | 'declined' | 'tentative' | 'in-process' | 'completed' | 'needs-action' | 'entered-in-error';
    comment?: string;
}

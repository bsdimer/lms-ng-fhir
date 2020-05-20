import { DomainResource } from '../domain-resource';
import { CodeableConcept, Identifier, Period, Reference } from '..';
export declare class EpisodeOfCare extends DomainResource {
    resourceType: string;
    identifier?: Identifier[];
    status: 'planned' | 'waitlist' | 'active' | 'onhold' | 'finished' | 'cancelled' | 'entered-in-error';
    statusHistory?: {
        status: 'planned' | 'waitlist' | 'active' | 'onhold' | 'finished' | 'cancelled' | 'entered-in-error';
        period: Period;
    }[];
    type?: CodeableConcept[];
    diagnosis?: {
        condition: Reference;
        role?: CodeableConcept;
        rank?: number;
    }[];
    patient: Reference;
    managingOrganization?: Reference;
    period?: Period;
    referralRequest?: Reference[];
    careManager?: Reference;
    team?: Reference[];
    account?: Reference[];
}

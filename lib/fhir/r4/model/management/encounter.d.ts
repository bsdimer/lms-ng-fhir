import { DomainResource } from '../domain-resource';
import { CodeableConcept, Coding, Identifier, Period, Reference } from '..';
import { Duration } from '../medications/duration';
export declare class Encounter extends DomainResource {
    resourceType: string;
    identifier?: Identifier[];
    status: 'planned' | 'arrived' | 'triaged' | 'in-progress' | 'onleave' | 'finished' | 'cancelled';
    statusHistory?: {
        status: 'planned' | 'arrived' | 'triaged' | 'in-progress' | 'onleave' | 'finished' | 'cancelled';
        period: Period;
    }[];
    class: Coding;
    classHistory?: {
        class: Coding;
        period: Period;
    }[];
    type?: CodeableConcept[];
    serviceType?: CodeableConcept;
    priority?: CodeableConcept;
    subject?: Reference;
    episodeOfCare?: Reference[];
    basedOn?: Reference[];
    participant?: {
        type?: CodeableConcept[];
        period?: Period;
        individual?: Reference;
    }[];
    appointment?: Reference[];
    period?: Period;
    length?: Duration;
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[];
    diagnosis?: {
        condition: Reference;
        use?: CodeableConcept;
        rank?: number;
    }[];
    account?: Reference[];
    hospitalization?: {
        preAdmissionIdentifier?: Identifier;
        origin?: Reference;
        admitSource?: CodeableConcept;
        reAdmission?: CodeableConcept;
        dietPreference?: CodeableConcept[];
        specialCourtesy?: CodeableConcept[];
        specialArrangement?: CodeableConcept[];
        destination?: Reference;
        dischargeDisposition?: CodeableConcept;
    };
    location?: {
        location: Reference;
        status?: 'planned' | 'active' | 'reserved' | 'completed';
        physicalType?: CodeableConcept;
        period?: Period;
    }[];
    serviceProvider?: Reference;
    partOf?: Reference;
}

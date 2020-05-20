import { DomainResource } from '../domain-resource';
import { CodeableConcept, Identifier, Period, Reference } from '..';
import { Annotation } from './annotation';
export declare class Task extends DomainResource {
    resourceType: string;
    identifier?: Identifier[];
    instantiatesCanonical?: string;
    instantiatesUri?: string;
    basedOn?: Reference[];
    groupIdentifier?: Identifier;
    partOf?: Reference[];
    status: 'draft' | 'requested' | 'received' | 'accepted' | '+';
    statusReason?: CodeableConcept;
    businessStatus?: CodeableConcept;
    intent: 'unknown' | 'proposal' | 'plan' | 'order' | 'original-order' | 'reflex-order' | 'filler-order' | 'instance-order' | 'option';
    priority?: 'routine' | 'urgent' | 'asap' | 'stat';
    code?: CodeableConcept;
    description?: string;
    focus?: Reference;
    for?: Reference;
    encounter?: Reference;
    executionPeriod?: Period;
    authoredOn?: Date;
    lastModified?: Date;
    requester?: Reference;
    performerType?: CodeableConcept[];
    owner?: Reference;
    location?: Reference;
    reasonCode?: CodeableConcept;
    reasonReference?: Reference;
    insurance?: Reference;
    note?: Annotation[];
    relevantHistory?: Reference[];
    restriction?: {
        repetitions?: number;
        period?: Period;
        recipient?: Reference[];
    };
    input?: {
        type: CodeableConcept;
        valueString: string;
    }[];
    output?: {
        type: CodeableConcept;
        valueString: string;
    }[];
}

import { DomainResource } from '../domain-resource';
import { CodeableConcept, Identifier, Reference } from '..';
import { Annotation } from '../workflow/annotation';
export declare class List extends DomainResource {
    resourceType: string;
    identifier?: Identifier[];
    status: 'current' | 'retired' | 'entered-in-error';
    mode: 'working' | 'snapshot' | 'changes';
    title?: string;
    code?: CodeableConcept;
    subject?: Reference;
    encounter?: Reference;
    date?: Date;
    source?: Reference;
    orderedBy?: CodeableConcept;
    note?: Annotation[];
    entry?: {
        flag?: CodeableConcept;
        deleted?: boolean;
        date?: Date;
        item: Reference;
    }[];
    emptyReason?: CodeableConcept;
}

import { Identifier } from './identifier';
import { ContactDetail } from './contactdetail';
import { UsageContext } from './usagecontext';
import { CodeableConcept } from './codeableconcept';
import { DomainResource } from '../domain-resource';
import { CodeSystemConcept } from './codesystemconcept';
export declare class CodeSystem extends DomainResource {
    resourceType: string;
    url?: string;
    identifier?: Identifier[];
    version?: string;
    name?: string;
    title?: string;
    status: 'draft' | 'active' | 'retired' | 'unknown';
    experimental?: boolean;
    date?: Date;
    publisher?: string;
    contact?: ContactDetail[];
    description?: string;
    useContext?: UsageContext[];
    jurisdiction?: CodeableConcept[];
    purpose?: string;
    copyright?: string;
    caseSensitive?: boolean;
    valueSet?: string;
    hierarchyMeaning?: 'grouped-by' | 'is-a' | 'part-of' | 'classified-with';
    compositional?: boolean;
    versionNeeded?: boolean;
    content: 'not-present' | 'example' | 'fragment' | 'complete' | 'supplement';
    supplements?: string;
    count?: number;
    filter?: {
        code: string;
        description?: string;
        operator: string[];
        value: string;
    }[];
    property?: {
        code: string;
        uri?: string;
        description?: string;
        type: 'Coding' | 'string' | 'boolean' | 'Date' | 'number';
    }[];
    concept?: CodeSystemConcept[];
}

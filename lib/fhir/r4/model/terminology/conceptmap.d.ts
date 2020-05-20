import { DomainResource } from '../domain-resource';
import { Identifier } from './identifier';
import { ContactDetail } from './contactdetail';
import { UsageContext } from './usagecontext';
import { CodeableConcept } from './codeableconcept';
import { ConceptMapDependsOn } from './conceptmapdependson';
export declare class ConceptMap extends DomainResource {
    resourceType: string;
    url?: string;
    identifier?: Identifier;
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
    sourceUri?: string;
    sourceCanonical?: string;
    targetUri?: string;
    targetCanonical?: string;
    group?: {
        source?: string;
        sourceVersion?: string;
        target?: string;
        targetVersion?: string;
        element: {
            code?: string;
            display?: string;
            target?: {
                code?: string;
                display?: string;
                equivalence: string;
                comment?: string;
                dependsOn?: ConceptMapDependsOn[];
                product?: ConceptMapDependsOn[];
            }[];
            unmapped?: {
                mode: string;
                code?: string;
                display?: string;
                url?: string;
            }[];
        }[];
    }[];
}

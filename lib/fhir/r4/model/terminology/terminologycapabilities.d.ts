import { DomainResource } from '../domain-resource';
import { ContactDetail } from './contactdetail';
import { UsageContext } from './usagecontext';
import { CodeableConcept } from './codeableconcept';
export declare class TerminologyCapabilities extends DomainResource {
    resourceType: string;
    url?: string;
    version?: string;
    name?: string;
    title?: string;
    status: 'draft' | 'active' | 'retired' | 'unknown';
    experimental?: boolean;
    date: Date;
    publisher?: string;
    contact?: ContactDetail[];
    description?: string;
    useContext?: UsageContext[];
    jurisdiction?: CodeableConcept[];
    purpose?: string;
    copyright?: string;
    kind: 'instance' | 'capability' | 'requirements';
    software?: {
        name: string;
        version?: string;
    };
    implementation?: {
        description: string;
        url?: string;
    };
    lockedDate?: boolean;
    codeSystem?: {
        uri?: string;
        version?: {
            code?: string;
            isDefault?: boolean;
            compositional?: boolean;
            language?: string[];
            filter?: {
                code: string;
                op: string[];
            }[];
            property?: string[];
        }[];
        subsumption?: boolean;
    }[];
    expansion?: {
        hierarchical?: boolean;
        paging?: boolean;
        incomplete?: boolean;
        parameter?: {
            name: string;
            documentation?: string;
        }[];
        textFilter?: string;
    };
    codeSearch?: 'explicit' | 'all';
    validateCode?: {
        translations: boolean;
    };
    translation?: {
        needsMap: boolean;
    };
    closure?: {
        translation?: boolean;
    };
}

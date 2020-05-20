import { DomainResource } from '../domain-resource';
import { ContactDetail } from './contactdetail';
import { CodeableConcept } from './codeableconcept';
import { UsageContext } from './usagecontext';
import { Period } from '../period';
export declare class NamingSystem extends DomainResource {
    resourceType: string;
    name: string;
    status: 'draft' | 'active' | 'retired' | 'unknown';
    kind: string;
    date: Date;
    publisher?: string;
    contact?: ContactDetail[];
    responsible?: string;
    type?: CodeableConcept;
    description?: string;
    useContext?: UsageContext[];
    jurisdiction?: CodeableConcept[];
    usage?: string;
    uniqueId: {
        type: 'oid' | 'uuid' | 'uri' | 'other';
        value: string;
        preferred?: boolean;
        comment?: string;
        period?: Period;
    }[];
}

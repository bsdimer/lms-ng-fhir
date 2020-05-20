import { DomainResource } from '../domain-resource';
import { Identifier } from './identifier';
import { ContactDetail } from './contactdetail';
import { UsageContext } from './usagecontext';
import { CodeableConcept } from './codeableconcept';
import { Coding } from './coding';
import { ValueSetContains } from '../valuesetcontains';
export declare class ValueSet extends DomainResource {
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
    immutable?: boolean;
    purpose?: string;
    copyright?: string;
    compose?: {
        lockedDate?: Date;
        inactive?: boolean;
        include: {
            system?: string;
            version?: string;
            concept?: {
                code: string;
                display?: string;
                designation?: {
                    language?: string;
                    use?: Coding;
                    value: string;
                }[];
            }[];
            filter?: {
                property: string;
                op: string;
                value: string;
            }[];
            valueSet?: string[];
        }[];
        exclude?: {
            system?: string;
            version?: string;
            concept?: {
                code: string;
                display?: string;
                designation?: {
                    language?: string;
                    use?: Coding;
                    value: string;
                }[];
            }[];
            filter?: {
                property: string;
                op: string;
                value: string;
            }[];
            valueSet?: string[];
        }[];
    };
    expansion?: {
        identifier?: string;
        timestamp: Date;
        total?: number;
        offset?: number;
        parameter?: {
            name: string;
            valueString?: string;
            valueBoolean?: boolean;
            valueInteger?: number;
            valueDecimal?: number;
            valueUri?: string;
            valueCode?: string;
            valueDateTime?: Date;
        }[];
        contains?: ValueSetContains[];
    };
}

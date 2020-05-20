import { Resource } from '../resource';
import { Identifier } from '../terminology/identifier';
import { BundleEntry } from './bundle-entry';
export declare class Bundle extends Resource {
    identifier?: Identifier;
    resourceType: string;
    type: 'document' | 'message' | 'transaction' | 'transaction-response' | 'batch' | 'batch-response' | 'history' | 'searchset' | 'collection';
    timestamp?: Date;
    total: number;
    link?: {
        relation: string;
        url: string;
    }[];
    entry?: BundleEntry[];
}

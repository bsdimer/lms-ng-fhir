import { DomainResource } from '../domain-resource';
import { CodeableConcept, ContactDetail, Identifier, UsageContext } from '../terminology';
import { Period } from '../period';
import { Reference } from '../reference';
import { Money } from '../money';
export declare class ChargeItemDefinition extends DomainResource {
    constructor(source?: any);
    url: string;
    identifier?: Identifier[];
    version?: string;
    title?: string;
    derivedFromUri?: string[];
    partOf?: string[];
    replaces?: string[];
    status: 'draft' | 'active' | 'retired' | 'unknown';
    experimental?: boolean;
    date?: Date;
    publisher?: string;
    contact?: ContactDetail[];
    description?: string;
    useContext?: UsageContext[];
    jurisdiction?: CodeableConcept[];
    copyright?: string;
    approvalDate?: Date;
    lastReviewDate?: Date;
    effectivePeriod?: Period;
    code?: CodeableConcept;
    instance?: Reference[];
    applicability?: {
        description?: string;
        language?: string;
        expression?: string;
    }[];
    propertyGroup?: {
        applicability?: string[];
        priceComponent?: {
            type: 'base' | 'surcharge' | 'deduction' | 'discount' | 'tax' | 'informational';
            code?: CodeableConcept;
            factor?: number;
            amount?: Money;
        }[];
    }[];
}

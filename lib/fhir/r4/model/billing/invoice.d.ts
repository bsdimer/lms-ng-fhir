import { DomainResource } from '../domain-resource';
import { CodeableConcept, Identifier } from '../terminology';
import { Reference } from '../reference';
import { Money } from '../money';
import { Annotation } from '../workflow';
export declare class Invoice extends DomainResource {
    resourceType: string;
    identifier?: Identifier[];
    status: 'draft' | 'issued' | 'balanced' | 'cancelled' | 'entered-in-error';
    cancelledReason?: string;
    type?: CodeableConcept;
    subject?: Reference;
    recipient?: Reference;
    date?: Date;
    participant?: {
        role?: CodeableConcept;
        actor: Reference;
    }[];
    issuer?: Reference;
    account?: Reference;
    lineItem?: {
        sequence?: number;
        chargeItemReference: Reference;
        chargeItemCodeableConcept: CodeableConcept;
        priceComponent?: {
            type: 'base' | 'surcharge' | 'deduction' | 'discount' | 'tax' | 'informational';
            code?: CodeableConcept;
            factor?: number;
            amount?: Money;
        }[];
    }[];
    totalPriceComponent?: Reference[];
    totalNet?: Money;
    totalGross?: Money;
    paymentTerms?: string;
    note?: Annotation[];
}

import { DomainResource } from '../domain-resource';
import { CodeableConcept, Identifier, SimpleQuantity } from '../terminology';
import { Reference } from '../reference';
import { Period } from '../period';
import { Money } from '../money';
export declare class Coverage extends DomainResource {
    identifier?: Identifier[];
    status: 'active' | 'cancelled' | 'draft' | 'entered-in-error';
    type?: CodeableConcept;
    policyHolder?: Reference;
    subscriber?: Reference;
    subscriberId?: string;
    beneficiary: Reference;
    dependent?: string;
    relationship?: CodeableConcept;
    period?: Period;
    payor: Reference[];
    class?: {
        type: CodeableConcept;
        value: string;
        name?: string;
    }[];
    order?: string;
    network?: string;
    costToBeneficiary?: {
        type?: CodeableConcept;
        valueQuantity: SimpleQuantity;
        valueMoney: Money;
        exception?: {
            type: CodeableConcept;
            period?: Period;
        }[];
    }[];
    subrogation?: boolean;
    contract?: Reference[];
}

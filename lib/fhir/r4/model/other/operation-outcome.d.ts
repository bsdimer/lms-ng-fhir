import { DomainResource } from '../domain-resource';
import { CodeableConcept } from '..';
export declare class OperationOutcome extends DomainResource {
    issue: {
        severity: 'fatal' | 'error' | 'warning' | 'information';
        code: string;
        details?: CodeableConcept;
        diagnostics?: string;
        location?: string[];
        expression?: string[];
    }[];
}

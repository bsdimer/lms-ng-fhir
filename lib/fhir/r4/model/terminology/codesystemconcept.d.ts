import { Coding } from './coding';
import { BackboneElement } from './backboneelement';
export declare class CodeSystemConcept extends BackboneElement {
    code: string;
    display?: string;
    definition?: string;
    designation?: {
        language?: string;
        use?: Coding;
        value: string;
    }[];
    property?: {
        code: string;
        valueCode?: string;
        valueCoding?: Coding;
        valueString?: string;
        valueInteger?: number;
        valueBoolean?: boolean;
        valueDateTime?: Date;
        valueDecimal?: number;
    }[];
    concept?: CodeSystemConcept;
}

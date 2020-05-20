import { Coding } from './terminology/coding';
import { BackboneElement } from './terminology/backboneelement';
export declare class ValueSetContains extends BackboneElement {
    system?: string;
    abstract?: boolean;
    inactive?: boolean;
    version?: string;
    code?: string;
    display?: string;
    designation?: {
        language?: string;
        use?: Coding;
        value: string;
    }[];
    contains?: ValueSetContains[];
}

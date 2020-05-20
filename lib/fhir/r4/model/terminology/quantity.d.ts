import { Element } from '../element';
export declare class Quantity extends Element {
    constructor(source?: any);
    value?: number;
    comparator?: '<' | '<=' | '>=' | '>';
    unit?: string;
    system?: string;
    code?: string;
}

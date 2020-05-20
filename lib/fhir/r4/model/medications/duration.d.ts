import { Quantity } from '../terminology/quantity';
export declare class Duration extends Quantity {
    constructor(source?: any);
    value?: number;
    comparator?: '<' | '<=' | '>=' | '>';
    unit?: string;
    system?: string;
    code?: string;
}

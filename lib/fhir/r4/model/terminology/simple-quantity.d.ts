import { Quantity } from './quantity';
export declare class SimpleQuantity extends Quantity {
    constructor(source?: any);
    value?: number;
    unit?: string;
    system?: string;
    code?: string;
}

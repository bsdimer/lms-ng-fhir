import { SimpleQuantity } from './terminology/simple-quantity';
import { Element } from './element';
export declare class Range extends Element {
    constructor(source?: any);
    low?: SimpleQuantity;
    high?: SimpleQuantity;
}

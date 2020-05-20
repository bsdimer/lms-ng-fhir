import { Coding } from './coding';
import { Element } from '../element';
import { CodeableConcept } from './codeableconcept';
import { Reference } from '../reference';
import { Quantity } from './quantity';
import { Range } from '../range';
export declare class UsageContext extends Element {
    code: Coding;
    valueCodeableConcept?: CodeableConcept;
    valueQuantity?: Quantity;
    valueRange?: Range;
    valueReference?: Reference;
}

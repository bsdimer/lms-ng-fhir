import { Coding } from './coding';
import { Element } from '../element';
export declare class CodeableConcept extends Element {
    constructor(source?: any);
    coding?: Coding[];
    text?: string;
}

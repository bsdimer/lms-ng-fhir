import { Element } from './element';
import { Coding } from './terminology/coding';
import { Reference } from './reference';
export declare class Signature extends Element {
    type: Coding[];
    when: Date;
    who: Reference;
    onBehalfOf?: Reference;
    targetFormat?: string;
    sigFormat?: string;
    data?: string;
}

import { Identifier } from './terminology/identifier';
import { Element } from './element';
export declare class Reference extends Element {
    constructor(source?: any);
    reference?: string;
    type?: string;
    identifier?: Identifier;
    display?: string;
}

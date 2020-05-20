import { ContactPoint } from './contactpoint';
import { Element } from '../element';
export declare class ContactDetail extends Element {
    constructor(source?: any);
    name?: string;
    telecom?: ContactPoint[];
}

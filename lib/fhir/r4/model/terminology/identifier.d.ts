import { CodeableConcept } from './codeableconcept';
import { Period } from '../period';
import { Reference } from '../reference';
import { Element } from '../element';
export declare class Identifier extends Element {
    constructor(source?: any);
    use?: string;
    type?: CodeableConcept;
    system?: string;
    value?: string;
    period?: Period;
    assigner?: Reference;
}

import { Element } from '../element';
import { Reference } from '../reference';
export declare class Annotation extends Element {
    constructor(source?: any);
    authorReference?: Reference;
    authorString?: string;
    time?: Date;
    text: string;
}

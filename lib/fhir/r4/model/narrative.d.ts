import { Element } from './element';
export declare class Narrative extends Element {
    status: 'generated' | 'extensions' | 'additional' | 'empty';
    div: string;
}

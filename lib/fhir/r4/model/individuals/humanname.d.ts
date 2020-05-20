import { Element } from '../element';
import { Period } from '../period';
export declare class HumanName extends Element {
    constructor(source?: any);
    use?: 'usual' | 'official' | 'temp' | 'nickname' | 'anonymous' | 'old' | 'maiden';
    text?: string;
    family?: string;
    given?: string[];
    prefix?: string[];
    suffix?: string[];
    period?: Period;
    static getNew(): HumanName;
}

import { Element } from '../element';
import { Period } from '../period';
export declare class ContactPoint extends Element {
    constructor(source?: any);
    system?: 'phone' | 'fax' | 'email' | 'pager' | 'url' | 'sms' | 'other';
    value?: string;
    use?: 'home' | 'work' | 'temp' | 'old' | 'mobile';
    rank?: number;
    period?: Period;
}

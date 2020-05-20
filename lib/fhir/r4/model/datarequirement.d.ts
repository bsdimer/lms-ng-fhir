import { Element } from './element';
import { CodeableConcept } from './terminology/codeableconcept';
import { Reference } from './reference';
import { Coding } from './terminology/coding';
import { Period } from './period';
import { Duration } from './medications/duration';
export declare class DataRequirement extends Element {
    type: string;
    profile?: string[];
    subjectCodeableConcept?: CodeableConcept;
    subjectReference?: Reference;
    mustSupport?: string[];
    codeFilter?: {
        path?: string;
        searchParam?: string;
        valueSet?: string;
        code?: Coding[];
    }[];
    dateFilter?: {
        path?: string;
        searchParam?: string;
        valueDateTime?: Date;
        valuePeriod?: Period;
        valueDuration?: Duration;
    }[];
    limit?: number;
    sort?: {
        path: string;
        direction: 'ascending' | 'descending';
    }[];
}

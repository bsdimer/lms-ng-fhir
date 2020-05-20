import { BackboneElement } from './terminology/backboneelement';
import { Range } from './range';
import { Period } from './period';
import { CodeableConcept } from './terminology/codeableconcept';
export declare class Timing extends BackboneElement {
    constructor(source?: any);
    event?: Date[];
    repeat?: {
        boundsDuration?: Date;
        boundsRange?: Range;
        boundsPeriod?: Period;
        count?: number;
        countMax?: number;
        duration?: number;
        durationMax?: number;
        durationUnit?: 's' | 'min' | 'h' | 'd' | 'wk' | 'mo' | 'a';
        frequency?: number;
        frequencyMax?: number;
        period?: number;
        periodMax?: number;
        periodUnit?: 's' | 'min' | 'h' | 'd' | 'wk' | 'mo' | 'a';
        dayOfWeek?: string[];
        timeOfDay?: Date[];
        when?: string[];
        offset?: number;
    };
    code?: CodeableConcept;
}

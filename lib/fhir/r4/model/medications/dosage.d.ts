import { Timing } from '../timing';
import { Ratio } from '../ratio';
import { BackboneElement } from '../terminology/backboneelement';
import { CodeableConcept } from '../terminology/codeableconcept';
import { SimpleQuantity } from '../terminology/simple-quantity';
export declare class Dosage extends BackboneElement {
    constructor(source?: any);
    sequence?: number;
    text?: string;
    additionalInstruction?: CodeableConcept[];
    patientInstruction?: string;
    timing?: Timing;
    asNeededBoolean?: boolean;
    asNeededCodeableConcept?: CodeableConcept;
    site?: CodeableConcept;
    route?: CodeableConcept;
    method?: CodeableConcept;
    doseAndRate?: {
        type?: CodeableConcept;
        doseRange?: Range;
        doseQuantity?: SimpleQuantity;
        rateRatio?: Ratio;
        rateRange?: Range;
        rateQuantity?: SimpleQuantity;
    }[];
    maxDosePerPeriod?: Ratio;
    maxDosePerAdministration?: SimpleQuantity;
    maxDosePerLifetime?: SimpleQuantity;
}

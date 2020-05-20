import { DomainResource } from '../domain-resource';
import { CodeableConcept, Reference } from '..';
import { SimpleQuantity } from '../terminology/simple-quantity';
import { Ratio } from '../ratio';
import { Money } from '../money';
import { Dosage } from './dosage';
import { Duration } from './duration';
export declare class MedicationKnowledge extends DomainResource {
    resourceType: string;
    code?: CodeableConcept;
    status?: 'active' | 'inactive' | 'entered-in-error';
    manufacturer?: Reference;
    doseForm?: CodeableConcept;
    amount?: SimpleQuantity;
    synonym?: string[];
    relatedMedicationKnowledge?: {
        type: CodeableConcept;
        reference?: Reference;
    }[];
    associatedMedication?: Reference;
    productType?: CodeableConcept;
    monograph?: {
        type?: CodeableConcept;
        source?: Reference;
    }[];
    ingredient?: {
        itemCodeableConcept: CodeableConcept;
        itemReference: Reference;
        isActive?: boolean;
        strength?: Ratio;
    }[];
    preparationInstruction?: string;
    intendedRoute?: CodeableConcept[];
    cost?: {
        type: CodeableConcept;
        source?: string;
        cost: Money;
    }[];
    monitoringProgram?: {
        type?: CodeableConcept;
        name?: string;
    }[];
    administrationGuidelines?: {
        dosage?: {
            type: CodeableConcept;
            dosage: Dosage[];
            indicationCodeableConcept?: CodeableConcept;
            indicationReference?: Reference;
            patientCharacteristics?: {
                characteristicCodeableConcept: CodeableConcept;
                characteristicQuantity: SimpleQuantity;
                value?: string;
            }[];
        }[];
    }[];
    medicineClassification?: {
        type: CodeableConcept;
        classification?: CodeableConcept;
    }[];
    packaging?: {
        type?: CodeableConcept;
        quantity?: SimpleQuantity;
    }[];
    drugCharacteristic?: {
        type?: CodeableConcept;
        valueCodeableConcept?: CodeableConcept;
        valueString?: string;
        valueQuantity?: SimpleQuantity;
        valueBase64Binary?: string;
    }[];
    contraindication?: Reference[];
    regulatory?: {
        regulatoryAuthority: Reference;
        substitution?: {
            type: CodeableConcept;
            allowed: boolean;
        }[];
        schedule?: {
            schedule: CodeableConcept;
        }[];
        maxDispense?: {
            quantity: SimpleQuantity;
            period?: Duration;
        }[];
    }[];
    kinetics?: {
        areaUnderCurve?: SimpleQuantity;
        lethalDose50?: SimpleQuantity;
        halfLifePeriod?: Duration;
    }[];
}

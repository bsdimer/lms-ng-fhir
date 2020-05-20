import { InjectionToken } from '@angular/core';
export declare const FHIR_CONFIG: InjectionToken<FhirConfig>;
export declare class FhirConfig {
    base: string;
    fhircqrs: string;
}

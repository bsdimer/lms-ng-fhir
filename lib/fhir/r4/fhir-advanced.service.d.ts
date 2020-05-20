import { HttpClient } from '@angular/common/http';
import { FhirConfig } from '../fhir-config';
import { FhirService } from './fhir-service';
import { Observable } from 'rxjs';
import { Encounter } from './model/management';
export declare class FhirAdvancedService extends FhirService {
    config: FhirConfig;
    httpClient: HttpClient;
    headers: any;
    fhircqrs: string;
    constructor(config: FhirConfig, httpClient: HttpClient);
    setAuthentication(headers: any): void;
    searchInConcept(part: string, id: string, version?: string): Observable<ConceptDto[]>;
    findActiveEncounterByPatient(patientId: string): Observable<Encounter[]>;
}
export declare class ConceptDto {
    system: string;
    code: string;
    display: string;
    definition: string;
}

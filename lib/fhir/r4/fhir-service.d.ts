import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FhirQueryBuilder } from './query-builder/fhir-query-builder';
import { SearchSet } from './search-set/search-set';
import { CapabilityStatement, OperationOutcome } from './model';
import { FhirConfig } from '../fhir-config';
import { Bundle } from './model';
export declare class FhirService {
    config: FhirConfig;
    httpClient: HttpClient;
    headers: any;
    private conformance;
    constructor(config: FhirConfig, httpClient: HttpClient);
    base: string;
    getConformanceStatement(headers?: any): Observable<CapabilityStatement>;
    read<T>(resourceType: string, id: string, headers?: any): Observable<T>;
    vread<T>(resourceType: string, id: string, v: number, headers?: any): Observable<T>;
    update<T>(resource: any, headers?: any): Observable<T>;
    save<T>(resource: any, headers?: any): Observable<T>;
    patch<T>(resource: any, body: any, headers?: any): Observable<T>;
    delete<T>(resourceType: string, id: string, headers?: any): Observable<OperationOutcome>;
    create<T>(resource: any, headers?: any): Observable<T>;
    searchByQuery(qb: FhirQueryBuilder, headers?: any): Observable<Bundle>;
    searchBySet<T>(ss: SearchSet, headers?: any): Observable<Bundle>;
    searchByUrl<T>(url: string, headers?: any): Observable<T>;
    search_all(): void;
    capabilities(): void;
    transaction(bundle: Bundle, headers?: any): Observable<any>;
    history(): void;
    history_type(): void;
    history_all(): void;
    executeQuery<T>(qb: FhirQueryBuilder): Observable<T>;
    createTransactionBundle(source: any, keys: string[]): Bundle;
    private isIterable;
    private createBundleEntry;
}

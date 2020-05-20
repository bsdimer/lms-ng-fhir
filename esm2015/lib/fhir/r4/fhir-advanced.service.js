/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FHIR_CONFIG, FhirConfig } from '../fhir-config';
import { FhirService } from './fhir-service';
import * as i0 from "@angular/core";
import * as i1 from "../fhir-config";
import * as i2 from "@angular/common/http";
export class FhirAdvancedService extends FhirService {
    /**
     * @param {?} config
     * @param {?} httpClient
     */
    constructor(config, httpClient) {
        super(config, httpClient);
        this.config = config;
        this.httpClient = httpClient;
        this.fhircqrs = config.fhircqrs;
    }
    /**
     * @param {?} headers
     * @return {?}
     */
    setAuthentication(headers) {
        this.headers = headers;
    }
    /**
     * @param {?} part
     * @param {?} id
     * @param {?=} version
     * @return {?}
     */
    searchInConcept(part, id, version) {
        return this.httpClient
            .get(`${this.fhircqrs}/CodeSystem/searchInConcept`, { headers: this.headers, params: { part: part, id: id, version: version } });
    }
    /**
     * @param {?} patientId
     * @return {?}
     */
    findActiveEncounterByPatient(patientId) {
        return this.httpClient
            .get(`${this.fhircqrs}/Encounter/findActiveEncounterByPatient`, { headers: this.headers, params: { patientId: patientId } });
    }
}
FhirAdvancedService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
FhirAdvancedService.ctorParameters = () => [
    { type: FhirConfig, decorators: [{ type: Inject, args: [FHIR_CONFIG,] }] },
    { type: HttpClient }
];
/** @nocollapse */ FhirAdvancedService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FhirAdvancedService_Factory() { return new FhirAdvancedService(i0.ɵɵinject(i1.FHIR_CONFIG), i0.ɵɵinject(i2.HttpClient)); }, token: FhirAdvancedService, providedIn: "root" });
if (false) {
    /** @type {?} */
    FhirAdvancedService.prototype.headers;
    /** @type {?} */
    FhirAdvancedService.prototype.fhircqrs;
    /** @type {?} */
    FhirAdvancedService.prototype.config;
    /** @type {?} */
    FhirAdvancedService.prototype.httpClient;
}
export class ConceptDto {
}
if (false) {
    /** @type {?} */
    ConceptDto.prototype.system;
    /** @type {?} */
    ConceptDto.prototype.code;
    /** @type {?} */
    ConceptDto.prototype.display;
    /** @type {?} */
    ConceptDto.prototype.definition;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhpci1hZHZhbmNlZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9maGlyLWFkdmFuY2VkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQU8zQyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsV0FBVzs7Ozs7SUFLaEQsWUFBd0MsTUFBa0IsRUFBUyxVQUFzQjtRQUNyRixLQUFLLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRFUsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFFckYsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRU0saUJBQWlCLENBQUMsT0FBWTtRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDOzs7Ozs7O0lBRU0sZUFBZSxDQUFDLElBQVksRUFBRSxFQUFVLEVBQUUsT0FBZ0I7UUFDN0QsT0FBTyxJQUFJLENBQUMsVUFBVTthQUNqQixHQUFHLENBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSw2QkFBNkIsRUFDNUQsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxFQUFDLENBQzFFLENBQUM7SUFDVixDQUFDOzs7OztJQUVNLDRCQUE0QixDQUFDLFNBQWlCO1FBQ2pELE9BQU8sSUFBSSxDQUFDLFVBQVU7YUFDakIsR0FBRyxDQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEseUNBQXlDLEVBQ3ZFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxFQUFDLENBQzFELENBQUM7SUFDVixDQUFDOzs7WUE3QkosVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7O1lBUG9CLFVBQVUsdUJBYWQsTUFBTSxTQUFDLFdBQVc7WUFkM0IsVUFBVTs7Ozs7SUFXZCxzQ0FBYTs7SUFDYix1Q0FBaUI7O0lBRUwscUNBQThDOztJQUFFLHlDQUE2Qjs7QUF5QjdGLE1BQU0sT0FBTyxVQUFVO0NBS3RCOzs7SUFKRyw0QkFBZTs7SUFDZiwwQkFBYTs7SUFDYiw2QkFBZ0I7O0lBQ2hCLGdDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtGSElSX0NPTkZJRywgRmhpckNvbmZpZ30gZnJvbSAnLi4vZmhpci1jb25maWcnO1xuaW1wb3J0IHtGaGlyU2VydmljZX0gZnJvbSAnLi9maGlyLXNlcnZpY2UnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7RW5jb3VudGVyfSBmcm9tICcuL21vZGVsL21hbmFnZW1lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBGaGlyQWR2YW5jZWRTZXJ2aWNlIGV4dGVuZHMgRmhpclNlcnZpY2Uge1xuXG4gICAgaGVhZGVyczogYW55O1xuICAgIGZoaXJjcXJzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KEZISVJfQ09ORklHKSBwdWJsaWMgY29uZmlnOiBGaGlyQ29uZmlnLCBwdWJsaWMgaHR0cENsaWVudDogSHR0cENsaWVudCkge1xuICAgICAgICBzdXBlcihjb25maWcsIGh0dHBDbGllbnQpO1xuICAgICAgICB0aGlzLmZoaXJjcXJzID0gY29uZmlnLmZoaXJjcXJzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRBdXRoZW50aWNhdGlvbihoZWFkZXJzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gaGVhZGVycztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VhcmNoSW5Db25jZXB0KHBhcnQ6IHN0cmluZywgaWQ6IHN0cmluZywgdmVyc2lvbj86IHN0cmluZyk6IE9ic2VydmFibGU8Q29uY2VwdER0b1tdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnRcbiAgICAgICAgICAgIC5nZXQ8Q29uY2VwdER0b1tdPihgJHt0aGlzLmZoaXJjcXJzfS9Db2RlU3lzdGVtL3NlYXJjaEluQ29uY2VwdGAsXG4gICAgICAgICAgICAgICAge2hlYWRlcnM6IHRoaXMuaGVhZGVycywgcGFyYW1zOiB7cGFydDogcGFydCwgaWQ6IGlkLCB2ZXJzaW9uOiB2ZXJzaW9ufX0sXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kQWN0aXZlRW5jb3VudGVyQnlQYXRpZW50KHBhdGllbnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxFbmNvdW50ZXJbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50XG4gICAgICAgICAgICAuZ2V0PEVuY291bnRlcltdPihgJHt0aGlzLmZoaXJjcXJzfS9FbmNvdW50ZXIvZmluZEFjdGl2ZUVuY291bnRlckJ5UGF0aWVudGAsXG4gICAgICAgICAgICAgICAge2hlYWRlcnM6IHRoaXMuaGVhZGVycywgcGFyYW1zOiB7cGF0aWVudElkOiBwYXRpZW50SWR9fSxcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBDb25jZXB0RHRvIHtcbiAgICBzeXN0ZW06IHN0cmluZztcbiAgICBjb2RlOiBzdHJpbmc7XG4gICAgZGlzcGxheTogc3RyaW5nO1xuICAgIGRlZmluaXRpb246IHN0cmluZztcbn1cbiJdfQ==
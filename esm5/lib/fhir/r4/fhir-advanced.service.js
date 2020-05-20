/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FHIR_CONFIG, FhirConfig } from '../fhir-config';
import { FhirService } from './fhir-service';
import * as i0 from "@angular/core";
import * as i1 from "../fhir-config";
import * as i2 from "@angular/common/http";
var FhirAdvancedService = /** @class */ (function (_super) {
    tslib_1.__extends(FhirAdvancedService, _super);
    function FhirAdvancedService(config, httpClient) {
        var _this = _super.call(this, config, httpClient) || this;
        _this.config = config;
        _this.httpClient = httpClient;
        _this.fhircqrs = config.fhircqrs;
        return _this;
    }
    /**
     * @param {?} headers
     * @return {?}
     */
    FhirAdvancedService.prototype.setAuthentication = /**
     * @param {?} headers
     * @return {?}
     */
    function (headers) {
        this.headers = headers;
    };
    /**
     * @param {?} part
     * @param {?} id
     * @param {?=} version
     * @return {?}
     */
    FhirAdvancedService.prototype.searchInConcept = /**
     * @param {?} part
     * @param {?} id
     * @param {?=} version
     * @return {?}
     */
    function (part, id, version) {
        return this.httpClient
            .get(this.fhircqrs + "/CodeSystem/searchInConcept", { headers: this.headers, params: { part: part, id: id, version: version } });
    };
    /**
     * @param {?} patientId
     * @return {?}
     */
    FhirAdvancedService.prototype.findActiveEncounterByPatient = /**
     * @param {?} patientId
     * @return {?}
     */
    function (patientId) {
        return this.httpClient
            .get(this.fhircqrs + "/Encounter/findActiveEncounterByPatient", { headers: this.headers, params: { patientId: patientId } });
    };
    FhirAdvancedService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    FhirAdvancedService.ctorParameters = function () { return [
        { type: FhirConfig, decorators: [{ type: Inject, args: [FHIR_CONFIG,] }] },
        { type: HttpClient }
    ]; };
    /** @nocollapse */ FhirAdvancedService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FhirAdvancedService_Factory() { return new FhirAdvancedService(i0.ɵɵinject(i1.FHIR_CONFIG), i0.ɵɵinject(i2.HttpClient)); }, token: FhirAdvancedService, providedIn: "root" });
    return FhirAdvancedService;
}(FhirService));
export { FhirAdvancedService };
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
var ConceptDto = /** @class */ (function () {
    function ConceptDto() {
    }
    return ConceptDto;
}());
export { ConceptDto };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhpci1hZHZhbmNlZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9maGlyLWFkdmFuY2VkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFJM0M7SUFHeUMsK0NBQVc7SUFLaEQsNkJBQXdDLE1BQWtCLEVBQVMsVUFBc0I7UUFBekYsWUFDSSxrQkFBTSxNQUFNLEVBQUUsVUFBVSxDQUFDLFNBRTVCO1FBSHVDLFlBQU0sR0FBTixNQUFNLENBQVk7UUFBUyxnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUVyRixLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7O0lBQ3BDLENBQUM7Ozs7O0lBRU0sK0NBQWlCOzs7O0lBQXhCLFVBQXlCLE9BQVk7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQzs7Ozs7OztJQUVNLDZDQUFlOzs7Ozs7SUFBdEIsVUFBdUIsSUFBWSxFQUFFLEVBQVUsRUFBRSxPQUFnQjtRQUM3RCxPQUFPLElBQUksQ0FBQyxVQUFVO2FBQ2pCLEdBQUcsQ0FBa0IsSUFBSSxDQUFDLFFBQVEsZ0NBQTZCLEVBQzVELEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUMsRUFBQyxDQUMxRSxDQUFDO0lBQ1YsQ0FBQzs7Ozs7SUFFTSwwREFBNEI7Ozs7SUFBbkMsVUFBb0MsU0FBaUI7UUFDakQsT0FBTyxJQUFJLENBQUMsVUFBVTthQUNqQixHQUFHLENBQWlCLElBQUksQ0FBQyxRQUFRLDRDQUF5QyxFQUN2RSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsRUFBQyxDQUMxRCxDQUFDO0lBQ1YsQ0FBQzs7Z0JBN0JKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7Ozs7Z0JBUG9CLFVBQVUsdUJBYWQsTUFBTSxTQUFDLFdBQVc7Z0JBZDNCLFVBQVU7Ozs4QkFEbEI7Q0FzQ0MsQUEvQkQsQ0FHeUMsV0FBVyxHQTRCbkQ7U0E1QlksbUJBQW1COzs7SUFFNUIsc0NBQWE7O0lBQ2IsdUNBQWlCOztJQUVMLHFDQUE4Qzs7SUFBRSx5Q0FBNkI7O0FBeUI3RjtJQUFBO0lBS0EsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7Ozs7SUFKRyw0QkFBZTs7SUFDZiwwQkFBYTs7SUFDYiw2QkFBZ0I7O0lBQ2hCLGdDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtGSElSX0NPTkZJRywgRmhpckNvbmZpZ30gZnJvbSAnLi4vZmhpci1jb25maWcnO1xuaW1wb3J0IHtGaGlyU2VydmljZX0gZnJvbSAnLi9maGlyLXNlcnZpY2UnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7RW5jb3VudGVyfSBmcm9tICcuL21vZGVsL21hbmFnZW1lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBGaGlyQWR2YW5jZWRTZXJ2aWNlIGV4dGVuZHMgRmhpclNlcnZpY2Uge1xuXG4gICAgaGVhZGVyczogYW55O1xuICAgIGZoaXJjcXJzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KEZISVJfQ09ORklHKSBwdWJsaWMgY29uZmlnOiBGaGlyQ29uZmlnLCBwdWJsaWMgaHR0cENsaWVudDogSHR0cENsaWVudCkge1xuICAgICAgICBzdXBlcihjb25maWcsIGh0dHBDbGllbnQpO1xuICAgICAgICB0aGlzLmZoaXJjcXJzID0gY29uZmlnLmZoaXJjcXJzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRBdXRoZW50aWNhdGlvbihoZWFkZXJzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gaGVhZGVycztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VhcmNoSW5Db25jZXB0KHBhcnQ6IHN0cmluZywgaWQ6IHN0cmluZywgdmVyc2lvbj86IHN0cmluZyk6IE9ic2VydmFibGU8Q29uY2VwdER0b1tdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnRcbiAgICAgICAgICAgIC5nZXQ8Q29uY2VwdER0b1tdPihgJHt0aGlzLmZoaXJjcXJzfS9Db2RlU3lzdGVtL3NlYXJjaEluQ29uY2VwdGAsXG4gICAgICAgICAgICAgICAge2hlYWRlcnM6IHRoaXMuaGVhZGVycywgcGFyYW1zOiB7cGFydDogcGFydCwgaWQ6IGlkLCB2ZXJzaW9uOiB2ZXJzaW9ufX0sXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kQWN0aXZlRW5jb3VudGVyQnlQYXRpZW50KHBhdGllbnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxFbmNvdW50ZXJbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50XG4gICAgICAgICAgICAuZ2V0PEVuY291bnRlcltdPihgJHt0aGlzLmZoaXJjcXJzfS9FbmNvdW50ZXIvZmluZEFjdGl2ZUVuY291bnRlckJ5UGF0aWVudGAsXG4gICAgICAgICAgICAgICAge2hlYWRlcnM6IHRoaXMuaGVhZGVycywgcGFyYW1zOiB7cGF0aWVudElkOiBwYXRpZW50SWR9fSxcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBDb25jZXB0RHRvIHtcbiAgICBzeXN0ZW06IHN0cmluZztcbiAgICBjb2RlOiBzdHJpbmc7XG4gICAgZGlzcGxheTogc3RyaW5nO1xuICAgIGRlZmluaXRpb246IHN0cmluZztcbn1cbiJdfQ==
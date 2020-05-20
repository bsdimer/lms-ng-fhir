/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FHIR_CONFIG, FhirConfig } from '../fhir-config';
import { tap } from 'rxjs/operators';
import { Bundle } from './model';
import { merge } from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "../fhir-config";
import * as i2 from "@angular/common/http";
var FhirService = /** @class */ (function () {
    function FhirService(config, httpClient) {
        this.config = config;
        this.httpClient = httpClient;
    }
    Object.defineProperty(FhirService.prototype, "base", {
        set: /**
         * @param {?} base
         * @return {?}
         */
        function (base) {
            this.config.base = base;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.getConformanceStatement = /**
     * @param {?=} headers
     * @return {?}
     */
    function (headers) {
        var _this = this;
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        if (this.conformance)
            return of(this.conformance);
        return this.httpClient.get(this.config.base + "/metadata", { headers: mergedHeaders }).pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.conformance = result; })));
    };
    /**
     * @template T
     * @param {?} resourceType
     * @param {?} id
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.read = /**
     * @template T
     * @param {?} resourceType
     * @param {?} id
     * @param {?=} headers
     * @return {?}
     */
    function (resourceType, id, headers) {
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.get(this.config.base + "/" + resourceType + "/" + id, { headers: mergedHeaders });
    };
    /**
     * @template T
     * @param {?} resourceType
     * @param {?} id
     * @param {?} v
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.vread = /**
     * @template T
     * @param {?} resourceType
     * @param {?} id
     * @param {?} v
     * @param {?=} headers
     * @return {?}
     */
    function (resourceType, id, v, headers) {
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.get(this.config.base + "/" + resourceType + "/" + id + "/_history/" + v, { headers: mergedHeaders });
    };
    /**
     * @template T
     * @param {?} resource
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.update = /**
     * @template T
     * @param {?} resource
     * @param {?=} headers
     * @return {?}
     */
    function (resource, headers) {
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.put(this.config.base + "/" + resource.resourceType + "/" + resource.id, resource, { headers: mergedHeaders });
    };
    /**
     * @template T
     * @param {?} resource
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.save = /**
     * @template T
     * @param {?} resource
     * @param {?=} headers
     * @return {?}
     */
    function (resource, headers) {
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        /** @type {?} */
        var resourceType = resource.resourceType;
        if (resource.hasOwnProperty('id')) {
            return this.update(resource, headers);
        }
        else {
            return this.create(resource, headers);
        }
    };
    /**
     * @template T
     * @param {?} resource
     * @param {?} body
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.patch = /**
     * @template T
     * @param {?} resource
     * @param {?} body
     * @param {?=} headers
     * @return {?}
     */
    function (resource, body, headers) {
        /** @type {?} */
        var headersToAttach = {};
        merge(headersToAttach, this.headers);
        headersToAttach['Content-Type'] = 'application/json-patch+json';
        return this.httpClient.patch(this.config.base + "/" + resource.resourceType + "/" + resource.id, body, { headers: headersToAttach });
    };
    /**
     * @template T
     * @param {?} resourceType
     * @param {?} id
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.delete = /**
     * @template T
     * @param {?} resourceType
     * @param {?} id
     * @param {?=} headers
     * @return {?}
     */
    function (resourceType, id, headers) {
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.delete(this.config.base + "/" + resourceType + "/" + id, { headers: mergedHeaders });
    };
    /**
     * @template T
     * @param {?} resource
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.create = /**
     * @template T
     * @param {?} resource
     * @param {?=} headers
     * @return {?}
     */
    function (resource, headers) {
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.post(this.config.base + "/" + resource.resourceType, resource, { headers: mergedHeaders });
    };
    // ToDo:
    // ToDo:
    /**
     * @param {?} qb
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.searchByQuery = 
    // ToDo:
    /**
     * @param {?} qb
     * @param {?=} headers
     * @return {?}
     */
    function (qb, headers) {
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.get(this.config.base + "/" + qb.resourceName, {
            params: qb.paramsAsHttpParams(),
            headers: mergedHeaders
        });
    };
    /**
     * @template T
     * @param {?} ss
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.searchBySet = /**
     * @template T
     * @param {?} ss
     * @param {?=} headers
     * @return {?}
     */
    function (ss, headers) {
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.get(this.config.base + "/" + ss.resourceName + "?_sort=-_id", {
            params: ss.paramsAsObject(),
            headers: mergedHeaders,
        });
    };
    /**
     * @template T
     * @param {?} url
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.searchByUrl = /**
     * @template T
     * @param {?} url
     * @param {?=} headers
     * @return {?}
     */
    function (url, headers) {
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.get(url, { headers: mergedHeaders });
    };
    /**
     * @return {?}
     */
    FhirService.prototype.search_all = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FhirService.prototype.capabilities = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} bundle
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.transaction = /**
     * @param {?} bundle
     * @param {?=} headers
     * @return {?}
     */
    function (bundle, headers) {
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.post(this.config.base, bundle, {
            headers: mergedHeaders
        });
    };
    /**
     * @return {?}
     */
    FhirService.prototype.history = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FhirService.prototype.history_type = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FhirService.prototype.history_all = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @template T
     * @param {?} qb
     * @return {?}
     */
    FhirService.prototype.executeQuery = /**
     * @template T
     * @param {?} qb
     * @return {?}
     */
    function (qb) {
        return this.httpClient.get(qb.query, { headers: this.headers });
    };
    /**
     * @param {?} source
     * @param {?} keys
     * @return {?}
     */
    FhirService.prototype.createTransactionBundle = /**
     * @param {?} source
     * @param {?} keys
     * @return {?}
     */
    function (source, keys) {
        var _this = this;
        /** @type {?} */
        var bundle = new Bundle();
        bundle.type = 'transaction';
        bundle.resourceType = 'Bundle';
        bundle.entry = [];
        keys.filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return source.hasOwnProperty(key); }))
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            var e_1, _a;
            /** @type {?} */
            var v = source[key];
            if (_this.isIterable(v)) {
                try {
                    for (var v_1 = tslib_1.__values(v), v_1_1 = v_1.next(); !v_1_1.done; v_1_1 = v_1.next()) {
                        var e = v_1_1.value;
                        bundle.entry.push(_this.createBundleEntry(e));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (v_1_1 && !v_1_1.done && (_a = v_1.return)) _a.call(v_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                bundle.entry.push(_this.createBundleEntry(v));
            }
        }));
        return bundle;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    FhirService.prototype.isIterable = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== null && Symbol.iterator in Object(value);
    };
    /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    FhirService.prototype.createBundleEntry = /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        return {
            fullUrl: "urn:uuid:" + entry.uuid,
            resource: entry,
            request: {
                url: !entry.id ? entry.resourceType : entry.resourceType + "/" + entry.id,
                method: entry.id ? 'PUT' : 'POST',
            },
        };
    };
    FhirService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    FhirService.ctorParameters = function () { return [
        { type: FhirConfig, decorators: [{ type: Inject, args: [FHIR_CONFIG,] }] },
        { type: HttpClient }
    ]; };
    /** @nocollapse */ FhirService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FhirService_Factory() { return new FhirService(i0.ɵɵinject(i1.FHIR_CONFIG), i0.ɵɵinject(i2.HttpClient)); }, token: FhirService, providedIn: "root" });
    return FhirService;
}());
export { FhirService };
if (false) {
    /** @type {?} */
    FhirService.prototype.headers;
    /**
     * @type {?}
     * @private
     */
    FhirService.prototype.conformance;
    /** @type {?} */
    FhirService.prototype.config;
    /** @type {?} */
    FhirService.prototype.httpClient;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhpci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9maGlyLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQWEsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUloRCxPQUFPLEVBQUMsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQy9CLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxRQUFRLENBQUM7Ozs7QUFFN0I7SUFPSSxxQkFBd0MsTUFBa0IsRUFBUyxVQUFzQjtRQUFqRCxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUN6RixDQUFDO0lBRUQsc0JBQUksNkJBQUk7Ozs7O1FBQVIsVUFBUyxJQUFZO1lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUM1QixDQUFDOzs7T0FBQTs7Ozs7SUFFRCw2Q0FBdUI7Ozs7SUFBdkIsVUFBd0IsT0FBUTtRQUFoQyxpQkFNQzs7WUFMUyxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztRQUMxRCxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQXlCLElBQUksQ0FBQyxNQUFNLENBQUMs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USxFQUFFLEtBQUs7WUFDZixPQUFPLEVBQUU7Z0JBQ0wsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUksS0FBSyxDQUFDLFlBQVksU0FBSSxLQUFLLENBQUMsRUFBSTtnQkFDekUsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTTthQUNwQztTQUNKLENBQUM7SUFDTixDQUFDOztnQkF0SkosVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7OztnQkFQb0IsVUFBVSx1QkFZZCxNQUFNLFNBQUMsV0FBVztnQkFoQjNCLFVBQVU7OztzQkFGbEI7Q0FpTEMsQUF0S0QsSUFzS0M7U0FuS1ksV0FBVzs7O0lBQ3BCLDhCQUFlOzs7OztJQUNmLGtDQUF5Qzs7SUFFN0IsNkJBQThDOztJQUFFLGlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0ZoaXJRdWVyeUJ1aWxkZXJ9IGZyb20gJy4vcXVlcnktYnVpbGRlci9maGlyLXF1ZXJ5LWJ1aWxkZXInO1xuaW1wb3J0IHtTZWFyY2hTZXR9IGZyb20gJy4vc2VhcmNoLXNldC9zZWFyY2gtc2V0JztcbmltcG9ydCB7QnVuZGxlRW50cnksIENhcGFiaWxpdHlTdGF0ZW1lbnQsIE9wZXJhdGlvbk91dGNvbWV9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHtGSElSX0NPTkZJRywgRmhpckNvbmZpZ30gZnJvbSAnLi4vZmhpci1jb25maWcnO1xuaW1wb3J0IHt0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QnVuZGxlfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7bWVyZ2V9IGZyb20gJ2xvZGFzaCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEZoaXJTZXJ2aWNlIHtcbiAgICBwdWJsaWMgaGVhZGVycztcbiAgICBwcml2YXRlIGNvbmZvcm1hbmNlOiBDYXBhYmlsaXR5U3RhdGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChGSElSX0NPTkZJRykgcHVibGljIGNvbmZpZzogRmhpckNvbmZpZywgcHVibGljIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHtcbiAgICB9XG5cbiAgICBzZXQgYmFzZShiYXNlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb25maWcuYmFzZSA9IGJhc2U7XG4gICAgfVxuXG4gICAgZ2V0Q29uZm9ybWFuY2VTdGF0ZW1lbnQoaGVhZGVycz8pOiBPYnNlcnZhYmxlPENhcGFiaWxpdHlTdGF0ZW1lbnQ+IHtcbiAgICAgICAgY29uc3QgbWVyZ2VkSGVhZGVycyA9IE9iamVjdC5hc3NpZ24odGhpcy5oZWFkZXJzLCBoZWFkZXJzKTtcbiAgICAgICAgaWYgKHRoaXMuY29uZm9ybWFuY2UpIHJldHVybiBvZih0aGlzLmNvbmZvcm1hbmNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8Q2FwYWJpbGl0eVN0YXRlbWVudD4oYCR7dGhpcy5jb25maWcuYmFzZX0vbWV0YWRhdGFgLCB7aGVhZGVyczogbWVyZ2VkSGVhZGVyc30pLnBpcGUoXG4gICAgICAgICAgICB0YXAocmVzdWx0ID0+IHRoaXMuY29uZm9ybWFuY2UgPSByZXN1bHQpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWFkPFQ+KHJlc291cmNlVHlwZTogc3RyaW5nLCBpZDogc3RyaW5nLCBoZWFkZXJzPyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBtZXJnZWRIZWFkZXJzID0gT2JqZWN0LmFzc2lnbih0aGlzLmhlYWRlcnMsIGhlYWRlcnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxUPihgJHt0aGlzLmNvbmZpZy5iYXNlfS8ke3Jlc291cmNlVHlwZX0vJHtpZH1gLCB7aGVhZGVyczogbWVyZ2VkSGVhZGVyc30pO1xuICAgIH1cblxuICAgIHB1YmxpYyB2cmVhZDxUPihyZXNvdXJjZVR5cGU6IHN0cmluZywgaWQ6IHN0cmluZywgdjogbnVtYmVyLCBoZWFkZXJzPyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBtZXJnZWRIZWFkZXJzID0gT2JqZWN0LmFzc2lnbih0aGlzLmhlYWRlcnMsIGhlYWRlcnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxUPihgJHt0aGlzLmNvbmZpZy5iYXNlfS8ke3Jlc291cmNlVHlwZX0vJHtpZH0vX2hpc3RvcnkvJHt2fWAsIHtoZWFkZXJzOiBtZXJnZWRIZWFkZXJzfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZTxUPihyZXNvdXJjZTogYW55LCBoZWFkZXJzPyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBtZXJnZWRIZWFkZXJzID0gT2JqZWN0LmFzc2lnbih0aGlzLmhlYWRlcnMsIGhlYWRlcnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnB1dDxUPihgJHt0aGlzLmNvbmZpZy5iYXNlfS8ke3Jlc291cmNlLnJlc291cmNlVHlwZX0vJHtyZXNvdXJjZS5pZH1gLCByZXNvdXJjZSwge2hlYWRlcnM6IG1lcmdlZEhlYWRlcnN9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2F2ZTxUPihyZXNvdXJjZTogYW55LCBoZWFkZXJzPyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBtZXJnZWRIZWFkZXJzID0gT2JqZWN0LmFzc2lnbih0aGlzLmhlYWRlcnMsIGhlYWRlcnMpO1xuICAgICAgICBjb25zdCByZXNvdXJjZVR5cGUgPSByZXNvdXJjZS5yZXNvdXJjZVR5cGU7XG4gICAgICAgIGlmIChyZXNvdXJjZS5oYXNPd25Qcm9wZXJ0eSgnaWQnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKHJlc291cmNlLCBoZWFkZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyZXNvdXJjZSwgaGVhZGVycyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcGF0Y2g8VD4ocmVzb3VyY2U6IGFueSwgYm9keTogYW55LCBoZWFkZXJzPyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBoZWFkZXJzVG9BdHRhY2ggPSB7fTtcbiAgICAgICAgbWVyZ2UoaGVhZGVyc1RvQXR0YWNoLCB0aGlzLmhlYWRlcnMpO1xuICAgICAgICBoZWFkZXJzVG9BdHRhY2hbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24tcGF0Y2granNvbic7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucGF0Y2g8VD4oYCR7dGhpcy5jb25maWcuYmFzZX0vJHtyZXNvdXJjZS5yZXNvdXJjZVR5cGV9LyR7cmVzb3VyY2UuaWR9YCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnNUb0F0dGFjaH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGU8VD4ocmVzb3VyY2VUeXBlOiBzdHJpbmcsIGlkOiBzdHJpbmcsIGhlYWRlcnM/KTogT2JzZXJ2YWJsZTxPcGVyYXRpb25PdXRjb21lPiB7XG4gICAgICAgIGNvbnN0IG1lcmdlZEhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHRoaXMuaGVhZGVycywgaGVhZGVycyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZGVsZXRlPE9wZXJhdGlvbk91dGNvbWU+KGAke3RoaXMuY29uZmlnLmJhc2V9LyR7cmVzb3VyY2VUeXBlfS8ke2lkfWAsIHtoZWFkZXJzOiBtZXJnZWRIZWFkZXJzfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZTxUPihyZXNvdXJjZTogYW55LCBoZWFkZXJzPyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBtZXJnZWRIZWFkZXJzID0gT2JqZWN0LmFzc2lnbih0aGlzLmhlYWRlcnMsIGhlYWRlcnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8VD4oYCR7dGhpcy5jb25maWcuYmFzZX0vJHtyZXNvdXJjZS5yZXNvdXJjZVR5cGV9YCwgcmVzb3VyY2UsIHtoZWFkZXJzOiBtZXJnZWRIZWFkZXJzfSk7XG4gICAgfVxuXG4gICAgLy8gVG9EbzpcbiAgICBwdWJsaWMgc2VhcmNoQnlRdWVyeShxYjogRmhpclF1ZXJ5QnVpbGRlciwgaGVhZGVycz8pOiBPYnNlcnZhYmxlPEJ1bmRsZT4ge1xuICAgICAgICBjb25zdCBtZXJnZWRIZWFkZXJzID0gT2JqZWN0LmFzc2lnbih0aGlzLmhlYWRlcnMsIGhlYWRlcnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxCdW5kbGU+KGAke3RoaXMuY29uZmlnLmJhc2V9LyR7cWIucmVzb3VyY2VOYW1lfWAsIHtcbiAgICAgICAgICAgIHBhcmFtczogcWIucGFyYW1zQXNIdHRwUGFyYW1zKCksXG4gICAgICAgICAgICBoZWFkZXJzOiBtZXJnZWRIZWFkZXJzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWFyY2hCeVNldDxUPihzczogU2VhcmNoU2V0LCBoZWFkZXJzPyk6IE9ic2VydmFibGU8QnVuZGxlPiB7XG4gICAgICAgIGNvbnN0IG1lcmdlZEhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHRoaXMuaGVhZGVycywgaGVhZGVycyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PEJ1bmRsZT4oYCR7dGhpcy5jb25maWcuYmFzZX0vJHtzcy5yZXNvdXJjZU5hbWV9P19zb3J0PS1faWRgLCB7XG4gICAgICAgICAgICBwYXJhbXM6IHNzLnBhcmFtc0FzT2JqZWN0KCksXG4gICAgICAgICAgICBoZWFkZXJzOiBtZXJnZWRIZWFkZXJzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VhcmNoQnlVcmw8VD4odXJsOiBzdHJpbmcsIGhlYWRlcnM/KTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgICAgIGNvbnN0IG1lcmdlZEhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHRoaXMuaGVhZGVycywgaGVhZGVycyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PFQ+KHVybCwge2hlYWRlcnM6IG1lcmdlZEhlYWRlcnN9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VhcmNoX2FsbCgpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBjYXBhYmlsaXRpZXMoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnNhY3Rpb24oYnVuZGxlOiBCdW5kbGUsIGhlYWRlcnM/KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgY29uc3QgbWVyZ2VkSGVhZGVycyA9IE9iamVjdC5hc3NpZ24odGhpcy5oZWFkZXJzLCBoZWFkZXJzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KHRoaXMuY29uZmlnLmJhc2UsIGJ1bmRsZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBtZXJnZWRIZWFkZXJzXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlzdG9yeSgpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBoaXN0b3J5X3R5cGUoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgaGlzdG9yeV9hbGwoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZXhlY3V0ZVF1ZXJ5PFQ+KHFiOiBGaGlyUXVlcnlCdWlsZGVyKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PFQ+KHFiLnF1ZXJ5LCB7aGVhZGVyczogdGhpcy5oZWFkZXJzfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZVRyYW5zYWN0aW9uQnVuZGxlKHNvdXJjZTogYW55LCBrZXlzOiBzdHJpbmdbXSk6IEJ1bmRsZSB7XG4gICAgICAgIGNvbnN0IGJ1bmRsZTogQnVuZGxlID0gbmV3IEJ1bmRsZSgpO1xuICAgICAgICBidW5kbGUudHlwZSA9ICd0cmFuc2FjdGlvbic7XG4gICAgICAgIGJ1bmRsZS5yZXNvdXJjZVR5cGUgPSAnQnVuZGxlJztcbiAgICAgICAgYnVuZGxlLmVudHJ5ID0gW107XG4gICAgICAgIGtleXMuZmlsdGVyKGtleSA9PiBzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgIC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gc291cmNlW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNJdGVyYWJsZSh2KSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGUgb2Ygdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVuZGxlLmVudHJ5LnB1c2godGhpcy5jcmVhdGVCdW5kbGVFbnRyeShlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBidW5kbGUuZW50cnkucHVzaCh0aGlzLmNyZWF0ZUJ1bmRsZUVudHJ5KHYpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGJ1bmRsZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzSXRlcmFibGUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QodmFsdWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQnVuZGxlRW50cnkoZW50cnkpOiBCdW5kbGVFbnRyeSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmdWxsVXJsOiBgdXJuOnV1aWQ6JHtlbnRyeS51dWlkfWAsXG4gICAgICAgICAgICByZXNvdXJjZTogZW50cnksXG4gICAgICAgICAgICByZXF1ZXN0OiB7XG4gICAgICAgICAgICAgICAgdXJsOiAhZW50cnkuaWQgPyBlbnRyeS5yZXNvdXJjZVR5cGUgOiBgJHtlbnRyeS5yZXNvdXJjZVR5cGV9LyR7ZW50cnkuaWR9YCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IGVudHJ5LmlkID8gJ1BVVCcgOiAnUE9TVCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qZ2VuZXJhdGVDb2RlYWJsZUNvbmNlcHQoY29kZTogc3RyaW5nLCBzeXN0ZW0/OiBzdHJpbmcsIGRpc3BsYXk/OiBzdHJpbmcpOiBDb2RlYWJsZUNvbmNlcHQge1xuICAgICAgICBjb25zdCBjb2RlYWJsZUNvbmNlcHQ6IENvZGVhYmxlQ29uY2VwdCA9IG5ldyBDb2RlYWJsZUNvbmNlcHQoKTtcbiAgICAgICAgY29kZWFibGVDb25jZXB0LmNvZGluZyA9IFt7Y29kZTogY29kZX1dO1xuICAgICAgICBpZiAoc3lzdGVtKSBjb2RlYWJsZUNvbmNlcHQuY29kaW5nWzBdLnN5c3RlbSA9IHN5c3RlbTtcbiAgICAgICAgaWYgKGRpc3BsYXkpIGNvZGVhYmxlQ29uY2VwdC5jb2RpbmdbMF0uZGlzcGxheSA9IGRpc3BsYXk7XG4gICAgICAgIHJldHVybiBjb2RlYWJsZUNvbmNlcHQ7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVJZGVudGlmaWVyKCk6IElkZW50aWZpZXIge1xuICAgICAgICBjb25zdCBpZGVudGlmaWVyOiBJZGVudGlmaWVyID0gbmV3IElkZW50aWZpZXIoKTtcbiAgICAgICAgaWRlbnRpZmllci5zeXN0ZW0gPSBGaGlyU2VydmljZS5JZGVudGlmaWVyU3lzdGVtO1xuICAgICAgICBpZGVudGlmaWVyLnZhbHVlID0gVVVJRC5VVUlEKCk7XG4gICAgICAgIHJldHVybiBpZGVudGlmaWVyO1xuICAgIH0qL1xufVxuXG4iXX0=
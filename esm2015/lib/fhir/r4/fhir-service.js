/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class FhirService {
    /**
     * @param {?} config
     * @param {?} httpClient
     */
    constructor(config, httpClient) {
        this.config = config;
        this.httpClient = httpClient;
    }
    /**
     * @param {?} base
     * @return {?}
     */
    set base(base) {
        this.config.base = base;
    }
    /**
     * @param {?=} headers
     * @return {?}
     */
    getConformanceStatement(headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        if (this.conformance)
            return of(this.conformance);
        return this.httpClient.get(`${this.config.base}/metadata`, { headers: mergedHeaders }).pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        result => this.conformance = result)));
    }
    /**
     * @template T
     * @param {?} resourceType
     * @param {?} id
     * @param {?=} headers
     * @return {?}
     */
    read(resourceType, id, headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.get(`${this.config.base}/${resourceType}/${id}`, { headers: mergedHeaders });
    }
    /**
     * @template T
     * @param {?} resourceType
     * @param {?} id
     * @param {?} v
     * @param {?=} headers
     * @return {?}
     */
    vread(resourceType, id, v, headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.get(`${this.config.base}/${resourceType}/${id}/_history/${v}`, { headers: mergedHeaders });
    }
    /**
     * @template T
     * @param {?} resource
     * @param {?=} headers
     * @return {?}
     */
    update(resource, headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.put(`${this.config.base}/${resource.resourceType}/${resource.id}`, resource, { headers: mergedHeaders });
    }
    /**
     * @template T
     * @param {?} resource
     * @param {?=} headers
     * @return {?}
     */
    save(resource, headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        /** @type {?} */
        const resourceType = resource.resourceType;
        if (resource.hasOwnProperty('id')) {
            return this.update(resource, headers);
        }
        else {
            return this.create(resource, headers);
        }
    }
    /**
     * @template T
     * @param {?} resource
     * @param {?} body
     * @param {?=} headers
     * @return {?}
     */
    patch(resource, body, headers) {
        /** @type {?} */
        const headersToAttach = {};
        merge(headersToAttach, this.headers);
        headersToAttach['Content-Type'] = 'application/json-patch+json';
        return this.httpClient.patch(`${this.config.base}/${resource.resourceType}/${resource.id}`, body, { headers: headersToAttach });
    }
    /**
     * @template T
     * @param {?} resourceType
     * @param {?} id
     * @param {?=} headers
     * @return {?}
     */
    delete(resourceType, id, headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.delete(`${this.config.base}/${resourceType}/${id}`, { headers: mergedHeaders });
    }
    /**
     * @template T
     * @param {?} resource
     * @param {?=} headers
     * @return {?}
     */
    create(resource, headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.post(`${this.config.base}/${resource.resourceType}`, resource, { headers: mergedHeaders });
    }
    // ToDo:
    /**
     * @param {?} qb
     * @param {?=} headers
     * @return {?}
     */
    searchByQuery(qb, headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.get(`${this.config.base}/${qb.resourceName}`, {
            params: qb.paramsAsHttpParams(),
            headers: mergedHeaders
        });
    }
    /**
     * @template T
     * @param {?} ss
     * @param {?=} headers
     * @return {?}
     */
    searchBySet(ss, headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.get(`${this.config.base}/${ss.resourceName}?_sort=-_id`, {
            params: ss.paramsAsObject(),
            headers: mergedHeaders,
        });
    }
    /**
     * @template T
     * @param {?} url
     * @param {?=} headers
     * @return {?}
     */
    searchByUrl(url, headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.get(url, { headers: mergedHeaders });
    }
    /**
     * @return {?}
     */
    search_all() {
    }
    /**
     * @return {?}
     */
    capabilities() {
    }
    /**
     * @param {?} bundle
     * @param {?=} headers
     * @return {?}
     */
    transaction(bundle, headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.post(this.config.base, bundle, {
            headers: mergedHeaders
        });
    }
    /**
     * @return {?}
     */
    history() {
    }
    /**
     * @return {?}
     */
    history_type() {
    }
    /**
     * @return {?}
     */
    history_all() {
    }
    /**
     * @template T
     * @param {?} qb
     * @return {?}
     */
    executeQuery(qb) {
        return this.httpClient.get(qb.query, { headers: this.headers });
    }
    /**
     * @param {?} source
     * @param {?} keys
     * @return {?}
     */
    createTransactionBundle(source, keys) {
        /** @type {?} */
        const bundle = new Bundle();
        bundle.type = 'transaction';
        bundle.resourceType = 'Bundle';
        bundle.entry = [];
        keys.filter((/**
         * @param {?} key
         * @return {?}
         */
        key => source.hasOwnProperty(key)))
            .map((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            /** @type {?} */
            const v = source[key];
            if (this.isIterable(v)) {
                for (const e of v) {
                    bundle.entry.push(this.createBundleEntry(e));
                }
            }
            else {
                bundle.entry.push(this.createBundleEntry(v));
            }
        }));
        return bundle;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isIterable(value) {
        return value !== null && Symbol.iterator in Object(value);
    }
    /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    createBundleEntry(entry) {
        return {
            fullUrl: `urn:uuid:${entry.uuid}`,
            resource: entry,
            request: {
                url: !entry.id ? entry.resourceType : `${entry.resourceType}/${entry.id}`,
                method: entry.id ? 'PUT' : 'POST',
            },
        };
    }
}
FhirService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
FhirService.ctorParameters = () => [
    { type: FhirConfig, decorators: [{ type: Inject, args: [FHIR_CONFIG,] }] },
    { type: HttpClient }
];
/** @nocollapse */ FhirService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FhirService_Factory() { return new FhirService(i0.ɵɵinject(i1.FHIR_CONFIG), i0.ɵɵinject(i2.HttpClient)); }, token: FhirService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhpci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9maGlyLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBYSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBSWhELE9BQU8sRUFBQyxXQUFXLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25DLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDL0IsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLFFBQVEsQ0FBQzs7OztBQUs3QixNQUFNLE9BQU8sV0FBVzs7Ozs7SUFJcEIsWUFBd0MsTUFBa0IsRUFBUyxVQUFzQjtRQUFqRCxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUN6RixDQUFDOzs7OztJQUVELElBQUksSUFBSSxDQUFDLElBQVk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsdUJBQXVCLENBQUMsT0FBUTs7Y0FDdEIsYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7UUFDMUQsSUFBSSxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFzQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxXQUFXLEVB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Q0FBQzs7O1lBdEpKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7OztZQVBvQixVQUFVLHVCQVlkLE1BQU0sU0FBQyxXQUFXO1lBaEIzQixVQUFVOzs7OztJQWFkLDhCQUFlOzs7OztJQUNmLGtDQUF5Qzs7SUFFN0IsNkJBQThDOztJQUFFLGlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0ZoaXJRdWVyeUJ1aWxkZXJ9IGZyb20gJy4vcXVlcnktYnVpbGRlci9maGlyLXF1ZXJ5LWJ1aWxkZXInO1xuaW1wb3J0IHtTZWFyY2hTZXR9IGZyb20gJy4vc2VhcmNoLXNldC9zZWFyY2gtc2V0JztcbmltcG9ydCB7QnVuZGxlRW50cnksIENhcGFiaWxpdHlTdGF0ZW1lbnQsIE9wZXJhdGlvbk91dGNvbWV9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHtGSElSX0NPTkZJRywgRmhpckNvbmZpZ30gZnJvbSAnLi4vZmhpci1jb25maWcnO1xuaW1wb3J0IHt0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QnVuZGxlfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7bWVyZ2V9IGZyb20gJ2xvZGFzaCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEZoaXJTZXJ2aWNlIHtcbiAgICBwdWJsaWMgaGVhZGVycztcbiAgICBwcml2YXRlIGNvbmZvcm1hbmNlOiBDYXBhYmlsaXR5U3RhdGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChGSElSX0NPTkZJRykgcHVibGljIGNvbmZpZzogRmhpckNvbmZpZywgcHVibGljIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHtcbiAgICB9XG5cbiAgICBzZXQgYmFzZShiYXNlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb25maWcuYmFzZSA9IGJhc2U7XG4gICAgfVxuXG4gICAgZ2V0Q29uZm9ybWFuY2VTdGF0ZW1lbnQoaGVhZGVycz8pOiBPYnNlcnZhYmxlPENhcGFiaWxpdHlTdGF0ZW1lbnQ+IHtcbiAgICAgICAgY29uc3QgbWVyZ2VkSGVhZGVycyA9IE9iamVjdC5hc3NpZ24odGhpcy5oZWFkZXJzLCBoZWFkZXJzKTtcbiAgICAgICAgaWYgKHRoaXMuY29uZm9ybWFuY2UpIHJldHVybiBvZih0aGlzLmNvbmZvcm1hbmNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8Q2FwYWJpbGl0eVN0YXRlbWVudD4oYCR7dGhpcy5jb25maWcuYmFzZX0vbWV0YWRhdGFgLCB7aGVhZGVyczogbWVyZ2VkSGVhZGVyc30pLnBpcGUoXG4gICAgICAgICAgICB0YXAocmVzdWx0ID0+IHRoaXMuY29uZm9ybWFuY2UgPSByZXN1bHQpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWFkPFQ+KHJlc291cmNlVHlwZTogc3RyaW5nLCBpZDogc3RyaW5nLCBoZWFkZXJzPyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBtZXJnZWRIZWFkZXJzID0gT2JqZWN0LmFzc2lnbih0aGlzLmhlYWRlcnMsIGhlYWRlcnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxUPihgJHt0aGlzLmNvbmZpZy5iYXNlfS8ke3Jlc291cmNlVHlwZX0vJHtpZH1gLCB7aGVhZGVyczogbWVyZ2VkSGVhZGVyc30pO1xuICAgIH1cblxuICAgIHB1YmxpYyB2cmVhZDxUPihyZXNvdXJjZVR5cGU6IHN0cmluZywgaWQ6IHN0cmluZywgdjogbnVtYmVyLCBoZWFkZXJzPyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBtZXJnZWRIZWFkZXJzID0gT2JqZWN0LmFzc2lnbih0aGlzLmhlYWRlcnMsIGhlYWRlcnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxUPihgJHt0aGlzLmNvbmZpZy5iYXNlfS8ke3Jlc291cmNlVHlwZX0vJHtpZH0vX2hpc3RvcnkvJHt2fWAsIHtoZWFkZXJzOiBtZXJnZWRIZWFkZXJzfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZTxUPihyZXNvdXJjZTogYW55LCBoZWFkZXJzPyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBtZXJnZWRIZWFkZXJzID0gT2JqZWN0LmFzc2lnbih0aGlzLmhlYWRlcnMsIGhlYWRlcnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnB1dDxUPihgJHt0aGlzLmNvbmZpZy5iYXNlfS8ke3Jlc291cmNlLnJlc291cmNlVHlwZX0vJHtyZXNvdXJjZS5pZH1gLCByZXNvdXJjZSwge2hlYWRlcnM6IG1lcmdlZEhlYWRlcnN9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2F2ZTxUPihyZXNvdXJjZTogYW55LCBoZWFkZXJzPyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBtZXJnZWRIZWFkZXJzID0gT2JqZWN0LmFzc2lnbih0aGlzLmhlYWRlcnMsIGhlYWRlcnMpO1xuICAgICAgICBjb25zdCByZXNvdXJjZVR5cGUgPSByZXNvdXJjZS5yZXNvdXJjZVR5cGU7XG4gICAgICAgIGlmIChyZXNvdXJjZS5oYXNPd25Qcm9wZXJ0eSgnaWQnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKHJlc291cmNlLCBoZWFkZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyZXNvdXJjZSwgaGVhZGVycyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcGF0Y2g8VD4ocmVzb3VyY2U6IGFueSwgYm9keTogYW55LCBoZWFkZXJzPyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBoZWFkZXJzVG9BdHRhY2ggPSB7fTtcbiAgICAgICAgbWVyZ2UoaGVhZGVyc1RvQXR0YWNoLCB0aGlzLmhlYWRlcnMpO1xuICAgICAgICBoZWFkZXJzVG9BdHRhY2hbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24tcGF0Y2granNvbic7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucGF0Y2g8VD4oYCR7dGhpcy5jb25maWcuYmFzZX0vJHtyZXNvdXJjZS5yZXNvdXJjZVR5cGV9LyR7cmVzb3VyY2UuaWR9YCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnNUb0F0dGFjaH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGU8VD4ocmVzb3VyY2VUeXBlOiBzdHJpbmcsIGlkOiBzdHJpbmcsIGhlYWRlcnM/KTogT2JzZXJ2YWJsZTxPcGVyYXRpb25PdXRjb21lPiB7XG4gICAgICAgIGNvbnN0IG1lcmdlZEhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHRoaXMuaGVhZGVycywgaGVhZGVycyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZGVsZXRlPE9wZXJhdGlvbk91dGNvbWU+KGAke3RoaXMuY29uZmlnLmJhc2V9LyR7cmVzb3VyY2VUeXBlfS8ke2lkfWAsIHtoZWFkZXJzOiBtZXJnZWRIZWFkZXJzfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZTxUPihyZXNvdXJjZTogYW55LCBoZWFkZXJzPyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBtZXJnZWRIZWFkZXJzID0gT2JqZWN0LmFzc2lnbih0aGlzLmhlYWRlcnMsIGhlYWRlcnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8VD4oYCR7dGhpcy5jb25maWcuYmFzZX0vJHtyZXNvdXJjZS5yZXNvdXJjZVR5cGV9YCwgcmVzb3VyY2UsIHtoZWFkZXJzOiBtZXJnZWRIZWFkZXJzfSk7XG4gICAgfVxuXG4gICAgLy8gVG9EbzpcbiAgICBwdWJsaWMgc2VhcmNoQnlRdWVyeShxYjogRmhpclF1ZXJ5QnVpbGRlciwgaGVhZGVycz8pOiBPYnNlcnZhYmxlPEJ1bmRsZT4ge1xuICAgICAgICBjb25zdCBtZXJnZWRIZWFkZXJzID0gT2JqZWN0LmFzc2lnbih0aGlzLmhlYWRlcnMsIGhlYWRlcnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxCdW5kbGU+KGAke3RoaXMuY29uZmlnLmJhc2V9LyR7cWIucmVzb3VyY2VOYW1lfWAsIHtcbiAgICAgICAgICAgIHBhcmFtczogcWIucGFyYW1zQXNIdHRwUGFyYW1zKCksXG4gICAgICAgICAgICBoZWFkZXJzOiBtZXJnZWRIZWFkZXJzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWFyY2hCeVNldDxUPihzczogU2VhcmNoU2V0LCBoZWFkZXJzPyk6IE9ic2VydmFibGU8QnVuZGxlPiB7XG4gICAgICAgIGNvbnN0IG1lcmdlZEhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHRoaXMuaGVhZGVycywgaGVhZGVycyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PEJ1bmRsZT4oYCR7dGhpcy5jb25maWcuYmFzZX0vJHtzcy5yZXNvdXJjZU5hbWV9P19zb3J0PS1faWRgLCB7XG4gICAgICAgICAgICBwYXJhbXM6IHNzLnBhcmFtc0FzT2JqZWN0KCksXG4gICAgICAgICAgICBoZWFkZXJzOiBtZXJnZWRIZWFkZXJzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VhcmNoQnlVcmw8VD4odXJsOiBzdHJpbmcsIGhlYWRlcnM/KTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgICAgIGNvbnN0IG1lcmdlZEhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHRoaXMuaGVhZGVycywgaGVhZGVycyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PFQ+KHVybCwge2hlYWRlcnM6IG1lcmdlZEhlYWRlcnN9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VhcmNoX2FsbCgpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBjYXBhYmlsaXRpZXMoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnNhY3Rpb24oYnVuZGxlOiBCdW5kbGUsIGhlYWRlcnM/KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgY29uc3QgbWVyZ2VkSGVhZGVycyA9IE9iamVjdC5hc3NpZ24odGhpcy5oZWFkZXJzLCBoZWFkZXJzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KHRoaXMuY29uZmlnLmJhc2UsIGJ1bmRsZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBtZXJnZWRIZWFkZXJzXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlzdG9yeSgpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBoaXN0b3J5X3R5cGUoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgaGlzdG9yeV9hbGwoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZXhlY3V0ZVF1ZXJ5PFQ+KHFiOiBGaGlyUXVlcnlCdWlsZGVyKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PFQ+KHFiLnF1ZXJ5LCB7aGVhZGVyczogdGhpcy5oZWFkZXJzfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZVRyYW5zYWN0aW9uQnVuZGxlKHNvdXJjZTogYW55LCBrZXlzOiBzdHJpbmdbXSk6IEJ1bmRsZSB7XG4gICAgICAgIGNvbnN0IGJ1bmRsZTogQnVuZGxlID0gbmV3IEJ1bmRsZSgpO1xuICAgICAgICBidW5kbGUudHlwZSA9ICd0cmFuc2FjdGlvbic7XG4gICAgICAgIGJ1bmRsZS5yZXNvdXJjZVR5cGUgPSAnQnVuZGxlJztcbiAgICAgICAgYnVuZGxlLmVudHJ5ID0gW107XG4gICAgICAgIGtleXMuZmlsdGVyKGtleSA9PiBzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgIC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gc291cmNlW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNJdGVyYWJsZSh2KSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGUgb2Ygdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVuZGxlLmVudHJ5LnB1c2godGhpcy5jcmVhdGVCdW5kbGVFbnRyeShlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBidW5kbGUuZW50cnkucHVzaCh0aGlzLmNyZWF0ZUJ1bmRsZUVudHJ5KHYpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGJ1bmRsZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzSXRlcmFibGUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QodmFsdWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQnVuZGxlRW50cnkoZW50cnkpOiBCdW5kbGVFbnRyeSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmdWxsVXJsOiBgdXJuOnV1aWQ6JHtlbnRyeS51dWlkfWAsXG4gICAgICAgICAgICByZXNvdXJjZTogZW50cnksXG4gICAgICAgICAgICByZXF1ZXN0OiB7XG4gICAgICAgICAgICAgICAgdXJsOiAhZW50cnkuaWQgPyBlbnRyeS5yZXNvdXJjZVR5cGUgOiBgJHtlbnRyeS5yZXNvdXJjZVR5cGV9LyR7ZW50cnkuaWR9YCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IGVudHJ5LmlkID8gJ1BVVCcgOiAnUE9TVCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qZ2VuZXJhdGVDb2RlYWJsZUNvbmNlcHQoY29kZTogc3RyaW5nLCBzeXN0ZW0/OiBzdHJpbmcsIGRpc3BsYXk/OiBzdHJpbmcpOiBDb2RlYWJsZUNvbmNlcHQge1xuICAgICAgICBjb25zdCBjb2RlYWJsZUNvbmNlcHQ6IENvZGVhYmxlQ29uY2VwdCA9IG5ldyBDb2RlYWJsZUNvbmNlcHQoKTtcbiAgICAgICAgY29kZWFibGVDb25jZXB0LmNvZGluZyA9IFt7Y29kZTogY29kZX1dO1xuICAgICAgICBpZiAoc3lzdGVtKSBjb2RlYWJsZUNvbmNlcHQuY29kaW5nWzBdLnN5c3RlbSA9IHN5c3RlbTtcbiAgICAgICAgaWYgKGRpc3BsYXkpIGNvZGVhYmxlQ29uY2VwdC5jb2RpbmdbMF0uZGlzcGxheSA9IGRpc3BsYXk7XG4gICAgICAgIHJldHVybiBjb2RlYWJsZUNvbmNlcHQ7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVJZGVudGlmaWVyKCk6IElkZW50aWZpZXIge1xuICAgICAgICBjb25zdCBpZGVudGlmaWVyOiBJZGVudGlmaWVyID0gbmV3IElkZW50aWZpZXIoKTtcbiAgICAgICAgaWRlbnRpZmllci5zeXN0ZW0gPSBGaGlyU2VydmljZS5JZGVudGlmaWVyU3lzdGVtO1xuICAgICAgICBpZGVudGlmaWVyLnZhbHVlID0gVVVJRC5VVUlEKCk7XG4gICAgICAgIHJldHVybiBpZGVudGlmaWVyO1xuICAgIH0qL1xufVxuXG4iXX0=
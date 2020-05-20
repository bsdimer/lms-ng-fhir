/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainResource } from '../domain-resource';
import { HumanName } from './humanname';
export class PractitionerRole extends DomainResource {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        this.resourceType = 'PractitionerRole';
        if (source)
            for (const key of Object.keys(source)) {
                this[key] = source[key];
            }
    }
    // (Endpoint)
    /**
     * @return {?}
     */
    static getNew() {
        return new PractitionerRole({ name: [HumanName.getNew()] });
    }
}
if (false) {
    /** @type {?} */
    PractitionerRole.prototype.resourceType;
    /** @type {?} */
    PractitionerRole.prototype.identifier;
    /** @type {?} */
    PractitionerRole.prototype.active;
    /** @type {?} */
    PractitionerRole.prototype.period;
    /** @type {?} */
    PractitionerRole.prototype.practitioner;
    /** @type {?} */
    PractitionerRole.prototype.organization;
    /** @type {?} */
    PractitionerRole.prototype.code;
    /** @type {?} */
    PractitionerRole.prototype.specialty;
    /** @type {?} */
    PractitionerRole.prototype.location;
    /** @type {?} */
    PractitionerRole.prototype.healthcareService;
    /** @type {?} */
    PractitionerRole.prototype.telecom;
    /** @type {?} */
    PractitionerRole.prototype.availableTime;
    /** @type {?} */
    PractitionerRole.prototype.notAvailable;
    /** @type {?} */
    PractitionerRole.prototype.availabilityExceptions;
    /** @type {?} */
    PractitionerRole.prototype.endpoint;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJhY3RpdGlvbmVycm9sZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xtcy1uZy1maGlyLyIsInNvdXJjZXMiOlsibGliL2ZoaXIvcjQvbW9kZWwvaW5kaXZpZHVhbHMvcHJhY3RpdGlvbmVycm9sZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBTWxELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFFdEMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGNBQWM7Ozs7SUFDaEQsWUFBWSxNQUFZO1FBQ3BCLEtBQUssRUFBRSxDQUFDO1FBT1osaUJBQVksR0FBVyxrQkFBa0IsQ0FBQztRQU50QyxJQUFJLE1BQU07WUFDTixLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDM0I7SUFDVCxDQUFDOzs7OztJQTBCTSxNQUFNLENBQUMsTUFBTTtRQUNoQixPQUFPLElBQUksZ0JBQWdCLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztDQUNKOzs7SUEzQkcsd0NBQTBDOztJQUMxQyxzQ0FBMEI7O0lBQzFCLGtDQUFpQjs7SUFDakIsa0NBQWdCOztJQUNoQix3Q0FBeUI7O0lBQ3pCLHdDQUF5Qjs7SUFDekIsZ0NBQXlCOztJQUN6QixxQ0FBOEI7O0lBQzlCLG9DQUF1Qjs7SUFDdkIsNkNBQWdDOztJQUNoQyxtQ0FBeUI7O0lBQ3pCLHlDQUtJOztJQUNKLHdDQUdJOztJQUNKLGtEQUFnQzs7SUFDaEMsb0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb21haW5SZXNvdXJjZX0gZnJvbSAnLi4vZG9tYWluLXJlc291cmNlJztcbmltcG9ydCB7SWRlbnRpZmllcn0gZnJvbSAnLi4vdGVybWlub2xvZ3kvaWRlbnRpZmllcic7XG5pbXBvcnQge1BlcmlvZH0gZnJvbSAnLi4vcGVyaW9kJztcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tICcuLi9yZWZlcmVuY2UnO1xuaW1wb3J0IHtDb2RlYWJsZUNvbmNlcHR9IGZyb20gJy4uL3Rlcm1pbm9sb2d5L2NvZGVhYmxlY29uY2VwdCc7XG5pbXBvcnQge0NvbnRhY3RQb2ludH0gZnJvbSAnLi4vdGVybWlub2xvZ3kvY29udGFjdHBvaW50JztcbmltcG9ydCB7SHVtYW5OYW1lfSBmcm9tICcuL2h1bWFubmFtZSc7XG5cbmV4cG9ydCBjbGFzcyBQcmFjdGl0aW9uZXJSb2xlIGV4dGVuZHMgRG9tYWluUmVzb3VyY2Uge1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZT86IGFueSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZiAoc291cmNlKVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc291cmNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc291cmNlVHlwZTogc3RyaW5nID0gJ1ByYWN0aXRpb25lclJvbGUnO1xuICAgIGlkZW50aWZpZXI/OiBJZGVudGlmaWVyW107XG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICBwZXJpb2Q/OiBQZXJpb2Q7XG4gICAgcHJhY3RpdGlvbmVyPzogUmVmZXJlbmNlOyAvLyAoUHJhY3RpdGlvbmVyKVxuICAgIG9yZ2FuaXphdGlvbj86IFJlZmVyZW5jZTsgLy8gKE9yZ2FuaXphdGlvbilcbiAgICBjb2RlPzogQ29kZWFibGVDb25jZXB0W107XG4gICAgc3BlY2lhbHR5PzogQ29kZWFibGVDb25jZXB0W107XG4gICAgbG9jYXRpb24/OiBSZWZlcmVuY2VbXTsgLy8gKExvY2F0aW9uKVxuICAgIGhlYWx0aGNhcmVTZXJ2aWNlPzogUmVmZXJlbmNlW107IC8vIChIZWFsdGhjYXJlU2VydmljZSlcbiAgICB0ZWxlY29tPzogQ29udGFjdFBvaW50W107XG4gICAgYXZhaWxhYmxlVGltZT86IHtcbiAgICAgICAgZGF5c09mV2Vlaz86IHN0cmluZ1tdO1xuICAgICAgICBhbGxEYXk/OiBib29sZWFuO1xuICAgICAgICBhdmFpbGFibGVTdGFydFRpbWU/OiBEYXRlOyAvLyBSZWdleDogKFswMV1bMC05XXwyWzAtM10pOlswLTVdWzAtOV06KFswLTVdWzAtOV18NjApKFxcLlswLTldKyk/XG4gICAgICAgIGF2YWlsYWJsZUVuZFRpbWU/OiBEYXRlO1xuICAgIH1bXTtcbiAgICBub3RBdmFpbGFibGU/OiB7IC8vIEJhY2tib25lRWxlbWVudFxuICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICBkdXJpbmc/OiBQZXJpb2Q7XG4gICAgfVtdO1xuICAgIGF2YWlsYWJpbGl0eUV4Y2VwdGlvbnM/OiBzdHJpbmc7XG4gICAgZW5kcG9pbnQ/OiBSZWZlcmVuY2VbXTsgLy8gKEVuZHBvaW50KVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXROZXcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJhY3RpdGlvbmVyUm9sZSh7bmFtZTogW0h1bWFuTmFtZS5nZXROZXcoKV19KTtcbiAgICB9XG59XG4iXX0=
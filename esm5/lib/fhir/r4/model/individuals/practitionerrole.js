/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainResource } from '../domain-resource';
import { HumanName } from './humanname';
var PractitionerRole = /** @class */ (function (_super) {
    tslib_1.__extends(PractitionerRole, _super);
    function PractitionerRole(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        _this.resourceType = 'PractitionerRole';
        if (source)
            try {
                for (var _b = tslib_1.__values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _this[key] = source[key];
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        return _this;
    }
    // (Endpoint)
    /**
     * @return {?}
     */
    PractitionerRole.getNew = 
    // (Endpoint)
    /**
     * @return {?}
     */
    function () {
        return new PractitionerRole({ name: [HumanName.getNew()] });
    };
    return PractitionerRole;
}(DomainResource));
export { PractitionerRole };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJhY3RpdGlvbmVycm9sZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xtcy1uZy1maGlyLyIsInNvdXJjZXMiOlsibGliL2ZoaXIvcjQvbW9kZWwvaW5kaXZpZHVhbHMvcHJhY3RpdGlvbmVycm9sZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQU1sRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRXRDO0lBQXNDLDRDQUFjO0lBQ2hELDBCQUFZLE1BQVk7O1FBQXhCLFlBQ0ksaUJBQU8sU0FLVjtRQUVELGtCQUFZLEdBQVcsa0JBQWtCLENBQUM7UUFOdEMsSUFBSSxNQUFNOztnQkFDTixLQUFrQixJQUFBLEtBQUEsaUJBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBbEMsSUFBTSxHQUFHLFdBQUE7b0JBQ1YsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDM0I7Ozs7Ozs7O2FBQUE7O0lBQ1QsQ0FBQzs7Ozs7SUEwQmEsdUJBQU07Ozs7O0lBQXBCO1FBQ0ksT0FBTyxJQUFJLGdCQUFnQixDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFwQ0QsQ0FBc0MsY0FBYyxHQW9DbkQ7Ozs7SUEzQkcsd0NBQTBDOztJQUMxQyxzQ0FBMEI7O0lBQzFCLGtDQUFpQjs7SUFDakIsa0NBQWdCOztJQUNoQix3Q0FBeUI7O0lBQ3pCLHdDQUF5Qjs7SUFDekIsZ0NBQXlCOztJQUN6QixxQ0FBOEI7O0lBQzlCLG9DQUF1Qjs7SUFDdkIsNkNBQWdDOztJQUNoQyxtQ0FBeUI7O0lBQ3pCLHlDQUtJOztJQUNKLHdDQUdJOztJQUNKLGtEQUFnQzs7SUFDaEMsb0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb21haW5SZXNvdXJjZX0gZnJvbSAnLi4vZG9tYWluLXJlc291cmNlJztcbmltcG9ydCB7SWRlbnRpZmllcn0gZnJvbSAnLi4vdGVybWlub2xvZ3kvaWRlbnRpZmllcic7XG5pbXBvcnQge1BlcmlvZH0gZnJvbSAnLi4vcGVyaW9kJztcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tICcuLi9yZWZlcmVuY2UnO1xuaW1wb3J0IHtDb2RlYWJsZUNvbmNlcHR9IGZyb20gJy4uL3Rlcm1pbm9sb2d5L2NvZGVhYmxlY29uY2VwdCc7XG5pbXBvcnQge0NvbnRhY3RQb2ludH0gZnJvbSAnLi4vdGVybWlub2xvZ3kvY29udGFjdHBvaW50JztcbmltcG9ydCB7SHVtYW5OYW1lfSBmcm9tICcuL2h1bWFubmFtZSc7XG5cbmV4cG9ydCBjbGFzcyBQcmFjdGl0aW9uZXJSb2xlIGV4dGVuZHMgRG9tYWluUmVzb3VyY2Uge1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZT86IGFueSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZiAoc291cmNlKVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc291cmNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc291cmNlVHlwZTogc3RyaW5nID0gJ1ByYWN0aXRpb25lclJvbGUnO1xuICAgIGlkZW50aWZpZXI/OiBJZGVudGlmaWVyW107XG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICBwZXJpb2Q/OiBQZXJpb2Q7XG4gICAgcHJhY3RpdGlvbmVyPzogUmVmZXJlbmNlOyAvLyAoUHJhY3RpdGlvbmVyKVxuICAgIG9yZ2FuaXphdGlvbj86IFJlZmVyZW5jZTsgLy8gKE9yZ2FuaXphdGlvbilcbiAgICBjb2RlPzogQ29kZWFibGVDb25jZXB0W107XG4gICAgc3BlY2lhbHR5PzogQ29kZWFibGVDb25jZXB0W107XG4gICAgbG9jYXRpb24/OiBSZWZlcmVuY2VbXTsgLy8gKExvY2F0aW9uKVxuICAgIGhlYWx0aGNhcmVTZXJ2aWNlPzogUmVmZXJlbmNlW107IC8vIChIZWFsdGhjYXJlU2VydmljZSlcbiAgICB0ZWxlY29tPzogQ29udGFjdFBvaW50W107XG4gICAgYXZhaWxhYmxlVGltZT86IHtcbiAgICAgICAgZGF5c09mV2Vlaz86IHN0cmluZ1tdO1xuICAgICAgICBhbGxEYXk/OiBib29sZWFuO1xuICAgICAgICBhdmFpbGFibGVTdGFydFRpbWU/OiBEYXRlOyAvLyBSZWdleDogKFswMV1bMC05XXwyWzAtM10pOlswLTVdWzAtOV06KFswLTVdWzAtOV18NjApKFxcLlswLTldKyk/XG4gICAgICAgIGF2YWlsYWJsZUVuZFRpbWU/OiBEYXRlO1xuICAgIH1bXTtcbiAgICBub3RBdmFpbGFibGU/OiB7IC8vIEJhY2tib25lRWxlbWVudFxuICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICBkdXJpbmc/OiBQZXJpb2Q7XG4gICAgfVtdO1xuICAgIGF2YWlsYWJpbGl0eUV4Y2VwdGlvbnM/OiBzdHJpbmc7XG4gICAgZW5kcG9pbnQ/OiBSZWZlcmVuY2VbXTsgLy8gKEVuZHBvaW50KVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXROZXcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJhY3RpdGlvbmVyUm9sZSh7bmFtZTogW0h1bWFuTmFtZS5nZXROZXcoKV19KTtcbiAgICB9XG59XG4iXX0=
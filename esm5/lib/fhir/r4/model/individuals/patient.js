/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainResource } from '../domain-resource';
import { HumanName } from './humanname';
var Patient = /** @class */ (function (_super) {
    tslib_1.__extends(Patient, _super);
    function Patient(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        _this.resourceType = 'Patient';
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
    /**
     * @return {?}
     */
    Patient.getNew = /**
     * @return {?}
     */
    function () {
        return new Patient({ name: [HumanName.getNew()] });
    };
    return Patient;
}(DomainResource));
export { Patient };
if (false) {
    /** @type {?} */
    Patient.prototype.resourceType;
    /** @type {?} */
    Patient.prototype.identifier;
    /** @type {?} */
    Patient.prototype.active;
    /** @type {?} */
    Patient.prototype.name;
    /** @type {?} */
    Patient.prototype.telecom;
    /** @type {?} */
    Patient.prototype.gender;
    /** @type {?} */
    Patient.prototype.birthDate;
    /** @type {?} */
    Patient.prototype.deceasedBoolean;
    /** @type {?} */
    Patient.prototype.deceasedDateTime;
    /** @type {?} */
    Patient.prototype.address;
    /** @type {?} */
    Patient.prototype.maritalStatus;
    /** @type {?} */
    Patient.prototype.multipleBirthBoolean;
    /** @type {?} */
    Patient.prototype.multipleBirthInteger;
    /** @type {?} */
    Patient.prototype.photo;
    /** @type {?} */
    Patient.prototype.contact;
    /** @type {?} */
    Patient.prototype.communication;
    /** @type {?} */
    Patient.prototype.generalPractitioner;
    /** @type {?} */
    Patient.prototype.managingOrganization;
    /** @type {?} */
    Patient.prototype.link;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xtcy1uZy1maGlyLyIsInNvdXJjZXMiOlsibGliL2ZoaXIvcjQvbW9kZWwvaW5kaXZpZHVhbHMvcGF0aWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBUXhDO0lBQTZCLG1DQUFjO0lBQ3pDLGlCQUFZLE1BQVk7O1FBQXhCLFlBQ0UsaUJBQU8sU0FLUjtRQUNELGtCQUFZLEdBQVcsU0FBUyxDQUFDO1FBTC9CLElBQUksTUFBTTs7Z0JBQ1IsS0FBa0IsSUFBQSxLQUFBLGlCQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUEsZ0JBQUEsNEJBQUU7b0JBQWxDLElBQU0sR0FBRyxXQUFBO29CQUNaLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3pCOzs7Ozs7OzthQUFBOztJQUNMLENBQUM7Ozs7SUFtQ2EsY0FBTTs7O0lBQXBCO1FBQ0UsT0FBTyxJQUFJLE9BQU8sQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUE3Q0QsQ0FBNkIsY0FBYyxHQTZDMUM7Ozs7SUFyQ0MsK0JBQWlDOztJQUNqQyw2QkFBMEI7O0lBQzFCLHlCQUFpQjs7SUFDakIsdUJBQW1COztJQUNuQiwwQkFBeUI7O0lBQ3pCLHlCQUFpRDs7SUFDakQsNEJBQWlCOztJQUNqQixrQ0FBMEI7O0lBQzFCLG1DQUF3Qjs7SUFDeEIsMEJBQW9COztJQUNwQixnQ0FBZ0M7O0lBQ2hDLHVDQUErQjs7SUFDL0IsdUNBQThCOztJQUM5Qix3QkFBcUI7O0lBQ3JCLDBCQVFJOztJQUNKLGdDQUdJOztJQUNKLHNDQUFrQzs7SUFDbEMsdUNBQWlDOztJQUNqQyx1QkFHSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpblJlc291cmNlIH0gZnJvbSAnLi4vZG9tYWluLXJlc291cmNlJztcbmltcG9ydCB7IElkZW50aWZpZXIgfSBmcm9tICcuLic7XG5pbXBvcnQgeyBIdW1hbk5hbWUgfSBmcm9tICcuL2h1bWFubmFtZSc7XG5pbXBvcnQgeyBDb250YWN0UG9pbnQgfSBmcm9tICcuLic7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi9hZGRyZXNzJztcbmltcG9ydCB7IENvZGVhYmxlQ29uY2VwdCB9IGZyb20gJy4uJztcbmltcG9ydCB7IEF0dGFjaG1lbnQgfSBmcm9tICcuL2F0dGFjaG1lbnQnO1xuaW1wb3J0IHsgUmVmZXJlbmNlIH0gZnJvbSAnLi4vcmVmZXJlbmNlJztcbmltcG9ydCB7IFBlcmlvZCB9IGZyb20gJy4uL3BlcmlvZCc7XG5cbmV4cG9ydCBjbGFzcyBQYXRpZW50IGV4dGVuZHMgRG9tYWluUmVzb3VyY2Uge1xuICBjb25zdHJ1Y3Rvcihzb3VyY2U/OiBhbnkpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmIChzb3VyY2UpXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzb3VyY2UpKSB7XG4gICAgICAgIHRoaXNba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICB9XG4gIHJlc291cmNlVHlwZTogc3RyaW5nID0gJ1BhdGllbnQnO1xuICBpZGVudGlmaWVyPzogSWRlbnRpZmllcltdO1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBuYW1lPzogSHVtYW5OYW1lW107XG4gIHRlbGVjb20/OiBDb250YWN0UG9pbnRbXTtcbiAgZ2VuZGVyPzogJ21hbGUnIHwgJ2ZlbWFsZScgfCAnb3RoZXInIHwgJ3Vua25vd24nO1xuICBiaXJ0aERhdGU/OiBEYXRlO1xuICBkZWNlYXNlZEJvb2xlYW4/OiBib29sZWFuO1xuICBkZWNlYXNlZERhdGVUaW1lPzogRGF0ZTtcbiAgYWRkcmVzcz86IEFkZHJlc3NbXTtcbiAgbWFyaXRhbFN0YXR1cz86IENvZGVhYmxlQ29uY2VwdDtcbiAgbXVsdGlwbGVCaXJ0aEJvb2xlYW4/OiBib29sZWFuO1xuICBtdWx0aXBsZUJpcnRoSW50ZWdlcj86IG51bWJlcjsgLy8gUmVnZXg6IFswXXxbLStdP1sxLTldWzAtOV0qXG4gIHBob3RvPzogQXR0YWNobWVudFtdO1xuICBjb250YWN0PzogeyAvLyBCYWNrYm9uZUVsZW1lbnRcbiAgICByZWxhdGlvbnNoaXA/OiBDb2RlYWJsZUNvbmNlcHRbXTtcbiAgICBuYW1lPzogSHVtYW5OYW1lO1xuICAgIHRlbGVjb20/OiBDb250YWN0UG9pbnRbXTtcbiAgICBhZGRyZXNzPzogQWRkcmVzcztcbiAgICBnZW5kZXI/OiAnbWFsZScgfCAnZmVtYWxlJyB8ICdvdGhlcicgfCAndW5rbm93bic7XG4gICAgb3JnYW5pemF0aW9uPzogUmVmZXJlbmNlOyAvLyAoT3JnYW5pemF0aW9uKVxuICAgIHBlcmlvZD86IFBlcmlvZDtcbiAgfVtdO1xuICBjb21tdW5pY2F0aW9uPzogeyAvLyBCYWNrYm9uZUVsZW1lbnRcbiAgICBsYW5ndWFnZTogQ29kZWFibGVDb25jZXB0O1xuICAgIHByZWZlcnJlZD86IGJvb2xlYW47XG4gIH1bXTtcbiAgZ2VuZXJhbFByYWN0aXRpb25lcj86IFJlZmVyZW5jZVtdOyAvLyAoT3JnYW5pemF0aW9uIHwgUHJhY3RpdGlvbmVyIHwgUHJhY3RpdGlvbmVyUm9sZSlcbiAgbWFuYWdpbmdPcmdhbml6YXRpb24/OiBSZWZlcmVuY2U7IC8vIChPcmdhbml6YXRpb24pXG4gIGxpbms/OiB7IC8vIEJhY2tib25lRWxlbWVudFxuICAgIG90aGVyOiBSZWZlcmVuY2U7IC8vIChQYXRpZW50IHwgUmVsYXRlZFBlcnNvbilcbiAgICB0eXBlOiAncmVwbGFjZWQtYnknIHwgJ3JlcGxhY2VzJyB8ICdyZWZlcicgfCAnc2VlYWxzbyc7XG4gIH1bXTtcblxuICBwdWJsaWMgc3RhdGljIGdldE5ldygpIHtcbiAgICByZXR1cm4gbmV3IFBhdGllbnQoe25hbWU6IFtIdW1hbk5hbWUuZ2V0TmV3KCldfSk7XG4gIH1cbn1cbiJdfQ==
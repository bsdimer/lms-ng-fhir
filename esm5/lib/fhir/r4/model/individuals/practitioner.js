/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainResource } from '../domain-resource';
import { HumanName } from './humanname';
var Practitioner = /** @class */ (function (_super) {
    tslib_1.__extends(Practitioner, _super);
    function Practitioner(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        _this.resourceType = 'Practitioner';
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
    Practitioner.getNew = /**
     * @return {?}
     */
    function () {
        return new Practitioner({ name: [HumanName.getNew()] });
    };
    return Practitioner;
}(DomainResource));
export { Practitioner };
if (false) {
    /** @type {?} */
    Practitioner.prototype.resourceType;
    /** @type {?} */
    Practitioner.prototype.identifier;
    /** @type {?} */
    Practitioner.prototype.active;
    /** @type {?} */
    Practitioner.prototype.name;
    /** @type {?} */
    Practitioner.prototype.telecom;
    /** @type {?} */
    Practitioner.prototype.address;
    /** @type {?} */
    Practitioner.prototype.gender;
    /** @type {?} */
    Practitioner.prototype.birthDate;
    /** @type {?} */
    Practitioner.prototype.photo;
    /** @type {?} */
    Practitioner.prototype.qualification;
    /** @type {?} */
    Practitioner.prototype.communication;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJhY3RpdGlvbmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9tb2RlbC9pbmRpdmlkdWFscy9wcmFjdGl0aW9uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQVF0QztJQUFrQyx3Q0FBYztJQUM5QyxzQkFBWSxNQUFZOztRQUF4QixZQUNFLGlCQUFPLFNBS1I7UUFDRCxrQkFBWSxHQUFXLGNBQWMsQ0FBQztRQUxwQyxJQUFJLE1BQU07O2dCQUNSLEtBQWtCLElBQUEsS0FBQSxpQkFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO29CQUFsQyxJQUFNLEdBQUcsV0FBQTtvQkFDWixLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN6Qjs7Ozs7Ozs7YUFBQTs7SUFDTCxDQUFDOzs7O0lBa0JhLG1CQUFNOzs7SUFBcEI7UUFDRSxPQUFPLElBQUksWUFBWSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUE1QkQsQ0FBa0MsY0FBYyxHQTRCL0M7Ozs7SUFwQkMsb0NBQXNDOztJQUN0QyxrQ0FBMEI7O0lBQzFCLDhCQUFpQjs7SUFDakIsNEJBQW1COztJQUNuQiwrQkFBeUI7O0lBQ3pCLCtCQUFvQjs7SUFDcEIsOEJBQWtEOztJQUNsRCxpQ0FBaUI7O0lBQ2pCLDZCQUFxQjs7SUFDckIscUNBS0k7O0lBQ0oscUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb21haW5SZXNvdXJjZX0gZnJvbSAnLi4vZG9tYWluLXJlc291cmNlJztcbmltcG9ydCB7SWRlbnRpZmllcn0gZnJvbSAnLi4vdGVybWlub2xvZ3kvaWRlbnRpZmllcic7XG5pbXBvcnQge0h1bWFuTmFtZX0gZnJvbSAnLi9odW1hbm5hbWUnO1xuaW1wb3J0IHtDb250YWN0UG9pbnR9IGZyb20gJy4uL3Rlcm1pbm9sb2d5L2NvbnRhY3Rwb2ludCc7XG5pbXBvcnQge0FkZHJlc3N9IGZyb20gJy4vYWRkcmVzcyc7XG5pbXBvcnQge0F0dGFjaG1lbnR9IGZyb20gJy4vYXR0YWNobWVudCc7XG5pbXBvcnQge0NvZGVhYmxlQ29uY2VwdH0gZnJvbSAnLi4vdGVybWlub2xvZ3kvY29kZWFibGVjb25jZXB0JztcbmltcG9ydCB7UGVyaW9kfSBmcm9tICcuLi9wZXJpb2QnO1xuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gJy4uL3JlZmVyZW5jZSc7XG5cbmV4cG9ydCBjbGFzcyBQcmFjdGl0aW9uZXIgZXh0ZW5kcyBEb21haW5SZXNvdXJjZSB7XG4gIGNvbnN0cnVjdG9yKHNvdXJjZT86IGFueSkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKHNvdXJjZSlcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNvdXJjZSkpIHtcbiAgICAgICAgdGhpc1trZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gIH1cbiAgcmVzb3VyY2VUeXBlOiBzdHJpbmcgPSAnUHJhY3RpdGlvbmVyJztcbiAgaWRlbnRpZmllcj86IElkZW50aWZpZXJbXTtcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgbmFtZT86IEh1bWFuTmFtZVtdO1xuICB0ZWxlY29tPzogQ29udGFjdFBvaW50W107XG4gIGFkZHJlc3M/OiBBZGRyZXNzW107XG4gIGdlbmRlcj86IFx0J21hbGUnIHwgJ2ZlbWFsZScgfCAnb3RoZXInIHwgJ3Vua25vd24nO1xuICBiaXJ0aERhdGU/OiBEYXRlOyAvLyBSZWdleDogKFswLTldKFswLTldKFswLTldWzEtOV18WzEtOV0wKXxbMS05XTAwKXxbMS05XTAwMCkoLSgwWzEtOV18MVswLTJdKSgtKDBbMS05XXxbMS0yXVswLTldfDNbMC0xXSkpPyk/XG4gIHBob3RvPzogQXR0YWNobWVudFtdO1xuICBxdWFsaWZpY2F0aW9uPzogeyAvLyBCYWNrYm9uZUVsZW1lbnRcbiAgICBpZGVudGlmaWVyPzogSWRlbnRpZmllcltdO1xuICAgIGNvZGU6IENvZGVhYmxlQ29uY2VwdDtcbiAgICBwZXJpb2Q/OiBQZXJpb2Q7XG4gICAgaXNzdWVyPzogUmVmZXJlbmNlOyAvLyAoT3JnYW5pemF0aW9uKVxuICB9W107XG4gIGNvbW11bmljYXRpb24/OiBDb2RlYWJsZUNvbmNlcHRbXTtcblxuICBwdWJsaWMgc3RhdGljIGdldE5ldygpIHtcbiAgICByZXR1cm4gbmV3IFByYWN0aXRpb25lcih7bmFtZTogW0h1bWFuTmFtZS5nZXROZXcoKV19KTtcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BackboneElement } from '../terminology/backboneelement';
var Dosage = /** @class */ (function (_super) {
    tslib_1.__extends(Dosage, _super);
    function Dosage(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
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
    return Dosage;
}(BackboneElement));
export { Dosage };
if (false) {
    /** @type {?} */
    Dosage.prototype.sequence;
    /** @type {?} */
    Dosage.prototype.text;
    /** @type {?} */
    Dosage.prototype.additionalInstruction;
    /** @type {?} */
    Dosage.prototype.patientInstruction;
    /** @type {?} */
    Dosage.prototype.timing;
    /** @type {?} */
    Dosage.prototype.asNeededBoolean;
    /** @type {?} */
    Dosage.prototype.asNeededCodeableConcept;
    /** @type {?} */
    Dosage.prototype.site;
    /** @type {?} */
    Dosage.prototype.route;
    /** @type {?} */
    Dosage.prototype.method;
    /** @type {?} */
    Dosage.prototype.doseAndRate;
    /** @type {?} */
    Dosage.prototype.maxDosePerPeriod;
    /** @type {?} */
    Dosage.prototype.maxDosePerAdministration;
    /** @type {?} */
    Dosage.prototype.maxDosePerLifetime;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9zYWdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9tb2RlbC9tZWRpY2F0aW9ucy9kb3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFJakU7SUFBNEIsa0NBQWU7SUFDdkMsZ0JBQVksTUFBWTs7UUFBeEIsWUFDSSxpQkFBTyxTQUtWO1FBSkcsSUFBSSxNQUFNOztnQkFDTixLQUFrQixJQUFBLEtBQUEsaUJBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBbEMsSUFBTSxHQUFHLFdBQUE7b0JBQ1YsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDM0I7Ozs7Ozs7O2FBQUE7O0lBQ1QsQ0FBQztJQXNCTCxhQUFDO0FBQUQsQ0FBQyxBQTdCRCxDQUE0QixlQUFlLEdBNkIxQzs7OztJQXJCRywwQkFBa0I7O0lBQ2xCLHNCQUFjOztJQUNkLHVDQUEwQzs7SUFDMUMsb0NBQTRCOztJQUM1Qix3QkFBZ0I7O0lBQ2hCLGlDQUEwQjs7SUFDMUIseUNBQTBDOztJQUMxQyxzQkFBdUI7O0lBQ3ZCLHVCQUF3Qjs7SUFDeEIsd0JBQXlCOztJQUN6Qiw2QkFPSTs7SUFDSixrQ0FBeUI7O0lBQ3pCLDBDQUEwQzs7SUFDMUMsb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUaW1pbmd9IGZyb20gJy4uL3RpbWluZyc7XG5pbXBvcnQge1JhdGlvfSBmcm9tICcuLi9yYXRpbyc7XG5pbXBvcnQgeyBCYWNrYm9uZUVsZW1lbnQgfSBmcm9tICcuLi90ZXJtaW5vbG9neS9iYWNrYm9uZWVsZW1lbnQnO1xuaW1wb3J0IHsgQ29kZWFibGVDb25jZXB0IH0gZnJvbSAnLi4vdGVybWlub2xvZ3kvY29kZWFibGVjb25jZXB0JztcbmltcG9ydCB7IFNpbXBsZVF1YW50aXR5IH0gZnJvbSAnLi4vdGVybWlub2xvZ3kvc2ltcGxlLXF1YW50aXR5JztcblxuZXhwb3J0IGNsYXNzIERvc2FnZSBleHRlbmRzIEJhY2tib25lRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3Ioc291cmNlPzogYW55KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmIChzb3VyY2UpXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIHNlcXVlbmNlPzogbnVtYmVyO1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgYWRkaXRpb25hbEluc3RydWN0aW9uPzogQ29kZWFibGVDb25jZXB0W107XG4gICAgcGF0aWVudEluc3RydWN0aW9uPzogc3RyaW5nO1xuICAgIHRpbWluZz86IFRpbWluZztcbiAgICBhc05lZWRlZEJvb2xlYW4/OiBib29sZWFuO1xuICAgIGFzTmVlZGVkQ29kZWFibGVDb25jZXB0PzogQ29kZWFibGVDb25jZXB0O1xuICAgIHNpdGU/OiBDb2RlYWJsZUNvbmNlcHQ7XG4gICAgcm91dGU/OiBDb2RlYWJsZUNvbmNlcHQ7XG4gICAgbWV0aG9kPzogQ29kZWFibGVDb25jZXB0O1xuICAgIGRvc2VBbmRSYXRlPzoge1xuICAgICAgICB0eXBlPzogQ29kZWFibGVDb25jZXB0O1xuICAgICAgICBkb3NlUmFuZ2U/OiBSYW5nZTtcbiAgICAgICAgZG9zZVF1YW50aXR5PzogU2ltcGxlUXVhbnRpdHk7XG4gICAgICAgIHJhdGVSYXRpbz86IFJhdGlvO1xuICAgICAgICByYXRlUmFuZ2U/OiBSYW5nZTtcbiAgICAgICAgcmF0ZVF1YW50aXR5PzogU2ltcGxlUXVhbnRpdHk7XG4gICAgfVtdO1xuICAgIG1heERvc2VQZXJQZXJpb2Q/OiBSYXRpbztcbiAgICBtYXhEb3NlUGVyQWRtaW5pc3RyYXRpb24/OiBTaW1wbGVRdWFudGl0eTtcbiAgICBtYXhEb3NlUGVyTGlmZXRpbWU/OiBTaW1wbGVRdWFudGl0eTtcbn1cbiJdfQ==
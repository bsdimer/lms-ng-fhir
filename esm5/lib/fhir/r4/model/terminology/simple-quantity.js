/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Quantity } from './quantity';
var SimpleQuantity = /** @class */ (function (_super) {
    tslib_1.__extends(SimpleQuantity, _super);
    function SimpleQuantity(source) {
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
    return SimpleQuantity;
}(Quantity));
export { SimpleQuantity };
if (false) {
    /** @type {?} */
    SimpleQuantity.prototype.value;
    /** @type {?} */
    SimpleQuantity.prototype.unit;
    /** @type {?} */
    SimpleQuantity.prototype.system;
    /** @type {?} */
    SimpleQuantity.prototype.code;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXF1YW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9tb2RlbC90ZXJtaW5vbG9neS9zaW1wbGUtcXVhbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXRDO0lBQW9DLDBDQUFRO0lBQ3hDLHdCQUFZLE1BQVk7O1FBQXhCLFlBQ0ksaUJBQU8sU0FLVjtRQUpHLElBQUksTUFBTTs7Z0JBQ04sS0FBa0IsSUFBQSxLQUFBLGlCQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUEsZ0JBQUEsNEJBQUU7b0JBQWxDLElBQU0sR0FBRyxXQUFBO29CQUNWLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzNCOzs7Ozs7OzthQUFBOztJQUNULENBQUM7SUFLTCxxQkFBQztBQUFELENBQUMsQUFaRCxDQUFvQyxRQUFRLEdBWTNDOzs7O0lBSkcsK0JBQWU7O0lBQ2YsOEJBQWM7O0lBQ2QsZ0NBQWdCOztJQUNoQiw4QkFBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1YW50aXR5IH0gZnJvbSAnLi9xdWFudGl0eSc7XG5cbmV4cG9ydCBjbGFzcyBTaW1wbGVRdWFudGl0eSBleHRlbmRzIFF1YW50aXR5IHtcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2U/OiBhbnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKHNvdXJjZSlcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgdmFsdWU/OiBudW1iZXI7IC8vIGRlY2ltYWwgXHRSZWdleDogKDB8WzEtOV1bMC05XSopKFxcLlswLTldKyk/KFtlRV1bKy1dP1swLTldKyk/XG4gICAgdW5pdD86IHN0cmluZztcbiAgICBzeXN0ZW0/OiBzdHJpbmc7IC8vIHVyaVxuICAgIGNvZGU/OiBzdHJpbmc7IC8vIFJlZ2V4OiBbXlxcc10rKFxcc1teXFxzXSspKlxufVxuIl19
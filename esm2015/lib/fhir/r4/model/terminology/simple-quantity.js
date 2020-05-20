/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Quantity } from './quantity';
export class SimpleQuantity extends Quantity {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        if (source)
            for (const key of Object.keys(source)) {
                this[key] = source[key];
            }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXF1YW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9tb2RlbC90ZXJtaW5vbG9neS9zaW1wbGUtcXVhbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFdEMsTUFBTSxPQUFPLGNBQWUsU0FBUSxRQUFROzs7O0lBQ3hDLFlBQVksTUFBWTtRQUNwQixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksTUFBTTtZQUNOLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMzQjtJQUNULENBQUM7Q0FLSjs7O0lBSkcsK0JBQWU7O0lBQ2YsOEJBQWM7O0lBQ2QsZ0NBQWdCOztJQUNoQiw4QkFBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1YW50aXR5IH0gZnJvbSAnLi9xdWFudGl0eSc7XG5cbmV4cG9ydCBjbGFzcyBTaW1wbGVRdWFudGl0eSBleHRlbmRzIFF1YW50aXR5IHtcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2U/OiBhbnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKHNvdXJjZSlcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgdmFsdWU/OiBudW1iZXI7IC8vIGRlY2ltYWwgXHRSZWdleDogKDB8WzEtOV1bMC05XSopKFxcLlswLTldKyk/KFtlRV1bKy1dP1swLTldKyk/XG4gICAgdW5pdD86IHN0cmluZztcbiAgICBzeXN0ZW0/OiBzdHJpbmc7IC8vIHVyaVxuICAgIGNvZGU/OiBzdHJpbmc7IC8vIFJlZ2V4OiBbXlxcc10rKFxcc1teXFxzXSspKlxufVxuIl19
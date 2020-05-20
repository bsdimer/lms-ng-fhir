/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var FhirNameExtractPipe = /** @class */ (function () {
    function FhirNameExtractPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    FhirNameExtractPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var p = value;
        if (p && p.hasOwnProperty('name') && p.name.length > 0) {
            return p.name[0].given[0] + " " + p.name[0].family;
        }
        return '';
    };
    FhirNameExtractPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'fhirNameExtract',
                },] }
    ];
    return FhirNameExtractPipe;
}());
export { FhirNameExtractPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhpci1wYXRpZW50LW5hbWUtZXh0cmFjdC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9maGlyLXBpcGVzL2ZoaXItcGF0aWVudC1uYW1lLWV4dHJhY3QucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFFbEQ7SUFBQTtJQWFBLENBQUM7Ozs7OztJQVJHLHVDQUFTOzs7OztJQUFULFVBQVUsS0FBVTtRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7OztZQUMxQixDQUFDLEdBQUcsS0FBSztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BELE9BQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFRLENBQUM7U0FDdEQ7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7O2dCQVhKLElBQUksU0FBQztvQkFDRixJQUFJLEVBQUUsaUJBQWlCO2lCQUMxQjs7SUFXRCwwQkFBQztDQUFBLEFBYkQsSUFhQztTQVZZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnZmhpck5hbWVFeHRyYWN0Jyxcbn0pXG5leHBvcnQgY2xhc3MgRmhpck5hbWVFeHRyYWN0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcCA9IHZhbHVlO1xuICAgICAgICBpZiAocCAmJiBwLmhhc093blByb3BlcnR5KCduYW1lJykgJiYgcC5uYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtwLm5hbWVbMF0uZ2l2ZW5bMF19ICR7cC5uYW1lWzBdLmZhbWlseX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbn1cbiJdfQ==
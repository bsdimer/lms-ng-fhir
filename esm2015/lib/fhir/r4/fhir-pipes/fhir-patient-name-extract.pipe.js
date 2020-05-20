/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class FhirNameExtractPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        /** @type {?} */
        const p = value;
        if (p && p.hasOwnProperty('name') && p.name.length > 0) {
            return `${p.name[0].given[0]} ${p.name[0].family}`;
        }
        return '';
    }
}
FhirNameExtractPipe.decorators = [
    { type: Pipe, args: [{
                name: 'fhirNameExtract',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhpci1wYXRpZW50LW5hbWUtZXh0cmFjdC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9maGlyLXBpcGVzL2ZoaXItcGF0aWVudC1uYW1lLWV4dHJhY3QucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFLbEQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBRTVCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsR0FBRyxJQUFXOztjQUMxQixDQUFDLEdBQUcsS0FBSztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BELE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3REO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDOzs7WUFYSixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLGlCQUFpQjthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnZmhpck5hbWVFeHRyYWN0Jyxcbn0pXG5leHBvcnQgY2xhc3MgRmhpck5hbWVFeHRyYWN0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcCA9IHZhbHVlO1xuICAgICAgICBpZiAocCAmJiBwLmhhc093blByb3BlcnR5KCduYW1lJykgJiYgcC5uYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtwLm5hbWVbMF0uZ2l2ZW5bMF19ICR7cC5uYW1lWzBdLmZhbWlseX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbn1cbiJdfQ==
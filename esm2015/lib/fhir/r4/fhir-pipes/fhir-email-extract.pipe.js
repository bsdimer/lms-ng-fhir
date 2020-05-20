/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class FhirEmailExtractPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        /** @type {?} */
        let email = '';
        if (value && value.length > 0) {
            for (let contactPoint of value) {
                if (contactPoint.system === 'email')
                    email = email.concat(contactPoint.value, ', ');
            }
        }
        return email.trim().slice(0, email.length - 2);
    }
}
FhirEmailExtractPipe.decorators = [
    { type: Pipe, args: [{
                name: 'fhirEmailExtract'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhpci1lbWFpbC1leHRyYWN0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sbXMtbmctZmhpci8iLCJzb3VyY2VzIjpbImxpYi9maGlyL3I0L2ZoaXItcGlwZXMvZmhpci1lbWFpbC1leHRyYWN0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBS2xELE1BQU0sT0FBTyxvQkFBb0I7Ozs7OztJQUU3QixTQUFTLENBQUMsS0FBVSxFQUFFLEdBQUcsSUFBVzs7WUFDNUIsS0FBSyxHQUFXLEVBQUU7UUFDdEIsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDM0IsS0FBSyxJQUFJLFlBQVksSUFBSSxLQUFLLEVBQUU7Z0JBQzVCLElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxPQUFPO29CQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDdkY7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7WUFiSixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLGtCQUFrQjthQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnZmhpckVtYWlsRXh0cmFjdCdcbn0pXG5leHBvcnQgY2xhc3MgRmhpckVtYWlsRXh0cmFjdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IHN0cmluZyB7XG4gICAgICAgIGxldCBlbWFpbDogc3RyaW5nID0gJyc7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb250YWN0UG9pbnQgb2YgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29udGFjdFBvaW50LnN5c3RlbSA9PT0gJ2VtYWlsJykgZW1haWwgPSBlbWFpbC5jb25jYXQoY29udGFjdFBvaW50LnZhbHVlLCAnLCAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW1haWwudHJpbSgpLnNsaWNlKDAsIGVtYWlsLmxlbmd0aCAtIDIpO1xuICAgIH1cblxufVxuIl19
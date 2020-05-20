/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class FhirTelecomWebExtractPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        /** @type {?} */
        let url = '';
        if (value && value.length > 0) {
            for (let contactPoint of value) {
                if (contactPoint.system === 'url')
                    url = url.concat(contactPoint.value, ', ');
            }
        }
        return url.trim().slice(0, url.length - 2);
    }
}
FhirTelecomWebExtractPipe.decorators = [
    { type: Pipe, args: [{
                name: 'fhirTelecomWebExtract'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhpci10ZWxlY29tLXdlYi1leHRyYWN0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sbXMtbmctZmhpci8iLCJzb3VyY2VzIjpbImxpYi9maGlyL3I0L2ZoaXItcGlwZXMvZmhpci10ZWxlY29tLXdlYi1leHRyYWN0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyx5QkFBeUI7Ozs7OztJQUVwQyxTQUFTLENBQUMsS0FBVSxFQUFFLEdBQUcsSUFBVzs7WUFDOUIsR0FBRyxHQUFXLEVBQUU7UUFDcEIsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0IsS0FBSyxJQUFJLFlBQVksSUFBSSxLQUFLLEVBQUU7Z0JBQzlCLElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxLQUFLO29CQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDL0U7U0FDRjtRQUNELE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUFiRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLHVCQUF1QjthQUM5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZmhpclRlbGVjb21XZWJFeHRyYWN0J1xufSlcbmV4cG9ydCBjbGFzcyBGaGlyVGVsZWNvbVdlYkV4dHJhY3RQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogc3RyaW5nIHtcbiAgICBsZXQgdXJsOiBzdHJpbmcgPSAnJztcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgY29udGFjdFBvaW50IG9mIHZhbHVlKSB7XG4gICAgICAgIGlmIChjb250YWN0UG9pbnQuc3lzdGVtID09PSAndXJsJykgdXJsID0gdXJsLmNvbmNhdChjb250YWN0UG9pbnQudmFsdWUsICcsICcpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsLnRyaW0oKS5zbGljZSgwLHVybC5sZW5ndGgtMik7XG4gIH1cblxufVxuIl19
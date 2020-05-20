/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var FhirTelecomWebExtractPipe = /** @class */ (function () {
    function FhirTelecomWebExtractPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    FhirTelecomWebExtractPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var e_1, _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var url = '';
        if (value && value.length > 0) {
            try {
                for (var value_1 = tslib_1.__values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                    var contactPoint = value_1_1.value;
                    if (contactPoint.system === 'url')
                        url = url.concat(contactPoint.value, ', ');
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return url.trim().slice(0, url.length - 2);
    };
    FhirTelecomWebExtractPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'fhirTelecomWebExtract'
                },] }
    ];
    return FhirTelecomWebExtractPipe;
}());
export { FhirTelecomWebExtractPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhpci10ZWxlY29tLXdlYi1leHRyYWN0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sbXMtbmctZmhpci8iLCJzb3VyY2VzIjpbImxpYi9maGlyL3I0L2ZoaXItcGlwZXMvZmhpci10ZWxlY29tLXdlYi1leHRyYWN0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRDtJQUFBO0lBZUEsQ0FBQzs7Ozs7O0lBVkMsNkNBQVM7Ozs7O0lBQVQsVUFBVSxLQUFVOztRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7OztZQUM5QixHQUFHLEdBQVcsRUFBRTtRQUNwQixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7Z0JBQzdCLEtBQXlCLElBQUEsVUFBQSxpQkFBQSxLQUFLLENBQUEsNEJBQUEsK0NBQUU7b0JBQTNCLElBQUksWUFBWSxrQkFBQTtvQkFDbkIsSUFBSSxZQUFZLENBQUMsTUFBTSxLQUFLLEtBQUs7d0JBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDL0U7Ozs7Ozs7OztTQUNGO1FBQ0QsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O2dCQWJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsdUJBQXVCO2lCQUM5Qjs7SUFhRCxnQ0FBQztDQUFBLEFBZkQsSUFlQztTQVpZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZmhpclRlbGVjb21XZWJFeHRyYWN0J1xufSlcbmV4cG9ydCBjbGFzcyBGaGlyVGVsZWNvbVdlYkV4dHJhY3RQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogc3RyaW5nIHtcbiAgICBsZXQgdXJsOiBzdHJpbmcgPSAnJztcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgY29udGFjdFBvaW50IG9mIHZhbHVlKSB7XG4gICAgICAgIGlmIChjb250YWN0UG9pbnQuc3lzdGVtID09PSAndXJsJykgdXJsID0gdXJsLmNvbmNhdChjb250YWN0UG9pbnQudmFsdWUsICcsICcpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsLnRyaW0oKS5zbGljZSgwLHVybC5sZW5ndGgtMik7XG4gIH1cblxufVxuIl19
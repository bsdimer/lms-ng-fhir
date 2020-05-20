/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var FhirEmailExtractPipe = /** @class */ (function () {
    function FhirEmailExtractPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    FhirEmailExtractPipe.prototype.transform = /**
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
        var email = '';
        if (value && value.length > 0) {
            try {
                for (var value_1 = tslib_1.__values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                    var contactPoint = value_1_1.value;
                    if (contactPoint.system === 'email')
                        email = email.concat(contactPoint.value, ', ');
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
        return email.trim().slice(0, email.length - 2);
    };
    FhirEmailExtractPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'fhirEmailExtract'
                },] }
    ];
    return FhirEmailExtractPipe;
}());
export { FhirEmailExtractPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhpci1lbWFpbC1leHRyYWN0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sbXMtbmctZmhpci8iLCJzb3VyY2VzIjpbImxpYi9maGlyL3I0L2ZoaXItcGlwZXMvZmhpci1lbWFpbC1leHRyYWN0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUVsRDtJQUFBO0lBZUEsQ0FBQzs7Ozs7O0lBVkcsd0NBQVM7Ozs7O0lBQVQsVUFBVSxLQUFVOztRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7OztZQUM1QixLQUFLLEdBQVcsRUFBRTtRQUN0QixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7Z0JBQzNCLEtBQXlCLElBQUEsVUFBQSxpQkFBQSxLQUFLLENBQUEsNEJBQUEsK0NBQUU7b0JBQTNCLElBQUksWUFBWSxrQkFBQTtvQkFDakIsSUFBSSxZQUFZLENBQUMsTUFBTSxLQUFLLE9BQU87d0JBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDdkY7Ozs7Ozs7OztTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O2dCQWJKLElBQUksU0FBQztvQkFDRixJQUFJLEVBQUUsa0JBQWtCO2lCQUMzQjs7SUFhRCwyQkFBQztDQUFBLEFBZkQsSUFlQztTQVpZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnZmhpckVtYWlsRXh0cmFjdCdcbn0pXG5leHBvcnQgY2xhc3MgRmhpckVtYWlsRXh0cmFjdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IHN0cmluZyB7XG4gICAgICAgIGxldCBlbWFpbDogc3RyaW5nID0gJyc7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb250YWN0UG9pbnQgb2YgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29udGFjdFBvaW50LnN5c3RlbSA9PT0gJ2VtYWlsJykgZW1haWwgPSBlbWFpbC5jb25jYXQoY29udGFjdFBvaW50LnZhbHVlLCAnLCAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW1haWwudHJpbSgpLnNsaWNlKDAsIGVtYWlsLmxlbmd0aCAtIDIpO1xuICAgIH1cblxufVxuIl19
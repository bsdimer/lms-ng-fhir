/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var FhirTelecomPhoneExtract = /** @class */ (function () {
    function FhirTelecomPhoneExtract() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    FhirTelecomPhoneExtract.prototype.transform = /**
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
        var phone = '';
        if (value && value.length > 0) {
            try {
                for (var value_1 = tslib_1.__values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                    var contactPoint = value_1_1.value;
                    if (contactPoint.system === 'phone')
                        phone = phone.concat(contactPoint.value, ', ');
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
        return phone.trim().slice(0, phone.length - 2);
    };
    FhirTelecomPhoneExtract.decorators = [
        { type: Pipe, args: [{
                    name: 'fhirTelecomPhoneExtract'
                },] }
    ];
    return FhirTelecomPhoneExtract;
}());
export { FhirTelecomPhoneExtract };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhpci10ZWxlY29tLXBob25lLWV4dHJhY3QucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xtcy1uZy1maGlyLyIsInNvdXJjZXMiOlsibGliL2ZoaXIvcjQvZmhpci1waXBlcy9maGlyLXRlbGVjb20tcGhvbmUtZXh0cmFjdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFFbEQ7SUFBQTtJQWVBLENBQUM7Ozs7OztJQVZDLDJDQUFTOzs7OztJQUFULFVBQVUsS0FBVTs7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOzs7WUFDOUIsS0FBSyxHQUFXLEVBQUU7UUFDdEIsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2dCQUM3QixLQUF5QixJQUFBLFVBQUEsaUJBQUEsS0FBSyxDQUFBLDRCQUFBLCtDQUFFO29CQUEzQixJQUFJLFlBQVksa0JBQUE7b0JBQ25CLElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxPQUFPO3dCQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ3JGOzs7Ozs7Ozs7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDOztnQkFiRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLHlCQUF5QjtpQkFDaEM7O0lBYUQsOEJBQUM7Q0FBQSxBQWZELElBZUM7U0FaWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdmaGlyVGVsZWNvbVBob25lRXh0cmFjdCdcbn0pXG5leHBvcnQgY2xhc3MgRmhpclRlbGVjb21QaG9uZUV4dHJhY3QgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgLi4uYXJnczogYW55W10pOiBzdHJpbmcge1xuICAgIGxldCBwaG9uZTogc3RyaW5nID0gJyc7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGNvbnRhY3RQb2ludCBvZiB2YWx1ZSkge1xuICAgICAgICBpZiAoY29udGFjdFBvaW50LnN5c3RlbSA9PT0gJ3Bob25lJykgcGhvbmUgPSBwaG9uZS5jb25jYXQoY29udGFjdFBvaW50LnZhbHVlLCAnLCAnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBob25lLnRyaW0oKS5zbGljZSgwLHBob25lLmxlbmd0aC0yKTtcbiAgfVxuXG59XG4iXX0=
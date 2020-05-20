/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class FhirTelecomPhoneExtract {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        /** @type {?} */
        let phone = '';
        if (value && value.length > 0) {
            for (let contactPoint of value) {
                if (contactPoint.system === 'phone')
                    phone = phone.concat(contactPoint.value, ', ');
            }
        }
        return phone.trim().slice(0, phone.length - 2);
    }
}
FhirTelecomPhoneExtract.decorators = [
    { type: Pipe, args: [{
                name: 'fhirTelecomPhoneExtract'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhpci10ZWxlY29tLXBob25lLWV4dHJhY3QucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xtcy1uZy1maGlyLyIsInNvdXJjZXMiOlsibGliL2ZoaXIvcjQvZmhpci1waXBlcy9maGlyLXRlbGVjb20tcGhvbmUtZXh0cmFjdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUtsRCxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFFbEMsU0FBUyxDQUFDLEtBQVUsRUFBRSxHQUFHLElBQVc7O1lBQzlCLEtBQUssR0FBVyxFQUFFO1FBQ3RCLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLEtBQUssSUFBSSxZQUFZLElBQUksS0FBSyxFQUFFO2dCQUM5QixJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssT0FBTztvQkFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3JGO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O1lBYkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSx5QkFBeUI7YUFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdmaGlyVGVsZWNvbVBob25lRXh0cmFjdCdcbn0pXG5leHBvcnQgY2xhc3MgRmhpclRlbGVjb21QaG9uZUV4dHJhY3QgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgLi4uYXJnczogYW55W10pOiBzdHJpbmcge1xuICAgIGxldCBwaG9uZTogc3RyaW5nID0gJyc7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGNvbnRhY3RQb2ludCBvZiB2YWx1ZSkge1xuICAgICAgICBpZiAoY29udGFjdFBvaW50LnN5c3RlbSA9PT0gJ3Bob25lJykgcGhvbmUgPSBwaG9uZS5jb25jYXQoY29udGFjdFBvaW50LnZhbHVlLCAnLCAnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBob25lLnRyaW0oKS5zbGljZSgwLHBob25lLmxlbmd0aC0yKTtcbiAgfVxuXG59XG4iXX0=
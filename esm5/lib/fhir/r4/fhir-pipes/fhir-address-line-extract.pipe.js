/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var FhirAddressLineExtract = /** @class */ (function () {
    function FhirAddressLineExtract() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    FhirAddressLineExtract.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value && value[0] && value[0].line && value[0].line[0])
            return value[0].line[0];
        return '';
    };
    FhirAddressLineExtract.decorators = [
        { type: Pipe, args: [{
                    name: 'fhirAddressLineExtract',
                },] }
    ];
    return FhirAddressLineExtract;
}());
export { FhirAddressLineExtract };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhpci1hZGRyZXNzLWxpbmUtZXh0cmFjdC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9maGlyLXBpcGVzL2ZoaXItYWRkcmVzcy1saW5lLWV4dHJhY3QucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFFbEQ7SUFBQTtJQVVBLENBQUM7Ozs7OztJQUxHLDBDQUFTOzs7OztJQUFULFVBQVUsS0FBVTtRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7O1FBQ2hDLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBUkosSUFBSSxTQUFDO29CQUNGLElBQUksRUFBRSx3QkFBd0I7aUJBQ2pDOztJQVFELDZCQUFDO0NBQUEsQUFWRCxJQVVDO1NBUFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdmaGlyQWRkcmVzc0xpbmVFeHRyYWN0Jyxcbn0pXG5leHBvcnQgY2xhc3MgRmhpckFkZHJlc3NMaW5lRXh0cmFjdCBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlWzBdICYmIHZhbHVlWzBdLmxpbmUgJiYgdmFsdWVbMF0ubGluZVswXSkgcmV0dXJuIHZhbHVlWzBdLmxpbmVbMF07XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbn1cbiJdfQ==
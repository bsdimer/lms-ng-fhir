/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class FhirAddressLineExtract {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        if (value && value[0] && value[0].line && value[0].line[0])
            return value[0].line[0];
        return '';
    }
}
FhirAddressLineExtract.decorators = [
    { type: Pipe, args: [{
                name: 'fhirAddressLineExtract',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhpci1hZGRyZXNzLWxpbmUtZXh0cmFjdC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9maGlyLXBpcGVzL2ZoaXItYWRkcmVzcy1saW5lLWV4dHJhY3QucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFLbEQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7O0lBRS9CLFNBQVMsQ0FBQyxLQUFVLEVBQUUsR0FBRyxJQUFXO1FBQ2hDLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7O1lBUkosSUFBSSxTQUFDO2dCQUNGLElBQUksRUFBRSx3QkFBd0I7YUFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ2ZoaXJBZGRyZXNzTGluZUV4dHJhY3QnLFxufSlcbmV4cG9ydCBjbGFzcyBGaGlyQWRkcmVzc0xpbmVFeHRyYWN0IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgLi4uYXJnczogYW55W10pOiBzdHJpbmcge1xuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWVbMF0gJiYgdmFsdWVbMF0ubGluZSAmJiB2YWx1ZVswXS5saW5lWzBdKSByZXR1cm4gdmFsdWVbMF0ubGluZVswXTtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxufVxuIl19
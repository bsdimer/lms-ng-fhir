/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class FhirContactExtractPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        if (value && value.contact && value.contact[0] && value.contact[0].name) {
            return `${value.contact[0].name.prefix} ${value.contact[0].name.given[0]} ${value.contact[0].name.family}`;
        }
        return '';
    }
}
FhirContactExtractPipe.decorators = [
    { type: Pipe, args: [{
                name: 'fhirContactExtract'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhpci1jb250YWN0LWV4dHJhY3QucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xtcy1uZy1maGlyLyIsInNvdXJjZXMiOlsibGliL2ZoaXIvcjQvZmhpci1waXBlcy9maGlyLWNvbnRhY3QtZXh0cmFjdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRCxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7SUFFakMsU0FBUyxDQUFDLEtBQVUsRUFBRSxHQUFHLElBQVc7UUFDbEMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO1lBQ3ZFLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzVHO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7WUFWRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLG9CQUFvQjthQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZmhpckNvbnRhY3RFeHRyYWN0J1xufSlcbmV4cG9ydCBjbGFzcyBGaGlyQ29udGFjdEV4dHJhY3RQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogc3RyaW5nIHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUuY29udGFjdCAmJiB2YWx1ZS5jb250YWN0WzBdICYmIHZhbHVlLmNvbnRhY3RbMF0ubmFtZSkge1xuICAgICAgcmV0dXJuIGAke3ZhbHVlLmNvbnRhY3RbMF0ubmFtZS5wcmVmaXh9ICR7dmFsdWUuY29udGFjdFswXS5uYW1lLmdpdmVuWzBdfSAke3ZhbHVlLmNvbnRhY3RbMF0ubmFtZS5mYW1pbHl9YDtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbn1cbiJdfQ==
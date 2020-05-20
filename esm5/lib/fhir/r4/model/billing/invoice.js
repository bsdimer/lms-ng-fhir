/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainResource } from '../domain-resource';
var Invoice = /** @class */ (function (_super) {
    tslib_1.__extends(Invoice, _super);
    function Invoice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'Invoice';
        return _this;
    }
    return Invoice;
}(DomainResource));
export { Invoice };
if (false) {
    /** @type {?} */
    Invoice.prototype.resourceType;
    /** @type {?} */
    Invoice.prototype.identifier;
    /** @type {?} */
    Invoice.prototype.status;
    /** @type {?} */
    Invoice.prototype.cancelledReason;
    /** @type {?} */
    Invoice.prototype.type;
    /** @type {?} */
    Invoice.prototype.subject;
    /** @type {?} */
    Invoice.prototype.recipient;
    /** @type {?} */
    Invoice.prototype.date;
    /** @type {?} */
    Invoice.prototype.participant;
    /** @type {?} */
    Invoice.prototype.issuer;
    /** @type {?} */
    Invoice.prototype.account;
    /** @type {?} */
    Invoice.prototype.lineItem;
    /** @type {?} */
    Invoice.prototype.totalPriceComponent;
    /** @type {?} */
    Invoice.prototype.totalNet;
    /** @type {?} */
    Invoice.prototype.totalGross;
    /** @type {?} */
    Invoice.prototype.paymentTerms;
    /** @type {?} */
    Invoice.prototype.note;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52b2ljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xtcy1uZy1maGlyLyIsInNvdXJjZXMiOlsibGliL2ZoaXIvcjQvbW9kZWwvYmlsbGluZy9pbnZvaWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBTWxEO0lBQTZCLG1DQUFjO0lBQTNDO1FBQUEscUVBK0JDO1FBOUJHLGtCQUFZLEdBQVcsU0FBUyxDQUFDOztJQThCckMsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBL0JELENBQTZCLGNBQWMsR0ErQjFDOzs7O0lBOUJHLCtCQUFpQzs7SUFDakMsNkJBQTBCOztJQUMxQix5QkFBMkU7O0lBQzNFLGtDQUF5Qjs7SUFDekIsdUJBQXVCOztJQUN2QiwwQkFBb0I7O0lBQ3BCLDRCQUFzQjs7SUFDdEIsdUJBQVk7O0lBQ1osOEJBR0k7O0lBQ0oseUJBQW1COztJQUNuQiwwQkFBb0I7O0lBQ3BCLDJCQVVJOztJQUNKLHNDQUFrQzs7SUFDbEMsMkJBQWlCOztJQUNqQiw2QkFBbUI7O0lBQ25CLCtCQUFzQjs7SUFDdEIsdUJBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb21haW5SZXNvdXJjZX0gZnJvbSAnLi4vZG9tYWluLXJlc291cmNlJztcbmltcG9ydCB7Q29kZWFibGVDb25jZXB0LCBJZGVudGlmaWVyfSBmcm9tICcuLi90ZXJtaW5vbG9neSc7XG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSAnLi4vcmVmZXJlbmNlJztcbmltcG9ydCB7TW9uZXl9IGZyb20gJy4uL21vbmV5JztcbmltcG9ydCB7QW5ub3RhdGlvbn0gZnJvbSAnLi4vd29ya2Zsb3cnO1xuXG5leHBvcnQgY2xhc3MgSW52b2ljZSBleHRlbmRzIERvbWFpblJlc291cmNlIHtcbiAgICByZXNvdXJjZVR5cGU6IHN0cmluZyA9ICdJbnZvaWNlJztcbiAgICBpZGVudGlmaWVyPzogSWRlbnRpZmllcltdO1xuICAgIHN0YXR1czogJ2RyYWZ0JyB8ICdpc3N1ZWQnIHwgJ2JhbGFuY2VkJyB8ICdjYW5jZWxsZWQnIHwgJ2VudGVyZWQtaW4tZXJyb3InO1xuICAgIGNhbmNlbGxlZFJlYXNvbj86IHN0cmluZztcbiAgICB0eXBlPzogQ29kZWFibGVDb25jZXB0O1xuICAgIHN1YmplY3Q/OiBSZWZlcmVuY2U7XG4gICAgcmVjaXBpZW50PzogUmVmZXJlbmNlO1xuICAgIGRhdGU/OiBEYXRlO1xuICAgIHBhcnRpY2lwYW50PzogeyAvLyBCYWNrYm9uZUVsZW1lbnRcbiAgICAgICAgcm9sZT86IENvZGVhYmxlQ29uY2VwdDtcbiAgICAgICAgYWN0b3I6IFJlZmVyZW5jZTtcbiAgICB9W107XG4gICAgaXNzdWVyPzogUmVmZXJlbmNlO1xuICAgIGFjY291bnQ/OiBSZWZlcmVuY2U7XG4gICAgbGluZUl0ZW0/OiB7IC8vIEJhY2tib25lRWxlbWVudFxuICAgICAgICBzZXF1ZW5jZT86IG51bWJlcjtcbiAgICAgICAgY2hhcmdlSXRlbVJlZmVyZW5jZTogUmVmZXJlbmNlO1xuICAgICAgICBjaGFyZ2VJdGVtQ29kZWFibGVDb25jZXB0OiBDb2RlYWJsZUNvbmNlcHQ7XG4gICAgICAgIHByaWNlQ29tcG9uZW50PzogeyAvLyBCYWNrYm9uZUVsZW1lbnRcbiAgICAgICAgICAgIHR5cGU6ICdiYXNlJyB8ICdzdXJjaGFyZ2UnIHwgJ2RlZHVjdGlvbicgfCAnZGlzY291bnQnIHwgJ3RheCcgfCAnaW5mb3JtYXRpb25hbCc7XG4gICAgICAgICAgICBjb2RlPzogQ29kZWFibGVDb25jZXB0O1xuICAgICAgICAgICAgZmFjdG9yPzogbnVtYmVyO1xuICAgICAgICAgICAgYW1vdW50PzogTW9uZXk7XG4gICAgICAgIH1bXTtcbiAgICB9W107XG4gICAgdG90YWxQcmljZUNvbXBvbmVudD86IFJlZmVyZW5jZVtdO1xuICAgIHRvdGFsTmV0PzogTW9uZXk7XG4gICAgdG90YWxHcm9zcz86IE1vbmV5O1xuICAgIHBheW1lbnRUZXJtcz86IHN0cmluZztcbiAgICBub3RlPzogQW5ub3RhdGlvbltdO1xufVxuIl19
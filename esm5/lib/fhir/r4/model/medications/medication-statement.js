/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainResource } from '../domain-resource';
var MedicationStatement = /** @class */ (function (_super) {
    tslib_1.__extends(MedicationStatement, _super);
    function MedicationStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'MedicationStatement';
        return _this;
    }
    return MedicationStatement;
}(DomainResource));
export { MedicationStatement };
if (false) {
    /** @type {?} */
    MedicationStatement.prototype.resourceType;
    /** @type {?} */
    MedicationStatement.prototype.identifier;
    /** @type {?} */
    MedicationStatement.prototype.basedOn;
    /** @type {?} */
    MedicationStatement.prototype.partOf;
    /** @type {?} */
    MedicationStatement.prototype.status;
    /** @type {?} */
    MedicationStatement.prototype.statusReason;
    /** @type {?} */
    MedicationStatement.prototype.category;
    /** @type {?} */
    MedicationStatement.prototype.medicationCodeableConcept;
    /** @type {?} */
    MedicationStatement.prototype.medicationReference;
    /** @type {?} */
    MedicationStatement.prototype.subject;
    /** @type {?} */
    MedicationStatement.prototype.context;
    /** @type {?} */
    MedicationStatement.prototype.effectiveDateTime;
    /** @type {?} */
    MedicationStatement.prototype.effectivePeriod;
    /** @type {?} */
    MedicationStatement.prototype.dateAsserted;
    /** @type {?} */
    MedicationStatement.prototype.informationSource;
    /** @type {?} */
    MedicationStatement.prototype.derivedFrom;
    /** @type {?} */
    MedicationStatement.prototype.reasonCode;
    /** @type {?} */
    MedicationStatement.prototype.reasonReference;
    /** @type {?} */
    MedicationStatement.prototype.note;
    /** @type {?} */
    MedicationStatement.prototype.dosage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWNhdGlvbi1zdGF0ZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sbXMtbmctZmhpci8iLCJzb3VyY2VzIjpbImxpYi9maGlyL3I0L21vZGVsL21lZGljYXRpb25zL21lZGljYXRpb24tc3RhdGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBS2xEO0lBQXlDLCtDQUFjO0lBQXZEO1FBQUEscUVBcUJDO1FBcEJHLGtCQUFZLEdBQVcscUJBQXFCLENBQUM7O0lBb0JqRCxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUFDLEFBckJELENBQXlDLGNBQWMsR0FxQnREOzs7O0lBcEJHLDJDQUE2Qzs7SUFDN0MseUNBQTBCOztJQUMxQixzQ0FBc0I7O0lBQ3RCLHFDQUFxQjs7SUFDckIscUNBQW1IOztJQUNuSCwyQ0FBaUM7O0lBQ2pDLHVDQUEyQjs7SUFDM0Isd0RBQTJDOztJQUMzQyxrREFBK0I7O0lBQy9CLHNDQUFtQjs7SUFDbkIsc0NBQW9COztJQUNwQixnREFBd0I7O0lBQ3hCLDhDQUF5Qjs7SUFDekIsMkNBQW9COztJQUNwQixnREFBOEI7O0lBQzlCLDBDQUEwQjs7SUFDMUIseUNBQStCOztJQUMvQiw4Q0FBOEI7O0lBQzlCLG1DQUFvQjs7SUFDcEIscUNBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb21haW5SZXNvdXJjZX0gZnJvbSAnLi4vZG9tYWluLXJlc291cmNlJztcbmltcG9ydCB7Q29kZWFibGVDb25jZXB0LCBJZGVudGlmaWVyLCBQZXJpb2QsIFJlZmVyZW5jZX0gZnJvbSAnLi4nO1xuaW1wb3J0IHtBbm5vdGF0aW9ufSBmcm9tICcuLi93b3JrZmxvdy9hbm5vdGF0aW9uJztcbmltcG9ydCB7RG9zYWdlfSBmcm9tICcuL2Rvc2FnZSc7XG5cbmV4cG9ydCBjbGFzcyBNZWRpY2F0aW9uU3RhdGVtZW50IGV4dGVuZHMgRG9tYWluUmVzb3VyY2Uge1xuICAgIHJlc291cmNlVHlwZTogc3RyaW5nID0gJ01lZGljYXRpb25TdGF0ZW1lbnQnO1xuICAgIGlkZW50aWZpZXI/OiBJZGVudGlmaWVyW107XG4gICAgYmFzZWRPbj86IFJlZmVyZW5jZVtdOyAvLyAoTWVkaWNhdGlvblJlcXVlc3QgfCBDYXJlUGxhbiB8IFNlcnZpY2VSZXF1ZXN0KVxuICAgIHBhcnRPZj86IFJlZmVyZW5jZVtdOyAvLyAoTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9uIHwgTWVkaWNhdGlvbkRpc3BlbnNlIHwgTWVkaWNhdGlvblN0YXRlbWVudCB8IFByb2NlZHVyZSB8IE9ic2VydmF0aW9uKVxuICAgIHN0YXR1czogJ2FjdGl2ZScgfCAnY29tcGxldGVkJyB8ICdlbnRlcmVkLWluLWVycm9yJyB8ICdpbnRlbmRlZCcgfCAnc3RvcHBlZCcgfCAnb24taG9sZCcgfCAndW5rbm93bicgfCAnbm90LXRha2VuJztcbiAgICBzdGF0dXNSZWFzb24/OiBDb2RlYWJsZUNvbmNlcHRbXTtcbiAgICBjYXRlZ29yeT86IENvZGVhYmxlQ29uY2VwdDtcbiAgICBtZWRpY2F0aW9uQ29kZWFibGVDb25jZXB0OiBDb2RlYWJsZUNvbmNlcHQ7XG4gICAgbWVkaWNhdGlvblJlZmVyZW5jZTogUmVmZXJlbmNlOyAvLyAoTWVkaWNhdGlvbilcbiAgICBzdWJqZWN0OiBSZWZlcmVuY2U7IC8vIChQYXRpZW50IHwgR3JvdXApXG4gICAgY29udGV4dD86IFJlZmVyZW5jZTsgLy8gKEVuY291bnRlciB8IEVwaXNvZGVPZkNhcmUpXG4gICAgZWZmZWN0aXZlRGF0ZVRpbWU6IERhdGU7XG4gICAgZWZmZWN0aXZlUGVyaW9kPzogUGVyaW9kO1xuICAgIGRhdGVBc3NlcnRlZD86IERhdGU7XG4gICAgaW5mb3JtYXRpb25Tb3VyY2U/OiBSZWZlcmVuY2U7IC8vIChQYXRpZW50IHwgUHJhY3RpdGlvbmVyIHwgUHJhY3RpdGlvbmVyUm9sZSB8IFJlbGF0ZWRQZXJzb24gfCBPcmdhbml6YXRpb24pXG4gICAgZGVyaXZlZEZyb20/OiBSZWZlcmVuY2VbXTsgLy8gKEFueSlcbiAgICByZWFzb25Db2RlPzogQ29kZWFibGVDb25jZXB0W107XG4gICAgcmVhc29uUmVmZXJlbmNlPzogUmVmZXJlbmNlW107IC8vIChDb25kaXRpb24gfCBPYnNlcnZhdGlvbiB8IERpYWdub3N0aWNSZXBvcnQpXG4gICAgbm90ZT86IEFubm90YXRpb25bXTtcbiAgICBkb3NhZ2U/OiBEb3NhZ2VbXTtcbn1cbiJdfQ==
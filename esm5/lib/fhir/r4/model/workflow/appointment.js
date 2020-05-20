/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainResource } from '../domain-resource';
var Appointment = /** @class */ (function (_super) {
    tslib_1.__extends(Appointment, _super);
    function Appointment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'Appointment';
        return _this;
    }
    return Appointment;
}(DomainResource));
export { Appointment };
if (false) {
    /** @type {?} */
    Appointment.prototype.resourceType;
    /** @type {?} */
    Appointment.prototype.identifier;
    /** @type {?} */
    Appointment.prototype.status;
    /** @type {?} */
    Appointment.prototype.cancelationReason;
    /** @type {?} */
    Appointment.prototype.serviceCategory;
    /** @type {?} */
    Appointment.prototype.serviceType;
    /** @type {?} */
    Appointment.prototype.specialty;
    /** @type {?} */
    Appointment.prototype.appointmentType;
    /** @type {?} */
    Appointment.prototype.reasonCode;
    /** @type {?} */
    Appointment.prototype.reasonReference;
    /** @type {?} */
    Appointment.prototype.priority;
    /** @type {?} */
    Appointment.prototype.description;
    /** @type {?} */
    Appointment.prototype.supportingInformation;
    /** @type {?} */
    Appointment.prototype.start;
    /** @type {?} */
    Appointment.prototype.end;
    /** @type {?} */
    Appointment.prototype.minutesDuration;
    /** @type {?} */
    Appointment.prototype.slot;
    /** @type {?} */
    Appointment.prototype.created;
    /** @type {?} */
    Appointment.prototype.comment;
    /** @type {?} */
    Appointment.prototype.patientInstruction;
    /** @type {?} */
    Appointment.prototype.basedOn;
    /** @type {?} */
    Appointment.prototype.participant;
    /** @type {?} */
    Appointment.prototype.requestedPeriod;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludG1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sbXMtbmctZmhpci8iLCJzb3VyY2VzIjpbImxpYi9maGlyL3I0L21vZGVsL3dvcmtmbG93L2FwcG9pbnRtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBR2xEO0lBQWlDLHVDQUFjO0lBQS9DO1FBQUEscUVBK0JDO1FBOUJHLGtCQUFZLEdBQVcsYUFBYSxDQUFDOztJQThCekMsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQS9CRCxDQUFpQyxjQUFjLEdBK0I5Qzs7OztJQTlCRyxtQ0FBcUM7O0lBQ3JDLGlDQUEwQjs7SUFDMUIsNkJBQThJOztJQUM5SSx3Q0FBb0M7O0lBQ3BDLHNDQUFvQzs7SUFDcEMsa0NBQWdDOztJQUNoQyxnQ0FBOEI7O0lBQzlCLHNDQUFrQzs7SUFDbEMsaUNBQStCOztJQUMvQixzQ0FBOEI7O0lBQzlCLCtCQUFrQjs7SUFDbEIsa0NBQXFCOztJQUNyQiw0Q0FBb0M7O0lBQ3BDLDRCQUFhOztJQUNiLDBCQUFXOztJQUNYLHNDQUF5Qjs7SUFDekIsMkJBQW1COztJQUNuQiw4QkFBZTs7SUFDZiw4QkFBaUI7O0lBQ2pCLHlDQUE0Qjs7SUFDNUIsOEJBQXNCOztJQUN0QixrQ0FNSTs7SUFDSixzQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RvbWFpblJlc291cmNlfSBmcm9tICcuLi9kb21haW4tcmVzb3VyY2UnO1xuaW1wb3J0IHtDb2RlYWJsZUNvbmNlcHQsIElkZW50aWZpZXIsIFBlcmlvZCwgUmVmZXJlbmNlfSBmcm9tICcuLic7XG5cbmV4cG9ydCBjbGFzcyBBcHBvaW50bWVudCBleHRlbmRzIERvbWFpblJlc291cmNlIHtcbiAgICByZXNvdXJjZVR5cGU6IHN0cmluZyA9ICdBcHBvaW50bWVudCc7XG4gICAgaWRlbnRpZmllcj86IElkZW50aWZpZXJbXTtcbiAgICBzdGF0dXM6ICdwcm9wb3NlZCcgfCAncGVuZGluZycgfCAnYm9va2VkJyB8ICdhcnJpdmVkJyB8ICdmdWxmaWxsZWQnIHwgJ2NhbmNlbGxlZCcgfCAnbm9zaG93JyB8ICdlbnRlcmVkLWluLWVycm9yJyB8ICdjaGVja2VkLWluJyB8ICd3YWl0bGlzdCc7XG4gICAgY2FuY2VsYXRpb25SZWFzb24/OiBDb2RlYWJsZUNvbmNlcHQ7XG4gICAgc2VydmljZUNhdGVnb3J5PzogQ29kZWFibGVDb25jZXB0W107XG4gICAgc2VydmljZVR5cGU/OiBDb2RlYWJsZUNvbmNlcHRbXTtcbiAgICBzcGVjaWFsdHk/OiBDb2RlYWJsZUNvbmNlcHRbXTtcbiAgICBhcHBvaW50bWVudFR5cGU/OiBDb2RlYWJsZUNvbmNlcHQ7XG4gICAgcmVhc29uQ29kZT86IENvZGVhYmxlQ29uY2VwdFtdO1xuICAgIHJlYXNvblJlZmVyZW5jZT86IFJlZmVyZW5jZVtdOyAvLyAoQ29uZGl0aW9uIHwgUHJvY2VkdXJlIHwgT2JzZXJ2YXRpb24gfCBJbW11bml6YXRpb25SZWNvbW1lbmRhdGlvbilcbiAgICBwcmlvcml0eT86IG51bWJlcjsgLy8gdW5zaWduZWRJbnQgWzBdfChbMS05XVswLTldKilcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICBzdXBwb3J0aW5nSW5mb3JtYXRpb24/OiBSZWZlcmVuY2VbXTsgLy8gKEFueSlcbiAgICBzdGFydD86IERhdGU7IC8vIGluc3RhbnQgUmVnZXg6IChbMC05XShbMC05XShbMC05XVsxLTldfFsxLTldMCl8WzEtOV0wMCl8WzEtOV0wMDApLSgwWzEtOV18MVswLTJdKS0oMFsxLTldfFsxLTJdWzAtOV18M1swLTFdKVQoWzAxXVswLTldfDJbMC0zXSk6WzAtNV1bMC05XTooWzAtNV1bMC05XXw2MCkoXFwuWzAtOV0rKT8oWnwoXFwrfC0pKCgwWzAtOV18MVswLTNdKTpbMC01XVswLTldfDE0OjAwKSlcbiAgICBlbmQ/OiBEYXRlOyAvLyBpbnN0YW50XG4gICAgbWludXRlc0R1cmF0aW9uPzogbnVtYmVyOyAvLyBwb3NpdGl2ZUludFxuICAgIHNsb3Q/OiBSZWZlcmVuY2VbXTsgLy8gKFNsb3QpXG4gICAgY3JlYXRlZD86IERhdGU7XG4gICAgY29tbWVudD86IHN0cmluZztcbiAgICBwYXRpZW50SW5zdHJ1Y3Rpb24/OiBzdHJpbmc7XG4gICAgYmFzZWRPbj86IFJlZmVyZW5jZVtdOyAvLyAoU2VydmljZVJlcXVlc3QpXG4gICAgcGFydGljaXBhbnQ6IHsgLy8gQmFja2JvbmVFbGVtZW50XG4gICAgICAgIHR5cGU/OiBDb2RlYWJsZUNvbmNlcHRbXTtcbiAgICAgICAgYWN0b3I/OiBSZWZlcmVuY2U7IC8vIChQYXRpZW50IHwgUHJhY3RpdGlvbmVyIHwgUHJhY3RpdGlvbmVyUm9sZSB8IFJlbGF0ZWRQZXJzb24gfCBEZXZpY2UgfCBIZWFsdGhjYXJlU2VydmljZSB8IExvY2F0aW9uKVxuICAgICAgICByZXF1aXJlZD86ICdyZXF1aXJlZCcgfCAnb3B0aW9uYWwnIHwgJ2luZm9ybWF0aW9uLW9ubHknO1xuICAgICAgICBzdGF0dXM6ICdhY2NlcHRlZCcgfCAnZGVjbGluZWQnIHwgJ3RlbnRhdGl2ZScgfCAnbmVlZHMtYWN0aW9uJztcbiAgICAgICAgcGVyaW9kPzogUGVyaW9kO1xuICAgIH1bXTtcbiAgICByZXF1ZXN0ZWRQZXJpb2Q/OiBQZXJpb2RbXTtcblxufVxuIl19
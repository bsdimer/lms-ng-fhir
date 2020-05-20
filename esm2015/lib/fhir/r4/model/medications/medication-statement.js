/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainResource } from '../domain-resource';
export class MedicationStatement extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'MedicationStatement';
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWNhdGlvbi1zdGF0ZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sbXMtbmctZmhpci8iLCJzb3VyY2VzIjpbImxpYi9maGlyL3I0L21vZGVsL21lZGljYXRpb25zL21lZGljYXRpb24tc3RhdGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFLbEQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGNBQWM7SUFBdkQ7O1FBQ0ksaUJBQVksR0FBVyxxQkFBcUIsQ0FBQztJQW9CakQsQ0FBQztDQUFBOzs7SUFwQkcsMkNBQTZDOztJQUM3Qyx5Q0FBMEI7O0lBQzFCLHNDQUFzQjs7SUFDdEIscUNBQXFCOztJQUNyQixxQ0FBbUg7O0lBQ25ILDJDQUFpQzs7SUFDakMsdUNBQTJCOztJQUMzQix3REFBMkM7O0lBQzNDLGtEQUErQjs7SUFDL0Isc0NBQW1COztJQUNuQixzQ0FBb0I7O0lBQ3BCLGdEQUF3Qjs7SUFDeEIsOENBQXlCOztJQUN6QiwyQ0FBb0I7O0lBQ3BCLGdEQUE4Qjs7SUFDOUIsMENBQTBCOztJQUMxQix5Q0FBK0I7O0lBQy9CLDhDQUE4Qjs7SUFDOUIsbUNBQW9COztJQUNwQixxQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RvbWFpblJlc291cmNlfSBmcm9tICcuLi9kb21haW4tcmVzb3VyY2UnO1xuaW1wb3J0IHtDb2RlYWJsZUNvbmNlcHQsIElkZW50aWZpZXIsIFBlcmlvZCwgUmVmZXJlbmNlfSBmcm9tICcuLic7XG5pbXBvcnQge0Fubm90YXRpb259IGZyb20gJy4uL3dvcmtmbG93L2Fubm90YXRpb24nO1xuaW1wb3J0IHtEb3NhZ2V9IGZyb20gJy4vZG9zYWdlJztcblxuZXhwb3J0IGNsYXNzIE1lZGljYXRpb25TdGF0ZW1lbnQgZXh0ZW5kcyBEb21haW5SZXNvdXJjZSB7XG4gICAgcmVzb3VyY2VUeXBlOiBzdHJpbmcgPSAnTWVkaWNhdGlvblN0YXRlbWVudCc7XG4gICAgaWRlbnRpZmllcj86IElkZW50aWZpZXJbXTtcbiAgICBiYXNlZE9uPzogUmVmZXJlbmNlW107IC8vIChNZWRpY2F0aW9uUmVxdWVzdCB8IENhcmVQbGFuIHwgU2VydmljZVJlcXVlc3QpXG4gICAgcGFydE9mPzogUmVmZXJlbmNlW107IC8vIChNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb24gfCBNZWRpY2F0aW9uRGlzcGVuc2UgfCBNZWRpY2F0aW9uU3RhdGVtZW50IHwgUHJvY2VkdXJlIHwgT2JzZXJ2YXRpb24pXG4gICAgc3RhdHVzOiAnYWN0aXZlJyB8ICdjb21wbGV0ZWQnIHwgJ2VudGVyZWQtaW4tZXJyb3InIHwgJ2ludGVuZGVkJyB8ICdzdG9wcGVkJyB8ICdvbi1ob2xkJyB8ICd1bmtub3duJyB8ICdub3QtdGFrZW4nO1xuICAgIHN0YXR1c1JlYXNvbj86IENvZGVhYmxlQ29uY2VwdFtdO1xuICAgIGNhdGVnb3J5PzogQ29kZWFibGVDb25jZXB0O1xuICAgIG1lZGljYXRpb25Db2RlYWJsZUNvbmNlcHQ6IENvZGVhYmxlQ29uY2VwdDtcbiAgICBtZWRpY2F0aW9uUmVmZXJlbmNlOiBSZWZlcmVuY2U7IC8vIChNZWRpY2F0aW9uKVxuICAgIHN1YmplY3Q6IFJlZmVyZW5jZTsgLy8gKFBhdGllbnQgfCBHcm91cClcbiAgICBjb250ZXh0PzogUmVmZXJlbmNlOyAvLyAoRW5jb3VudGVyIHwgRXBpc29kZU9mQ2FyZSlcbiAgICBlZmZlY3RpdmVEYXRlVGltZTogRGF0ZTtcbiAgICBlZmZlY3RpdmVQZXJpb2Q/OiBQZXJpb2Q7XG4gICAgZGF0ZUFzc2VydGVkPzogRGF0ZTtcbiAgICBpbmZvcm1hdGlvblNvdXJjZT86IFJlZmVyZW5jZTsgLy8gKFBhdGllbnQgfCBQcmFjdGl0aW9uZXIgfCBQcmFjdGl0aW9uZXJSb2xlIHwgUmVsYXRlZFBlcnNvbiB8IE9yZ2FuaXphdGlvbilcbiAgICBkZXJpdmVkRnJvbT86IFJlZmVyZW5jZVtdOyAvLyAoQW55KVxuICAgIHJlYXNvbkNvZGU/OiBDb2RlYWJsZUNvbmNlcHRbXTtcbiAgICByZWFzb25SZWZlcmVuY2U/OiBSZWZlcmVuY2VbXTsgLy8gKENvbmRpdGlvbiB8IE9ic2VydmF0aW9uIHwgRGlhZ25vc3RpY1JlcG9ydClcbiAgICBub3RlPzogQW5ub3RhdGlvbltdO1xuICAgIGRvc2FnZT86IERvc2FnZVtdO1xufVxuIl19
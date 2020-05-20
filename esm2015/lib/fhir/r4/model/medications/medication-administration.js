/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainResource } from '../domain-resource';
export class MedicationAdministration extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'MedicationAdministration';
    }
}
if (false) {
    /** @type {?} */
    MedicationAdministration.prototype.resourceType;
    /** @type {?} */
    MedicationAdministration.prototype.identifier;
    /** @type {?} */
    MedicationAdministration.prototype.instantiates;
    /** @type {?} */
    MedicationAdministration.prototype.partOf;
    /** @type {?} */
    MedicationAdministration.prototype.status;
    /** @type {?} */
    MedicationAdministration.prototype.statusReason;
    /** @type {?} */
    MedicationAdministration.prototype.category;
    /** @type {?} */
    MedicationAdministration.prototype.medicationCodeableConcept;
    /** @type {?} */
    MedicationAdministration.prototype.medicationReference;
    /** @type {?} */
    MedicationAdministration.prototype.subject;
    /** @type {?} */
    MedicationAdministration.prototype.context;
    /** @type {?} */
    MedicationAdministration.prototype.supportingInformation;
    /** @type {?} */
    MedicationAdministration.prototype.effectiveDateTime;
    /** @type {?} */
    MedicationAdministration.prototype.effectivePeriod;
    /** @type {?} */
    MedicationAdministration.prototype.performer;
    /** @type {?} */
    MedicationAdministration.prototype.reasonCode;
    /** @type {?} */
    MedicationAdministration.prototype.reasonReference;
    /** @type {?} */
    MedicationAdministration.prototype.request;
    /** @type {?} */
    MedicationAdministration.prototype.device;
    /** @type {?} */
    MedicationAdministration.prototype.note;
    /** @type {?} */
    MedicationAdministration.prototype.dosage;
    /** @type {?} */
    MedicationAdministration.prototype.eventHistory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWNhdGlvbi1hZG1pbmlzdHJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xtcy1uZy1maGlyLyIsInNvdXJjZXMiOlsibGliL2ZoaXIvcjQvbW9kZWwvbWVkaWNhdGlvbnMvbWVkaWNhdGlvbi1hZG1pbmlzdHJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBTWxELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxjQUFjO0lBQTVEOztRQUNJLGlCQUFZLEdBQVcsMEJBQTBCLENBQUM7SUFpQ3RELENBQUM7Q0FBQTs7O0lBakNHLGdEQUFrRDs7SUFDbEQsOENBQTBCOztJQUMxQixnREFBd0I7O0lBQ3hCLDBDQUFxQjs7SUFDckIsMENBQTBHOztJQUMxRyxnREFBaUM7O0lBQ2pDLDRDQUEyQjs7SUFDM0IsNkRBQTJDOztJQUMzQyx1REFBK0I7O0lBQy9CLDJDQUFtQjs7SUFDbkIsMkNBQW9COztJQUNwQix5REFBb0M7O0lBQ3BDLHFEQUF3Qjs7SUFDeEIsbURBQXdCOztJQUN4Qiw2Q0FHSTs7SUFDSiw4Q0FBK0I7O0lBQy9CLG1EQUE4Qjs7SUFDOUIsMkNBQW9COztJQUNwQiwwQ0FBcUI7O0lBQ3JCLHdDQUFvQjs7SUFDcEIsMENBUUU7O0lBQ0YsZ0RBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb21haW5SZXNvdXJjZX0gZnJvbSAnLi4vZG9tYWluLXJlc291cmNlJztcbmltcG9ydCB7Q29kZWFibGVDb25jZXB0LCBJZGVudGlmaWVyLCBQZXJpb2QsIFJlZmVyZW5jZX0gZnJvbSAnLi4nO1xuaW1wb3J0IHtBbm5vdGF0aW9ufSBmcm9tICcuLi93b3JrZmxvdy9hbm5vdGF0aW9uJztcbmltcG9ydCB7U2ltcGxlUXVhbnRpdHl9IGZyb20gJy4uL3Rlcm1pbm9sb2d5L3NpbXBsZS1xdWFudGl0eSc7XG5pbXBvcnQge1JhdGlvfSBmcm9tICcuLi9yYXRpbyc7XG5cbmV4cG9ydCBjbGFzcyBNZWRpY2F0aW9uQWRtaW5pc3RyYXRpb24gZXh0ZW5kcyBEb21haW5SZXNvdXJjZSB7XG4gICAgcmVzb3VyY2VUeXBlOiBzdHJpbmcgPSAnTWVkaWNhdGlvbkFkbWluaXN0cmF0aW9uJztcbiAgICBpZGVudGlmaWVyPzogSWRlbnRpZmllcltdO1xuICAgIGluc3RhbnRpYXRlcz86IHN0cmluZ1tdOyAvLyB1cmlcbiAgICBwYXJ0T2Y/OiBSZWZlcmVuY2VbXTsgLy8gKE1lZGljYXRpb25BZG1pbmlzdHJhdGlvbiB8IFByb2NlZHVyZSlcbiAgICBzdGF0dXM6ICdpbi1wcm9ncmVzcycgfCAnbm90LWRvbmUnIHwgJ29uLWhvbGQnIHwgJ2NvbXBsZXRlZCcgfCAnZW50ZXJlZC1pbi1lcnJvcicgfCAnc3RvcHBlZCcgfCAndW5rbm93bic7XG4gICAgc3RhdHVzUmVhc29uPzogQ29kZWFibGVDb25jZXB0W107XG4gICAgY2F0ZWdvcnk/OiBDb2RlYWJsZUNvbmNlcHQ7XG4gICAgbWVkaWNhdGlvbkNvZGVhYmxlQ29uY2VwdDogQ29kZWFibGVDb25jZXB0O1xuICAgIG1lZGljYXRpb25SZWZlcmVuY2U6IFJlZmVyZW5jZTsgLy8gKE1lZGljYXRpb24pXG4gICAgc3ViamVjdDogUmVmZXJlbmNlOyAvLyAoUGF0aWVudCB8IEdyb3VwKVxuICAgIGNvbnRleHQ/OiBSZWZlcmVuY2U7IC8vIChFbmNvdW50ZXIgfCBFcGlzb2RlT2ZDYXJlKVxuICAgIHN1cHBvcnRpbmdJbmZvcm1hdGlvbj86IFJlZmVyZW5jZVtdOyAvLyAoQW55KVxuICAgIGVmZmVjdGl2ZURhdGVUaW1lOiBEYXRlO1xuICAgIGVmZmVjdGl2ZVBlcmlvZDogUGVyaW9kO1xuICAgIHBlcmZvcm1lcj86IHsgLy8gQmFja2JvbmVFbGVtZW50XG4gICAgICAgIGZ1bmN0aW9uPzogQ29kZWFibGVDb25jZXB0O1xuICAgICAgICBhY3RvcjogUmVmZXJlbmNlOyAvLyAoUHJhY3RpdGlvbmVyIHwgUHJhY3RpdGlvbmVyUm9sZSB8IFBhdGllbnQgfCBSZWxhdGVkUGVyc29uIHwgRGV2aWNlKVxuICAgIH1bXTtcbiAgICByZWFzb25Db2RlPzogQ29kZWFibGVDb25jZXB0W107XG4gICAgcmVhc29uUmVmZXJlbmNlPzogUmVmZXJlbmNlW107IC8vIChDb25kaXRpb24gfCBPYnNlcnZhdGlvbiB8IERpYWdub3N0aWNSZXBvcnQpXG4gICAgcmVxdWVzdD86IFJlZmVyZW5jZTsgLy8gKE1lZGljYXRpb25SZXF1ZXN0KVxuICAgIGRldmljZT86IFJlZmVyZW5jZVtdOyAvLyAoRGV2aWNlKVxuICAgIG5vdGU/OiBBbm5vdGF0aW9uW107XG4gICAgZG9zYWdlPzoge1xuICAgICAgICB0ZXh0Pzogc3RyaW5nO1xuICAgICAgICBzaXRlPzogQ29kZWFibGVDb25jZXB0O1xuICAgICAgICByb3V0ZT86IENvZGVhYmxlQ29uY2VwdDtcbiAgICAgICAgbWV0aG9kPzogQ29kZWFibGVDb25jZXB0O1xuICAgICAgICBkb3NlPzogU2ltcGxlUXVhbnRpdHk7XG4gICAgICAgIHJhdGVSYXRpbz86IFJhdGlvO1xuICAgICAgICByYXRlUXVhbnRpdHk/OiBTaW1wbGVRdWFudGl0eTtcbiAgICB9O1xuICAgIGV2ZW50SGlzdG9yeT86IFJlZmVyZW5jZVtdOyAvLyAoUHJvdmVuYW5jZSlcbn1cbiJdfQ==
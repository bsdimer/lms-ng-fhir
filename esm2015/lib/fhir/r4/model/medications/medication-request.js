/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainResource } from '../domain-resource';
export class MedicationRequest extends DomainResource {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        this.resourceType = 'MedicationRequest';
        if (source)
            for (const key of Object.keys(source)) {
                this[key] = source[key];
            }
    }
}
if (false) {
    /** @type {?} */
    MedicationRequest.prototype.resourceType;
    /** @type {?} */
    MedicationRequest.prototype.identifier;
    /** @type {?} */
    MedicationRequest.prototype.status;
    /** @type {?} */
    MedicationRequest.prototype.statusReason;
    /** @type {?} */
    MedicationRequest.prototype.intent;
    /** @type {?} */
    MedicationRequest.prototype.category;
    /** @type {?} */
    MedicationRequest.prototype.priority;
    /** @type {?} */
    MedicationRequest.prototype.doNotPerform;
    /** @type {?} */
    MedicationRequest.prototype.reportedBoolean;
    /** @type {?} */
    MedicationRequest.prototype.reportedReference;
    /** @type {?} */
    MedicationRequest.prototype.medicationCodeableConcept;
    /** @type {?} */
    MedicationRequest.prototype.medicationReference;
    /** @type {?} */
    MedicationRequest.prototype.subject;
    /** @type {?} */
    MedicationRequest.prototype.encounter;
    /** @type {?} */
    MedicationRequest.prototype.supportingInformation;
    /** @type {?} */
    MedicationRequest.prototype.authoredOn;
    /** @type {?} */
    MedicationRequest.prototype.requester;
    /** @type {?} */
    MedicationRequest.prototype.performer;
    /** @type {?} */
    MedicationRequest.prototype.performerType;
    /** @type {?} */
    MedicationRequest.prototype.recorder;
    /** @type {?} */
    MedicationRequest.prototype.reasonCode;
    /** @type {?} */
    MedicationRequest.prototype.reasonReference;
    /** @type {?} */
    MedicationRequest.prototype.instantiatesCanonical;
    /** @type {?} */
    MedicationRequest.prototype.instantiatesUri;
    /** @type {?} */
    MedicationRequest.prototype.basedOn;
    /** @type {?} */
    MedicationRequest.prototype.groupIdentifier;
    /** @type {?} */
    MedicationRequest.prototype.courseOfTherapyType;
    /** @type {?} */
    MedicationRequest.prototype.insurance;
    /** @type {?} */
    MedicationRequest.prototype.note;
    /** @type {?} */
    MedicationRequest.prototype.dosageInstruction;
    /** @type {?} */
    MedicationRequest.prototype.dispenseRequest;
    /** @type {?} */
    MedicationRequest.prototype.substitution;
    /** @type {?} */
    MedicationRequest.prototype.priorPrescription;
    /** @type {?} */
    MedicationRequest.prototype.detectedIssue;
    /** @type {?} */
    MedicationRequest.prototype.eventHistory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWNhdGlvbi1yZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9tb2RlbC9tZWRpY2F0aW9ucy9tZWRpY2F0aW9uLXJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU9wRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsY0FBYzs7OztJQUNqRCxZQUFZLE1BQVk7UUFDcEIsS0FBSyxFQUFFLENBQUM7UUFNSCxpQkFBWSxHQUFXLG1CQUFtQixDQUFDO1FBTGhELElBQUksTUFBTTtZQUNOLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMzQjtJQUNULENBQUM7Q0FtREo7OztJQWxERyx5Q0FBb0Q7O0lBQ3BELHVDQUEwQjs7SUFDMUIsbUNBQWdIOztJQUNoSCx5Q0FBK0I7O0lBQy9CLG1DQUF1Rjs7SUFDdkYscUNBQTZCOztJQUM3QixxQ0FBa0Q7O0lBQ2xELHlDQUF1Qjs7SUFDdkIsNENBQTBCOztJQUMxQiw4Q0FBOEI7O0lBQzlCLHNEQUE0Qzs7SUFDNUMsZ0RBQWdDOztJQUNoQyxvQ0FBbUI7O0lBQ25CLHNDQUFzQjs7SUFDdEIsa0RBQWtDOztJQUNsQyx1Q0FBa0I7O0lBQ2xCLHNDQUFzQjs7SUFDdEIsc0NBQXNCOztJQUN0QiwwQ0FBZ0M7O0lBQ2hDLHFDQUFxQjs7SUFDckIsdUNBQStCOztJQUMvQiw0Q0FBNEI7O0lBQzVCLGtEQUFpQzs7SUFDakMsNENBQTJCOztJQUMzQixvQ0FBb0I7O0lBQ3BCLDRDQUE2Qjs7SUFDN0IsZ0RBQXNDOztJQUN0QyxzQ0FBc0I7O0lBQ3RCLGlDQUFvQjs7SUFDcEIsOENBQTZCOztJQUM3Qiw0Q0FXRTs7SUFDRix5Q0FJRTs7SUFDRiw4Q0FBOEI7O0lBQzlCLDBDQUE0Qjs7SUFDNUIseUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluUmVzb3VyY2UgfSBmcm9tICcuLi9kb21haW4tcmVzb3VyY2UnO1xuaW1wb3J0IHsgQ29kZWFibGVDb25jZXB0LCBJZGVudGlmaWVyLCBQZXJpb2QsIFJlZmVyZW5jZSB9IGZyb20gJy4uJztcbmltcG9ydCB7IEFubm90YXRpb24gfSBmcm9tICcuLi93b3JrZmxvdy9hbm5vdGF0aW9uJztcbmltcG9ydCB7IERvc2FnZSB9IGZyb20gJy4vZG9zYWdlJztcbmltcG9ydCB7IFNpbXBsZVF1YW50aXR5IH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICcuL2R1cmF0aW9uJztcblxuZXhwb3J0IGNsYXNzIE1lZGljYXRpb25SZXF1ZXN0IGV4dGVuZHMgRG9tYWluUmVzb3VyY2Uge1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZT86IGFueSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZiAoc291cmNlKVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc291cmNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICByZWFkb25seSByZXNvdXJjZVR5cGU6IHN0cmluZyA9ICdNZWRpY2F0aW9uUmVxdWVzdCc7XG4gICAgaWRlbnRpZmllcj86IElkZW50aWZpZXJbXTtcbiAgICBzdGF0dXM6ICdhY3RpdmUnIHwgJ29uLWhvbGQnIHwgJ2NhbmNlbGxlZCcgfCAnY29tcGxldGVkJyB8ICdlbnRlcmVkLWluLWVycm9yJyB8ICdzdG9wcGVkJyB8ICdkcmFmdCcgfCAndW5rbm93bic7XG4gICAgc3RhdHVzUmVhc29uPzogQ29kZWFibGVDb25jZXB0O1xuICAgIGludGVudDogJ3Byb3Bvc2FsJyB8ICdwbGFuJyB8ICdvcmRlcicgfCAnb3JpZ2luYWwtb3JkZXInIHwgJ2luc3RhbmNlLW9yZGVyJyB8ICdvcHRpb24nO1xuICAgIGNhdGVnb3J5PzogQ29kZWFibGVDb25jZXB0W107XG4gICAgcHJpb3JpdHk/OiAncm91dGluZScgfCAndXJnZW50JyB8ICdhc2FwJyB8ICdzdGF0JztcbiAgICBkb05vdFBlcmZvcm0/OiBib29sZWFuO1xuICAgIHJlcG9ydGVkQm9vbGVhbj86IGJvb2xlYW47XG4gICAgcmVwb3J0ZWRSZWZlcmVuY2U/OiBSZWZlcmVuY2U7IC8vIChQYXRpZW50IHwgUHJhY3RpdGlvbmVyIHwgUHJhY3RpdGlvbmVyUm9sZSB8IFJlbGF0ZWRQZXJzb24gfCBPcmdhbml6YXRpb24pXG4gICAgbWVkaWNhdGlvbkNvZGVhYmxlQ29uY2VwdD86IENvZGVhYmxlQ29uY2VwdDtcbiAgICBtZWRpY2F0aW9uUmVmZXJlbmNlPzogUmVmZXJlbmNlOyAvLyAoTWVkaWNhdGlvbilcbiAgICBzdWJqZWN0OiBSZWZlcmVuY2U7IC8vIChQYXRpZW50IHwgR3JvdXApXG4gICAgZW5jb3VudGVyPzogUmVmZXJlbmNlOyAvLyAoRW5jb3VudGVyKVxuICAgIHN1cHBvcnRpbmdJbmZvcm1hdGlvbj86IFJlZmVyZW5jZTsgLy8gKEFueSlcbiAgICBhdXRob3JlZE9uPzogRGF0ZTsgLy9cbiAgICByZXF1ZXN0ZXI/OiBSZWZlcmVuY2U7IC8vIChQcmFjdGl0aW9uZXIgfCBQcmFjdGl0aW9uZXJSb2xlIHwgT3JnYW5pemF0aW9uIHwgUGF0aWVudCB8IFJlbGF0ZWRQZXJzb24gfCBEZXZpY2UpXG4gICAgcGVyZm9ybWVyPzogUmVmZXJlbmNlOyAvLyAoUHJhY3RpdGlvbmVyIHwgUHJhY3RpdGlvbmVyUm9sZSB8IE9yZ2FuaXphdGlvbiB8IFBhdGllbnQgfCBEZXZpY2UgfCBSZWxhdGVkUGVyc29uIHwgQ2FyZVRlYW0pXG4gICAgcGVyZm9ybWVyVHlwZT86IENvZGVhYmxlQ29uY2VwdDtcbiAgICByZWNvcmRlcj86IFJlZmVyZW5jZTsgLy8gKFByYWN0aXRpb25lciB8IFByYWN0aXRpb25lclJvbGUpXG4gICAgcmVhc29uQ29kZT86IENvZGVhYmxlQ29uY2VwdFtdO1xuICAgIHJlYXNvblJlZmVyZW5jZT86IFJlZmVyZW5jZTsgLy8gKENvbmRpdGlvbiB8IE9ic2VydmF0aW9uKVxuICAgIGluc3RhbnRpYXRlc0Nhbm9uaWNhbD86IHN0cmluZ1tdOyAvLyBJbnN0YW50aWF0ZXMgRkhJUiBwcm90b2NvbCBvciBkZWZpbml0aW9uXG4gICAgaW5zdGFudGlhdGVzVXJpPzogc3RyaW5nW107IC8vIHVyaVxuICAgIGJhc2VkT24/OiBSZWZlcmVuY2U7IC8vIChDYXJlUGxhbiB8IE1lZGljYXRpb25SZXF1ZXN0IHwgU2VydmljZVJlcXVlc3QgfCBJbW11bml6YXRpb25SZWNvbW1lbmRhdGlvbilcbiAgICBncm91cElkZW50aWZpZXI/OiBJZGVudGlmaWVyO1xuICAgIGNvdXJzZU9mVGhlcmFweVR5cGU/OiBDb2RlYWJsZUNvbmNlcHQ7XG4gICAgaW5zdXJhbmNlPzogUmVmZXJlbmNlOyAvLyAoQ292ZXJhZ2UgfCBDbGFpbVJlc3BvbnNlKVxuICAgIG5vdGU/OiBBbm5vdGF0aW9uW107XG4gICAgZG9zYWdlSW5zdHJ1Y3Rpb24/OiBEb3NhZ2VbXTtcbiAgICBkaXNwZW5zZVJlcXVlc3Q/OiB7IC8vIEJhY2tib25lRWxlbWVudFxuICAgICAgICBpbml0aWFsRmlsbD86IHsgLy8gQmFja2JvbmVFbGVtZW50XG4gICAgICAgICAgICBxdWFudGl0eT86IFNpbXBsZVF1YW50aXR5O1xuICAgICAgICAgICAgZHVyYXRpb24/OiBEdXJhdGlvbjsgLy8gRmlyc3QgZmlsbCBkdXJhdGlvblxuICAgICAgICB9O1xuICAgICAgICBkaXNwZW5zZUludGVydmFsPzogRHVyYXRpb247IC8vIE1pbmltdW0gcGVyaW9kIG9mIHRpbWUgYmV0d2VlbiBkaXNwZW5zZXNcbiAgICAgICAgdmFsaWRpdHlQZXJpb2Q/OiBQZXJpb2Q7XG4gICAgICAgIG51bWJlck9mUmVwZWF0c0FsbG93ZWQ/OiBudW1iZXI7XG4gICAgICAgIHF1YW50aXR5PzogU2ltcGxlUXVhbnRpdHk7XG4gICAgICAgIGV4cGVjdGVkU3VwcGx5RHVyYXRpb24/OiBEdXJhdGlvbjtcbiAgICAgICAgcGVyZm9ybWVyPzogUmVmZXJlbmNlO1xuICAgIH07XG4gICAgc3Vic3RpdHV0aW9uPzogeyAvLyBCYWNrYm9uZUVsZW1lbnRcbiAgICAgICAgYWxsb3dlZEJvb2xlYW46IGJvb2xlYW47XG4gICAgICAgIGFsbG93ZWRDb2RlYWJsZUNvbmNlcHQ6IENvZGVhYmxlQ29uY2VwdDtcbiAgICAgICAgcmVhc29uPzogQ29kZWFibGVDb25jZXB0O1xuICAgIH07XG4gICAgcHJpb3JQcmVzY3JpcHRpb24/OiBSZWZlcmVuY2U7IC8vIChNZWRpY2F0aW9uUmVxdWVzdClcbiAgICBkZXRlY3RlZElzc3VlPzogUmVmZXJlbmNlW107IC8vIChEZXRlY3RlZElzc3VlKVxuICAgIGV2ZW50SGlzdG9yeT86IFJlZmVyZW5jZVtdOyAvLyAoUHJvdmVuYW5jZSlcbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainResource } from '../domain-resource';
export class HealthcareService extends DomainResource {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        this.resourceType = 'HealthcareService';
        if (source)
            for (const key of Object.keys(source)) {
                this[key] = source[key];
            }
    }
    // (Endpoint)
    /**
     * @return {?}
     */
    static getNew() {
        return new HealthcareService({ name: [HealthcareService.getNew()] });
    }
}
if (false) {
    /** @type {?} */
    HealthcareService.prototype.resourceType;
    /** @type {?} */
    HealthcareService.prototype.identifier;
    /** @type {?} */
    HealthcareService.prototype.active;
    /** @type {?} */
    HealthcareService.prototype.providedBy;
    /** @type {?} */
    HealthcareService.prototype.category;
    /** @type {?} */
    HealthcareService.prototype.type;
    /** @type {?} */
    HealthcareService.prototype.specialty;
    /** @type {?} */
    HealthcareService.prototype.location;
    /** @type {?} */
    HealthcareService.prototype.name;
    /** @type {?} */
    HealthcareService.prototype.comment;
    /** @type {?} */
    HealthcareService.prototype.extraDetails;
    /** @type {?} */
    HealthcareService.prototype.photo;
    /** @type {?} */
    HealthcareService.prototype.telecom;
    /** @type {?} */
    HealthcareService.prototype.coverageArea;
    /** @type {?} */
    HealthcareService.prototype.serviceProvisionCode;
    /** @type {?} */
    HealthcareService.prototype.eligibility;
    /** @type {?} */
    HealthcareService.prototype.program;
    /** @type {?} */
    HealthcareService.prototype.characteristic;
    /** @type {?} */
    HealthcareService.prototype.communication;
    /** @type {?} */
    HealthcareService.prototype.referralMethod;
    /** @type {?} */
    HealthcareService.prototype.appointmentRequired;
    /** @type {?} */
    HealthcareService.prototype.availableTime;
    /** @type {?} */
    HealthcareService.prototype.notAvailable;
    /** @type {?} */
    HealthcareService.prototype.availabilityExceptions;
    /** @type {?} */
    HealthcareService.prototype.endpoint;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhbHRoY2FyZXNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sbXMtbmctZmhpci8iLCJzb3VyY2VzIjpbImxpYi9maGlyL3I0L21vZGVsL2VudGl0aWVzXzEvaGVhbHRoY2FyZXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVFwRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsY0FBYzs7OztJQUNqRCxZQUFZLE1BQVk7UUFDcEIsS0FBSyxFQUFFLENBQUM7UUFNWixpQkFBWSxHQUFXLG1CQUFtQixDQUFDO1FBTHZDLElBQUksTUFBTTtZQUNOLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMzQjtJQUNULENBQUM7Ozs7O0lBc0NNLE1BQU0sQ0FBQyxNQUFNO1FBQ2hCLE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Q0FDSjs7O0lBeENHLHlDQUEyQzs7SUFDM0MsdUNBQTBCOztJQUMxQixtQ0FBaUI7O0lBQ2pCLHVDQUF1Qjs7SUFDdkIscUNBQTZCOztJQUM3QixpQ0FBeUI7O0lBQ3pCLHNDQUE4Qjs7SUFDOUIscUNBQXVCOztJQUN2QixpQ0FBYzs7SUFDZCxvQ0FBaUI7O0lBQ2pCLHlDQUFzQjs7SUFDdEIsa0NBQW1COztJQUNuQixvQ0FBeUI7O0lBQ3pCLHlDQUF5Qjs7SUFDekIsaURBQXlDOztJQUN6Qyx3Q0FHSTs7SUFDSixvQ0FBNEI7O0lBQzVCLDJDQUFtQzs7SUFDbkMsMENBQWtDOztJQUNsQywyQ0FBbUM7O0lBQ25DLGdEQUE4Qjs7SUFDOUIsMENBS0k7O0lBQ0oseUNBR0k7O0lBQ0osbURBQWdDOztJQUNoQyxxQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5SZXNvdXJjZSB9IGZyb20gJy4uL2RvbWFpbi1yZXNvdXJjZSc7XG5pbXBvcnQgeyBJZGVudGlmaWVyIH0gZnJvbSAnLi4vdGVybWlub2xvZ3kvaWRlbnRpZmllcic7XG5pbXBvcnQgeyBSZWZlcmVuY2UgfSBmcm9tICcuLi9yZWZlcmVuY2UnO1xuaW1wb3J0IHsgQ29kZWFibGVDb25jZXB0IH0gZnJvbSAnLi4vdGVybWlub2xvZ3kvY29kZWFibGVjb25jZXB0JztcbmltcG9ydCB7IEF0dGFjaG1lbnQgfSBmcm9tICcuLi9pbmRpdmlkdWFscy9hdHRhY2htZW50JztcbmltcG9ydCB7IENvbnRhY3RQb2ludCB9IGZyb20gJy4uL3Rlcm1pbm9sb2d5L2NvbnRhY3Rwb2ludCc7XG5pbXBvcnQgeyBQZXJpb2QgfSBmcm9tICcuLi9wZXJpb2QnO1xuXG5leHBvcnQgY2xhc3MgSGVhbHRoY2FyZVNlcnZpY2UgZXh0ZW5kcyBEb21haW5SZXNvdXJjZSB7XG4gICAgY29uc3RydWN0b3Ioc291cmNlPzogYW55KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmIChzb3VyY2UpXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIHJlc291cmNlVHlwZTogc3RyaW5nID0gJ0hlYWx0aGNhcmVTZXJ2aWNlJztcbiAgICBpZGVudGlmaWVyPzogSWRlbnRpZmllcltdO1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgcHJvdmlkZWRCeT86IFJlZmVyZW5jZTsgLy8gKE9yZ2FuaXphdGlvbilcbiAgICBjYXRlZ29yeT86IENvZGVhYmxlQ29uY2VwdFtdO1xuICAgIHR5cGU/OiBDb2RlYWJsZUNvbmNlcHRbXTtcbiAgICBzcGVjaWFsdHk/OiBDb2RlYWJsZUNvbmNlcHRbXTtcbiAgICBsb2NhdGlvbj86IFJlZmVyZW5jZVtdOyAvLyAoTG9jYXRpb24pXG4gICAgbmFtZT86IHN0cmluZztcbiAgICBjb21tZW50Pzogc3RyaW5nO1xuICAgIGV4dHJhRGV0YWlscz86IHN0cmluZzsgLy8gUmVnZXg6IFxccyooXFxTfFxccykqXG4gICAgcGhvdG8/OiBBdHRhY2htZW50O1xuICAgIHRlbGVjb20/OiBDb250YWN0UG9pbnRbXTtcbiAgICBjb3ZlcmFnZUFyZWE/OiBSZWZlcmVuY2U7IC8vIChMb2NhdGlvbilcbiAgICBzZXJ2aWNlUHJvdmlzaW9uQ29kZT86IENvZGVhYmxlQ29uY2VwdFtdO1xuICAgIGVsaWdpYmlsaXR5PzogeyAvLyBCYWNrYm9uZUVsZW1lbnRcbiAgICAgICAgY29kZT86IENvZGVhYmxlQ29uY2VwdDtcbiAgICAgICAgY29tbWVudD86IHN0cmluZztcbiAgICB9W107XG4gICAgcHJvZ3JhbT86IENvZGVhYmxlQ29uY2VwdFtdO1xuICAgIGNoYXJhY3RlcmlzdGljPzogQ29kZWFibGVDb25jZXB0W107XG4gICAgY29tbXVuaWNhdGlvbj86IENvZGVhYmxlQ29uY2VwdFtdO1xuICAgIHJlZmVycmFsTWV0aG9kPzogQ29kZWFibGVDb25jZXB0W107XG4gICAgYXBwb2ludG1lbnRSZXF1aXJlZD86IGJvb2xlYW47XG4gICAgYXZhaWxhYmxlVGltZT86IHtcbiAgICAgICAgZGF5c09mV2Vlaz86IHN0cmluZ1tdO1xuICAgICAgICBhbGxEYXk/OiBib29sZWFuO1xuICAgICAgICBhdmFpbGFibGVTdGFydFRpbWU/OiBEYXRlOyAvLyBSZWdleDogKFswMV1bMC05XXwyWzAtM10pOlswLTVdWzAtOV06KFswLTVdWzAtOV18NjApKFxcLlswLTldKyk/XG4gICAgICAgIGF2YWlsYWJsZUVuZFRpbWU/OiBEYXRlO1xuICAgIH1bXTtcbiAgICBub3RBdmFpbGFibGU/OiB7IC8vIEJhY2tib25lRWxlbWVudFxuICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICBkdXJpbmc/OiBQZXJpb2Q7XG4gICAgfVtdO1xuICAgIGF2YWlsYWJpbGl0eUV4Y2VwdGlvbnM/OiBzdHJpbmc7XG4gICAgZW5kcG9pbnQ/OiBSZWZlcmVuY2VbXTsgLy8gKEVuZHBvaW50KVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXROZXcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgSGVhbHRoY2FyZVNlcnZpY2Uoe25hbWU6IFtIZWFsdGhjYXJlU2VydmljZS5nZXROZXcoKV19KTtcbiAgICB9XG59XG4iXX0=
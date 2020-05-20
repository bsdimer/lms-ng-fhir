/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainResource } from '../domain-resource';
export class VerificationResult extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'VerificationResult';
    }
}
if (false) {
    /** @type {?} */
    VerificationResult.prototype.resourceType;
    /** @type {?} */
    VerificationResult.prototype.target;
    /** @type {?} */
    VerificationResult.prototype.targetLocation;
    /** @type {?} */
    VerificationResult.prototype.need;
    /** @type {?} */
    VerificationResult.prototype.status;
    /** @type {?} */
    VerificationResult.prototype.statusDate;
    /** @type {?} */
    VerificationResult.prototype.validationType;
    /** @type {?} */
    VerificationResult.prototype.validationProcess;
    /** @type {?} */
    VerificationResult.prototype.frequency;
    /** @type {?} */
    VerificationResult.prototype.lastPerformed;
    /** @type {?} */
    VerificationResult.prototype.nextScheduled;
    /** @type {?} */
    VerificationResult.prototype.failureAction;
    /** @type {?} */
    VerificationResult.prototype.primarySource;
    /** @type {?} */
    VerificationResult.prototype.attestation;
    /** @type {?} */
    VerificationResult.prototype.validator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZpY2F0aW9ucmVzdWx0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9tb2RlbC93b3JrZmxvdy92ZXJpZmljYXRpb25yZXN1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUtsRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsY0FBYztJQUF0RDs7UUFDSSxpQkFBWSxHQUFXLG9CQUFvQixDQUFDO0lBb0NoRCxDQUFDO0NBQUE7OztJQXBDRywwQ0FBNEM7O0lBQzVDLG9DQUFxQjs7SUFDckIsNENBQTBCOztJQUMxQixrQ0FBdUI7O0lBQ3ZCLG9DQUE0Rjs7SUFDNUYsd0NBQWtCOztJQUNsQiw0Q0FBaUM7O0lBQ2pDLCtDQUFzQzs7SUFDdEMsdUNBQW1COztJQUNuQiwyQ0FBcUI7O0lBQ3JCLDJDQUFxQjs7SUFDckIsMkNBQWdDOztJQUNoQywyQ0FRSTs7SUFDSix5Q0FTRTs7SUFDRix1Q0FJSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RG9tYWluUmVzb3VyY2V9IGZyb20gJy4uL2RvbWFpbi1yZXNvdXJjZSc7XG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSAnLi4vcmVmZXJlbmNlJztcbmltcG9ydCB7Q29kZWFibGVDb25jZXB0LCBTaWduYXR1cmV9IGZyb20gJy4uJztcbmltcG9ydCB7VGltaW5nfSBmcm9tICcuLi90aW1pbmcnO1xuXG5leHBvcnQgY2xhc3MgVmVyaWZpY2F0aW9uUmVzdWx0IGV4dGVuZHMgRG9tYWluUmVzb3VyY2Uge1xuICAgIHJlc291cmNlVHlwZTogc3RyaW5nID0gJ1ZlcmlmaWNhdGlvblJlc3VsdCc7XG4gICAgdGFyZ2V0PzogUmVmZXJlbmNlW107IC8vIChBbnkpXG4gICAgdGFyZ2V0TG9jYXRpb24/OiBzdHJpbmdbXTtcbiAgICBuZWVkPzogQ29kZWFibGVDb25jZXB0OyAvLyBub25lIHwgaW5pdGlhbCB8IHBlcmlvZGljXG4gICAgc3RhdHVzOiAnYXR0ZXN0ZWQnIHwgJ3ZhbGlkYXRlZCcgfCAnaW4tcHJvY2VzcycgfCAncmVxLXJldmFsaWQnIHwgJ3ZhbC1mYWlsJyB8ICdyZXZhbC1mYWlsJztcbiAgICBzdGF0dXNEYXRlPzogRGF0ZTtcbiAgICB2YWxpZGF0aW9uVHlwZT86IENvZGVhYmxlQ29uY2VwdDsgLy8gbm90aGluZyB8IHByaW1hcnkgfCBtdWx0aXBsZVxuICAgIHZhbGlkYXRpb25Qcm9jZXNzPzogQ29kZWFibGVDb25jZXB0W107XG4gICAgZnJlcXVlbmN5PzogVGltaW5nO1xuICAgIGxhc3RQZXJmb3JtZWQ/OiBEYXRlO1xuICAgIG5leHRTY2hlZHVsZWQ/OiBEYXRlOyAvLyBSZWdleDogKFswLTldKFswLTldKFswLTldWzEtOV18WzEtOV0wKXxbMS05XTAwKXxbMS05XTAwMCkoLSgwWzEtOV18MVswLTJdKSgtKDBbMS05XXxbMS0yXVswLTldfDNbMC0xXSkpPyk/XG4gICAgZmFpbHVyZUFjdGlvbj86IENvZGVhYmxlQ29uY2VwdDtcbiAgICBwcmltYXJ5U291cmNlPzogeyAvLyBCYWNrYm9uZUVsZW1lbnRcbiAgICAgICAgd2hvPzogUmVmZXJlbmNlOyAvLyAoT3JnYW5pemF0aW9uIHwgUHJhY3RpdGlvbmVyIHwgUHJhY3RpdGlvbmVyUm9sZSlcbiAgICAgICAgdHlwZT86IENvZGVhYmxlQ29uY2VwdFtdO1xuICAgICAgICBjb21tdW5pY2F0aW9uTWV0aG9kPzogQ29kZWFibGVDb25jZXB0W107XG4gICAgICAgIHZhbGlkYXRpb25TdGF0dXM/OiBDb2RlYWJsZUNvbmNlcHQ7IC8vIHN1Y2Nlc3NmdWwgfCBmYWlsZWQgfCB1bmtub3duXG4gICAgICAgIHZhbGlkYXRpb25EYXRlPzogRGF0ZTtcbiAgICAgICAgY2FuUHVzaFVwZGF0ZXM/OiBDb2RlYWJsZUNvbmNlcHQ7IC8vIHllcyB8IG5vIHwgdW5kZXRlcm1pbmVkXG4gICAgICAgIHB1c2hUeXBlQXZhaWxhYmxlPzogQ29kZWFibGVDb25jZXB0W107XG4gICAgfVtdO1xuICAgIGF0dGVzdGF0aW9uPzogeyAvLyBCYWNrYm9uZUVsZW1lbnRcbiAgICAgICAgd2hvPzogUmVmZXJlbmNlOyAvLyAoUHJhY3RpdGlvbmVyIHwgUHJhY3RpdGlvbmVyUm9sZSB8IE9yZ2FuaXphdGlvbilcbiAgICAgICAgb25CZWhhbGZPZj86IFJlZmVyZW5jZTsgLy8gKE9yZ2FuaXphdGlvbiB8IFByYWN0aXRpb25lciB8IFByYWN0aXRpb25lclJvbGUpXG4gICAgICAgIGNvbW11bmljYXRpb25NZXRob2Q/OiBDb2RlYWJsZUNvbmNlcHQ7XG4gICAgICAgIGRhdGU/OiBEYXRlOyAvLyBSZWdleDogKFswLTldKFswLTldKFswLTldWzEtOV18WzEtOV0wKXxbMS05XTAwKXxbMS05XTAwMCkoLSgwWzEtOV18MVswLTJdKSgtKDBbMS05XXxbMS0yXVswLTldfDNbMC0xXSkpPyk/XG4gICAgICAgIHNvdXJjZUlkZW50aXR5Q2VydGlmaWNhdGU/OiBzdHJpbmc7XG4gICAgICAgIHByb3h5SWRlbnRpdHlDZXJ0aWZpY2F0ZT86IHN0cmluZztcbiAgICAgICAgcHJveHlTaWduYXR1cmU/OiBTaWduYXR1cmU7XG4gICAgICAgIHNvdXJjZVNpZ25hdHVyZT86IFNpZ25hdHVyZTtcbiAgICB9O1xuICAgIHZhbGlkYXRvcj86IHsgLy8gQmFja2JvbmVFbGVtZW50XG4gICAgICAgIG9yZ2FuaXphdGlvbjogUmVmZXJlbmNlOyAvLyAoT3JnYW5pemF0aW9uKVxuICAgICAgICBpZGVudGl0eUNlcnRpZmljYXRlPzogc3RyaW5nO1xuICAgICAgICBhdHRlc3RhdGlvblNpZ25hdHVyZT86IFNpZ25hdHVyZTtcbiAgICB9W107XG59XG4iXX0=
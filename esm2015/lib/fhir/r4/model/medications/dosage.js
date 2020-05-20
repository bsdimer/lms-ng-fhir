/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BackboneElement } from '../terminology/backboneelement';
export class Dosage extends BackboneElement {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        if (source)
            for (const key of Object.keys(source)) {
                this[key] = source[key];
            }
    }
}
if (false) {
    /** @type {?} */
    Dosage.prototype.sequence;
    /** @type {?} */
    Dosage.prototype.text;
    /** @type {?} */
    Dosage.prototype.additionalInstruction;
    /** @type {?} */
    Dosage.prototype.patientInstruction;
    /** @type {?} */
    Dosage.prototype.timing;
    /** @type {?} */
    Dosage.prototype.asNeededBoolean;
    /** @type {?} */
    Dosage.prototype.asNeededCodeableConcept;
    /** @type {?} */
    Dosage.prototype.site;
    /** @type {?} */
    Dosage.prototype.route;
    /** @type {?} */
    Dosage.prototype.method;
    /** @type {?} */
    Dosage.prototype.doseAndRate;
    /** @type {?} */
    Dosage.prototype.maxDosePerPeriod;
    /** @type {?} */
    Dosage.prototype.maxDosePerAdministration;
    /** @type {?} */
    Dosage.prototype.maxDosePerLifetime;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9zYWdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9tb2RlbC9tZWRpY2F0aW9ucy9kb3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUlqRSxNQUFNLE9BQU8sTUFBTyxTQUFRLGVBQWU7Ozs7SUFDdkMsWUFBWSxNQUFZO1FBQ3BCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxNQUFNO1lBQ04sS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO0lBQ1QsQ0FBQztDQXNCSjs7O0lBckJHLDBCQUFrQjs7SUFDbEIsc0JBQWM7O0lBQ2QsdUNBQTBDOztJQUMxQyxvQ0FBNEI7O0lBQzVCLHdCQUFnQjs7SUFDaEIsaUNBQTBCOztJQUMxQix5Q0FBMEM7O0lBQzFDLHNCQUF1Qjs7SUFDdkIsdUJBQXdCOztJQUN4Qix3QkFBeUI7O0lBQ3pCLDZCQU9JOztJQUNKLGtDQUF5Qjs7SUFDekIsMENBQTBDOztJQUMxQyxvQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RpbWluZ30gZnJvbSAnLi4vdGltaW5nJztcbmltcG9ydCB7UmF0aW99IGZyb20gJy4uL3JhdGlvJztcbmltcG9ydCB7IEJhY2tib25lRWxlbWVudCB9IGZyb20gJy4uL3Rlcm1pbm9sb2d5L2JhY2tib25lZWxlbWVudCc7XG5pbXBvcnQgeyBDb2RlYWJsZUNvbmNlcHQgfSBmcm9tICcuLi90ZXJtaW5vbG9neS9jb2RlYWJsZWNvbmNlcHQnO1xuaW1wb3J0IHsgU2ltcGxlUXVhbnRpdHkgfSBmcm9tICcuLi90ZXJtaW5vbG9neS9zaW1wbGUtcXVhbnRpdHknO1xuXG5leHBvcnQgY2xhc3MgRG9zYWdlIGV4dGVuZHMgQmFja2JvbmVFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2U/OiBhbnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKHNvdXJjZSlcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgc2VxdWVuY2U/OiBudW1iZXI7XG4gICAgdGV4dD86IHN0cmluZztcbiAgICBhZGRpdGlvbmFsSW5zdHJ1Y3Rpb24/OiBDb2RlYWJsZUNvbmNlcHRbXTtcbiAgICBwYXRpZW50SW5zdHJ1Y3Rpb24/OiBzdHJpbmc7XG4gICAgdGltaW5nPzogVGltaW5nO1xuICAgIGFzTmVlZGVkQm9vbGVhbj86IGJvb2xlYW47XG4gICAgYXNOZWVkZWRDb2RlYWJsZUNvbmNlcHQ/OiBDb2RlYWJsZUNvbmNlcHQ7XG4gICAgc2l0ZT86IENvZGVhYmxlQ29uY2VwdDtcbiAgICByb3V0ZT86IENvZGVhYmxlQ29uY2VwdDtcbiAgICBtZXRob2Q/OiBDb2RlYWJsZUNvbmNlcHQ7XG4gICAgZG9zZUFuZFJhdGU/OiB7XG4gICAgICAgIHR5cGU/OiBDb2RlYWJsZUNvbmNlcHQ7XG4gICAgICAgIGRvc2VSYW5nZT86IFJhbmdlO1xuICAgICAgICBkb3NlUXVhbnRpdHk/OiBTaW1wbGVRdWFudGl0eTtcbiAgICAgICAgcmF0ZVJhdGlvPzogUmF0aW87XG4gICAgICAgIHJhdGVSYW5nZT86IFJhbmdlO1xuICAgICAgICByYXRlUXVhbnRpdHk/OiBTaW1wbGVRdWFudGl0eTtcbiAgICB9W107XG4gICAgbWF4RG9zZVBlclBlcmlvZD86IFJhdGlvO1xuICAgIG1heERvc2VQZXJBZG1pbmlzdHJhdGlvbj86IFNpbXBsZVF1YW50aXR5O1xuICAgIG1heERvc2VQZXJMaWZldGltZT86IFNpbXBsZVF1YW50aXR5O1xufVxuIl19
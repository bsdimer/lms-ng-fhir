/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainResource } from '../domain-resource';
import { HumanName } from './humanname';
export class Patient extends DomainResource {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        this.resourceType = 'Patient';
        if (source)
            for (const key of Object.keys(source)) {
                this[key] = source[key];
            }
    }
    /**
     * @return {?}
     */
    static getNew() {
        return new Patient({ name: [HumanName.getNew()] });
    }
}
if (false) {
    /** @type {?} */
    Patient.prototype.resourceType;
    /** @type {?} */
    Patient.prototype.identifier;
    /** @type {?} */
    Patient.prototype.active;
    /** @type {?} */
    Patient.prototype.name;
    /** @type {?} */
    Patient.prototype.telecom;
    /** @type {?} */
    Patient.prototype.gender;
    /** @type {?} */
    Patient.prototype.birthDate;
    /** @type {?} */
    Patient.prototype.deceasedBoolean;
    /** @type {?} */
    Patient.prototype.deceasedDateTime;
    /** @type {?} */
    Patient.prototype.address;
    /** @type {?} */
    Patient.prototype.maritalStatus;
    /** @type {?} */
    Patient.prototype.multipleBirthBoolean;
    /** @type {?} */
    Patient.prototype.multipleBirthInteger;
    /** @type {?} */
    Patient.prototype.photo;
    /** @type {?} */
    Patient.prototype.contact;
    /** @type {?} */
    Patient.prototype.communication;
    /** @type {?} */
    Patient.prototype.generalPractitioner;
    /** @type {?} */
    Patient.prototype.managingOrganization;
    /** @type {?} */
    Patient.prototype.link;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xtcy1uZy1maGlyLyIsInNvdXJjZXMiOlsibGliL2ZoaXIvcjQvbW9kZWwvaW5kaXZpZHVhbHMvcGF0aWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFReEMsTUFBTSxPQUFPLE9BQVEsU0FBUSxjQUFjOzs7O0lBQ3pDLFlBQVksTUFBWTtRQUN0QixLQUFLLEVBQUUsQ0FBQztRQU1WLGlCQUFZLEdBQVcsU0FBUyxDQUFDO1FBTC9CLElBQUksTUFBTTtZQUNSLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN6QjtJQUNMLENBQUM7Ozs7SUFtQ00sTUFBTSxDQUFDLE1BQU07UUFDbEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0Y7OztJQXJDQywrQkFBaUM7O0lBQ2pDLDZCQUEwQjs7SUFDMUIseUJBQWlCOztJQUNqQix1QkFBbUI7O0lBQ25CLDBCQUF5Qjs7SUFDekIseUJBQWlEOztJQUNqRCw0QkFBaUI7O0lBQ2pCLGtDQUEwQjs7SUFDMUIsbUNBQXdCOztJQUN4QiwwQkFBb0I7O0lBQ3BCLGdDQUFnQzs7SUFDaEMsdUNBQStCOztJQUMvQix1Q0FBOEI7O0lBQzlCLHdCQUFxQjs7SUFDckIsMEJBUUk7O0lBQ0osZ0NBR0k7O0lBQ0osc0NBQWtDOztJQUNsQyx1Q0FBaUM7O0lBQ2pDLHVCQUdJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluUmVzb3VyY2UgfSBmcm9tICcuLi9kb21haW4tcmVzb3VyY2UnO1xuaW1wb3J0IHsgSWRlbnRpZmllciB9IGZyb20gJy4uJztcbmltcG9ydCB7IEh1bWFuTmFtZSB9IGZyb20gJy4vaHVtYW5uYW1lJztcbmltcG9ydCB7IENvbnRhY3RQb2ludCB9IGZyb20gJy4uJztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuL2FkZHJlc3MnO1xuaW1wb3J0IHsgQ29kZWFibGVDb25jZXB0IH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgQXR0YWNobWVudCB9IGZyb20gJy4vYXR0YWNobWVudCc7XG5pbXBvcnQgeyBSZWZlcmVuY2UgfSBmcm9tICcuLi9yZWZlcmVuY2UnO1xuaW1wb3J0IHsgUGVyaW9kIH0gZnJvbSAnLi4vcGVyaW9kJztcblxuZXhwb3J0IGNsYXNzIFBhdGllbnQgZXh0ZW5kcyBEb21haW5SZXNvdXJjZSB7XG4gIGNvbnN0cnVjdG9yKHNvdXJjZT86IGFueSkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKHNvdXJjZSlcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNvdXJjZSkpIHtcbiAgICAgICAgdGhpc1trZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gIH1cbiAgcmVzb3VyY2VUeXBlOiBzdHJpbmcgPSAnUGF0aWVudCc7XG4gIGlkZW50aWZpZXI/OiBJZGVudGlmaWVyW107XG4gIGFjdGl2ZT86IGJvb2xlYW47XG4gIG5hbWU/OiBIdW1hbk5hbWVbXTtcbiAgdGVsZWNvbT86IENvbnRhY3RQb2ludFtdO1xuICBnZW5kZXI/OiAnbWFsZScgfCAnZmVtYWxlJyB8ICdvdGhlcicgfCAndW5rbm93bic7XG4gIGJpcnRoRGF0ZT86IERhdGU7XG4gIGRlY2Vhc2VkQm9vbGVhbj86IGJvb2xlYW47XG4gIGRlY2Vhc2VkRGF0ZVRpbWU/OiBEYXRlO1xuICBhZGRyZXNzPzogQWRkcmVzc1tdO1xuICBtYXJpdGFsU3RhdHVzPzogQ29kZWFibGVDb25jZXB0O1xuICBtdWx0aXBsZUJpcnRoQm9vbGVhbj86IGJvb2xlYW47XG4gIG11bHRpcGxlQmlydGhJbnRlZ2VyPzogbnVtYmVyOyAvLyBSZWdleDogWzBdfFstK10/WzEtOV1bMC05XSpcbiAgcGhvdG8/OiBBdHRhY2htZW50W107XG4gIGNvbnRhY3Q/OiB7IC8vIEJhY2tib25lRWxlbWVudFxuICAgIHJlbGF0aW9uc2hpcD86IENvZGVhYmxlQ29uY2VwdFtdO1xuICAgIG5hbWU/OiBIdW1hbk5hbWU7XG4gICAgdGVsZWNvbT86IENvbnRhY3RQb2ludFtdO1xuICAgIGFkZHJlc3M/OiBBZGRyZXNzO1xuICAgIGdlbmRlcj86ICdtYWxlJyB8ICdmZW1hbGUnIHwgJ290aGVyJyB8ICd1bmtub3duJztcbiAgICBvcmdhbml6YXRpb24/OiBSZWZlcmVuY2U7IC8vIChPcmdhbml6YXRpb24pXG4gICAgcGVyaW9kPzogUGVyaW9kO1xuICB9W107XG4gIGNvbW11bmljYXRpb24/OiB7IC8vIEJhY2tib25lRWxlbWVudFxuICAgIGxhbmd1YWdlOiBDb2RlYWJsZUNvbmNlcHQ7XG4gICAgcHJlZmVycmVkPzogYm9vbGVhbjtcbiAgfVtdO1xuICBnZW5lcmFsUHJhY3RpdGlvbmVyPzogUmVmZXJlbmNlW107IC8vIChPcmdhbml6YXRpb24gfCBQcmFjdGl0aW9uZXIgfCBQcmFjdGl0aW9uZXJSb2xlKVxuICBtYW5hZ2luZ09yZ2FuaXphdGlvbj86IFJlZmVyZW5jZTsgLy8gKE9yZ2FuaXphdGlvbilcbiAgbGluaz86IHsgLy8gQmFja2JvbmVFbGVtZW50XG4gICAgb3RoZXI6IFJlZmVyZW5jZTsgLy8gKFBhdGllbnQgfCBSZWxhdGVkUGVyc29uKVxuICAgIHR5cGU6ICdyZXBsYWNlZC1ieScgfCAncmVwbGFjZXMnIHwgJ3JlZmVyJyB8ICdzZWVhbHNvJztcbiAgfVtdO1xuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0TmV3KCkge1xuICAgIHJldHVybiBuZXcgUGF0aWVudCh7bmFtZTogW0h1bWFuTmFtZS5nZXROZXcoKV19KTtcbiAgfVxufVxuIl19
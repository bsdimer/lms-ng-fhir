/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainResource } from '../domain-resource';
export class Location extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'Location';
    }
}
if (false) {
    /** @type {?} */
    Location.prototype.resourceType;
    /** @type {?} */
    Location.prototype.identifier;
    /** @type {?} */
    Location.prototype.status;
    /** @type {?} */
    Location.prototype.operationalStatus;
    /** @type {?} */
    Location.prototype.name;
    /** @type {?} */
    Location.prototype.alias;
    /** @type {?} */
    Location.prototype.description;
    /** @type {?} */
    Location.prototype.mode;
    /** @type {?} */
    Location.prototype.type;
    /** @type {?} */
    Location.prototype.telecom;
    /** @type {?} */
    Location.prototype.address;
    /** @type {?} */
    Location.prototype.physicalType;
    /** @type {?} */
    Location.prototype.position;
    /** @type {?} */
    Location.prototype.managingOrganization;
    /** @type {?} */
    Location.prototype.partOf;
    /** @type {?} */
    Location.prototype.hoursOfOperation;
    /** @type {?} */
    Location.prototype.availabilityExceptions;
    /** @type {?} */
    Location.prototype.endpoint;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sbXMtbmctZmhpci8iLCJzb3VyY2VzIjpbImxpYi9maGlyL3I0L21vZGVsL2VudGl0aWVzXzEvbG9jYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUdsRCxNQUFNLE9BQU8sUUFBUyxTQUFRLGNBQWM7SUFBNUM7O1FBQ0UsaUJBQVksR0FBVyxVQUFVLENBQUM7SUEyQnBDLENBQUM7Q0FBQTs7O0lBM0JDLGdDQUFrQzs7SUFDbEMsOEJBQTBCOztJQUMxQiwwQkFBNkM7O0lBQzdDLHFDQUEyQjs7SUFDM0Isd0JBQWM7O0lBQ2QseUJBQWlCOztJQUNqQiwrQkFBcUI7O0lBQ3JCLHdCQUEyQjs7SUFDM0Isd0JBQXlCOztJQUN6QiwyQkFBdUI7O0lBQ3ZCLDJCQUFrQjs7SUFDbEIsZ0NBQStCOztJQUMvQiw0QkFJSTs7SUFDSix3Q0FBaUM7O0lBQ2pDLDBCQUFtQjs7SUFDbkIsb0NBS0k7O0lBQ0osMENBQWdDOztJQUNoQyw0QkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RvbWFpblJlc291cmNlfSBmcm9tICcuLi9kb21haW4tcmVzb3VyY2UnO1xuaW1wb3J0IHtBZGRyZXNzLCBDb2RlYWJsZUNvbmNlcHQsIENvZGluZywgQ29udGFjdFBvaW50LCBJZGVudGlmaWVyLCBSZWZlcmVuY2V9IGZyb20gJy4uJztcblxuZXhwb3J0IGNsYXNzIExvY2F0aW9uIGV4dGVuZHMgRG9tYWluUmVzb3VyY2Uge1xuICByZXNvdXJjZVR5cGU6IHN0cmluZyA9ICdMb2NhdGlvbic7XG4gIGlkZW50aWZpZXI/OiBJZGVudGlmaWVyW107XG4gIHN0YXR1cz86ICdhY3RpdmUnIHwgJ3N1c3BlbmRlZCcgfCAnaW5hY3RpdmUnO1xuICBvcGVyYXRpb25hbFN0YXR1cz86IENvZGluZztcbiAgbmFtZT86IHN0cmluZztcbiAgYWxpYXM/OiBzdHJpbmdbXTtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIG1vZGU/OiAnaW5zdGFuY2UnIHwgJ2tpbmQnO1xuICB0eXBlPzogQ29kZWFibGVDb25jZXB0W107XG4gIHRlbGVjb20/OiBDb250YWN0UG9pbnQ7XG4gIGFkZHJlc3M/OiBBZGRyZXNzO1xuICBwaHlzaWNhbFR5cGU/OiBDb2RlYWJsZUNvbmNlcHQ7XG4gIHBvc2l0aW9uPzoge1xuICAgIGxvbmdpdHVkZTogbnVtYmVyOyAvLyBkZWNpbWFsXHRSZWdleDogLT8oMHxbMS05XVswLTldKikoXFwuWzAtOV0rKT8oW2VFXVsrLV0/WzAtOV0rKT9cbiAgICBsYXRpdHVkZTogbnVtYmVyO1xuICAgIGFsdGl0dWRlPzogbnVtYmVyO1xuICB9W107XG4gIG1hbmFnaW5nT3JnYW5pemF0aW9uPzogUmVmZXJlbmNlOyAvLyAoT3JnYW5pemF0aW9uKVxuICBwYXJ0T2Y/OiBSZWZlcmVuY2U7IC8vIChMb2NhdGlvbilcbiAgaG91cnNPZk9wZXJhdGlvbj86IHtcbiAgICBkYXlzT2ZXZWVrPzogc3RyaW5nW107XG4gICAgYWxsRGF5PzogYm9vbGVhbjtcbiAgICBvcGVuaW5nVGltZT86IERhdGU7IC8vIFJlZ2V4OiAoWzAxXVswLTldfDJbMC0zXSk6WzAtNV1bMC05XTooWzAtNV1bMC05XXw2MCkoXFwuWzAtOV0rKT9cbiAgICBjbG9zaW5nVGltZT86IERhdGU7XG4gIH1bXTtcbiAgYXZhaWxhYmlsaXR5RXhjZXB0aW9ucz86IHN0cmluZztcbiAgZW5kcG9pbnQ/OiBSZWZlcmVuY2U7IC8vIChFbmRwb2ludClcbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainResource } from '../domain-resource';
export class Encounter extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'Encounter';
    }
}
if (false) {
    /** @type {?} */
    Encounter.prototype.resourceType;
    /** @type {?} */
    Encounter.prototype.identifier;
    /** @type {?} */
    Encounter.prototype.status;
    /** @type {?} */
    Encounter.prototype.statusHistory;
    /** @type {?} */
    Encounter.prototype.class;
    /** @type {?} */
    Encounter.prototype.classHistory;
    /** @type {?} */
    Encounter.prototype.type;
    /** @type {?} */
    Encounter.prototype.serviceType;
    /** @type {?} */
    Encounter.prototype.priority;
    /** @type {?} */
    Encounter.prototype.subject;
    /** @type {?} */
    Encounter.prototype.episodeOfCare;
    /** @type {?} */
    Encounter.prototype.basedOn;
    /** @type {?} */
    Encounter.prototype.participant;
    /** @type {?} */
    Encounter.prototype.appointment;
    /** @type {?} */
    Encounter.prototype.period;
    /** @type {?} */
    Encounter.prototype.length;
    /** @type {?} */
    Encounter.prototype.reasonCode;
    /** @type {?} */
    Encounter.prototype.reasonReference;
    /** @type {?} */
    Encounter.prototype.diagnosis;
    /** @type {?} */
    Encounter.prototype.account;
    /** @type {?} */
    Encounter.prototype.hospitalization;
    /** @type {?} */
    Encounter.prototype.location;
    /** @type {?} */
    Encounter.prototype.serviceProvider;
    /** @type {?} */
    Encounter.prototype.partOf;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb3VudGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9tb2RlbC9tYW5hZ2VtZW50L2VuY291bnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBSWxELE1BQU0sT0FBTyxTQUFVLFNBQVEsY0FBYztJQUE3Qzs7UUFDRSxpQkFBWSxHQUFXLFdBQVcsQ0FBQztJQXFEckMsQ0FBQztDQUFBOzs7SUFyREMsaUNBQW1DOztJQUNuQywrQkFBMEI7O0lBQzFCLDJCQUFpRzs7SUFDakcsa0NBR0k7O0lBQ0osMEJBQWM7O0lBQ2QsaUNBR0k7O0lBQ0oseUJBQXlCOztJQUN6QixnQ0FBOEI7O0lBQzlCLDZCQUEyQjs7SUFDM0IsNEJBQW9COztJQUNwQixrQ0FBNEI7O0lBQzVCLDRCQUFzQjs7SUFDdEIsZ0NBSUk7O0lBQ0osZ0NBQTBCOztJQUMxQiwyQkFBZ0I7O0lBQ2hCLDJCQUFrQjs7SUFDbEIsK0JBQStCOztJQUMvQixvQ0FBOEI7O0lBQzlCLDhCQUlJOztJQUNKLDRCQUFzQjs7SUFDdEIsb0NBVUU7O0lBQ0YsNkJBS0k7O0lBQ0osb0NBQTRCOztJQUM1QiwyQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RvbWFpblJlc291cmNlfSBmcm9tICcuLi9kb21haW4tcmVzb3VyY2UnO1xuaW1wb3J0IHtDb2RlYWJsZUNvbmNlcHQsIENvZGluZywgSWRlbnRpZmllciwgUGVyaW9kLCBSZWZlcmVuY2V9IGZyb20gJy4uJztcbmltcG9ydCB7RHVyYXRpb259IGZyb20gJy4uL21lZGljYXRpb25zL2R1cmF0aW9uJztcblxuZXhwb3J0IGNsYXNzIEVuY291bnRlciBleHRlbmRzIERvbWFpblJlc291cmNlIHtcbiAgcmVzb3VyY2VUeXBlOiBzdHJpbmcgPSAnRW5jb3VudGVyJztcbiAgaWRlbnRpZmllcj86IElkZW50aWZpZXJbXTtcbiAgc3RhdHVzOiAncGxhbm5lZCcgfCAnYXJyaXZlZCcgfCAndHJpYWdlZCcgfCAnaW4tcHJvZ3Jlc3MnIHwgJ29ubGVhdmUnIHwgJ2ZpbmlzaGVkJyB8ICdjYW5jZWxsZWQnO1xuICBzdGF0dXNIaXN0b3J5PzogeyAvLyBCYWNrYm9uZUVsZW1lbnRcbiAgICBzdGF0dXM6ICdwbGFubmVkJyB8ICdhcnJpdmVkJyB8ICd0cmlhZ2VkJyB8ICdpbi1wcm9ncmVzcycgfCAnb25sZWF2ZScgfCAnZmluaXNoZWQnIHwgJ2NhbmNlbGxlZCc7XG4gICAgcGVyaW9kOiBQZXJpb2RcbiAgfVtdO1xuICBjbGFzczogQ29kaW5nO1xuICBjbGFzc0hpc3Rvcnk/OiB7IC8vIEJhY2tib25lRWxlbWVudFxuICAgIGNsYXNzOiBDb2Rpbmc7XG4gICAgcGVyaW9kOiBQZXJpb2RcbiAgfVtdO1xuICB0eXBlPzogQ29kZWFibGVDb25jZXB0W107XG4gIHNlcnZpY2VUeXBlPzogQ29kZWFibGVDb25jZXB0O1xuICBwcmlvcml0eT86IENvZGVhYmxlQ29uY2VwdDtcbiAgc3ViamVjdD86IFJlZmVyZW5jZTsgLy8gKFBhdGllbnQgfCBHcm91cClcbiAgZXBpc29kZU9mQ2FyZT86IFJlZmVyZW5jZVtdOyAvLyAoRXBpc29kZU9mQ2FyZSlcbiAgYmFzZWRPbj86IFJlZmVyZW5jZVtdOyAvLyAoU2VydmljZVJlcXVlc3QpXG4gIHBhcnRpY2lwYW50PzogeyAvLyBCYWNrYm9uZUVsZW1lbnRcbiAgICB0eXBlPzogQ29kZWFibGVDb25jZXB0W107XG4gICAgcGVyaW9kPzogUGVyaW9kO1xuICAgIGluZGl2aWR1YWw/OiBSZWZlcmVuY2U7IC8vIChQcmFjdGl0aW9uZXIgfCBQcmFjdGl0aW9uZXJSb2xlIHwgUmVsYXRlZFBlcnNvbilcbiAgfVtdO1xuICBhcHBvaW50bWVudD86IFJlZmVyZW5jZVtdOyAvLyAoQXBwb2ludG1lbnQpXG4gIHBlcmlvZD86IFBlcmlvZDtcbiAgbGVuZ3RoPzogRHVyYXRpb247XG4gIHJlYXNvbkNvZGU/OiBDb2RlYWJsZUNvbmNlcHRbXTtcbiAgcmVhc29uUmVmZXJlbmNlPzogUmVmZXJlbmNlW107IC8vIChDb25kaXRpb24gfCBQcm9jZWR1cmUgfCBPYnNlcnZhdGlvbiB8IEltbXVuaXphdGlvblJlY29tbWVuZGF0aW9uKVxuICBkaWFnbm9zaXM/OiB7IC8vIEJhY2tib25lRWxlbWVudFxuICAgIGNvbmRpdGlvbjogUmVmZXJlbmNlOyAvLyAoQ29uZGl0aW9uIHwgUHJvY2VkdXJlKVxuICAgIHVzZT86IENvZGVhYmxlQ29uY2VwdDtcbiAgICByYW5rPzogbnVtYmVyOyAvLyBwb3NpdGl2ZUludCBSZWdleDogKz9bMS05XVswLTldKlxuICB9W107XG4gIGFjY291bnQ/OiBSZWZlcmVuY2VbXTtcbiAgaG9zcGl0YWxpemF0aW9uPzogeyAvLyBCYWNrYm9uZUVsZW1lbnRcbiAgICBwcmVBZG1pc3Npb25JZGVudGlmaWVyPzogSWRlbnRpZmllcjtcbiAgICBvcmlnaW4/OiBSZWZlcmVuY2U7IC8vIChMb2NhdGlvbiB8IE9yZ2FuaXphdGlvbilcbiAgICBhZG1pdFNvdXJjZT86IENvZGVhYmxlQ29uY2VwdDtcbiAgICByZUFkbWlzc2lvbj86IENvZGVhYmxlQ29uY2VwdDtcbiAgICBkaWV0UHJlZmVyZW5jZT86IENvZGVhYmxlQ29uY2VwdFtdO1xuICAgIHNwZWNpYWxDb3VydGVzeT86IENvZGVhYmxlQ29uY2VwdFtdO1xuICAgIHNwZWNpYWxBcnJhbmdlbWVudD86IENvZGVhYmxlQ29uY2VwdFtdO1xuICAgIGRlc3RpbmF0aW9uPzogUmVmZXJlbmNlOyAvLyAoTG9jYXRpb24gfCBPcmdhbml6YXRpb24pXG4gICAgZGlzY2hhcmdlRGlzcG9zaXRpb24/OiBDb2RlYWJsZUNvbmNlcHQ7XG4gIH07XG4gIGxvY2F0aW9uPzogeyAvLyBCYWNrYm9uZUVsZW1lbnRcbiAgICBsb2NhdGlvbjogUmVmZXJlbmNlOyAvLyAoTG9jYXRpb24pXG4gICAgc3RhdHVzPzogJ3BsYW5uZWQnIHwgJ2FjdGl2ZScgfCAncmVzZXJ2ZWQnIHwgJ2NvbXBsZXRlZCc7XG4gICAgcGh5c2ljYWxUeXBlPzogQ29kZWFibGVDb25jZXB0O1xuICAgIHBlcmlvZD86IFBlcmlvZDtcbiAgfVtdO1xuICBzZXJ2aWNlUHJvdmlkZXI/OiBSZWZlcmVuY2U7IC8vIChPcmdhbml6YXRpb24pXG4gIHBhcnRPZj86IFJlZmVyZW5jZTsgLy8gKEVuY291bnRlcilcbn1cbiJdfQ==
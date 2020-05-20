/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainResource } from '../domain-resource';
export class ChargeItemDefinition extends DomainResource {
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
    ChargeItemDefinition.prototype.url;
    /** @type {?} */
    ChargeItemDefinition.prototype.identifier;
    /** @type {?} */
    ChargeItemDefinition.prototype.version;
    /** @type {?} */
    ChargeItemDefinition.prototype.title;
    /** @type {?} */
    ChargeItemDefinition.prototype.derivedFromUri;
    /** @type {?} */
    ChargeItemDefinition.prototype.partOf;
    /** @type {?} */
    ChargeItemDefinition.prototype.replaces;
    /** @type {?} */
    ChargeItemDefinition.prototype.status;
    /** @type {?} */
    ChargeItemDefinition.prototype.experimental;
    /** @type {?} */
    ChargeItemDefinition.prototype.date;
    /** @type {?} */
    ChargeItemDefinition.prototype.publisher;
    /** @type {?} */
    ChargeItemDefinition.prototype.contact;
    /** @type {?} */
    ChargeItemDefinition.prototype.description;
    /** @type {?} */
    ChargeItemDefinition.prototype.useContext;
    /** @type {?} */
    ChargeItemDefinition.prototype.jurisdiction;
    /** @type {?} */
    ChargeItemDefinition.prototype.copyright;
    /** @type {?} */
    ChargeItemDefinition.prototype.approvalDate;
    /** @type {?} */
    ChargeItemDefinition.prototype.lastReviewDate;
    /** @type {?} */
    ChargeItemDefinition.prototype.effectivePeriod;
    /** @type {?} */
    ChargeItemDefinition.prototype.code;
    /** @type {?} */
    ChargeItemDefinition.prototype.instance;
    /** @type {?} */
    ChargeItemDefinition.prototype.applicability;
    /** @type {?} */
    ChargeItemDefinition.prototype.propertyGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmdlSXRlbURlZmluaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sbXMtbmctZmhpci8iLCJzb3VyY2VzIjpbImxpYi9maGlyL3I0L21vZGVsL2dlbmVyYWwvY2hhcmdlSXRlbURlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQU1sRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsY0FBYzs7OztJQUNwRCxZQUFZLE1BQVk7UUFDcEIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLE1BQU07WUFDTixLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDM0I7SUFDVCxDQUFDO0NBcUNKOzs7SUFuQ0csbUNBQVk7O0lBQ1osMENBQTBCOztJQUMxQix1Q0FBaUI7O0lBQ2pCLHFDQUFlOztJQUNmLDhDQUEwQjs7SUFDMUIsc0NBQWtCOztJQUNsQix3Q0FBb0I7O0lBQ3BCLHNDQUFtRDs7SUFDbkQsNENBQXVCOztJQUN2QixvQ0FBWTs7SUFDWix5Q0FBbUI7O0lBQ25CLHVDQUEwQjs7SUFDMUIsMkNBQXFCOztJQUNyQiwwQ0FBNEI7O0lBQzVCLDRDQUFpQzs7SUFDakMseUNBQW1COztJQUNuQiw0Q0FBb0I7O0lBQ3BCLDhDQUFzQjs7SUFDdEIsK0NBQXlCOztJQUN6QixvQ0FBdUI7O0lBQ3ZCLHdDQUF1Qjs7SUFDdkIsNkNBSUk7O0lBQ0osNkNBUUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RvbWFpblJlc291cmNlfSBmcm9tICcuLi9kb21haW4tcmVzb3VyY2UnO1xuaW1wb3J0IHtDb2RlYWJsZUNvbmNlcHQsIENvbnRhY3REZXRhaWwsIElkZW50aWZpZXIsIFVzYWdlQ29udGV4dH0gZnJvbSAnLi4vdGVybWlub2xvZ3knO1xuaW1wb3J0IHtQZXJpb2R9IGZyb20gJy4uL3BlcmlvZCc7XG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSAnLi4vcmVmZXJlbmNlJztcbmltcG9ydCB7TW9uZXl9IGZyb20gJy4uL21vbmV5JztcblxuZXhwb3J0IGNsYXNzIENoYXJnZUl0ZW1EZWZpbml0aW9uIGV4dGVuZHMgRG9tYWluUmVzb3VyY2Uge1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZT86IGFueSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZiAoc291cmNlKVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc291cmNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHVybDogc3RyaW5nO1xuICAgIGlkZW50aWZpZXI/OiBJZGVudGlmaWVyW107XG4gICAgdmVyc2lvbj86IHN0cmluZztcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICBkZXJpdmVkRnJvbVVyaT86IHN0cmluZ1tdO1xuICAgIHBhcnRPZj86IHN0cmluZ1tdO1xuICAgIHJlcGxhY2VzPzogc3RyaW5nW107XG4gICAgc3RhdHVzOiAnZHJhZnQnIHwgJ2FjdGl2ZScgfCAncmV0aXJlZCcgfCAndW5rbm93bic7XG4gICAgZXhwZXJpbWVudGFsPzogYm9vbGVhbjtcbiAgICBkYXRlPzogRGF0ZTtcbiAgICBwdWJsaXNoZXI/OiBzdHJpbmc7XG4gICAgY29udGFjdD86IENvbnRhY3REZXRhaWxbXTtcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICB1c2VDb250ZXh0PzogVXNhZ2VDb250ZXh0W107XG4gICAganVyaXNkaWN0aW9uPzogQ29kZWFibGVDb25jZXB0W107XG4gICAgY29weXJpZ2h0Pzogc3RyaW5nO1xuICAgIGFwcHJvdmFsRGF0ZT86IERhdGU7XG4gICAgbGFzdFJldmlld0RhdGU/OiBEYXRlO1xuICAgIGVmZmVjdGl2ZVBlcmlvZD86IFBlcmlvZDtcbiAgICBjb2RlPzogQ29kZWFibGVDb25jZXB0O1xuICAgIGluc3RhbmNlPzogUmVmZXJlbmNlW107XG4gICAgYXBwbGljYWJpbGl0eT86IHsgICAvLyBCYWNrYm9uZUVsZW1lbnRcbiAgICAgICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgIGxhbmd1YWdlPzogc3RyaW5nO1xuICAgICAgICBleHByZXNzaW9uPzogc3RyaW5nO1xuICAgIH1bXTtcbiAgICBwcm9wZXJ0eUdyb3VwPzogeyAvLyBCYWNrYm9uZUVsZW1lblxuICAgICAgICBhcHBsaWNhYmlsaXR5Pzogc3RyaW5nW107XG4gICAgICAgIHByaWNlQ29tcG9uZW50Pzoge1xuICAgICAgICAgICAgdHlwZTogJ2Jhc2UnIHwgJ3N1cmNoYXJnZScgfCAnZGVkdWN0aW9uJyB8ICdkaXNjb3VudCcgfCAndGF4JyB8ICdpbmZvcm1hdGlvbmFsJztcbiAgICAgICAgICAgIGNvZGU/OiBDb2RlYWJsZUNvbmNlcHQ7XG4gICAgICAgICAgICBmYWN0b3I/OiBudW1iZXI7IC8vIGRlY2ltYWxcbiAgICAgICAgICAgIGFtb3VudD86IE1vbmV5O1xuICAgICAgICB9W107XG4gICAgfVtdO1xufVxuIl19
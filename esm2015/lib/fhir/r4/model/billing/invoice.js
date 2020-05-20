/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainResource } from '../domain-resource';
export class Invoice extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'Invoice';
    }
}
if (false) {
    /** @type {?} */
    Invoice.prototype.resourceType;
    /** @type {?} */
    Invoice.prototype.identifier;
    /** @type {?} */
    Invoice.prototype.status;
    /** @type {?} */
    Invoice.prototype.cancelledReason;
    /** @type {?} */
    Invoice.prototype.type;
    /** @type {?} */
    Invoice.prototype.subject;
    /** @type {?} */
    Invoice.prototype.recipient;
    /** @type {?} */
    Invoice.prototype.date;
    /** @type {?} */
    Invoice.prototype.participant;
    /** @type {?} */
    Invoice.prototype.issuer;
    /** @type {?} */
    Invoice.prototype.account;
    /** @type {?} */
    Invoice.prototype.lineItem;
    /** @type {?} */
    Invoice.prototype.totalPriceComponent;
    /** @type {?} */
    Invoice.prototype.totalNet;
    /** @type {?} */
    Invoice.prototype.totalGross;
    /** @type {?} */
    Invoice.prototype.paymentTerms;
    /** @type {?} */
    Invoice.prototype.note;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52b2ljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xtcy1uZy1maGlyLyIsInNvdXJjZXMiOlsibGliL2ZoaXIvcjQvbW9kZWwvYmlsbGluZy9pbnZvaWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFNbEQsTUFBTSxPQUFPLE9BQVEsU0FBUSxjQUFjO0lBQTNDOztRQUNJLGlCQUFZLEdBQVcsU0FBUyxDQUFDO0lBOEJyQyxDQUFDO0NBQUE7OztJQTlCRywrQkFBaUM7O0lBQ2pDLDZCQUEwQjs7SUFDMUIseUJBQTJFOztJQUMzRSxrQ0FBeUI7O0lBQ3pCLHVCQUF1Qjs7SUFDdkIsMEJBQW9COztJQUNwQiw0QkFBc0I7O0lBQ3RCLHVCQUFZOztJQUNaLDhCQUdJOztJQUNKLHlCQUFtQjs7SUFDbkIsMEJBQW9COztJQUNwQiwyQkFVSTs7SUFDSixzQ0FBa0M7O0lBQ2xDLDJCQUFpQjs7SUFDakIsNkJBQW1COztJQUNuQiwrQkFBc0I7O0lBQ3RCLHVCQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RG9tYWluUmVzb3VyY2V9IGZyb20gJy4uL2RvbWFpbi1yZXNvdXJjZSc7XG5pbXBvcnQge0NvZGVhYmxlQ29uY2VwdCwgSWRlbnRpZmllcn0gZnJvbSAnLi4vdGVybWlub2xvZ3knO1xuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gJy4uL3JlZmVyZW5jZSc7XG5pbXBvcnQge01vbmV5fSBmcm9tICcuLi9tb25leSc7XG5pbXBvcnQge0Fubm90YXRpb259IGZyb20gJy4uL3dvcmtmbG93JztcblxuZXhwb3J0IGNsYXNzIEludm9pY2UgZXh0ZW5kcyBEb21haW5SZXNvdXJjZSB7XG4gICAgcmVzb3VyY2VUeXBlOiBzdHJpbmcgPSAnSW52b2ljZSc7XG4gICAgaWRlbnRpZmllcj86IElkZW50aWZpZXJbXTtcbiAgICBzdGF0dXM6ICdkcmFmdCcgfCAnaXNzdWVkJyB8ICdiYWxhbmNlZCcgfCAnY2FuY2VsbGVkJyB8ICdlbnRlcmVkLWluLWVycm9yJztcbiAgICBjYW5jZWxsZWRSZWFzb24/OiBzdHJpbmc7XG4gICAgdHlwZT86IENvZGVhYmxlQ29uY2VwdDtcbiAgICBzdWJqZWN0PzogUmVmZXJlbmNlO1xuICAgIHJlY2lwaWVudD86IFJlZmVyZW5jZTtcbiAgICBkYXRlPzogRGF0ZTtcbiAgICBwYXJ0aWNpcGFudD86IHsgLy8gQmFja2JvbmVFbGVtZW50XG4gICAgICAgIHJvbGU/OiBDb2RlYWJsZUNvbmNlcHQ7XG4gICAgICAgIGFjdG9yOiBSZWZlcmVuY2U7XG4gICAgfVtdO1xuICAgIGlzc3Vlcj86IFJlZmVyZW5jZTtcbiAgICBhY2NvdW50PzogUmVmZXJlbmNlO1xuICAgIGxpbmVJdGVtPzogeyAvLyBCYWNrYm9uZUVsZW1lbnRcbiAgICAgICAgc2VxdWVuY2U/OiBudW1iZXI7XG4gICAgICAgIGNoYXJnZUl0ZW1SZWZlcmVuY2U6IFJlZmVyZW5jZTtcbiAgICAgICAgY2hhcmdlSXRlbUNvZGVhYmxlQ29uY2VwdDogQ29kZWFibGVDb25jZXB0O1xuICAgICAgICBwcmljZUNvbXBvbmVudD86IHsgLy8gQmFja2JvbmVFbGVtZW50XG4gICAgICAgICAgICB0eXBlOiAnYmFzZScgfCAnc3VyY2hhcmdlJyB8ICdkZWR1Y3Rpb24nIHwgJ2Rpc2NvdW50JyB8ICd0YXgnIHwgJ2luZm9ybWF0aW9uYWwnO1xuICAgICAgICAgICAgY29kZT86IENvZGVhYmxlQ29uY2VwdDtcbiAgICAgICAgICAgIGZhY3Rvcj86IG51bWJlcjtcbiAgICAgICAgICAgIGFtb3VudD86IE1vbmV5O1xuICAgICAgICB9W107XG4gICAgfVtdO1xuICAgIHRvdGFsUHJpY2VDb21wb25lbnQ/OiBSZWZlcmVuY2VbXTtcbiAgICB0b3RhbE5ldD86IE1vbmV5O1xuICAgIHRvdGFsR3Jvc3M/OiBNb25leTtcbiAgICBwYXltZW50VGVybXM/OiBzdHJpbmc7XG4gICAgbm90ZT86IEFubm90YXRpb25bXTtcbn1cbiJdfQ==
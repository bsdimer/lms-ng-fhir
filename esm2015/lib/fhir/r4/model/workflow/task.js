/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainResource } from '../domain-resource';
export class Task extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'Task';
    }
}
if (false) {
    /** @type {?} */
    Task.prototype.resourceType;
    /** @type {?} */
    Task.prototype.identifier;
    /** @type {?} */
    Task.prototype.instantiatesCanonical;
    /** @type {?} */
    Task.prototype.instantiatesUri;
    /** @type {?} */
    Task.prototype.basedOn;
    /** @type {?} */
    Task.prototype.groupIdentifier;
    /** @type {?} */
    Task.prototype.partOf;
    /** @type {?} */
    Task.prototype.status;
    /** @type {?} */
    Task.prototype.statusReason;
    /** @type {?} */
    Task.prototype.businessStatus;
    /** @type {?} */
    Task.prototype.intent;
    /** @type {?} */
    Task.prototype.priority;
    /** @type {?} */
    Task.prototype.code;
    /** @type {?} */
    Task.prototype.description;
    /** @type {?} */
    Task.prototype.focus;
    /** @type {?} */
    Task.prototype.for;
    /** @type {?} */
    Task.prototype.encounter;
    /** @type {?} */
    Task.prototype.executionPeriod;
    /** @type {?} */
    Task.prototype.authoredOn;
    /** @type {?} */
    Task.prototype.lastModified;
    /** @type {?} */
    Task.prototype.requester;
    /** @type {?} */
    Task.prototype.performerType;
    /** @type {?} */
    Task.prototype.owner;
    /** @type {?} */
    Task.prototype.location;
    /** @type {?} */
    Task.prototype.reasonCode;
    /** @type {?} */
    Task.prototype.reasonReference;
    /** @type {?} */
    Task.prototype.insurance;
    /** @type {?} */
    Task.prototype.note;
    /** @type {?} */
    Task.prototype.relevantHistory;
    /** @type {?} */
    Task.prototype.restriction;
    /** @type {?} */
    Task.prototype.input;
    /** @type {?} */
    Task.prototype.output;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xtcy1uZy1maGlyLyIsInNvdXJjZXMiOlsibGliL2ZoaXIvcjQvbW9kZWwvd29ya2Zsb3cvdGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBSWxELE1BQU0sT0FBTyxJQUFLLFNBQVEsY0FBYztJQUF4Qzs7UUFDSSxpQkFBWSxHQUFXLE1BQU0sQ0FBQztJQTBDbEMsQ0FBQztDQUFBOzs7SUExQ0csNEJBQThCOztJQUM5QiwwQkFBMEI7O0lBQzFCLHFDQUErQjs7SUFDL0IsK0JBQXlCOztJQUN6Qix1QkFBc0I7O0lBQ3RCLCtCQUE2Qjs7SUFDN0Isc0JBQXFCOztJQUNyQixzQkFBOEQ7O0lBQzlELDRCQUErQjs7SUFDL0IsOEJBQWlDOztJQUNqQyxzQkFBcUk7O0lBQ3JJLHdCQUFrRDs7SUFDbEQsb0JBQXVCOztJQUN2QiwyQkFBcUI7O0lBQ3JCLHFCQUFrQjs7SUFDbEIsbUJBQWdCOztJQUNoQix5QkFBc0I7O0lBQ3RCLCtCQUF5Qjs7SUFDekIsMEJBQWtCOztJQUNsQiw0QkFBb0I7O0lBQ3BCLHlCQUFzQjs7SUFDdEIsNkJBQWtDOztJQUNsQyxxQkFBa0I7O0lBQ2xCLHdCQUFxQjs7SUFDckIsMEJBQTZCOztJQUM3QiwrQkFBNEI7O0lBQzVCLHlCQUFzQjs7SUFDdEIsb0JBQW9COztJQUNwQiwrQkFBOEI7O0lBQzlCLDJCQUlFOztJQUNGLHFCQUdJOztJQUNKLHNCQUdJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb21haW5SZXNvdXJjZX0gZnJvbSAnLi4vZG9tYWluLXJlc291cmNlJztcbmltcG9ydCB7Q29kZWFibGVDb25jZXB0LCBJZGVudGlmaWVyLCBQZXJpb2QsIFJlZmVyZW5jZX0gZnJvbSAnLi4nO1xuaW1wb3J0IHtBbm5vdGF0aW9ufSBmcm9tICcuL2Fubm90YXRpb24nO1xuXG5leHBvcnQgY2xhc3MgVGFzayBleHRlbmRzIERvbWFpblJlc291cmNlIHtcbiAgICByZXNvdXJjZVR5cGU6IHN0cmluZyA9ICdUYXNrJztcbiAgICBpZGVudGlmaWVyPzogSWRlbnRpZmllcltdO1xuICAgIGluc3RhbnRpYXRlc0Nhbm9uaWNhbD86IHN0cmluZzsgLy8gY2Fub25pY2FsKEFjdGl2aXR5RGVmaW5pdGlvbilcbiAgICBpbnN0YW50aWF0ZXNVcmk/OiBzdHJpbmc7IC8vIHVyaVxuICAgIGJhc2VkT24/OiBSZWZlcmVuY2VbXTsgLy8gKEFueSlcbiAgICBncm91cElkZW50aWZpZXI/OiBJZGVudGlmaWVyO1xuICAgIHBhcnRPZj86IFJlZmVyZW5jZVtdOyAvLyAoVGFzaylcbiAgICBzdGF0dXM6ICdkcmFmdCcgfCAncmVxdWVzdGVkJyB8ICdyZWNlaXZlZCcgfCAnYWNjZXB0ZWQnIHwgJysnOyAvLyBUYXNrU3RhdHVzIChSZXF1aXJlZClcbiAgICBzdGF0dXNSZWFzb24/OiBDb2RlYWJsZUNvbmNlcHQ7XG4gICAgYnVzaW5lc3NTdGF0dXM/OiBDb2RlYWJsZUNvbmNlcHQ7XG4gICAgaW50ZW50OiAndW5rbm93bicgfCAncHJvcG9zYWwnIHwgJ3BsYW4nIHwgJ29yZGVyJyB8ICdvcmlnaW5hbC1vcmRlcicgfCAncmVmbGV4LW9yZGVyJyB8ICdmaWxsZXItb3JkZXInIHwgJ2luc3RhbmNlLW9yZGVyJyB8ICdvcHRpb24nO1xuICAgIHByaW9yaXR5PzogJ3JvdXRpbmUnIHwgJ3VyZ2VudCcgfCAnYXNhcCcgfCAnc3RhdCc7XG4gICAgY29kZT86IENvZGVhYmxlQ29uY2VwdDtcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICBmb2N1cz86IFJlZmVyZW5jZTsgLy8gKEFueSlcbiAgICBmb3I/OiBSZWZlcmVuY2U7IC8vIChBbnkpXG4gICAgZW5jb3VudGVyPzogUmVmZXJlbmNlOyAvLyAoRW5jb3VudGVyKVxuICAgIGV4ZWN1dGlvblBlcmlvZD86IFBlcmlvZDtcbiAgICBhdXRob3JlZE9uPzogRGF0ZTtcbiAgICBsYXN0TW9kaWZpZWQ/OiBEYXRlO1xuICAgIHJlcXVlc3Rlcj86IFJlZmVyZW5jZTsgLy8gKERldmljZSB8IE9yZ2FuaXphdGlvbiB8IFBhdGllbnQgfCBQcmFjdGl0aW9uZXIgfCBQcmFjdGl0aW9uZXJSb2xlIHwgUmVsYXRlZFBlcnNvbilcbiAgICBwZXJmb3JtZXJUeXBlPzogQ29kZWFibGVDb25jZXB0W107XG4gICAgb3duZXI/OiBSZWZlcmVuY2U7IC8vIChQcmFjdGl0aW9uZXIgfCBQcmFjdGl0aW9uZXJSb2xlIHwgT3JnYW5pemF0aW9uIHwgQ2FyZVRlYW0gfCBIZWFsdGhjYXJlU2VydmljZSB8IFBhdGllbnQgfCBEZXZpY2UgfCBSZWxhdGVkUGVyc29uKVxuICAgIGxvY2F0aW9uPzogUmVmZXJlbmNlOyAvLyAoTG9jYXRpb24pXG4gICAgcmVhc29uQ29kZT86IENvZGVhYmxlQ29uY2VwdDtcbiAgICByZWFzb25SZWZlcmVuY2U/OiBSZWZlcmVuY2U7IC8vIChBbnkpXG4gICAgaW5zdXJhbmNlPzogUmVmZXJlbmNlOyAvLyAoQ292ZXJhZ2UgfCBDbGFpbVJlc3BvbnNlKVxuICAgIG5vdGU/OiBBbm5vdGF0aW9uW107XG4gICAgcmVsZXZhbnRIaXN0b3J5PzogUmVmZXJlbmNlW107IC8vIChQcm92ZW5hbmNlKVxuICAgIHJlc3RyaWN0aW9uPzogeyAvLyBCYWNrYm9uZUVsZW1lbnRcbiAgICAgICAgcmVwZXRpdGlvbnM/OiBudW1iZXIgLy8gcG9zaXRpdmVJbnQgUmVnZXg6ICs/WzEtOV1bMC05XSpcbiAgICAgICAgcGVyaW9kPzogUGVyaW9kO1xuICAgICAgICByZWNpcGllbnQ/OiBSZWZlcmVuY2VbXTsgLy8gKFBhdGllbnQgfCBQcmFjdGl0aW9uZXIgfCBQcmFjdGl0aW9uZXJSb2xlIHwgUmVsYXRlZFBlcnNvbiB8IEdyb3VwIHwgT3JnYW5pemF0aW9uKVxuICAgIH07XG4gICAgaW5wdXQ/OiB7IC8vIEJhY2tib25lRWxlbWVudFxuICAgICAgICB0eXBlOiBDb2RlYWJsZUNvbmNlcHQ7XG4gICAgICAgIHZhbHVlU3RyaW5nOiBzdHJpbmc7IC8vICpcbiAgICB9W107XG4gICAgb3V0cHV0PzogeyAvLyBCYWNrYm9uZUVsZW1lbnRcbiAgICAgICAgdHlwZTogQ29kZWFibGVDb25jZXB0O1xuICAgICAgICB2YWx1ZVN0cmluZzogc3RyaW5nOyAvLyAqXG4gICAgfVtdO1xufVxuIl19
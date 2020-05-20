/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainResource } from '../domain-resource';
export class Medication extends DomainResource {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        this.resourceType = 'Medication';
        if (source)
            for (const key of Object.keys(source)) {
                this[key] = source[key];
            }
    }
}
if (false) {
    /** @type {?} */
    Medication.prototype.resourceType;
    /** @type {?} */
    Medication.prototype.identifier;
    /** @type {?} */
    Medication.prototype.code;
    /** @type {?} */
    Medication.prototype.status;
    /** @type {?} */
    Medication.prototype.manufacturer;
    /** @type {?} */
    Medication.prototype.form;
    /** @type {?} */
    Medication.prototype.amount;
    /** @type {?} */
    Medication.prototype.ingredient;
    /** @type {?} */
    Medication.prototype.batch;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xtcy1uZy1maGlyLyIsInNvdXJjZXMiOlsibGliL2ZoaXIvcjQvbW9kZWwvbWVkaWNhdGlvbnMvbWVkaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBSWxELE1BQU0sT0FBTyxVQUFXLFNBQVEsY0FBYzs7OztJQUMxQyxZQUFZLE1BQVk7UUFDcEIsS0FBSyxFQUFFLENBQUM7UUFNWixpQkFBWSxHQUFXLFlBQVksQ0FBQztRQUxoQyxJQUFJLE1BQU07WUFDTixLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDM0I7SUFDVCxDQUFDO0NBa0JKOzs7SUFqQkcsa0NBQW9DOztJQUNwQyxnQ0FBMEI7O0lBQzFCLDBCQUF1Qjs7SUFDdkIsNEJBQW9EOztJQUNwRCxrQ0FBeUI7O0lBQ3pCLDBCQUF1Qjs7SUFDdkIsNEJBQWU7O0lBQ2YsZ0NBS0k7O0lBQ0osMkJBR0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RvbWFpblJlc291cmNlfSBmcm9tICcuLi9kb21haW4tcmVzb3VyY2UnO1xuaW1wb3J0IHtDb2RlYWJsZUNvbmNlcHQsIElkZW50aWZpZXIsIFJlZmVyZW5jZX0gZnJvbSAnLi4nO1xuaW1wb3J0IHtSYXRpb30gZnJvbSAnLi4vcmF0aW8nO1xuXG5leHBvcnQgY2xhc3MgTWVkaWNhdGlvbiBleHRlbmRzIERvbWFpblJlc291cmNlIHtcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2U/OiBhbnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKHNvdXJjZSlcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgcmVzb3VyY2VUeXBlOiBzdHJpbmcgPSAnTWVkaWNhdGlvbic7XG4gICAgaWRlbnRpZmllcj86IElkZW50aWZpZXJbXTtcbiAgICBjb2RlPzogQ29kZWFibGVDb25jZXB0O1xuICAgIHN0YXR1cz86ICdhY3RpdmUnIHwgJ2luYWN0aXZlJyB8ICdlbnRlcmVkLWluLWVycm9yJztcbiAgICBtYW51ZmFjdHVyZXI/OiBSZWZlcmVuY2U7IC8vIChPcmdhbml6YXRpb24pXG4gICAgZm9ybT86IENvZGVhYmxlQ29uY2VwdDtcbiAgICBhbW91bnQ/OiBSYXRpbztcbiAgICBpbmdyZWRpZW50Pzoge1xuICAgICAgICBpdGVtQ29kZWFibGVDb25jZXB0OiBDb2RlYWJsZUNvbmNlcHQ7XG4gICAgICAgIGl0ZW1SZWZlcmVuY2U6IFJlZmVyZW5jZTsgLy8gKFN1YnN0YW5jZSB8IE1lZGljYXRpb24pXG4gICAgICAgIGlzQWN0aXZlPzogYm9vbGVhbjtcbiAgICAgICAgc3RyZW5ndGg/OiBSYXRpbztcbiAgICB9W107XG4gICAgYmF0Y2g/OiB7ICAgLy8gQmFja2JvbmVFbGVtZW50XG4gICAgICAgIGxvdE51bWJlcj86IHN0cmluZztcbiAgICAgICAgZXhwaXJhdGlvbkRhdGU/OiBEYXRlO1xuICAgIH07XG59XG4iXX0=
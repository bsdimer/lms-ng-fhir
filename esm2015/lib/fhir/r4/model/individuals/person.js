/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomainResource } from '../domain-resource';
import { HumanName } from './humanname';
export class Person extends DomainResource {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        this.resourceType = 'Person';
        if (source)
            for (const key of Object.keys(source)) {
                this[key] = source[key];
            }
    }
    /**
     * @return {?}
     */
    static getNew() {
        return new Person({ name: [HumanName.getNew()] });
    }
}
if (false) {
    /** @type {?} */
    Person.prototype.resourceType;
    /** @type {?} */
    Person.prototype.identifier;
    /** @type {?} */
    Person.prototype.name;
    /** @type {?} */
    Person.prototype.telecom;
    /** @type {?} */
    Person.prototype.gender;
    /** @type {?} */
    Person.prototype.birthDate;
    /** @type {?} */
    Person.prototype.address;
    /** @type {?} */
    Person.prototype.photo;
    /** @type {?} */
    Person.prototype.managingOrganization;
    /** @type {?} */
    Person.prototype.active;
    /** @type {?} */
    Person.prototype.link;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9tb2RlbC9pbmRpdmlkdWFscy9wZXJzb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBTXRDLE1BQU0sT0FBTyxNQUFPLFNBQVEsY0FBYzs7OztJQUN0QyxZQUFZLE1BQVk7UUFDcEIsS0FBSyxFQUFFLENBQUM7UUFPWixpQkFBWSxHQUFXLFFBQVEsQ0FBQztRQU41QixJQUFJLE1BQU07WUFDTixLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDM0I7SUFDVCxDQUFDOzs7O0lBaUJNLE1BQU0sQ0FBQyxNQUFNO1FBQ2hCLE9BQU8sSUFBSSxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNKOzs7SUFsQkcsOEJBQWdDOztJQUNoQyw0QkFBMEI7O0lBQzFCLHNCQUFtQjs7SUFDbkIseUJBQXlCOztJQUN6Qix3QkFBaUQ7O0lBQ2pELDJCQUFpQjs7SUFDakIseUJBQW9COztJQUNwQix1QkFBbUI7O0lBQ25CLHNDQUFpQzs7SUFDakMsd0JBQWlCOztJQUNqQixzQkFHSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SWRlbnRpZmllcn0gZnJvbSAnLi4vdGVybWlub2xvZ3kvaWRlbnRpZmllcic7XG5pbXBvcnQge0RvbWFpblJlc291cmNlfSBmcm9tICcuLi9kb21haW4tcmVzb3VyY2UnO1xuaW1wb3J0IHtIdW1hbk5hbWV9IGZyb20gJy4vaHVtYW5uYW1lJztcbmltcG9ydCB7Q29udGFjdFBvaW50fSBmcm9tICcuLi90ZXJtaW5vbG9neS9jb250YWN0cG9pbnQnO1xuaW1wb3J0IHtBZGRyZXNzfSBmcm9tICcuL2FkZHJlc3MnO1xuaW1wb3J0IHtBdHRhY2htZW50fSBmcm9tICcuL2F0dGFjaG1lbnQnO1xuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gJy4uL3JlZmVyZW5jZSc7XG5cbmV4cG9ydCBjbGFzcyBQZXJzb24gZXh0ZW5kcyBEb21haW5SZXNvdXJjZSB7XG4gICAgY29uc3RydWN0b3Ioc291cmNlPzogYW55KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmIChzb3VyY2UpXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzb3VyY2VUeXBlOiBzdHJpbmcgPSAnUGVyc29uJztcbiAgICBpZGVudGlmaWVyPzogSWRlbnRpZmllcltdO1xuICAgIG5hbWU/OiBIdW1hbk5hbWVbXTtcbiAgICB0ZWxlY29tPzogQ29udGFjdFBvaW50W107XG4gICAgZ2VuZGVyPzogJ21hbGUnIHwgJ2ZlbWFsZScgfCAnb3RoZXInIHwgJ3Vua25vd24nO1xuICAgIGJpcnRoRGF0ZT86IERhdGU7IC8vIFJlZ2V4OiAoWzAtOV0oWzAtOV0oWzAtOV1bMS05XXxbMS05XTApfFsxLTldMDApfFsxLTldMDAwKSgtKDBbMS05XXwxWzAtMl0pKC0oMFsxLTldfFsxLTJdWzAtOV18M1swLTFdKSk/KT9cbiAgICBhZGRyZXNzPzogQWRkcmVzc1tdO1xuICAgIHBob3RvPzogQXR0YWNobWVudDtcbiAgICBtYW5hZ2luZ09yZ2FuaXphdGlvbj86IFJlZmVyZW5jZTsgLy8gKE9yZ2FuaXphdGlvbilcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIGxpbms/OiB7IC8vIEJhY2tib25lRWxlbWVudFxuICAgICAgICB0YXJnZXQ6IFJlZmVyZW5jZTsgLy8gKFBhdGllbnQgfCBQcmFjdGl0aW9uZXIgfCBSZWxhdGVkUGVyc29uIHwgUGVyc29uKVxuICAgICAgICBhc3N1cmFuY2U/OiAnbGV2ZWwxJyB8ICdsZXZlbDInIHwgJ2xldmVsMycgfCAnbGV2ZWw0JztcbiAgICB9W107XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldE5ldygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQZXJzb24oe25hbWU6IFtIdW1hbk5hbWUuZ2V0TmV3KCldfSk7XG4gICAgfVxufVxuIl19
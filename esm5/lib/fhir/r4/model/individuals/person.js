/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainResource } from '../domain-resource';
import { HumanName } from './humanname';
var Person = /** @class */ (function (_super) {
    tslib_1.__extends(Person, _super);
    function Person(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        _this.resourceType = 'Person';
        if (source)
            try {
                for (var _b = tslib_1.__values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    _this[key] = source[key];
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        return _this;
    }
    /**
     * @return {?}
     */
    Person.getNew = /**
     * @return {?}
     */
    function () {
        return new Person({ name: [HumanName.getNew()] });
    };
    return Person;
}(DomainResource));
export { Person };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9tb2RlbC9pbmRpdmlkdWFscy9wZXJzb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQU10QztJQUE0QixrQ0FBYztJQUN0QyxnQkFBWSxNQUFZOztRQUF4QixZQUNJLGlCQUFPLFNBS1Y7UUFFRCxrQkFBWSxHQUFXLFFBQVEsQ0FBQztRQU41QixJQUFJLE1BQU07O2dCQUNOLEtBQWtCLElBQUEsS0FBQSxpQkFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO29CQUFsQyxJQUFNLEdBQUcsV0FBQTtvQkFDVixLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUMzQjs7Ozs7Ozs7YUFBQTs7SUFDVCxDQUFDOzs7O0lBaUJhLGFBQU07OztJQUFwQjtRQUNJLE9BQU8sSUFBSSxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLEFBM0JELENBQTRCLGNBQWMsR0EyQnpDOzs7O0lBbEJHLDhCQUFnQzs7SUFDaEMsNEJBQTBCOztJQUMxQixzQkFBbUI7O0lBQ25CLHlCQUF5Qjs7SUFDekIsd0JBQWlEOztJQUNqRCwyQkFBaUI7O0lBQ2pCLHlCQUFvQjs7SUFDcEIsdUJBQW1COztJQUNuQixzQ0FBaUM7O0lBQ2pDLHdCQUFpQjs7SUFDakIsc0JBR0kiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lkZW50aWZpZXJ9IGZyb20gJy4uL3Rlcm1pbm9sb2d5L2lkZW50aWZpZXInO1xuaW1wb3J0IHtEb21haW5SZXNvdXJjZX0gZnJvbSAnLi4vZG9tYWluLXJlc291cmNlJztcbmltcG9ydCB7SHVtYW5OYW1lfSBmcm9tICcuL2h1bWFubmFtZSc7XG5pbXBvcnQge0NvbnRhY3RQb2ludH0gZnJvbSAnLi4vdGVybWlub2xvZ3kvY29udGFjdHBvaW50JztcbmltcG9ydCB7QWRkcmVzc30gZnJvbSAnLi9hZGRyZXNzJztcbmltcG9ydCB7QXR0YWNobWVudH0gZnJvbSAnLi9hdHRhY2htZW50JztcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tICcuLi9yZWZlcmVuY2UnO1xuXG5leHBvcnQgY2xhc3MgUGVyc29uIGV4dGVuZHMgRG9tYWluUmVzb3VyY2Uge1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZT86IGFueSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZiAoc291cmNlKVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc291cmNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc291cmNlVHlwZTogc3RyaW5nID0gJ1BlcnNvbic7XG4gICAgaWRlbnRpZmllcj86IElkZW50aWZpZXJbXTtcbiAgICBuYW1lPzogSHVtYW5OYW1lW107XG4gICAgdGVsZWNvbT86IENvbnRhY3RQb2ludFtdO1xuICAgIGdlbmRlcj86ICdtYWxlJyB8ICdmZW1hbGUnIHwgJ290aGVyJyB8ICd1bmtub3duJztcbiAgICBiaXJ0aERhdGU/OiBEYXRlOyAvLyBSZWdleDogKFswLTldKFswLTldKFswLTldWzEtOV18WzEtOV0wKXxbMS05XTAwKXxbMS05XTAwMCkoLSgwWzEtOV18MVswLTJdKSgtKDBbMS05XXxbMS0yXVswLTldfDNbMC0xXSkpPyk/XG4gICAgYWRkcmVzcz86IEFkZHJlc3NbXTtcbiAgICBwaG90bz86IEF0dGFjaG1lbnQ7XG4gICAgbWFuYWdpbmdPcmdhbml6YXRpb24/OiBSZWZlcmVuY2U7IC8vIChPcmdhbml6YXRpb24pXG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICBsaW5rPzogeyAvLyBCYWNrYm9uZUVsZW1lbnRcbiAgICAgICAgdGFyZ2V0OiBSZWZlcmVuY2U7IC8vIChQYXRpZW50IHwgUHJhY3RpdGlvbmVyIHwgUmVsYXRlZFBlcnNvbiB8IFBlcnNvbilcbiAgICAgICAgYXNzdXJhbmNlPzogJ2xldmVsMScgfCAnbGV2ZWwyJyB8ICdsZXZlbDMnIHwgJ2xldmVsNCc7XG4gICAgfVtdO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXROZXcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUGVyc29uKHtuYW1lOiBbSHVtYW5OYW1lLmdldE5ldygpXX0pO1xuICAgIH1cbn1cbiJdfQ==
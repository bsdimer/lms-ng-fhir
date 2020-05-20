/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Element } from '../element';
var HumanName = /** @class */ (function (_super) {
    tslib_1.__extends(HumanName, _super);
    function HumanName(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        _this.given = [];
        _this.prefix = [];
        _this.suffix = [];
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
    HumanName.getNew = /**
     * @return {?}
     */
    function () {
        return new HumanName({ use: 'official', given: ['name'] });
    };
    return HumanName;
}(Element));
export { HumanName };
if (false) {
    /** @type {?} */
    HumanName.prototype.use;
    /** @type {?} */
    HumanName.prototype.text;
    /** @type {?} */
    HumanName.prototype.family;
    /** @type {?} */
    HumanName.prototype.given;
    /** @type {?} */
    HumanName.prototype.prefix;
    /** @type {?} */
    HumanName.prototype.suffix;
    /** @type {?} */
    HumanName.prototype.period;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVtYW5uYW1lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9tb2RlbC9pbmRpdmlkdWFscy9odW1hbm5hbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBR3JDO0lBQStCLHFDQUFPO0lBRWxDLG1CQUFZLE1BQVk7O1FBQXhCLFlBQ0ksaUJBQU8sU0FLVjtRQUtELFdBQUssR0FBYyxFQUFFLENBQUM7UUFDdEIsWUFBTSxHQUFjLEVBQUUsQ0FBQztRQUN2QixZQUFNLEdBQWMsRUFBRSxDQUFDO1FBWG5CLElBQUksTUFBTTs7Z0JBQ04sS0FBa0IsSUFBQSxLQUFBLGlCQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUEsZ0JBQUEsNEJBQUU7b0JBQWxDLElBQU0sR0FBRyxXQUFBO29CQUNWLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzNCOzs7Ozs7OzthQUFBOztJQUNULENBQUM7Ozs7SUFVYSxnQkFBTTs7O0lBQXBCO1FBQ0ksT0FBTyxJQUFJLFNBQVMsQ0FBQyxFQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQUFyQkQsQ0FBK0IsT0FBTyxHQXFCckM7Ozs7SUFYRyx3QkFBa0Y7O0lBQ2xGLHlCQUFjOztJQUNkLDJCQUFnQjs7SUFDaEIsMEJBQXNCOztJQUN0QiwyQkFBdUI7O0lBQ3ZCLDJCQUF1Qjs7SUFDdkIsMkJBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJy4uL2VsZW1lbnQnO1xuaW1wb3J0IHsgUGVyaW9kIH0gZnJvbSAnLi4vcGVyaW9kJztcblxuZXhwb3J0IGNsYXNzIEh1bWFuTmFtZSBleHRlbmRzIEVsZW1lbnQge1xuXG4gICAgY29uc3RydWN0b3Ioc291cmNlPzogYW55KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmIChzb3VyY2UpXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlPzogJ3VzdWFsJyB8ICdvZmZpY2lhbCcgfCAndGVtcCcgfCAnbmlja25hbWUnIHwgJ2Fub255bW91cycgfCAnb2xkJyB8ICdtYWlkZW4nO1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgZmFtaWx5Pzogc3RyaW5nO1xuICAgIGdpdmVuPzogc3RyaW5nW10gPSBbXTtcbiAgICBwcmVmaXg/OiBzdHJpbmdbXSA9IFtdO1xuICAgIHN1ZmZpeD86IHN0cmluZ1tdID0gW107XG4gICAgcGVyaW9kPzogUGVyaW9kO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXROZXcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgSHVtYW5OYW1lKHt1c2U6ICdvZmZpY2lhbCcsIGdpdmVuOiBbJ25hbWUnXX0pO1xuICAgIH1cbn1cbiJdfQ==
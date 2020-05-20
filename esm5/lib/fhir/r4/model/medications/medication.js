/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DomainResource } from '../domain-resource';
var Medication = /** @class */ (function (_super) {
    tslib_1.__extends(Medication, _super);
    function Medication(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        _this.resourceType = 'Medication';
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
    return Medication;
}(DomainResource));
export { Medication };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xtcy1uZy1maGlyLyIsInNvdXJjZXMiOlsibGliL2ZoaXIvcjQvbW9kZWwvbWVkaWNhdGlvbnMvbWVkaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUlsRDtJQUFnQyxzQ0FBYztJQUMxQyxvQkFBWSxNQUFZOztRQUF4QixZQUNJLGlCQUFPLFNBS1Y7UUFDRCxrQkFBWSxHQUFXLFlBQVksQ0FBQztRQUxoQyxJQUFJLE1BQU07O2dCQUNOLEtBQWtCLElBQUEsS0FBQSxpQkFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO29CQUFsQyxJQUFNLEdBQUcsV0FBQTtvQkFDVixLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUMzQjs7Ozs7Ozs7YUFBQTs7SUFDVCxDQUFDO0lBa0JMLGlCQUFDO0FBQUQsQ0FBQyxBQXpCRCxDQUFnQyxjQUFjLEdBeUI3Qzs7OztJQWpCRyxrQ0FBb0M7O0lBQ3BDLGdDQUEwQjs7SUFDMUIsMEJBQXVCOztJQUN2Qiw0QkFBb0Q7O0lBQ3BELGtDQUF5Qjs7SUFDekIsMEJBQXVCOztJQUN2Qiw0QkFBZTs7SUFDZixnQ0FLSTs7SUFDSiwyQkFHRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RG9tYWluUmVzb3VyY2V9IGZyb20gJy4uL2RvbWFpbi1yZXNvdXJjZSc7XG5pbXBvcnQge0NvZGVhYmxlQ29uY2VwdCwgSWRlbnRpZmllciwgUmVmZXJlbmNlfSBmcm9tICcuLic7XG5pbXBvcnQge1JhdGlvfSBmcm9tICcuLi9yYXRpbyc7XG5cbmV4cG9ydCBjbGFzcyBNZWRpY2F0aW9uIGV4dGVuZHMgRG9tYWluUmVzb3VyY2Uge1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZT86IGFueSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZiAoc291cmNlKVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc291cmNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICByZXNvdXJjZVR5cGU6IHN0cmluZyA9ICdNZWRpY2F0aW9uJztcbiAgICBpZGVudGlmaWVyPzogSWRlbnRpZmllcltdO1xuICAgIGNvZGU/OiBDb2RlYWJsZUNvbmNlcHQ7XG4gICAgc3RhdHVzPzogJ2FjdGl2ZScgfCAnaW5hY3RpdmUnIHwgJ2VudGVyZWQtaW4tZXJyb3InO1xuICAgIG1hbnVmYWN0dXJlcj86IFJlZmVyZW5jZTsgLy8gKE9yZ2FuaXphdGlvbilcbiAgICBmb3JtPzogQ29kZWFibGVDb25jZXB0O1xuICAgIGFtb3VudD86IFJhdGlvO1xuICAgIGluZ3JlZGllbnQ/OiB7XG4gICAgICAgIGl0ZW1Db2RlYWJsZUNvbmNlcHQ6IENvZGVhYmxlQ29uY2VwdDtcbiAgICAgICAgaXRlbVJlZmVyZW5jZTogUmVmZXJlbmNlOyAvLyAoU3Vic3RhbmNlIHwgTWVkaWNhdGlvbilcbiAgICAgICAgaXNBY3RpdmU/OiBib29sZWFuO1xuICAgICAgICBzdHJlbmd0aD86IFJhdGlvO1xuICAgIH1bXTtcbiAgICBiYXRjaD86IHsgICAvLyBCYWNrYm9uZUVsZW1lbnRcbiAgICAgICAgbG90TnVtYmVyPzogc3RyaW5nO1xuICAgICAgICBleHBpcmF0aW9uRGF0ZT86IERhdGU7XG4gICAgfTtcbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Element } from './element';
var Money = /** @class */ (function (_super) {
    tslib_1.__extends(Money, _super);
    function Money(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
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
    return Money;
}(Element));
export { Money };
if (false) {
    /** @type {?} */
    Money.prototype.value;
    /** @type {?} */
    Money.prototype.currency;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sbXMtbmctZmhpci8iLCJzb3VyY2VzIjpbImxpYi9maGlyL3I0L21vZGVsL21vbmV5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUVsQztJQUEyQixpQ0FBTztJQUM5QixlQUFZLE1BQVk7O1FBQXhCLFlBQ0ksaUJBQU8sU0FLVjtRQUpHLElBQUksTUFBTTs7Z0JBQ04sS0FBa0IsSUFBQSxLQUFBLGlCQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUEsZ0JBQUEsNEJBQUU7b0JBQWxDLElBQU0sR0FBRyxXQUFBO29CQUNWLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzNCOzs7Ozs7OzthQUFBOztJQUNULENBQUM7SUFJTCxZQUFDO0FBQUQsQ0FBQyxBQVhELENBQTJCLE9BQU8sR0FXakM7Ozs7SUFGRyxzQkFBZTs7SUFDZix5QkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VsZW1lbnR9IGZyb20gJy4vZWxlbWVudCc7XG5cbmV4cG9ydCBjbGFzcyBNb25leSBleHRlbmRzIEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZT86IGFueSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZiAoc291cmNlKVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc291cmNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHZhbHVlPzogbnVtYmVyOyAvLyBkZWNpbWFsXG4gICAgY3VycmVuY3k/OiBzdHJpbmc7IC8vIFJlZ2V4OiBbXlxcc10rKFxcc1teXFxzXSspKlxufVxuIl19
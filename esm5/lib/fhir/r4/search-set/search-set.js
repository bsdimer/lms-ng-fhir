/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SearchSetBuilder } from './search-set-builder';
import { HttpParams } from '@angular/common/http';
var SearchSet = /** @class */ (function () {
    function SearchSet() {
        this.searchItems = [];
        this.sort = '-_id';
    }
    /**
     * @return {?}
     */
    SearchSet.prototype.paramsAsObject = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var so = new HttpParams();
        try {
            for (var _b = tslib_1.__values(this.searchItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                var si = _c.value;
                so = so.append(si.compileKey(), si.compileValue());
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (this.getpagesoffset)
            so.append('_getpagesoffset', String(this.getpagesoffset));
        if (this.count)
            so.append('_count', String(this.count));
        so.append('_sort', '-_id');
        return so;
    };
    /**
     * @return {?}
     */
    SearchSet.prototype.build = /**
     * @return {?}
     */
    function () {
        return new SearchSetBuilder(this);
    };
    return SearchSet;
}());
export { SearchSet };
if (false) {
    /** @type {?} */
    SearchSet.prototype.resourceName;
    /** @type {?} */
    SearchSet.prototype.searchItems;
    /** @type {?} */
    SearchSet.prototype.title;
    /** @type {?} */
    SearchSet.prototype.description;
    /** @type {?} */
    SearchSet.prototype.getpagesoffset;
    /** @type {?} */
    SearchSet.prototype.count;
    /** @type {?} */
    SearchSet.prototype.sort;
    /** @type {?} */
    SearchSet.prototype.direction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXNldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xtcy1uZy1maGlyLyIsInNvdXJjZXMiOlsibGliL2ZoaXIvcjQvc2VhcmNoLXNldC9zZWFyY2gtc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRWhEO0lBQUE7UUFHSSxnQkFBVyxHQUFzQixFQUFFLENBQUM7UUFLcEMsU0FBSSxHQUFXLE1BQU0sQ0FBQztJQWlCMUIsQ0FBQzs7OztJQWRHLGtDQUFjOzs7SUFBZDs7O1lBQ1EsRUFBRSxHQUFHLElBQUksVUFBVSxFQUFFOztZQUN6QixLQUFpQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBOUIsSUFBTSxFQUFFLFdBQUE7Z0JBQ1QsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO2FBQ3REOzs7Ozs7Ozs7UUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxJQUFJLENBQUMsS0FBSztZQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4RCxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQixPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCx5QkFBSzs7O0lBQUw7UUFDSSxPQUFPLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQzs7OztJQXZCRyxpQ0FBcUI7O0lBQ3JCLGdDQUFvQzs7SUFDcEMsMEJBQWM7O0lBQ2QsZ0NBQW9COztJQUNwQixtQ0FBdUI7O0lBQ3ZCLDBCQUFjOztJQUNkLHlCQUFzQjs7SUFDdEIsOEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWFyY2hJdGVtfSBmcm9tICcuL3NlYXJjaC1pdGVtJztcbmltcG9ydCB7U2VhcmNoU2V0QnVpbGRlcn0gZnJvbSAnLi9zZWFyY2gtc2V0LWJ1aWxkZXInO1xuaW1wb3J0IHtIdHRwUGFyYW1zfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXQge1xuXG4gICAgcmVzb3VyY2VOYW1lOiBzdHJpbmc7XG4gICAgc2VhcmNoSXRlbXM6IEFycmF5PFNlYXJjaEl0ZW0+ID0gW107XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGdldHBhZ2Vzb2Zmc2V0OiBudW1iZXI7XG4gICAgY291bnQ6IG51bWJlcjtcbiAgICBzb3J0OiBzdHJpbmcgPSAnLV9pZCc7XG4gICAgZGlyZWN0aW9uOiAnYXNjJyB8ICdkZXNjJztcblxuICAgIHBhcmFtc0FzT2JqZWN0KCkge1xuICAgICAgICBsZXQgc28gPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgICAgICBmb3IgKGNvbnN0IHNpIG9mIHRoaXMuc2VhcmNoSXRlbXMpIHtcbiAgICAgICAgICAgIHNvID0gc28uYXBwZW5kKHNpLmNvbXBpbGVLZXkoKSwgc2kuY29tcGlsZVZhbHVlKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdldHBhZ2Vzb2Zmc2V0KSBzby5hcHBlbmQoJ19nZXRwYWdlc29mZnNldCcsIFN0cmluZyh0aGlzLmdldHBhZ2Vzb2Zmc2V0KSk7XG4gICAgICAgIGlmICh0aGlzLmNvdW50KSBzby5hcHBlbmQoJ19jb3VudCcsIFN0cmluZyh0aGlzLmNvdW50KSk7XG4gICAgICAgIHNvLmFwcGVuZCgnX3NvcnQnLCAnLV9pZCcpO1xuICAgICAgICByZXR1cm4gc287XG4gICAgfVxuXG4gICAgYnVpbGQoKTogU2VhcmNoU2V0QnVpbGRlciB7XG4gICAgICAgIHJldHVybiBuZXcgU2VhcmNoU2V0QnVpbGRlcih0aGlzKTtcbiAgICB9XG59XG4iXX0=
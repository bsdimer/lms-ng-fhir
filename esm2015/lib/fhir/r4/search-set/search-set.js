/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SearchSetBuilder } from './search-set-builder';
import { HttpParams } from '@angular/common/http';
export class SearchSet {
    constructor() {
        this.searchItems = [];
        this.sort = '-_id';
    }
    /**
     * @return {?}
     */
    paramsAsObject() {
        /** @type {?} */
        let so = new HttpParams();
        for (const si of this.searchItems) {
            so = so.append(si.compileKey(), si.compileValue());
        }
        if (this.getpagesoffset)
            so.append('_getpagesoffset', String(this.getpagesoffset));
        if (this.count)
            so.append('_count', String(this.count));
        so.append('_sort', '-_id');
        return so;
    }
    /**
     * @return {?}
     */
    build() {
        return new SearchSetBuilder(this);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXNldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xtcy1uZy1maGlyLyIsInNvdXJjZXMiOlsibGliL2ZoaXIvcjQvc2VhcmNoLXNldC9zZWFyY2gtc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFaEQsTUFBTSxPQUFPLFNBQVM7SUFBdEI7UUFHSSxnQkFBVyxHQUFzQixFQUFFLENBQUM7UUFLcEMsU0FBSSxHQUFXLE1BQU0sQ0FBQztJQWlCMUIsQ0FBQzs7OztJQWRHLGNBQWM7O1lBQ04sRUFBRSxHQUFHLElBQUksVUFBVSxFQUFFO1FBQ3pCLEtBQUssTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUMvQixFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7U0FDdEQ7UUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxJQUFJLENBQUMsS0FBSztZQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4RCxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQixPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0QsT0FBTyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDSjs7O0lBdkJHLGlDQUFxQjs7SUFDckIsZ0NBQW9DOztJQUNwQywwQkFBYzs7SUFDZCxnQ0FBb0I7O0lBQ3BCLG1DQUF1Qjs7SUFDdkIsMEJBQWM7O0lBQ2QseUJBQXNCOztJQUN0Qiw4QkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlYXJjaEl0ZW19IGZyb20gJy4vc2VhcmNoLWl0ZW0nO1xuaW1wb3J0IHtTZWFyY2hTZXRCdWlsZGVyfSBmcm9tICcuL3NlYXJjaC1zZXQtYnVpbGRlcic7XG5pbXBvcnQge0h0dHBQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaFNldCB7XG5cbiAgICByZXNvdXJjZU5hbWU6IHN0cmluZztcbiAgICBzZWFyY2hJdGVtczogQXJyYXk8U2VhcmNoSXRlbT4gPSBbXTtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgZ2V0cGFnZXNvZmZzZXQ6IG51bWJlcjtcbiAgICBjb3VudDogbnVtYmVyO1xuICAgIHNvcnQ6IHN0cmluZyA9ICctX2lkJztcbiAgICBkaXJlY3Rpb246ICdhc2MnIHwgJ2Rlc2MnO1xuXG4gICAgcGFyYW1zQXNPYmplY3QoKSB7XG4gICAgICAgIGxldCBzbyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgICAgIGZvciAoY29uc3Qgc2kgb2YgdGhpcy5zZWFyY2hJdGVtcykge1xuICAgICAgICAgICAgc28gPSBzby5hcHBlbmQoc2kuY29tcGlsZUtleSgpLCBzaS5jb21waWxlVmFsdWUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2V0cGFnZXNvZmZzZXQpIHNvLmFwcGVuZCgnX2dldHBhZ2Vzb2Zmc2V0JywgU3RyaW5nKHRoaXMuZ2V0cGFnZXNvZmZzZXQpKTtcbiAgICAgICAgaWYgKHRoaXMuY291bnQpIHNvLmFwcGVuZCgnX2NvdW50JywgU3RyaW5nKHRoaXMuY291bnQpKTtcbiAgICAgICAgc28uYXBwZW5kKCdfc29ydCcsICctX2lkJyk7XG4gICAgICAgIHJldHVybiBzbztcbiAgICB9XG5cbiAgICBidWlsZCgpOiBTZWFyY2hTZXRCdWlsZGVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZWFyY2hTZXRCdWlsZGVyKHRoaXMpO1xuICAgIH1cbn1cbiJdfQ==
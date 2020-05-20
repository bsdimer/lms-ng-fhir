/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SearchItem } from './search-item';
export class SearchSetBuilder {
    /**
     * @param {?} ss
     */
    constructor(ss) {
        this.ss = ss;
    }
    /**
     * @return {?}
     */
    get() {
        return this.ss;
    }
    /**
     * @param {?} resource
     * @return {?}
     */
    setResourceName(resource) {
        this.ss.resourceName = resource;
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setTitle(value) {
        this.ss.title = value;
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDescription(value) {
        this.ss.description = value;
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setGetpagesoffset(value) {
        this.ss.getpagesoffset = value;
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setCount(value) {
        this.ss.count = value;
        return this;
    }
    /**
     * @return {?}
     */
    addSearchItem() {
        /** @type {?} */
        const si = new SearchItem();
        this.ss.searchItems.push(si);
        return si;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchSetBuilder.prototype.ss;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXNldC1idWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9zZWFyY2gtc2V0L3NlYXJjaC1zZXQtYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBRXpCLFlBQW9CLEVBQWE7UUFBYixPQUFFLEdBQUYsRUFBRSxDQUFXO0lBQ2pDLENBQUM7Ozs7SUFFRCxHQUFHO1FBQ0MsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLFFBQWdCO1FBQzVCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQy9CLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCxhQUFhOztjQUNILEVBQUUsR0FBZSxJQUFJLFVBQVUsRUFBRTtRQUN2QyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0IsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0NBQ0o7Ozs7OztJQXJDZSw4QkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlYXJjaFNldH0gZnJvbSAnLi9zZWFyY2gtc2V0JztcbmltcG9ydCB7U2VhcmNoSXRlbX0gZnJvbSAnLi9zZWFyY2gtaXRlbSc7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXRCdWlsZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3M6IFNlYXJjaFNldCkge1xuICAgIH1cblxuICAgIGdldCgpOiBTZWFyY2hTZXQge1xuICAgICAgICByZXR1cm4gdGhpcy5zcztcbiAgICB9XG5cbiAgICBzZXRSZXNvdXJjZU5hbWUocmVzb3VyY2U6IHN0cmluZyk6IFNlYXJjaFNldEJ1aWxkZXIge1xuICAgICAgICB0aGlzLnNzLnJlc291cmNlTmFtZSA9IHJlc291cmNlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRUaXRsZSh2YWx1ZTogc3RyaW5nKTogU2VhcmNoU2V0QnVpbGRlciB7XG4gICAgICAgIHRoaXMuc3MudGl0bGUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyk6IFNlYXJjaFNldEJ1aWxkZXIge1xuICAgICAgICB0aGlzLnNzLmRlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEdldHBhZ2Vzb2Zmc2V0KHZhbHVlOiBudW1iZXIpOiBTZWFyY2hTZXRCdWlsZGVyIHtcbiAgICAgICAgdGhpcy5zcy5nZXRwYWdlc29mZnNldCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRDb3VudCh2YWx1ZTogbnVtYmVyKTogU2VhcmNoU2V0QnVpbGRlciB7XG4gICAgICAgIHRoaXMuc3MuY291bnQgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkU2VhcmNoSXRlbSgpOiBTZWFyY2hJdGVtIHtcbiAgICAgICAgY29uc3Qgc2k6IFNlYXJjaEl0ZW0gPSBuZXcgU2VhcmNoSXRlbSgpO1xuICAgICAgICB0aGlzLnNzLnNlYXJjaEl0ZW1zLnB1c2goc2kpO1xuICAgICAgICByZXR1cm4gc2k7XG4gICAgfVxufVxuIl19
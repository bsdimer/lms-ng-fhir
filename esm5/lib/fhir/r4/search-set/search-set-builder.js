/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SearchItem } from './search-item';
var SearchSetBuilder = /** @class */ (function () {
    function SearchSetBuilder(ss) {
        this.ss = ss;
    }
    /**
     * @return {?}
     */
    SearchSetBuilder.prototype.get = /**
     * @return {?}
     */
    function () {
        return this.ss;
    };
    /**
     * @param {?} resource
     * @return {?}
     */
    SearchSetBuilder.prototype.setResourceName = /**
     * @param {?} resource
     * @return {?}
     */
    function (resource) {
        this.ss.resourceName = resource;
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SearchSetBuilder.prototype.setTitle = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.ss.title = value;
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SearchSetBuilder.prototype.setDescription = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.ss.description = value;
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SearchSetBuilder.prototype.setGetpagesoffset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.ss.getpagesoffset = value;
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SearchSetBuilder.prototype.setCount = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.ss.count = value;
        return this;
    };
    /**
     * @return {?}
     */
    SearchSetBuilder.prototype.addSearchItem = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var si = new SearchItem();
        this.ss.searchItems.push(si);
        return si;
    };
    return SearchSetBuilder;
}());
export { SearchSetBuilder };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchSetBuilder.prototype.ss;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXNldC1idWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9zZWFyY2gtc2V0L3NlYXJjaC1zZXQtYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QztJQUVJLDBCQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztJQUNqQyxDQUFDOzs7O0lBRUQsOEJBQUc7OztJQUFIO1FBQ0ksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQsMENBQWU7Ozs7SUFBZixVQUFnQixRQUFnQjtRQUM1QixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCxtQ0FBUTs7OztJQUFSLFVBQVMsS0FBYTtRQUNsQixJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCx5Q0FBYzs7OztJQUFkLFVBQWUsS0FBYTtRQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCw0Q0FBaUI7Ozs7SUFBakIsVUFBa0IsS0FBYTtRQUMzQixJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCxtQ0FBUTs7OztJQUFSLFVBQVMsS0FBYTtRQUNsQixJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELHdDQUFhOzs7SUFBYjs7WUFDVSxFQUFFLEdBQWUsSUFBSSxVQUFVLEVBQUU7UUFDdkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQzs7Ozs7OztJQXJDZSw4QkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlYXJjaFNldH0gZnJvbSAnLi9zZWFyY2gtc2V0JztcbmltcG9ydCB7U2VhcmNoSXRlbX0gZnJvbSAnLi9zZWFyY2gtaXRlbSc7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXRCdWlsZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3M6IFNlYXJjaFNldCkge1xuICAgIH1cblxuICAgIGdldCgpOiBTZWFyY2hTZXQge1xuICAgICAgICByZXR1cm4gdGhpcy5zcztcbiAgICB9XG5cbiAgICBzZXRSZXNvdXJjZU5hbWUocmVzb3VyY2U6IHN0cmluZyk6IFNlYXJjaFNldEJ1aWxkZXIge1xuICAgICAgICB0aGlzLnNzLnJlc291cmNlTmFtZSA9IHJlc291cmNlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRUaXRsZSh2YWx1ZTogc3RyaW5nKTogU2VhcmNoU2V0QnVpbGRlciB7XG4gICAgICAgIHRoaXMuc3MudGl0bGUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyk6IFNlYXJjaFNldEJ1aWxkZXIge1xuICAgICAgICB0aGlzLnNzLmRlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEdldHBhZ2Vzb2Zmc2V0KHZhbHVlOiBudW1iZXIpOiBTZWFyY2hTZXRCdWlsZGVyIHtcbiAgICAgICAgdGhpcy5zcy5nZXRwYWdlc29mZnNldCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRDb3VudCh2YWx1ZTogbnVtYmVyKTogU2VhcmNoU2V0QnVpbGRlciB7XG4gICAgICAgIHRoaXMuc3MuY291bnQgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkU2VhcmNoSXRlbSgpOiBTZWFyY2hJdGVtIHtcbiAgICAgICAgY29uc3Qgc2k6IFNlYXJjaEl0ZW0gPSBuZXcgU2VhcmNoSXRlbSgpO1xuICAgICAgICB0aGlzLnNzLnNlYXJjaEl0ZW1zLnB1c2goc2kpO1xuICAgICAgICByZXR1cm4gc2k7XG4gICAgfVxufVxuIl19
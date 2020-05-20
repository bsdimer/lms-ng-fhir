/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchItem = /** @class */ (function () {
    function SearchItem() {
    }
    /**
     * @param {?} type
     * @param {?} key
     * @param {?} modifier
     * @param {?} value
     * @return {?}
     */
    SearchItem.init = /**
     * @param {?} type
     * @param {?} key
     * @param {?} modifier
     * @param {?} value
     * @return {?}
     */
    function (type, key, modifier, value) {
        /** @type {?} */
        var item = new SearchItem();
        item.type = type;
        item.key = key;
        item.modifier = modifier;
        item.value = value;
        return item;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SearchItem.prototype.setType = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.type = value;
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SearchItem.prototype.setKey = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.key = value;
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SearchItem.prototype.setModifier = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.modifier = value;
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SearchItem.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SearchItem.prototype.setOptions = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.options = value;
        return this;
    };
    /**
     * @return {?}
     */
    SearchItem.prototype.compileKey = /**
     * @return {?}
     */
    function () {
        return this.modifier.compileKey(this);
    };
    /**
     * @return {?}
     */
    SearchItem.prototype.compileValue = /**
     * @return {?}
     */
    function () {
        return this.modifier.compileValue(this);
    };
    return SearchItem;
}());
export { SearchItem };
if (false) {
    /** @type {?} */
    SearchItem.prototype.type;
    /** @type {?} */
    SearchItem.prototype.key;
    /** @type {?} */
    SearchItem.prototype.modifier;
    /** @type {?} */
    SearchItem.prototype.value;
    /** @type {?} */
    SearchItem.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sbXMtbmctZmhpci8iLCJzb3VyY2VzIjpbImxpYi9maGlyL3I0L3NlYXJjaC1zZXQvc2VhcmNoLWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0lBQUE7SUFnREEsQ0FBQzs7Ozs7Ozs7SUF6Q2lCLGVBQUk7Ozs7Ozs7SUFBbEIsVUFBbUIsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsS0FBSzs7WUFDbkMsSUFBSSxHQUFlLElBQUksVUFBVSxFQUFFO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCw0QkFBTzs7OztJQUFQLFVBQVEsS0FBMEc7UUFDOUcsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCwyQkFBTTs7OztJQUFOLFVBQU8sS0FBYTtRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNqQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELGdDQUFXOzs7O0lBQVgsVUFBWSxLQUFxQjtRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELDZCQUFROzs7O0lBQVIsVUFBUyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRUQsK0JBQVU7Ozs7SUFBVixVQUFXLEtBQVU7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELCtCQUFVOzs7SUFBVjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELGlDQUFZOzs7SUFBWjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQWhERCxJQWdEQzs7OztJQS9DRywwQkFBMEc7O0lBQzFHLHlCQUFZOztJQUNaLDhCQUF5Qjs7SUFDekIsMkJBQWM7O0lBQ2QsNkJBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlYXJjaE1vZGlmaWVyfSBmcm9tICcuL3NlYXJjaC1tb2RpZmllcic7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hJdGVtIHtcbiAgICB0eXBlOiAnbnVtYmVyJyB8ICdkYXRlJyB8ICdzdHJpbmcnIHwgJ3Rva2VuJyB8ICdyZWZlcmVuY2UnIHwgJ2NvbXBvc2l0ZScgfCAncXVhbnRpdHknIHwgJ3VyaScgfCAnc3BlY2lhbCc7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgbW9kaWZpZXI6IFNlYXJjaE1vZGlmaWVyO1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgb3B0aW9uczogYW55O1xuXG4gICAgcHVibGljIHN0YXRpYyBpbml0KHR5cGUsIGtleSwgbW9kaWZpZXIsIHZhbHVlKTogU2VhcmNoSXRlbSB7XG4gICAgICAgIGNvbnN0IGl0ZW06IFNlYXJjaEl0ZW0gPSBuZXcgU2VhcmNoSXRlbSgpO1xuICAgICAgICBpdGVtLnR5cGUgPSB0eXBlO1xuICAgICAgICBpdGVtLmtleSA9IGtleTtcbiAgICAgICAgaXRlbS5tb2RpZmllciA9IG1vZGlmaWVyO1xuICAgICAgICBpdGVtLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIHNldFR5cGUodmFsdWU6ICdudW1iZXInIHwgJ2RhdGUnIHwgJ3N0cmluZycgfCAndG9rZW4nIHwgJ3JlZmVyZW5jZScgfCAnY29tcG9zaXRlJyB8ICdxdWFudGl0eScgfCAndXJpJyB8ICdzcGVjaWFsJyk6IFNlYXJjaEl0ZW0ge1xuICAgICAgICB0aGlzLnR5cGUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0S2V5KHZhbHVlOiBzdHJpbmcpOiBTZWFyY2hJdGVtIHtcbiAgICAgICAgdGhpcy5rZXkgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0TW9kaWZpZXIodmFsdWU6IFNlYXJjaE1vZGlmaWVyKTogU2VhcmNoSXRlbSB7XG4gICAgICAgIHRoaXMubW9kaWZpZXIgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0VmFsdWUodmFsdWU6IHN0cmluZyk6IFNlYXJjaEl0ZW0ge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldE9wdGlvbnModmFsdWU6IGFueSk6IFNlYXJjaEl0ZW0ge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29tcGlsZUtleSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RpZmllci5jb21waWxlS2V5KHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBpbGVWYWx1ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RpZmllci5jb21waWxlVmFsdWUodGhpcyk7XG4gICAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Element } from '../element';
export class HumanName extends Element {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        this.given = [];
        this.prefix = [];
        this.suffix = [];
        if (source)
            for (const key of Object.keys(source)) {
                this[key] = source[key];
            }
    }
    /**
     * @return {?}
     */
    static getNew() {
        return new HumanName({ use: 'official', given: ['name'] });
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVtYW5uYW1lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9tb2RlbC9pbmRpdmlkdWFscy9odW1hbm5hbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFHckMsTUFBTSxPQUFPLFNBQVUsU0FBUSxPQUFPOzs7O0lBRWxDLFlBQVksTUFBWTtRQUNwQixLQUFLLEVBQUUsQ0FBQztRQVVaLFVBQUssR0FBYyxFQUFFLENBQUM7UUFDdEIsV0FBTSxHQUFjLEVBQUUsQ0FBQztRQUN2QixXQUFNLEdBQWMsRUFBRSxDQUFDO1FBWG5CLElBQUksTUFBTTtZQUNOLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMzQjtJQUNULENBQUM7Ozs7SUFVTSxNQUFNLENBQUMsTUFBTTtRQUNoQixPQUFPLElBQUksU0FBUyxDQUFDLEVBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztDQUNKOzs7SUFYRyx3QkFBa0Y7O0lBQ2xGLHlCQUFjOztJQUNkLDJCQUFnQjs7SUFDaEIsMEJBQXNCOztJQUN0QiwyQkFBdUI7O0lBQ3ZCLDJCQUF1Qjs7SUFDdkIsMkJBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJy4uL2VsZW1lbnQnO1xuaW1wb3J0IHsgUGVyaW9kIH0gZnJvbSAnLi4vcGVyaW9kJztcblxuZXhwb3J0IGNsYXNzIEh1bWFuTmFtZSBleHRlbmRzIEVsZW1lbnQge1xuXG4gICAgY29uc3RydWN0b3Ioc291cmNlPzogYW55KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmIChzb3VyY2UpXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlPzogJ3VzdWFsJyB8ICdvZmZpY2lhbCcgfCAndGVtcCcgfCAnbmlja25hbWUnIHwgJ2Fub255bW91cycgfCAnb2xkJyB8ICdtYWlkZW4nO1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgZmFtaWx5Pzogc3RyaW5nO1xuICAgIGdpdmVuPzogc3RyaW5nW10gPSBbXTtcbiAgICBwcmVmaXg/OiBzdHJpbmdbXSA9IFtdO1xuICAgIHN1ZmZpeD86IHN0cmluZ1tdID0gW107XG4gICAgcGVyaW9kPzogUGVyaW9kO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXROZXcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgSHVtYW5OYW1lKHt1c2U6ICdvZmZpY2lhbCcsIGdpdmVuOiBbJ25hbWUnXX0pO1xuICAgIH1cbn1cbiJdfQ==
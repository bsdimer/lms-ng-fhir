/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BackboneElement } from './terminology/backboneelement';
export class Timing extends BackboneElement {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        if (source)
            for (const key of Object.keys(source)) {
                this[key] = source[key];
            }
    }
}
if (false) {
    /** @type {?} */
    Timing.prototype.event;
    /** @type {?} */
    Timing.prototype.repeat;
    /** @type {?} */
    Timing.prototype.code;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9tb2RlbC90aW1pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUs5RCxNQUFNLE9BQU8sTUFBTyxTQUFRLGVBQWU7Ozs7SUFDekMsWUFBWSxNQUFZO1FBQ3RCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxNQUFNO1lBQ1IsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3pCO0lBQ0wsQ0FBQztDQXNCRjs7O0lBckJDLHVCQUFlOztJQUNmLHdCQWtCRTs7SUFDRixzQkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JhY2tib25lRWxlbWVudH0gZnJvbSAnLi90ZXJtaW5vbG9neS9iYWNrYm9uZWVsZW1lbnQnO1xuaW1wb3J0IHtSYW5nZX0gZnJvbSAnLi9yYW5nZSc7XG5pbXBvcnQge1BlcmlvZH0gZnJvbSAnLi9wZXJpb2QnO1xuaW1wb3J0IHtDb2RlYWJsZUNvbmNlcHR9IGZyb20gJy4vdGVybWlub2xvZ3kvY29kZWFibGVjb25jZXB0JztcblxuZXhwb3J0IGNsYXNzIFRpbWluZyBleHRlbmRzIEJhY2tib25lRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNvdXJjZT86IGFueSkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKHNvdXJjZSlcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNvdXJjZSkpIHtcbiAgICAgICAgdGhpc1trZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gIH1cbiAgZXZlbnQ/OiBEYXRlW107XG4gIHJlcGVhdD86IHsgLy8gRWxlbWVudFxuICAgIGJvdW5kc0R1cmF0aW9uPzogRGF0ZTtcbiAgICBib3VuZHNSYW5nZT86IFJhbmdlO1xuICAgIGJvdW5kc1BlcmlvZD86IFBlcmlvZDtcbiAgICBjb3VudD86IG51bWJlcjsgLy8gcG9zaXRpdmVJbnQgUmVnZXg6ICs/WzEtOV1bMC05XSpcbiAgICBjb3VudE1heD86IG51bWJlcjtcbiAgICBkdXJhdGlvbj86IG51bWJlcjsgLy8gZGVjaW1hbCBSZWdleDogLT8oMHxbMS05XVswLTldKikoXFwuWzAtOV0rKT8oW2VFXVsrLV0/WzAtOV0rKT9cbiAgICBkdXJhdGlvbk1heD86IG51bWJlcjtcbiAgICBkdXJhdGlvblVuaXQ/OiAncycgfCAnbWluJyB8ICdoJyB8ICdkJyB8ICd3aycgfCAnbW8nIHwgJ2EnOyAvLyB1bml0IG9mIHRpbWUgKFVDVU0pXG4gICAgZnJlcXVlbmN5PzogbnVtYmVyOyAvLyBwb3NpdGl2ZUludCBSZWdleDogKz9bMS05XVswLTldKlxuICAgIGZyZXF1ZW5jeU1heD86IG51bWJlcjtcbiAgICBwZXJpb2Q/OiBudW1iZXI7IC8vIGRlY2ltYWwgUmVnZXg6IC0/KDB8WzEtOV1bMC05XSopKFxcLlswLTldKyk/KFtlRV1bKy1dP1swLTldKyk/XG4gICAgcGVyaW9kTWF4PzogbnVtYmVyO1xuICAgIHBlcmlvZFVuaXQ/OiAncycgfCAnbWluJyB8ICdoJyB8ICdkJyB8ICd3aycgfCAnbW8nIHwgJ2EnOyAvLyB1bml0IG9mIHRpbWUgKFVDVU0pXG4gICAgZGF5T2ZXZWVrPzogc3RyaW5nW107XG4gICAgdGltZU9mRGF5PzogRGF0ZVtdOyAvLyBSZWdleDogKFswMV1bMC05XXwyWzAtM10pOlswLTVdWzAtOV06KFswLTVdWzAtOV18NjApKFxcLlswLTldKyk/XG4gICAgd2hlbj86IHN0cmluZ1tdOyAvLyBSZWdleDogW15cXHNdKyhcXHNbXlxcc10rKSpcbiAgICBvZmZzZXQ/OiBudW1iZXI7IC8vIHVuc2lnbmVkSW50IFJlZ2V4OiBbMF18KFsxLTldWzAtOV0qKVxuICB9O1xuICBjb2RlPzogQ29kZWFibGVDb25jZXB0O1xufVxuIl19
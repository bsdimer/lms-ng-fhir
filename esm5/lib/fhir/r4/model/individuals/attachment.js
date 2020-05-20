/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Element } from '../element';
var Attachment = /** @class */ (function (_super) {
    tslib_1.__extends(Attachment, _super);
    function Attachment(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        _this.resourceType = 'Attachment';
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
    return Attachment;
}(Element));
export { Attachment };
if (false) {
    /** @type {?} */
    Attachment.prototype.resourceType;
    /** @type {?} */
    Attachment.prototype.contentType;
    /** @type {?} */
    Attachment.prototype.language;
    /** @type {?} */
    Attachment.prototype.data;
    /** @type {?} */
    Attachment.prototype.url;
    /** @type {?} */
    Attachment.prototype.size;
    /** @type {?} */
    Attachment.prototype.hash;
    /** @type {?} */
    Attachment.prototype.title;
    /** @type {?} */
    Attachment.prototype.creation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0YWNobWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xtcy1uZy1maGlyLyIsInNvdXJjZXMiOlsibGliL2ZoaXIvcjQvbW9kZWwvaW5kaXZpZHVhbHMvYXR0YWNobWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDbkM7SUFBZ0Msc0NBQU87SUFFckMsb0JBQVksTUFBWTs7UUFBeEIsWUFDRSxpQkFBTyxTQUtSO1FBUEQsa0JBQVksR0FBVyxZQUFZLENBQUM7UUFHbEMsSUFBSSxNQUFNOztnQkFDUixLQUFrQixJQUFBLEtBQUEsaUJBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBbEMsSUFBTSxHQUFHLFdBQUE7b0JBQ1osS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDekI7Ozs7Ozs7O2FBQUE7O0lBQ0wsQ0FBQztJQXFCSCxpQkFBQztBQUFELENBQUMsQUE3QkQsQ0FBZ0MsT0FBTyxHQTZCdEM7Ozs7SUE1QkMsa0NBQW9DOztJQVFwQyxpQ0FBcUI7O0lBQ3JCLDhCQUFrQjs7SUFDbEIsMEJBQWM7O0lBQ2QseUJBQWE7O0lBQ2IsMEJBQWM7O0lBQ2QsMEJBQWM7O0lBQ2QsMkJBQWU7O0lBQ2YsOEJBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbGVtZW50fSBmcm9tICcuLi9lbGVtZW50JztcbmV4cG9ydCBjbGFzcyBBdHRhY2htZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIHJlc291cmNlVHlwZTogc3RyaW5nID0gJ0F0dGFjaG1lbnQnO1xuICBjb25zdHJ1Y3Rvcihzb3VyY2U/OiBhbnkpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmIChzb3VyY2UpXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzb3VyY2UpKSB7XG4gICAgICAgIHRoaXNba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICB9XG4gIGNvbnRlbnRUeXBlPzogc3RyaW5nO1xuICBsYW5ndWFnZT86IHN0cmluZztcbiAgZGF0YT86IHN0cmluZzsgLy8gYmFzZTY0QmluYXJ5IFJlZ2V4OiAoXFxzKihbMC05YS16QS1aXFwrXFw9XSl7NH1cXHMqKStcbiAgdXJsPzogc3RyaW5nOyAvLyB1cmxcbiAgc2l6ZT86IG51bWJlcjsgLy8gdW5zaWduZWRJbnQgUmVnZXg6IFswXXwoWzEtOV1bMC05XSopXG4gIGhhc2g/OiBzdHJpbmc7IC8vIGJhc2U2NEJpbmFyeSBSZWdleDogKFxccyooWzAtOWEtekEtWlxcK1xcPV0pezR9XFxzKikrXG4gIHRpdGxlPzogc3RyaW5nO1xuICBjcmVhdGlvbj86IERhdGU7XG5cbiAgLy8gY29uc3RydWN0b3IoY29udGVudFR5cGUsIGxhbmd1YWdlLCBkYXRhLCB1cmwsIHNpemUsIGhhc2gsIHRpdGxlLCBjcmVhdGlvbikge1xuICAvLyAgIHN1cGVyKCk7XG4gIC8vICAgdGhpcy5jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlO1xuICAvLyAgIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbiAgLy8gICB0aGlzLmRhdGEgPSBkYXRhO1xuICAvLyAgIHRoaXMudXJsID0gdXJsO1xuICAvLyAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gIC8vICAgdGhpcy5oYXNoID0gaGFzaDtcbiAgLy8gICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIC8vICAgdGhpcy5jcmVhdGlvbiA9IGNyZWF0aW9uO1xuICAvLyB9XG59XG4iXX0=
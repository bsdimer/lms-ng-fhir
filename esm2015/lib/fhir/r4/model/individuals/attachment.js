/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Element } from '../element';
export class Attachment extends Element {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        this.resourceType = 'Attachment';
        if (source)
            for (const key of Object.keys(source)) {
                this[key] = source[key];
            }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0YWNobWVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xtcy1uZy1maGlyLyIsInNvdXJjZXMiOlsibGliL2ZoaXIvcjQvbW9kZWwvaW5kaXZpZHVhbHMvYXR0YWNobWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFlBQVksQ0FBQztBQUNuQyxNQUFNLE9BQU8sVUFBVyxTQUFRLE9BQU87Ozs7SUFFckMsWUFBWSxNQUFZO1FBQ3RCLEtBQUssRUFBRSxDQUFDO1FBRlYsaUJBQVksR0FBVyxZQUFZLENBQUM7UUFHbEMsSUFBSSxNQUFNO1lBQ1IsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3pCO0lBQ0wsQ0FBQztDQXFCRjs7O0lBNUJDLGtDQUFvQzs7SUFRcEMsaUNBQXFCOztJQUNyQiw4QkFBa0I7O0lBQ2xCLDBCQUFjOztJQUNkLHlCQUFhOztJQUNiLDBCQUFjOztJQUNkLDBCQUFjOztJQUNkLDJCQUFlOztJQUNmLDhCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWxlbWVudH0gZnJvbSAnLi4vZWxlbWVudCc7XG5leHBvcnQgY2xhc3MgQXR0YWNobWVudCBleHRlbmRzIEVsZW1lbnQge1xuICByZXNvdXJjZVR5cGU6IHN0cmluZyA9ICdBdHRhY2htZW50JztcbiAgY29uc3RydWN0b3Ioc291cmNlPzogYW55KSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoc291cmNlKVxuICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc291cmNlKSkge1xuICAgICAgICB0aGlzW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgfVxuICBjb250ZW50VHlwZT86IHN0cmluZztcbiAgbGFuZ3VhZ2U/OiBzdHJpbmc7XG4gIGRhdGE/OiBzdHJpbmc7IC8vIGJhc2U2NEJpbmFyeSBSZWdleDogKFxccyooWzAtOWEtekEtWlxcK1xcPV0pezR9XFxzKikrXG4gIHVybD86IHN0cmluZzsgLy8gdXJsXG4gIHNpemU/OiBudW1iZXI7IC8vIHVuc2lnbmVkSW50IFJlZ2V4OiBbMF18KFsxLTldWzAtOV0qKVxuICBoYXNoPzogc3RyaW5nOyAvLyBiYXNlNjRCaW5hcnkgUmVnZXg6IChcXHMqKFswLTlhLXpBLVpcXCtcXD1dKXs0fVxccyopK1xuICB0aXRsZT86IHN0cmluZztcbiAgY3JlYXRpb24/OiBEYXRlO1xuXG4gIC8vIGNvbnN0cnVjdG9yKGNvbnRlbnRUeXBlLCBsYW5ndWFnZSwgZGF0YSwgdXJsLCBzaXplLCBoYXNoLCB0aXRsZSwgY3JlYXRpb24pIHtcbiAgLy8gICBzdXBlcigpO1xuICAvLyAgIHRoaXMuY29udGVudFR5cGUgPSBjb250ZW50VHlwZTtcbiAgLy8gICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gIC8vICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgLy8gICB0aGlzLnVybCA9IHVybDtcbiAgLy8gICB0aGlzLnNpemUgPSBzaXplO1xuICAvLyAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gIC8vICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAvLyAgIHRoaXMuY3JlYXRpb24gPSBjcmVhdGlvbjtcbiAgLy8gfVxufVxuIl19
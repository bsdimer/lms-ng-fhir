/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpParams } from "@angular/common/http";
export class InstanceLevelInteractions {
}
InstanceLevelInteractions.read = 0;
InstanceLevelInteractions.vread = 1;
InstanceLevelInteractions.update = 2;
InstanceLevelInteractions.patch = 3;
InstanceLevelInteractions.delete = 4;
InstanceLevelInteractions.history = 5;
InstanceLevelInteractions.create = 6;
if (false) {
    /** @type {?} */
    InstanceLevelInteractions.read;
    /** @type {?} */
    InstanceLevelInteractions.vread;
    /** @type {?} */
    InstanceLevelInteractions.update;
    /** @type {?} */
    InstanceLevelInteractions.patch;
    /** @type {?} */
    InstanceLevelInteractions.delete;
    /** @type {?} */
    InstanceLevelInteractions.history;
    /** @type {?} */
    InstanceLevelInteractions.create;
}
export class TypeLevelInteractions {
}
TypeLevelInteractions.create = 10;
TypeLevelInteractions.search = 11;
TypeLevelInteractions.history = 12;
if (false) {
    /** @type {?} */
    TypeLevelInteractions.create;
    /** @type {?} */
    TypeLevelInteractions.search;
    /** @type {?} */
    TypeLevelInteractions.history;
}
export class WholeSystemInteractions {
}
WholeSystemInteractions.capabilities = 21;
WholeSystemInteractions.batch = 22;
WholeSystemInteractions.search = 23;
WholeSystemInteractions.history = 24;
if (false) {
    /** @type {?} */
    WholeSystemInteractions.capabilities;
    /** @type {?} */
    WholeSystemInteractions.batch;
    /** @type {?} */
    WholeSystemInteractions.search;
    /** @type {?} */
    WholeSystemInteractions.history;
}
export class CommonSearchParameters {
}
CommonSearchParameters._id = '_id';
CommonSearchParameters._lastUpdated = '_lastUpdated';
CommonSearchParameters._tag = '_tag';
CommonSearchParameters._profile = '_profile';
CommonSearchParameters._security = '_security';
CommonSearchParameters._text = '_text';
CommonSearchParameters._content = '_content';
CommonSearchParameters._list = '_list';
CommonSearchParameters._query = '_query';
if (false) {
    /** @type {?} */
    CommonSearchParameters._id;
    /** @type {?} */
    CommonSearchParameters._lastUpdated;
    /** @type {?} */
    CommonSearchParameters._tag;
    /** @type {?} */
    CommonSearchParameters._profile;
    /** @type {?} */
    CommonSearchParameters._security;
    /** @type {?} */
    CommonSearchParameters._text;
    /** @type {?} */
    CommonSearchParameters._content;
    /** @type {?} */
    CommonSearchParameters._list;
    /** @type {?} */
    CommonSearchParameters._query;
}
export class SearchControlParameters {
}
export class FhirQueryBuilder {
    /**
     * @param {?=} baseUrl
     */
    constructor(baseUrl) {
        this._baseUrl = '';
        this._params = [];
        this._baseUrl = baseUrl;
    }
    /**
     * @param {?=} baseUrl
     * @return {?}
     */
    static getInstance(baseUrl) {
        return new FhirQueryBuilder(baseUrl);
    }
    /**
     * @return {?}
     */
    get resourceName() {
        return this._resourceName;
    }
    /**
     * @param {?} resourceName
     * @return {?}
     */
    setResourceName(resourceName) {
        this._resourceName = resourceName;
        return this;
    }
    /**
     * @return {?}
     */
    get query() {
        /** @type {?} */
        let q = `${this._baseUrl}`;
        switch (this._fhirOperation) {
            case TypeLevelInteractions.search:
                q = `${q}/${this._resourceName}?`;
                this.params.forEach((/**
                 * @param {?} p
                 * @return {?}
                 */
                p => {
                    q = q + p;
                }));
                break;
            case InstanceLevelInteractions.read:
                q = `${q}/${this._resourceName}/`;
                this.params.forEach((/**
                 * @param {?} p
                 * @return {?}
                 */
                p => {
                    q = q + p;
                }));
                break;
        }
        return q;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    read(id) {
        this._fhirOperation = InstanceLevelInteractions.read;
        this._params.push(id);
        return this;
    }
    /**
     * @param {?} propName
     * @return {?}
     */
    search(propName) {
        this._fhirOperation = TypeLevelInteractions.search;
        /** @type {?} */
        const lp = new LeftPart(this);
        lp.left = propName;
        return lp;
    }
    /**
     * @return {?}
     */
    get params() {
        return this._params;
    }
    /**
     * @return {?}
     */
    and() {
        this.params.push('&');
        return this;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    append(val) {
        this.params.push(val);
        return this;
    }
    /**
     * @return {?}
     */
    paramsAsObject() {
        /** @type {?} */
        const res = {};
        for (const se of this.params) {
            if (se === '&')
                continue;
            /** @type {?} */
            const paramParts = se.split('=');
            res[paramParts[0]] = paramParts[1];
        }
        return res;
    }
    /**
     * @return {?}
     */
    paramsAsHttpParams() {
        /** @type {?} */
        let res = new HttpParams();
        for (const se of this.params) {
            if (se === '&')
                continue;
            /** @type {?} */
            const paramParts = se.split('=');
            res = res.append(paramParts[0], paramParts[1]);
        }
        return res;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FhirQueryBuilder.prototype._baseUrl;
    /**
     * @type {?}
     * @private
     */
    FhirQueryBuilder.prototype._resourceName;
    /**
     * @type {?}
     * @private
     */
    FhirQueryBuilder.prototype._params;
    /**
     * @type {?}
     * @private
     */
    FhirQueryBuilder.prototype._fhirOperation;
}
export class LeftPart {
    /**
     * @param {?} qb
     */
    constructor(qb) {
        this._qb = qb;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    eq(val) {
        this._qb.params.push(`${this.left}=${val}`);
        return this._qb;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    contains(val) {
        this._qb.params.push(`${this.left}:contains=${val}`);
        return this._qb;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    starts(val) {
        this._qb.params.push(`${this.left}=${val}`);
        return this._qb;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    exact(val) {
        this._qb.params.push(`${this.left}:exact=${val}`);
        return this._qb;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    LeftPart.prototype._qb;
    /** @type {?} */
    LeftPart.prototype.left;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhpci1xdWVyeS1idWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9xdWVyeS1idWlsZGVyL2ZoaXItcXVlcnktYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRWhELE1BQU0sT0FBTyx5QkFBeUI7O0FBQ3BCLDhCQUFJLEdBQVcsQ0FBQyxDQUFDO0FBQ2pCLCtCQUFLLEdBQVcsQ0FBQyxDQUFDO0FBQ2xCLGdDQUFNLEdBQVcsQ0FBQyxDQUFDO0FBQ25CLCtCQUFLLEdBQVcsQ0FBQyxDQUFDO0FBQ2xCLGdDQUFNLEdBQVcsQ0FBQyxDQUFDO0FBQ25CLGlDQUFPLEdBQVcsQ0FBQyxDQUFDO0FBQ3BCLGdDQUFNLEdBQVcsQ0FBQyxDQUFDOzs7SUFOakMsK0JBQStCOztJQUMvQixnQ0FBZ0M7O0lBQ2hDLGlDQUFpQzs7SUFDakMsZ0NBQWdDOztJQUNoQyxpQ0FBaUM7O0lBQ2pDLGtDQUFrQzs7SUFDbEMsaUNBQWlDOztBQUdyQyxNQUFNLE9BQU8scUJBQXFCOztBQUNoQiw0QkFBTSxHQUFXLEVBQUUsQ0FBQztBQUNwQiw0QkFBTSxHQUFXLEVBQUUsQ0FBQztBQUNwQiw2QkFBTyxHQUFXLEVBQUUsQ0FBQzs7O0lBRm5DLDZCQUFrQzs7SUFDbEMsNkJBQWtDOztJQUNsQyw4QkFBbUM7O0FBR3ZDLE1BQU0sT0FBTyx1QkFBdUI7O0FBQ2xCLG9DQUFZLEdBQVcsRUFBRSxDQUFDO0FBQzFCLDZCQUFLLEdBQVcsRUFBRSxDQUFDO0FBQ25CLDhCQUFNLEdBQVcsRUFBRSxDQUFDO0FBQ3BCLCtCQUFPLEdBQVcsRUFBRSxDQUFDOzs7SUFIbkMscUNBQXdDOztJQUN4Qyw4QkFBaUM7O0lBQ2pDLCtCQUFrQzs7SUFDbEMsZ0NBQW1DOztBQUd2QyxNQUFNLE9BQU8sc0JBQXNCOztBQUNqQiwwQkFBRyxHQUFX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QUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNyRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM1QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsR0FBVztRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNsRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUNKOzs7Ozs7SUExQkcsdUJBQXVDOztJQUN2Qyx3QkFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cFBhcmFtc30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbmV4cG9ydCBjbGFzcyBJbnN0YW5jZUxldmVsSW50ZXJhY3Rpb25zIHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWQ6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHN0YXRpYyB2cmVhZDogbnVtYmVyID0gMTtcbiAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZTogbnVtYmVyID0gMjtcbiAgICBwdWJsaWMgc3RhdGljIHBhdGNoOiBudW1iZXIgPSAzO1xuICAgIHB1YmxpYyBzdGF0aWMgZGVsZXRlOiBudW1iZXIgPSA0O1xuICAgIHB1YmxpYyBzdGF0aWMgaGlzdG9yeTogbnVtYmVyID0gNTtcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZTogbnVtYmVyID0gNjtcbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVMZXZlbEludGVyYWN0aW9ucyB7XG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGU6IG51bWJlciA9IDEwO1xuICAgIHB1YmxpYyBzdGF0aWMgc2VhcmNoOiBudW1iZXIgPSAxMTtcbiAgICBwdWJsaWMgc3RhdGljIGhpc3Rvcnk6IG51bWJlciA9IDEyO1xufVxuXG5leHBvcnQgY2xhc3MgV2hvbGVTeXN0ZW1JbnRlcmFjdGlvbnMge1xuICAgIHB1YmxpYyBzdGF0aWMgY2FwYWJpbGl0aWVzOiBudW1iZXIgPSAyMTtcbiAgICBwdWJsaWMgc3RhdGljIGJhdGNoOiBudW1iZXIgPSAyMjtcbiAgICBwdWJsaWMgc3RhdGljIHNlYXJjaDogbnVtYmVyID0gMjM7XG4gICAgcHVibGljIHN0YXRpYyBoaXN0b3J5OiBudW1iZXIgPSAyNDtcbn1cblxuZXhwb3J0IGNsYXNzIENvbW1vblNlYXJjaFBhcmFtZXRlcnMge1xuICAgIHB1YmxpYyBzdGF0aWMgX2lkOiBzdHJpbmcgPSAnX2lkJztcbiAgICBwdWJsaWMgc3RhdGljIF9sYXN0VXBkYXRlZDogc3RyaW5nID0gJ19sYXN0VXBkYXRlZCc7XG4gICAgcHVibGljIHN0YXRpYyBfdGFnOiBzdHJpbmcgPSAnX3RhZyc7XG4gICAgcHVibGljIHN0YXRpYyBfcHJvZmlsZTogc3RyaW5nID0gJ19wcm9maWxlJztcbiAgICBwdWJsaWMgc3RhdGljIF9zZWN1cml0eTogc3RyaW5nID0gJ19zZWN1cml0eSc7XG4gICAgcHVibGljIHN0YXRpYyBfdGV4dDogc3RyaW5nID0gJ190ZXh0JztcbiAgICBwdWJsaWMgc3RhdGljIF9jb250ZW50OiBzdHJpbmcgPSAnX2NvbnRlbnQnO1xuICAgIHB1YmxpYyBzdGF0aWMgX2xpc3Q6IHN0cmluZyA9ICdfbGlzdCc7XG4gICAgcHVibGljIHN0YXRpYyBfcXVlcnk6IHN0cmluZyA9ICdfcXVlcnknO1xufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29udHJvbFBhcmFtZXRlcnMge1xuXG59XG5cbmV4cG9ydCBjbGFzcyBGaGlyUXVlcnlCdWlsZGVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Jhc2VVcmw6IHN0cmluZyA9ICcnO1xuICAgIHByaXZhdGUgX3Jlc291cmNlTmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3BhcmFtcyA9IFtdO1xuICAgIHByaXZhdGUgX2ZoaXJPcGVyYXRpb246IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGJhc2VVcmw/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fYmFzZVVybCA9IGJhc2VVcmw7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZShiYXNlVXJsPzogc3RyaW5nKTogRmhpclF1ZXJ5QnVpbGRlciB7XG4gICAgICAgIHJldHVybiBuZXcgRmhpclF1ZXJ5QnVpbGRlcihiYXNlVXJsKTtcbiAgICB9XG5cbiAgICBnZXQgcmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZU5hbWU7XG4gICAgfVxuXG4gICAgc2V0UmVzb3VyY2VOYW1lKHJlc291cmNlTmFtZTogc3RyaW5nKTogRmhpclF1ZXJ5QnVpbGRlciB7XG4gICAgICAgIHRoaXMuX3Jlc291cmNlTmFtZSA9IHJlc291cmNlTmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IHF1ZXJ5KCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBxID0gYCR7dGhpcy5fYmFzZVVybH1gO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuX2ZoaXJPcGVyYXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgVHlwZUxldmVsSW50ZXJhY3Rpb25zLnNlYXJjaDpcbiAgICAgICAgICAgICAgICBxID0gYCR7cX0vJHt0aGlzLl9yZXNvdXJjZU5hbWV9P2A7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcSA9IHEgKyBwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJbnN0YW5jZUxldmVsSW50ZXJhY3Rpb25zLnJlYWQ6XG4gICAgICAgICAgICAgICAgcSA9IGAke3F9LyR7dGhpcy5fcmVzb3VyY2VOYW1lfS9gO1xuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmZvckVhY2gocCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHEgPSBxICsgcDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcTtcbiAgICB9XG5cbiAgICByZWFkKGlkOiBzdHJpbmcpOiBGaGlyUXVlcnlCdWlsZGVyIHtcbiAgICAgICAgdGhpcy5fZmhpck9wZXJhdGlvbiA9IEluc3RhbmNlTGV2ZWxJbnRlcmFjdGlvbnMucmVhZDtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1c2goaWQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZWFyY2gocHJvcE5hbWU6IHN0cmluZyk6IExlZnRQYXJ0IHtcbiAgICAgICAgdGhpcy5fZmhpck9wZXJhdGlvbiA9IFR5cGVMZXZlbEludGVyYWN0aW9ucy5zZWFyY2g7XG4gICAgICAgIGNvbnN0IGxwOiBMZWZ0UGFydCA9IG5ldyBMZWZ0UGFydCh0aGlzKTtcbiAgICAgICAgbHAubGVmdCA9IHByb3BOYW1lO1xuICAgICAgICByZXR1cm4gbHA7XG4gICAgfVxuXG4gICAgZ2V0IHBhcmFtcygpOiBhbnlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJhbXM7XG4gICAgfVxuXG4gICAgYW5kKCk6IEZoaXJRdWVyeUJ1aWxkZXIge1xuICAgICAgICB0aGlzLnBhcmFtcy5wdXNoKCcmJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFwcGVuZCh2YWw6IHN0cmluZyk6IEZoaXJRdWVyeUJ1aWxkZXIge1xuICAgICAgICB0aGlzLnBhcmFtcy5wdXNoKHZhbCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHBhcmFtc0FzT2JqZWN0KCkge1xuICAgICAgICBjb25zdCByZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBzZSBvZiB0aGlzLnBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHNlID09PSAnJicpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1QYXJ0czogc3RyaW5nW10gPSBzZS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgcmVzW3BhcmFtUGFydHNbMF1dID0gcGFyYW1QYXJ0c1sxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIHBhcmFtc0FzSHR0cFBhcmFtcygpOiBIdHRwUGFyYW1zIHtcbiAgICAgICAgbGV0IHJlcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgICAgIGZvciAoY29uc3Qgc2Ugb2YgdGhpcy5wYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChzZSA9PT0gJyYnKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtUGFydHM6IHN0cmluZ1tdID0gc2Uuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIHJlcyA9IHJlcy5hcHBlbmQocGFyYW1QYXJ0c1swXSwgcGFyYW1QYXJ0c1sxXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMZWZ0UGFydCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfcWI6IEZoaXJRdWVyeUJ1aWxkZXI7XG4gICAgbGVmdDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocWI6IEZoaXJRdWVyeUJ1aWxkZXIpIHtcbiAgICAgICAgdGhpcy5fcWIgPSBxYjtcbiAgICB9XG5cbiAgICBlcSh2YWw6IHN0cmluZyk6IEZoaXJRdWVyeUJ1aWxkZXIge1xuICAgICAgICB0aGlzLl9xYi5wYXJhbXMucHVzaChgJHt0aGlzLmxlZnR9PSR7dmFsfWApO1xuICAgICAgICByZXR1cm4gdGhpcy5fcWI7XG4gICAgfVxuXG4gICAgY29udGFpbnModmFsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcWIucGFyYW1zLnB1c2goYCR7dGhpcy5sZWZ0fTpjb250YWlucz0ke3ZhbH1gKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FiO1xuICAgIH1cblxuICAgIHN0YXJ0cyh2YWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9xYi5wYXJhbXMucHVzaChgJHt0aGlzLmxlZnR9PSR7dmFsfWApO1xuICAgICAgICByZXR1cm4gdGhpcy5fcWI7XG4gICAgfVxuXG4gICAgZXhhY3QodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcWIucGFyYW1zLnB1c2goYCR7dGhpcy5sZWZ0fTpleGFjdD0ke3ZhbH1gKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FiO1xuICAgIH1cbn1cbiJdfQ==
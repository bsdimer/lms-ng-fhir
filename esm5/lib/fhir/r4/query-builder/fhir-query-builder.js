/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpParams } from "@angular/common/http";
var InstanceLevelInteractions = /** @class */ (function () {
    function InstanceLevelInteractions() {
    }
    InstanceLevelInteractions.read = 0;
    InstanceLevelInteractions.vread = 1;
    InstanceLevelInteractions.update = 2;
    InstanceLevelInteractions.patch = 3;
    InstanceLevelInteractions.delete = 4;
    InstanceLevelInteractions.history = 5;
    InstanceLevelInteractions.create = 6;
    return InstanceLevelInteractions;
}());
export { InstanceLevelInteractions };
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
var TypeLevelInteractions = /** @class */ (function () {
    function TypeLevelInteractions() {
    }
    TypeLevelInteractions.create = 10;
    TypeLevelInteractions.search = 11;
    TypeLevelInteractions.history = 12;
    return TypeLevelInteractions;
}());
export { TypeLevelInteractions };
if (false) {
    /** @type {?} */
    TypeLevelInteractions.create;
    /** @type {?} */
    TypeLevelInteractions.search;
    /** @type {?} */
    TypeLevelInteractions.history;
}
var WholeSystemInteractions = /** @class */ (function () {
    function WholeSystemInteractions() {
    }
    WholeSystemInteractions.capabilities = 21;
    WholeSystemInteractions.batch = 22;
    WholeSystemInteractions.search = 23;
    WholeSystemInteractions.history = 24;
    return WholeSystemInteractions;
}());
export { WholeSystemInteractions };
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
var CommonSearchParameters = /** @class */ (function () {
    function CommonSearchParameters() {
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
    return CommonSearchParameters;
}());
export { CommonSearchParameters };
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
var SearchControlParameters = /** @class */ (function () {
    function SearchControlParameters() {
    }
    return SearchControlParameters;
}());
export { SearchControlParameters };
var FhirQueryBuilder = /** @class */ (function () {
    function FhirQueryBuilder(baseUrl) {
        this._baseUrl = '';
        this._params = [];
        this._baseUrl = baseUrl;
    }
    /**
     * @param {?=} baseUrl
     * @return {?}
     */
    FhirQueryBuilder.getInstance = /**
     * @param {?=} baseUrl
     * @return {?}
     */
    function (baseUrl) {
        return new FhirQueryBuilder(baseUrl);
    };
    Object.defineProperty(FhirQueryBuilder.prototype, "resourceName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._resourceName;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} resourceName
     * @return {?}
     */
    FhirQueryBuilder.prototype.setResourceName = /**
     * @param {?} resourceName
     * @return {?}
     */
    function (resourceName) {
        this._resourceName = resourceName;
        return this;
    };
    Object.defineProperty(FhirQueryBuilder.prototype, "query", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var q = "" + this._baseUrl;
            switch (this._fhirOperation) {
                case TypeLevelInteractions.search:
                    q = q + "/" + this._resourceName + "?";
                    this.params.forEach((/**
                     * @param {?} p
                     * @return {?}
                     */
                    function (p) {
                        q = q + p;
                    }));
                    break;
                case InstanceLevelInteractions.read:
                    q = q + "/" + this._resourceName + "/";
                    this.params.forEach((/**
                     * @param {?} p
                     * @return {?}
                     */
                    function (p) {
                        q = q + p;
                    }));
                    break;
            }
            return q;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} id
     * @return {?}
     */
    FhirQueryBuilder.prototype.read = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._fhirOperation = InstanceLevelInteractions.read;
        this._params.push(id);
        return this;
    };
    /**
     * @param {?} propName
     * @return {?}
     */
    FhirQueryBuilder.prototype.search = /**
     * @param {?} propName
     * @return {?}
     */
    function (propName) {
        this._fhirOperation = TypeLevelInteractions.search;
        /** @type {?} */
        var lp = new LeftPart(this);
        lp.left = propName;
        return lp;
    };
    Object.defineProperty(FhirQueryBuilder.prototype, "params", {
        get: /**
         * @return {?}
         */
        function () {
            return this._params;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FhirQueryBuilder.prototype.and = /**
     * @return {?}
     */
    function () {
        this.params.push('&');
        return this;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    FhirQueryBuilder.prototype.append = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.params.push(val);
        return this;
    };
    /**
     * @return {?}
     */
    FhirQueryBuilder.prototype.paramsAsObject = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var res = {};
        try {
            for (var _b = tslib_1.__values(this.params), _c = _b.next(); !_c.done; _c = _b.next()) {
                var se = _c.value;
                if (se === '&')
                    continue;
                /** @type {?} */
                var paramParts = se.split('=');
                res[paramParts[0]] = paramParts[1];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res;
    };
    /**
     * @return {?}
     */
    FhirQueryBuilder.prototype.paramsAsHttpParams = /**
     * @return {?}
     */
    function () {
        var e_2, _a;
        /** @type {?} */
        var res = new HttpParams();
        try {
            for (var _b = tslib_1.__values(this.params), _c = _b.next(); !_c.done; _c = _b.next()) {
                var se = _c.value;
                if (se === '&')
                    continue;
                /** @type {?} */
                var paramParts = se.split('=');
                res = res.append(paramParts[0], paramParts[1]);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return res;
    };
    return FhirQueryBuilder;
}());
export { FhirQueryBuilder };
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
var LeftPart = /** @class */ (function () {
    function LeftPart(qb) {
        this._qb = qb;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    LeftPart.prototype.eq = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this._qb.params.push(this.left + "=" + val);
        return this._qb;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    LeftPart.prototype.contains = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this._qb.params.push(this.left + ":contains=" + val);
        return this._qb;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    LeftPart.prototype.starts = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this._qb.params.push(this.left + "=" + val);
        return this._qb;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    LeftPart.prototype.exact = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this._qb.params.push(this.left + ":exact=" + val);
        return this._qb;
    };
    return LeftPart;
}());
export { LeftPart };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LeftPart.prototype._qb;
    /** @type {?} */
    LeftPart.prototype.left;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhpci1xdWVyeS1idWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvZmhpci9yNC9xdWVyeS1idWlsZGVyL2ZoaXItcXVlcnktYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVoRDtJQUFBO0lBUUEsQ0FBQztJQVBpQiw4QkFBSSxHQUFXLENBQUMsQ0FBQztJQUNqQiwrQkFBSyxHQUFXLENBQUMsQ0FBQztJQUNsQixnQ0FBTSxHQUFXLENBQUMsQ0FBQztJQUNuQiwrQkFBSyxHQUFXLENBQUMsQ0FBQztJQUNsQixnQ0FBTSxHQUFXLENBQUMsQ0FBQztJQUNuQixpQ0FBTyxHQUFXLENBQUMsQ0FBQztJQUNwQixnQ0FBTSxHQUFXLENBQUMsQ0FBQztJQUNyQyxnQ0FBQztDQUFBLEFBUkQsSUFRQztTQVJZLHlCQUF5Qjs7O0lBQ2xDLCtCQUErQjs7SUFDL0IsZ0NBQWdDOztJQUNoQyxpQ0FBaUM7O0lBQ2pDLGdDQUFnQzs7SUFDaEMsaUNBQWlDOztJQUNqQyxrQ0FBa0M7O0lBQ2xDLGlDQUFpQzs7QUFHckM7SUFBQTtJQUlBLENBQUM7SUFIaUIsNEJBQU0sR0FBVyxFQUFFLENBQUM7SUFDcEIsNEJBQU0sR0FBVyxFQUFFLENBQUM7SUFDcEIsNkJBQU8sR0FBVyxFQUFFLENBQUM7SUFDdkMsNEJBQUM7Q0FBQSxBQUpELElBSUM7U0FKWSxxQkFBcUI7OztJQUM5Qiw2QkFBa0M7O0lBQ2xDLDZCQUFrQzs7SUFDbEMsOEJBQW1DOztBQUd2QztJQUFBO0lBS0EsQ0FBQztJQUppQixvQ0FBWSxHQUFXLEVBQUUsQ0FBQztJQUMxQiw2QkFBSyxHQUFXLEVBQUUsQ0FBQztJQUNuQiw4QkFBTSxHQUFXLEVBQUUsQ0FBQztJQUNwQiwrQkFBTyxHQUFXLEVBQUUsQ0FBQztJQUN2Qyw4QkFBQztDQUFBLEFBTEQsSUFLQztTQUxZLHVCQUF1Qjs7O0lBQ2hDLHFDQUF3Qzs7SUFDeEMsOEJBQWlDOztJQUNqQywrQkFBa0M7O0lBQ2xDLGdDQUFtQzs7QUFHdkM7SUFBQTtJQVVBLENBQUM7SUFUaUIsMEJBQUcsR0FBVyxLQUFLLENBQUM7SUFDcEIsbUNBQVksR0FBVyxjQUFjLENBQUM7SUFDdEMsMkJBQUksR0FBVyxNQUFNLENBQUM7SUFDdEIsK0JBQVEsR0FBVyxVQUFVLENBQUM7SUFDOUIsZ0NBQVMsR0FBVyxXQUFXLENBQUM7SUFDaEMsNEJBQUssR0FBVyxPQUFPLENBQUM7SUFDeEIsK0JBQVEsR0FBVyxVQUFVLENBQUM7SUFDOUIsNEJBQUssR0FBVyxPQUFPLENBQUM7SUFDeEIsNkJBQU0sR0FBVyxRQUFRLENBQUM7SUFDNUMsNkJBQUM7Q0FBQSxBQVZELElBVUM7U0FWWSxzQkFBc0I7OztJQUMvQiwyQkFBa0M7O0lBQ2xDLG9DQUFvRDs7SUFDcEQsNEJBQW9DOztJQUNwQyxnQ0FBNEM7O0lBQzVDLGlDQUE4Qzs7SUFDOUMsNkJBQXNDOztJQUN0QyxnQ0FBNEM7O0lBQzVDLDZCQUFzQzs7SUFDdEMsOEJBQXdDOztBQUc1QztJQUFBO0lBRUEsQ0FBQztJQUFELDhCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7O0FBRUQ7SUFPSSwwQkFBWSxPQUFnQjtRQUxYLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFFL0IsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUlqQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDOzs7OztJQUVhLDRCQUFXOzs7O0lBQXpCLFVBQTBCLE9BQWdCO1FBQ3RDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsc0JBQUksMENBQVk7Ozs7UUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsMENBQWU7Ozs7SUFBZixVQUFnQixZQUFvQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztRQUNsQyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsc0JBQUksbUNBQUs7Ozs7UUFBVDs7Z0JBQ1EsQ0FBQyxHQUFHLEtBQUcsSUFBSSxDQUFDLFFBQVU7WUFDMUIsUUFBUSxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN6QixLQUFLLHFCQUFxQixDQUFDLE1BQU07b0JBQzdCLENBQUMsR0FBTSxDQUFDLFNBQUksSUFBSSxDQUFDLGFBQWEsTUFBRyxDQUFDO29CQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7b0JBQUMsVUFBQSxDQUFDO3dCQUNqQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDZCxDQUFDLEVBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNWLEtBQUsseUJBQXlCLENBQUMsSUFBSTtvQkFDL0IsQ0FBQyxHQUFNLENBQUMsU0FBSSxJQUFJLENBQUMsYUFBYSxNQUFHLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztvQkFBQyxVQUFBLENBQUM7d0JBQ2pCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNkLENBQUMsRUFBQyxDQUFDO29CQUNILE1BQU07YUFDYjtZQUNELE9BQU8sQ0FBQyxDQUFDO1FBQ2IsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsK0JBQUk7Ozs7SUFBSixVQUFLLEVBQVU7UUFDWCxJQUFJLENBQUMsY0FBYyxHQUFHLHlCQUF5QixDQUFDLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELGlDQUFNOzs7O0lBQU4sVUFBTyxRQUFnQjtRQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLHFCQUFxQixDQUFDLE1BQU0sQ0FBQzs7WUFDN0MsRUFBRSxHQUFhLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QyxFQUFFLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUNuQixPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxzQkFBSSxvQ0FBTTs7OztRQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBOzs7O0lBRUQsOEJBQUc7OztJQUFIO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCxpQ0FBTTs7OztJQUFOLFVBQU8sR0FBVztRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFFRCx5Q0FBYzs7O0lBQWQ7OztZQUNVLEdBQUcsR0FBRyxFQUFFOztZQUNkLEtBQWlCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsTUFBTSxDQUFBLGdCQUFBLDRCQUFFO2dCQUF6QixJQUFNLEVBQUUsV0FBQTtnQkFDVCxJQUFJLEVBQUUsS0FBSyxHQUFHO29CQUFFLFNBQVM7O29CQUNuQixVQUFVLEdBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQzFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEM7Ozs7Ozs7OztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELDZDQUFrQjs7O0lBQWxCOzs7WUFDUSxHQUFHLEdBQUcsSUFBSSxVQUFVLEVBQUU7O1lBQzFCLEtBQWlCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsTUFBTSxDQUFBLGdCQUFBLDRCQUFFO2dCQUF6QixJQUFNLEVBQUUsV0FBQTtnQkFDVCxJQUFJLEVBQUUsS0FBSyxHQUFHO29CQUFFLFNBQVM7O29CQUNuQixVQUFVLEdBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQzFDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsRDs7Ozs7Ozs7O1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBekZELElBeUZDOzs7Ozs7O0lBdkZHLG9DQUF1Qzs7Ozs7SUFDdkMseUNBQThCOzs7OztJQUM5QixtQ0FBcUI7Ozs7O0lBQ3JCLDBDQUErQjs7QUFzRm5DO0lBSUksa0JBQVksRUFBb0I7UUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxxQkFBRTs7OztJQUFGLFVBQUcsR0FBVztRQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsSUFBSSxTQUFJLEdBQUssQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELDJCQUFROzs7O0lBQVIsVUFBUyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsSUFBSSxrQkFBYSxHQUFLLENBQUMsQ0FBQztRQUNyRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCx5QkFBTTs7OztJQUFOLFVBQU8sR0FBVztRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsSUFBSSxTQUFJLEdBQUssQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELHdCQUFLOzs7O0lBQUwsVUFBTSxHQUFXO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxJQUFJLGVBQVUsR0FBSyxDQUFDLENBQUM7UUFDbEQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQzs7Ozs7OztJQTFCRyx1QkFBdUM7O0lBQ3ZDLHdCQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwUGFyYW1zfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuZXhwb3J0IGNsYXNzIEluc3RhbmNlTGV2ZWxJbnRlcmFjdGlvbnMge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgc3RhdGljIHZyZWFkOiBudW1iZXIgPSAxO1xuICAgIHB1YmxpYyBzdGF0aWMgdXBkYXRlOiBudW1iZXIgPSAyO1xuICAgIHB1YmxpYyBzdGF0aWMgcGF0Y2g6IG51bWJlciA9IDM7XG4gICAgcHVibGljIHN0YXRpYyBkZWxldGU6IG51bWJlciA9IDQ7XG4gICAgcHVibGljIHN0YXRpYyBoaXN0b3J5OiBudW1iZXIgPSA1O1xuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlOiBudW1iZXIgPSA2O1xufVxuXG5leHBvcnQgY2xhc3MgVHlwZUxldmVsSW50ZXJhY3Rpb25zIHtcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZTogbnVtYmVyID0gMTA7XG4gICAgcHVibGljIHN0YXRpYyBzZWFyY2g6IG51bWJlciA9IDExO1xuICAgIHB1YmxpYyBzdGF0aWMgaGlzdG9yeTogbnVtYmVyID0gMTI7XG59XG5cbmV4cG9ydCBjbGFzcyBXaG9sZVN5c3RlbUludGVyYWN0aW9ucyB7XG4gICAgcHVibGljIHN0YXRpYyBjYXBhYmlsaXRpZXM6IG51bWJlciA9IDIxO1xuICAgIHB1YmxpYyBzdGF0aWMgYmF0Y2g6IG51bWJlciA9IDIyO1xuICAgIHB1YmxpYyBzdGF0aWMgc2VhcmNoOiBudW1iZXIgPSAyMztcbiAgICBwdWJsaWMgc3RhdGljIGhpc3Rvcnk6IG51bWJlciA9IDI0O1xufVxuXG5leHBvcnQgY2xhc3MgQ29tbW9uU2VhcmNoUGFyYW1ldGVycyB7XG4gICAgcHVibGljIHN0YXRpYyBfaWQ6IHN0cmluZyA9ICdfaWQnO1xuICAgIHB1YmxpYyBzdGF0aWMgX2xhc3RVcGRhdGVkOiBzdHJpbmcgPSAnX2xhc3RVcGRhdGVkJztcbiAgICBwdWJsaWMgc3RhdGljIF90YWc6IHN0cmluZyA9ICdfdGFnJztcbiAgICBwdWJsaWMgc3RhdGljIF9wcm9maWxlOiBzdHJpbmcgPSAnX3Byb2ZpbGUnO1xuICAgIHB1YmxpYyBzdGF0aWMgX3NlY3VyaXR5OiBzdHJpbmcgPSAnX3NlY3VyaXR5JztcbiAgICBwdWJsaWMgc3RhdGljIF90ZXh0OiBzdHJpbmcgPSAnX3RleHQnO1xuICAgIHB1YmxpYyBzdGF0aWMgX2NvbnRlbnQ6IHN0cmluZyA9ICdfY29udGVudCc7XG4gICAgcHVibGljIHN0YXRpYyBfbGlzdDogc3RyaW5nID0gJ19saXN0JztcbiAgICBwdWJsaWMgc3RhdGljIF9xdWVyeTogc3RyaW5nID0gJ19xdWVyeSc7XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hDb250cm9sUGFyYW1ldGVycyB7XG5cbn1cblxuZXhwb3J0IGNsYXNzIEZoaXJRdWVyeUJ1aWxkZXIge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYmFzZVVybDogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBfcmVzb3VyY2VOYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGFyYW1zID0gW107XG4gICAgcHJpdmF0ZSBfZmhpck9wZXJhdGlvbjogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoYmFzZVVybD86IHN0cmluZykge1xuICAgICAgICB0aGlzLl9iYXNlVXJsID0gYmFzZVVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKGJhc2VVcmw/OiBzdHJpbmcpOiBGaGlyUXVlcnlCdWlsZGVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGaGlyUXVlcnlCdWlsZGVyKGJhc2VVcmwpO1xuICAgIH1cblxuICAgIGdldCByZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlTmFtZTtcbiAgICB9XG5cbiAgICBzZXRSZXNvdXJjZU5hbWUocmVzb3VyY2VOYW1lOiBzdHJpbmcpOiBGaGlyUXVlcnlCdWlsZGVyIHtcbiAgICAgICAgdGhpcy5fcmVzb3VyY2VOYW1lID0gcmVzb3VyY2VOYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQgcXVlcnkoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHEgPSBgJHt0aGlzLl9iYXNlVXJsfWA7XG4gICAgICAgIHN3aXRjaCAodGhpcy5fZmhpck9wZXJhdGlvbikge1xuICAgICAgICAgICAgY2FzZSBUeXBlTGV2ZWxJbnRlcmFjdGlvbnMuc2VhcmNoOlxuICAgICAgICAgICAgICAgIHEgPSBgJHtxfS8ke3RoaXMuX3Jlc291cmNlTmFtZX0/YDtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgICAgICAgICBxID0gcSArIHA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEluc3RhbmNlTGV2ZWxJbnRlcmFjdGlvbnMucmVhZDpcbiAgICAgICAgICAgICAgICBxID0gYCR7cX0vJHt0aGlzLl9yZXNvdXJjZU5hbWV9L2A7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcSA9IHEgKyBwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBxO1xuICAgIH1cblxuICAgIHJlYWQoaWQ6IHN0cmluZyk6IEZoaXJRdWVyeUJ1aWxkZXIge1xuICAgICAgICB0aGlzLl9maGlyT3BlcmF0aW9uID0gSW5zdGFuY2VMZXZlbEludGVyYWN0aW9ucy5yZWFkO1xuICAgICAgICB0aGlzLl9wYXJhbXMucHVzaChpZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNlYXJjaChwcm9wTmFtZTogc3RyaW5nKTogTGVmdFBhcnQge1xuICAgICAgICB0aGlzLl9maGlyT3BlcmF0aW9uID0gVHlwZUxldmVsSW50ZXJhY3Rpb25zLnNlYXJjaDtcbiAgICAgICAgY29uc3QgbHA6IExlZnRQYXJ0ID0gbmV3IExlZnRQYXJ0KHRoaXMpO1xuICAgICAgICBscC5sZWZ0ID0gcHJvcE5hbWU7XG4gICAgICAgIHJldHVybiBscDtcbiAgICB9XG5cbiAgICBnZXQgcGFyYW1zKCk6IGFueVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmFtcztcbiAgICB9XG5cbiAgICBhbmQoKTogRmhpclF1ZXJ5QnVpbGRlciB7XG4gICAgICAgIHRoaXMucGFyYW1zLnB1c2goJyYnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYXBwZW5kKHZhbDogc3RyaW5nKTogRmhpclF1ZXJ5QnVpbGRlciB7XG4gICAgICAgIHRoaXMucGFyYW1zLnB1c2godmFsKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcGFyYW1zQXNPYmplY3QoKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHNlIG9mIHRoaXMucGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAoc2UgPT09ICcmJykgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBwYXJhbVBhcnRzOiBzdHJpbmdbXSA9IHNlLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICByZXNbcGFyYW1QYXJ0c1swXV0gPSBwYXJhbVBhcnRzWzFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgcGFyYW1zQXNIdHRwUGFyYW1zKCk6IEh0dHBQYXJhbXMge1xuICAgICAgICBsZXQgcmVzID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICAgICAgZm9yIChjb25zdCBzZSBvZiB0aGlzLnBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHNlID09PSAnJicpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1QYXJ0czogc3RyaW5nW10gPSBzZS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgcmVzID0gcmVzLmFwcGVuZChwYXJhbVBhcnRzWzBdLCBwYXJhbVBhcnRzWzFdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExlZnRQYXJ0IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9xYjogRmhpclF1ZXJ5QnVpbGRlcjtcbiAgICBsZWZ0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihxYjogRmhpclF1ZXJ5QnVpbGRlcikge1xuICAgICAgICB0aGlzLl9xYiA9IHFiO1xuICAgIH1cblxuICAgIGVxKHZhbDogc3RyaW5nKTogRmhpclF1ZXJ5QnVpbGRlciB7XG4gICAgICAgIHRoaXMuX3FiLnBhcmFtcy5wdXNoKGAke3RoaXMubGVmdH09JHt2YWx9YCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9xYjtcbiAgICB9XG5cbiAgICBjb250YWlucyh2YWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9xYi5wYXJhbXMucHVzaChgJHt0aGlzLmxlZnR9OmNvbnRhaW5zPSR7dmFsfWApO1xuICAgICAgICByZXR1cm4gdGhpcy5fcWI7XG4gICAgfVxuXG4gICAgc3RhcnRzKHZhbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3FiLnBhcmFtcy5wdXNoKGAke3RoaXMubGVmdH09JHt2YWx9YCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9xYjtcbiAgICB9XG5cbiAgICBleGFjdCh2YWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9xYi5wYXJhbXMucHVzaChgJHt0aGlzLmxlZnR9OmV4YWN0PSR7dmFsfWApO1xuICAgICAgICByZXR1cm4gdGhpcy5fcWI7XG4gICAgfVxufVxuIl19
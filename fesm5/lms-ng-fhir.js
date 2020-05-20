import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, Pipe, NgModule } from '@angular/core';
import { __extends, __values } from 'tslib';
import { of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { merge } from 'lodash';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var FHIR_CONFIG = new InjectionToken('FhirConfig');
var FhirConfig = /** @class */ (function () {
    function FhirConfig() {
    }
    FhirConfig.decorators = [
        { type: Injectable }
    ];
    return FhirConfig;
}());
if (false) {
    /** @type {?} */
    FhirConfig.prototype.base;
    /** @type {?} */
    FhirConfig.prototype.fhircqrs;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Element = /** @class */ (function () {
    function Element() {
    }
    return Element;
}());
if (false) {
    /** @type {?} */
    Element.prototype.id;
    /** @type {?} */
    Element.prototype.extension;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Resource = /** @class */ (function () {
    function Resource() {
    }
    return Resource;
}());
if (false) {
    /** @type {?} */
    Resource.prototype.id;
    /** @type {?} */
    Resource.prototype.meta;
    /** @type {?} */
    Resource.prototype.implicitRules;
    /** @type {?} */
    Resource.prototype.language;
    /** @type {?} */
    Resource.prototype.resourceType;
    /** @type {?} */
    Resource.prototype.versionId;
    /** @type {?} */
    Resource.prototype.lastUpdated;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DomainResource = /** @class */ (function (_super) {
    __extends(DomainResource, _super);
    function DomainResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DomainResource;
}(Resource));
if (false) {
    /** @type {?} */
    DomainResource.prototype.text;
    /** @type {?} */
    DomainResource.prototype.contained;
    /** @type {?} */
    DomainResource.prototype.extension;
    /** @type {?} */
    DomainResource.prototype.modifierExtension;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Meta = /** @class */ (function (_super) {
    __extends(Meta, _super);
    function Meta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Meta;
}(Element));
if (false) {
    /** @type {?} */
    Meta.prototype.id;
    /** @type {?} */
    Meta.prototype.extension;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Extension = /** @class */ (function () {
    function Extension() {
    }
    return Extension;
}());
if (false) {
    /** @type {?} */
    Extension.prototype.url;
    /** @type {?} */
    Extension.prototype.valueString;
    /** @type {?} */
    Extension.prototype.valueInteger;
    /** @type {?} */
    Extension.prototype.valueDecimal;
    /** @type {?} */
    Extension.prototype.valuePositiveInt;
    /** @type {?} */
    Extension.prototype.valueUnsignedInt;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Narrative = /** @class */ (function (_super) {
    __extends(Narrative, _super);
    function Narrative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Narrative;
}(Element));
if (false) {
    /** @type {?} */
    Narrative.prototype.status;
    /** @type {?} */
    Narrative.prototype.div;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Period = /** @class */ (function (_super) {
    __extends(Period, _super);
    function Period(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return Period;
}(Element));
if (false) {
    /** @type {?} */
    Period.prototype.start;
    /** @type {?} */
    Period.prototype.end;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Range = /** @class */ (function (_super) {
    __extends(Range, _super);
    function Range(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return Range;
}(Element));
if (false) {
    /** @type {?} */
    Range.prototype.low;
    /** @type {?} */
    Range.prototype.high;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Reference = /** @class */ (function (_super) {
    __extends(Reference, _super);
    function Reference(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return Reference;
}(Element));
if (false) {
    /** @type {?} */
    Reference.prototype.reference;
    /** @type {?} */
    Reference.prototype.type;
    /** @type {?} */
    Reference.prototype.identifier;
    /** @type {?} */
    Reference.prototype.display;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Ratio = /** @class */ (function (_super) {
    __extends(Ratio, _super);
    function Ratio(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return Ratio;
}(Element));
if (false) {
    /** @type {?} */
    Ratio.prototype.numerator;
    /** @type {?} */
    Ratio.prototype.denominator;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HumanName = /** @class */ (function (_super) {
    __extends(HumanName, _super);
    function HumanName(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        _this.given = [];
        _this.prefix = [];
        _this.suffix = [];
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    /**
     * @return {?}
     */
    HumanName.getNew = /**
     * @return {?}
     */
    function () {
        return new HumanName({ use: 'official', given: ['name'] });
    };
    return HumanName;
}(Element));
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        _this.resourceType = 'Person';
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    /**
     * @return {?}
     */
    Person.getNew = /**
     * @return {?}
     */
    function () {
        return new Person({ name: [HumanName.getNew()] });
    };
    return Person;
}(DomainResource));
if (false) {
    /** @type {?} */
    Person.prototype.resourceType;
    /** @type {?} */
    Person.prototype.identifier;
    /** @type {?} */
    Person.prototype.name;
    /** @type {?} */
    Person.prototype.telecom;
    /** @type {?} */
    Person.prototype.gender;
    /** @type {?} */
    Person.prototype.birthDate;
    /** @type {?} */
    Person.prototype.address;
    /** @type {?} */
    Person.prototype.photo;
    /** @type {?} */
    Person.prototype.managingOrganization;
    /** @type {?} */
    Person.prototype.active;
    /** @type {?} */
    Person.prototype.link;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    function Address(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return Address;
}(Element));
if (false) {
    /** @type {?} */
    Address.prototype.use;
    /** @type {?} */
    Address.prototype.type;
    /** @type {?} */
    Address.prototype.text;
    /** @type {?} */
    Address.prototype.line;
    /** @type {?} */
    Address.prototype.city;
    /** @type {?} */
    Address.prototype.district;
    /** @type {?} */
    Address.prototype.state;
    /** @type {?} */
    Address.prototype.postalCode;
    /** @type {?} */
    Address.prototype.country;
    /** @type {?} */
    Address.prototype.period;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Attachment = /** @class */ (function (_super) {
    __extends(Attachment, _super);
    function Attachment(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        _this.resourceType = 'Attachment';
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'Group';
        return _this;
    }
    return Group;
}(DomainResource));
if (false) {
    /** @type {?} */
    Group.prototype.resourceType;
    /** @type {?} */
    Group.prototype.identifier;
    /** @type {?} */
    Group.prototype.active;
    /** @type {?} */
    Group.prototype.type;
    /** @type {?} */
    Group.prototype.actual;
    /** @type {?} */
    Group.prototype.code;
    /** @type {?} */
    Group.prototype.name;
    /** @type {?} */
    Group.prototype.quantity;
    /** @type {?} */
    Group.prototype.managingEntity;
    /** @type {?} */
    Group.prototype.characteristic;
    /** @type {?} */
    Group.prototype.member;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Patient = /** @class */ (function (_super) {
    __extends(Patient, _super);
    function Patient(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        _this.resourceType = 'Patient';
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    /**
     * @return {?}
     */
    Patient.getNew = /**
     * @return {?}
     */
    function () {
        return new Patient({ name: [HumanName.getNew()] });
    };
    return Patient;
}(DomainResource));
if (false) {
    /** @type {?} */
    Patient.prototype.resourceType;
    /** @type {?} */
    Patient.prototype.identifier;
    /** @type {?} */
    Patient.prototype.active;
    /** @type {?} */
    Patient.prototype.name;
    /** @type {?} */
    Patient.prototype.telecom;
    /** @type {?} */
    Patient.prototype.gender;
    /** @type {?} */
    Patient.prototype.birthDate;
    /** @type {?} */
    Patient.prototype.deceasedBoolean;
    /** @type {?} */
    Patient.prototype.deceasedDateTime;
    /** @type {?} */
    Patient.prototype.address;
    /** @type {?} */
    Patient.prototype.maritalStatus;
    /** @type {?} */
    Patient.prototype.multipleBirthBoolean;
    /** @type {?} */
    Patient.prototype.multipleBirthInteger;
    /** @type {?} */
    Patient.prototype.photo;
    /** @type {?} */
    Patient.prototype.contact;
    /** @type {?} */
    Patient.prototype.communication;
    /** @type {?} */
    Patient.prototype.generalPractitioner;
    /** @type {?} */
    Patient.prototype.managingOrganization;
    /** @type {?} */
    Patient.prototype.link;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Practitioner = /** @class */ (function (_super) {
    __extends(Practitioner, _super);
    function Practitioner(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        _this.resourceType = 'Practitioner';
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    /**
     * @return {?}
     */
    Practitioner.getNew = /**
     * @return {?}
     */
    function () {
        return new Practitioner({ name: [HumanName.getNew()] });
    };
    return Practitioner;
}(DomainResource));
if (false) {
    /** @type {?} */
    Practitioner.prototype.resourceType;
    /** @type {?} */
    Practitioner.prototype.identifier;
    /** @type {?} */
    Practitioner.prototype.active;
    /** @type {?} */
    Practitioner.prototype.name;
    /** @type {?} */
    Practitioner.prototype.telecom;
    /** @type {?} */
    Practitioner.prototype.address;
    /** @type {?} */
    Practitioner.prototype.gender;
    /** @type {?} */
    Practitioner.prototype.birthDate;
    /** @type {?} */
    Practitioner.prototype.photo;
    /** @type {?} */
    Practitioner.prototype.qualification;
    /** @type {?} */
    Practitioner.prototype.communication;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PractitionerRole = /** @class */ (function (_super) {
    __extends(PractitionerRole, _super);
    function PractitionerRole(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        _this.resourceType = 'PractitionerRole';
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    // (Endpoint)
    /**
     * @return {?}
     */
    PractitionerRole.getNew = 
    // (Endpoint)
    /**
     * @return {?}
     */
    function () {
        return new PractitionerRole({ name: [HumanName.getNew()] });
    };
    return PractitionerRole;
}(DomainResource));
if (false) {
    /** @type {?} */
    PractitionerRole.prototype.resourceType;
    /** @type {?} */
    PractitionerRole.prototype.identifier;
    /** @type {?} */
    PractitionerRole.prototype.active;
    /** @type {?} */
    PractitionerRole.prototype.period;
    /** @type {?} */
    PractitionerRole.prototype.practitioner;
    /** @type {?} */
    PractitionerRole.prototype.organization;
    /** @type {?} */
    PractitionerRole.prototype.code;
    /** @type {?} */
    PractitionerRole.prototype.specialty;
    /** @type {?} */
    PractitionerRole.prototype.location;
    /** @type {?} */
    PractitionerRole.prototype.healthcareService;
    /** @type {?} */
    PractitionerRole.prototype.telecom;
    /** @type {?} */
    PractitionerRole.prototype.availableTime;
    /** @type {?} */
    PractitionerRole.prototype.notAvailable;
    /** @type {?} */
    PractitionerRole.prototype.availabilityExceptions;
    /** @type {?} */
    PractitionerRole.prototype.endpoint;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RelatedPerson = /** @class */ (function (_super) {
    __extends(RelatedPerson, _super);
    function RelatedPerson() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'RelatedPerson';
        return _this;
    }
    return RelatedPerson;
}(DomainResource));
if (false) {
    /** @type {?} */
    RelatedPerson.prototype.resourceType;
    /** @type {?} */
    RelatedPerson.prototype.identifier;
    /** @type {?} */
    RelatedPerson.prototype.active;
    /** @type {?} */
    RelatedPerson.prototype.patient;
    /** @type {?} */
    RelatedPerson.prototype.relationship;
    /** @type {?} */
    RelatedPerson.prototype.name;
    /** @type {?} */
    RelatedPerson.prototype.telecom;
    /** @type {?} */
    RelatedPerson.prototype.gender;
    /** @type {?} */
    RelatedPerson.prototype.birthDate;
    /** @type {?} */
    RelatedPerson.prototype.address;
    /** @type {?} */
    RelatedPerson.prototype.photo;
    /** @type {?} */
    RelatedPerson.prototype.period;
    /** @type {?} */
    RelatedPerson.prototype.communication;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BackboneElement = /** @class */ (function (_super) {
    __extends(BackboneElement, _super);
    function BackboneElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BackboneElement;
}(Element));
if (false) {
    /** @type {?} */
    BackboneElement.prototype.modifierExtension;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CodeableConcept = /** @class */ (function (_super) {
    __extends(CodeableConcept, _super);
    function CodeableConcept(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return CodeableConcept;
}(Element));
if (false) {
    /** @type {?} */
    CodeableConcept.prototype.coding;
    /** @type {?} */
    CodeableConcept.prototype.text;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CodeSystem = /** @class */ (function (_super) {
    __extends(CodeSystem, _super);
    function CodeSystem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'CodeSystem';
        return _this;
    }
    return CodeSystem;
}(DomainResource));
if (false) {
    /** @type {?} */
    CodeSystem.prototype.resourceType;
    /** @type {?} */
    CodeSystem.prototype.url;
    /** @type {?} */
    CodeSystem.prototype.identifier;
    /** @type {?} */
    CodeSystem.prototype.version;
    /** @type {?} */
    CodeSystem.prototype.name;
    /** @type {?} */
    CodeSystem.prototype.title;
    /** @type {?} */
    CodeSystem.prototype.status;
    /** @type {?} */
    CodeSystem.prototype.experimental;
    /** @type {?} */
    CodeSystem.prototype.date;
    /** @type {?} */
    CodeSystem.prototype.publisher;
    /** @type {?} */
    CodeSystem.prototype.contact;
    /** @type {?} */
    CodeSystem.prototype.description;
    /** @type {?} */
    CodeSystem.prototype.useContext;
    /** @type {?} */
    CodeSystem.prototype.jurisdiction;
    /** @type {?} */
    CodeSystem.prototype.purpose;
    /** @type {?} */
    CodeSystem.prototype.copyright;
    /** @type {?} */
    CodeSystem.prototype.caseSensitive;
    /** @type {?} */
    CodeSystem.prototype.valueSet;
    /** @type {?} */
    CodeSystem.prototype.hierarchyMeaning;
    /** @type {?} */
    CodeSystem.prototype.compositional;
    /** @type {?} */
    CodeSystem.prototype.versionNeeded;
    /** @type {?} */
    CodeSystem.prototype.content;
    /** @type {?} */
    CodeSystem.prototype.supplements;
    /** @type {?} */
    CodeSystem.prototype.count;
    /** @type {?} */
    CodeSystem.prototype.filter;
    /** @type {?} */
    CodeSystem.prototype.property;
    /** @type {?} */
    CodeSystem.prototype.concept;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CodeSystemConcept = /** @class */ (function (_super) {
    __extends(CodeSystemConcept, _super);
    function CodeSystemConcept() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CodeSystemConcept;
}(BackboneElement));
if (false) {
    /** @type {?} */
    CodeSystemConcept.prototype.code;
    /** @type {?} */
    CodeSystemConcept.prototype.display;
    /** @type {?} */
    CodeSystemConcept.prototype.definition;
    /** @type {?} */
    CodeSystemConcept.prototype.designation;
    /** @type {?} */
    CodeSystemConcept.prototype.property;
    /** @type {?} */
    CodeSystemConcept.prototype.concept;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Coding = /** @class */ (function (_super) {
    __extends(Coding, _super);
    function Coding(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return Coding;
}(Element));
if (false) {
    /** @type {?} */
    Coding.prototype.system;
    /** @type {?} */
    Coding.prototype.version;
    /** @type {?} */
    Coding.prototype.code;
    /** @type {?} */
    Coding.prototype.display;
    /** @type {?} */
    Coding.prototype.userSelected;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConceptMap = /** @class */ (function (_super) {
    __extends(ConceptMap, _super);
    function ConceptMap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'ConceptMap';
        return _this;
    }
    return ConceptMap;
}(DomainResource));
if (false) {
    /** @type {?} */
    ConceptMap.prototype.resourceType;
    /** @type {?} */
    ConceptMap.prototype.url;
    /** @type {?} */
    ConceptMap.prototype.identifier;
    /** @type {?} */
    ConceptMap.prototype.version;
    /** @type {?} */
    ConceptMap.prototype.name;
    /** @type {?} */
    ConceptMap.prototype.title;
    /** @type {?} */
    ConceptMap.prototype.status;
    /** @type {?} */
    ConceptMap.prototype.experimental;
    /** @type {?} */
    ConceptMap.prototype.date;
    /** @type {?} */
    ConceptMap.prototype.publisher;
    /** @type {?} */
    ConceptMap.prototype.contact;
    /** @type {?} */
    ConceptMap.prototype.description;
    /** @type {?} */
    ConceptMap.prototype.useContext;
    /** @type {?} */
    ConceptMap.prototype.jurisdiction;
    /** @type {?} */
    ConceptMap.prototype.purpose;
    /** @type {?} */
    ConceptMap.prototype.copyright;
    /** @type {?} */
    ConceptMap.prototype.sourceUri;
    /** @type {?} */
    ConceptMap.prototype.sourceCanonical;
    /** @type {?} */
    ConceptMap.prototype.targetUri;
    /** @type {?} */
    ConceptMap.prototype.targetCanonical;
    /** @type {?} */
    ConceptMap.prototype.group;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConceptMapDependsOn = /** @class */ (function (_super) {
    __extends(ConceptMapDependsOn, _super);
    function ConceptMapDependsOn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConceptMapDependsOn;
}(BackboneElement));
if (false) {
    /** @type {?} */
    ConceptMapDependsOn.prototype.property;
    /** @type {?} */
    ConceptMapDependsOn.prototype.system;
    /** @type {?} */
    ConceptMapDependsOn.prototype.value;
    /** @type {?} */
    ConceptMapDependsOn.prototype.display;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ContactDetail = /** @class */ (function (_super) {
    __extends(ContactDetail, _super);
    function ContactDetail(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return ContactDetail;
}(Element));
if (false) {
    /** @type {?} */
    ContactDetail.prototype.name;
    /** @type {?} */
    ContactDetail.prototype.telecom;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ContactPoint = /** @class */ (function (_super) {
    __extends(ContactPoint, _super);
    function ContactPoint(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return ContactPoint;
}(Element));
if (false) {
    /** @type {?} */
    ContactPoint.prototype.system;
    /** @type {?} */
    ContactPoint.prototype.value;
    /** @type {?} */
    ContactPoint.prototype.use;
    /** @type {?} */
    ContactPoint.prototype.rank;
    /** @type {?} */
    ContactPoint.prototype.period;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Identifier = /** @class */ (function (_super) {
    __extends(Identifier, _super);
    function Identifier(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return Identifier;
}(Element));
if (false) {
    /** @type {?} */
    Identifier.prototype.use;
    /** @type {?} */
    Identifier.prototype.type;
    /** @type {?} */
    Identifier.prototype.system;
    /** @type {?} */
    Identifier.prototype.value;
    /** @type {?} */
    Identifier.prototype.period;
    /** @type {?} */
    Identifier.prototype.assigner;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NamingSystem = /** @class */ (function (_super) {
    __extends(NamingSystem, _super);
    function NamingSystem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'NamingSystem';
        return _this;
    }
    return NamingSystem;
}(DomainResource));
if (false) {
    /** @type {?} */
    NamingSystem.prototype.resourceType;
    /** @type {?} */
    NamingSystem.prototype.name;
    /** @type {?} */
    NamingSystem.prototype.status;
    /** @type {?} */
    NamingSystem.prototype.kind;
    /** @type {?} */
    NamingSystem.prototype.date;
    /** @type {?} */
    NamingSystem.prototype.publisher;
    /** @type {?} */
    NamingSystem.prototype.contact;
    /** @type {?} */
    NamingSystem.prototype.responsible;
    /** @type {?} */
    NamingSystem.prototype.type;
    /** @type {?} */
    NamingSystem.prototype.description;
    /** @type {?} */
    NamingSystem.prototype.useContext;
    /** @type {?} */
    NamingSystem.prototype.jurisdiction;
    /** @type {?} */
    NamingSystem.prototype.usage;
    /** @type {?} */
    NamingSystem.prototype.uniqueId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Quantity = /** @class */ (function (_super) {
    __extends(Quantity, _super);
    function Quantity(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return Quantity;
}(Element));
if (false) {
    /** @type {?} */
    Quantity.prototype.value;
    /** @type {?} */
    Quantity.prototype.comparator;
    /** @type {?} */
    Quantity.prototype.unit;
    /** @type {?} */
    Quantity.prototype.system;
    /** @type {?} */
    Quantity.prototype.code;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SimpleQuantity = /** @class */ (function (_super) {
    __extends(SimpleQuantity, _super);
    function SimpleQuantity(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return SimpleQuantity;
}(Quantity));
if (false) {
    /** @type {?} */
    SimpleQuantity.prototype.value;
    /** @type {?} */
    SimpleQuantity.prototype.unit;
    /** @type {?} */
    SimpleQuantity.prototype.system;
    /** @type {?} */
    SimpleQuantity.prototype.code;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TerminologyCapabilities = /** @class */ (function (_super) {
    __extends(TerminologyCapabilities, _super);
    function TerminologyCapabilities() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'TerminologyCapabilities';
        return _this;
    }
    return TerminologyCapabilities;
}(DomainResource));
if (false) {
    /** @type {?} */
    TerminologyCapabilities.prototype.resourceType;
    /** @type {?} */
    TerminologyCapabilities.prototype.url;
    /** @type {?} */
    TerminologyCapabilities.prototype.version;
    /** @type {?} */
    TerminologyCapabilities.prototype.name;
    /** @type {?} */
    TerminologyCapabilities.prototype.title;
    /** @type {?} */
    TerminologyCapabilities.prototype.status;
    /** @type {?} */
    TerminologyCapabilities.prototype.experimental;
    /** @type {?} */
    TerminologyCapabilities.prototype.date;
    /** @type {?} */
    TerminologyCapabilities.prototype.publisher;
    /** @type {?} */
    TerminologyCapabilities.prototype.contact;
    /** @type {?} */
    TerminologyCapabilities.prototype.description;
    /** @type {?} */
    TerminologyCapabilities.prototype.useContext;
    /** @type {?} */
    TerminologyCapabilities.prototype.jurisdiction;
    /** @type {?} */
    TerminologyCapabilities.prototype.purpose;
    /** @type {?} */
    TerminologyCapabilities.prototype.copyright;
    /** @type {?} */
    TerminologyCapabilities.prototype.kind;
    /** @type {?} */
    TerminologyCapabilities.prototype.software;
    /** @type {?} */
    TerminologyCapabilities.prototype.implementation;
    /** @type {?} */
    TerminologyCapabilities.prototype.lockedDate;
    /** @type {?} */
    TerminologyCapabilities.prototype.codeSystem;
    /** @type {?} */
    TerminologyCapabilities.prototype.expansion;
    /** @type {?} */
    TerminologyCapabilities.prototype.codeSearch;
    /** @type {?} */
    TerminologyCapabilities.prototype.validateCode;
    /** @type {?} */
    TerminologyCapabilities.prototype.translation;
    /** @type {?} */
    TerminologyCapabilities.prototype.closure;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UsageContext = /** @class */ (function (_super) {
    __extends(UsageContext, _super);
    function UsageContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UsageContext;
}(Element));
if (false) {
    /** @type {?} */
    UsageContext.prototype.code;
    /** @type {?} */
    UsageContext.prototype.valueCodeableConcept;
    /** @type {?} */
    UsageContext.prototype.valueQuantity;
    /** @type {?} */
    UsageContext.prototype.valueRange;
    /** @type {?} */
    UsageContext.prototype.valueReference;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ValueSet = /** @class */ (function (_super) {
    __extends(ValueSet, _super);
    function ValueSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'ValueSet';
        return _this;
    }
    return ValueSet;
}(DomainResource));
if (false) {
    /** @type {?} */
    ValueSet.prototype.resourceType;
    /** @type {?} */
    ValueSet.prototype.url;
    /** @type {?} */
    ValueSet.prototype.identifier;
    /** @type {?} */
    ValueSet.prototype.version;
    /** @type {?} */
    ValueSet.prototype.name;
    /** @type {?} */
    ValueSet.prototype.title;
    /** @type {?} */
    ValueSet.prototype.status;
    /** @type {?} */
    ValueSet.prototype.experimental;
    /** @type {?} */
    ValueSet.prototype.date;
    /** @type {?} */
    ValueSet.prototype.publisher;
    /** @type {?} */
    ValueSet.prototype.contact;
    /** @type {?} */
    ValueSet.prototype.description;
    /** @type {?} */
    ValueSet.prototype.useContext;
    /** @type {?} */
    ValueSet.prototype.jurisdiction;
    /** @type {?} */
    ValueSet.prototype.immutable;
    /** @type {?} */
    ValueSet.prototype.purpose;
    /** @type {?} */
    ValueSet.prototype.copyright;
    /** @type {?} */
    ValueSet.prototype.compose;
    /** @type {?} */
    ValueSet.prototype.expansion;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ResourceCapability = /** @class */ (function () {
    function ResourceCapability() {
        this.resourceType = 'ResourceCapability';
    }
    return ResourceCapability;
}());
if (false) {
    /** @type {?} */
    ResourceCapability.prototype.resourceType;
    /** @type {?} */
    ResourceCapability.prototype.type;
    /** @type {?} */
    ResourceCapability.prototype.profile;
    /** @type {?} */
    ResourceCapability.prototype.interaction;
    /** @type {?} */
    ResourceCapability.prototype.versioning;
    /** @type {?} */
    ResourceCapability.prototype.conditionalRead;
    /** @type {?} */
    ResourceCapability.prototype.conditionalCreate;
    /** @type {?} */
    ResourceCapability.prototype.conditionalUpdate;
    /** @type {?} */
    ResourceCapability.prototype.conditionalDelete;
    /** @type {?} */
    ResourceCapability.prototype.searchInclude;
    /** @type {?} */
    ResourceCapability.prototype.searchParam;
    /** @type {?} */
    ResourceCapability.prototype.operation;
}
var CapabilityStatement = /** @class */ (function () {
    function CapabilityStatement() {
    }
    return CapabilityStatement;
}());
if (false) {
    /** @type {?} */
    CapabilityStatement.prototype.resourceType;
    /** @type {?} */
    CapabilityStatement.prototype.status;
    /** @type {?} */
    CapabilityStatement.prototype.date;
    /** @type {?} */
    CapabilityStatement.prototype.publisher;
    /** @type {?} */
    CapabilityStatement.prototype.kind;
    /** @type {?} */
    CapabilityStatement.prototype.software;
    /** @type {?} */
    CapabilityStatement.prototype.implementation;
    /** @type {?} */
    CapabilityStatement.prototype.fhirVersion;
    /** @type {?} */
    CapabilityStatement.prototype.format;
    /** @type {?} */
    CapabilityStatement.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Bundle = /** @class */ (function (_super) {
    __extends(Bundle, _super);
    function Bundle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'Bundle';
        return _this;
    }
    return Bundle;
}(Resource));
if (false) {
    /** @type {?} */
    Bundle.prototype.identifier;
    /** @type {?} */
    Bundle.prototype.resourceType;
    /** @type {?} */
    Bundle.prototype.type;
    /** @type {?} */
    Bundle.prototype.timestamp;
    /** @type {?} */
    Bundle.prototype.total;
    /** @type {?} */
    Bundle.prototype.link;
    /** @type {?} */
    Bundle.prototype.entry;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BundleEntry = /** @class */ (function () {
    function BundleEntry() {
    }
    return BundleEntry;
}());
if (false) {
    /** @type {?} */
    BundleEntry.prototype.link;
    /** @type {?} */
    BundleEntry.prototype.fullUrl;
    /** @type {?} */
    BundleEntry.prototype.resource;
    /** @type {?} */
    BundleEntry.prototype.request;
    /** @type {?} */
    BundleEntry.prototype.response;
    /** @type {?} */
    BundleEntry.prototype.search;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Encounter = /** @class */ (function (_super) {
    __extends(Encounter, _super);
    function Encounter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'Encounter';
        return _this;
    }
    return Encounter;
}(DomainResource));
if (false) {
    /** @type {?} */
    Encounter.prototype.resourceType;
    /** @type {?} */
    Encounter.prototype.identifier;
    /** @type {?} */
    Encounter.prototype.status;
    /** @type {?} */
    Encounter.prototype.statusHistory;
    /** @type {?} */
    Encounter.prototype.class;
    /** @type {?} */
    Encounter.prototype.classHistory;
    /** @type {?} */
    Encounter.prototype.type;
    /** @type {?} */
    Encounter.prototype.serviceType;
    /** @type {?} */
    Encounter.prototype.priority;
    /** @type {?} */
    Encounter.prototype.subject;
    /** @type {?} */
    Encounter.prototype.episodeOfCare;
    /** @type {?} */
    Encounter.prototype.basedOn;
    /** @type {?} */
    Encounter.prototype.participant;
    /** @type {?} */
    Encounter.prototype.appointment;
    /** @type {?} */
    Encounter.prototype.period;
    /** @type {?} */
    Encounter.prototype.length;
    /** @type {?} */
    Encounter.prototype.reasonCode;
    /** @type {?} */
    Encounter.prototype.reasonReference;
    /** @type {?} */
    Encounter.prototype.diagnosis;
    /** @type {?} */
    Encounter.prototype.account;
    /** @type {?} */
    Encounter.prototype.hospitalization;
    /** @type {?} */
    Encounter.prototype.location;
    /** @type {?} */
    Encounter.prototype.serviceProvider;
    /** @type {?} */
    Encounter.prototype.partOf;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EpisodeOfCare = /** @class */ (function (_super) {
    __extends(EpisodeOfCare, _super);
    function EpisodeOfCare() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'EpisodeOfCare';
        return _this;
    }
    return EpisodeOfCare;
}(DomainResource));
if (false) {
    /** @type {?} */
    EpisodeOfCare.prototype.resourceType;
    /** @type {?} */
    EpisodeOfCare.prototype.identifier;
    /** @type {?} */
    EpisodeOfCare.prototype.status;
    /** @type {?} */
    EpisodeOfCare.prototype.statusHistory;
    /** @type {?} */
    EpisodeOfCare.prototype.type;
    /** @type {?} */
    EpisodeOfCare.prototype.diagnosis;
    /** @type {?} */
    EpisodeOfCare.prototype.patient;
    /** @type {?} */
    EpisodeOfCare.prototype.managingOrganization;
    /** @type {?} */
    EpisodeOfCare.prototype.period;
    /** @type {?} */
    EpisodeOfCare.prototype.referralRequest;
    /** @type {?} */
    EpisodeOfCare.prototype.careManager;
    /** @type {?} */
    EpisodeOfCare.prototype.team;
    /** @type {?} */
    EpisodeOfCare.prototype.account;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Flag = /** @class */ (function (_super) {
    __extends(Flag, _super);
    function Flag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'Flag';
        return _this;
    }
    return Flag;
}(DomainResource));
if (false) {
    /** @type {?} */
    Flag.prototype.resourceType;
    /** @type {?} */
    Flag.prototype.identifier;
    /** @type {?} */
    Flag.prototype.status;
    /** @type {?} */
    Flag.prototype.category;
    /** @type {?} */
    Flag.prototype.code;
    /** @type {?} */
    Flag.prototype.subject;
    /** @type {?} */
    Flag.prototype.period;
    /** @type {?} */
    Flag.prototype.encounter;
    /** @type {?} */
    Flag.prototype.author;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Library = /** @class */ (function (_super) {
    __extends(Library, _super);
    function Library() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'Library';
        return _this;
    }
    return Library;
}(DomainResource));
if (false) {
    /** @type {?} */
    Library.prototype.resourceType;
    /** @type {?} */
    Library.prototype.url;
    /** @type {?} */
    Library.prototype.identifier;
    /** @type {?} */
    Library.prototype.version;
    /** @type {?} */
    Library.prototype.name;
    /** @type {?} */
    Library.prototype.title;
    /** @type {?} */
    Library.prototype.subtitle;
    /** @type {?} */
    Library.prototype.status;
    /** @type {?} */
    Library.prototype.experimental;
    /** @type {?} */
    Library.prototype.type;
    /** @type {?} */
    Library.prototype.subjectCodeableConcept;
    /** @type {?} */
    Library.prototype.subjectReference;
    /** @type {?} */
    Library.prototype.date;
    /** @type {?} */
    Library.prototype.publisher;
    /** @type {?} */
    Library.prototype.contact;
    /** @type {?} */
    Library.prototype.description;
    /** @type {?} */
    Library.prototype.useContext;
    /** @type {?} */
    Library.prototype.jurisdiction;
    /** @type {?} */
    Library.prototype.purpose;
    /** @type {?} */
    Library.prototype.usage;
    /** @type {?} */
    Library.prototype.copyright;
    /** @type {?} */
    Library.prototype.approvalDate;
    /** @type {?} */
    Library.prototype.lastReviewDate;
    /** @type {?} */
    Library.prototype.effectivePeriod;
    /** @type {?} */
    Library.prototype.topic;
    /** @type {?} */
    Library.prototype.author;
    /** @type {?} */
    Library.prototype.editor;
    /** @type {?} */
    Library.prototype.reviewer;
    /** @type {?} */
    Library.prototype.endorser;
    /** @type {?} */
    Library.prototype.relatedArtifact;
    /** @type {?} */
    Library.prototype.parameter;
    /** @type {?} */
    Library.prototype.dataRequirement;
    /** @type {?} */
    Library.prototype.content;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'List';
        return _this;
    }
    return List;
}(DomainResource));
if (false) {
    /** @type {?} */
    List.prototype.resourceType;
    /** @type {?} */
    List.prototype.identifier;
    /** @type {?} */
    List.prototype.status;
    /** @type {?} */
    List.prototype.mode;
    /** @type {?} */
    List.prototype.title;
    /** @type {?} */
    List.prototype.code;
    /** @type {?} */
    List.prototype.subject;
    /** @type {?} */
    List.prototype.encounter;
    /** @type {?} */
    List.prototype.date;
    /** @type {?} */
    List.prototype.source;
    /** @type {?} */
    List.prototype.orderedBy;
    /** @type {?} */
    List.prototype.note;
    /** @type {?} */
    List.prototype.entry;
    /** @type {?} */
    List.prototype.emptyReason;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Dosage = /** @class */ (function (_super) {
    __extends(Dosage, _super);
    function Dosage(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return Dosage;
}(BackboneElement));
if (false) {
    /** @type {?} */
    Dosage.prototype.sequence;
    /** @type {?} */
    Dosage.prototype.text;
    /** @type {?} */
    Dosage.prototype.additionalInstruction;
    /** @type {?} */
    Dosage.prototype.patientInstruction;
    /** @type {?} */
    Dosage.prototype.timing;
    /** @type {?} */
    Dosage.prototype.asNeededBoolean;
    /** @type {?} */
    Dosage.prototype.asNeededCodeableConcept;
    /** @type {?} */
    Dosage.prototype.site;
    /** @type {?} */
    Dosage.prototype.route;
    /** @type {?} */
    Dosage.prototype.method;
    /** @type {?} */
    Dosage.prototype.doseAndRate;
    /** @type {?} */
    Dosage.prototype.maxDosePerPeriod;
    /** @type {?} */
    Dosage.prototype.maxDosePerAdministration;
    /** @type {?} */
    Dosage.prototype.maxDosePerLifetime;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Duration = /** @class */ (function (_super) {
    __extends(Duration, _super);
    function Duration(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return Duration;
}(Quantity));
if (false) {
    /** @type {?} */
    Duration.prototype.value;
    /** @type {?} */
    Duration.prototype.comparator;
    /** @type {?} */
    Duration.prototype.unit;
    /** @type {?} */
    Duration.prototype.system;
    /** @type {?} */
    Duration.prototype.code;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MedicationAdministration = /** @class */ (function (_super) {
    __extends(MedicationAdministration, _super);
    function MedicationAdministration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'MedicationAdministration';
        return _this;
    }
    return MedicationAdministration;
}(DomainResource));
if (false) {
    /** @type {?} */
    MedicationAdministration.prototype.resourceType;
    /** @type {?} */
    MedicationAdministration.prototype.identifier;
    /** @type {?} */
    MedicationAdministration.prototype.instantiates;
    /** @type {?} */
    MedicationAdministration.prototype.partOf;
    /** @type {?} */
    MedicationAdministration.prototype.status;
    /** @type {?} */
    MedicationAdministration.prototype.statusReason;
    /** @type {?} */
    MedicationAdministration.prototype.category;
    /** @type {?} */
    MedicationAdministration.prototype.medicationCodeableConcept;
    /** @type {?} */
    MedicationAdministration.prototype.medicationReference;
    /** @type {?} */
    MedicationAdministration.prototype.subject;
    /** @type {?} */
    MedicationAdministration.prototype.context;
    /** @type {?} */
    MedicationAdministration.prototype.supportingInformation;
    /** @type {?} */
    MedicationAdministration.prototype.effectiveDateTime;
    /** @type {?} */
    MedicationAdministration.prototype.effectivePeriod;
    /** @type {?} */
    MedicationAdministration.prototype.performer;
    /** @type {?} */
    MedicationAdministration.prototype.reasonCode;
    /** @type {?} */
    MedicationAdministration.prototype.reasonReference;
    /** @type {?} */
    MedicationAdministration.prototype.request;
    /** @type {?} */
    MedicationAdministration.prototype.device;
    /** @type {?} */
    MedicationAdministration.prototype.note;
    /** @type {?} */
    MedicationAdministration.prototype.dosage;
    /** @type {?} */
    MedicationAdministration.prototype.eventHistory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MedicationDispense = /** @class */ (function (_super) {
    __extends(MedicationDispense, _super);
    function MedicationDispense() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'MedicationDispense';
        return _this;
    }
    return MedicationDispense;
}(DomainResource));
if (false) {
    /** @type {?} */
    MedicationDispense.prototype.resourceType;
    /** @type {?} */
    MedicationDispense.prototype.identifier;
    /** @type {?} */
    MedicationDispense.prototype.partOf;
    /** @type {?} */
    MedicationDispense.prototype.status;
    /** @type {?} */
    MedicationDispense.prototype.statusReasonCodeableConcept;
    /** @type {?} */
    MedicationDispense.prototype.statusReasonReference;
    /** @type {?} */
    MedicationDispense.prototype.category;
    /** @type {?} */
    MedicationDispense.prototype.medicationCodeableConcept;
    /** @type {?} */
    MedicationDispense.prototype.medicationReference;
    /** @type {?} */
    MedicationDispense.prototype.subject;
    /** @type {?} */
    MedicationDispense.prototype.context;
    /** @type {?} */
    MedicationDispense.prototype.supportingInformation;
    /** @type {?} */
    MedicationDispense.prototype.performer;
    /** @type {?} */
    MedicationDispense.prototype.location;
    /** @type {?} */
    MedicationDispense.prototype.authorizingPrescription;
    /** @type {?} */
    MedicationDispense.prototype.type;
    /** @type {?} */
    MedicationDispense.prototype.quantity;
    /** @type {?} */
    MedicationDispense.prototype.daysSupply;
    /** @type {?} */
    MedicationDispense.prototype.whenPrepared;
    /** @type {?} */
    MedicationDispense.prototype.whenHandedOver;
    /** @type {?} */
    MedicationDispense.prototype.destination;
    /** @type {?} */
    MedicationDispense.prototype.receiver;
    /** @type {?} */
    MedicationDispense.prototype.note;
    /** @type {?} */
    MedicationDispense.prototype.dosageInstruction;
    /** @type {?} */
    MedicationDispense.prototype.substitution;
    /** @type {?} */
    MedicationDispense.prototype.detectedIssue;
    /** @type {?} */
    MedicationDispense.prototype.eventHistory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MedicationKnowledge = /** @class */ (function (_super) {
    __extends(MedicationKnowledge, _super);
    function MedicationKnowledge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'MedicationKnowledge';
        return _this;
    }
    return MedicationKnowledge;
}(DomainResource));
if (false) {
    /** @type {?} */
    MedicationKnowledge.prototype.resourceType;
    /** @type {?} */
    MedicationKnowledge.prototype.code;
    /** @type {?} */
    MedicationKnowledge.prototype.status;
    /** @type {?} */
    MedicationKnowledge.prototype.manufacturer;
    /** @type {?} */
    MedicationKnowledge.prototype.doseForm;
    /** @type {?} */
    MedicationKnowledge.prototype.amount;
    /** @type {?} */
    MedicationKnowledge.prototype.synonym;
    /** @type {?} */
    MedicationKnowledge.prototype.relatedMedicationKnowledge;
    /** @type {?} */
    MedicationKnowledge.prototype.associatedMedication;
    /** @type {?} */
    MedicationKnowledge.prototype.productType;
    /** @type {?} */
    MedicationKnowledge.prototype.monograph;
    /** @type {?} */
    MedicationKnowledge.prototype.ingredient;
    /** @type {?} */
    MedicationKnowledge.prototype.preparationInstruction;
    /** @type {?} */
    MedicationKnowledge.prototype.intendedRoute;
    /** @type {?} */
    MedicationKnowledge.prototype.cost;
    /** @type {?} */
    MedicationKnowledge.prototype.monitoringProgram;
    /** @type {?} */
    MedicationKnowledge.prototype.administrationGuidelines;
    /** @type {?} */
    MedicationKnowledge.prototype.medicineClassification;
    /** @type {?} */
    MedicationKnowledge.prototype.packaging;
    /** @type {?} */
    MedicationKnowledge.prototype.drugCharacteristic;
    /** @type {?} */
    MedicationKnowledge.prototype.contraindication;
    /** @type {?} */
    MedicationKnowledge.prototype.regulatory;
    /** @type {?} */
    MedicationKnowledge.prototype.kinetics;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MedicationRequest = /** @class */ (function (_super) {
    __extends(MedicationRequest, _super);
    function MedicationRequest(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        _this.resourceType = 'MedicationRequest';
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return MedicationRequest;
}(DomainResource));
if (false) {
    /** @type {?} */
    MedicationRequest.prototype.resourceType;
    /** @type {?} */
    MedicationRequest.prototype.identifier;
    /** @type {?} */
    MedicationRequest.prototype.status;
    /** @type {?} */
    MedicationRequest.prototype.statusReason;
    /** @type {?} */
    MedicationRequest.prototype.intent;
    /** @type {?} */
    MedicationRequest.prototype.category;
    /** @type {?} */
    MedicationRequest.prototype.priority;
    /** @type {?} */
    MedicationRequest.prototype.doNotPerform;
    /** @type {?} */
    MedicationRequest.prototype.reportedBoolean;
    /** @type {?} */
    MedicationRequest.prototype.reportedReference;
    /** @type {?} */
    MedicationRequest.prototype.medicationCodeableConcept;
    /** @type {?} */
    MedicationRequest.prototype.medicationReference;
    /** @type {?} */
    MedicationRequest.prototype.subject;
    /** @type {?} */
    MedicationRequest.prototype.encounter;
    /** @type {?} */
    MedicationRequest.prototype.supportingInformation;
    /** @type {?} */
    MedicationRequest.prototype.authoredOn;
    /** @type {?} */
    MedicationRequest.prototype.requester;
    /** @type {?} */
    MedicationRequest.prototype.performer;
    /** @type {?} */
    MedicationRequest.prototype.performerType;
    /** @type {?} */
    MedicationRequest.prototype.recorder;
    /** @type {?} */
    MedicationRequest.prototype.reasonCode;
    /** @type {?} */
    MedicationRequest.prototype.reasonReference;
    /** @type {?} */
    MedicationRequest.prototype.instantiatesCanonical;
    /** @type {?} */
    MedicationRequest.prototype.instantiatesUri;
    /** @type {?} */
    MedicationRequest.prototype.basedOn;
    /** @type {?} */
    MedicationRequest.prototype.groupIdentifier;
    /** @type {?} */
    MedicationRequest.prototype.courseOfTherapyType;
    /** @type {?} */
    MedicationRequest.prototype.insurance;
    /** @type {?} */
    MedicationRequest.prototype.note;
    /** @type {?} */
    MedicationRequest.prototype.dosageInstruction;
    /** @type {?} */
    MedicationRequest.prototype.dispenseRequest;
    /** @type {?} */
    MedicationRequest.prototype.substitution;
    /** @type {?} */
    MedicationRequest.prototype.priorPrescription;
    /** @type {?} */
    MedicationRequest.prototype.detectedIssue;
    /** @type {?} */
    MedicationRequest.prototype.eventHistory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MedicationStatement = /** @class */ (function (_super) {
    __extends(MedicationStatement, _super);
    function MedicationStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'MedicationStatement';
        return _this;
    }
    return MedicationStatement;
}(DomainResource));
if (false) {
    /** @type {?} */
    MedicationStatement.prototype.resourceType;
    /** @type {?} */
    MedicationStatement.prototype.identifier;
    /** @type {?} */
    MedicationStatement.prototype.basedOn;
    /** @type {?} */
    MedicationStatement.prototype.partOf;
    /** @type {?} */
    MedicationStatement.prototype.status;
    /** @type {?} */
    MedicationStatement.prototype.statusReason;
    /** @type {?} */
    MedicationStatement.prototype.category;
    /** @type {?} */
    MedicationStatement.prototype.medicationCodeableConcept;
    /** @type {?} */
    MedicationStatement.prototype.medicationReference;
    /** @type {?} */
    MedicationStatement.prototype.subject;
    /** @type {?} */
    MedicationStatement.prototype.context;
    /** @type {?} */
    MedicationStatement.prototype.effectiveDateTime;
    /** @type {?} */
    MedicationStatement.prototype.effectivePeriod;
    /** @type {?} */
    MedicationStatement.prototype.dateAsserted;
    /** @type {?} */
    MedicationStatement.prototype.informationSource;
    /** @type {?} */
    MedicationStatement.prototype.derivedFrom;
    /** @type {?} */
    MedicationStatement.prototype.reasonCode;
    /** @type {?} */
    MedicationStatement.prototype.reasonReference;
    /** @type {?} */
    MedicationStatement.prototype.note;
    /** @type {?} */
    MedicationStatement.prototype.dosage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Medication = /** @class */ (function (_super) {
    __extends(Medication, _super);
    function Medication(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        _this.resourceType = 'Medication';
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return Medication;
}(DomainResource));
if (false) {
    /** @type {?} */
    Medication.prototype.resourceType;
    /** @type {?} */
    Medication.prototype.identifier;
    /** @type {?} */
    Medication.prototype.code;
    /** @type {?} */
    Medication.prototype.status;
    /** @type {?} */
    Medication.prototype.manufacturer;
    /** @type {?} */
    Medication.prototype.form;
    /** @type {?} */
    Medication.prototype.amount;
    /** @type {?} */
    Medication.prototype.ingredient;
    /** @type {?} */
    Medication.prototype.batch;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Money = /** @class */ (function (_super) {
    __extends(Money, _super);
    function Money(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return Money;
}(Element));
if (false) {
    /** @type {?} */
    Money.prototype.value;
    /** @type {?} */
    Money.prototype.currency;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Endpoint = /** @class */ (function (_super) {
    __extends(Endpoint, _super);
    function Endpoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'Endpoint';
        return _this;
    }
    return Endpoint;
}(DomainResource));
if (false) {
    /** @type {?} */
    Endpoint.prototype.resourceType;
    /** @type {?} */
    Endpoint.prototype.identifier;
    /** @type {?} */
    Endpoint.prototype.status;
    /** @type {?} */
    Endpoint.prototype.connectionType;
    /** @type {?} */
    Endpoint.prototype.name;
    /** @type {?} */
    Endpoint.prototype.managingOrganization;
    /** @type {?} */
    Endpoint.prototype.contact;
    /** @type {?} */
    Endpoint.prototype.period;
    /** @type {?} */
    Endpoint.prototype.payloadType;
    /** @type {?} */
    Endpoint.prototype.payloadMimeType;
    /** @type {?} */
    Endpoint.prototype.address;
    /** @type {?} */
    Endpoint.prototype.header;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HealthcareService = /** @class */ (function (_super) {
    __extends(HealthcareService, _super);
    function HealthcareService(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        _this.resourceType = 'HealthcareService';
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    // (Endpoint)
    /**
     * @return {?}
     */
    HealthcareService.getNew = 
    // (Endpoint)
    /**
     * @return {?}
     */
    function () {
        return new HealthcareService({ name: [HealthcareService.getNew()] });
    };
    return HealthcareService;
}(DomainResource));
if (false) {
    /** @type {?} */
    HealthcareService.prototype.resourceType;
    /** @type {?} */
    HealthcareService.prototype.identifier;
    /** @type {?} */
    HealthcareService.prototype.active;
    /** @type {?} */
    HealthcareService.prototype.providedBy;
    /** @type {?} */
    HealthcareService.prototype.category;
    /** @type {?} */
    HealthcareService.prototype.type;
    /** @type {?} */
    HealthcareService.prototype.specialty;
    /** @type {?} */
    HealthcareService.prototype.location;
    /** @type {?} */
    HealthcareService.prototype.name;
    /** @type {?} */
    HealthcareService.prototype.comment;
    /** @type {?} */
    HealthcareService.prototype.extraDetails;
    /** @type {?} */
    HealthcareService.prototype.photo;
    /** @type {?} */
    HealthcareService.prototype.telecom;
    /** @type {?} */
    HealthcareService.prototype.coverageArea;
    /** @type {?} */
    HealthcareService.prototype.serviceProvisionCode;
    /** @type {?} */
    HealthcareService.prototype.eligibility;
    /** @type {?} */
    HealthcareService.prototype.program;
    /** @type {?} */
    HealthcareService.prototype.characteristic;
    /** @type {?} */
    HealthcareService.prototype.communication;
    /** @type {?} */
    HealthcareService.prototype.referralMethod;
    /** @type {?} */
    HealthcareService.prototype.appointmentRequired;
    /** @type {?} */
    HealthcareService.prototype.availableTime;
    /** @type {?} */
    HealthcareService.prototype.notAvailable;
    /** @type {?} */
    HealthcareService.prototype.availabilityExceptions;
    /** @type {?} */
    HealthcareService.prototype.endpoint;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Location = /** @class */ (function (_super) {
    __extends(Location, _super);
    function Location() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'Location';
        return _this;
    }
    return Location;
}(DomainResource));
if (false) {
    /** @type {?} */
    Location.prototype.resourceType;
    /** @type {?} */
    Location.prototype.identifier;
    /** @type {?} */
    Location.prototype.status;
    /** @type {?} */
    Location.prototype.operationalStatus;
    /** @type {?} */
    Location.prototype.name;
    /** @type {?} */
    Location.prototype.alias;
    /** @type {?} */
    Location.prototype.description;
    /** @type {?} */
    Location.prototype.mode;
    /** @type {?} */
    Location.prototype.type;
    /** @type {?} */
    Location.prototype.telecom;
    /** @type {?} */
    Location.prototype.address;
    /** @type {?} */
    Location.prototype.physicalType;
    /** @type {?} */
    Location.prototype.position;
    /** @type {?} */
    Location.prototype.managingOrganization;
    /** @type {?} */
    Location.prototype.partOf;
    /** @type {?} */
    Location.prototype.hoursOfOperation;
    /** @type {?} */
    Location.prototype.availabilityExceptions;
    /** @type {?} */
    Location.prototype.endpoint;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Organization = /** @class */ (function (_super) {
    __extends(Organization, _super);
    function Organization() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'Organization';
        return _this;
    }
    return Organization;
}(DomainResource));
if (false) {
    /** @type {?} */
    Organization.prototype.resourceType;
    /** @type {?} */
    Organization.prototype.identifier;
    /** @type {?} */
    Organization.prototype.active;
    /** @type {?} */
    Organization.prototype.type;
    /** @type {?} */
    Organization.prototype.name;
    /** @type {?} */
    Organization.prototype.alias;
    /** @type {?} */
    Organization.prototype.telecom;
    /** @type {?} */
    Organization.prototype.address;
    /** @type {?} */
    Organization.prototype.partOf;
    /** @type {?} */
    Organization.prototype.contact;
    /** @type {?} */
    Organization.prototype.endpoint;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OrganizationAffiliation = /** @class */ (function (_super) {
    __extends(OrganizationAffiliation, _super);
    function OrganizationAffiliation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'OrganizationAffiliation';
        return _this;
    }
    return OrganizationAffiliation;
}(DomainResource));
if (false) {
    /** @type {?} */
    OrganizationAffiliation.prototype.resourceType;
    /** @type {?} */
    OrganizationAffiliation.prototype.identifier;
    /** @type {?} */
    OrganizationAffiliation.prototype.active;
    /** @type {?} */
    OrganizationAffiliation.prototype.period;
    /** @type {?} */
    OrganizationAffiliation.prototype.organization;
    /** @type {?} */
    OrganizationAffiliation.prototype.participatingOrganization;
    /** @type {?} */
    OrganizationAffiliation.prototype.network;
    /** @type {?} */
    OrganizationAffiliation.prototype.code;
    /** @type {?} */
    OrganizationAffiliation.prototype.specialty;
    /** @type {?} */
    OrganizationAffiliation.prototype.location;
    /** @type {?} */
    OrganizationAffiliation.prototype.healthcareService;
    /** @type {?} */
    OrganizationAffiliation.prototype.telecom;
    /** @type {?} */
    OrganizationAffiliation.prototype.endpoint;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Account;
}(DomainResource));
if (false) {
    /** @type {?} */
    Account.prototype.identifier;
    /** @type {?} */
    Account.prototype.status;
    /** @type {?} */
    Account.prototype.type;
    /** @type {?} */
    Account.prototype.name;
    /** @type {?} */
    Account.prototype.subject;
    /** @type {?} */
    Account.prototype.servicePeriod;
    /** @type {?} */
    Account.prototype.coverage;
    /** @type {?} */
    Account.prototype.owner;
    /** @type {?} */
    Account.prototype.description;
    /** @type {?} */
    Account.prototype.guarantor;
    /** @type {?} */
    Account.prototype.partOf;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Coverage = /** @class */ (function (_super) {
    __extends(Coverage, _super);
    function Coverage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Coverage;
}(DomainResource));
if (false) {
    /** @type {?} */
    Coverage.prototype.identifier;
    /** @type {?} */
    Coverage.prototype.status;
    /** @type {?} */
    Coverage.prototype.type;
    /** @type {?} */
    Coverage.prototype.policyHolder;
    /** @type {?} */
    Coverage.prototype.subscriber;
    /** @type {?} */
    Coverage.prototype.subscriberId;
    /** @type {?} */
    Coverage.prototype.beneficiary;
    /** @type {?} */
    Coverage.prototype.dependent;
    /** @type {?} */
    Coverage.prototype.relationship;
    /** @type {?} */
    Coverage.prototype.period;
    /** @type {?} */
    Coverage.prototype.payor;
    /** @type {?} */
    Coverage.prototype.class;
    /** @type {?} */
    Coverage.prototype.order;
    /** @type {?} */
    Coverage.prototype.network;
    /** @type {?} */
    Coverage.prototype.costToBeneficiary;
    /** @type {?} */
    Coverage.prototype.subrogation;
    /** @type {?} */
    Coverage.prototype.contract;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Contract = /** @class */ (function (_super) {
    __extends(Contract, _super);
    function Contract() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'Contract';
        return _this;
    }
    return Contract;
}(DomainResource));
if (false) {
    /** @type {?} */
    Contract.prototype.resourceType;
    /** @type {?} */
    Contract.prototype.identifier;
    /** @type {?} */
    Contract.prototype.url;
    /** @type {?} */
    Contract.prototype.version;
    /** @type {?} */
    Contract.prototype.status;
    /** @type {?} */
    Contract.prototype.legalState;
    /** @type {?} */
    Contract.prototype.instantiatesCanonical;
    /** @type {?} */
    Contract.prototype.instantiatesUri;
    /** @type {?} */
    Contract.prototype.contentDerivative;
    /** @type {?} */
    Contract.prototype.issued;
    /** @type {?} */
    Contract.prototype.applies;
    /** @type {?} */
    Contract.prototype.expirationType;
    /** @type {?} */
    Contract.prototype.subject;
    /** @type {?} */
    Contract.prototype.authority;
    /** @type {?} */
    Contract.prototype.domain;
    /** @type {?} */
    Contract.prototype.site;
    /** @type {?} */
    Contract.prototype.name;
    /** @type {?} */
    Contract.prototype.title;
    /** @type {?} */
    Contract.prototype.subtitle;
    /** @type {?} */
    Contract.prototype.alias;
    /** @type {?} */
    Contract.prototype.author;
    /** @type {?} */
    Contract.prototype.scope;
    /** @type {?} */
    Contract.prototype.topicCodeableConcept;
    /** @type {?} */
    Contract.prototype.topicReference;
    /** @type {?} */
    Contract.prototype.type;
    /** @type {?} */
    Contract.prototype.subType;
    /** @type {?} */
    Contract.prototype.contentDefinition;
    /** @type {?} */
    Contract.prototype.term;
    /** @type {?} */
    Contract.prototype.supportingInfo;
    /** @type {?} */
    Contract.prototype.relevantHistory;
    /** @type {?} */
    Contract.prototype.signer;
    /** @type {?} */
    Contract.prototype.friendly;
    /** @type {?} */
    Contract.prototype.legal;
    /** @type {?} */
    Contract.prototype.rule;
    /** @type {?} */
    Contract.prototype.legallyBindingAttachment;
    /** @type {?} */
    Contract.prototype.legallyBindingReference;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChargeItemDefinition = /** @class */ (function (_super) {
    __extends(ChargeItemDefinition, _super);
    function ChargeItemDefinition(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return ChargeItemDefinition;
}(DomainResource));
if (false) {
    /** @type {?} */
    ChargeItemDefinition.prototype.url;
    /** @type {?} */
    ChargeItemDefinition.prototype.identifier;
    /** @type {?} */
    ChargeItemDefinition.prototype.version;
    /** @type {?} */
    ChargeItemDefinition.prototype.title;
    /** @type {?} */
    ChargeItemDefinition.prototype.derivedFromUri;
    /** @type {?} */
    ChargeItemDefinition.prototype.partOf;
    /** @type {?} */
    ChargeItemDefinition.prototype.replaces;
    /** @type {?} */
    ChargeItemDefinition.prototype.status;
    /** @type {?} */
    ChargeItemDefinition.prototype.experimental;
    /** @type {?} */
    ChargeItemDefinition.prototype.date;
    /** @type {?} */
    ChargeItemDefinition.prototype.publisher;
    /** @type {?} */
    ChargeItemDefinition.prototype.contact;
    /** @type {?} */
    ChargeItemDefinition.prototype.description;
    /** @type {?} */
    ChargeItemDefinition.prototype.useContext;
    /** @type {?} */
    ChargeItemDefinition.prototype.jurisdiction;
    /** @type {?} */
    ChargeItemDefinition.prototype.copyright;
    /** @type {?} */
    ChargeItemDefinition.prototype.approvalDate;
    /** @type {?} */
    ChargeItemDefinition.prototype.lastReviewDate;
    /** @type {?} */
    ChargeItemDefinition.prototype.effectivePeriod;
    /** @type {?} */
    ChargeItemDefinition.prototype.code;
    /** @type {?} */
    ChargeItemDefinition.prototype.instance;
    /** @type {?} */
    ChargeItemDefinition.prototype.applicability;
    /** @type {?} */
    ChargeItemDefinition.prototype.propertyGroup;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Signature = /** @class */ (function (_super) {
    __extends(Signature, _super);
    function Signature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Signature;
}(Element));
if (false) {
    /** @type {?} */
    Signature.prototype.type;
    /** @type {?} */
    Signature.prototype.when;
    /** @type {?} */
    Signature.prototype.who;
    /** @type {?} */
    Signature.prototype.onBehalfOf;
    /** @type {?} */
    Signature.prototype.targetFormat;
    /** @type {?} */
    Signature.prototype.sigFormat;
    /** @type {?} */
    Signature.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OperationOutcome = /** @class */ (function (_super) {
    __extends(OperationOutcome, _super);
    function OperationOutcome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OperationOutcome;
}(DomainResource));
if (false) {
    /** @type {?} */
    OperationOutcome.prototype.issue;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Annotation = /** @class */ (function (_super) {
    __extends(Annotation, _super);
    function Annotation(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return Annotation;
}(Element));
if (false) {
    /** @type {?} */
    Annotation.prototype.authorReference;
    /** @type {?} */
    Annotation.prototype.authorString;
    /** @type {?} */
    Annotation.prototype.time;
    /** @type {?} */
    Annotation.prototype.text;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Appointment = /** @class */ (function (_super) {
    __extends(Appointment, _super);
    function Appointment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'Appointment';
        return _this;
    }
    return Appointment;
}(DomainResource));
if (false) {
    /** @type {?} */
    Appointment.prototype.resourceType;
    /** @type {?} */
    Appointment.prototype.identifier;
    /** @type {?} */
    Appointment.prototype.status;
    /** @type {?} */
    Appointment.prototype.cancelationReason;
    /** @type {?} */
    Appointment.prototype.serviceCategory;
    /** @type {?} */
    Appointment.prototype.serviceType;
    /** @type {?} */
    Appointment.prototype.specialty;
    /** @type {?} */
    Appointment.prototype.appointmentType;
    /** @type {?} */
    Appointment.prototype.reasonCode;
    /** @type {?} */
    Appointment.prototype.reasonReference;
    /** @type {?} */
    Appointment.prototype.priority;
    /** @type {?} */
    Appointment.prototype.description;
    /** @type {?} */
    Appointment.prototype.supportingInformation;
    /** @type {?} */
    Appointment.prototype.start;
    /** @type {?} */
    Appointment.prototype.end;
    /** @type {?} */
    Appointment.prototype.minutesDuration;
    /** @type {?} */
    Appointment.prototype.slot;
    /** @type {?} */
    Appointment.prototype.created;
    /** @type {?} */
    Appointment.prototype.comment;
    /** @type {?} */
    Appointment.prototype.patientInstruction;
    /** @type {?} */
    Appointment.prototype.basedOn;
    /** @type {?} */
    Appointment.prototype.participant;
    /** @type {?} */
    Appointment.prototype.requestedPeriod;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AppointmentResponse = /** @class */ (function (_super) {
    __extends(AppointmentResponse, _super);
    function AppointmentResponse() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'AppointmentResponse';
        return _this;
    }
    return AppointmentResponse;
}(DomainResource));
if (false) {
    /** @type {?} */
    AppointmentResponse.prototype.resourceType;
    /** @type {?} */
    AppointmentResponse.prototype.identifier;
    /** @type {?} */
    AppointmentResponse.prototype.appointment;
    /** @type {?} */
    AppointmentResponse.prototype.start;
    /** @type {?} */
    AppointmentResponse.prototype.end;
    /** @type {?} */
    AppointmentResponse.prototype.participantType;
    /** @type {?} */
    AppointmentResponse.prototype.actor;
    /** @type {?} */
    AppointmentResponse.prototype.participantStatus;
    /** @type {?} */
    AppointmentResponse.prototype.comment;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Schedule = /** @class */ (function (_super) {
    __extends(Schedule, _super);
    function Schedule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'Schedule';
        return _this;
    }
    return Schedule;
}(DomainResource));
if (false) {
    /** @type {?} */
    Schedule.prototype.resourceType;
    /** @type {?} */
    Schedule.prototype.identifier;
    /** @type {?} */
    Schedule.prototype.active;
    /** @type {?} */
    Schedule.prototype.serviceCategory;
    /** @type {?} */
    Schedule.prototype.serviceType;
    /** @type {?} */
    Schedule.prototype.specialty;
    /** @type {?} */
    Schedule.prototype.actor;
    /** @type {?} */
    Schedule.prototype.planningHorizon;
    /** @type {?} */
    Schedule.prototype.comment;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Slot = /** @class */ (function (_super) {
    __extends(Slot, _super);
    function Slot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'Slot';
        return _this;
    }
    return Slot;
}(DomainResource));
if (false) {
    /** @type {?} */
    Slot.prototype.resourceType;
    /** @type {?} */
    Slot.prototype.identifier;
    /** @type {?} */
    Slot.prototype.serviceCategory;
    /** @type {?} */
    Slot.prototype.serviceType;
    /** @type {?} */
    Slot.prototype.specialty;
    /** @type {?} */
    Slot.prototype.appointmentType;
    /** @type {?} */
    Slot.prototype.schedule;
    /** @type {?} */
    Slot.prototype.status;
    /** @type {?} */
    Slot.prototype.start;
    /** @type {?} */
    Slot.prototype.end;
    /** @type {?} */
    Slot.prototype.overbooked;
    /** @type {?} */
    Slot.prototype.comment;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Task = /** @class */ (function (_super) {
    __extends(Task, _super);
    function Task() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'Task';
        return _this;
    }
    return Task;
}(DomainResource));
if (false) {
    /** @type {?} */
    Task.prototype.resourceType;
    /** @type {?} */
    Task.prototype.identifier;
    /** @type {?} */
    Task.prototype.instantiatesCanonical;
    /** @type {?} */
    Task.prototype.instantiatesUri;
    /** @type {?} */
    Task.prototype.basedOn;
    /** @type {?} */
    Task.prototype.groupIdentifier;
    /** @type {?} */
    Task.prototype.partOf;
    /** @type {?} */
    Task.prototype.status;
    /** @type {?} */
    Task.prototype.statusReason;
    /** @type {?} */
    Task.prototype.businessStatus;
    /** @type {?} */
    Task.prototype.intent;
    /** @type {?} */
    Task.prototype.priority;
    /** @type {?} */
    Task.prototype.code;
    /** @type {?} */
    Task.prototype.description;
    /** @type {?} */
    Task.prototype.focus;
    /** @type {?} */
    Task.prototype.for;
    /** @type {?} */
    Task.prototype.encounter;
    /** @type {?} */
    Task.prototype.executionPeriod;
    /** @type {?} */
    Task.prototype.authoredOn;
    /** @type {?} */
    Task.prototype.lastModified;
    /** @type {?} */
    Task.prototype.requester;
    /** @type {?} */
    Task.prototype.performerType;
    /** @type {?} */
    Task.prototype.owner;
    /** @type {?} */
    Task.prototype.location;
    /** @type {?} */
    Task.prototype.reasonCode;
    /** @type {?} */
    Task.prototype.reasonReference;
    /** @type {?} */
    Task.prototype.insurance;
    /** @type {?} */
    Task.prototype.note;
    /** @type {?} */
    Task.prototype.relevantHistory;
    /** @type {?} */
    Task.prototype.restriction;
    /** @type {?} */
    Task.prototype.input;
    /** @type {?} */
    Task.prototype.output;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VerificationResult = /** @class */ (function (_super) {
    __extends(VerificationResult, _super);
    function VerificationResult() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'VerificationResult';
        return _this;
    }
    return VerificationResult;
}(DomainResource));
if (false) {
    /** @type {?} */
    VerificationResult.prototype.resourceType;
    /** @type {?} */
    VerificationResult.prototype.target;
    /** @type {?} */
    VerificationResult.prototype.targetLocation;
    /** @type {?} */
    VerificationResult.prototype.need;
    /** @type {?} */
    VerificationResult.prototype.status;
    /** @type {?} */
    VerificationResult.prototype.statusDate;
    /** @type {?} */
    VerificationResult.prototype.validationType;
    /** @type {?} */
    VerificationResult.prototype.validationProcess;
    /** @type {?} */
    VerificationResult.prototype.frequency;
    /** @type {?} */
    VerificationResult.prototype.lastPerformed;
    /** @type {?} */
    VerificationResult.prototype.nextScheduled;
    /** @type {?} */
    VerificationResult.prototype.failureAction;
    /** @type {?} */
    VerificationResult.prototype.primarySource;
    /** @type {?} */
    VerificationResult.prototype.attestation;
    /** @type {?} */
    VerificationResult.prototype.validator;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Timing = /** @class */ (function (_super) {
    __extends(Timing, _super);
    function Timing(source) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        if (source)
            try {
                for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    return Timing;
}(BackboneElement));
if (false) {
    /** @type {?} */
    Timing.prototype.event;
    /** @type {?} */
    Timing.prototype.repeat;
    /** @type {?} */
    Timing.prototype.code;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Substance = /** @class */ (function (_super) {
    __extends(Substance, _super);
    function Substance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Substance;
}(DomainResource));
if (false) {
    /** @type {?} */
    Substance.prototype.identifier;
    /** @type {?} */
    Substance.prototype.status;
    /** @type {?} */
    Substance.prototype.category;
    /** @type {?} */
    Substance.prototype.code;
    /** @type {?} */
    Substance.prototype.description;
    /** @type {?} */
    Substance.prototype.instance;
    /** @type {?} */
    Substance.prototype.ingredient;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceType = 'Invoice';
        return _this;
    }
    return Invoice;
}(DomainResource));
if (false) {
    /** @type {?} */
    Invoice.prototype.resourceType;
    /** @type {?} */
    Invoice.prototype.identifier;
    /** @type {?} */
    Invoice.prototype.status;
    /** @type {?} */
    Invoice.prototype.cancelledReason;
    /** @type {?} */
    Invoice.prototype.type;
    /** @type {?} */
    Invoice.prototype.subject;
    /** @type {?} */
    Invoice.prototype.recipient;
    /** @type {?} */
    Invoice.prototype.date;
    /** @type {?} */
    Invoice.prototype.participant;
    /** @type {?} */
    Invoice.prototype.issuer;
    /** @type {?} */
    Invoice.prototype.account;
    /** @type {?} */
    Invoice.prototype.lineItem;
    /** @type {?} */
    Invoice.prototype.totalPriceComponent;
    /** @type {?} */
    Invoice.prototype.totalNet;
    /** @type {?} */
    Invoice.prototype.totalGross;
    /** @type {?} */
    Invoice.prototype.paymentTerms;
    /** @type {?} */
    Invoice.prototype.note;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FhirService = /** @class */ (function () {
    function FhirService(config, httpClient) {
        this.config = config;
        this.httpClient = httpClient;
    }
    Object.defineProperty(FhirService.prototype, "base", {
        set: /**
         * @param {?} base
         * @return {?}
         */
        function (base) {
            this.config.base = base;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.getConformanceStatement = /**
     * @param {?=} headers
     * @return {?}
     */
    function (headers) {
        var _this = this;
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        if (this.conformance)
            return of(this.conformance);
        return this.httpClient.get(this.config.base + "/metadata", { headers: mergedHeaders }).pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.conformance = result; })));
    };
    /**
     * @template T
     * @param {?} resourceType
     * @param {?} id
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.read = /**
     * @template T
     * @param {?} resourceType
     * @param {?} id
     * @param {?=} headers
     * @return {?}
     */
    function (resourceType, id, headers) {
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.get(this.config.base + "/" + resourceType + "/" + id, { headers: mergedHeaders });
    };
    /**
     * @template T
     * @param {?} resourceType
     * @param {?} id
     * @param {?} v
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.vread = /**
     * @template T
     * @param {?} resourceType
     * @param {?} id
     * @param {?} v
     * @param {?=} headers
     * @return {?}
     */
    function (resourceType, id, v, headers) {
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.get(this.config.base + "/" + resourceType + "/" + id + "/_history/" + v, { headers: mergedHeaders });
    };
    /**
     * @template T
     * @param {?} resource
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.update = /**
     * @template T
     * @param {?} resource
     * @param {?=} headers
     * @return {?}
     */
    function (resource, headers) {
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.put(this.config.base + "/" + resource.resourceType + "/" + resource.id, resource, { headers: mergedHeaders });
    };
    /**
     * @template T
     * @param {?} resource
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.save = /**
     * @template T
     * @param {?} resource
     * @param {?=} headers
     * @return {?}
     */
    function (resource, headers) {
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        /** @type {?} */
        var resourceType = resource.resourceType;
        if (resource.hasOwnProperty('id')) {
            return this.update(resource, headers);
        }
        else {
            return this.create(resource, headers);
        }
    };
    /**
     * @template T
     * @param {?} resource
     * @param {?} body
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.patch = /**
     * @template T
     * @param {?} resource
     * @param {?} body
     * @param {?=} headers
     * @return {?}
     */
    function (resource, body, headers) {
        /** @type {?} */
        var headersToAttach = {};
        merge(headersToAttach, this.headers);
        headersToAttach['Content-Type'] = 'application/json-patch+json';
        return this.httpClient.patch(this.config.base + "/" + resource.resourceType + "/" + resource.id, body, { headers: headersToAttach });
    };
    /**
     * @template T
     * @param {?} resourceType
     * @param {?} id
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.delete = /**
     * @template T
     * @param {?} resourceType
     * @param {?} id
     * @param {?=} headers
     * @return {?}
     */
    function (resourceType, id, headers) {
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.delete(this.config.base + "/" + resourceType + "/" + id, { headers: mergedHeaders });
    };
    /**
     * @template T
     * @param {?} resource
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.create = /**
     * @template T
     * @param {?} resource
     * @param {?=} headers
     * @return {?}
     */
    function (resource, headers) {
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.post(this.config.base + "/" + resource.resourceType, resource, { headers: mergedHeaders });
    };
    // ToDo:
    // ToDo:
    /**
     * @param {?} qb
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.searchByQuery = 
    // ToDo:
    /**
     * @param {?} qb
     * @param {?=} headers
     * @return {?}
     */
    function (qb, headers) {
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.get(this.config.base + "/" + qb.resourceName, {
            params: qb.paramsAsHttpParams(),
            headers: mergedHeaders
        });
    };
    /**
     * @template T
     * @param {?} ss
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.searchBySet = /**
     * @template T
     * @param {?} ss
     * @param {?=} headers
     * @return {?}
     */
    function (ss, headers) {
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.get(this.config.base + "/" + ss.resourceName + "?_sort=-_id", {
            params: ss.paramsAsObject(),
            headers: mergedHeaders,
        });
    };
    /**
     * @template T
     * @param {?} url
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.searchByUrl = /**
     * @template T
     * @param {?} url
     * @param {?=} headers
     * @return {?}
     */
    function (url, headers) {
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.get(url, { headers: mergedHeaders });
    };
    /**
     * @return {?}
     */
    FhirService.prototype.search_all = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FhirService.prototype.capabilities = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} bundle
     * @param {?=} headers
     * @return {?}
     */
    FhirService.prototype.transaction = /**
     * @param {?} bundle
     * @param {?=} headers
     * @return {?}
     */
    function (bundle, headers) {
        /** @type {?} */
        var mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.post(this.config.base, bundle, {
            headers: mergedHeaders
        });
    };
    /**
     * @return {?}
     */
    FhirService.prototype.history = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FhirService.prototype.history_type = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FhirService.prototype.history_all = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @template T
     * @param {?} qb
     * @return {?}
     */
    FhirService.prototype.executeQuery = /**
     * @template T
     * @param {?} qb
     * @return {?}
     */
    function (qb) {
        return this.httpClient.get(qb.query, { headers: this.headers });
    };
    /**
     * @param {?} source
     * @param {?} keys
     * @return {?}
     */
    FhirService.prototype.createTransactionBundle = /**
     * @param {?} source
     * @param {?} keys
     * @return {?}
     */
    function (source, keys) {
        var _this = this;
        /** @type {?} */
        var bundle = new Bundle();
        bundle.type = 'transaction';
        bundle.resourceType = 'Bundle';
        bundle.entry = [];
        keys.filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return source.hasOwnProperty(key); }))
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            var e_1, _a;
            /** @type {?} */
            var v = source[key];
            if (_this.isIterable(v)) {
                try {
                    for (var v_1 = __values(v), v_1_1 = v_1.next(); !v_1_1.done; v_1_1 = v_1.next()) {
                        var e = v_1_1.value;
                        bundle.entry.push(_this.createBundleEntry(e));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (v_1_1 && !v_1_1.done && (_a = v_1.return)) _a.call(v_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                bundle.entry.push(_this.createBundleEntry(v));
            }
        }));
        return bundle;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    FhirService.prototype.isIterable = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== null && Symbol.iterator in Object(value);
    };
    /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    FhirService.prototype.createBundleEntry = /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        return {
            fullUrl: "urn:uuid:" + entry.uuid,
            resource: entry,
            request: {
                url: !entry.id ? entry.resourceType : entry.resourceType + "/" + entry.id,
                method: entry.id ? 'PUT' : 'POST',
            },
        };
    };
    FhirService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    FhirService.ctorParameters = function () { return [
        { type: FhirConfig, decorators: [{ type: Inject, args: [FHIR_CONFIG,] }] },
        { type: HttpClient }
    ]; };
    /** @nocollapse */ FhirService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FhirService_Factory() { return new FhirService(ɵɵinject(FHIR_CONFIG), ɵɵinject(HttpClient)); }, token: FhirService, providedIn: "root" });
    return FhirService;
}());
if (false) {
    /** @type {?} */
    FhirService.prototype.headers;
    /**
     * @type {?}
     * @private
     */
    FhirService.prototype.conformance;
    /** @type {?} */
    FhirService.prototype.config;
    /** @type {?} */
    FhirService.prototype.httpClient;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FhirAdvancedService = /** @class */ (function (_super) {
    __extends(FhirAdvancedService, _super);
    function FhirAdvancedService(config, httpClient) {
        var _this = _super.call(this, config, httpClient) || this;
        _this.config = config;
        _this.httpClient = httpClient;
        _this.fhircqrs = config.fhircqrs;
        return _this;
    }
    /**
     * @param {?} headers
     * @return {?}
     */
    FhirAdvancedService.prototype.setAuthentication = /**
     * @param {?} headers
     * @return {?}
     */
    function (headers) {
        this.headers = headers;
    };
    /**
     * @param {?} part
     * @param {?} id
     * @param {?=} version
     * @return {?}
     */
    FhirAdvancedService.prototype.searchInConcept = /**
     * @param {?} part
     * @param {?} id
     * @param {?=} version
     * @return {?}
     */
    function (part, id, version) {
        return this.httpClient
            .get(this.fhircqrs + "/CodeSystem/searchInConcept", { headers: this.headers, params: { part: part, id: id, version: version } });
    };
    /**
     * @param {?} patientId
     * @return {?}
     */
    FhirAdvancedService.prototype.findActiveEncounterByPatient = /**
     * @param {?} patientId
     * @return {?}
     */
    function (patientId) {
        return this.httpClient
            .get(this.fhircqrs + "/Encounter/findActiveEncounterByPatient", { headers: this.headers, params: { patientId: patientId } });
    };
    FhirAdvancedService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    FhirAdvancedService.ctorParameters = function () { return [
        { type: FhirConfig, decorators: [{ type: Inject, args: [FHIR_CONFIG,] }] },
        { type: HttpClient }
    ]; };
    /** @nocollapse */ FhirAdvancedService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FhirAdvancedService_Factory() { return new FhirAdvancedService(ɵɵinject(FHIR_CONFIG), ɵɵinject(HttpClient)); }, token: FhirAdvancedService, providedIn: "root" });
    return FhirAdvancedService;
}(FhirService));
if (false) {
    /** @type {?} */
    FhirAdvancedService.prototype.headers;
    /** @type {?} */
    FhirAdvancedService.prototype.fhircqrs;
    /** @type {?} */
    FhirAdvancedService.prototype.config;
    /** @type {?} */
    FhirAdvancedService.prototype.httpClient;
}
var ConceptDto = /** @class */ (function () {
    function ConceptDto() {
    }
    return ConceptDto;
}());
if (false) {
    /** @type {?} */
    ConceptDto.prototype.system;
    /** @type {?} */
    ConceptDto.prototype.code;
    /** @type {?} */
    ConceptDto.prototype.display;
    /** @type {?} */
    ConceptDto.prototype.definition;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FhirAddressLineExtract = /** @class */ (function () {
    function FhirAddressLineExtract() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    FhirAddressLineExtract.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value && value[0] && value[0].line && value[0].line[0])
            return value[0].line[0];
        return '';
    };
    FhirAddressLineExtract.decorators = [
        { type: Pipe, args: [{
                    name: 'fhirAddressLineExtract',
                },] }
    ];
    return FhirAddressLineExtract;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FhirContactExtractPipe = /** @class */ (function () {
    function FhirContactExtractPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    FhirContactExtractPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value && value.contact && value.contact[0] && value.contact[0].name) {
            return value.contact[0].name.prefix + " " + value.contact[0].name.given[0] + " " + value.contact[0].name.family;
        }
        return '';
    };
    FhirContactExtractPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'fhirContactExtract'
                },] }
    ];
    return FhirContactExtractPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FhirDosageExctractPipe = /** @class */ (function () {
    function FhirDosageExctractPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    FhirDosageExctractPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var result = '';
        /** @type {?} */
        var v = (/** @type {?} */ (value));
        if (v && args && args.length > 0) {
            if (v[0] && v[0].doseAndRate && args[0] === 'doseQuantityValue') {
                result = v[0].doseAndRate[0].doseQuantity.value;
            }
            if (v[0] && v[0].doseAndRate && args[0] === 'doseQuantityUnit') {
                result = v[0].doseAndRate[0].doseQuantity.unit;
            }
            if (v[0] && v[0].doseAndRate && args[0] === 'rateQuantityValue') {
                result = v[0].doseAndRate[0].rateQuantity.value;
            }
            if (v[0] && v[0].doseAndRate && args[0] === 'rateQuantityUnit') {
                result = v[0].doseAndRate[0].rateQuantity.unit;
            }
            if (v[0] && v[0].maxDosePerAdministration && args[0] === 'maxDoseValue') {
                result = v[0].maxDosePerAdministration.value;
            }
            if (v[0] && v[0].maxDosePerAdministration && args[0] === 'maxDoseUnit') {
                result = v[0].maxDosePerAdministration.unit;
            }
            if (v[0] && args[0] === 'text') {
                result = v[0].text;
            }
        }
        return result;
    };
    FhirDosageExctractPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'fhirDosageExctract',
                },] }
    ];
    return FhirDosageExctractPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FhirEmailExtractPipe = /** @class */ (function () {
    function FhirEmailExtractPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    FhirEmailExtractPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var e_1, _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var email = '';
        if (value && value.length > 0) {
            try {
                for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                    var contactPoint = value_1_1.value;
                    if (contactPoint.system === 'email')
                        email = email.concat(contactPoint.value, ', ');
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return email.trim().slice(0, email.length - 2);
    };
    FhirEmailExtractPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'fhirEmailExtract'
                },] }
    ];
    return FhirEmailExtractPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FhirNameExtractPipe = /** @class */ (function () {
    function FhirNameExtractPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    FhirNameExtractPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var p = value;
        if (p && p.hasOwnProperty('name') && p.name.length > 0) {
            return p.name[0].given[0] + " " + p.name[0].family;
        }
        return '';
    };
    FhirNameExtractPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'fhirNameExtract',
                },] }
    ];
    return FhirNameExtractPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FhirTelecomPhoneExtract = /** @class */ (function () {
    function FhirTelecomPhoneExtract() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    FhirTelecomPhoneExtract.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var e_1, _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var phone = '';
        if (value && value.length > 0) {
            try {
                for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                    var contactPoint = value_1_1.value;
                    if (contactPoint.system === 'phone')
                        phone = phone.concat(contactPoint.value, ', ');
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return phone.trim().slice(0, phone.length - 2);
    };
    FhirTelecomPhoneExtract.decorators = [
        { type: Pipe, args: [{
                    name: 'fhirTelecomPhoneExtract'
                },] }
    ];
    return FhirTelecomPhoneExtract;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FhirTelecomWebExtractPipe = /** @class */ (function () {
    function FhirTelecomWebExtractPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    FhirTelecomWebExtractPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var e_1, _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var url = '';
        if (value && value.length > 0) {
            try {
                for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                    var contactPoint = value_1_1.value;
                    if (contactPoint.system === 'url')
                        url = url.concat(contactPoint.value, ', ');
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return url.trim().slice(0, url.length - 2);
    };
    FhirTelecomWebExtractPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'fhirTelecomWebExtract'
                },] }
    ];
    return FhirTelecomWebExtractPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LmsNgFhirModule = /** @class */ (function () {
    function LmsNgFhirModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    LmsNgFhirModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return (/** @type {?} */ ({
            ngModule: LmsNgFhirModule,
            providers: [
                FhirService,
                FhirAdvancedService,
                {
                    provide: FHIR_CONFIG,
                    useValue: config,
                },
            ],
        }));
    };
    LmsNgFhirModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        FhirAddressLineExtract,
                        FhirContactExtractPipe,
                        FhirDosageExctractPipe,
                        FhirEmailExtractPipe,
                        FhirNameExtractPipe,
                        FhirTelecomPhoneExtract,
                        FhirTelecomWebExtractPipe,
                    ],
                    imports: [
                        CommonModule,
                    ],
                    exports: [
                        FhirAddressLineExtract,
                        FhirContactExtractPipe,
                        FhirDosageExctractPipe,
                        FhirEmailExtractPipe,
                        FhirNameExtractPipe,
                        FhirTelecomPhoneExtract,
                        FhirTelecomWebExtractPipe,
                    ],
                },] }
    ];
    return LmsNgFhirModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            for (var _b = __values(this.params), _c = _b.next(); !_c.done; _c = _b.next()) {
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
            for (var _b = __values(this.params), _c = _b.next(); !_c.done; _c = _b.next()) {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    LeftPart.prototype._qb;
    /** @type {?} */
    LeftPart.prototype.left;
}

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EqualSearchModifier = /** @class */ (function () {
    function EqualSearchModifier() {
    }
    /**
     * @param {?} si
     * @return {?}
     */
    EqualSearchModifier.prototype.compileKey = /**
     * @param {?} si
     * @return {?}
     */
    function (si) {
        return si.key;
    };
    /**
     * @param {?} si
     * @return {?}
     */
    EqualSearchModifier.prototype.compileValue = /**
     * @param {?} si
     * @return {?}
     */
    function (si) {
        return si.value;
    };
    return EqualSearchModifier;
}());
if (false) {
    /** @type {?} */
    EqualSearchModifier.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StringContainsSearchModifier = /** @class */ (function () {
    function StringContainsSearchModifier() {
    }
    /**
     * @param {?} si
     * @return {?}
     */
    StringContainsSearchModifier.prototype.compileKey = /**
     * @param {?} si
     * @return {?}
     */
    function (si) {
        return si.key + ':contains';
    };
    /**
     * @param {?} si
     * @return {?}
     */
    StringContainsSearchModifier.prototype.compileValue = /**
     * @param {?} si
     * @return {?}
     */
    function (si) {
        return si.value;
    };
    return StringContainsSearchModifier;
}());
if (false) {
    /** @type {?} */
    StringContainsSearchModifier.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StringExactSearchModifier = /** @class */ (function () {
    function StringExactSearchModifier() {
    }
    /**
     * @param {?} si
     * @return {?}
     */
    StringExactSearchModifier.prototype.compileKey = /**
     * @param {?} si
     * @return {?}
     */
    function (si) {
        return si.key + ':exact';
    };
    /**
     * @param {?} si
     * @return {?}
     */
    StringExactSearchModifier.prototype.compileValue = /**
     * @param {?} si
     * @return {?}
     */
    function (si) {
        return si.value;
    };
    return StringExactSearchModifier;
}());
if (false) {
    /** @type {?} */
    StringExactSearchModifier.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchModifiers = /** @class */ (function () {
    function SearchModifiers() {
    }
    SearchModifiers.MODIFIERS = {
        'EQUAL': new EqualSearchModifier(),
        'STRING:CONTAINS': new StringContainsSearchModifier(),
        'STRING:EXACT': new StringExactSearchModifier(),
    };
    SearchModifiers.STRING = [
        {
            key: '',
            display: 'modifier_starts',
        },
        {
            key: ':contains',
            display: 'modifier_contains',
        },
        {
            key: ':exact',
            display: 'modifier_exact',
        },
    ];
    SearchModifiers.TOKEN = [
        {
            key: '',
            display: 'modifier_exact',
        },
        {
            key: ':template',
            display: 'modifier_text',
        },
        {
            key: ':not',
            display: 'modifier_not',
        },
        {
            key: ':above',
            display: 'modifier_above',
        },
        {
            key: ':below',
            display: 'modifier_below',
        },
        {
            key: ':in',
            display: 'modifier_in',
        },
        {
            key: ':not-in',
            display: 'modifier_notIn',
        },
    ];
    SearchModifiers.DATE = [
        {
            key: 'eq',
            display: 'modifier_exact',
        },
        {
            key: 'ne',
            display: 'modifier_not',
        },
        {
            key: 'gt',
            display: 'modifier_greater_than',
        },
        {
            key: 'lt',
            display: 'modifier_less_than',
        },
        {
            key: 'ge',
            display: 'modifier_greater_or_equal',
        },
        {
            key: 'sa',
            display: 'modifier_starts_after',
        },
        {
            key: 'eb',
            display: 'modifier_ends_before',
        },
        {
            key: 'ap',
            display: 'modifier_approximately',
        },
    ];
    SearchModifiers.URI = [
        {
            key: '',
            display: 'modifier_exact',
        },
        {
            key: ':above',
            display: 'modifier_starts',
        },
        {
            key: ':below',
            display: 'modifier_ends',
        },
    ];
    SearchModifiers.REFERENCE = [
        {
            key: '',
            display: 'modifier_ref',
        },
    ];
    return SearchModifiers;
}());
if (false) {
    /** @type {?} */
    SearchModifiers.MODIFIERS;
    /** @type {?} */
    SearchModifiers.STRING;
    /** @type {?} */
    SearchModifiers.TOKEN;
    /** @type {?} */
    SearchModifiers.DATE;
    /** @type {?} */
    SearchModifiers.URI;
    /** @type {?} */
    SearchModifiers.REFERENCE;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SearchModifier() { }
if (false) {
    /** @type {?} */
    SearchModifier.prototype.type;
    /**
     * @param {?} si
     * @return {?}
     */
    SearchModifier.prototype.compileKey = function (si) { };
    /**
     * @param {?} si
     * @return {?}
     */
    SearchModifier.prototype.compileValue = function (si) { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchSetBuilder.prototype.ss;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchSet = /** @class */ (function () {
    function SearchSet() {
        this.searchItems = [];
        this.sort = '-_id';
    }
    /**
     * @return {?}
     */
    SearchSet.prototype.paramsAsObject = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var so = new HttpParams();
        try {
            for (var _b = __values(this.searchItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                var si = _c.value;
                so = so.append(si.compileKey(), si.compileValue());
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (this.getpagesoffset)
            so.append('_getpagesoffset', String(this.getpagesoffset));
        if (this.count)
            so.append('_count', String(this.count));
        so.append('_sort', '-_id');
        return so;
    };
    /**
     * @return {?}
     */
    SearchSet.prototype.build = /**
     * @return {?}
     */
    function () {
        return new SearchSetBuilder(this);
    };
    return SearchSet;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ResourceTypes = /** @class */ (function () {
    function ResourceTypes() {
    }
    ResourceTypes.Address = 'Address';
    ResourceTypes.Annotation = 'Annotation';
    ResourceTypes.Appointment = 'Appointment';
    ResourceTypes.AppointmentResponse = 'AppointmentResponse';
    ResourceTypes.Attachment = 'Attachment';
    ResourceTypes.BackboneElement = 'BackboneElement';
    ResourceTypes.BodyStructure = 'BodyStructure';
    ResourceTypes.Bundle = 'Bundle';
    ResourceTypes.BundleEntry = 'BundleEntry';
    ResourceTypes.CapabilityStatement = 'CapabilityStatement';
    ResourceTypes.CodeableConcept = 'CodeableConcept';
    ResourceTypes.CodeSystem = 'CodeSystem';
    ResourceTypes.CodeSystemConcept = 'CodeSystemConcept';
    ResourceTypes.Coding = 'Coding';
    ResourceTypes.ConceptMap = 'ConceptMap';
    ResourceTypes.ConceptMapDependsOn = 'ConceptMapDependsOn';
    ResourceTypes.ContactDetail = 'ContactDetail';
    ResourceTypes.ContactPoint = 'ContactPoint';
    ResourceTypes.Contract = 'Contract';
    ResourceTypes.DataRequirement = 'DataRequirement';
    ResourceTypes.DiagnosticReport = 'DiagnosticReport';
    ResourceTypes.DiagnosticsReferenceRange = 'DiagnosticsReferenceRange';
    ResourceTypes.DomainResource = 'DomainResource';
    ResourceTypes.Dosage = 'Dosage';
    ResourceTypes.Duration = 'Duration';
    ResourceTypes.Element = 'Element';
    ResourceTypes.Encounter = 'Encounter';
    ResourceTypes.Endpoint = 'Endpoint';
    ResourceTypes.EpisodeOfCare = 'EpisodeOfCare';
    ResourceTypes.Extension = 'Extension';
    ResourceTypes.Flag = 'Flag';
    ResourceTypes.Group = 'Group';
    ResourceTypes.HealthcareService = 'HealthcareService';
    ResourceTypes.HumanName = 'HumanName';
    ResourceTypes.Identifier = 'Identifier';
    ResourceTypes.ImagingStudy = 'ImagingStudy';
    ResourceTypes.Library = 'Library';
    ResourceTypes.List = 'List';
    ResourceTypes.Location = 'Location';
    ResourceTypes.Media = 'Media';
    ResourceTypes.Medication = 'Medication';
    ResourceTypes.MedicationAdministration = 'MedicationAdministration';
    ResourceTypes.MedicationDispense = 'MedicationDispense';
    ResourceTypes.MedicationKnowledge = 'MedicationKnowledge';
    ResourceTypes.MedicationRequest = 'MedicationRequest';
    ResourceTypes.MedicationStatement = 'MedicationStatement';
    ResourceTypes.Meta = 'Meta';
    ResourceTypes.MolecularSequence = 'MolecularSequence';
    ResourceTypes.Money = 'Money';
    ResourceTypes.NamingSystem = 'NamingSystem';
    ResourceTypes.Narrative = 'Narrative';
    ResourceTypes.Observation = 'Observation';
    ResourceTypes.OperationOutcome = 'OperationOutcome';
    ResourceTypes.Organization = 'Organization';
    ResourceTypes.OrganizationAffiliation = 'OrganizationAffiliation';
    ResourceTypes.ParameterDefinition = 'ParameterDefinition';
    ResourceTypes.Patient = 'Patient';
    ResourceTypes.Period = 'Period';
    ResourceTypes.Person = 'Person';
    ResourceTypes.Practitioner = 'Practitioner';
    ResourceTypes.PractitionerRole = 'PractitionerRole';
    ResourceTypes.Quantity = 'Quantity';
    ResourceTypes.QuestionnaireResponse = 'QuestionnaireResponse';
    ResourceTypes.QuestionnaireResponseItem = 'QuestionnaireResponseItem';
    ResourceTypes.Range = 'Range';
    ResourceTypes.Ratio = 'Ratio';
    ResourceTypes.Reference = 'Reference';
    ResourceTypes.RelatedArtifact = 'RelatedArtifact';
    ResourceTypes.RelatedPerson = 'RelatedPerson';
    ResourceTypes.Resource = 'Resource';
    ResourceTypes.ResourceCapability = 'ResourceCapability';
    ResourceTypes.SampledData = 'SampledData';
    ResourceTypes.Schedule = 'Schedule';
    ResourceTypes.Signature = 'Signature';
    ResourceTypes.SimpleQuantity = 'SimpleQuantity';
    ResourceTypes.Slot = 'Slot';
    ResourceTypes.Specimen = 'Specimen';
    ResourceTypes.Substance = 'Substance';
    ResourceTypes.Task = 'Task';
    ResourceTypes.TerminologyCapabilities = 'TerminologyCapabilities';
    ResourceTypes.Timing = 'Timing';
    ResourceTypes.UsageContext = 'UsageContext';
    ResourceTypes.ValueSet = 'ValueSet';
    ResourceTypes.ValueSetContains = 'ValueSetContains';
    ResourceTypes.VerificationResult = 'VerificationResult';
    return ResourceTypes;
}());
if (false) {
    /** @type {?} */
    ResourceTypes.Address;
    /** @type {?} */
    ResourceTypes.Annotation;
    /** @type {?} */
    ResourceTypes.Appointment;
    /** @type {?} */
    ResourceTypes.AppointmentResponse;
    /** @type {?} */
    ResourceTypes.Attachment;
    /** @type {?} */
    ResourceTypes.BackboneElement;
    /** @type {?} */
    ResourceTypes.BodyStructure;
    /** @type {?} */
    ResourceTypes.Bundle;
    /** @type {?} */
    ResourceTypes.BundleEntry;
    /** @type {?} */
    ResourceTypes.CapabilityStatement;
    /** @type {?} */
    ResourceTypes.CodeableConcept;
    /** @type {?} */
    ResourceTypes.CodeSystem;
    /** @type {?} */
    ResourceTypes.CodeSystemConcept;
    /** @type {?} */
    ResourceTypes.Coding;
    /** @type {?} */
    ResourceTypes.ConceptMap;
    /** @type {?} */
    ResourceTypes.ConceptMapDependsOn;
    /** @type {?} */
    ResourceTypes.ContactDetail;
    /** @type {?} */
    ResourceTypes.ContactPoint;
    /** @type {?} */
    ResourceTypes.Contract;
    /** @type {?} */
    ResourceTypes.DataRequirement;
    /** @type {?} */
    ResourceTypes.DiagnosticReport;
    /** @type {?} */
    ResourceTypes.DiagnosticsReferenceRange;
    /** @type {?} */
    ResourceTypes.DomainResource;
    /** @type {?} */
    ResourceTypes.Dosage;
    /** @type {?} */
    ResourceTypes.Duration;
    /** @type {?} */
    ResourceTypes.Element;
    /** @type {?} */
    ResourceTypes.Encounter;
    /** @type {?} */
    ResourceTypes.Endpoint;
    /** @type {?} */
    ResourceTypes.EpisodeOfCare;
    /** @type {?} */
    ResourceTypes.Extension;
    /** @type {?} */
    ResourceTypes.Flag;
    /** @type {?} */
    ResourceTypes.Group;
    /** @type {?} */
    ResourceTypes.HealthcareService;
    /** @type {?} */
    ResourceTypes.HumanName;
    /** @type {?} */
    ResourceTypes.Identifier;
    /** @type {?} */
    ResourceTypes.ImagingStudy;
    /** @type {?} */
    ResourceTypes.Library;
    /** @type {?} */
    ResourceTypes.List;
    /** @type {?} */
    ResourceTypes.Location;
    /** @type {?} */
    ResourceTypes.Media;
    /** @type {?} */
    ResourceTypes.Medication;
    /** @type {?} */
    ResourceTypes.MedicationAdministration;
    /** @type {?} */
    ResourceTypes.MedicationDispense;
    /** @type {?} */
    ResourceTypes.MedicationKnowledge;
    /** @type {?} */
    ResourceTypes.MedicationRequest;
    /** @type {?} */
    ResourceTypes.MedicationStatement;
    /** @type {?} */
    ResourceTypes.Meta;
    /** @type {?} */
    ResourceTypes.MolecularSequence;
    /** @type {?} */
    ResourceTypes.Money;
    /** @type {?} */
    ResourceTypes.NamingSystem;
    /** @type {?} */
    ResourceTypes.Narrative;
    /** @type {?} */
    ResourceTypes.Observation;
    /** @type {?} */
    ResourceTypes.OperationOutcome;
    /** @type {?} */
    ResourceTypes.Organization;
    /** @type {?} */
    ResourceTypes.OrganizationAffiliation;
    /** @type {?} */
    ResourceTypes.ParameterDefinition;
    /** @type {?} */
    ResourceTypes.Patient;
    /** @type {?} */
    ResourceTypes.Period;
    /** @type {?} */
    ResourceTypes.Person;
    /** @type {?} */
    ResourceTypes.Practitioner;
    /** @type {?} */
    ResourceTypes.PractitionerRole;
    /** @type {?} */
    ResourceTypes.Quantity;
    /** @type {?} */
    ResourceTypes.QuestionnaireResponse;
    /** @type {?} */
    ResourceTypes.QuestionnaireResponseItem;
    /** @type {?} */
    ResourceTypes.Range;
    /** @type {?} */
    ResourceTypes.Ratio;
    /** @type {?} */
    ResourceTypes.Reference;
    /** @type {?} */
    ResourceTypes.RelatedArtifact;
    /** @type {?} */
    ResourceTypes.RelatedPerson;
    /** @type {?} */
    ResourceTypes.Resource;
    /** @type {?} */
    ResourceTypes.ResourceCapability;
    /** @type {?} */
    ResourceTypes.SampledData;
    /** @type {?} */
    ResourceTypes.Schedule;
    /** @type {?} */
    ResourceTypes.Signature;
    /** @type {?} */
    ResourceTypes.SimpleQuantity;
    /** @type {?} */
    ResourceTypes.Slot;
    /** @type {?} */
    ResourceTypes.Specimen;
    /** @type {?} */
    ResourceTypes.Substance;
    /** @type {?} */
    ResourceTypes.Task;
    /** @type {?} */
    ResourceTypes.TerminologyCapabilities;
    /** @type {?} */
    ResourceTypes.Timing;
    /** @type {?} */
    ResourceTypes.UsageContext;
    /** @type {?} */
    ResourceTypes.ValueSet;
    /** @type {?} */
    ResourceTypes.ValueSetContains;
    /** @type {?} */
    ResourceTypes.VerificationResult;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Account, Address, Annotation, Appointment, AppointmentResponse, Attachment, BackboneElement, Bundle, BundleEntry, CapabilityStatement, ChargeItemDefinition, CodeSystem, CodeSystemConcept, CodeableConcept, Coding, CommonSearchParameters, ConceptDto, ConceptMap, ConceptMapDependsOn, ContactDetail, ContactPoint, Contract, Coverage, DomainResource, Dosage, Duration, Element, Encounter, Endpoint, EpisodeOfCare, EqualSearchModifier, Extension, FhirAdvancedService, FhirQueryBuilder, FhirService, Flag, Group, HealthcareService, HumanName, Identifier, InstanceLevelInteractions, Invoice, LeftPart, Library, List, LmsNgFhirModule, Location, Medication, MedicationAdministration, MedicationDispense, MedicationKnowledge, MedicationRequest, MedicationStatement, Meta, Money, NamingSystem, Narrative, OperationOutcome, Organization, OrganizationAffiliation, Patient, Period, Person, Practitioner, PractitionerRole, Quantity, Range, Ratio, Reference, RelatedPerson, Resource, ResourceCapability, ResourceTypes, Schedule, SearchControlParameters, SearchItem, SearchModifiers, SearchSet, Signature, SimpleQuantity, Slot, StringContainsSearchModifier, StringExactSearchModifier, Substance, Task, TerminologyCapabilities, Timing, TypeLevelInteractions, UsageContext, ValueSet, VerificationResult, WholeSystemInteractions, FhirAddressLineExtract as ɵa, FhirContactExtractPipe as ɵb, FhirDosageExctractPipe as ɵc, FhirEmailExtractPipe as ɵd, FhirNameExtractPipe as ɵe, FhirTelecomPhoneExtract as ɵf, FhirTelecomWebExtractPipe as ɵg, FHIR_CONFIG as ɵh, FhirConfig as ɵi };
//# sourceMappingURL=lms-ng-fhir.js.map

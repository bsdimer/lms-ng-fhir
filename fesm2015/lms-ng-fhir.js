import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, Pipe, NgModule } from '@angular/core';
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
const FHIR_CONFIG = new InjectionToken('FhirConfig');
class FhirConfig {
}
FhirConfig.decorators = [
    { type: Injectable }
];
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
class Element {
}
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
class Resource {
}
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
class DomainResource extends Resource {
}
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
class Meta extends Element {
}
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
class Extension {
}
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
class Narrative extends Element {
}
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
class Period extends Element {
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
    Period.prototype.start;
    /** @type {?} */
    Period.prototype.end;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Range extends Element {
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
    Range.prototype.low;
    /** @type {?} */
    Range.prototype.high;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Reference extends Element {
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
class Ratio extends Element {
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
    Ratio.prototype.numerator;
    /** @type {?} */
    Ratio.prototype.denominator;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HumanName extends Element {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Person extends DomainResource {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        this.resourceType = 'Person';
        if (source)
            for (const key of Object.keys(source)) {
                this[key] = source[key];
            }
    }
    /**
     * @return {?}
     */
    static getNew() {
        return new Person({ name: [HumanName.getNew()] });
    }
}
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
class Address extends Element {
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
class Attachment extends Element {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Group extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'Group';
    }
}
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
class Patient extends DomainResource {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        this.resourceType = 'Patient';
        if (source)
            for (const key of Object.keys(source)) {
                this[key] = source[key];
            }
    }
    /**
     * @return {?}
     */
    static getNew() {
        return new Patient({ name: [HumanName.getNew()] });
    }
}
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
class Practitioner extends DomainResource {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        this.resourceType = 'Practitioner';
        if (source)
            for (const key of Object.keys(source)) {
                this[key] = source[key];
            }
    }
    /**
     * @return {?}
     */
    static getNew() {
        return new Practitioner({ name: [HumanName.getNew()] });
    }
}
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
class PractitionerRole extends DomainResource {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        this.resourceType = 'PractitionerRole';
        if (source)
            for (const key of Object.keys(source)) {
                this[key] = source[key];
            }
    }
    // (Endpoint)
    /**
     * @return {?}
     */
    static getNew() {
        return new PractitionerRole({ name: [HumanName.getNew()] });
    }
}
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
class RelatedPerson extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'RelatedPerson';
    }
}
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
class BackboneElement extends Element {
}
if (false) {
    /** @type {?} */
    BackboneElement.prototype.modifierExtension;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CodeableConcept extends Element {
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
    CodeableConcept.prototype.coding;
    /** @type {?} */
    CodeableConcept.prototype.text;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CodeSystem extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'CodeSystem';
    }
}
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
class CodeSystemConcept extends BackboneElement {
}
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
class Coding extends Element {
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
class ConceptMap extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'ConceptMap';
    }
}
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
class ConceptMapDependsOn extends BackboneElement {
}
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
class ContactDetail extends Element {
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
    ContactDetail.prototype.name;
    /** @type {?} */
    ContactDetail.prototype.telecom;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContactPoint extends Element {
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
class Identifier extends Element {
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
class NamingSystem extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'NamingSystem';
    }
}
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
class Quantity extends Element {
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
class SimpleQuantity extends Quantity {
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
class TerminologyCapabilities extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'TerminologyCapabilities';
    }
}
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
class UsageContext extends Element {
}
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
class ValueSet extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'ValueSet';
    }
}
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
class ResourceCapability {
    constructor() {
        this.resourceType = 'ResourceCapability';
    }
}
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
class CapabilityStatement {
}
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
class Bundle extends Resource {
    constructor() {
        super(...arguments);
        this.resourceType = 'Bundle';
    }
}
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
class BundleEntry {
}
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
class Encounter extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'Encounter';
    }
}
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
class EpisodeOfCare extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'EpisodeOfCare';
    }
}
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
class Flag extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'Flag';
    }
}
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
class Library extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'Library';
    }
}
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
class List extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'List';
    }
}
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
class Dosage extends BackboneElement {
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
class Duration extends Quantity {
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
class MedicationAdministration extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'MedicationAdministration';
    }
}
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
class MedicationDispense extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'MedicationDispense';
    }
}
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
class MedicationKnowledge extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'MedicationKnowledge';
    }
}
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
class MedicationRequest extends DomainResource {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        this.resourceType = 'MedicationRequest';
        if (source)
            for (const key of Object.keys(source)) {
                this[key] = source[key];
            }
    }
}
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
class MedicationStatement extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'MedicationStatement';
    }
}
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
class Medication extends DomainResource {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        this.resourceType = 'Medication';
        if (source)
            for (const key of Object.keys(source)) {
                this[key] = source[key];
            }
    }
}
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
class Money extends Element {
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
    Money.prototype.value;
    /** @type {?} */
    Money.prototype.currency;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Endpoint extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'Endpoint';
    }
}
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
class HealthcareService extends DomainResource {
    /**
     * @param {?=} source
     */
    constructor(source) {
        super();
        this.resourceType = 'HealthcareService';
        if (source)
            for (const key of Object.keys(source)) {
                this[key] = source[key];
            }
    }
    // (Endpoint)
    /**
     * @return {?}
     */
    static getNew() {
        return new HealthcareService({ name: [HealthcareService.getNew()] });
    }
}
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
class Location extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'Location';
    }
}
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
class Organization extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'Organization';
    }
}
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
class OrganizationAffiliation extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'OrganizationAffiliation';
    }
}
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
class Account extends DomainResource {
}
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
class Coverage extends DomainResource {
}
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
class Contract extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'Contract';
    }
}
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
class ChargeItemDefinition extends DomainResource {
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
class Signature extends Element {
}
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
class OperationOutcome extends DomainResource {
}
if (false) {
    /** @type {?} */
    OperationOutcome.prototype.issue;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Annotation extends Element {
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
class Appointment extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'Appointment';
    }
}
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
class AppointmentResponse extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'AppointmentResponse';
    }
}
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
class Schedule extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'Schedule';
    }
}
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
class Slot extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'Slot';
    }
}
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
class Task extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'Task';
    }
}
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
class VerificationResult extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'VerificationResult';
    }
}
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
class Timing extends BackboneElement {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Substance extends DomainResource {
}
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
class Invoice extends DomainResource {
    constructor() {
        super(...arguments);
        this.resourceType = 'Invoice';
    }
}
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
class FhirService {
    /**
     * @param {?} config
     * @param {?} httpClient
     */
    constructor(config, httpClient) {
        this.config = config;
        this.httpClient = httpClient;
    }
    /**
     * @param {?} base
     * @return {?}
     */
    set base(base) {
        this.config.base = base;
    }
    /**
     * @param {?=} headers
     * @return {?}
     */
    getConformanceStatement(headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        if (this.conformance)
            return of(this.conformance);
        return this.httpClient.get(`${this.config.base}/metadata`, { headers: mergedHeaders }).pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        result => this.conformance = result)));
    }
    /**
     * @template T
     * @param {?} resourceType
     * @param {?} id
     * @param {?=} headers
     * @return {?}
     */
    read(resourceType, id, headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.get(`${this.config.base}/${resourceType}/${id}`, { headers: mergedHeaders });
    }
    /**
     * @template T
     * @param {?} resourceType
     * @param {?} id
     * @param {?} v
     * @param {?=} headers
     * @return {?}
     */
    vread(resourceType, id, v, headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.get(`${this.config.base}/${resourceType}/${id}/_history/${v}`, { headers: mergedHeaders });
    }
    /**
     * @template T
     * @param {?} resource
     * @param {?=} headers
     * @return {?}
     */
    update(resource, headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.put(`${this.config.base}/${resource.resourceType}/${resource.id}`, resource, { headers: mergedHeaders });
    }
    /**
     * @template T
     * @param {?} resource
     * @param {?=} headers
     * @return {?}
     */
    save(resource, headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        /** @type {?} */
        const resourceType = resource.resourceType;
        if (resource.hasOwnProperty('id')) {
            return this.update(resource, headers);
        }
        else {
            return this.create(resource, headers);
        }
    }
    /**
     * @template T
     * @param {?} resource
     * @param {?} body
     * @param {?=} headers
     * @return {?}
     */
    patch(resource, body, headers) {
        /** @type {?} */
        const headersToAttach = {};
        merge(headersToAttach, this.headers);
        headersToAttach['Content-Type'] = 'application/json-patch+json';
        return this.httpClient.patch(`${this.config.base}/${resource.resourceType}/${resource.id}`, body, { headers: headersToAttach });
    }
    /**
     * @template T
     * @param {?} resourceType
     * @param {?} id
     * @param {?=} headers
     * @return {?}
     */
    delete(resourceType, id, headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.delete(`${this.config.base}/${resourceType}/${id}`, { headers: mergedHeaders });
    }
    /**
     * @template T
     * @param {?} resource
     * @param {?=} headers
     * @return {?}
     */
    create(resource, headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.post(`${this.config.base}/${resource.resourceType}`, resource, { headers: mergedHeaders });
    }
    // ToDo:
    /**
     * @param {?} qb
     * @param {?=} headers
     * @return {?}
     */
    searchByQuery(qb, headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.get(`${this.config.base}/${qb.resourceName}`, {
            params: qb.paramsAsHttpParams(),
            headers: mergedHeaders
        });
    }
    /**
     * @template T
     * @param {?} ss
     * @param {?=} headers
     * @return {?}
     */
    searchBySet(ss, headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.get(`${this.config.base}/${ss.resourceName}?_sort=-_id`, {
            params: ss.paramsAsObject(),
            headers: mergedHeaders,
        });
    }
    /**
     * @template T
     * @param {?} url
     * @param {?=} headers
     * @return {?}
     */
    searchByUrl(url, headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.get(url, { headers: mergedHeaders });
    }
    /**
     * @return {?}
     */
    search_all() {
    }
    /**
     * @return {?}
     */
    capabilities() {
    }
    /**
     * @param {?} bundle
     * @param {?=} headers
     * @return {?}
     */
    transaction(bundle, headers) {
        /** @type {?} */
        const mergedHeaders = Object.assign(this.headers, headers);
        return this.httpClient.post(this.config.base, bundle, {
            headers: mergedHeaders
        });
    }
    /**
     * @return {?}
     */
    history() {
    }
    /**
     * @return {?}
     */
    history_type() {
    }
    /**
     * @return {?}
     */
    history_all() {
    }
    /**
     * @template T
     * @param {?} qb
     * @return {?}
     */
    executeQuery(qb) {
        return this.httpClient.get(qb.query, { headers: this.headers });
    }
    /**
     * @param {?} source
     * @param {?} keys
     * @return {?}
     */
    createTransactionBundle(source, keys) {
        /** @type {?} */
        const bundle = new Bundle();
        bundle.type = 'transaction';
        bundle.resourceType = 'Bundle';
        bundle.entry = [];
        keys.filter((/**
         * @param {?} key
         * @return {?}
         */
        key => source.hasOwnProperty(key)))
            .map((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            /** @type {?} */
            const v = source[key];
            if (this.isIterable(v)) {
                for (const e of v) {
                    bundle.entry.push(this.createBundleEntry(e));
                }
            }
            else {
                bundle.entry.push(this.createBundleEntry(v));
            }
        }));
        return bundle;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isIterable(value) {
        return value !== null && Symbol.iterator in Object(value);
    }
    /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    createBundleEntry(entry) {
        return {
            fullUrl: `urn:uuid:${entry.uuid}`,
            resource: entry,
            request: {
                url: !entry.id ? entry.resourceType : `${entry.resourceType}/${entry.id}`,
                method: entry.id ? 'PUT' : 'POST',
            },
        };
    }
}
FhirService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
FhirService.ctorParameters = () => [
    { type: FhirConfig, decorators: [{ type: Inject, args: [FHIR_CONFIG,] }] },
    { type: HttpClient }
];
/** @nocollapse */ FhirService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FhirService_Factory() { return new FhirService(ɵɵinject(FHIR_CONFIG), ɵɵinject(HttpClient)); }, token: FhirService, providedIn: "root" });
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
class FhirAdvancedService extends FhirService {
    /**
     * @param {?} config
     * @param {?} httpClient
     */
    constructor(config, httpClient) {
        super(config, httpClient);
        this.config = config;
        this.httpClient = httpClient;
        this.fhircqrs = config.fhircqrs;
    }
    /**
     * @param {?} headers
     * @return {?}
     */
    setAuthentication(headers) {
        this.headers = headers;
    }
    /**
     * @param {?} part
     * @param {?} id
     * @param {?=} version
     * @return {?}
     */
    searchInConcept(part, id, version) {
        return this.httpClient
            .get(`${this.fhircqrs}/CodeSystem/searchInConcept`, { headers: this.headers, params: { part: part, id: id, version: version } });
    }
    /**
     * @param {?} patientId
     * @return {?}
     */
    findActiveEncounterByPatient(patientId) {
        return this.httpClient
            .get(`${this.fhircqrs}/Encounter/findActiveEncounterByPatient`, { headers: this.headers, params: { patientId: patientId } });
    }
}
FhirAdvancedService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
FhirAdvancedService.ctorParameters = () => [
    { type: FhirConfig, decorators: [{ type: Inject, args: [FHIR_CONFIG,] }] },
    { type: HttpClient }
];
/** @nocollapse */ FhirAdvancedService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FhirAdvancedService_Factory() { return new FhirAdvancedService(ɵɵinject(FHIR_CONFIG), ɵɵinject(HttpClient)); }, token: FhirAdvancedService, providedIn: "root" });
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
class ConceptDto {
}
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
class FhirAddressLineExtract {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        if (value && value[0] && value[0].line && value[0].line[0])
            return value[0].line[0];
        return '';
    }
}
FhirAddressLineExtract.decorators = [
    { type: Pipe, args: [{
                name: 'fhirAddressLineExtract',
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FhirContactExtractPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        if (value && value.contact && value.contact[0] && value.contact[0].name) {
            return `${value.contact[0].name.prefix} ${value.contact[0].name.given[0]} ${value.contact[0].name.family}`;
        }
        return '';
    }
}
FhirContactExtractPipe.decorators = [
    { type: Pipe, args: [{
                name: 'fhirContactExtract'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FhirDosageExctractPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        /** @type {?} */
        let result = '';
        /** @type {?} */
        const v = (/** @type {?} */ (value));
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
    }
}
FhirDosageExctractPipe.decorators = [
    { type: Pipe, args: [{
                name: 'fhirDosageExctract',
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FhirEmailExtractPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        /** @type {?} */
        let email = '';
        if (value && value.length > 0) {
            for (let contactPoint of value) {
                if (contactPoint.system === 'email')
                    email = email.concat(contactPoint.value, ', ');
            }
        }
        return email.trim().slice(0, email.length - 2);
    }
}
FhirEmailExtractPipe.decorators = [
    { type: Pipe, args: [{
                name: 'fhirEmailExtract'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FhirNameExtractPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        /** @type {?} */
        const p = value;
        if (p && p.hasOwnProperty('name') && p.name.length > 0) {
            return `${p.name[0].given[0]} ${p.name[0].family}`;
        }
        return '';
    }
}
FhirNameExtractPipe.decorators = [
    { type: Pipe, args: [{
                name: 'fhirNameExtract',
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FhirTelecomPhoneExtract {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        /** @type {?} */
        let phone = '';
        if (value && value.length > 0) {
            for (let contactPoint of value) {
                if (contactPoint.system === 'phone')
                    phone = phone.concat(contactPoint.value, ', ');
            }
        }
        return phone.trim().slice(0, phone.length - 2);
    }
}
FhirTelecomPhoneExtract.decorators = [
    { type: Pipe, args: [{
                name: 'fhirTelecomPhoneExtract'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FhirTelecomWebExtractPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        /** @type {?} */
        let url = '';
        if (value && value.length > 0) {
            for (let contactPoint of value) {
                if (contactPoint.system === 'url')
                    url = url.concat(contactPoint.value, ', ');
            }
        }
        return url.trim().slice(0, url.length - 2);
    }
}
FhirTelecomWebExtractPipe.decorators = [
    { type: Pipe, args: [{
                name: 'fhirTelecomWebExtract'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LmsNgFhirModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
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
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InstanceLevelInteractions {
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
class TypeLevelInteractions {
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
class WholeSystemInteractions {
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
class CommonSearchParameters {
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
class SearchControlParameters {
}
class FhirQueryBuilder {
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
class LeftPart {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchItem {
    /**
     * @param {?} type
     * @param {?} key
     * @param {?} modifier
     * @param {?} value
     * @return {?}
     */
    static init(type, key, modifier, value) {
        /** @type {?} */
        const item = new SearchItem();
        item.type = type;
        item.key = key;
        item.modifier = modifier;
        item.value = value;
        return item;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setType(value) {
        this.type = value;
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setKey(value) {
        this.key = value;
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setModifier(value) {
        this.modifier = value;
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        this.value = value;
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setOptions(value) {
        this.options = value;
        return this;
    }
    /**
     * @return {?}
     */
    compileKey() {
        return this.modifier.compileKey(this);
    }
    /**
     * @return {?}
     */
    compileValue() {
        return this.modifier.compileValue(this);
    }
}
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
class EqualSearchModifier {
    /**
     * @param {?} si
     * @return {?}
     */
    compileKey(si) {
        return si.key;
    }
    /**
     * @param {?} si
     * @return {?}
     */
    compileValue(si) {
        return si.value;
    }
}
if (false) {
    /** @type {?} */
    EqualSearchModifier.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StringContainsSearchModifier {
    /**
     * @param {?} si
     * @return {?}
     */
    compileKey(si) {
        return si.key + ':contains';
    }
    /**
     * @param {?} si
     * @return {?}
     */
    compileValue(si) {
        return si.value;
    }
}
if (false) {
    /** @type {?} */
    StringContainsSearchModifier.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StringExactSearchModifier {
    /**
     * @param {?} si
     * @return {?}
     */
    compileKey(si) {
        return si.key + ':exact';
    }
    /**
     * @param {?} si
     * @return {?}
     */
    compileValue(si) {
        return si.value;
    }
}
if (false) {
    /** @type {?} */
    StringExactSearchModifier.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchModifiers {
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
class SearchSetBuilder {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchSet {
    constructor() {
        this.searchItems = [];
        this.sort = '-_id';
    }
    /**
     * @return {?}
     */
    paramsAsObject() {
        /** @type {?} */
        let so = new HttpParams();
        for (const si of this.searchItems) {
            so = so.append(si.compileKey(), si.compileValue());
        }
        if (this.getpagesoffset)
            so.append('_getpagesoffset', String(this.getpagesoffset));
        if (this.count)
            so.append('_count', String(this.count));
        so.append('_sort', '-_id');
        return so;
    }
    /**
     * @return {?}
     */
    build() {
        return new SearchSetBuilder(this);
    }
}
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
class ResourceTypes {
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

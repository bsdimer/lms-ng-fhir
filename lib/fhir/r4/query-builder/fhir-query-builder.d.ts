import { HttpParams } from "@angular/common/http";
export declare class InstanceLevelInteractions {
    static read: number;
    static vread: number;
    static update: number;
    static patch: number;
    static delete: number;
    static history: number;
    static create: number;
}
export declare class TypeLevelInteractions {
    static create: number;
    static search: number;
    static history: number;
}
export declare class WholeSystemInteractions {
    static capabilities: number;
    static batch: number;
    static search: number;
    static history: number;
}
export declare class CommonSearchParameters {
    static _id: string;
    static _lastUpdated: string;
    static _tag: string;
    static _profile: string;
    static _security: string;
    static _text: string;
    static _content: string;
    static _list: string;
    static _query: string;
}
export declare class SearchControlParameters {
}
export declare class FhirQueryBuilder {
    private readonly _baseUrl;
    private _resourceName;
    private _params;
    private _fhirOperation;
    constructor(baseUrl?: string);
    static getInstance(baseUrl?: string): FhirQueryBuilder;
    readonly resourceName: string;
    setResourceName(resourceName: string): FhirQueryBuilder;
    readonly query: string;
    read(id: string): FhirQueryBuilder;
    search(propName: string): LeftPart;
    readonly params: any[];
    and(): FhirQueryBuilder;
    append(val: string): FhirQueryBuilder;
    paramsAsObject(): {};
    paramsAsHttpParams(): HttpParams;
}
export declare class LeftPart {
    private readonly _qb;
    left: string;
    constructor(qb: FhirQueryBuilder);
    eq(val: string): FhirQueryBuilder;
    contains(val: string): FhirQueryBuilder;
    starts(val: string): FhirQueryBuilder;
    exact(val: string): FhirQueryBuilder;
}

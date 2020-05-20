export declare class ResourceCapability {
    resourceType: string;
    type: string;
    profile?: string;
    interaction: {
        code: 'read' | 'vread' | 'update' | 'patch' | 'delete' | 'history-instance' | 'history-type' | 'create' | 'search-type';
        documentation?: string;
    }[];
    versioning?: string;
    conditionalRead?: 'not-supported' | 'modified-since' | 'not-match' | 'full-support';
    conditionalCreate?: boolean;
    conditionalUpdate?: boolean;
    conditionalDelete?: 'not-supported' | 'single' | 'multiple';
    searchInclude?: string[];
    searchParam?: {
        name: string;
        definition?: string;
        type: 'number' | 'date' | 'string' | 'token' | 'reference' | 'composite' | 'quantity' | 'uri' | 'special';
        documentation?: string;
    }[];
    operation?: {
        name: string;
        definition?: string;
        documentation?: string;
    }[];
}
export declare class CapabilityStatement {
    resourceType: 'CapabilityStatement';
    status: 'draft' | 'active' | 'retired' | 'unknown';
    date: Date;
    publisher?: string;
    kind: 'instance' | 'capability' | 'requirements';
    software?: {
        name: string;
        version: string;
    };
    implementation?: {
        description: string;
        url: string;
    };
    fhirVersion: string;
    format: string[];
    rest?: {
        mode: 'client' | 'server';
        resource: ResourceCapability[];
    }[];
}

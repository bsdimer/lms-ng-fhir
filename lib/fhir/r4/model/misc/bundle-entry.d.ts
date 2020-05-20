import { Resource } from '../resource';
export declare class BundleEntry {
    link?: string;
    fullUrl?: string;
    resource?: Resource;
    request?: {
        method?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
        url: string;
        ifNoneMatch?: string;
        ifModifiedSince?: Date;
        ifMatch?: string;
        ifNoneExist?: string;
    };
    response?: {
        status: string;
        location?: string;
        etag?: string;
        lastModified?: Date;
        outcome?: Resource;
    };
    search?: {
        mode?: 'match' | 'include' | 'outcome';
        score?: number;
    };
}

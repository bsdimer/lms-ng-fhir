import { Element } from '../element';
export declare class Attachment extends Element {
    resourceType: string;
    constructor(source?: any);
    contentType?: string;
    language?: string;
    data?: string;
    url?: string;
    size?: number;
    hash?: string;
    title?: string;
    creation?: Date;
}

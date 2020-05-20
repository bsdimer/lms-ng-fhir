import { Element } from './element';
import { Attachment } from './individuals/attachment';
export declare class RelatedArtifact extends Element {
    type?: 'documentation' | 'justification' | 'citation' | 'predecessor' | 'successor' | 'derived-from' | 'depends-on' | 'composed-of';
    label?: string;
    display?: string;
    citation?: string;
    url?: string;
    document?: Attachment;
    resource?: string;
}

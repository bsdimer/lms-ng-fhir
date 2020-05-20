import { Resource } from './resource';
import { Extension } from './extension';
export declare class DomainResource extends Resource {
    text?: string;
    contained?: Resource[];
    extension?: Extension[];
    modifierExtension?: Extension[];
}

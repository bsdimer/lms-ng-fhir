import { Element } from './element';
export declare class ParameterDefinition extends Element {
    name?: string;
    use: 'in' | 'out';
    min?: number;
    max?: string;
    documentation?: string;
    type: string;
    profile?: string;
}

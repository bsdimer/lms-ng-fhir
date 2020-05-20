import { EqualSearchModifier } from './modifiers/equal-search-modifier';
import { StringContainsSearchModifier } from './modifiers/string-contains-search-modifier';
import { StringExactSearchModifier } from './modifiers/string-exact-search-modifier';
export declare class SearchModifiers {
    static MODIFIERS: {
        'EQUAL': EqualSearchModifier;
        'STRING:CONTAINS': StringContainsSearchModifier;
        'STRING:EXACT': StringExactSearchModifier;
    };
    static STRING: {
        key: string;
        display: string;
    }[];
    static TOKEN: {
        key: string;
        display: string;
    }[];
    static DATE: {
        key: string;
        display: string;
    }[];
    static URI: {
        key: string;
        display: string;
    }[];
    static REFERENCE: {
        key: string;
        display: string;
    }[];
}

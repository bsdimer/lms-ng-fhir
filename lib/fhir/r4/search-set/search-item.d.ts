import { SearchModifier } from './search-modifier';
export declare class SearchItem {
    type: 'number' | 'date' | 'string' | 'token' | 'reference' | 'composite' | 'quantity' | 'uri' | 'special';
    key: string;
    modifier: SearchModifier;
    value: string;
    options: any;
    static init(type: any, key: any, modifier: any, value: any): SearchItem;
    setType(value: 'number' | 'date' | 'string' | 'token' | 'reference' | 'composite' | 'quantity' | 'uri' | 'special'): SearchItem;
    setKey(value: string): SearchItem;
    setModifier(value: SearchModifier): SearchItem;
    setValue(value: string): SearchItem;
    setOptions(value: any): SearchItem;
    compileKey(): string;
    compileValue(): string;
}

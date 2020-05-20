import { SearchModifier } from '../search-modifier';
import { SearchItem } from '../search-item';
export declare class StringExactSearchModifier implements SearchModifier {
    type: string;
    compileKey(si: SearchItem): string;
    compileValue(si: SearchItem): string;
}

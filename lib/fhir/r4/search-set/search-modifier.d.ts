import { SearchItem } from './search-item';
export interface SearchModifier {
    type: string;
    compileKey(si: SearchItem): string;
    compileValue(si: SearchItem): string;
}

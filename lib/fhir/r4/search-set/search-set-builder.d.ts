import { SearchSet } from './search-set';
import { SearchItem } from './search-item';
export declare class SearchSetBuilder {
    private ss;
    constructor(ss: SearchSet);
    get(): SearchSet;
    setResourceName(resource: string): SearchSetBuilder;
    setTitle(value: string): SearchSetBuilder;
    setDescription(value: string): SearchSetBuilder;
    setGetpagesoffset(value: number): SearchSetBuilder;
    setCount(value: number): SearchSetBuilder;
    addSearchItem(): SearchItem;
}

import { SearchItem } from './search-item';
import { SearchSetBuilder } from './search-set-builder';
import { HttpParams } from '@angular/common/http';
export declare class SearchSet {
    resourceName: string;
    searchItems: Array<SearchItem>;
    title: string;
    description: string;
    getpagesoffset: number;
    count: number;
    sort: string;
    direction: 'asc' | 'desc';
    paramsAsObject(): HttpParams;
    build(): SearchSetBuilder;
}

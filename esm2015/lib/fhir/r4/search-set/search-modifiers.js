/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EqualSearchModifier } from './modifiers/equal-search-modifier';
import { StringContainsSearchModifier } from './modifiers/string-contains-search-modifier';
import { StringExactSearchModifier } from './modifiers/string-exact-search-modifier';
export class SearchModifiers {
}
SearchModifiers.MODIFIERS = {
    'EQUAL': new EqualSearchModifier(),
    'STRING:CONTAINS': new StringContainsSearchModifier(),
    'STRING:EXACT': new StringExactSearchModifier(),
};
SearchModifiers.STRING = [
    {
        key: '',
        display: 'modifier_starts',
    },
    {
        key: ':contains',
        display: 'modifier_contains',
    },
    {
        key: ':exact',
        display: 'modifier_exact',
    },
];
SearchModifiers.TOKEN = [
    {
        key: '',
        display: 'modifier_exact',
    },
    {
        key: ':template',
        display: 'modifier_text',
    },
    {
        key: ':not',
        display: 'modifier_not',
    },
    {
        key: ':above',
        display: 'modifier_above',
    },
    {
        key: ':below',
        display: 'modifier_below',
    },
    {
        key: ':in',
        display: 'modifier_in',
    },
    {
        key: ':not-in',
        display: 'modifier_notIn',
    },
];
SearchModifiers.DATE = [
    {
        key: 'eq',
        display: 'modifier_exact',
    },
    {
        key: 'ne',
        display: 'modifier_not',
    },
    {
        key: 'gt',
        display: 'modifier_greater_than',
    },
    {
        key: 'lt',
        display: 'modifier_less_than',
    },
    {
        key: 'ge',
        display: 'modifier_greater_or_equal',
    },
    {
        key: 'sa',
        display: 'modifier_starts_after',
    },
    {
        key: 'eb',
        display: 'modifier_ends_before',
    },
    {
        key: 'ap',
        display: 'modifier_approximately',
    },
];
SearchModifiers.URI = [
    {
        key: '',
        display: 'modifier_exact',
    },
    {
        key: ':above',
        display: 'modifier_starts',
    },
    {
        key: ':below',
        display: 'modifier_ends',
    },
];
SearchModifiers.REFERENCE = [
    {
        key: '',
        display: 'modifier_ref',
    },
];
if (false) {
    /** @type {?} */
    SearchModifiers.MODIFIERS;
    /** @type {?} */
    SearchModifiers.STRING;
    /** @type {?} */
    SearchModifiers.TOKEN;
    /** @type {?} */
    SearchModifiers.DATE;
    /** @type {?} */
    SearchModifiers.URI;
    /** @type {?} */
    SearchModifiers.REFERENCE;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLW1vZGlmaWVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xtcy1uZy1maGlyLyIsInNvdXJjZXMiOlsibGliL2ZoaXIvcjQvc2VhcmNoLXNldC9zZWFyY2gtbW9kaWZpZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMzRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUVyRixNQUFNLE9BQU8sZUFBZTs7QUFDWix5QkFBUyxHQUFHO0lBQ3hCLE9BQU8sRUFBRSxJQUFJLG1CQUFtQixFQUFFO0lBQ2xDLGlCQUFpQixFQUFFLElBQUksNEJBQTRCLEVBQUU7SUFDckQsY0FBYyxFQUFFLElBQUkseUJBQXlCLEVBQUU7Q0FDaEQsQ0FBQztBQUVZLHNCQUFNLEdBQUc7SUFDckI7UUFDRSxHQUFHLEVBQUUsRUFBRTtRQUNQLE9BQU8sRUFBRSxpQkFBaUI7S0FDM0I7SUFDRDtRQUNFLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLE9BQU8sRUFBRSxtQkFBbUI7S0FDN0I7SUFDRDtRQUNFLEdBQUcsRUFBRSxRQUFRO1FBQ2IsT0FBTyxFQUFFLGdCQUFnQjtLQUMxQjtDQUNGLENBQUM7QUFDWSxxQkFBSyxHQUFHO0lBQ3BCO1FBQ0UsR0FBRyxFQUFFLEVBQUU7UUFDUCxPQUFPLEVBQUUsZ0JBQWdCO0tBQzFCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsV0FBVztRQUNoQixPQUFPLEVBQUUsZUFBZTtLQUN6QjtJQUNEO1FBQ0UsR0FBRyxFQUFFLE1BQU07UUFDWCxPQUFPLEVBQUUsY0FBYztLQUN4QjtJQUNEO1FBQ0UsR0FBRyxFQUFFLFFBQVE7UUFDYixPQUFPLEVBQUUsZ0JBQWdCO0tBQzFCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsUUFBUTtRQUNiLE9BQU8sRUFBRSxnQkFBZ0I7S0FDMUI7SUFDRDtRQUNFLEdBQUcsRUFBRSxLQUFLO1FBQ1YsT0FBTyxFQUFFLGFBQWE7S0FDdkI7SUFDRDtRQUNFLEdBQUcsRUFBRSxTQUFTO1FBQ2QsT0FBTyxFQUFFLGdCQUFnQjtLQUMxQjtDQUNGLENBQUM7QUFDWSxvQkFBSSxHQUFHO0lBQ25CO1FBQ0UsR0FBRyxFQUFFLElBQUk7UUFDVCxPQUFPLEVBQUUsZ0JBQWdCO0tBQzFCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsSUFBSTtRQUNULE9BQU8sRUFBRSxjQUFjO0tBQ3hCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsSUFBSTtRQUNULE9BQU8sRUFBRSx1QkFBdUI7S0FDakM7SUFDRDtRQUNFLEdBQUcsRUFBRSxJQUFJO1FBQ1QsT0FBTyxFQUFFLG9CQUFvQjtLQUM5QjtJQUNEO1FBQ0UsR0FBRyxFQUFFLElBQUk7UUFDVCxPQUFPLEVBQUUsMkJBQTJCO0tBQ3JDO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsSUFBSTtRQUNULE9BQU8sRUFBRSx1QkFBdUI7S0FDakM7SUFDRDtRQUNFLEdBQUcsRUFBRSxJQUFJO1FBQ1QsT0FBTyxFQUFFLHNCQUFzQjtLQUNoQztJQUNEO1FBQ0UsR0FBRyxFQUFFLElBQUk7UUFDVCxPQUFPLEVBQUUsd0JBQXdCO0tBQ2xDO0NBQ0YsQ0FBQztBQUNZLG1CQUFHLEdBQUc7SUFDbEI7UUFDRSxHQUFHLEVBQUUsRUFBRTtRQUNQLE9BQU8sRUFBRSxnQkFBZ0I7S0FDMUI7SUFDRDtRQUNFLEdBQUcsRUFBRSxRQUFRO1FBQ2IsT0FBTyxFQUFFLGlCQUFpQjtLQUMzQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLFFBQVE7UUFDYixPQUFPLEVBQUUsZUFBZTtLQUN6QjtDQUNGLENBQUM7QUFDWSx5QkFBUyxHQUFHO0lBQ3hCO1FBQ0UsR0FBRyxFQUFFLEVBQUU7UUFDUCxPQUFPLEVBQUUsY0FBYztLQUN4QjtDQUNGLENBQUM7OztJQXZHRiwwQkFJRTs7SUFFRix1QkFhRTs7SUFDRixzQkE2QkU7O0lBQ0YscUJBaUNFOztJQUNGLG9CQWFFOztJQUNGLDBCQUtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXF1YWxTZWFyY2hNb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXJzL2VxdWFsLXNlYXJjaC1tb2RpZmllcic7XG5pbXBvcnQgeyBTdHJpbmdDb250YWluc1NlYXJjaE1vZGlmaWVyIH0gZnJvbSAnLi9tb2RpZmllcnMvc3RyaW5nLWNvbnRhaW5zLXNlYXJjaC1tb2RpZmllcic7XG5pbXBvcnQgeyBTdHJpbmdFeGFjdFNlYXJjaE1vZGlmaWVyIH0gZnJvbSAnLi9tb2RpZmllcnMvc3RyaW5nLWV4YWN0LXNlYXJjaC1tb2RpZmllcic7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hNb2RpZmllcnMge1xuICBwdWJsaWMgc3RhdGljIE1PRElGSUVSUyA9IHtcbiAgICAnRVFVQUwnOiBuZXcgRXF1YWxTZWFyY2hNb2RpZmllcigpLFxuICAgICdTVFJJTkc6Q09OVEFJTlMnOiBuZXcgU3RyaW5nQ29udGFpbnNTZWFyY2hNb2RpZmllcigpLFxuICAgICdTVFJJTkc6RVhBQ1QnOiBuZXcgU3RyaW5nRXhhY3RTZWFyY2hNb2RpZmllcigpLFxuICB9O1xuXG4gIHB1YmxpYyBzdGF0aWMgU1RSSU5HID0gW1xuICAgIHtcbiAgICAgIGtleTogJycsXG4gICAgICBkaXNwbGF5OiAnbW9kaWZpZXJfc3RhcnRzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJzpjb250YWlucycsXG4gICAgICBkaXNwbGF5OiAnbW9kaWZpZXJfY29udGFpbnMnLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnOmV4YWN0JyxcbiAgICAgIGRpc3BsYXk6ICdtb2RpZmllcl9leGFjdCcsXG4gICAgfSxcbiAgXTtcbiAgcHVibGljIHN0YXRpYyBUT0tFTiA9IFtcbiAgICB7XG4gICAgICBrZXk6ICcnLFxuICAgICAgZGlzcGxheTogJ21vZGlmaWVyX2V4YWN0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJzp0ZW1wbGF0ZScsXG4gICAgICBkaXNwbGF5OiAnbW9kaWZpZXJfdGV4dCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICc6bm90JyxcbiAgICAgIGRpc3BsYXk6ICdtb2RpZmllcl9ub3QnLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnOmFib3ZlJyxcbiAgICAgIGRpc3BsYXk6ICdtb2RpZmllcl9hYm92ZScsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICc6YmVsb3cnLFxuICAgICAgZGlzcGxheTogJ21vZGlmaWVyX2JlbG93JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJzppbicsXG4gICAgICBkaXNwbGF5OiAnbW9kaWZpZXJfaW4nLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnOm5vdC1pbicsXG4gICAgICBkaXNwbGF5OiAnbW9kaWZpZXJfbm90SW4nLFxuICAgIH0sXG4gIF07XG4gIHB1YmxpYyBzdGF0aWMgREFURSA9IFtcbiAgICB7XG4gICAgICBrZXk6ICdlcScsXG4gICAgICBkaXNwbGF5OiAnbW9kaWZpZXJfZXhhY3QnLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnbmUnLFxuICAgICAgZGlzcGxheTogJ21vZGlmaWVyX25vdCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICdndCcsXG4gICAgICBkaXNwbGF5OiAnbW9kaWZpZXJfZ3JlYXRlcl90aGFuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJ2x0JyxcbiAgICAgIGRpc3BsYXk6ICdtb2RpZmllcl9sZXNzX3RoYW4nLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnZ2UnLFxuICAgICAgZGlzcGxheTogJ21vZGlmaWVyX2dyZWF0ZXJfb3JfZXF1YWwnLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnc2EnLFxuICAgICAgZGlzcGxheTogJ21vZGlmaWVyX3N0YXJ0c19hZnRlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICdlYicsXG4gICAgICBkaXNwbGF5OiAnbW9kaWZpZXJfZW5kc19iZWZvcmUnLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnYXAnLFxuICAgICAgZGlzcGxheTogJ21vZGlmaWVyX2FwcHJveGltYXRlbHknLFxuICAgIH0sXG4gIF07XG4gIHB1YmxpYyBzdGF0aWMgVVJJID0gW1xuICAgIHtcbiAgICAgIGtleTogJycsXG4gICAgICBkaXNwbGF5OiAnbW9kaWZpZXJfZXhhY3QnLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnOmFib3ZlJyxcbiAgICAgIGRpc3BsYXk6ICdtb2RpZmllcl9zdGFydHMnLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnOmJlbG93JyxcbiAgICAgIGRpc3BsYXk6ICdtb2RpZmllcl9lbmRzJyxcbiAgICB9LFxuICBdO1xuICBwdWJsaWMgc3RhdGljIFJFRkVSRU5DRSA9IFtcbiAgICB7XG4gICAgICBrZXk6ICcnLFxuICAgICAgZGlzcGxheTogJ21vZGlmaWVyX3JlZicsXG4gICAgfSxcbiAgXTtcbn1cbiJdfQ==
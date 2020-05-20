/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EqualSearchModifier } from './modifiers/equal-search-modifier';
import { StringContainsSearchModifier } from './modifiers/string-contains-search-modifier';
import { StringExactSearchModifier } from './modifiers/string-exact-search-modifier';
var SearchModifiers = /** @class */ (function () {
    function SearchModifiers() {
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
    return SearchModifiers;
}());
export { SearchModifiers };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLW1vZGlmaWVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xtcy1uZy1maGlyLyIsInNvdXJjZXMiOlsibGliL2ZoaXIvcjQvc2VhcmNoLXNldC9zZWFyY2gtbW9kaWZpZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMzRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUVyRjtJQUFBO0lBeUdBLENBQUM7SUF4R2UseUJBQVMsR0FBRztRQUN4QixPQUFPLEVBQUUsSUFBSSxtQkFBbUIsRUFBRTtRQUNsQyxpQkFBaUIsRUFBRSxJQUFJLDRCQUE0QixFQUFFO1FBQ3JELGNBQWMsRUFBRSxJQUFJLHlCQUF5QixFQUFFO0tBQ2hELENBQUM7SUFFWSxzQkFBTSxHQUFHO1FBQ3JCO1lBQ0UsR0FBRyxFQUFFLEVBQUU7WUFDUCxPQUFPLEVBQUUsaUJBQWlCO1NBQzNCO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsV0FBVztZQUNoQixPQUFPLEVBQUUsbUJBQW1CO1NBQzdCO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsUUFBUTtZQUNiLE9BQU8sRUFBRSxnQkFBZ0I7U0FDMUI7S0FDRixDQUFDO0lBQ1kscUJBQUssR0FBRztRQUNwQjtZQUNFLEdBQUcsRUFBRSxFQUFFO1lBQ1AsT0FBTyxFQUFFLGdCQUFnQjtTQUMxQjtRQUNEO1lBQ0UsR0FBRyxFQUFFLFdBQVc7WUFDaEIsT0FBTyxFQUFFLGVBQWU7U0FDekI7UUFDRDtZQUNFLEdBQUcsRUFBRSxNQUFNO1lBQ1gsT0FBTyxFQUFFLGNBQWM7U0FDeEI7UUFDRDtZQUNFLEdBQUcsRUFBRSxRQUFRO1lBQ2IsT0FBTyxFQUFFLGdCQUFnQjtTQUMxQjtRQUNEO1lBQ0UsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQUUsZ0JBQWdCO1NBQzFCO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxhQUFhO1NBQ3ZCO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsU0FBUztZQUNkLE9BQU8sRUFBRSxnQkFBZ0I7U0FDMUI7S0FDRixDQUFDO0lBQ1ksb0JBQUksR0FBRztRQUNuQjtZQUNFLEdBQUcsRUFBRSxJQUFJO1lBQ1QsT0FBTyxFQUFFLGdCQUFnQjtTQUMxQjtRQUNEO1lBQ0UsR0FBRyxFQUFFLElBQUk7WUFDVCxPQUFPLEVBQUUsY0FBYztTQUN4QjtRQUNEO1lBQ0UsR0FBRyxFQUFFLElBQUk7WUFDVCxPQUFPLEVBQUUsdUJBQXVCO1NBQ2pDO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsSUFBSTtZQUNULE9BQU8sRUFBRSxvQkFBb0I7U0FDOUI7UUFDRDtZQUNFLEdBQUcsRUFBRSxJQUFJO1lBQ1QsT0FBTyxFQUFFLDJCQUEyQjtTQUNyQztRQUNEO1lBQ0UsR0FBRyxFQUFFLElBQUk7WUFDVCxPQUFPLEVBQUUsdUJBQXVCO1NBQ2pDO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsSUFBSTtZQUNULE9BQU8sRUFBRSxzQkFBc0I7U0FDaEM7UUFDRDtZQUNFLEdBQUcsRUFBRSxJQUFJO1lBQ1QsT0FBTyxFQUFFLHdCQUF3QjtTQUNsQztLQUNGLENBQUM7SUFDWSxtQkFBRyxHQUFHO1FBQ2xCO1lBQ0UsR0FBRyxFQUFFLEVBQUU7WUFDUCxPQUFPLEVBQUUsZ0JBQWdCO1NBQzFCO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsUUFBUTtZQUNiLE9BQU8sRUFBRSxpQkFBaUI7U0FDM0I7UUFDRDtZQUNFLEdBQUcsRUFBRSxRQUFRO1lBQ2IsT0FBTyxFQUFFLGVBQWU7U0FDekI7S0FDRixDQUFDO0lBQ1kseUJBQVMsR0FBRztRQUN4QjtZQUNFLEdBQUcsRUFBRSxFQUFFO1lBQ1AsT0FBTyxFQUFFLGNBQWM7U0FDeEI7S0FDRixDQUFDO0lBQ0osc0JBQUM7Q0FBQSxBQXpHRCxJQXlHQztTQXpHWSxlQUFlOzs7SUFDMUIsMEJBSUU7O0lBRUYsdUJBYUU7O0lBQ0Ysc0JBNkJFOztJQUNGLHFCQWlDRTs7SUFDRixvQkFhRTs7SUFDRiwwQkFLRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVxdWFsU2VhcmNoTW9kaWZpZXIgfSBmcm9tICcuL21vZGlmaWVycy9lcXVhbC1zZWFyY2gtbW9kaWZpZXInO1xuaW1wb3J0IHsgU3RyaW5nQ29udGFpbnNTZWFyY2hNb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXJzL3N0cmluZy1jb250YWlucy1zZWFyY2gtbW9kaWZpZXInO1xuaW1wb3J0IHsgU3RyaW5nRXhhY3RTZWFyY2hNb2RpZmllciB9IGZyb20gJy4vbW9kaWZpZXJzL3N0cmluZy1leGFjdC1zZWFyY2gtbW9kaWZpZXInO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoTW9kaWZpZXJzIHtcbiAgcHVibGljIHN0YXRpYyBNT0RJRklFUlMgPSB7XG4gICAgJ0VRVUFMJzogbmV3IEVxdWFsU2VhcmNoTW9kaWZpZXIoKSxcbiAgICAnU1RSSU5HOkNPTlRBSU5TJzogbmV3IFN0cmluZ0NvbnRhaW5zU2VhcmNoTW9kaWZpZXIoKSxcbiAgICAnU1RSSU5HOkVYQUNUJzogbmV3IFN0cmluZ0V4YWN0U2VhcmNoTW9kaWZpZXIoKSxcbiAgfTtcblxuICBwdWJsaWMgc3RhdGljIFNUUklORyA9IFtcbiAgICB7XG4gICAgICBrZXk6ICcnLFxuICAgICAgZGlzcGxheTogJ21vZGlmaWVyX3N0YXJ0cycsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICc6Y29udGFpbnMnLFxuICAgICAgZGlzcGxheTogJ21vZGlmaWVyX2NvbnRhaW5zJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJzpleGFjdCcsXG4gICAgICBkaXNwbGF5OiAnbW9kaWZpZXJfZXhhY3QnLFxuICAgIH0sXG4gIF07XG4gIHB1YmxpYyBzdGF0aWMgVE9LRU4gPSBbXG4gICAge1xuICAgICAga2V5OiAnJyxcbiAgICAgIGRpc3BsYXk6ICdtb2RpZmllcl9leGFjdCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICc6dGVtcGxhdGUnLFxuICAgICAgZGlzcGxheTogJ21vZGlmaWVyX3RleHQnLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnOm5vdCcsXG4gICAgICBkaXNwbGF5OiAnbW9kaWZpZXJfbm90JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJzphYm92ZScsXG4gICAgICBkaXNwbGF5OiAnbW9kaWZpZXJfYWJvdmUnLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnOmJlbG93JyxcbiAgICAgIGRpc3BsYXk6ICdtb2RpZmllcl9iZWxvdycsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICc6aW4nLFxuICAgICAgZGlzcGxheTogJ21vZGlmaWVyX2luJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJzpub3QtaW4nLFxuICAgICAgZGlzcGxheTogJ21vZGlmaWVyX25vdEluJyxcbiAgICB9LFxuICBdO1xuICBwdWJsaWMgc3RhdGljIERBVEUgPSBbXG4gICAge1xuICAgICAga2V5OiAnZXEnLFxuICAgICAgZGlzcGxheTogJ21vZGlmaWVyX2V4YWN0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJ25lJyxcbiAgICAgIGRpc3BsYXk6ICdtb2RpZmllcl9ub3QnLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnZ3QnLFxuICAgICAgZGlzcGxheTogJ21vZGlmaWVyX2dyZWF0ZXJfdGhhbicsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICdsdCcsXG4gICAgICBkaXNwbGF5OiAnbW9kaWZpZXJfbGVzc190aGFuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJ2dlJyxcbiAgICAgIGRpc3BsYXk6ICdtb2RpZmllcl9ncmVhdGVyX29yX2VxdWFsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJ3NhJyxcbiAgICAgIGRpc3BsYXk6ICdtb2RpZmllcl9zdGFydHNfYWZ0ZXInLFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnZWInLFxuICAgICAgZGlzcGxheTogJ21vZGlmaWVyX2VuZHNfYmVmb3JlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJ2FwJyxcbiAgICAgIGRpc3BsYXk6ICdtb2RpZmllcl9hcHByb3hpbWF0ZWx5JyxcbiAgICB9LFxuICBdO1xuICBwdWJsaWMgc3RhdGljIFVSSSA9IFtcbiAgICB7XG4gICAgICBrZXk6ICcnLFxuICAgICAgZGlzcGxheTogJ21vZGlmaWVyX2V4YWN0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJzphYm92ZScsXG4gICAgICBkaXNwbGF5OiAnbW9kaWZpZXJfc3RhcnRzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJzpiZWxvdycsXG4gICAgICBkaXNwbGF5OiAnbW9kaWZpZXJfZW5kcycsXG4gICAgfSxcbiAgXTtcbiAgcHVibGljIHN0YXRpYyBSRUZFUkVOQ0UgPSBbXG4gICAge1xuICAgICAga2V5OiAnJyxcbiAgICAgIGRpc3BsYXk6ICdtb2RpZmllcl9yZWYnLFxuICAgIH0sXG4gIF07XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var FhirDosageExctractPipe = /** @class */ (function () {
    function FhirDosageExctractPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    FhirDosageExctractPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var result = '';
        /** @type {?} */
        var v = (/** @type {?} */ (value));
        if (v && args && args.length > 0) {
            if (v[0] && v[0].doseAndRate && args[0] === 'doseQuantityValue') {
                result = v[0].doseAndRate[0].doseQuantity.value;
            }
            if (v[0] && v[0].doseAndRate && args[0] === 'doseQuantityUnit') {
                result = v[0].doseAndRate[0].doseQuantity.unit;
            }
            if (v[0] && v[0].doseAndRate && args[0] === 'rateQuantityValue') {
                result = v[0].doseAndRate[0].rateQuantity.value;
            }
            if (v[0] && v[0].doseAndRate && args[0] === 'rateQuantityUnit') {
                result = v[0].doseAndRate[0].rateQuantity.unit;
            }
            if (v[0] && v[0].maxDosePerAdministration && args[0] === 'maxDoseValue') {
                result = v[0].maxDosePerAdministration.value;
            }
            if (v[0] && v[0].maxDosePerAdministration && args[0] === 'maxDoseUnit') {
                result = v[0].maxDosePerAdministration.unit;
            }
            if (v[0] && args[0] === 'text') {
                result = v[0].text;
            }
        }
        return result;
    };
    FhirDosageExctractPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'fhirDosageExctract',
                },] }
    ];
    return FhirDosageExctractPipe;
}());
export { FhirDosageExctractPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmhpci1kb3NhZ2UtZXhjdHJhY3QucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xtcy1uZy1maGlyLyIsInNvdXJjZXMiOlsibGliL2ZoaXIvcjQvZmhpci1waXBlcy9maGlyLWRvc2FnZS1leGN0cmFjdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUdsRDtJQUFBO0lBa0NBLENBQUM7Ozs7OztJQTdCRywwQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQVU7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOzs7WUFDNUIsTUFBTSxHQUFRLEVBQUU7O1lBQ2QsQ0FBQyxHQUFHLG1CQUFBLEtBQUssRUFBWTtRQUMzQixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFFOUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssbUJBQW1CLEVBQUU7Z0JBQzdELE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7YUFDbkQ7WUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxrQkFBa0IsRUFBRTtnQkFDNUQsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQzthQUNsRDtZQUNELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLG1CQUFtQixFQUFFO2dCQUM3RCxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2FBQ25EO1lBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssa0JBQWtCLEVBQUU7Z0JBQzVELE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7YUFDbEQ7WUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLGNBQWMsRUFBRTtnQkFDckUsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUM7YUFDaEQ7WUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLGFBQWEsRUFBRTtnQkFDcEUsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7YUFDL0M7WUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxFQUFFO2dCQUM1QixNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzthQUN0QjtTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs7Z0JBakNKLElBQUksU0FBQztvQkFDRixJQUFJLEVBQUUsb0JBQW9CO2lCQUM3Qjs7SUFnQ0QsNkJBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQS9CWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEb3NhZ2V9IGZyb20gJy4uL21vZGVsL21lZGljYXRpb25zJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdmaGlyRG9zYWdlRXhjdHJhY3QnLFxufSlcbmV4cG9ydCBjbGFzcyBGaGlyRG9zYWdlRXhjdHJhY3RQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgLi4uYXJnczogYW55W10pOiBzdHJpbmcge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSAnJztcbiAgICAgICAgY29uc3QgdiA9IHZhbHVlIGFzIERvc2FnZVtdO1xuICAgICAgICBpZiAodiAmJiBhcmdzICYmIGFyZ3MubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICBpZiAodlswXSAmJiB2WzBdLmRvc2VBbmRSYXRlICYmIGFyZ3NbMF0gPT09ICdkb3NlUXVhbnRpdHlWYWx1ZScpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB2WzBdLmRvc2VBbmRSYXRlWzBdLmRvc2VRdWFudGl0eS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2WzBdICYmIHZbMF0uZG9zZUFuZFJhdGUgJiYgYXJnc1swXSA9PT0gJ2Rvc2VRdWFudGl0eVVuaXQnKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdlswXS5kb3NlQW5kUmF0ZVswXS5kb3NlUXVhbnRpdHkudW5pdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2WzBdICYmIHZbMF0uZG9zZUFuZFJhdGUgJiYgYXJnc1swXSA9PT0gJ3JhdGVRdWFudGl0eVZhbHVlJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZbMF0uZG9zZUFuZFJhdGVbMF0ucmF0ZVF1YW50aXR5LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZbMF0gJiYgdlswXS5kb3NlQW5kUmF0ZSAmJiBhcmdzWzBdID09PSAncmF0ZVF1YW50aXR5VW5pdCcpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB2WzBdLmRvc2VBbmRSYXRlWzBdLnJhdGVRdWFudGl0eS51bml0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZbMF0gJiYgdlswXS5tYXhEb3NlUGVyQWRtaW5pc3RyYXRpb24gJiYgYXJnc1swXSA9PT0gJ21heERvc2VWYWx1ZScpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB2WzBdLm1heERvc2VQZXJBZG1pbmlzdHJhdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2WzBdICYmIHZbMF0ubWF4RG9zZVBlckFkbWluaXN0cmF0aW9uICYmIGFyZ3NbMF0gPT09ICdtYXhEb3NlVW5pdCcpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB2WzBdLm1heERvc2VQZXJBZG1pbmlzdHJhdGlvbi51bml0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZbMF0gJiYgYXJnc1swXSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdlswXS50ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIl19
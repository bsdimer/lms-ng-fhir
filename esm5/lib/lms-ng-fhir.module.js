/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FHIR_CONFIG } from './fhir/fhir-config';
import { FhirService } from './fhir/r4/fhir-service';
import { FhirAdvancedService } from './fhir/r4/fhir-advanced.service';
import { FhirAddressLineExtract } from './fhir/r4/fhir-pipes/fhir-address-line-extract.pipe';
import { FhirContactExtractPipe } from './fhir/r4/fhir-pipes/fhir-contact-extract.pipe';
import { FhirDosageExctractPipe } from './fhir/r4/fhir-pipes/fhir-dosage-exctract.pipe';
import { FhirEmailExtractPipe } from './fhir/r4/fhir-pipes/fhir-email-extract.pipe';
import { FhirNameExtractPipe } from './fhir/r4/fhir-pipes/fhir-patient-name-extract.pipe';
import { FhirTelecomPhoneExtract } from './fhir/r4/fhir-pipes/fhir-telecom-phone-extract.pipe';
import { FhirTelecomWebExtractPipe } from './fhir/r4/fhir-pipes/fhir-telecom-web-extract.pipe';
import { CommonModule } from '@angular/common';
var LmsNgFhirModule = /** @class */ (function () {
    function LmsNgFhirModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    LmsNgFhirModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return (/** @type {?} */ ({
            ngModule: LmsNgFhirModule,
            providers: [
                FhirService,
                FhirAdvancedService,
                {
                    provide: FHIR_CONFIG,
                    useValue: config,
                },
            ],
        }));
    };
    LmsNgFhirModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        FhirAddressLineExtract,
                        FhirContactExtractPipe,
                        FhirDosageExctractPipe,
                        FhirEmailExtractPipe,
                        FhirNameExtractPipe,
                        FhirTelecomPhoneExtract,
                        FhirTelecomWebExtractPipe,
                    ],
                    imports: [
                        CommonModule,
                    ],
                    exports: [
                        FhirAddressLineExtract,
                        FhirContactExtractPipe,
                        FhirDosageExctractPipe,
                        FhirEmailExtractPipe,
                        FhirNameExtractPipe,
                        FhirTelecomPhoneExtract,
                        FhirTelecomWebExtractPipe,
                    ],
                },] }
    ];
    return LmsNgFhirModule;
}());
export { LmsNgFhirModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG1zLW5nLWZoaXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvbG1zLW5nLWZoaXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUMsV0FBVyxFQUFhLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQzNGLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNEQUFzRCxDQUFDO0FBQzdGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG9EQUFvRCxDQUFDO0FBQzdGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUc3QztJQUFBO0lBd0NBLENBQUM7Ozs7O0lBZGlCLHVCQUFPOzs7O0lBQXJCLFVBQXNCLE1BQWtCO1FBRXBDLE9BQU8sbUJBQXFCO1lBQ3hCLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDUCxXQUFXO2dCQUNYLG1CQUFtQjtnQkFDbkI7b0JBQ0ksT0FBTyxFQUFFLFdBQVc7b0JBQ3BCLFFBQVEsRUFBRSxNQUFNO2lCQUNuQjthQUNKO1NBQ0osRUFBQSxDQUFDO0lBQ04sQ0FBQzs7Z0JBdkNKLFFBQVEsU0FBQztvQkFDRixZQUFZLEVBQUU7d0JBQ1Ysc0JBQXNCO3dCQUN0QixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIseUJBQXlCO3FCQUM1QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTtxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsc0JBQXNCO3dCQUN0QixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIseUJBQXlCO3FCQUM1QjtpQkFDSjs7SUFrQkwsc0JBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQWhCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZISVJfQ09ORklHLCBGaGlyQ29uZmlnfSBmcm9tICcuL2ZoaXIvZmhpci1jb25maWcnO1xuaW1wb3J0IHtGaGlyU2VydmljZX0gZnJvbSAnLi9maGlyL3I0L2ZoaXItc2VydmljZSc7XG5pbXBvcnQge0ZoaXJBZHZhbmNlZFNlcnZpY2V9IGZyb20gJy4vZmhpci9yNC9maGlyLWFkdmFuY2VkLnNlcnZpY2UnO1xuaW1wb3J0IHtGaGlyQWRkcmVzc0xpbmVFeHRyYWN0fSBmcm9tICcuL2ZoaXIvcjQvZmhpci1waXBlcy9maGlyLWFkZHJlc3MtbGluZS1leHRyYWN0LnBpcGUnO1xuaW1wb3J0IHtGaGlyQ29udGFjdEV4dHJhY3RQaXBlfSBmcm9tICcuL2ZoaXIvcjQvZmhpci1waXBlcy9maGlyLWNvbnRhY3QtZXh0cmFjdC5waXBlJztcbmltcG9ydCB7RmhpckRvc2FnZUV4Y3RyYWN0UGlwZX0gZnJvbSAnLi9maGlyL3I0L2ZoaXItcGlwZXMvZmhpci1kb3NhZ2UtZXhjdHJhY3QucGlwZSc7XG5pbXBvcnQge0ZoaXJFbWFpbEV4dHJhY3RQaXBlfSBmcm9tICcuL2ZoaXIvcjQvZmhpci1waXBlcy9maGlyLWVtYWlsLWV4dHJhY3QucGlwZSc7XG5pbXBvcnQge0ZoaXJOYW1lRXh0cmFjdFBpcGV9IGZyb20gJy4vZmhpci9yNC9maGlyLXBpcGVzL2ZoaXItcGF0aWVudC1uYW1lLWV4dHJhY3QucGlwZSc7XG5pbXBvcnQge0ZoaXJUZWxlY29tUGhvbmVFeHRyYWN0fSBmcm9tICcuL2ZoaXIvcjQvZmhpci1waXBlcy9maGlyLXRlbGVjb20tcGhvbmUtZXh0cmFjdC5waXBlJztcbmltcG9ydCB7RmhpclRlbGVjb21XZWJFeHRyYWN0UGlwZX0gZnJvbSAnLi9maGlyL3I0L2ZoaXItcGlwZXMvZmhpci10ZWxlY29tLXdlYi1leHRyYWN0LnBpcGUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cblxuQE5nTW9kdWxlKHtcbiAgICAgICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgICAgICBGaGlyQWRkcmVzc0xpbmVFeHRyYWN0LFxuICAgICAgICAgICAgRmhpckNvbnRhY3RFeHRyYWN0UGlwZSxcbiAgICAgICAgICAgIEZoaXJEb3NhZ2VFeGN0cmFjdFBpcGUsXG4gICAgICAgICAgICBGaGlyRW1haWxFeHRyYWN0UGlwZSxcbiAgICAgICAgICAgIEZoaXJOYW1lRXh0cmFjdFBpcGUsXG4gICAgICAgICAgICBGaGlyVGVsZWNvbVBob25lRXh0cmFjdCxcbiAgICAgICAgICAgIEZoaXJUZWxlY29tV2ViRXh0cmFjdFBpcGUsXG4gICAgICAgIF0sXG4gICAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgXSxcbiAgICAgICAgZXhwb3J0czogW1xuICAgICAgICAgICAgRmhpckFkZHJlc3NMaW5lRXh0cmFjdCxcbiAgICAgICAgICAgIEZoaXJDb250YWN0RXh0cmFjdFBpcGUsXG4gICAgICAgICAgICBGaGlyRG9zYWdlRXhjdHJhY3RQaXBlLFxuICAgICAgICAgICAgRmhpckVtYWlsRXh0cmFjdFBpcGUsXG4gICAgICAgICAgICBGaGlyTmFtZUV4dHJhY3RQaXBlLFxuICAgICAgICAgICAgRmhpclRlbGVjb21QaG9uZUV4dHJhY3QsXG4gICAgICAgICAgICBGaGlyVGVsZWNvbVdlYkV4dHJhY3RQaXBlLFxuICAgICAgICBdLFxuICAgIH0sXG4pXG5leHBvcnQgY2xhc3MgTG1zTmdGaGlyTW9kdWxlIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWc6IEZoaXJDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblxuICAgICAgICByZXR1cm4gPE1vZHVsZVdpdGhQcm92aWRlcnM+e1xuICAgICAgICAgICAgbmdNb2R1bGU6IExtc05nRmhpck1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIEZoaXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIEZoaXJBZHZhbmNlZFNlcnZpY2UsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiBGSElSX0NPTkZJRyxcbiAgICAgICAgICAgICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=
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
export class LmsNgFhirModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG1zLW5nLWZoaXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG1zLW5nLWZoaXIvIiwic291cmNlcyI6WyJsaWIvbG1zLW5nLWZoaXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUMsV0FBVyxFQUFhLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQzNGLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHNEQUFzRCxDQUFDO0FBQzdGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG9EQUFvRCxDQUFDO0FBQzdGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQTJCN0MsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBRWpCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBa0I7UUFFcEMsT0FBTyxtQkFBcUI7WUFDeEIsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNQLFdBQVc7Z0JBQ1gsbUJBQW1CO2dCQUNuQjtvQkFDSSxPQUFPLEVBQUUsV0FBVztvQkFDcEIsUUFBUSxFQUFFLE1BQU07aUJBQ25CO2FBQ0o7U0FDSixFQUFBLENBQUM7SUFDTixDQUFDOzs7WUF2Q0osUUFBUSxTQUFDO2dCQUNGLFlBQVksRUFBRTtvQkFDVixzQkFBc0I7b0JBQ3RCLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2Qix5QkFBeUI7aUJBQzVCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxzQkFBc0I7b0JBQ3RCLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2Qix5QkFBeUI7aUJBQzVCO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RkhJUl9DT05GSUcsIEZoaXJDb25maWd9IGZyb20gJy4vZmhpci9maGlyLWNvbmZpZyc7XG5pbXBvcnQge0ZoaXJTZXJ2aWNlfSBmcm9tICcuL2ZoaXIvcjQvZmhpci1zZXJ2aWNlJztcbmltcG9ydCB7RmhpckFkdmFuY2VkU2VydmljZX0gZnJvbSAnLi9maGlyL3I0L2ZoaXItYWR2YW5jZWQuc2VydmljZSc7XG5pbXBvcnQge0ZoaXJBZGRyZXNzTGluZUV4dHJhY3R9IGZyb20gJy4vZmhpci9yNC9maGlyLXBpcGVzL2ZoaXItYWRkcmVzcy1saW5lLWV4dHJhY3QucGlwZSc7XG5pbXBvcnQge0ZoaXJDb250YWN0RXh0cmFjdFBpcGV9IGZyb20gJy4vZmhpci9yNC9maGlyLXBpcGVzL2ZoaXItY29udGFjdC1leHRyYWN0LnBpcGUnO1xuaW1wb3J0IHtGaGlyRG9zYWdlRXhjdHJhY3RQaXBlfSBmcm9tICcuL2ZoaXIvcjQvZmhpci1waXBlcy9maGlyLWRvc2FnZS1leGN0cmFjdC5waXBlJztcbmltcG9ydCB7RmhpckVtYWlsRXh0cmFjdFBpcGV9IGZyb20gJy4vZmhpci9yNC9maGlyLXBpcGVzL2ZoaXItZW1haWwtZXh0cmFjdC5waXBlJztcbmltcG9ydCB7Rmhpck5hbWVFeHRyYWN0UGlwZX0gZnJvbSAnLi9maGlyL3I0L2ZoaXItcGlwZXMvZmhpci1wYXRpZW50LW5hbWUtZXh0cmFjdC5waXBlJztcbmltcG9ydCB7RmhpclRlbGVjb21QaG9uZUV4dHJhY3R9IGZyb20gJy4vZmhpci9yNC9maGlyLXBpcGVzL2ZoaXItdGVsZWNvbS1waG9uZS1leHRyYWN0LnBpcGUnO1xuaW1wb3J0IHtGaGlyVGVsZWNvbVdlYkV4dHJhY3RQaXBlfSBmcm9tICcuL2ZoaXIvcjQvZmhpci1waXBlcy9maGlyLXRlbGVjb20td2ViLWV4dHJhY3QucGlwZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuXG5ATmdNb2R1bGUoe1xuICAgICAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgICAgIEZoaXJBZGRyZXNzTGluZUV4dHJhY3QsXG4gICAgICAgICAgICBGaGlyQ29udGFjdEV4dHJhY3RQaXBlLFxuICAgICAgICAgICAgRmhpckRvc2FnZUV4Y3RyYWN0UGlwZSxcbiAgICAgICAgICAgIEZoaXJFbWFpbEV4dHJhY3RQaXBlLFxuICAgICAgICAgICAgRmhpck5hbWVFeHRyYWN0UGlwZSxcbiAgICAgICAgICAgIEZoaXJUZWxlY29tUGhvbmVFeHRyYWN0LFxuICAgICAgICAgICAgRmhpclRlbGVjb21XZWJFeHRyYWN0UGlwZSxcbiAgICAgICAgXSxcbiAgICAgICAgaW1wb3J0czogW1xuICAgICAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBdLFxuICAgICAgICBleHBvcnRzOiBbXG4gICAgICAgICAgICBGaGlyQWRkcmVzc0xpbmVFeHRyYWN0LFxuICAgICAgICAgICAgRmhpckNvbnRhY3RFeHRyYWN0UGlwZSxcbiAgICAgICAgICAgIEZoaXJEb3NhZ2VFeGN0cmFjdFBpcGUsXG4gICAgICAgICAgICBGaGlyRW1haWxFeHRyYWN0UGlwZSxcbiAgICAgICAgICAgIEZoaXJOYW1lRXh0cmFjdFBpcGUsXG4gICAgICAgICAgICBGaGlyVGVsZWNvbVBob25lRXh0cmFjdCxcbiAgICAgICAgICAgIEZoaXJUZWxlY29tV2ViRXh0cmFjdFBpcGUsXG4gICAgICAgIF0sXG4gICAgfSxcbilcbmV4cG9ydCBjbGFzcyBMbXNOZ0ZoaXJNb2R1bGUge1xuXG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZzogRmhpckNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXG4gICAgICAgIHJldHVybiA8TW9kdWxlV2l0aFByb3ZpZGVycz57XG4gICAgICAgICAgICBuZ01vZHVsZTogTG1zTmdGaGlyTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgRmhpclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgRmhpckFkdmFuY2VkU2VydmljZSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IEZISVJfQ09ORklHLFxuICAgICAgICAgICAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==
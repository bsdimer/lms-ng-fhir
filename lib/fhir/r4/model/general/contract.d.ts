import { DomainResource } from '../domain-resource';
import { Attachment, CodeableConcept, Coding, Identifier, Money, Period, Quantity, Reference, SimpleQuantity } from '..';
import { Timing } from '../timing';
import { Annotation } from '../workflow';
import { Signature } from '../signature';
export declare class Contract extends DomainResource {
    resourceType: string;
    identifier?: Identifier[];
    url?: string;
    version?: string;
    status?: 'amended' | 'appended' | 'cancelled' | 'disputed' | 'entered-in-error' | 'executable' | 'executed' | 'negotiable' | 'offered' | 'policy' | 'rejected' | 'renewed' | 'revoked' | 'resolved' | 'terminated';
    legalState?: CodeableConcept;
    instantiatesCanonical?: Reference;
    instantiatesUri?: string;
    contentDerivative?: CodeableConcept;
    issued?: Date;
    applies?: Period;
    expirationType?: CodeableConcept;
    subject?: Reference[];
    authority?: Reference[];
    domain?: Location[];
    site?: Location[];
    name?: string;
    title?: string;
    subtitle?: string;
    alias?: string[];
    author?: Reference;
    scope?: CodeableConcept;
    topicCodeableConcept?: CodeableConcept;
    topicReference?: Reference;
    type?: CodeableConcept;
    subType?: CodeableConcept[];
    contentDefinition?: {
        type: CodeableConcept;
        subType?: CodeableConcept;
        publisher?: Reference;
        publicationDate?: Date;
        publicationStatus: 'amended' | 'appended' | 'cancelled' | 'disputed' | 'entered-in-error' | 'executable' | 'executed' | 'negotiable' | 'offered' | 'policy' | 'rejected' | 'renewed' | 'revoked' | 'resolved' | 'terminated';
        copyright?: string;
    };
    term?: {
        identifier?: Identifier;
        issued?: Date;
        applies?: Period;
        topicCodeableConcept?: CodeableConcept;
        topicReference?: Reference;
        type?: CodeableConcept;
        subType?: CodeableConcept;
        text?: string;
        securityLabel?: {
            number?: number[];
            classification: Coding;
            category?: Coding;
            control?: Coding[];
        }[];
        offer: {
            identifier?: Identifier[];
            party?: {
                reference: Reference[];
                role: CodeableConcept;
            }[];
            topic?: Reference;
            type?: CodeableConcept;
            decision?: CodeableConcept;
            decisionMode?: CodeableConcept[];
            answer?: {
                valueBoolean: boolean;
                valueDecimal: number;
                valueInteger: number;
                valueDate: Date;
                valueDateTime: Date;
                valueTime: Date;
                valueString: string;
                valueUri: string;
                valueAttachment: Attachment;
                valueCoding: Coding;
                valueQuantity: Quantity;
                valueReference: Reference;
            }[];
            text?: string;
            linkId?: string[];
            securityLabelNumber?: number[];
        };
        asset?: {
            scope?: CodeableConcept;
            type?: CodeableConcept[];
            typeReference?: Reference[];
            subtype?: CodeableConcept[];
            relationship?: Coding;
            context?: {
                reference?: Reference;
                code?: CodeableConcept[];
                text?: string;
            }[];
            condition?: string;
            periodType?: CodeableConcept[];
            period?: Period[];
            usePeriod?: Period[];
            text?: string;
            linkId?: string[];
            answer?: Reference[];
            securityLabelNumber?: number[];
            valuedItem?: {
                entityCodeableConcept?: CodeableConcept;
                entityReference?: Reference;
                identifier?: Identifier;
                effectiveTime?: Date;
                quantity?: SimpleQuantity;
                unitPrice?: Money;
                factor?: number;
                points?: number;
                net?: Money;
                payment?: string;
                paymentDate?: Date;
                responsible?: Reference;
                recipient?: Reference;
                linkId?: string[];
                securityLabelNumber?: number[];
            }[];
        }[];
        action?: {
            doNotPerform?: boolean;
            type: CodeableConcept;
            subject?: {
                reference: Reference[];
                role?: CodeableConcept;
            }[];
            intent: CodeableConcept;
            linkId?: string[];
            status: CodeableConcept;
            context?: Reference;
            contextLinkId?: string[];
            occurrenceDateTime?: Date;
            occurrencePeriod?: Period;
            occurrenceTiming?: Timing;
            requester?: Reference[];
            requesterLinkId?: string[];
            performerType?: CodeableConcept[];
            performerRole?: CodeableConcept;
            performer?: Reference;
            performerLinkId?: string[];
            reasonCode?: CodeableConcept[];
            reasonReference?: Reference[];
            reason?: string[];
            reasonLinkId?: string[];
            note?: Annotation[];
            securityLabelNumber?: number[];
        }[];
        group?: Reference[];
    }[];
    supportingInfo?: Reference[];
    relevantHistory?: Reference[];
    signer?: {
        type: Coding;
        party: Reference;
        signature: Signature[];
    }[];
    friendly?: {
        contentAttachment: Attachment;
        contentReference: Reference;
    }[];
    legal?: {
        contentAttachment: Attachment;
        contentReference: Reference;
    }[];
    rule?: {
        contentAttachment: Attachment;
        contentReference: Reference;
    }[];
    legallyBindingAttachment?: Attachment;
    legallyBindingReference?: Reference;
}

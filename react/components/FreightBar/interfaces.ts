interface MarketingData {
    coupon: string;
    utmCampaign: string;
    utmMedium: string;
    utmSource: string;
    utmiCampaign: string;
    utmiPart: string;
    utmiPage: string;
    __typename: string;
}

interface Validator {
    regex: string;
    mask: string;
    cardCodeRegex: string;
    cardCodeMask: string;
    weights: number[];
    useCvv: boolean;
    useExpirationDate: boolean;
    useCardHolderName: boolean;
    useBillingAddress: boolean;
    __typename: string;
}

interface PaymentSystem {
    id: string;
    name: string;
    groupName: string;
    validator: Validator;
    stringId: string;
    requiresDocument: boolean;
    isCustom: boolean;
    description?: any;
    requiresAuthentication: boolean;
    dueDate: Date;
    __typename: string;
}

interface Installment {
    count: number;
    hasInterestRate: boolean;
    interestRate: number;
    value: number;
    total: number;
    __typename: string;
}

interface InstallmentOption {
    paymentSystem: string;
    installments: Installment[];
    __typename: string;
}

interface PaymentData {
    paymentSystems: PaymentSystem[];
    payments: any[];
    installmentOptions: InstallmentOption[];
    availableAccounts: any[];
    isValid: boolean;
    __typename: string;
}

interface Messages {
    couponMessages: any[];
    generalMessages: any[];
    __typename: string;
}

interface Shipping {
    countries: any[];
    availableAddresses: any[];
    selectedAddress?: any;
    deliveryOptions: any[];
    pickupOptions: any[];
    isValid: boolean;
    __typename: string;
}

interface ClientProfileData {
    email: string;
    firstName?: any;
    lastName?: any;
    document?: any;
    documentType?: any;
    phone?: any;
    isValid: boolean;
    __typename: string;
}

interface ClientPreferencesData {
    locale: string;
    optInNewsletter?: any;
    __typename: string;
}

export interface IOrderForm {
    id: string;
    items: any[];
    value: number;
    totalizers: any[];
    marketingData: MarketingData;
    canEditData: boolean;
    loggedIn: boolean;
    paymentData: PaymentData;
    messages: Messages;
    shipping: Shipping;
    userProfileId: string;
    userType: string;
    clientProfileData: ClientProfileData;
    clientPreferencesData: ClientPreferencesData;
    allowManualPrice: boolean;
    __typename: string;
}
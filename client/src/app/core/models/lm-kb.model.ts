import { AppFormFieldModel } from '@shared/models/app-form.model'

interface LmKBBaseModel {
  name: string
  email: string
}

export interface LmKBAccountRequestModel extends LmKBBaseModel {
  company: string
  country: string
  externalKey: string
  currency: string
}

export interface LmKBPlanModel {
  product: string,
  plan: string,
  priceList: string,
  finalPhaseBillingPeriod: string,
  finalPhaseRecurringPrice: {
    currency: string,
    value: number
  }[]

}

export interface LmKBAccountModel {
  accountId: string,
  name: string,
  firstNameLength: number,
  externalKey: string,
  email: string,
  billCycleDayLocal: number,
  currency: string,
  parentAccountId: string,
  isPaymentDelegatedToParent: boolean,
  paymentMethodId: string,
  referenceTime: string,
  timeZone: string,
  address1: string,
  address2: string,
  postalCode: string,
  company: string,
  city: string,
  state: string,
  country: string,
  locale: string,
  phone: number,
  notes: string,
  isMigrated: boolean,
  accountBalance: string,
  accountCBA: string,
  auditLogs: string[]
}

export interface LmKBPaymentMethodModel {
  paymentMethodId: string,
  externalKey: string,
  accountId: string,
  isDefault: boolean,
  pluginName: string,
  pluginInfo: string,
  auditLogs: string[]
}
export interface LmCardModel {
  exp_month: AppFormFieldModel,
  exp_year: AppFormFieldModel,
  number: AppFormFieldModel,
  cvc: AppFormFieldModel,
  name: AppFormFieldModel,
  address_line1?: AppFormFieldModel,
  address_line2?: AppFormFieldModel,
  address_city?: AppFormFieldModel,
  address_state?: AppFormFieldModel,
  address_zip?: AppFormFieldModel,
  address_country?: AppFormFieldModel
}

export interface LmInvoiceModel {
  accountId: string,
  amount: number,
  auditLogs: string[],
  balance: number,
  bundleKeys: string,
  creditAdj: number,
  credits: any,
  currency: string,
  invoiceDate: string,
  invoiceId: string,
  invoiceNumber: number,
  isParentInvoice: boolean,
  items: {
    accountId: string,
    amount: number,
    auditLogs: []
    bundleId: string,
    catalogEffectiveDate: string,
    childAccountId: string,
    childItems: any,
    currency: string,
    description: string,
    endDate: string,
    invoiceId: string,
    invoiceItemId: string,
    itemDetails: string,
    itemType: string,
    linkedInvoiceItemId: string,
    phaseName: string,
    planName: string,
    prettyPhaseName: string,
    prettyPlanName: string,
    prettyProductName: string,
    prettyUsageName: null
    productName: string,
    quantity: number,
    rate: number,
    startDate: string,
    subscriptionId: string,
    usageName: string
  }[],
  parentAccountId: string,
  parentInvoiceId: string,
  refundAdj: number,
  status: string,
  targetDate: string,
  trackingIds: string[]
}

// export interface LmKBAccountRequestModel extends LmKBAccountRequestBaseModel {
//   id: string
// }

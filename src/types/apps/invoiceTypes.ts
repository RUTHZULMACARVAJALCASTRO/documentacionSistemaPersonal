export type InvoiceStatus = 'Paid' | string

export type InvoiceLayoutProps = {
  id: string | undefined
}

export type InvoiceClientType = {
  _id: string
  name: string
  lastName: string
  ci: string
  email: string
  phone: string
  direction: string
  nationality: string
}

export type InvoiceType = {
  /* id: number
  name: string
  total: number
  avatar: string
  service: string
  dueDate: string
  address: string
  company: string
  country: string
  contact: string
  avatarColor?: string
  issuedDate: string
  companyEmail: string
  balance: string | number
  invoiceStatus: InvoiceStatus */

}

export type InvoicePaymentType = {
  iban: string
  totalDue: string
  bankName: string
  country: string
  swiftCode: string
}

export type SingleInvoiceType = {
  invoice: InvoiceType
  paymentDetails: InvoicePaymentType
}

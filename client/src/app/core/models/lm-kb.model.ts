interface LmKBBaseModel {
  name: string
  email: string
}

interface LmKBAccountRequestBaseModel extends LmKBBaseModel {
  company: string
  country: string
  externalKey: string
  currency: string
}

export interface LmKBAccountRequestModel extends LmKBAccountRequestBaseModel {
  id: string
}

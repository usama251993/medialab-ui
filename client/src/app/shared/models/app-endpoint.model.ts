import { HttpErrorResponse } from '@angular/common/http'

// export interface AppEndpointURLModel {
//   PROTOCOL: string
//   DOMAIN: string
//   CONTEXT: {
//     ROOT: string                            // Express
//     WSO2: string                            // WSO2
//     KB: string                              // Killbill
//     DEDUP: string                           // Content-Aware Deduplication
//     PHASH: string                           // Perceptual Hashing
//     STRIPE: string                          // Stripe
//     MAIL: string                            // Nodemailer
//   }
//   ENDPOINT: {
//     WSO2: {
//       [key: string]: string                 // Routes for WSO2
//     }
//     KB: {
//       [key: string]: string                 // Routes for Killbill
//     }
//     DEDUP: {
//       [key: string]: string                 // Routes for Content-Aware Deduplication
//     }
//     PHASH: {
//       [key: string]: string                 // Routes for Perceptual Hashing
//     }
//     STRIPE: {
//       [key: string]: string                 // Routes for STRIPE
//     }
//     MAIL: {
//       [key: string]: string
//     }
//   }
// }

export interface AppEndpointRequestModel {
  headers: { [key: string]: string | number | boolean } | null
  auth: {
    username: string
    password?: string
  } | null
  params: { [key: string]: string | number | boolean } | null
  data: { [key: string]: string | number | boolean } | null
  route: string | null
}

export interface AppEndpointResponseModel<T> {
  status: number
  data: T | null
  error: any | null | HttpErrorResponse
}

export const INITIAL_ENDPOINT_REQUEST: AppEndpointRequestModel = {
  headers: { foo: null }, auth: { username: null, password: null }, params: { bar: null }, data: { baz: null }, route: null
}

export const INITIAL_ENDPOINT_RESPONSE: AppEndpointResponseModel<{}> = {
  status: 0, data: null, error: null
}

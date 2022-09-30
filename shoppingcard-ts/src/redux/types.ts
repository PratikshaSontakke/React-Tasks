export const LOADING_DATA = 'LOADING_DATA'
export const LOADING = 'LOADING'
export const SET_ERROR = 'SET_ERROR'
export const SET_PRODUCTS = 'SET_PRODUCTS'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const SET_CART = 'SET_CART'

export interface ProductType {
  image: string
  id: number
  title: string
  description: string
  price: string
}

interface LoadingData {
  type: typeof LOADING_DATA
}

interface Loading {
  type: typeof LOADING
}

interface SetError {
  type: typeof SET_ERROR
  payload: string
}

interface SetProducts {
  type: typeof SET_PRODUCTS
  payload: ProductType[]
}

interface DeleteProduct {
  type: typeof DELETE_PRODUCT
  payload: number
}

interface AddProduct {
  type: typeof ADD_PRODUCT
  payload: ProductType
}

interface SetCart {
  type: typeof SET_CART
  payload: ProductType
}

export type DispatchTypes =
  | LoadingData
  | Loading
  | SetError
  | SetProducts
  | DeleteProduct
  | AddProduct
  | SetCart

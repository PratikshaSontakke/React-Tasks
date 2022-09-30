import {
  LOADING_DATA,
  SET_ERROR,
  SET_PRODUCTS,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  DispatchTypes,
  ProductType,
  SET_CART
} from '../types'
import axios from 'axios'
import { Dispatch } from 'react'

export const getProducts = () => async (dispatch: Dispatch<DispatchTypes>) => {
  dispatch({ type: LOADING_DATA })
  try {
    const res = await axios.get('https://fakestoreapi.com/products')
    dispatch({ type: SET_PRODUCTS, payload: res.data })
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: (error as any).response.data.error
    })
  }
}

export const deleteProduct = (id: number) => (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({ type: DELETE_PRODUCT, payload: id })
}

export const addProduct = (product: ProductType) => (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({ type: ADD_PRODUCT, payload: product })
}

export const setCart = (product: ProductType) => (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({ type: SET_CART, payload: product })
}

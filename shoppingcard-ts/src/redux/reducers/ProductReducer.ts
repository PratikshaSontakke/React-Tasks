import {
  LOADING_DATA,
  SET_PRODUCTS,
  DELETE_PRODUCT,
  SET_ERROR,
  ADD_PRODUCT,
  ProductType,
  DispatchTypes,
  SET_CART
} from './../types'

interface InitialState {
  loading: boolean
  products: ProductType[]
  //product: ProductType[]
  cart: ProductType[]
  error?: string
}

const initialState: InitialState = {
  loading: false,
  products: [],
  error: '',
  // product: [],
  cart: []
}
const productReducer = (
  state: InitialState = initialState,
  action: DispatchTypes
) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      }

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id != action.payload)
      }

    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products]
      }

    case SET_CART:
      // const prodIndexCart = state.cart?.findIndex(
      //   product => product.id === action.payload.id
      // )

      // if (prodIndexCart >= 0) {
      //   const updatedCart = state.cart
      //   updatedCart.splice(prodIndexCart, 1)
      //   return {
      //     ...state,
      //     cart: updatedCart
      //   }
      // }
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }

    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default productReducer

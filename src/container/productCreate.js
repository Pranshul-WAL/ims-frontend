import ProductCreate from '../components/productCreate';
import { connect } from 'react-redux';
import { createProduct } from '../api/products';
import Swal from 'sweetalert2'

const MapStateToProps = (state) => {
    return {
        isLoading: state.productCreate.isLoading,
        productName: state.productCreate.productName,
        salePrice: state.productCreate.salePrice,
        productDescription: state.productCreate.productDescription,
        Quantity: state.productCreate.Quantity
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        getProductname: (value) => dispatch({ type: 'GET_PRODUCT_NAME', payload: value }),
        getSalePrice: (value) => dispatch({ type: 'GET_SALE_PRICE', payload: value }),
        getProductDescription: (value) => dispatch({ type: 'GET_DESCRIPTION', payload: value }),
        getQuantity: (value) => dispatch({ type: 'GET_QUANTITY', payload: value }),
        createProduct: (productName, salePrice, productDescription, Quantity) => {
            (async () => {
                try {
                    dispatch({ type: 'SET_LOADING', payload: true })

                    await createProduct(productName, salePrice, productDescription, Quantity)
                    Swal.fire({
                        position: 'top-end',
                        type: 'success',
                        title: 'Product has been added',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    localStorage.setItem('isProductCreate',true)
                    dispatch({ type: 'CLEAR_FORM' })

                    dispatch({ type: 'SET_LOADING', payload: false })
                } catch (e) {
                    console.log(e)
                }
            })()
        }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(ProductCreate);
import ProductUpdate from '../../components/products/productUpdate';
import {connect} from 'react-redux';
import { updateProduct } from '../../api/products';
import Swal from 'sweetalert2'


const MapStateToProps=(state)=>{
    return{
        isLoading:state.productUpdate.isLoading,
        productName:state.productUpdate.productName,
        salePrice:state.productUpdate.salePrice, 
        productDescription:state.productUpdate.productDescription,
        quantity: state.productUpdate.quantity
    }
}

const MapDispatchToProps=(dispatch)=>{
    return{
        getProductname:(value)=>dispatch({type:'UGET_PRODUCT_NAME',payload:value}),
        getSalePrice:(value)=>dispatch({type:'UGET_SALE_PRICE',payload:value}),
        getProductDescription:(value)=>dispatch({type:'UGET_DESCRIPTION', payload:value}),
        getUpdateQuantity:(value)=>dispatch({type:'UGET_UPDATE_QUANTITY',payload:value}),
        updateProduct:(productName,salePrice,productDescription,Quantity,productId)=>{

            (async() => {
                try{
                    dispatch({type:'SET_LOADING', payload:true})
                    const Id = JSON.parse(localStorage.getItem('userId'));
                    await updateProduct(productName,salePrice,productDescription,Quantity,productId, Id);
                    Swal.fire({
                        position: 'top-end',
                        type: 'success',
                        title: 'Product has been updated',
                        showConfirmButton: false,
                        timer: 1500
                      })
                   
                    localStorage.setItem('isProductUpdate',true)
    
                    dispatch({type: 'SET_LOADING', payload: false})
                } catch(e) {
                    console.log(e)
                }
            })()
        }
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(ProductUpdate);
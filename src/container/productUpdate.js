import ProductUpdate from '../components/productUpdate';
import {connect} from 'react-redux';
import { updateProduct } from '../api/products';


const MapStateToProps=(state)=>{
    return{
        isLoading:state.productCreate.isLoading,
        productName:state.productCreate.productName,
        salePrice:state.productCreate.salePrice, 
        productDescription:state.productCreate.productDescription,
        Quantity:state.productCreate.Quantity
    }
}

const MapDispatchToProps=(dispatch)=>{
    return{
        getProductname:(value)=>dispatch({type:'GET_PRODUCT_NAME',payload:value}),
        getSalePrice:(value)=>dispatch({type:'GET_SALE_PRICE',payload:value}),
        getProductDescription:(value)=>dispatch({type:'GET_DESCRIPTION', payload:value}),
        getQuantity:(value)=>dispatch({type:'GET_QUANTITY',payload:value}),
        updateProduct:(productName,salePrice,productDescription,Quantity)=>{

            (async() => {
                try{
                    dispatch({type:'SET_LOADING', payload:true})
    
                    await updateProduct(productName,salePrice,productDescription,Quantity)
                   
                    
    
                    dispatch({type: 'SET_LOADING', payload: false})
                } catch(e) {
                    console.log(e)
                }
            })()
        }
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(ProductUpdate);
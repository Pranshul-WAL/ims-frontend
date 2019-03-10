import ProductList from '../components/productList';
import {connect} from 'redux';
import {listProducts} from '../api/products'

const MapStateToPrpos=(state)=>{
    return{
        isLoading:state.ProductList.isLoading,
        productDetails:state.ProductList.productDetails
    }
}

const MapDispatchToProps=(dispatch)=>{
    return{
        fetchProducts:()=>{
            (async()=>{
                dispatch({type:'SET_LOADING', payload:true});
                let response= await listProducts();
                dispatch({type:'SET_PRODUCT_DETAILS', payload:response.data});
                dispatch({type:'SET_LOADING',payload:false});
            })
        }
    }
}

export default connect(MapStateToPrpos,MapDispatchToProps)(ProductList);
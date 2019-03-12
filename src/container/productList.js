import ProductList from '../components/productList';
import {connect} from 'react-redux';
import {listProducts} from '../api/products'

const MapStateToPrpos=(state)=>{
    return{
        isLoading:state.productList.isLoading,
        productDetails:state.productList.productDetails
    }
}

const MapDispatchToProps=(dispatch)=>{
    return{
        fetchProducts:()=>{
            (async()=>{
                dispatch({type:'SET_LOADING', payload:true});
                let response= await listProducts();
                dispatch({type:'SET_PRODUCT_DETAILS', payload:response.data.products});
                dispatch({type:'SET_LOADING',payload:false});
            })()
        }
    }
}

export default connect(MapStateToPrpos,MapDispatchToProps)(ProductList);
import OrderCreate from '../components/createOrder';
import {connect} from 'react-redux';

const MapStateToProps=(state)=>{
    return{
        // user:state.user.user,
        productName:state.order.productName,
        productId:state.order.productId,
        Quantity:state.order.Quantity
    }
}

const MapDispatchToProps=(dispatch)=>{
    return{
        getProductname:(value)=>dispatch({type:'GET_PRODUCT_NAME',payload:value}),
        getProductId:(value)=>dispatch({type:'GET_PRODUCT_ID', payload:value}),
        getQuantity:(value)=>dispatch({type:'GET_QUANTITY',payload:value}),
      

    }
}

export default connect(MapStateToProps,MapDispatchToProps)(OrderCreate);
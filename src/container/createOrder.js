import OrderCreate from '../components/createOrder';
import {connect} from 'react-redux';
import {newOrder} from '../api/order'

const MapStateToProps=(state)=>{
    return{
        // user:state.user.user,
        productName:state.order.productName,
        productId:state.order.productId,
        Quantity:state.order.Quantity,
        isLoading:state.order.isLoading
    }
}

const MapDispatchToProps=(dispatch)=>{
    return{
        getProductname:(value)=>dispatch({type:'GET_PRODUCT_NAME',payload:value}),
        getProductId:(value)=>dispatch({type:'GET_PRODUCT_ID', payload:value}),
        getQuantity:(value)=>dispatch({type:'GET_QUANTITY',payload:value}),
        createOrder:(productName,productId,Quantity)=>{
            (async()=>{
                try{
                    dispatch({type:'IS_LOADING',payload:true})
                    await newOrder(productName,productId,Quantity)
                    localStorage.setItem('isOrder',true)
                    dispatch({type:'CLEAR_FROM'})
                    dispatch({type:'IS_LOADING',payload:false})
                }catch(e){
                    console.log(e)
                }
            })()
        }

    }
}

export default connect(MapStateToProps,MapDispatchToProps)(OrderCreate);
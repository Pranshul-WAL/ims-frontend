import Multiple from '../../components/orders/mulltiple';
import {connect} from 'react-redux';
import {newOrder} from '../../api/order';
import { listProducts } from '../../api/products';
import {unionBy} from 'lodash';// createOrder:(productName,Quantity)=>{
    //     (async()=>{
    //         try{
    //             dispatch({type:'IS_LOADING',payload:true})
    //             await newOrder(productName,Quantity)
    //             localStorage.setItem('isOrder',true)
    //             dispatch({type:'CLEAR_FROM'})
    //             dispatch({type:'IS_LOADING',payload:false})
    //         }catch(e){
    //             console.log(e)
    //         }
    //     })()
    // },
import Swal from 'sweetalert2'

const MapStateToProps=(state)=>{
    return{
        // user:state.user.user,
        // productName:state.order.productName,
        Quantity:state.order.Quantity,
        isLoading:state.order.isLoading,
        productDetails:state.productList.productDetails,
        dropdownOpen:state.multiple.dropdownOpen,
        products:state.multiple.products
        
    }       
}

const MapDispatchToProps=(dispatch)=>{
    return{
        getProductname:(value)=>dispatch({type:'GET_PRODUCT_NAME',payload:value}),
        getOrderQuantity:(value)=>dispatch({type:'GET_ORDER_QUANTITY',payload:value}),
        createMultOrder:(products)=>(async()=>{
            try{
                dispatch({type:'IS_LOADING',payload:true})
                await newOrder(products)
                Swal.fire({
                    position: 'top-end',
                    type: 'success',
                    title: 'Order has been placed!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                localStorage.setItem('isOrder',true)
                dispatch({type:'CLEAR_FROM'})
                dispatch({type:'IS_LOADING',payload:false})
            }catch(e){
                console.log(e)
                    }
                })(),
        getMultiOrderQuantity:(productId, receivedQuantity, salePrice, productName)=>{
            dispatch((dispatch, getState) => {
                let newOrderArray
                let orderArray = getState().CreateMultOrder.products
                let newOrder = [{
                    productId,
                    Quantity: receivedQuantity.length ? Number(receivedQuantity) : 0,
                    salePrice,
                    productName
                }]
    
                if(orderArray.length) {
                    newOrderArray = unionBy(newOrder, orderArray, 'productId')
                    dispatch({type:'GET_MULTI_ORDER_QUANTITY',payload:newOrderArray})
                } else {
                    newOrderArray = newOrder
                    dispatch({type:'GET_MULTI_ORDER_QUANTITY',payload:newOrderArray})
                }
            })
        },
        resetQuantity:()=>dispatch({type:'RESET_QUANTITY'}),
        fetchProducts:()=>{
            (async()=>{
                dispatch({type:'SET_LOADING', payload:true});
                let response= await listProducts();
                dispatch({type:'SET_PRODUCT_DETAILS', payload:response.data.products});
                dispatch({type:'SET_LOADING',payload:false});
            })()
        },
        toggleDropDown:()=>{
            dispatch({
                type:'CREATE_MULT_ORDERS'
            })
        }

    }
}

export default connect(MapStateToProps,MapDispatchToProps)(Multiple);

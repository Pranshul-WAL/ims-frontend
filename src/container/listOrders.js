import orders from '../component/listOrders';
import {connect} from 'react-redux';

import listOrders from '../api/listOrders';


const MapStateToProps = (state) => {
    return {
        isLoading: state.listOrders.isLoading,
        orders: state.listOrders.orders,
    }
}

const  MapDispatchToProps = (dispatch) => {
    return {
        fetchOrders : () => {
           (async() => {
               dispatch({type:'ISLOADING', payload: true });
               let response = await listOrders();
               dispatch({type:'LISTORDERS', payload: response.data});
               dispatch({type:'ISLOADING', payload: false});
            })()
        }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(orders);
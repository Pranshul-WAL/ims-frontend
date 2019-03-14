import listOrders from '../components/listOrders';
import {connect} from 'react-redux';

import {listOrder} from '../api/listOrders';


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
               let response = await listOrder();
               dispatch({type:'LISTORDERS', payload: response.data});
               dispatch({type:'ISLOADING', payload: false});
            })()
        }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(listOrders);
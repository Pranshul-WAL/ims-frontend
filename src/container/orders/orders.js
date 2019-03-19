import Orders from '../../components/orders/orders';
import { connect } from 'react-redux';
import {listOrders} from '../../api/listOrders';


const MapStateToProps = (state) => {
    return {
    isLoading: state.orders.isLoading,
    orders: state.orders.orders,
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: () => {
            (async () => {
                dispatch({
                    type: 'SET_LOADING',
                    payload: true
                });
                let response = await listOrders();
                dispatch({
                    type: 'LIST_ORDERS',
                    payload: response.data.orders,
                });
                dispatch({
                    type: 'SET_LOADING',
                    payload: false
                });
            })()
        }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Orders);
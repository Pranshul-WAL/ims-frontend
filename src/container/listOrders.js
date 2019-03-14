import ListOrders from '../components/listOrders';
import { connect } from 'react-redux';

import { fetchOrders } from '../api/listOrders';


const MapStateToProps = (state) => {
    return {
        isLoading: state.listOrders.isLoading,
        orders: state.listOrders.orders,
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        fetchOrders:() => {
            (async () => {
                dispatch({
                    type: 'ISLOADING',
                    payload: true
                });
                let response = await fetchOrders();
                dispatch({
                    type: 'LISTORDERS',
                    payload: response.data.allOrders
                });
                dispatch({
                    type: 'ISLOADING',
                    payload: false
                });
            })()
        }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(ListOrders);
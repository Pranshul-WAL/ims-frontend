import returns from '../component/listReturns';
import {connect} from 'react-redux';

import listReturns from '../api/listReturns';


const MapStateToProps = (state) => {
    return {
        isLoading: state.listReturns.isLoading,
        orders: state.listReturns.orders,
    }
}

const  MapDispatchToProps = (dispatch) => {
    return {
        fetchOrders : () => {
           (async() => {
               dispatch({type:'ISLOADING', payload: true });
               let response = await listReturns();
               dispatch({type:'LISTRETURNS', payload: response.data});
               dispatch({type:'ISLOADING', payload: false});
            })()
        }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(returns);

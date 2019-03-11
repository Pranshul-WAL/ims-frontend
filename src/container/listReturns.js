import ListReturn from '../component/listReturns';
import {connect} from 'react-redux';

import listReturn from '../api/listReturn';


const MapStateToProps = (state) => {
    return {
        isLoading: state.listReturns.isLoading,
        orders: state.listReturns.orders,
    }
}

const  MapDispatchToProps = (dispatch) => {
    return {
        fetchReturns : () => {
           (async() => {
               dispatch({type:'ISLOADING', payload: true });
               let response = await listReturn();
               dispatch({type:'LISTRETURNS', payload: response.data});
               dispatch({type:'ISLOADING', payload: false});
            })()
        }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(ListReturn);

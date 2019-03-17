import Inventory from '../components/listInventory';
import {connect} from 'react-redux';
// list user api from axios 
import {listInventory} from '../api/listInventory'

const MapStateToProps = (state) => {
    return {
        isLoading: state.listInventory.isLoading,
        inventory: state.listInventory.inventory,
    }
}
 const MapDispatchToProps = (dispatch) => {
     return {
         fetchInventory : () => {
            (async() => {
                dispatch({type:'ISLOADING', payload: true });
                let response = await listInventory();
                dispatch({type:'LISTINVENTORY', payload: response.data.allRecords});
                dispatch({type:'ISLOADING', payload: false});
             })()
         }
     }
 }

 export default connect(MapStateToProps, MapDispatchToProps)(Inventory);
import {listOrderItems} from '../api/listOrders';
import listItems from '../components/listItems';
import { connect } from 'react-redux';
import {pullAllWith, isEqual} from 'lodash'

const MapStateToProps = (state) => {
    return {
        isLoading: state.listItems.isLoading,
        items: state.listItems.items,
        returns: state.listItems.returns
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        fetchItems: (id) => {
            (async () => {
                dispatch({
                    type: 'SET_LOADING',
                    payload: true
                });
                let response = await listOrderItems(id);
                dispatch({
                    type: 'LIST_ITEMS',
                    payload: response.data.orders,
                });
                dispatch({
                    type: 'SET_LOADING',
                    payload: false
                });
            })()
        },
        addToReturn: (orderId, productId, productName, quantity, uniqueId) => {
            let newReturn = {
                orderId,
                quantity,
                productId,
                productName,
                uniqueId
            }

            dispatch({
                type: 'ADD_TO_RETURNS',
                payload: newReturn
            })
        },
        removeFromReturn: (orderId, productId, productName, quantity, uniqueId) => {
            dispatch((dispatch, getState) => {

                let returnsArray = getState().listItems.returns
                let removeReturn = {
                    orderId,
                    quantity,
                    productId,
                    productName,
                    uniqueId
                }

                let updatedReturns = pullAllWith(returnsArray, [removeReturn], isEqual)
    
                dispatch({
                    type: 'REMOVE_FROM_RETURNS',
                    payload: updatedReturns
                })
            })
        }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(listItems);


import React, { Component } from "react";
import { Table, Button } from 'reactstrap';
// import moment, { isDate } from 'moment';
import AdminPage from './adminPage';
import {pullAllWith, isEqual} from 'lodash';
import {Redirect} from 'react-router-dom';


class listItems extends Component {

    constructor(props) {
        super(props);

        this.state={
            returnProducts: []
        }

        this.handleAddToReturn = this.handleAddToReturn.bind(this)
        this.handleRemoveFromReturn = this.handleRemoveFromReturn.bind(this)
        this.handleFileReturn=this.handleFileReturn.bind(this)
    }

    componentDidMount() {
        this.props.fetchItems(this.props.match.params.id);
    }

    handleAddToReturn(orderId, productId, productName, orderQuantity, uniqueId) {
        this.props.addToReturn(orderId, productId, productName, orderQuantity, uniqueId)
        this.setState({
            returnProducts: [
                ...this.state.returnProducts,
                uniqueId
            ]
        })
    }

    handleRemoveFromReturn(orderId, productId, productName, orderQuantity, uniqueId) {
        this.props.removeFromReturn(orderId, productId, productName, orderQuantity, uniqueId)
        let updatedReturnArray = pullAllWith(this.state.returnProducts, [uniqueId], isEqual)
        this.setState({
            returnProducts: updatedReturnArray
        })
    }
    handleFileReturn(){
        this.props.fileReturn(this.props.returns)
    }

    render() {
        return (
            <AdminPage>
                <br></br>
                <h1 className="UserStyle user-style"> Order Items</h1>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product Id</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Return</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.items.map((items, index) => {
                                    return (
                                        <tr>
                                           <td>{this.props.items.indexOf(items) + 1}</td>
                                            <td>{items.productId}</td>
                                            <td>{items.productName}</td>
                                            <td>{items.orderQuantity}</td>
                                            <td>{items.isReturn ? 'Item Returned' : this.state.returnProducts.includes(index) ? <Button onClick={() => {this.handleRemoveFromReturn(items.orderId, items.productId, items.productName, items.orderQuantity, index)}}>Remove from return</Button> :<Button onClick={() => {this.handleAddToReturn(items.orderId, items.productId, items.productName, items.orderQuantity, index)}}>Add to return</Button>}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                       { this.state.returnProducts.length === 0 ? null : <Button color="danger"  onClick={this.handleFileReturn}>File Returns</Button>}
                    </div>
                </div>
                {localStorage.getItem('isReturn') ? <Redirect to='/listReturns' /> : null}
                {localStorage.removeItem('isReturn')}
            </AdminPage>
        );
    }
}

export default listItems;
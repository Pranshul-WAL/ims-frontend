import React, { Component } from "react";
import { Table, Button } from 'reactstrap';
// import moment, { isDate } from 'moment';
import AdminPage from './adminPage';
import {pullAllWith, isEqual} from 'lodash'


class listItems extends Component {

    constructor(props) {
        super(props);

        this.state={
            returnProducts: []
        }

        this.handleAddToReturn = this.handleAddToReturn.bind(this)
        this.handleRemoveFromReturn = this.handleRemoveFromReturn.bind(this)
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

    render() {
        return (
            <AdminPage>
                <br></br>
                <h1 className="UserStyle user-style"> Orders</h1>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <Table hover>
                            <thead>
                                <tr>
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
                                            <td>{items.productId}</td>
                                            <td>{items.productName}</td>
                                            <td>{items.orderQuantity}</td>
                                            <td>{this.state.returnProducts.includes(index) ? <Button onClick={() => {this.handleRemoveFromReturn(items.orderId, items.productId, items.productName, items.orderQuantity, index)}}>Remove from return</Button> :<Button onClick={() => {this.handleAddToReturn(items.orderId, items.productId, items.productName, items.orderQuantity, index)}}>Add to return</Button>}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                        <Button color="danger"  onClick="">File Returns</Button>
                    </div>
                </div>
            </AdminPage>
        );
    }
}

export default listItems;
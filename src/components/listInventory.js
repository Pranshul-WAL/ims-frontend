import React, { Component } from "react";
import { Table } from 'reactstrap';

class listInventory extends Component {

    componentDidMount() {
        this.props.fetchInventory();
    }
    render() {
        return (
            <Table hover>
                <thead>
                    <tr>
                        <th>ProductId</th>
                        <th>UserID</th>
                        <th>Time</th>
                        <th>Quantity</th>
                        <th>SalePrice</th>
                        <th>Return</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.inventory.map((inventory) => {
                        return (
                            <tr>
                                <td>{inventory.productId}</td>
                                <td>{inventory.userId}</td>
                                <td>{inventory.timeAt}</td>
                                <td>{inventory.quantity}</td>
                                <td>{inventory.salePrice}</td>
                                <td>{inventory.isReturn}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        );
    }
}

export default listInventory;

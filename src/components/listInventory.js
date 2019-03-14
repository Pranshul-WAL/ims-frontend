import React, { Component } from "react";
import { Table } from 'reactstrap';
import AdminPage from './adminPage';
class listInventory extends Component {

    componentDidMount() {
        this.props.fetchInventory();
    }
    render() {
        return (
            <AdminPage>
            <div class="row">
            <div class="col-sm-2">
            </div>
            <div class="col-sm-8">
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
                </div>
                </div>
            </Table>
            </AdminPage>
        );
    }
}

export default listInventory;

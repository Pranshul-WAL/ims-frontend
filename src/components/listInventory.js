import React, { Component } from "react";
import { Table } from 'reactstrap';
import AdminPage from './adminPage';
import moment from 'moment';
class listInventory extends Component {

    count;
    componentDidMount() {
        this.props.fetchInventory();
        this.count = 0;
    }
    render() {
        return (
            <AdminPage>
            <br></br>
            <h1 className="UserStyle user-style">History</h1>
            <div class="row">
            <div class="col-sm-2">
            </div>
            <div class="col-sm-8">
            <Table hover>
                <thead>
                    <tr>
                       <th>#</th>
                        <th>ProductId</th>
                        <th>UserID</th>
                        <th>Time</th>
                        <th>Quantity</th>
                        <th>SalePrice</th>
                        <th>Return</th>
                    </tr>
                </thead>
                <tbody>
                    {  this.props.inventory.map((inventory) => {
                        return (
                            <tr>
                               <td>{inventory.id}</td>
                                <td>{inventory.productId}</td>
                                <td>{inventory.userId}</td>
                                <td>{moment(inventory.timeAt).format('DD MMM YYYY, h:mm:ss a')}</td>
                                <td>{inventory.quantity}</td>
                                <td>{inventory.salePrice}</td>
                                <td>{inventory.isReturn ? 'TRUE' : 'FALSE'}</td>
                            </tr>
                        )
                    })}
                </tbody>
                </Table>
                </div>
                </div>
            
            </AdminPage>
        );
    }
}

export default listInventory;

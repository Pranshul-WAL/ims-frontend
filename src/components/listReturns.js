import React, { Component } from "react";
import { Table } from 'reactstrap';
import AdminPage from './adminPage';
import moment from 'moment';
class ListReturn extends Component {
    componentDidMount() {
        this.props.fetchReturns()
    }
    render() {
        return (
            <AdminPage>
            <br></br>
            <h1 className="UserStyle user-style"> Returns</h1>
            <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-8">
            <Table hover>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Placed On</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.returns.map((returns) =>{
                        return(
                         <tr>
                            <td>{returns.orderId}</td>
                            <td>{returns.productId}</td>
                            <td>{returns.productName}</td>
                            <td>{returns.quantity}</td>
                            <td>{moment(returns.date).format('DD MMM YYYY')}</td>
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

export default ListReturn;
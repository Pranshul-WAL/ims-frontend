import React, { Component } from "react";
import { Table } from 'reactstrap';
import moment from 'moment'
import AdminPage from './adminPage';
class ListOrders extends Component {
    componentDidMount() {
        this.props.fetchOrders()
    }

    render() {
        return (
            <AdminPage>
            <br></br>
            <h1 className="UserStyle user-style"> Orders</h1>
            <div className="row">
            <div className ="col-sm-2"></div>
            <div className="col-sm-8">
            <Table hover>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Return</th>
                        <th>Placed On</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.orders.map((orders)=> {
                    return orders.orderItems.map((element) => {
                        return(
                            <tr>
                                <td>{element.orderId}</td>
                                <td>{element.productId}</td>
                                <td>{element.productName}</td>
                                <td>{element.isReturn ? 'True' : 'False'}</td>
                                <td>{moment(element.createdAt).format('DD MMM YYYY')}</td>
                            </tr>
                        )
                    })
                })
            }
                </tbody>
            </Table>
            </div>
            </div>
            </AdminPage>
        );
    }
}

export default ListOrders;
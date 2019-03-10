import React,{Component} from 'react';
import {Table} from 'reactstrap';

class ProductList extends Component {
    componentDidMount(){
        this.props.fetchProducts();
    }
    render() {
        return (
            <div>
                <Table dark>
                    <thead>
                        <tr>
                            <th>ProductName</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {this.props.productDetails.map(productDetails=>(
                            <td>{productDetails}</td>
                            ))}
                        </tr>
                    </tbody>

                </Table>
            </div>
        );
    }
}

export default ProductList;
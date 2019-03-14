import React,{Component} from 'react';
import {Table,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import AdminPage from './adminPage';
class ProductList extends Component {
    constructor(props){
        super(props);
        this.deleteHandler=this.deleteHandler.bind(this);
    };
    deleteHandler(productId){
        this.props.deleteProduct(productId);
    }
    componentDidMount(){
        this.props.fetchProducts();
    }
    render() {
        return (
            <AdminPage>
            <br></br>
            <div class="row">
            <div class="col-sm-2">
            </div>
            <div class="col-sm-8">
                <Table hover  className="table-padding">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Sale Price</th>
                            <th>Product Description</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {this.props.productDetails.map((productDetails)=>{
                                return(
                                    <tr>
                                        <td>{productDetails.productName}</td>
                                        <td>{productDetails.salePrice}</td>
                                        <td>{productDetails.productDescription}</td>
                                        <td>{productDetails.Quantity}</td>
                                        <td><Button onClick={()=>{this.deleteHandler(productDetails.id)}}>Delete</Button></td>
                                        <td><Link to={`/updateProduct/${productDetails.id}`}>Update</Link></td>
                                    </tr>
                        )})
                    }
                    </tbody>

                </Table>
                </div>
            </div>
            </AdminPage>
        );
    }
}

export default ProductList;
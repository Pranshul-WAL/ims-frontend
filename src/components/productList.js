import React,{Component} from 'react';
import {Table, Button} from 'reactstrap';
import {Link } from 'react-router-dom';
class ProductList extends Component {
    constructor(props){
        super(props);
        this.deleteHandler=this.deleteHandler.bind(this);
    };
    deleteHandler(id){
        this.props.deleteProduct(id);
    }
    componentDidMount(){
        this.props.fetchProducts();
    }
    render() {
        return (
            <div>
                <Table dark>
                    <thead>
                        <tr>
                            <th>productName</th>
                            <th>salePrice</th>
                            <th>productDescription</th>
                            <th>Quantity</th>
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
                                        <td><Link to={`/update/${productDetails.id}`}>Update</Link></td>
                                    </tr>
                        )})
                    }
                    </tbody>

                </Table>
            </div>
        );
    }
}

export default ProductList;
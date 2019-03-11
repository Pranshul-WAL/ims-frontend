import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class ProductPage extends Component {
   
    render() {
        return (
            <div align='center'>
                <h1>Products Page</h1><hr/>
                <Link to='/addProduct'>Add Product</Link><br/>
                <Link to='/listProduct'>List Product</Link>
                
            </div>
            
        );
    }
}

export default ProductPage;
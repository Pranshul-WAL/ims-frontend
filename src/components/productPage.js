import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class ProductPage extends Component {
   
    render() {
        return (
            <div align='center'>
                <Link to='/addProduct'>Add Product</Link>
                <Link to='/listProduct'>List Product</Link>
                
            </div>
            
        );
    }
}

export default ProductPage;
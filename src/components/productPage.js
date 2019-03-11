import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class ProductPage extends Component {
   
    render() {
        return (
            <div align='center'>
                <Link to='/add'>Add Product</Link>
                <Link to='/list'>List Product</Link>
                
            </div>
            
        );
    }
}

export default ProductPage;
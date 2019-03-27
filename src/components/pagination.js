import Pagination from 'react-paginate';
import React, { Component } from 'react';

class Paginate extends Component{

    constructor(props) {
        super(props);

        this.pageChange = this.pageChange.bind(this)
    }

    pageChange(e) {
        console.log(e.selected)
    }

    render(){
        return(
            <Pagination
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                pageCount={20}
                onPageChange={this.pageChange}
            />
        )
    }
}

export default Paginate
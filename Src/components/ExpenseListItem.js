import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

export const ExpenseListItem = ({description,id,amount,createdAt,}) => {
    return (
       <div>
       <Link to={`edite/${id}`}>
          <h3>{description}</h3>
       </Link>
        
            <p>{amount}-{createdAt}</p>
           
       </div>
    )
}
export default connect()(ExpenseListItem );
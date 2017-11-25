import React, { Component } from 'react';
import Editbookdetail from './Editbookdetail';
import { Button } from 'reactstrap';


class Bookdetails extends Component {

  state = {
    expanded: false
  }

toggleExpanded = () => {
  this.setState({expanded: !this.state.expanded})
}

  render () {

    return (

      <li>
        {this.props.books.title}
        <Button color="secondary" size="sm" onClick={()=> {this.toggleExpanded()}}>  Details</Button>
        {this.state.expanded ? <Editbookdetail
          books={this.props.books}
          updateBookDetails={this.props.updateBookDetails}
        /> : null}
      </li>

    )
  }
}

export default Bookdetails

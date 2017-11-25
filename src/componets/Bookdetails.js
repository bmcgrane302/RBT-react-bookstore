import React, { Component } from 'react'

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
        <button onClick={()=> {this.toggleExpanded()}}>details</button>
        {this.state.expanded ? <span>{this.props.books.author_first_name}</span> : null}
      </li>

    )
  }
}

export default Bookdetails

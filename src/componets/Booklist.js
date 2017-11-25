import React, { Component } from 'react'
import Bookdetails from './Bookdetails'

class Booklist extends Component {

  bookList() {
    return this.props.books.map(book => {
      return  <Bookdetails  books={book}/>
  })
}


  render () {


    return (


      <div>
       <ul>
         {this.bookList()}
       </ul>
      </div>
    )
  }
}

export default Booklist

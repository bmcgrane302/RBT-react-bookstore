 import React, { Component } from 'react'
 import axios from 'axios';
 import Header from './Header';
 import Footer from './Footer';
 import Booklist from './Booklist';


 class Main extends Component {

   state = {
     books: []
   }

   async componentDidMount() {
    let books = await  axios.get(`https://tmartin-books-api.herokuapp.com/details`)
    this.setState({ books: books.data })
    console.log('book list -', this.state.books);
  }

  updateBookDetails = async (bookinput, id) =>{
   let newBook = {
     ...bookinput
   }
   let newBooks = await axios.patch(`https://tmartin-books-api.herokuapp.com/books/edit/${id}`, newBook)
   this.setState({books: newBooks})
  }



   render () {


     return (

       <div>
         <Header />
         <Booklist
           books={this.state.books}
           updateBookDetails={this.updateBookDetails}
           />
         <Footer />
       </div>
     )
   }
 }

 export default Main

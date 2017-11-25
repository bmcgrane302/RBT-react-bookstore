 import React, { Component } from 'react'
 import axios from 'axios';
 import Header from './Header';
 import Footer from './Footer';


 class Main extends Component {

   state = {
     books: []
   }

   render () {

     return (

       <div>
         <Header />
         <Footer />
       </div>
     )
   }
 }

 export default Main

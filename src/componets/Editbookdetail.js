import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class Editbookdetail extends Component{

  state = {
    title:'',
    year_published:0,

    expanded:false
  }

  editBookState = (e) =>{
    e.preventDefault()
    this.props.updateBookDetails(this.state, parseInt(this.props.books.id))
    console.log('this is local state', this.state);
  }

  editHandler = () =>{
    this.setState({expanded: !this.state.expanded})
  }

  render(){
    return(
      <div>
        <Card className='cardDetail'>
          <CardBody>
            <CardTitle>{`Book Title: ${this.props.books.title}`}</CardTitle>
            <CardSubtitle>{`Author: ${this.props.books.author_first_name}  ${this.props.books.author_last_name}`}</CardSubtitle>
            <CardText>
              Genre: {this.props.books.genre} <br/>
              Publisher: {this.props.books.publisher_name} <br/>
              Year Published: {this.props.books.year_published} <br/>
            </CardText>
            <Button
              onClick={this.editHandler}
              >Edit</Button>

            { this.state.expanded ?
            <form onSubmit={this.editBookState}>
              <input
                placeholder="title"
                name='title'
                value={this.state.title}
                onChange={(e)=> this.setState({title: e.target.value})}
                />
              <input
                placeholder="year published"
                name='year_published'
                value={this.state.year_published}
                onChange={(e)=> this.setState({year_published: e.target.value})}
                 />
               <input type='submit'/>
            </form> : null
          }
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Editbookdetail;

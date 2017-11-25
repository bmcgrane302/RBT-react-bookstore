import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class Editbookdetail extends Component{
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
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Editbookdetail;

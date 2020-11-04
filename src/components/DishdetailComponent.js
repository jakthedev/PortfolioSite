import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from  'reactstrap';

class Dishdetails extends Component{
    // convertDateToCommentDateFormat(timestamp) {
    //     const date = new Date(timestamp);
    //     return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    // }
    renderDish(dish){
        return(
            <div className="row">
                <Card>
                    <CardImg src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    renderComments(comments) {
        if (comments == null || comments.length === 0) {
            return (
                <div></div>
            );
        }

        const renderedComments = comments.map((comment) => {
            return (
                <li>
                    <p>{comment.comment}</p>
                    <p> {comment.author}
                        {/*{this.convertDateToCommentDateFormat(comment.date)}*/}
                    </p>
                </li>
            );
        });

        return (
            <div>
                <h0> About Project </h0>
                <ul className="list-unstyled">
                    { renderedComments }
                </ul>
            </div>
        );
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        { this.renderDish(this.props.dish) }
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        { this.renderComments(this.props.dish.comments) }
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

}
export default Dishdetails;
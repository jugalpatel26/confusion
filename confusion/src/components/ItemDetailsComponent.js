import React from 'react';
import {Card, CardImg, CardText, CardBody,
    CardTitle} from 'reactstrap';
import CommentForm from './CommentForm'
import {Loading} from './LoadingComponent'
import { baseUrl } from '../shared/BaseURL';

function RenderDishDetails({dish}){
  return(
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={baseUrl+dish.image} alt={dish.name} />
        <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}


function RenderDishComments({comment, postComment, dishId}){
  const comments = comment.map((comments) => {
      var a = []
      a.push(<p>{comments.comment}</p>)
      return a; 
  });
  console.log(comment);
  return(
    <div className="col-12 col-md-5 m-1">
      {comments}
      <CommentForm postComment={postComment} dishId={dishId}/>
    </div>
  )
}



function Details(props){
  console.log(props);
  if(props.isLoading || props.commentsLoading){
    return(
      <div className="container">
          <div className="row">            
              <Loading />
          </div>
      </div>
    )

  }
  else if(props.errMess || props.promoErrMess){
    return(
      <div className="container">
          <div className="row">            
              <h4>props.dishesErrMess</h4>
          </div>
      </div>
    )

  }
  else if(props.dish != null){
    return(
      <div className="container">
        <div className="row">
          <RenderDishDetails dish={props.dish} />
          <RenderDishComments comment={props.comments} postComment={props.postComment} dishId={props.dish.id}/>
        </div>
      </div>
    );

  }
  else{
    return(
      <div></div>
    );

  }
}


export default Details;
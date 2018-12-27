import React from 'react';
import { Card, CardImg,CardText, CardBody, CardTitle } from 'reactstrap';

   
   function RenderDish({dish}){
       return(
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
       );  
   }
   function RenderComments({comments}){ 
        comments.map(function(comment){
            return(<ul>
                <li key={comment.id}></li>
                <p>{comment.comment}</p>
                <p>--{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>                            
            </ul>) ;
        });
    }

    const Dishdetail = (props)=>{
    if(props.dishdetail != null){        
        return(            
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dishdetail} />               
                </div>
                <div  className="col-12 col-md-5 m-1">
                    <RenderComments comment = {props.dishdetail.comments}/>
                </div>
            </div>
        );
    }
    else{
        return(<div></div>)
    } 
}   
    
           
export default Dishdetail;
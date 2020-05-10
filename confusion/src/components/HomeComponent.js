import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
import {Loading} from './LoadingComponent'
import { baseUrl } from '../shared/BaseURL';

function RenderCard({data}){
	console.log(data);
	return(
		<Card key={data.id}>
        <CardImg width="100%" src={baseUrl + data.image} alt={data.name} />
         <CardBody>
                <CardTitle>{data.name}</CardTitle>
                <CardText>{data.description}</CardText>
         </CardBody>    
    
    </Card>
	)
}




function Home(props){
	console.log("Home")
	if(props.dishesLoading || props.promoLoading || props.leaderLoading){
		return(
			<div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
		)
	}
	else if(props.dishesErrMess || props.promoErrMess || props.leaderErrMess){
		console.log(props.dishesErrMess)
		return(
			<div className="container">
		        <div className="row">            
		            <h4>error</h4>
		        </div>
		    </div>
	    )
	}
	else{
		console.log(props.dish);
		return(
		<div className="container">
		 <div className="row mb-5">
		 	<div className="col-12 col-md-4">
		 		<RenderCard data={props.dish} />
		 	</div>
		 	<div className="col-12 col-md-4">
		 		<RenderCard data={props.leader} />
		 	</div>
		 	<div className="col-12 col-md-4">
		 		<RenderCard data={props.promotion} />
		 	</div>
		 </div>	
		</div>

	)

	}
	
}

export default Home
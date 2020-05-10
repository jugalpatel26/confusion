import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom'
import {Loading} from './LoadingComponent'
import { baseUrl } from '../shared/BaseURL';

function RenderCard(dish,onDishSelect){
    return(
        <Card>
            <Link to={`/menu/${dish.id}`} > 
            <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            </Link>
        </Card>
    )

}
function Menu(props){
    const menu = props.dishes.map((dish) => {
        return (
            <div  className="col-12 col-md-5 m-1">
                {RenderCard(dish,props.onDishSelect)} 
            </div>
        );
    });

    if(props.isLoading){
    return(
      <div className="container">
          <div className="row">            
              <Loading />
          </div>
      </div>
    )

  }
  else if(props.errMess){
    return(
      <div className="container">
          <div className="row">            
              <h4>props.dishesErrMess</h4>
          </div>
      </div>
    )

  }
  else{
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to={'/home'}>
                        Home
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        Menu
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );

  }

    
}


export default Menu;
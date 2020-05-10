import React,{Component} from 'react';

import Menu from './MenuComponent'
import ItemDetails from './ItemDetailsComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Contact from './ContactComponent'
import Home from './HomeComponent'
import About from './AboutComponent'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import{connect} from 'react-redux'
import { actions } from 'react-redux-form';
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders} from '../redux/ActionCreators';

const mapStateToProps = state =>{
	console.log("mapStateToProps")
	return{
		dishes:state.dishes,
		promotions:state.promotions,
		leaders:state.leaders,
		comments:state.comments

	}
	
} 

  const mapDispatchToProps = dispatch => ({
    //addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes:()=> dispatch(fetchDishes()),
   	resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
   	fetchComments: () => dispatch(fetchComments()),
  	fetchPromos: () => dispatch(fetchPromos()),
  	fetchLeaders: () => dispatch(fetchLeaders()),
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment))
 });



class Main extends Component{
	constructor(props){

		super(props);
		this.home = this.home.bind(this);
		this.renderItemDetailsComponent = this.renderItemDetailsComponent.bind(this);


	}
	componentDidMount(){
		console.log("Mount");
		this.props.fetchDishes();
		this.props.fetchComments();
    	this.props.fetchPromos();
    	this.props.fetchLeaders();
	}
	
    home(){
    	return(
    		<Home dish={this.props.dishes.dishes.filter((d)=>d.featured)[0]}
    		dishesLoading={this.props.dishes.loading}
            dishesErrMess={this.props.dishes.err} 
    		leader={this.props.leaders.leaders.filter((d)=>d.featured)[0]}
    		leaderLoading={this.props.leaders.loading}
    		leaderErrMess={this.props.dishes.err}
    		 promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promoLoading={this.props.promotions.isLoading}
              promoErrMess={this.props.promotions.errMess}
    		/>
    	)
    }
    renderItemDetailsComponent({match}){
    	return(
    		<ItemDetails dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.id,10))[0]}
    		isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}
    		comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.id,10))}
    		commentsLoading={this.props.comments.loading}
        commentsErrMess={this.props.comments.errMess}
        //addComment={this.props.addComment}/>
        postComment={this.props.postComment}/>
    	)

    }

	render(){
		console.log("Main")

		return(
			<div>
				<Header />
				<Switch>
					<Route path="/home" component={this.home} />
					<Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes.dishes}/>} />
					<Route path="/menu/:id" component={this.renderItemDetailsComponent}/>
					<Route exact path="/contactus" component={()=> <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
					<Route exact path="/aboutus" component={()=> <About leaders={this.props.leaders.leaders}/>} />
					<Redirect to="/home" />
				</Switch>
      			<Footer />
    		</div>
		)
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));

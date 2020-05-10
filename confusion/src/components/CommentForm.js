import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody,Label,Row, Col } from 'reactstrap';
import {LocalForm, Control, Errors} from 'react-redux-form';

function CommentForm(props){
	const [modal, setModal] = useState(false);
 	const toggle = () => setModal(!modal);
 	const required = (val) => val;
	const maxLength = (len) => (val) => !(val) || (val.length <= len);
	const minLength = (len) => (val) => val && (val.length >= len);
	function handleSubmit(value) {
        props.postComment(props.dishId,value.rating,value.yourname,value.comment)
    }
 	return(
 		<div>
 			<Button onClick={toggle}>Submit Comment</Button>
		      <Modal isOpen={modal} toggle={toggle}>
		        <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
		        <ModalBody>
		        	<LocalForm onSubmit={(values) => handleSubmit(values)}>
			        	<Row className="form-group">
			        		<Label htmlFor="Rating" md={2}>Rating</Label>
			        	</Row>
			        	<Row className="form-group">	
			        		<Col>
				        		<Control.select model=".rating" className="form-control" defaultValue="1" >
				        			<option value="1">1</option>
	          						<option value="2">2</option>
	          						<option value="3">3</option>
	          						<option value="4">4</option>
	          						<option value="5">5</option>
				        		</Control.select>
			        		</Col>
			        	</Row>
			        	<Row className="form-group">
			        		<Label htmlFor="name" md={2}>Name</Label>
			        	</Row>
			        	<Row className="form-group">	
			        		<Col>
				        		<Control.text model=".yourname" className="form-control" placeholder="Your Name" validators={{
				        			required,maxLength:maxLength(15),minLength:minLength(3)
				        		}}/>
			        		</Col>
			        		 <Errors
                                className="text-danger"
                                model=".yourname"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
			        	</Row>
			        	<Row className="form-group">
			        		<Label htmlFor="comment" md={2}>Comment</Label>
			        	</Row>
			        	<Row className="form-group">	
			        		<Col>
				        		<Control.textarea model=".comment" className="form-control" validators={{
				        			required
				        		}}/>
				        		<Errors
                                className="text-danger"
                                model=".comment"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                }}
                           		/>
			        		</Col>
			        	</Row>
			        	<Button color="primary" type="submit" onClick={toggle}>Submit</Button>
		        	</LocalForm>
		         	
		        </ModalBody>
		      </Modal>
 		</div>
 	)
}


export default CommentForm;
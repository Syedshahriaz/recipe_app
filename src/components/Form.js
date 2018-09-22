import React from 'react';

const Form = props =>{
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-4 offset-md-4 col-sm-12">
					<form onSubmit={props.getRecipeResult} className="searchForm m-3">
					  <div className="input-group mb-3">
						  	<input type="text" className="form-control" name="recipeSearchForm" placeholder="Enter Recipe Name..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
						  	<div className="input-group-append">
						    	<button className="btn btn-primary" type="submit">Search</button>
						  	</div>
						</div>
					</form>
				</div>	
			</div>	
		</div>
	)
}

export default Form;
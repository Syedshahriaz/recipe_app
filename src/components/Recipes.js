import React from 'react';
import { Link } from "react-router-dom";

const Recipes = props =>{
	return(
	<div className="container">
		<div className="row">
		{
			props.recipes.map((recipe) => {
				return(
					<div key={recipe.recipe_id} className="col-sm-4">
						<div className="card recipe-card">
						  	<img className="card-img-top" src={recipe.image_url} alt={recipe.title} />
						  	<div className="card-body">
						    	<h5 className="card-title">{recipe.title}</h5>
						    	<p className="card-text"><b>Publisher:</b> {recipe.publisher}</p>

					            <Link className="btn btn-outline-primary" to={{ 
					                pathname: `/recipe/${recipe.recipe_id}`,
					                state: { recipe: recipe.title }
					            }}>View Recipe</Link>
						  	</div>
						</div>
					</div>
				);
			})
		}
		</div>
	</div>
	);
}

export default Recipes;
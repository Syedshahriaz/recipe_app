import React from 'react';

import { Link } from "react-router-dom";

const API_KEY = "fc9a90b025f8bedd1b91a827e3f54c92";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  }
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
    console.log(this.state.activeRecipe);
  }
  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div>
        <header className="App-header">
            <h1 className="App-title"><Link to="/">Recipe Ap</Link></h1>
        </header>

        <div className="container">
          <div className="row">
            { this.state.activeRecipe.length !== 0 &&
              <div className="active-recipe col-md-10 offset-md-1">
                <div className="card">
                  <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
                  <div className="card-body text-center">
                    <h3 className="active-recipe__title">{ recipe.title }</h3>
                    <p className="active-recipe__publisher">
                      <b>Publisher:</b> <span>{ recipe.publisher }</span>
                    </p>
                    <p className="active-recipe__website"><b>Website:</b>  
                      &nbsp;<span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
                    </p>
                    <p className="active-recipe__details"><b>Details:</b>  
                      &nbsp;<span><a href={recipe.source_url}>{recipe.source_url}</a></span>
                    </p>
                    <Link className="active-recipe__button btn btn-outline-primary" to="/">Go Home</Link>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
};

export default Recipe;
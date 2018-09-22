import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import Form from './components/Form';
import Recipes from './components/Recipes';

const api_key = "fc9a90b025f8bedd1b91a827e3f54c92";
class App extends Component {
  state = {
    recipes: []
  }

  getRecipeResult = async (e) => {
    const recipeSearchForm = e.target.elements.recipeSearchForm.value;
    e.preventDefault();
    console.log(recipeSearchForm);

    const api_call = await fetch(`http://food2fork.com/api/search?key=${api_key}&q=${recipeSearchForm}&count=12`);

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    //console.log(this.state.recipes);
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><Link to="/">Recipe Ap</Link></h1>
        </header>
        <Form getRecipeResult={this.getRecipeResult}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;

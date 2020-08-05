import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginComponent from './components/login/login';
import Header from './components/header/header';
import RecipeDetailsContainer from './components/recipe-details/recipe-details-container';
import FilteredRecipes from './components/filtered-recipes/filtered-recipes';
import CategoryGrid from './components/categories';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store';
import ProtectedRoute from './hoc/authorized';
import categories from './components/categories';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Provider store={store}>
            <Switch>
              <ProtectedRoute exact path="/" component={categories} />
              <Route path="/login" component={LoginComponent} />
              <ProtectedRoute exact path="/categories" component={CategoryGrid} />
              <ProtectedRoute
                path="/recipes/:filter"
                component={FilteredRecipes}
              />
              <ProtectedRoute
                path="/recipe-details/:id"
                component={RecipeDetailsContainer}
              />
              <Route path="*" component={() => '404 Not Found'} />
            </Switch>
          </Provider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

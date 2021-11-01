import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Books from './Components/Books/Books';
import BookInput from './Components/Books/BookInput';
import Categories from './Components/Categories/Categories';
import Navigation from './Components/Navigation/Navigation';

const App = () => (
  <div>

    <Router>
      <Navigation />
      <h1> Welcome to Bookstore ! </h1>
      <Switch>
        <Route exact path="/">
          <Books />
          <BookInput />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>

  </div>
);

export default App;

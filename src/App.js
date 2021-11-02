import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './Components/Books/Books';
import BookInput from './Components/Books/BookInput';
import Categories from './Components/Categories/Categories';
import Navigation from './Components/Navigation/Navigation';
import store from './redux/configureStore';

const App = () => (
  <div>
    <Provider store={store}>
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
    </Provider>

  </div>
);

export default App;

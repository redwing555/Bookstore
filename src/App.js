import React from 'react';
import './App.css';
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

        <Switch>
          <Route exact path="/">
            <Books className="books" />
            <span className="form-title"> ADD NEW BOOK</span>
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

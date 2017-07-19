import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, hashHistory} from 'react-router';
import App from './App';
import './main.less'

import Index from './src/index';
import Company from './src/components/company';
import Goods from './src/components/goods';
import Shop from './src/components/shop';
import News from './src/components/news';
import Contact from './src/components/contact';


export default class Rout extends React.Component {
  render() {
    return (
      <div>
          <Router history={hashHistory}>
            <Route path='/' component={Index}/>
            <Route path='/company' component={Company}/>
      			<Route path='/goods' component={Goods}/>
      			<Route path='/shop' component={Shop}/>
      			<Route path='/news' component={News}/>
            <Route path='/contact' component={Contact}/>
          </Router>
      </div>
    );
  };
}

ReactDOM.render(<Rout />, document.getElementById('app'));
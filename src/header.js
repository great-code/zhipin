import React from 'react';
import {Route, Link,IndexLink, browserHistory} from 'react-router';
import './css/common.less'

export default class Header extends React.Component {

  render() {
    return (
      <div className="navbox">
      <div className="nav">
        <a href="/" className="logo" ><img src="./src/img/newlogo.png" /></a>
        <ul className="nav_ul">
            <li><IndexLink to='/' activeClassName='header_curPage'>首页</IndexLink></li>
            <li><Link to='company11' activeClassName='header_curPage'>当季热销</Link></li>
            <li><Link to='goods' activeClassName='header_curPage'>专属定制</Link></li>
            <li><Link to='shop' activeClassName='header_curPage'>所有产品</Link></li>
            <li><Link to='company' activeClassName='header_curPage'>公司简介</Link></li>
            <li><Link to='contact' activeClassName='header_curPage'>联系我们</Link></li>
        </ul>
      </div>
      </div>
    );
  };
}

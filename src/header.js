import React from 'react';
import {Route, Link,IndexLink, browserHistory} from 'react-router';
import './css/common.less'

export default class Header extends React.Component {

  render() {
    return (
      <div className="nav">
        <a href="/" className="logo" ></a>
        <ul className="nav_ul">
            <li><IndexLink to='/' activeClassName='header_curPage'>首页</IndexLink></li>
            <li><Link to='company' activeClassName='header_curPage'>公司简介</Link></li>
            <li><Link to='goods' activeClassName='header_curPage'>百分商城</Link></li>
            <li><Link to='shop' activeClassName='header_curPage'>企业采购</Link></li>
            <li><Link to='news' activeClassName='header_curPage'>平台资讯</Link></li>
        </ul>
      </div>
    );
  };
}

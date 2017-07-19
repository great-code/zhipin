import React from 'react';
import Header from '../header'
import Footer from '../footer';
import '../css/style.less'

export default class Contact extends React.Component {

  render() {
    return (
      <div>
      	<Header />
      	<div className="contaient cont-head">
          <div className="head-textarea">
            <p>发布需求</p>
            <textarea placeholder="请填写您的需求">
            </textarea>
          </div>
          <div className="head-input">联系人电话 ： <input type="text" placeholder="请填写您的联系方式" /></div>
          <div className="head-input">联系人姓名 ： <input type="text" placeholder="请填写您的姓名" /></div>
          <a className="head-a" href="###" >提交</a>
        </div>
      	
      	<div className="contaient cont-head cont-conent">
          <h3>联系方式</h3>
          <p>浙江大时代信息咨询服务有限公司</p>
          <p>地址： 北京市海淀区清河中街68号 华润五彩城写字楼</p>
          <p>邮编： 100085</p>
          <p>热线： 400-669-1761</p>
      	</div>
      	<Footer />
      </div>
    );
  };
}

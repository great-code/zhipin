import React from 'react';
import './css/common.less'

export default class Footer extends React.Component {

  render() {
    return (
      <div className="footerBox">
      <div className="nav footer">
        <div className="foo-left">
          <h3>联系我们</h3>
          <p>工作时间：09:30 - 18:30（包括法定节假日）</p>
          <p>客服热线：400-669-1761</p>
          <p>微信服务号：dashidai（大时代）</p>
        </div>
        <div className="foo-right">
            <img src="./src/img/ewm.jpg" />
            关注微信公众号
        </div>
      </div>
      <div className="companey">浙江大时代信息咨询服务有限公司  版权所有 &nbsp;&nbsp;浙ICP备14007143号 &nbsp;&nbsp; 浙公网安备 33010002000120号</div>
      </div>
    );
  };
}

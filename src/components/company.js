import React from 'react';
import Header from '../header'
import Footer from '../footer';
import '../css/style.less'

export default class Company extends React.Component {

  render() {
    return (
      <div>
      	<Header />
      	<div className="banner-comp"></div>
      	<div className="articl">
      		<h2>公司简介 <span>Company Profile</span></h2>
      		<p>织品汇，是一家采用麻、丝、毛、棉的纤维为原料，纺绩(纺沙、辑绩、缫丝)加工成纱线后经编织(挑织)和机织而成的布帛，通常称纺织品。不同时期的纺织品是衡量人类进步和文明发达的尺度之一。中国早在新石器时代就已经掌握了纺织技术。中国古代的丝麻纺织技术，已达到相当高的水平，在世界上享有盛名。古罗马帝国最早是通过“丝绸之路”上丝织品的传播，称中国为“丝之国”的。</p>
      		<p>新石器时代  浙江余姚河姆渡遗址(距今约7000年)发现有苘麻的双股线，在出土的牙雕盅上刻划着4条蚕纹，同时出土了纺车和纺机零件。江苏吴县草鞋山遗址(距今约6000年)出土了编织的双股经线的罗(两经绞、圈绕起菱纹)地葛布，经线密度为10根／厘米，纬线密度地部为13～14根／厘米，纹部为26～28根／厘米，是最早的葛纤维纺织品。河南郑州青台遗址(距今约5500年)发现了粘附在红陶片上的苎麻和大麻布纹、粘在头盖骨上的丝帛和残片，以及10余枚红陶纺轮，这是最早的丝织品实物。浙江吴兴钱山漾遗址(距今5000年左右)出土了精制的丝织品残片，丝帛的经纬密度各为48根／厘米，丝的拈向为Z拈；丝带宽5毫米，用16根粗细丝线交编而成；丝绳的投影宽度约为3毫米，用3根丝束合股加拈而成，拈向为S拈，拈度为35个／10厘米。这表明当时的缫丝、合股、加拈等丝织技术已有一定的水平。同时出土的多块苎麻布残片，经密24～31根／厘米，纬密16～20根／厘米，比草鞋山葛布的麻纺织技术更进一步。</p>
      	</div>
      	<div className="contaient comp-img">
      		<p><img src="./src/img/comp_1.png" /></p>
      		<p>
      			<img src="./src/img/comp_2.png" />
      			<img src="./src/img/comp_3.png" />
      			<img src="./src/img/comp_4.png" />
      			<img src="./src/img/comp_5.png" />
      			<img src="./src/img/comp_6.png" />
      			<img src="./src/img/comp_7.png"  />
      		</p>
      	</div>
      	<div className="contaient com-foot">
      		<h3>联系我们</h3>
      		<p>联系电话：400-669-1761</p>
      		<img src="./src/img/comp_8.jpg" />
      	</div>
      	<Footer />
      </div>
    );
  };
}

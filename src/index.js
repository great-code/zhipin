import React from 'react';
import Header from './header';
import Footer from './footer';
//import Container from './container';

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <p>首页</p>
                <Footer />
            </div>
        )
    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import IconDemo from './lib/icon/icon.demo';
import ButtonExample from './lib/button/button.example';
import DialogDemo from './lib/dialog/dialog.demo';
import LayoutDemo from './lib/layout/layout.demo';
import {
  Layout,
  Header,
  Content,
  Aside,
  Footer,
} from './lib/layout/layout.component';

import './example.scss';

// FIXME: TS can't recognise .png
// @ts-ignore
import logo from './logo.png';

ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="site-logo">
          <img src={logo} alt="sui" width="48" height="48" />
          <span>SUI</span>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>Components</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-content">
          <Route path="/icon" component={IconDemo} />
          <Route path="/button" component={ButtonExample} />
          <Route path="/dialog" component={DialogDemo} />
          <Route path="/layout" component={LayoutDemo} />
        </Content>
      </Layout>
      <Footer className="site-footer">&copy; Yujie Wu</Footer>
    </Layout>
  </Router>,
  document.getElementById('root')
);

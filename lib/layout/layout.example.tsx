import React from 'react';
import Aside from './aside.component';
import Content from './content.component';
import Footer from './footer.component';
import Header from './header.component';
import Layout from './layout.component';

import './layout.example.styles.scss';

export default function () {
  return (
    <div>
      <div>
        <h1>Example 1</h1>
        <Layout style={{ height: 500, width: 500 }}>
          <Header className="x">header</Header>
          <Content className="y">content</Content>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>Example 2</h1>
        <Layout style={{ height: 500, width: 500 }}>
          <Header className="x">header</Header>
          <Layout>
            <Aside className="z">aside</Aside>
            <Content className="y">content</Content>
          </Layout>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>Example 3</h1>
        <Layout style={{ height: 500, width: 500 }}>
          <Header className="x">header</Header>
          <Layout>
            <Content className="y">content</Content>
            <Aside className="z">aside</Aside>
          </Layout>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>Example 4</h1>
        <Layout style={{ height: 500, width: 500 }}>
          <Aside className="z">aside</Aside>
          <Layout>
            <Header className="x">header</Header>
            <Content className="y">content</Content>
            <Footer className="x">footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}

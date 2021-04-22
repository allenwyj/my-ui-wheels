import React from 'react';
import Aside from './aside.component';
import Content from './content.component';
import Footer from './footer.component';
import Header from './header.component';
import Layout from './layout.component';

export default function () {
  return (
    <div>
      <div>
        <h1>Example 1</h1>
        <Layout className={'hi'} style={{ height: 500 }}>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>Example 2</h1>
        <Layout className={'hi'} style={{ height: 500 }}>
          <Header>header</Header>
          <Layout>
            <Aside>aside</Aside>
            <Content>content</Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>Example 3</h1>
        <Layout className={'hi'} style={{ height: 500 }}>
          <Header>header</Header>
          <Layout>
            <Content>content</Content>
            <Aside>aside</Aside>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>Example 4</h1>
        <Layout className={'hi'} style={{ height: 500 }}>
          <Aside>aside</Aside>
          <Layout>
            <Header>header</Header>
            <Content>content</Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}

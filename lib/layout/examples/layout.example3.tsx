import React from 'react';
import Aside from '../aside.component';
import Content from '../content.component';
import Footer from '../footer.component';
import Header from '../header.component';
import Layout from '../layout.component';

import './layout.example.styles.scss';

export default function () {
  return (
    <>
      <h1>Example 3</h1>
      <Layout style={{ height: 500, width: 500 }}>
        <Header className="x">header</Header>
        <Layout>
          <Content className="y">content</Content>
          <Aside className="z">aside</Aside>
        </Layout>
        <Footer className="x">footer</Footer>
      </Layout>
    </>
  );
}

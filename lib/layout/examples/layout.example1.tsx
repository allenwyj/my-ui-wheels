import React from 'react';
import Content from '../content.component';
import Footer from '../footer.component';
import Header from '../header.component';
import Layout from '../layout.component';

import './layout.example.styles.scss';

export default function () {
  return (
    <>
      <h1>Example 1</h1>
      <Layout style={{ height: 500, width: 500 }}>
        <Header className="x">header</Header>
        <Content className="y">content</Content>
        <Footer className="x">footer</Footer>
      </Layout>
    </>
  );
}

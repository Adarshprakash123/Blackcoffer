import React from 'react';
import { Layout } from 'antd';
import Dashboard from './components/Dashboard.jsx';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#001529', color: '#fff', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', margin: 0 }}>Analytics Dashboard</h1>
      </Header>
      <Content style={{ padding: '20px 50px', backgroundColor: '#f0f2f5' }}>
        <Dashboard />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2024 Analytics Dashboard - Created by Adarsh Prakash
      </Footer>
    </Layout>
  );
};

export default App;

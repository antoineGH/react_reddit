import React from 'react'
import { Layout } from 'antd'
import TopBarComponent from 'components/topBarComponent/TopBarComponent'
import PostsComponent from 'components/postsComponent/PostsComponent'
import './App.css'

function App() {
  const { Header, Content } = Layout

  return (
    <div className="App">
      <Layout>
        <Header className="class-header">
          <TopBarComponent />
        </Header>
        <Content className="class-content">
          <PostsComponent />
        </Content>
      </Layout>
    </div>
  )
}

export default App

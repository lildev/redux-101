import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import PostList from './PostList';

function App() {
  return (
    <div className="app-container">
      <Header as='h1' attached='top'>
        Posts
      </Header>
      <Segment attached>
        <PostList/>
      </Segment>
    </div>
  );
}

export default App;

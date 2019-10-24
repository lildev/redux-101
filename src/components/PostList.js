import React from 'react';
import { connect } from 'react-redux';
import jsonPlaceholder from '../apis/jsonPlaceholder';
import { fetchPost } from '../actions';
import { List, Segment } from 'semantic-ui-react';
import { Loader } from 'semantic-ui-react';

class PostList extends React.Component {
  async componentDidMount() {
    const response = await jsonPlaceholder.get('/posts');
    this.props.fetchPost(response.data)
  }

  getPosts = () => {
    console.log(this.props.posts)
   
    if(this.props.posts === null) {
      return <Loader active inline='centered'>Loading</Loader>
    }else {
      return(
        <List divided inverted relaxed>
          {
            this.props.posts.map(post => {
              return (
                <List.Item key={post.id}>
                  <List.Content>
                    <List.Header as='h2'>{post.title}</List.Header>
                    {post.body}
                  </List.Content>
                </List.Item>
              )
            })
          }
        </List>
     )
    }
  }

  render() {
    return (
      <Segment attached>
        <Segment inverted>
          {this.getPosts()}
        </Segment>
      </Segment>
    )
  }
}
const mapStateToProps = (state) => {
  return { 
    posts: state.posts 
  };
}
export default connect(mapStateToProps, { fetchPost })(PostList);
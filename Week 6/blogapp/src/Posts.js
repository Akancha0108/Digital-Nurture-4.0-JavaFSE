import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  async loadPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
     
      const postsData = data.map(item => new Post(item.id, item.title, item.body));
      this.setState({ posts: postsData });
    } catch (error) {
      console.error("Error fetching posts:", error);
      this.setState({ error: error.message });
    }
  }
  componentDidMount() {
    this.loadPosts();
  }
  componentDidCatch(error, info) {
   
    console.error("Caught an error:", error, info);
    alert(`An error occurred: ${error.message}`);
    this.setState({ error: error.message }); // Optionally set error state to render a message
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <div>Error: {error}</div>;
    }
    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
  
}

export default Posts;
import React, { Component } from 'react';
import './Post.css';
class Post extends Component {
  constructor(props){
    super(props);
    this.state = { name: this.props.name || "news" }
  }

  componentDidMount(){
      fetch('https://www.reddit.com/r/' + this.state.name + '.json')
      .then(results => {
        return results.json();
      }).then(data => {
        let posts = data.data.children.map(post => {
          return (
            <div key={post.results}>
              <a href={post.data.url}> {post.data.title} </a>
            </div>
          )
        })
        this.setState({posts: posts});
    })
  }

  render(){
    return (
      <div className="Post">
        {this.state.posts}
      </div>
    );
  }

};

export default Post;

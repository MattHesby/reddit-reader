import React, { Component } from 'react';
import './PostList.css';
import AddSubreddit from './AddSubreddit.js';
import Post from './Post.js';

class PostList extends Component {
  constructor(props){
    super(props);
    this.state = { subReddits: ['news']};
    this.addSubreddit = this.addSubreddit.bind(this);
    this.removeSubreddit = this.removeSubreddit.bind(this);
  }

  addSubreddit(newReddit) {
    this.setState( {subReddits: [...this.state.subReddits, newReddit]});
  }

  removeSubreddit(removeName) {
    const filteredReddits = this.state.subReddits.filter(name => {
      return name!==removeName;
    })
    this.setState( {subReddits: filteredReddits});
  }

  renderSubReddits() {
  return this.state.subReddits.map(name => (
    <Post
    key={name}
    name={name}
    />
  ));
  }

  renderCurrentList(){
    return (
      <div className="currentList">
        <h3> Current Subreddits </h3>
        {this.state.subReddits + " "}
      </div>
    )
  }

  render () {
    return (
      <div className="PostList">
        <AddSubreddit addSubreddit={this.addSubreddit} removeSubreddit={this.removeSubreddit}/>
        {this.renderCurrentList()}
        {this.renderSubReddits()}
      </div>
    )
  }
}


export default PostList;

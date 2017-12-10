import React, { Component } from 'react';
import './AddSubreddit.css';

class AddSubreddit extends Component {

  constructor(props){
    super(props);
    this.state = { subredditName: ''};
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addSubreddit = this.addSubreddit.bind(this);
    this.removeSubreddit = this.removeSubreddit.bind(this);
  }

  handleUpdate(event){
    this.setState( { subredditName: event.target.value} );
  }

  addSubreddit() {
    this.props.addSubreddit(this.state.subredditName);
    this.setState({ subredditName: '' });
  }

  removeSubreddit(){
    this.props.removeSubreddit(this.state.subredditName);
    this.setState({subredditName: ''})
  }

  render(){
    return (
      <div className='AddSubreddit'>
        <h3> Add or Remove a Subreddit </h3>
        <input type='text' onChange={this.handleUpdate} value={this.state.subredditName}/>
        <button onClick={this.addSubreddit}> Add </button>
        <button onClick={this.removeSubreddit}> Remove </button>
      </div>
    )
  }
}

export default AddSubreddit;

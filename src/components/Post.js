import React, { Component } from 'react';

class Post extends Component {
  render() {
    console.log(this.props.data.author.name);
    return (
      <div className="container">
        <div className="post">
          <div className="author">
            <img src="" alt="" />
            <b>{this.props.data.author.name}</b>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;

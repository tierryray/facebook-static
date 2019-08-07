import React, { Component } from 'react';

import Comment from './Comment';

class Post extends Component {
  render() {
    console.log(this.props.data.author.name);
    return (
      <div className="container">
        <div className="box">
          <div className="post">
            <div className="post-header">
              <img src={this.props.data.author.avatar} alt="" />
              <div className="post-info">
                <b>{this.props.data.author.name}</b>
                <p className="date">{this.props.data.date}</p>
              </div>
            </div>
            <div className="content">
              <p>{this.props.data.content}</p>
            </div>
          </div>
          {this.props.data.comments.map(comment => (
            <Comment key={comment.id} data={comment} />
          ))}
        </div>
      </div>
    );
  }
}

export default Post;

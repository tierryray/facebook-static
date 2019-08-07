import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <img src={this.props.data.author.avatar} alt="" />
        <div className="comment-info">
          <strong>{this.props.data.author.name}</strong>{' '}
          {this.props.data.content}
        </div>
      </div>
    );
  }
}

export default Comment;

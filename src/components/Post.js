import React, { Component } from 'react';

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
        </div>
      </div>
    );
  }
}

export default Post;

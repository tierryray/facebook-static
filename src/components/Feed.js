import React, { Component } from 'react';

import Post from './Post';

class Feed extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Marquinho Zuckerberg',
          avatar: 'https://api.adorable.io/avatars/40/abott@adorable.png',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://api.adorable.io/avatars/40/Tierry.png',
            },
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Steve Jobson',
          avatar: 'https://api.adorable.io/avatars/40/Diego.png',
        },
        date: '04 Jun 2019',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://api.adorable.io/avatars/40/Lucas.png',
            },
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
        ],
      },
    ],
  };

  render() {
    return (
      <div className="container">
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default Feed;

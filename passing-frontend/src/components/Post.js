import React, { Component } from 'react';
import '../App.css';

class Post extends Component {
  render() {
    return (
      <div className="Post">
        <div className="post-title">
          WHO DID YOU MISS?
          </div>
          <div className="form-inline">
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Speak from the heart..."
              />
            <button
              type="button"
              className="btn btn-success"
              >
              POST
            </button>
            </div>
          </div>
         </div>

    );
  }
}

export default Post;

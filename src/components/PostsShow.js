import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PostsShow extends Component {
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/" className="btn btn-primary">
            Back to index
          </Link>
        </div>
        PostsShow
      </div>
    );
  }
}

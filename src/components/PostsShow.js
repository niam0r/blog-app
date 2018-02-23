import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params; // grab post from the url
    this.props.fetchPost(id);
  }

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

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);

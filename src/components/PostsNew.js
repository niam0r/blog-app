import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderTitleField(field) {
    return (
      <div className="form-group">
        <label>Title:</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/" className="btn btn-primary">
            Back to index
          </Link>
        </div>
        <form >
          <Field
            name="title"
            component={this.renderTitleField}
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);

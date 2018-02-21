import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{label}</label>
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
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
        </form>
      </div>
    );
  }
}

function validate(values) {
  // values is post object
  const errors = {};

  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters";
  }
  if (!values.categories) {
    errors.categories = "Enter at least one categorie!";
  }
  if (!values.content) {
    errors.content = "The post is empty!";
  }
  // if errors is empty, the form is fine to submit
  // if errors as any prpoerties, redux assume form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);

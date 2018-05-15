import React from 'react'

export default class AddIdea extends React.Component {
  state = {};
  handleChange = ({ target: { name, value }}) => this.setState({[name]: value});
  addIdea = (event) => {
    event.preventDefault();
    this.props.addIdea(this.state);
  }

  render() {
    return (
      <form onSubmit={this.addIdea}>
        <input name="title" type="text" onChange={this.handleChange} />
        <input name="shortDescription" type="text" onChange={this.handleChange} />
        <input name="description" type="textarea" onChange={this.handleChange} />
        <input name="image" type="text" onChange={this.handleChange} />
        <input name="target" type="number" onChange={this.handleChange} />
        <button type="submit">Add</button>
      </form>
    )
  }
}

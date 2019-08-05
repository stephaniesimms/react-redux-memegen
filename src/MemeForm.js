import React, { Component } from "react";
import uuidv4 from "uuid/v4";


class MemeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      topText: "",
      bottomText: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addMeme({ ...this.state, id: uuidv4() });
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log("this.state", this.state)
    return (
      <div className="MemeForm">
        <h1>MemeMaker</h1>
        <p>Fill out the form to make instant memes!</p>
        
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="url">Image URL</label>
          <input
            type="text"
            name="url"
            id="MemeForm-url"
            onChange={this.handleChange}
            value={this.state.url}
          />
          <label htmlFor="topText">Text on top</label>
          <input
            type="text"
            name="topText"
            id="MemeForm-topText"
            onChange={this.handleChange}
            value={this.state.topText}
          />
          <label htmlFor="bottomText">Text on bottom</label>
          <input
            type="text"
            name="bottomText"
            id="MemeForm-bottomText"
            onChange={this.handleChange}
            value={this.state.bottomText}
          />
          <button type="submit" id="MemeForm-submit">
            Make meme
          </button>

        </form>
      </div>
    );
  }
}

export default MemeForm;
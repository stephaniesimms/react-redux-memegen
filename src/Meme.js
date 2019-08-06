import React, { Component } from "react";


class Meme extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteMeme = this.handleDeleteMeme.bind(this);
  }

  handleDeleteMeme() {
    this.props.deleteMeme(this.props.id);
  }

  render() {
    const { topText, bottomText, url } = this.props;

    return (
      <div className="Meme">
        <div className="container">
          <p className="Meme-topText">{topText}</p>
          <img src={url} alt="meme" />
          <p className="Meme-bottomText">{bottomText}</p>
          
          <button id="deleteBtn" onClick={this.handleDeleteMeme}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Meme;
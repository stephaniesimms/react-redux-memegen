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
          <span className="Meme-topText">{topText}</span>
          <img src={url} alt="meme" />
          <span className="Meme-bottomText">{bottomText}</span>
          <button id="deleteBtn" onClick={this.handleDeleteMeme}>
            DELETE
          </button>
        </div>
      </div>
    );
  }
}

export default Meme;
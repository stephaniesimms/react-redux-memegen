import React, { Component } from "react";
// import "./App.css";
import { connect } from "react-redux";
import { addMeme, removeMeme } from "./actions";
import MemeForm from "./MemeForm";
import Meme from "./Meme";


class App extends Component {
  constructor(props) {
    super(props);
    this.addMeme = this.addMeme.bind(this);
    this.deleteMeme = this.deleteMeme.bind(this);
  }

  addMeme(newMeme) {
    this.props.dispatch(addMeme(newMeme));
  }

  deleteMeme(id) {
    this.props.dispatch(removeMeme(id));
  }

  render() {
    return (
      <div className="App">
        <MemeForm addMeme={this.addMeme}></MemeForm>

        {this.props.memes.map(m => (
          <Meme
            key={m.id}
            url={m.url}
            topText={m.topText}
            bottomText={m.bottomText}
            deleteMeme={() => this.deleteMeme(m.id) }
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    memes: state.memes
  };
}

export default connect(mapStateToProps)(App);